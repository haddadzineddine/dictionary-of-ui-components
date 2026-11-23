---
description: A layout that packs items of uneven height into columns, placing each in the lane with the most room.
---

A masonry layout packs items of uneven height into columns, placing each item in the lane with the most available space. Image galleries and pinboards use it to avoid the gaps a regular grid leaves when row heights differ. If items have similar heights, or reading order matters, use a regular grid, which keeps rows aligned and order predictable.

CSS now has a native approach called grid lanes, set with `display: grid-lanes`. Browser support is still limited and the feature is marked experimental in MDN at the time of writing, so check current compatibility data and treat it as a progressive enhancement. Earlier proposals used `grid-template-rows: masonry`, so older articles may show syntax that no longer applies.

```css
.gallery {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
}

@supports (display: grid-lanes) {
  .gallery { display: grid-lanes; }
}
```

| Technique        | Order of items     | Trade-off                            |
| ---------------- | ------------------ | ------------------------------------ |
| `grid-lanes`     | Across lanes       | Limited browser support              |
| CSS columns      | Down each column   | Reads top to bottom, then across     |
| JavaScript       | Across lanes       | Absolute positions, runs on resize   |
| Grid row spans   | Across lanes       | Needs measured item heights          |

CSS multi-column layout is the common fallback, and it causes a specific surprise. Items flow down the first column before starting the second, so a newest-first feed appears out of order, and appending items can reshuffle the existing columns.

Focus order is the main accessibility issue. Items are placed by available height, so visual order can differ from DOM order, and pressing Tab can make focus jump between lanes. WCAG 2.4.3 Focus Order requires a sequence that preserves meaning and operability. If order carries meaning, such as ranked results, do not use masonry.

Images need reserved dimensions, with `width` and `height` attributes or [aspect ratio](./Aspect%20ratio.md). Otherwise items change height as images load, and placement shifts. Combining masonry with [infinite scroll](./Infinite%20scroll.md) makes these problems harder to notice and to fix.

_Usage:_

"Tabbing through the gallery jumps from column to column."

"That comes with the masonry layout. If order matters here, use a normal grid."
