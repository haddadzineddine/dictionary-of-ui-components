---
description: A set of links for moving through a long result set one page at a time, with previous, next and numbered pages.
---

A pagination control is a set of links for moving through a long result set one page at a time, usually with Previous, Next and numbered pages. It gives people a stable position they can return to, share and reason about, such as "page 4". That suits search results, admin lists and a [data table](./Data%20table.md). [Infinite scroll](./Infinite%20scroll.md) suits casual browsing feeds, but it makes the footer hard to reach and a position hard to keep. A "Load more" [button](./Button.md) sits between the two.

Build it as a labelled `<nav>` containing real links, so that each page has a URL.

```html
<nav aria-label="Pagination">
  <ul>
    <li><a href="?page=2" rel="prev">Previous</a></li>
    <li><a href="?page=2" aria-label="Page 2">2</a></li>
    <li><a href="?page=3" aria-label="Page 3" aria-current="page">3</a></li>
    <li><a href="?page=4" aria-label="Page 4">4</a></li>
    <li><a href="?page=4" rel="next">Next</a></li>
  </ul>
</nav>
```

| Part       | Detail                                                      |
| ---------- | ----------------------------------------------------------- |
| Current    | `aria-current="page"` plus a non-colour visual cue          |
| Numbers    | Named "Page 3", since a bare "3" is unclear out of context  |
| Previous   | On page 1, remove it or disable it                          |
| Ellipsis   | Plain text, hidden from assistive technology                |

Keep the visible number inside any accessible name, as WCAG 2.5.3 (Label in Name) requires, so that voice-control users can say what they see. No custom keyboard handling is needed. Links are ordinary Tab stops.

When results load without a full page navigation, two problems appear. Focus stays on a link that may have been re-rendered or removed, and nothing tells a screen reader user that the list changed. Move focus to the results heading, or announce "Page 3 of 12" in a `role="status"` region, and scroll to the top of the list.

Numbered pages built on a database offset can drift. If rows are inserted while someone is reading, items shift across the page boundary, so one record appears twice or another is skipped. For fast-changing data, cursor pagination, which asks for rows after the last one seen, keeps the sequence stable, at the cost of jumping directly to page 37.

_Usage:_

"The same order shows up on page 2 and page 3."

"New rows are shifting the offset. Switch that pagination control to a cursor."
