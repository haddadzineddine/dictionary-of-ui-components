---
description: The visual change on an element while a pointer rests over it, signalling that it can be interacted with.
---

A hover state is the visual change on an element while a pointer rests over it, signalling that the element can be interacted with. A darker [button](./Button.md) background or an underlined link are typical examples. In CSS it is written with the `:hover` pseudo-class. It is an extra hint for mouse and trackpad users, because touch and keyboard users may never trigger it.

| State               | Trigger                     | CSS              |
| ------------------- | --------------------------- | ---------------- |
| Hover               | Pointer over the element    | `:hover`         |
| [Focus](./Focus%20ring.md) | Keyboard or script focus | `:focus-visible` |
| [Active](./Active%20state.md) | Being pressed       | `:active`        |
| [Disabled](./Disabled%20state.md) | Unavailable     | `:disabled`      |

Do not hide essential controls behind hover. A table row whose Edit and Delete buttons appear only on hover gives touch users no way to reach them, and keyboard users may tab onto invisible controls. Keep the controls visible on devices that cannot hover, and reveal them on keyboard focus as well.

```css
.row-actions { opacity: 1; }

@media (hover: hover) {
  .row-actions { opacity: 0; }
  .row:hover .row-actions,
  .row:focus-within .row-actions { opacity: 1; }
}
```

The `hover` media feature describes only the primary input, so a laptop with a touchscreen may report either value.

Touchscreens cause a second bug. Depending on the browser, `:hover` may never match, may match briefly, or may stay applied after a tap until the user touches something else. A button then looks stuck in its highlighted state. Wrapping hover styles in `@media (hover: hover)` prevents this on most phones.

Content that appears on hover, such as a [tooltip](./Tooltip.md), has specific requirements under WCAG 1.4.13 Content on Hover or Focus. The user must be able to dismiss it without moving the pointer, move the pointer onto it without it vanishing, and it must stay until they leave.

Avoid hover changes that alter layout, such as a bolder font or a thicker border, which shift neighbouring elements. Use color, shadow or an outline.

_Usage:_

"How do I delete a row on the iPad? I can't see the button."

"It only appears in the hover state. Show the actions when the device can't hover."
