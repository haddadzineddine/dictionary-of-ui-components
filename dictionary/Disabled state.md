---
description: A control shown but currently unavailable, with its interaction blocked until a condition changes.
---

A disabled state shows a control that exists but is currently unavailable, with interaction blocked until a condition changes. A greyed-out Submit [button](./Button.md) is the familiar case, and also the familiar complaint: the user cannot tell why it is grey or what would enable it.

HTML offers `disabled`, and ARIA (attributes for assistive technology) offers `aria-disabled`. They behave differently.

| Behaviour           | `disabled`             | `aria-disabled="true"`            |
| ------------------- | ---------------------- | --------------------------------- |
| In the Tab order    | No                     | Yes                               |
| Blocks activation   | Yes                    | No, your code must block it       |
| Automatic styles    | Yes, via `:disabled`   | No, style the attribute           |
| Submitted in forms  | No                     | Yes, handle it yourself           |
| Works on any element | Form controls only    | Any element with a suitable role  |

The WAI-ARIA Authoring Practices advise using `disabled` when users can infer the control from what is around it, such as Previous on the first page of results. Use `aria-disabled` when the control should remain discoverable, such as items in a [toolbar](./Toolbar.md) or menu, since people using a screen reader, which reads the UI aloud, find content largely by moving focus.

```html
<button aria-disabled="true" aria-describedby="why">Publish</button>
<p id="why">Add a title before publishing.</p>
```

With `aria-disabled`, block both click and keyboard activation in script. `pointer-events: none` stops the mouse only.

Often it is better not to disable the control. Leave Submit enabled, and on click show what is missing with [inline validation](./Inline%20validation.md) or an [error summary](./Error%20summary.md).

Native `disabled` has its own traps. If a focused button becomes disabled during a request, focus can be lost. A [tooltip](./Tooltip.md) explaining the reason generally will not work on it either, because the button cannot receive focus and may not fire pointer events. Use `aria-disabled` when an explanation is needed.

WCAG 1.4.3 and 1.4.11 exempt inactive components from contrast requirements, but keep the label readable so users know what the control is.

_Usage:_

"Why can't I click Publish? Nothing tells me."

"It's in a disabled state until there's a title. Enable it and show the error on submit."
