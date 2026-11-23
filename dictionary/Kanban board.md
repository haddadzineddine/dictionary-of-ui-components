---
description: A board of columns representing workflow stages, with cards that move between them as work progresses.
---

A kanban board is a set of columns representing workflow stages, with [cards](./Card.md) that move between them as work progresses. A typical board has To do, In progress and Done. If people mainly need to sort, filter or edit many fields, a [data table](./Data%20table.md) is a better default.

The structure is a list of lists. Each column is a labelled section containing a list of cards, which gives screen readers (software that reads the UI aloud) the column name and item count.

```html
<section aria-labelledby="doing">
  <h2 id="doing">In progress (3)</h2>
  <ul>
    <li><a href="/task/18">Fix invoice rounding</a></li>
  </ul>
</section>
```

[Drag and drop](./Drag%20and%20drop.md) is the expected way to move cards, but it cannot be the only way. WCAG 2.5.7 Dragging Movements requires a single-pointer alternative, and a keyboard method alone does not satisfy it. A "Move to" [dropdown menu](./Dropdown%20menu.md) on each card works for pointer, keyboard and screen reader users together.

| Input        | How a card moves                                           |
| ------------ | ---------------------------------------------------------- |
| Mouse, touch | Drag to a column, or use the "Move to" menu                |
| Keyboard     | Open the menu, or pick up with Space and move with arrows  |
| Screen reader | Use the menu and hear "Moved to Done, position 2"         |

Announce each move through a `role="status"` region, and keep focus on the moved card.

Persistence causes the less visible failures. If position is stored as an integer index, one move rewrites every card below it, and two people moving cards at once can overwrite each other. A sortable rank value between neighbours changes only the moved card. Moves are usually [optimistic](./Optimistic%20UI.md), so a rejected request must return the card to its column and say why.

On narrow screens, the columns exceed the viewport. Horizontal scrolling is acceptable for the board, but dragging near an edge then needs auto-scroll. A single-column view with a stage picker often works better on phones.

_Usage:_

"Two of us moved cards and the order came back scrambled."

"The kanban board saves integer positions. Switch to a rank between neighbours."
