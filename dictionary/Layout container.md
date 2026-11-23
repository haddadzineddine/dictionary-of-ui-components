---
description: A centred wrapper that limits content to a maximum width and keeps consistent gutters at the page edges.
---

A layout container is a centred wrapper that limits content to a maximum width and keeps consistent gutters at the page edges. Without one, text on a wide monitor stretches into lines that are tiring to read, and content on a phone touches the screen edge. The name is easy to confuse with a container query, a CSS feature that styles elements based on the size of an ancestor. A layout container only constrains width.

```css
.container {
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
}
```

The element takes the full width minus the gutters until it reaches `70rem`, then stays there and centres.

Most systems define a few widths for different content.

| Size   | Typical limit | Use                     |
| ------ | ------------- | ----------------------- |
| Prose  | `65ch`        | Articles, documentation |
| Narrow | `40rem`       | Forms, settings         |
| Wide   | `70rem`       | Dashboards, marketing   |
| Full   | None          | Tables, maps, media     |

The `ch` unit is the width of the font's zero character.

Full-width sections inside a container are a common failure. Developers often break a band out of the container with `width: 100vw`. On systems with classic scrollbars, `100vw` can be wider than the visible area, because it does not subtract the scrollbar, and the page gains a horizontal scrollbar. Avoid this by placing the band outside the container, with an inner container for its content.

Nesting containers also causes trouble. Two nested wrappers apply the gutter twice, leaving content indented on mobile. Keep one container per band of the page, and use a [stack layout](./Stack%20layout.md) or grid inside it.

Avoid fixed widths. A `width: 1200px` wrapper forces horizontal scrolling on narrow or zoomed screens, and WCAG 1.4.10 Reflow requires content to fit a width equivalent to 320 CSS pixels without two-dimensional scrolling, aside from content that needs it. Let the container shrink and change the inner layout at a [breakpoint](./Breakpoint.md).

_Usage:_

"There's a horizontal scrollbar on every page on Windows."

"The hero uses `100vw` inside the layout container. Move it out and let it fill the body."
