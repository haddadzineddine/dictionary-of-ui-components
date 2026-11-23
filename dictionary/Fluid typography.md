---
description: Text that scales smoothly with the viewport between a minimum and maximum size, usually using clamp().
---

Fluid typography is text that scales smoothly with the viewport between a minimum and a maximum size, instead of jumping at a [breakpoint](./Breakpoint.md). It is usually written with the CSS `clamp()` function, which takes a minimum, a preferred value and a maximum.

```css
h1 {
  font-size: clamp(1.5rem, 1rem + 2.5vw, 3rem);
}
```

The browser resolves `clamp(MIN, VAL, MAX)` as `max(MIN, min(VAL, MAX))`. In this example, the heading is `1.5rem` on small screens, `3rem` on large screens, and grows with the viewport in between.

| Approach                 | Behaviour                     | Suits                         |
| ------------------------ | ----------------------------- | ----------------------------- |
| Fixed [type scale](./Type%20scale.md) | Same at all widths | Dense application interfaces |
| Steps at breakpoints     | Jumps between sizes           | Simple, predictable control   |
| Fluid with `clamp()`     | Continuous between two limits | Headings, marketing pages     |

The main failure is text that does not respond to zoom. Browser zoom reduces the viewport's width in CSS pixels, so a size set only in `vw` stays about the same physical size however far the user zooms. WCAG lists this as failure F94 under 1.4.4 Resize Text, which requires text to be resizable to 200 percent without loss of content or functionality.

Mixing a `rem` value into the preferred value helps, because the `rem` part responds to zoom and to the user's font-size setting. It does not fully solve the problem, since the `vw` part still shrinks in CSS pixels as zoom increases, so the text grows by less than the zoom factor. MDN advises making the maximum a relative unit at least twice the minimum, so that text can still reach 200 percent. The example above follows that rule. Test it by zooming and comparing the rendered size.

Do not use `px` for the limits, since they ignore the user's default font size. Body text benefits least from fluid scaling, and a fixed `1rem` is often the better choice.

_Usage:_

"The hero title doesn't get any bigger when I zoom to 200 percent."

"Its fluid typography is pure `vw`. Add a `rem` component and clamp it."
