---
description: A horizontal bar of primary site links, usually at the top of every page, often collapsing into a menu on small screens.
---

A navbar is a horizontal bar of primary links, usually at the top of every page, holding the logo, main sections and account controls. It suits products with a small number of top-level destinations. When there are many sections or deep hierarchy, a [sidebar](./Sidebar.md) has more room. On phones, [bottom navigation](./Bottom%20navigation.md) puts the same destinations within reach of the thumb.

Build it from a `<nav>` containing a list of links, and mark the current page.

```html
<header>
  <nav aria-label="Main">
    <ul>
      <li><a href="/" aria-current="page">Home</a></li>
      <li><a href="/pricing">Pricing</a></li>
    </ul>
  </nav>
</header>
```

If a page has several `<nav>` elements, give each a unique label. Leave out the word "navigation", because the role is announced as well, and "Main navigation navigation" is what the user would hear. Keep links in the same relative order across pages, which WCAG 3.2.3 requires.

A common accessibility mistake is applying ARIA menu roles to site links. `role="menu"` promises desktop-application behaviour, including arrow-key movement, and removes the list semantics people expect. The WAI-ARIA Authoring Practices say the disclosure pattern is better suited to most websites.

| Part             | Build it as                                       | Keyboard                  |
| ---------------- | ------------------------------------------------- | ------------------------- |
| Link             | `<a href>`                                        | Tab, Enter                |
| Section dropdown | [`<button aria-expanded>`](./Button.md) that reveals links       | Enter or Space, Escape    |
| Mobile menu      | The same button at a narrow [breakpoint](./Breakpoint.md) | Enter or Space, Escape |

Sticky navbars cause a separate bug. When someone tabs backwards or follows an in-page link, the target can land behind the bar. WCAG 2.4.11 requires that a focused element is not entirely hidden by author content. Setting `scroll-padding-block-start` to the bar's height on the scroll container fixes both cases.

Navbars also overflow when text is zoomed, because links cannot wrap in a fixed-height row. WCAG 1.4.10 expects reflow at a width of 320 CSS pixels, so collapse the links before they are clipped.

_Usage:_

"When I tab back up the page, focused links disappear under the header."

"The navbar is sticky. Add `scroll-padding-block-start` matching its height."
