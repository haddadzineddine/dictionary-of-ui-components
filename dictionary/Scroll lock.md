---
description: Stopping the page behind an open overlay from scrolling, without shifting the layout or losing the scroll position.
---

A scroll lock stops the page behind an open overlay from scrolling. Without one, someone scrolling a long [modal dialog](./Modal%20dialog.md) reaches its end and the page underneath starts moving, so when the dialog closes they are in a different place. The native `<dialog>` does not do this for you: `showModal()` makes the page inert, but the page can still scroll.

```css
html {
  scrollbar-gutter: stable;
}

html:has(dialog:modal) {
  overflow: hidden;
}

dialog {
  overscroll-behavior: contain;
}
```

The options address different parts of the problem.

| Technique                         | Effect                                   | Drawback                         |
| --------------------------------- | ---------------------------------------- | -------------------------------- |
| `overflow: hidden` on the root    | Stops page scrolling                     | Removes the scrollbar, shifting layout |
| `scrollbar-gutter: stable`        | Reserves the scrollbar's space           | Leaves a visible empty gutter    |
| `overscroll-behavior: contain`    | Stops scroll chaining from the overlay   | Applies only to scroll containers |
| `position: fixed` on the body     | Holds the page where `overflow` is not enough | Resets scroll unless restored |

A common bug is layout shift. On systems with classic scrollbars, hiding overflow removes the scrollbar, the page becomes wider, and everything jumps sideways as the dialog opens. `scrollbar-gutter: stable` on the root prevents this by keeping the space reserved.

Scroll chaining is when scrolling past the end of one container continues on its parent. Support for stopping it varies, so test on real devices.

Setting `position: fixed` on the body sends the page to the top unless you store `scrollY`, offset the body by it, and restore it on close.

A lock can also fail to release. If a route change unmounts the overlay without running its cleanup, the page stays unscrollable. Deriving the lock from CSS, as in the `:has()` rule above, avoids this because the lock ends when the dialog closes. With nested overlays and a script-based lock, count open layers and release only when the last one closes.

Keep the overlay's own content scrollable so zoomed-in users can reach all of it.

_Usage:_

"The page jumps sideways every time the modal opens."

"The scroll lock removes the scrollbar. Add `scrollbar-gutter: stable` to the root."
