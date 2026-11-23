---
description: An editing surface for formatted content such as headings, lists and links, usually built on contenteditable.
---

A rich text editor is an editing surface for formatted content such as headings, lists and links. It is usually built on the `contenteditable` attribute, which makes an element editable in the browser. Choose it only when people need formatting. A [textarea](./Textarea.md), optionally with Markdown, is less work and has fewer failure modes.

| Option                       | Fits                                 | Cost                       |
| ---------------------------- | ------------------------------------ | -------------------------- |
| Plain textarea               | Comments, notes                      | No formatting              |
| Textarea with Markdown       | Technical audiences                  | Users learn syntax         |
| Editor library               | Documents, CMS content               | Bundle size, integration   |
| Custom on `contenteditable`  | Rarely justified                     | High maintenance           |

Browsers produce inconsistent markup from the same keystrokes, so mature editors keep their own document model and treat the DOM as a rendering of it. The older `document.execCommand` API is deprecated and implemented inconsistently, so new work should not depend on it. The `beforeinput` event is the usual place to intercept edits, though autocorrect and input method editors (used to compose languages such as Japanese) may skip it.

Pasted content needs cleaning. Content copied from a word processor can bring in pages of inline styles, and pasted or stored HTML can carry scripts. Sanitise on paste, and again on the server before displaying saved content, because client checks can be bypassed.

For assistive technology, give the editable region `role="textbox"`, `aria-multiline="true"` and an accessible name. Formatting commands belong in a labelled [toolbar](./Toolbar.md) with a single Tab stop, and [buttons](./Button.md) such as Bold should expose `aria-pressed`.

If Tab indents text, keyboard users can get stuck, which WCAG 2.1.2 prohibits unless they are told how to leave. Keep Tab for moving focus, or document a way out such as Escape then Tab. The Authoring Practices also recommend a documented shortcut from the text to the toolbar.

Pair the editor with [autosave](./Autosave.md).

_Usage:_

"Pasting from Word turned the article into a wall of inline styles."

"The rich text editor isn't sanitising paste. Strip it to our allowed elements."
