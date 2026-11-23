---
description: A long list that renders only the rows near the viewport and swaps them as the user scrolls.
---

A virtualized list renders only the rows near the viewport and swaps them as the user scrolls, while a spacer keeps the scrollbar the correct size for the full list. A list of 50,000 rows might have only 30 in the DOM at any moment. Without it, a very long list can make the page slow to render and scroll.

Virtualization has real costs, so try simpler options first.

| Option                     | Keeps rows in DOM | Find-in-page | Suits                    |
| -------------------------- | ----------------- | ------------ | ------------------------ |
| [Pagination](./Pagination%20control.md) | Current page only | Current page | Most business data |
| `content-visibility: auto` | Yes               | Yes          | Long pages, moderate lists |
| Virtualization             | Visible rows only | Rendered rows only | Very large lists   |

The CSS `content-visibility: auto` property skips rendering for off-screen content while leaving it available to find-in-page and the Tab order.

Removing rows from the DOM causes the failures people notice. Pressing Ctrl+F does not find a row that is not rendered, so provide a [search field](./Search%20field.md). Scrolling quickly can show blank space until rows mount, which rendering a few extra rows reduces. Rows of varying height can make the scroll position jump when estimates are corrected, so measure them or use a fixed height.

Focus is the main accessibility risk. If the focused row scrolls out and unmounts, focus falls to the document body and a keyboard user loses their place. Keep the focused row mounted, or restore focus when it returns.

Screen readers, which read the UI aloud, only see what is in the DOM, so state the true size:

```html
<ul aria-label="Contacts">
  <li aria-setsize="50000" aria-posinset="1201">Ada Moreno</li>
  <li aria-setsize="50000" aria-posinset="1202">Ben Okafor</li>
</ul>
```

For tables, use `aria-rowcount` on the table and `aria-rowindex` on each row. Use stable item IDs as keys, since reusing a row by index can leak state such as a checked box into a different record.

_Usage:_

"Ctrl+F can't find a customer I can see further down the list."

"It's a virtualized list, so that row isn't in the DOM. We need a search box."
