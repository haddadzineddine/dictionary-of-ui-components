---
description: A text input for entering a query, usually inside a search landmark, that filters content or returns results.
---

A search field is a text input for entering a query that filters the current page or returns results. Use `<input type="search">` inside the `<search>` element. The input is exposed to assistive technology with the `searchbox` role, and the wrapper creates a landmark that screen reader users can jump to.

```html
<search>
  <form action="/search">
    <label for="q">Search articles</label>
    <input id="q" name="q" type="search" />
    <button type="submit">Search</button>
  </form>
</search>
```

If `<search>` is not an option, `role="search"` on the `<form>` gives the same landmark. A magnifying glass alone is not a label, so give the input a visible label or an `aria-label`, and name any icon-only [button](./Button.md).

Some browsers show a clear icon, and Chrome also clears the field on Escape. Do not rely on either. If clearing matters, add your own labelled control and return focus to the input afterwards.

| Need                                | Use                                       |
| ----------------------------------- | ----------------------------------------- |
| Query that returns a results page   | Search field                              |
| Live filter of a visible list       | Search field with a status message        |
| Suggestions to choose from          | [Combobox](./Combobox.md)                 |
| Jump to commands across the product | [Command palette](./Command%20palette.md) |

Live results have two common failures. The first is silence: the list changes, but a screen reader user hears nothing. WCAG 4.1.3 treats text such as "5 results returned" as a status message, so put the count in a `role="status"` element that exists before the update.

The second is a race. Requests sent on each keystroke can return out of order, so results for "car" can overwrite results for "cart" while the field still reads "cart". Debounce input, which means waiting for a short pause in typing, and cancel or ignore stale requests with an `AbortController`.

Keep the query in the URL so results can be shared. When nothing matches, show an [empty state](./Empty%20state.md) that repeats the query and suggests a next step.

_Usage:_

"Search sometimes shows results for what I typed two letters ago."

"The search field has a response race. Abort the previous request on each new query."
