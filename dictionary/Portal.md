---
description: Rendering a component's output at a different place in the DOM from where it is declared, typically at the end of body.
---

A portal renders a piece of interface at a different place in the DOM from where it is declared, typically at the end of `<body>`. The code still treats it as a child of the component that owns it. Portals exist to solve a visual problem: a menu inside a [card](./Card.md) gets cut off by `overflow: hidden`, or sits behind a header despite `z-index: 9999`, because an ancestor created a stacking context, a group of elements layered together. Moving the element out of that ancestor frees it.

Native features now cover many of these cases.

| Need                              | Prefer                                      |
| --------------------------------- | ------------------------------------------- |
| Modal overlay                     | `<dialog>` with `showModal()`               |
| Menu or panel above the page      | The [`popover`](./Popover.md) attribute     |
| Placing it next to its trigger    | [Anchor positioning](./Anchor%20positioning.md) |
| Older browser support, or a library that requires it | Portal                   |

The top layer used by `<dialog>` and popovers escapes clipping and stacking without moving the element, so it keeps its position in the DOM.

A portal's main cost is that document order and visual order diverge, and Tab and screen reader order follow the DOM. A [dropdown menu](./Dropdown%20menu.md) portalled to the end of `<body>` looks adjacent to its [button](./Button.md), but is reached only after everything else on the page. WCAG failure F85 describes this case. Move focus into the portalled content when it opens, return it on close, and close it when focus leaves.

Inherited CSS from the old parent stops applying, so a [theming](./Theming.md) class on a wrapper is lost. In some frameworks, events still bubble through the component tree, so a click in a portalled menu can trigger a handler on a parent row.

Remove portalled nodes when the owner unmounts, or stale overlays stay on the page.

_Usage:_

"The portalled menu looks right, but Tab jumps to the page footer."

"It's at the end of `body` now. Use the top layer instead so it stays in DOM order."
