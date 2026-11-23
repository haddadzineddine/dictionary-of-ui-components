---
description: The area of a control that accepts a tap or click, which can be larger than the visible icon or text.
---

A touch target is the area of a control that accepts a tap or click, which can be larger than the visible icon or text. When it is too small, or too close to a neighbour, users tap the wrong item or need several attempts. A 16px close icon beside a Delete [button](./Button.md) is the kind of layout that produces these errors, particularly for people with tremors or limited dexterity.

WCAG 2.2 has two criteria for size, and they are often confused. Both apply to all pointer input, including a mouse.

| Criterion                  | Level | Minimum size      | Spacing exception |
| -------------------------- | ----- | ----------------- | ----------------- |
| 2.5.8 Target Size (Minimum) | AA   | 24 by 24 CSS px   | Yes               |
| 2.5.5 Target Size (Enhanced) | AAA | 44 by 44 CSS px   | No                |

Under 2.5.8, a smaller target can still pass through spacing. Draw a 24px diameter circle centred on the target's bounding box. The target passes if its circle does not intersect another target or the circle of another undersized target.

Other exceptions apply to 2.5.8:

| Exception          | Example                                                |
| ------------------ | ------------------------------------------------------ |
| Equivalent         | Another compliant control on the page does the same job |
| Inline             | A link inside a sentence                               |
| User agent control | An unstyled native control                             |
| Essential          | Pins on a map where position carries meaning           |

Criterion 2.5.5 has similar exceptions for equivalent, inline, user agent and essential targets, but no spacing exception.

The visible element can stay small while the target grows. Add padding, or extend the hit area with a pseudo-element:

```css
.icon-button { position: relative; width: 1rem; height: 1rem; }
.icon-button::after {
  content: "";
  position: absolute;
  inset: -0.25rem;
}
```

Here a 16px icon gets a 24px target at the default font size. Check that expanded hit areas do not overlap, because the element painted on top then takes the tap. Dense [toolbars](./Toolbar.md), [data table](./Data%20table.md) row actions, [chip](./Chip.md) remove buttons and [icon buttons](./Icon%20button.md) often fall short.

_Usage:_

"People keep hitting Delete when they mean to hit Edit on mobile."

"Those icons are 16px and touching. Give each a bigger touch target and some space between them."
