---
description: The brief visual change on a control while it is being pressed, confirming that the input registered.
---

An active state is the brief visual change on a control while it is being pressed, confirming that the input registered. In CSS it is written with `:active`, which with a mouse typically begins on press and ends on release. A [button](./Button.md) with no pressed feedback can feel unresponsive, and people often click it a second time.

The word "active" is also used loosely for a persistent state.

| Term             | Meaning                         | How to express it                 |
| ---------------- | ------------------------------- | --------------------------------- |
| Active (pressed) | Being pressed right now         | `:active`                         |
| Toggled on       | A [toggle button](./Toggle%20button.md) stays on | `aria-pressed="true"` |
| Current page     | Where the user is in navigation | `aria-current="page"`             |
| Selected         | Chosen item in a set            | `aria-selected="true"`            |

A nav link styled with `:active` will not stay highlighted on the current page, because the pseudo-class ends on release. Use `aria-current="page"` and style from that attribute, which also tells screen readers (software that reads the UI aloud) which link is current.

```css
.button:hover { background: var(--accent-hover); }
.button:active { background: var(--accent-pressed); }
```

A later `:hover` rule with equal specificity overrides `:active`, so the pressed style never shows while the pointer is over the element. For links, declare the rules in the order `:link`, `:visited`, `:hover`, `:active`.

Moving the control on press can lose the click. If `:active` applies `transform: translateY(2px)` and the user presses near the top edge, the button slides from under the pointer. The release then lands on another element, and the browser fires `click` on their common ancestor, so the button's handler does not run. Apply the movement to an inner element, or use a color or a slight shadow change.

Browsers differ on whether `:active` matches during keyboard or touch activation, so do not make it the only feedback for an action. Under [reduced motion](./Reduced%20motion.md), limit press effects to color changes.

_Usage:_

"The current nav item only highlights while I'm clicking it."

"You've used the active state. Set `aria-current="page"` and style that instead."
