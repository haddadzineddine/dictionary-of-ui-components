---
description: A non-modal floating panel opened from a control, showing content above the page while the rest stays usable.
---

A popover is a non-modal floating panel opened from a control, such as a date filter or a small settings panel. The rest of the page stays usable, and it usually closes on an outside click. Choose it for short supplementary content that may contain controls. Use a [tooltip](./Tooltip.md) for a brief text hint, and a [modal dialog](./Modal%20dialog.md) when the page must be blocked.

The HTML Popover API handles the mechanics declaratively.

```html
<button popovertarget="filters">Filters</button>
<div id="filters" popover role="dialog" aria-label="Filters">...</div>
```

| Value    | Closes on outside click or Escape | Other popovers                     |
| -------- | --------------------------------- | ---------------------------------- |
| `auto`   | Yes                               | Closes unrelated `auto` popovers   |
| `hint`   | Yes                               | Leaves `auto` popovers open        |
| `manual` | No                                | Independent, several can be open   |

A bare `popover` attribute means `auto`. MDN lists the API as widely available since April 2024, with some parts varying, so check `hint` support.

An open popover is placed in the browser's top layer, above the page regardless of `z-index`. This avoids clipping by a parent with `overflow: hidden` and the stacking problems that previously required a [portal](./Portal.md).

Keyboard behaviour differs from a dialog. Opening a popover does not move focus into it. The browser places it next in the Tab order after its invoker, so the next Tab enters it. Closing with Escape returns focus to the invoker. If the content should receive focus at once, add `autofocus` to an element inside.

The attribute adds no semantic role, so a plain `<div popover>` is announced as nothing in particular. Add a suitable role, such as `dialog` with a label for a panel of controls, or use a list of links. A `popovertarget` [button](./Button.md) gets an implicit expanded state, so do not manage `aria-expanded` by hand.

By default an open popover is centred in the viewport, so pair it with [anchor positioning](./Anchor%20positioning.md).

_Usage:_

"The filter panel gets clipped by the table's scroll container."

"Make it a popover. It renders in the top layer, so `overflow` can't cut it off."
