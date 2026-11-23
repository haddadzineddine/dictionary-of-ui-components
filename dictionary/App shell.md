---
description: The persistent frame of an application, such as header and navigation, around a content area that changes.
---

An app shell is the persistent frame of an application, such as its header and navigation, around a content area that changes from view to view. Moving between screens replaces only the content, so the frame stays put and keeps its state. In progressive web apps, the term also refers to caching that frame so it appears before any data has loaded.

| Region              | Element    | Typical content                      |
| ------------------- | ---------- | ------------------------------------ |
| Top bar             | `<header>` | Logo, search, account                |
| Primary navigation  | `<nav>`    | [Sidebar](./Sidebar.md) links        |
| Content             | `<main>`   | The current view                     |
| Mobile navigation   | `<nav>`    | [Bottom navigation](./Bottom%20navigation.md) |

These elements create landmarks, which let people using a screen reader, software that reads the UI aloud, jump between regions. Give multiple `<nav>` elements distinct labels, and add a [skip link](./Skip%20link.md) so keyboard users can bypass the frame.

```css
.shell {
  display: grid;
  grid-template: "top top" auto "nav main" 1fr / 16rem 1fr;
  height: 100dvh;
}
.shell main { overflow: auto; min-height: 0; }
```

On mobile browsers, `100vh` is based on the largest viewport, with browser toolbars retracted, so the bottom of a full-height shell can sit behind them. The `dvh` unit tracks the visible area but changes as toolbars move, which can resize content during scrolling. The `svh` unit is stable and always fits, at the cost of some unused space when toolbars retract.

A grid child will not scroll unless its minimum size is released, so a `<main>` without `min-height: 0` can push the page taller and produce two scrollbars. With scrolling inside `<main>`, the browser may not restore scroll position on Back, so the router may have to do it.

Route changes need explicit handling because no page load happens. Move focus to the new view's heading or `<main>`, and update the document title, or a screen reader user receives no sign that anything changed. Keep a failed view contained in the content area so navigation still works.

_Usage:_

"The bottom nav is hidden behind Safari's toolbar on iPhones."

"The app shell uses `100vh`. Switch it to `100dvh` and pad for the [safe area](./Safe%20area.md)."
