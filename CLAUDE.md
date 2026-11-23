README.md is generated from internal/README.template.md, internal/Curriculum.md and dictionary/. Run `npm run generate`. Never edit it by hand.

Run `npm run check` before committing. It enforces the mechanical rules below.

Scope: the parts of a user interface: controls, forms, navigation, overlays, feedback, data display, layout foundations, component APIs and interaction states.

New entries go in dictionary/ and must be listed in internal/Curriculum.md.

Each entry has a `description` in its frontmatter, under 140 characters.

Each entry has at least 200 words, counting the body and the Usage dialogue. Reach the minimum with substance: mechanism, symptom, what to do about it. Never pad.

Each entry ends with a short `_Usage:_` dialogue between two engineers.

Link to another entry only on the first occurrence of that term. Use relative links such as `[read replica](./Read%20replica.md)`. Do not add external links.

Where a term has a recognisable symptom, weave that felt failure into the prose near the definition. Do not use a named section for it. Vocabulary terms with no symptom should not get an invented one.

Prefer tables for lifecycles, ladders of options and comparisons. Do not force prose into a table.

Write in a plain, de-hyped register. Avoid superlatives, dramatised moments and emphasis words. State what happens and what to do.

The first sentence of each paragraph must be clear and literal. Do not open with a clever phrase.

When adding an entry, search the other entries for places that should reference it.
