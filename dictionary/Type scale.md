---
description: A limited, related set of font sizes that gives text a consistent hierarchy across an interface.
---

A type scale is a limited, related set of font sizes that gives text a consistent hierarchy across an interface. Without a scale, a product collects sizes like 15px, 16px and 17px that are too close to read as different levels and too numerous to maintain.

A common way to build one is to multiply a base size by a fixed ratio. The table uses a base of `1rem` and a ratio of 1.25, rounded to three decimals.

| Step      | Size       | Pixels at default | Line height | Use            |
| --------- | ---------- | ----------------- | ----------- | -------------- |
| `small`   | `0.8rem`   | 12.8              | 1.5         | Captions       |
| `base`    | `1rem`     | 16                | 1.5         | Body text      |
| `lg`      | `1.25rem`  | 20                | 1.4         | Lead text      |
| `xl`      | `1.563rem` | 25                | 1.3         | [Card](./Card.md) titles    |
| `2xl`     | `1.953rem` | 31.25             | 1.2         | Section titles |
| `3xl`     | `2.441rem` | 39                | 1.1         | Page titles    |

A larger ratio creates stronger contrast between levels and suits marketing pages. A smaller ratio suits dense dashboards, where big headings would waste space. Define line height with each size, since large text generally needs tighter leading than body text.

```css
:root {
  --text-base: 1rem;
  --text-xl: 1.563rem;
}
h2 { font-size: var(--text-xl); line-height: 1.3; }
```

Keep visual size separate from heading level. A common failure is choosing `<h4>` because it looks the right size, which breaks the outline that people using a screen reader, which reads the UI aloud, navigate by. Choose the heading level from the document's structure, then apply whichever scale step fits.

Use `rem` for font sizes. A size in `px` does not follow the default font size a user sets in their browser, although page zoom still works. Check that nothing clips when text grows, since WCAG 1.4.4 Resize Text requires text to resize to 200 percent without loss of content or function.

To adapt the scale to screen width, change its values at a [breakpoint](./Breakpoint.md) or use [fluid typography](./Fluid%20typography.md).

_Usage:_

"Our card titles and section headings look almost identical."

"They're one pixel apart. Map both onto the type scale so they differ by a full step."
