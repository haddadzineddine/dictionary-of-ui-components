---
description: A trail of links showing the current page's parent pages in the site hierarchy.
---

A breadcrumb is a trail of links showing where the current page sits in a site's hierarchy, such as Home, Shoes, Running, Trail Pro. It lets people move up a level without using search or the main menu. It suits sites with deep structures, such as stores and documentation. On a flat site with two levels it adds clutter.

A breadcrumb shows hierarchy, while browser history records visits. The common design mistake is mixing them by building the trail from the pages a person happened to visit. The trail then differs for each visitor and stops telling them where the page belongs.

The WAI-ARIA Authoring Practices define a simple structure: a labelled navigation landmark containing an ordered list of links.

```html
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/shoes">Shoes</a></li>
    <li><a href="/shoes/trail-pro" aria-current="page">Trail Pro</a></li>
  </ol>
</nav>
```

| Part        | Requirement                                                    |
| ----------- | -------------------------------------------------------------- |
| Container   | `<nav>` with `aria-label` or `aria-labelledby`                 |
| List        | `<ol>`, because order carries meaning                          |
| Current item | `aria-current="page"` if it is a link, optional if plain text |
| Separators  | Added in CSS so they are not read aloud                        |

No special keyboard behaviour is required. The links are ordinary Tab stops, and the pattern lists keyboard interaction as not applicable. Do not add arrow-key handling or menu roles.

Separators typed into the markup may be read aloud by a screen reader (software that reads the interface aloud). Draw them with a `::before` pseudo-element instead.

Long trails can overflow on small screens. Common fixes are letting the list wrap, showing only the parent as a "Back to Shoes" link, or collapsing the middle levels behind a [button](./Button.md) with an ellipsis. That button needs a name such as "Show full path", and hidden levels must remain reachable. Truncating with CSS alone cuts off the page names people use to orient themselves.

_Usage:_

"Why does the breadcrumb change depending on how I got to this product?"

"It's built from browsing history. It should come from the category tree."
