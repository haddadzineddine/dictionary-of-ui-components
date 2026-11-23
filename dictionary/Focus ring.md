---
description: The visible outline showing which element currently has keyboard focus.
---

A focus ring is the visible outline showing which element currently has keyboard focus. A stylesheet containing `outline: none` with no replacement is a common failure: pressing Tab appears to do nothing, because focus is moving through the page invisibly.

Three WCAG 2.2 criteria apply.

| Criterion                     | Level | Requirement                                                       |
| ----------------------------- | ----- | ----------------------------------------------------------------- |
| 2.4.7 Focus Visible           | AA    | A visible indicator exists in keyboard use                        |
| 1.4.11 Non-text Contrast      | AA    | A custom indicator has 3:1 contrast against adjacent colors       |
| 2.4.13 Focus Appearance       | AAA   | At least the area of a 2px perimeter, with 3:1 change between the focused and unfocused states |

Use `:focus-visible`, which applies when the browser judges that focus should be shown. It shows the ring for keyboard navigation and for text inputs, and generally omits it on mouse clicks of [buttons](./Button.md).

```css
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
```

Prefer `outline` over `box-shadow` for the ring. Forced colors mode, an accessibility setting that replaces page colors with a user palette, sets `box-shadow` to `none`, so a shadow-only ring disappears. Outlines stay and take on a system color.

One color rarely works on every surface. A blue ring can vanish on a blue button or a dark panel. Either set the color per [theme](./Theming.md), or draw a two-tone ring using an outline plus a contrasting inner shadow, so that one of the two always stands out.

Clipping is the other frequent bug. An ancestor with `overflow: hidden` cuts off the outer part of the ring, which shows up on items in scroll containers and on [cards](./Card.md). Use a negative `outline-offset` to draw the ring inside the element. A [sticky header](./Sticky%20header.md) can also cover the focused element entirely, which fails WCAG 2.4.11 Focus Not Obscured (Minimum), and `scroll-padding` prevents that.

_Usage:_

"I can't tell where I am when I tab through the settings page."

"A CSS reset removed the outline. Add a focus ring with `:focus-visible`."
