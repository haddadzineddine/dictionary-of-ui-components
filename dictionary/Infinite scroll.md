---
description: A list that loads and appends more items automatically as the user nears the end.
---

Infinite scroll loads and appends more items automatically as the user nears the end of a list. It is usually triggered by an `IntersectionObserver`, a browser API that reports when a marker element near the bottom comes into view. It suits feeds that people browse without a specific target, and it works poorly when people need to find, compare or return to a particular item.

| Pattern                                     | Position shareable | Footer reachable | Suits              |
| ------------------------------------------- | ------------------ | ---------------- | ------------------ |
| [Pagination](./Pagination%20control.md)     | Yes                | Yes              | Search, records    |
| Load more [button](./Button.md)                            | With extra work    | Yes              | Product listings   |
| Infinite scroll                             | With extra work    | No, unless moved | Social-style feeds |

Several failures are characteristic. The footer keeps moving away as items load, so its links cannot be clicked. Opening an item and pressing Back returns the user to the top of the list. Memory grows as thousands of items accumulate, which a [virtualized list](./Virtualized%20list.md) can address. To restore position, store the page or item in the URL with `history.replaceState` and reload that slice on return.

People using a keyboard or a screen reader, which reads the UI aloud, face a further problem. Content that loads as focus moves can trap them in the list, unable to reach anything after it. A "Load more" button avoids this, because the user decides when content is added.

If you do build a feed, the WAI-ARIA Authoring Practices define a `feed` pattern:

```html
<div role="feed" aria-label="Updates" aria-busy="false">
  <article aria-posinset="1" aria-setsize="-1" aria-labelledby="t1">...</article>
</div>
```

Use `aria-setsize="-1"` when the total is unknown. Set `aria-busy="true"` while articles are being added and return it to `false` afterwards. The pattern recommends Page Down and Page Up to move between articles, and Control+End to move past the feed. Announce loading and the end of the list through a `role="status"` region, and never remove the item that has focus.

_Usage:_

"I can't click Privacy in the footer because the page keeps growing."

"That's infinite scroll pushing it away. Switch to a Load more button."
