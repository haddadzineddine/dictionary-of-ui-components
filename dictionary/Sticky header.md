---
description: A header that scrolls with the page until it reaches an edge, then stays visible while content moves beneath it.
---

A sticky header is a page or table header that scrolls normally until it reaches an edge, then stays visible while content moves beneath it. It keeps column labels or navigation in view on long screens. It is usually built with `position: sticky`, which keeps the element in normal flow. `position: fixed` removes it from flow, so the content below needs a manual offset.

```css
th {
  position: sticky;
  top: 0;
  z-index: 1;
  background: Canvas;
}
```

A common symptom is a header that does not stick at all. These are the usual causes:

| Symptom                        | Cause                                                   | Fix                                         |
| ------------------------------ | ------------------------------------------------------- | ------------------------------------------- |
| Scrolls away immediately       | No `top` or other inset set                             | Set `top: 0`                                |
| Sticks to the wrong box        | An ancestor has `overflow: hidden` or `auto`            | Remove it, or use `overflow: clip`          |
| Stops partway down             | Its parent ends there                                   | Move it to a taller parent                  |
| Content shows through          | No background                                           | Set an opaque background                    |
| Rows paint over it             | Later content stacks higher                             | Raise its `z-index`                         |

Using `overflow: clip` works because it clips without creating a scroll container, but content it clips cannot be scrolled into view, so avoid it around interactive elements. In a [data table](./Data%20table.md), apply sticky to the `<th>` cells. With `border-collapse: collapse`, cell borders can scroll away from a stuck header, so `border-collapse: separate` is often used.

Sticky headers can hide keyboard focus. When a user presses Shift+Tab, the focused element may land underneath the header, and WCAG 2.4.11 Focus Not Obscured (Minimum) fails if it is entirely hidden. Set `scroll-padding-top` on the scroll container to the header's height.

Height matters on small or zoomed screens, where a tall header can take a large share of the viewport. An [app shell](./App%20shell.md) that scrolls its content pane avoids some of these issues, since the header sits outside the scrolling region.

_Usage:_

"The table header stopped sticking after the redesign."

"The new wrapper has `overflow: hidden`, so that's now the sticky header's scroll container."
