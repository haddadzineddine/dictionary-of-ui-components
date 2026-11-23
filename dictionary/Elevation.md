---
description: The apparent height of a surface above the page, shown with shadow or tone to communicate layering.
---

Elevation is the apparent height of a surface above the page, shown with shadow or tone to communicate what sits on top of what. A [card](./Card.md) at a low level looks attached to the page, while a [modal dialog](./Modal%20dialog.md) at a high level looks separate from everything behind it. It is a visual language, and it does not by itself control which element paints in front.

Most systems define a few named levels instead of allowing arbitrary shadows.

| Level | Typical surface                        | Shadow     |
| ----- | -------------------------------------- | ---------- |
| 0     | Page background                        | None       |
| 1     | Cards, panels                          | Subtle     |
| 2     | [Sticky headers](./Sticky%20header.md) | Small      |
| 3     | Dropdowns, [popovers](./Popover.md)    | Medium     |
| 4     | Dialogs, [drawers](./Drawer.md)        | Large      |

Keep elevation and `z-index` as separate decisions that happen to line up. Painting order is governed by stacking contexts, the groups within which `z-index` values compete. A menu with a level 3 shadow can still render behind a header if its ancestor forms a lower group. A [portal](./Portal.md) is the common way out of that situation.

```css
:root {
  --elevation-1: 0 1px 2px rgb(0 0 0 / 0.15);
  --elevation-3: 0 4px 12px rgb(0 0 0 / 0.2);
}
.menu {
  box-shadow: var(--elevation-3);
  border: 1px solid transparent;
}
```

The transparent border in that example is there for forced colors mode, an accessibility setting that replaces page colors with a user-chosen palette. In this mode, `box-shadow` is forced to `none`, so a menu defined only by its shadow loses its edge and merges with the page. Border colors are replaced by a system color, so the transparent border becomes visible.

Shadows are also hard to see in [dark mode](./Dark%20mode.md), because there is little light to darken. A common approach is to make higher surfaces slightly lighter in tone, and keep a subtle border. Where a boundary is needed to identify a control, WCAG 1.4.11 Non-text Contrast requires 3:1 against adjacent colors, and a soft shadow alone rarely provides it.

_Usage:_

"In high contrast mode the dropdown blends into the page."

"Its elevation is only a box shadow, which gets removed. Add a transparent border."
