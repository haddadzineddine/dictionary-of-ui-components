---
description: A prominent round button fixed above the content, usually in a bottom corner, for a screen's main action.
---

A floating action [button](./Button.md), often shortened to FAB, is a prominent button fixed above the content, usually in a bottom corner of a mobile screen. It holds the main action on that screen, such as composing a message. Use it when one action dominates and the user needs it at any scroll position. If a screen has several equal actions, or the action fits in the page header or a [toolbar](./Toolbar.md), an ordinary button is simpler.

The FAB has no special role. Build it as a native `<button>` with an accessible name, since most FABs show only an icon. Tab reaches it, and Enter or Space activates it.

```css
.fab {
  position: fixed;
  inset-block-end: calc(16px + env(safe-area-inset-bottom));
  inset-inline-end: 16px;
}
```

The common failure is covering content. The last row of a list ends up under the button, so its menu or link cannot be tapped. Reserve space at the end of the scrolling content and account for the device [safe area](./Safe%20area.md).

The same overlap affects keyboard users. WCAG 2.4.11 requires that a focused element is not entirely hidden by author-created content, and a fixed button can hide one as the page scrolls to it. Setting `scroll-padding-block-end` on the scroll container keeps focused items clear.

| Problem                         | Fix                                        |
| ------------------------------- | ------------------------------------------ |
| Last list item is covered       | Add bottom padding to the list             |
| Focused element sits underneath | Use `scroll-padding-block-end`             |
| Clashes with tab bar            | Offset it above [bottom navigation](./Bottom%20navigation.md) |

Fixed positioning changes where the button appears, but not its place in the Tab order, which follows the DOM. A FAB at the end of the markup is reached last.

If the button expands into several actions, treat it as a menu button with `aria-haspopup="menu"` and `aria-expanded`, and follow the [dropdown menu](./Dropdown%20menu.md) keyboard behaviour.

_Usage:_

"I can't tap the kebab menu on the last row. The compose button is on top of it."

"The FAB overlaps the list end. Add bottom padding to the list that matches its height."
