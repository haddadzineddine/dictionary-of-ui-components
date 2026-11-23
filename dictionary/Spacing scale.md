---
description: A fixed set of allowed spacing values used for padding, margins and gaps across an interface.
---

A spacing scale is a fixed set of allowed values for padding, margins and gaps across an interface. Instead of choosing 13px here and 17px there, developers pick the nearest step. Without one, a product drifts into dozens of nearly identical values, and screens look slightly misaligned even though no single rule is wrong.

Many scales build on a base of 4 or 8 pixels, with steps that grow as the values get larger.

| Name         | Value     | Pixels at default | Typical use                 |
| ------------ | --------- | ----------------- | --------------------------- |
| `--space-1`  | `0.25rem` | 4                 | Icon and label              |
| `--space-2`  | `0.5rem`  | 8                 | Inside compact controls     |
| `--space-3`  | `0.75rem` | 12                | Control padding             |
| `--space-4`  | `1rem`    | 16                | Between related fields      |
| `--space-6`  | `1.5rem`  | 24                | [Card](./Card.md) padding                |
| `--space-8`  | `2rem`    | 32                | Between groups              |
| `--space-12` | `3rem`    | 48                | Between page sections       |

Publish the values as CSS variables or design tokens, which are named design values shared across code and design files. Naming each step by its multiple of the base, as above, leaves room to add a value later without renaming everything. Names like `small` and `medium` run out quickly.

```css
.card {
  display: grid;
  gap: var(--space-3);
  padding: var(--space-6);
}
```

Use spacing to show relationships. Items that belong together get a smaller gap than items that do not, so a label sits closer to its own input than to the previous field. When every gap is the same, grouping is lost and forms become harder to scan.

Reduce large section spacing on narrow screens at a [breakpoint](./Breakpoint.md).

The common failure is erosion through one-off values added to fix a single screen. Lint for raw pixel values in spacing properties, and add a new step only when several components need it. A [stack layout](./Stack%20layout.md) that takes a scale value as its gap keeps these decisions in one place.

_Usage:_

"Why is this form 15px apart when the other one is 16?"

"Someone hard-coded it. Use the spacing scale so they stay consistent."
