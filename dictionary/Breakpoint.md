---
description: A width at which a layout changes, usually written as a CSS media query.
---

A breakpoint is a width at which a layout changes, such as a [sidebar](./Sidebar.md) collapsing into a menu below 48rem. It is usually written as a CSS media query, a rule that applies only when the viewport meets a condition. Breakpoints are one part of responsive design, which adapts a page to the space available.

```css
.layout { display: grid; gap: 1rem; }

@media (width >= 48em) {
  .layout { grid-template-columns: 16rem 1fr; }
}
```

Choose breakpoints where the content starts to look wrong, instead of copying the dimensions of particular phones. Device sizes change, and a layout tuned to three popular screens can break at every width between them.

| Question                               | Tool                      |
| -------------------------------------- | ------------------------- |
| Does the page have room for a sidebar? | Media query               |
| Does this component's parent have room? | Container query          |
| Should this size scale smoothly?       | [Fluid typography](./Fluid%20typography.md), `clamp()` |
| Should items wrap when they run out of room? | Flex or grid wrapping |

A container query responds to the size of an ancestor element instead of the viewport, which suits a [card](./Card.md) that appears in both a wide page and a narrow sidebar.

Using `em` in media queries has a specific benefit. It resolves against the browser's initial font size, not the page's CSS, so a user who increases their default font size gets the narrower layout sooner, and text has room.

Browser zoom also triggers breakpoints, because zooming reduces the viewport's width in CSS pixels. A 1280px window at 400 percent is 320 CSS pixels wide, which is the width WCAG 1.4.10 Reflow tests. Anything hidden at a small breakpoint must stay available in another form, or zoomed desktop users lose it.

Boundary bugs are a common symptom. Pairing `max-width: 767px` with `min-width: 768px` leaves a gap at fractional widths such as 767.5px, where neither rule applies and the layout looks broken. Range syntax avoids it with `width < 48em` and `width >= 48em`.

_Usage:_

"The nav disappears completely at exactly one window size."

"Our two breakpoints leave a gap at 767.5px. Use range syntax so they meet."
