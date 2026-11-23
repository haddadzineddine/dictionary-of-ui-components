---
description: A rich preview that appears when hovering or focusing a link, such as a user's profile summary.
---

A hover card is a rich preview that appears when someone hovers over or focuses a link, such as a profile summary on a username or a page preview on a wiki link. Because it depends on a pointer or focus, treat it as a convenience: everything inside must also be available at the link's destination.

| Component                  | Content               | Opens on        | Interactive |
| -------------------------- | --------------------- | --------------- | ----------- |
| [Tooltip](./Tooltip.md)    | Short text            | Hover, focus    | No          |
| Hover card                 | Rich preview          | Hover, focus    | Sometimes   |
| [Popover](./Popover.md)    | Panel of content      | Click           | Yes         |

The Authoring Practices tooltip pattern says hover content with focusable elements should be a non-modal dialog rather than a tooltip. A card with a "Follow" [button](./Button.md) therefore needs a dialog role, a label, and a keyboard route into it. If that is too much, keep the card read-only and put the action on the destination page.

WCAG 1.4.13, Content on Hover or Focus, applies directly. The card must be dismissible with a key such as Escape without moving the pointer, stay open while the pointer is over it, and remain until the user moves away.

A hover card can close before the pointer reaches it. As the pointer crosses the gap between link and card, the link fires `mouseleave` and the card closes. A short close delay, or an invisible bridge element across the gap, fixes it. An opening delay stops a series of cards flashing as the mouse crosses a list.

Touch screens have no hover, so a tap should follow the link.

The `interestfor` attribute is an emerging way to declare this behaviour. Support is limited, so treat it as an enhancement over a normal link.

_Usage:_

"The profile preview closes before I can reach the Follow button."

"The hover card closes on `mouseleave`. Add a short delay so the pointer can cross the gap."
