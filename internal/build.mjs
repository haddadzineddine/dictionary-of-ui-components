#!/usr/bin/env node
// Validates dictionary entries and generates README.md.
// Usage: node internal/build.mjs [--check]
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dictionaryDir = join(root, "dictionary");
const checkOnly = process.argv.includes("--check");
const MAX_DESCRIPTION = 139;
const MIN_WORDS = 200;
const BANNED = [
  /\bthe core\b/i,
  /\bcore (idea|concept|value|point|insight)\b/i,
  /\bwhole value\b/i,
  /\breal power\b/i,
  /\bstraight into\b/i,
  /\bgame[- ]chang/i,
  /\bblazing/i,
  /\bseamless/i,
  /you'll recogni[sz]e the moment/i,
  /that's the signal to/i,
];

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;
const errors = [];

function anchor(term) {
  return term
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .trim()
    .replace(/ /g, "-");
}

function parseCurriculum() {
  const sections = [];
  const text = readFileSync(join(root, "internal/Curriculum.md"), "utf8");
  for (const line of text.split("\n")) {
    if (line.startsWith("## ")) sections.push({ title: line.slice(3).trim(), terms: [] });
    else if (line.startsWith("- ")) sections.at(-1).terms.push(line.slice(2).trim());
  }
  return sections;
}

function parseEntry(term) {
  const raw = readFileSync(join(dictionaryDir, `${term}.md`), "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n+([\s\S]*)$/);
  if (!match) {
    errors.push(`${term}: missing frontmatter`);
    return { term, description: "", body: raw.trim() };
  }
  const line = match[1].split("\n").find((l) => l.startsWith("description:"));
  const value = line ? line.slice("description:".length).trim() : "";
  const quoted = /^".*"$/.test(value);
  if (!quoted && value.includes(": ")) errors.push(`${term}: quote a description containing a colon`);
  return { term, description: value.replace(/^"|"$/g, ""), body: match[2].trim() };
}

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function validate(entry, terms) {
  const { term, description, body } = entry;
  if (!description) errors.push(`${term}: missing description`);
  if (description.length > MAX_DESCRIPTION) errors.push(`${term}: description is ${description.length} chars`);
  if (!body.includes("_Usage:_")) errors.push(`${term}: missing _Usage:_ dialogue`);

  const prose = body.replace(/```[\s\S]*?```/g, "");
  const words = prose
    .replace(LINK, "$1")
    .replace(/[|*_`#-]+/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  if (words < MIN_WORDS) errors.push(`${term}: ${words} words`);
  for (const pattern of BANNED) {
    if (pattern.test(prose.replace(LINK, "$1"))) errors.push(`${term}: banned phrase ${pattern}`);
  }

  const seen = new Set();
  for (const link of prose.matchAll(LINK)) {
    const href = link[2];
    if (/^https?:/.test(href)) {
      errors.push(`${term}: external link ${href}`);
      continue;
    }
    if (!href.startsWith("./") || !href.endsWith(".md")) {
      errors.push(`${term}: invalid link ${href}`);
      continue;
    }
    const target = decodeURIComponent(href.slice(2, -3));
    if (!terms.has(target)) errors.push(`${term}: broken link ${href}`);
    if (target === term) errors.push(`${term}: links to itself`);
    if (seen.has(target)) errors.push(`${term}: repeated link to ${target}`);
    seen.add(target);

    const before = prose.slice(0, link.index).replace(LINK, " ");
    const mention = new RegExp(`(^|[^\\p{L}\\p{N}])${escapeRegex(target)}(s|es)?(?![\\p{L}\\p{N}])`, "iu");
    if (mention.test(before)) errors.push(`${term}: link to ${target} is not on its first occurrence`);
  }
}

function render(sections, entries) {
  const toc = sections
    .map((section) => {
      const items = section.terms.map((t) => `  - [${t}](#${anchor(t)})`).join("\n");
      return `- **[${section.title}](#${anchor(section.title)})**\n${items}`;
    })
    .join("\n");
  const curriculum = sections
    .map((section) => {
      const blocks = section.terms.map((t) => {
        const body = entries.get(t).body.replace(LINK, (whole, label, href) => {
          if (!href.startsWith("./")) return whole;
          return `[${label}](#${anchor(decodeURIComponent(href.slice(2, -3)))})`;
        });
        return `### ${t}\n\n${body}`;
      });
      return `## ${section.title}\n\n${blocks.join("\n\n")}`;
    })
    .join("\n\n");
  return readFileSync(join(root, "internal/README.template.md"), "utf8")
    .replace("<!-- TOC -->", () => toc)
    .replace("<!-- CURRICULUM -->", () => curriculum)
    .trimEnd()
    .concat("\n");
}

const sections = parseCurriculum();
const listed = sections.flatMap((s) => s.terms);
const terms = new Set(listed);
if (terms.size !== listed.length) errors.push("Curriculum contains duplicate terms");
const files = readdirSync(dictionaryDir).filter((f) => f.endsWith(".md")).map((f) => f.slice(0, -3));
for (const file of files) if (!terms.has(file)) errors.push(`${file}: not in Curriculum`);

const entries = new Map();
for (const term of terms) {
  if (!existsSync(join(dictionaryDir, `${term}.md`))) {
    errors.push(`${term}: missing entry`);
    continue;
  }
  const entry = parseEntry(term);
  entries.set(term, entry);
  validate(entry, terms);
}

if (errors.length) {
  console.error(errors.join("\n"));
  console.error(`\n${errors.length} problem(s) across ${terms.size} terms`);
  process.exit(1);
}

const readme = render(sections, entries);
const readmePath = join(root, "README.md");
if (checkOnly) {
  if (!existsSync(readmePath) || readFileSync(readmePath, "utf8") !== readme) {
    console.error("README.md is out of date. Run: npm run generate");
    process.exit(1);
  }
} else {
  writeFileSync(readmePath, readme);
}
console.log(`OK: ${terms.size} entries`);
