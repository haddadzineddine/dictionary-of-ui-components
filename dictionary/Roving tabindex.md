---
description: A focus technique where one item in a group is tabbable and arrow keys move focus among the rest.
---

Roving tabindex is a focus technique where only one item in a group is in the Tab order, and arrow keys move focus among the rest. It makes a composite widget, one control made of many focusable parts, behave as a single Tab stop. Without it, a [toolbar](./Toolbar.md) with 20 [buttons](./Button.md) takes 20 presses of Tab to get past.

The WAI-ARIA Authoring Practices describe the steps.

| Step | When                     | What happens                                                |
| ---- | ------------------------ | ----------------------------------------------------------- |
| 1    | Widget loads             | One item gets `tabindex="0"`, the others `tabindex="-1"`    |
| 2    | Arrow key pressed        | Current item is set to `-1`, next item is set to `0`        |
| 3    | Same key handler         | Call `.focus()` on the new item                             |
| 4    | User tabs away and back  | Focus returns to the item holding `tabindex="0"`            |

```html
<div role="toolbar" aria-label="Formatting">
  <button tabindex="0">Bold</button>
  <button tabindex="-1">Italic</button>
  <button tabindex="-1">Underline</button>
</div>
```

The usual alternative is `aria-activedescendant`.

| Technique               | Real DOM focus    | Scrolling           | Typical use                   |
| ----------------------- | ----------------- | ------------------- | ----------------------------- |
| Roving tabindex         | Moves to the item | Browser handles it  | Toolbars, tabs, [tree views](./Tree%20view.md) |
| `aria-activedescendant` | Stays on container | You handle it      | [Combobox](./Combobox.md) with typing focus in the input |

Use `aria-activedescendant` when focus must stay in a text input while the user moves through suggestions.

A common bug is losing the Tab stop. If the item holding `tabindex="0"` is removed or disabled, no item in the group is tabbable, and the widget can no longer be reached by keyboard. Whenever items change, confirm that exactly one remains at `0`. If the focused item was removed, move focus to a neighbour.

Decide whether arrows wrap at the ends, and support Home and End where the pattern calls for them. Do not trap Tab inside the group, because Tab should always leave the widget. Keep the visible [focus ring](./Focus%20ring.md) on the current item.

_Usage:_

"It takes 14 tabs to get past the editor's formatting bar."

"It needs roving tabindex, so the bar is one Tab stop and arrows move inside it."
