---
description: A control for choosing a value along a range by moving a thumb, suited to approximate values such as volume.
---

A slider is a control for choosing a value along a range by moving a thumb, such as volume or brightness. It suits values where the approximate position matters more than the exact figure. If people need a specific value, such as a price of 149, use a [number input](./Number%20input.md), or pair the two so either can set the value.

Use the native `<input type="range">`, which has the `slider` role and built-in keyboard support. It defaults to a range of 0 to 100 with a starting value halfway along, so an untouched slider can submit 50 as if the user chose it.

```html
<label for="volume">Volume</label>
<input id="volume" type="range" min="0" max="10" step="1" value="4" />
```

| Key                | Action                            |
| ------------------ | --------------------------------- |
| Right, Up Arrow    | Increase by one step              |
| Left, Down Arrow   | Decrease by one step              |
| Home, End          | Go to the minimum or maximum      |
| Page Up, Page Down | Optionally move by a larger step  |

When the raw number means little, set `aria-valuetext` so a screen reader (software that reads the interface aloud) announces something useful, such as "Medium" or "£40" rather than "2". Also show the current value on screen.

WCAG 2.5.7 requires a single-pointer alternative to dragging. Letting users click or tap the track satisfies it. Native sliders generally do this, and custom ones often do not.

A range slider with two thumbs needs two focusable elements. Each is its own Tab stop, and the Tab order stays fixed even if the thumbs swap visual position. When one thumb limits the other, update the dependent `aria-valuemin` or `aria-valuemax` as it moves.

Firing a request on every `input` event makes dragging stutter. Update the display on `input` and fetch on `change`. Some touch screen readers may not operate custom sliders, so test on real devices.

_Usage:_

"The price filter refetches on every pixel of drag, and the page locks up."

"The slider is wired to `input`. Update the label there and run the query on `change`."
