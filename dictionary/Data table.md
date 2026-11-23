---
description: Rows and columns of structured records, built so people can read, compare, sort and act on them.
---

A data table presents structured records in rows and columns so people can read, compare, sort and act on them. Use it when each row has the same fields and people need to compare values down a column. For a small set of items with varied content, a [card](./Card.md) or list is usually easier to scan.

Build it with a native `<table>`, which gives screen readers (software that reads the UI aloud) row and column relationships for free. A table made of `<div>` elements announces no headers unless every role is added by hand.

```html
<table>
  <caption>Open invoices</caption>
  <thead>
    <tr>
      <th scope="col" aria-sort="ascending"><button>Due date</button></th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
</table>
```

Put a [button](./Button.md) inside each sortable header and set `aria-sort` on the `<th>` of the sorted column.

| Content                               | Pattern                      |
| ------------------------------------- | ---------------------------- |
| Static data, few controls             | Table                        |
| Many interactive cells, spreadsheet-like | Grid, with arrow-key movement |

The WAI-ARIA Authoring Practices recommend a grid when a table holds many widgets, because a grid has one Tab stop and arrow keys move between cells. It takes significant work, so do not adopt it for a table with one link per row.

Wide tables are the common failure on small screens. Wrap the table in a scrolling container so the page itself does not overflow. Some browsers do not make scrolling regions keyboard-focusable, so add `tabindex="0"`, `role="region"` and an `aria-label` to it. WCAG 1.4.10 Reflow allows data tables to scroll in two dimensions, but the headings, search and [pagination](./Pagination%20control.md) around them must still reflow.

For long data, use pagination or a [virtualized list](./Virtualized%20list.md). If rows are missing from the DOM, set `aria-rowcount` to the total and `aria-rowindex` on each row. Keep column headers visible with a [sticky header](./Sticky%20header.md).

_Usage:_

"Keyboard users have to tab through 400 links in the orders list."

"That's a data table acting like a grid. Use the grid pattern, or reduce it to one link per row."
