---
description: A panel that rises from the bottom of a mobile screen, often draggable between heights, for options or supporting content.
---

A bottom sheet is a panel that rises from the bottom of a mobile screen to show options or supporting content, such as share targets or a place's details over a map. Many sheets can be dragged between set heights, often called detents. On wide screens, the same content usually moves to a [modal dialog](./Modal%20dialog.md), [popover](./Popover.md) or [drawer](./Drawer.md).

| Type      | Page behind | Suits                                   | Semantics                   |
| --------- | ----------- | --------------------------------------- | --------------------------- |
| Modal     | Inert       | A choice that must be made or dismissed | `<dialog>` with `showModal()` |
| Non-modal | Usable      | Details alongside a map or list         | Labelled region, or `show()` |

A modal sheet is a dialog with different positioning. Using `<dialog>` provides focus handling, an inert background and Escape, and you still add the dragging.

```css
dialog.sheet {
  margin: auto 0 0;
  width: 100%;
  max-width: none;
  max-height: 90dvh;
  padding-bottom: env(safe-area-inset-bottom);
  overscroll-behavior: contain;
}
```

Dragging must not be the only way to operate it. WCAG 2.5.7 requires a single-pointer alternative, so provide a visible close [button](./Button.md), and make the handle a real button that cycles between heights. This also gives keyboard and screen reader users a way to resize it.

Scrolling and dragging can conflict. A person scrolls the sheet's list to the top, keeps swiping, and the sheet closes or the page behind starts moving. Start a drag-to-close only when the inner content is already at its top. `overscroll-behavior: contain` stops scrolling from chaining to the page in browsers that support it, and a [scroll lock](./Scroll%20lock.md) handles the rest.

The on-screen keyboard can also cover a [text field](./Text%20field.md) near the bottom of the sheet. Units such as `dvh` do not always account for it, so test on real devices and scroll the focused input into view.

Respect the device's [safe area](./Safe%20area.md), and use [reduced motion](./Reduced%20motion.md) for the slide. Return focus to the trigger on close.

_Usage:_

"Scrolling up in the filters keeps closing the whole sheet."

"The bottom sheet drag is firing during scroll. Only start it when the list is at the top."
