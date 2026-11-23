---
description: A link at the start of a page that lets keyboard users jump past repeated navigation to the main content.
---

A skip link is a link at the start of a page that lets keyboard users jump past repeated navigation to the main content. Without one, someone using only the keyboard must Tab through every item in the [navbar](./Navbar.md) and [sidebar](./Sidebar.md) on each page before reaching what they came for. It is usually hidden until it receives focus, so most mouse users never see it.

```html
<body>
  <a class="skip-link" href="#main">Skip to main content</a>
  <header>...</header>
  <main id="main" tabindex="-1">...</main>
</body>
```

```css
.skip-link {
  position: absolute;
  transform: translateY(-200%);
}
.skip-link:focus {
  transform: none;
}
```

It should be the first focusable element. Pressing Tab on page load reveals it, Enter activates it, and the next Tab continues from inside `<main>`. `tabindex="-1"` on the target lets it take focus programmatically without adding a Tab stop.

WCAG 2.4.1, Bypass Blocks (Level A), requires a way to skip content repeated across pages. Skip links are one sufficient technique. Headings and landmarks, such as `<main>` and `<nav>`, are also listed, and screen reader users often navigate by them. Those shortcuts are not available to sighted keyboard users without extra tools, so a skip link remains useful alongside them.

| Failure                         | Cause                                  | Fix                                 |
| ------------------------------- | -------------------------------------- | ----------------------------------- |
| Link never appears              | Hidden with `display: none`            | Move it off-screen or clip it       |
| Visible but under the header    | Lower stacking than a sticky bar       | Raise its `z-index`                 |
| Nothing happens on Enter        | Target `id` is missing                 | Add the `id` to `<main>`            |
| Router intercepts the link      | `#main` treated as a route change      | Handle it and focus the target      |
| Target hidden after the jump    | [Sticky header](./Sticky%20header.md) covers it | Set `scroll-padding-block-start` |

In single-page applications, the route changes without a page load and focus may stay in the previous view. After navigation, move focus to the new page's heading or the top of the document.

When revealed, the link needs a clear [focus ring](./Focus%20ring.md).

_Usage:_

"I have to tab through forty nav links on every page."

"We need a skip link as the first focusable element, pointing at `main`."
