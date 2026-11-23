---
description: A panel that slides in from a screen edge to show navigation, details or a form, either modally or beside the page.
---

A drawer is a panel that slides in from a screen edge to show navigation, details or a form. It keeps people on the current page and gives more room than a small dialog, which suits viewing a record from a list or holding filters. A [sidebar](./Sidebar.md) is part of the page layout and stays open. A [modal dialog](./Modal%20dialog.md) is centred and suits a short task. On phones, a [bottom sheet](./Bottom%20sheet.md) is often the better form.

The first decision is whether it blocks the page.

| Type      | Page behind       | Focus                                   | Build with                  |
| --------- | ----------------- | --------------------------------------- | --------------------------- |
| Modal     | Inert, dimmed     | Moves in and stays in                   | `<dialog>` with `showModal()` |
| Non-modal | Still usable      | Follows the trigger in the Tab order    | `<aside>` or `show()`       |

A modal drawer is a dialog with different CSS. Using `<dialog>` provides the inert background, Escape handling and focus return.

```css
dialog.drawer {
  margin: 0 0 0 auto;
  height: 100dvh;
  max-height: none;
}
```

A non-modal drawer must sit next to its trigger in the DOM, or use an equivalent focus order. WCAG 2.4.3 requires a focus order that preserves meaning, and a panel at the end of the document forces keyboard users to Tab through the entire page to reach what they just opened. Keep a labelled close [button](./Button.md), and let Escape close it while focus is inside.

A closed drawer can remain in the Tab order. Moved off-screen with `transform`, it stays focusable, so Tab disappears into invisible links and screen readers read content nobody can see. A closed `<dialog>` avoids this. For a custom panel, apply `inert` or `hidden` when closed, after any exit animation ends.

Slide animations should respect [reduced motion](./Reduced%20motion.md). A modal drawer also needs a [scroll lock](./Scroll%20lock.md) so the page behind does not move.

_Usage:_

"With the filter panel closed, Tab still lands on invisible controls."

"The drawer is only translated off-screen. Set `inert` when it's closed."
