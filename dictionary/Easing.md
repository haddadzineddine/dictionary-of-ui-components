---
description: The curve that controls how an animation's speed changes between its start and end.
---

Easing is the curve that controls how an animation's speed changes between its start and end. The same 200ms movement can feel abrupt, mechanical or smooth depending on the curve.

CSS provides keywords, each equivalent to a specific function.

| Keyword       | Equivalent                         | Common use                     |
| ------------- | ---------------------------------- | ------------------------------ |
| `linear`      | `cubic-bezier(0, 0, 1, 1)`         | [Spinners](./Spinner.md), [progress bars](./Progress%20bar.md), opacity |
| `ease`        | `cubic-bezier(0.25, 0.1, 0.25, 1)` | The CSS default                |
| `ease-in`     | `cubic-bezier(0.42, 0, 1, 1)`      | Elements leaving the screen    |
| `ease-out`    | `cubic-bezier(0, 0, 0.58, 1)`      | Elements entering the screen   |
| `ease-in-out` | `cubic-bezier(0.42, 0, 0.58, 1)`   | Elements moving across screen  |

The usual convention is to use `ease-out` for things that appear, because they respond right away and then settle. Use `ease-in` for things that leave. Using `ease-in` on an entrance is a common mistake: the slow start reads as lag right after the user clicks.

Beyond the keywords, three functions give finer control. `cubic-bezier()` defines a custom curve. Its x values must stay between 0 and 1, while its y values may go outside that range to create overshoot. `linear()` draws a curve through points, and `steps()` jumps in discrete stages.

```css
.popover {
  transition: transform 180ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

The y value of 1.56 makes the element pass its target and settle back.

In a `@keyframes` animation, the timing function applies between each pair of keyframes, not across the whole animation. A three-keyframe animation with `ease-in-out` slows to a stop at the middle keyframe, which appears as a stutter. Remove the middle keyframe, or set a timing function per keyframe.

Easing does not make motion safe. A gently curved animation can still cause discomfort, so honour [reduced motion](./Reduced%20motion.md) separately. Define a few named curves as CSS variables so that [micro-interactions](./Micro-interaction.md) across the product feel related.

_Usage:_

"The dropdown feels laggy even though it's only 150ms."

"It's using `ease-in`, so it starts slowly. Change the easing to `ease-out`."
