---
description: The part of a screen not covered by notches, rounded corners or system bars, where content stays fully visible.
---

A safe area is the part of a screen not covered by notches, rounded corners or system bars, where content stays fully visible. A fixed bottom bar whose buttons sit under the phone's home indicator, or text clipped by a camera cutout in landscape, is the usual sign that a page has ignored it.

CSS exposes the insets through environment variables, read with the `env()` function.

| Variable                   | Typical cause on a phone          |
| -------------------------- | --------------------------------- |
| `safe-area-inset-top`      | Notch or status area              |
| `safe-area-inset-right`    | Cutout in landscape               |
| `safe-area-inset-bottom`   | Home indicator                    |
| `safe-area-inset-left`     | Cutout in landscape               |

On devices with cutouts, browsers generally keep the page inside the safe area by default. To draw edge to edge, a page opts in with `viewport-fit=cover`, and from then on it is responsible for keeping content clear of the unsafe regions.

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
```

```css
.bottom-bar {
  position: fixed;
  inset-inline: 0;
  bottom: 0;
  padding-block-end: max(0.75rem, env(safe-area-inset-bottom));
}
```

The `max()` keeps a minimum padding on devices where the inset is 0, which includes rectangular displays with nothing occupying the viewport. The second argument of `env()` is a fallback used when the variable is not available, as in `env(safe-area-inset-bottom, 0px)`.

Three mistakes are common. Adding `viewport-fit=cover` without using the insets puts content under the hardware. Padding only the bottom works in portrait, but rotating the device moves the cutout to a side, so the left and right insets matter as well. Offsetting a bar with `bottom: env(safe-area-inset-bottom)` instead of padding it leaves page content visible in the strip beneath.

[Bottom navigation](./Bottom%20navigation.md), [bottom sheets](./Bottom%20sheet.md), [toasts](./Toast.md) and [floating buttons](./Floating%20action%20button.md) are the components most often affected. Test them on a real device or simulator in both orientations, because a desktop browser usually reports an inset of 0.

_Usage:_

"The checkout button is partly under the iPhone home bar."

"We set `viewport-fit=cover` but never added the safe area inset to the footer padding."
