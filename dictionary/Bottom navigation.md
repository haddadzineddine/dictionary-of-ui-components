---
description: A fixed bar along the bottom of a mobile screen with links to a small number of top-level destinations.
---

Bottom navigation is a fixed bar along the bottom of a mobile screen, with links to a small number of top-level destinations, commonly three to five. Each item pairs an icon with a short label. It keeps the main sections within reach of the thumb and visible at all times. With more destinations than fit, use a [drawer](./Drawer.md) or a "More" item. On wide screens, a [sidebar](./Sidebar.md) or [navbar](./Navbar.md) usually replaces it.

Although it can look like a row of [tabs](./Tabs.md), it navigates between destinations, so it should be a `<nav>` containing links rather than an ARIA tab list.

```html
<nav aria-label="Primary" class="bottom-nav">
  <a href="/" aria-current="page">
    <svg aria-hidden="true">...</svg> Home
  </a>
  <a href="/orders">
    <svg aria-hidden="true">...</svg> Orders
  </a>
</nav>
```

```css
.bottom-nav {
  position: fixed;
  inset-inline: 0;
  bottom: 0;
  padding-block-end: env(safe-area-inset-bottom);
}
```

Each link is a normal Tab stop, activated with Enter. Screen readers announce the visible text and `aria-current="page"` for the current destination. Keep the labels visible, because icons alone are ambiguous.

| Symptom                                | Cause                     | Fix                                      |
| -------------------------------------- | ------------------------- | ---------------------------------------- |
| Last list item hidden behind the bar   | Fixed bar overlaps content | Add bottom padding to the main region   |
| Bar sits under the home indicator      | Ignores the [safe area](./Safe%20area.md) | Pad with the `env()` inset |
| Focused link hidden while tabbing      | Bar covers it (WCAG 2.4.11) | Set `scroll-padding-block-end`         |
| Bar floats above the on-screen keyboard | Viewport resizes on input | Hide it while a [text field](./Text%20field.md) has focus |
| Mis-taps on neighbouring items         | Small targets             | Size each item as a generous [touch target](./Touch%20target.md) |

State preservation is the less visible problem. If tapping a section resets its scroll position and filters, people lose their place every time they compare two sections. Keep each section's state when moving away. Tapping the current item again conventionally scrolls that section to the top.

Mark the current item with more than colour, as WCAG 1.4.1 requires. A filled icon, an indicator or a bolder label works.

_Usage:_

"Checkout is stuck behind the tab bar on iPhones."

"The bottom navigation overlaps the page. Pad the content by its height plus the safe-area inset."
