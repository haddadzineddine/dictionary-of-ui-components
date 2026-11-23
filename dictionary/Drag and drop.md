---
description: Moving an item by pressing it, carrying it with a pointer and releasing it over a target.
---

Drag and drop is moving an item by pressing it, carrying it with a pointer and releasing it over a target. It is used to reorder lists, move [kanban board](./Kanban%20board.md) [cards](./Card.md) and add files to a [file upload](./File%20upload.md). It should not be the only way to do something, because it is difficult or impossible for many people.

| Phase    | User action        | Interface response                        |
| -------- | ------------------ | ----------------------------------------- |
| Pick up  | Presses and moves  | Item lifts, valid targets are indicated   |
| Move     | Carries the item   | Insertion point shown, edges auto-scroll  |
| Drop     | Releases           | Item lands, result saved                  |
| Cancel   | Presses Escape     | Item returns to its origin                |

WCAG treats input methods separately. Under 2.5.7 Dragging Movements (AA), anything done by dragging must also be achievable with a single pointer without dragging, unless dragging is essential. A keyboard alternative alone does not meet this, because it has to work with clicks or taps. Under 2.1.1 Keyboard (A), the function also has to work from a keyboard. A "Move to" menu or Up and Down buttons cover both. Announce each result through a `role="status"` region.

| API                 | Good at                               | Limitation                         |
| ------------------- | ------------------------------------- | ---------------------------------- |
| HTML Drag and Drop  | Files, dragging between windows       | Limited styling, uneven touch support |
| Pointer Events      | Custom reordering, touch and mouse    | You build the behaviour            |

With the HTML API, a drop target that never fires `drop` is a common bug. An element only becomes a valid target if its `dragover` event is cancelled.

```js
zone.addEventListener("dragover", (event) => event.preventDefault());
```

With Pointer Events, touch drags can be cancelled when the browser decides to scroll instead, which fires `pointercancel`. Set `touch-action: none` on a dedicated drag handle, not the whole item, so that users can still scroll and pinch zoom the page.

Save the result [optimistically](./Optimistic%20UI.md) and return the item to its origin if the request fails.

_Usage:_

"Reordering works with a mouse but the list just scrolls on my phone."

"The drag and drop handle needs `touch-action: none`, or the browser takes over the gesture."
