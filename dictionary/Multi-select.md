---
description: A control for choosing any number of values from a known list of options.
---

A multi-[select](./Select.md) is a control for choosing any number of values from a known list, such as assigning several labels to a ticket. Pick a form based on how long the list is and how much room you have.

| Form                               | Fits                     | Trade-off                              |
| ---------------------------------- | ------------------------ | -------------------------------------- |
| [Checkbox](./Checkbox.md) group    | Short lists              | Takes vertical space                   |
| `<select multiple>`                | Basic internal tools     | Modifier keys are hard to discover     |
| Listbox with `aria-multiselectable` | Custom scrolling lists  | You build all keyboard behaviour       |
| [Combobox](./Combobox.md) with [chips](./Chip.md) | Long, searchable lists | Most complex to build                  |

If people need to add values that are not in the list, use a [tag input](./Tag%20input.md).

The native `<select multiple>` has a well-known trap. A plain click replaces the whole selection, so someone carefully choosing items with Ctrl or Command can lose them all with one unmodified click. MDN notes that its keyboard mechanisms are not standardised and differ across browsers and operating systems.

For a custom listbox, the WAI-ARIA Authoring Practices recommend a model where moving focus does not change the selection.

| Key                | Action                                    |
| ------------------ | ----------------------------------------- |
| Up, Down Arrow     | Move focus                                |
| Space              | Toggle the focused option                 |
| Shift+Space        | Optionally select a contiguous range      |
| Ctrl+A             | Optionally select or clear all            |

Mark options with `aria-selected` or `aria-checked`, not both, and use the same one across the product. Keep the popup open after each choice so people can pick several in a row.

Filtering causes a recurring problem: chosen items vanish from the list when the search text no longer matches them, and users think their picks were lost. Show the current selection outside the filtered list.

On submission, each value is sent as its own pair, such as `label=bug&label=urgent`. A server that reads only one value will silently keep just the last one.

_Usage:_

"I picked eight labels, clicked one more, and the other eight disappeared."

"That's the native multi-select needing Ctrl. Replace it with a checkbox list."
