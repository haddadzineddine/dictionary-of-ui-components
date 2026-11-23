---
description: A vertical stack of headers that each expand or collapse a section of content.
---

An accordion is a vertical stack of headers that each expand or collapse a section of content. It shortens long pages where people need only some sections, such as an FAQ or a settings list. If people need to read most of the content, leave it expanded, because collapsed sections add clicks and hide text from a quick scan.

| Need                                   | Component                |
| -------------------------------------- | ------------------------ |
| Several optional sections, stacked     | Accordion                |
| Peer views, one visible at a time      | [Tabs](./Tabs.md)        |
| One show or hide control               | Disclosure (`<details>`) |
| Content everyone must read             | Plain headings           |

The WAI-ARIA Authoring Practices define the structure. Each header is a real [button](./Button.md) inside a heading, and the button is the only element in that heading. The button carries `aria-expanded` and `aria-controls`. Enter and Space toggle the panel, and Tab moves through the page as usual.

```html
<h3>
  <button aria-expanded="true" aria-controls="ship">Shipping</button>
</h3>
<div id="ship">Orders leave within two days.</div>
```

A panel can also take `role="region"` with `aria-labelledby` pointing at its button. Avoid this when many panels can be open at once, roughly more than six, because it adds too many landmarks for people using a screen reader, which reads the UI aloud, to navigate.

Native `<details>` elements sharing the same `name` attribute form an exclusive group with no script, so opening one closes the others. Test it with a screen reader.

Single-open behaviour can move content away from the pointer. When a user opens a lower section, the open section above collapses, the content shifts up, and the header they clicked can move out of view. Allow several panels open, or scroll the opened header back into view. Text in a collapsed panel may not appear in find-in-page, so test it and offer an "Expand all" control on long pages. Animate height only when [reduced motion](./Reduced%20motion.md) is not requested.

_Usage:_

"Opening question eight jumps the page and I lose my place."

"The accordion closes question three above it. Let multiple panels stay open."
