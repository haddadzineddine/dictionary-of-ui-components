---
description: A small text label that appears on hover or keyboard focus to describe a control, and contains nothing interactive.
---

A tooltip is a small text label that appears when a control is hovered or receives keyboard focus, usually after a short delay. It describes that control, such as naming an [icon button](./Icon%20button.md). It holds plain text only. If the content includes a link or [button](./Button.md), use a [popover](./Popover.md) or [hover card](./Hover%20card.md), because focus never moves into a tooltip and a pointer user may not be able to reach it.

The WAI-ARIA Authoring Practices tooltip pattern is marked as work in progress. It describes the following behaviour.

```html
<button type="button" aria-describedby="tip">Publish</button>
<div id="tip" role="tooltip" hidden>Visible to everyone in the workspace</div>
```

| Trigger         | Behaviour                                                  |
| --------------- | ---------------------------------------------------------- |
| Focus           | Opens. Focus stays on the control                          |
| Blur            | Closes                                                     |
| Pointer enter   | Opens after a short delay                                  |
| Pointer leave   | Closes, unless the pointer moved onto the tooltip          |
| Escape          | Closes, with focus staying where it is                     |

WCAG 1.4.13, Content on Hover or Focus, sets three requirements. The tooltip must be dismissible without moving the pointer or focus, which is why Escape matters. It must be hoverable, so someone using screen magnification can move onto it and read it. It must persist until the user leaves or dismisses it, so a timer that hides it fails.

Essential information in a tooltip is out of reach for touch users, who have no hover. A tooltip on a disabled control may never appear, because a natively [disabled](./Disabled%20state.md) button cannot receive focus and some browsers do not fire pointer events on it. Use `aria-disabled` or explain the reason in visible text. The `title` attribute is not a substitute either, since it is generally unavailable from the keyboard and on touch screens.

Use `aria-describedby` when it adds a description. If it is the control's only name, use `aria-labelledby` instead.

Placement is often handled with `popover="hint"` plus [anchor positioning](./Anchor%20positioning.md), where supported.

_Usage:_

"The tooltip disappears when I try to move my mouse onto it to read it."

"That fails WCAG 1.4.13. Keep it open while the pointer is over the tooltip itself."
