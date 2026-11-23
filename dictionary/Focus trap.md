---
description: Keeping keyboard focus inside an open overlay, so Tab cycles through its controls and cannot reach the page behind it.
---

A focus trap keeps keyboard focus inside an open overlay, so Tab cycles through its controls and cannot reach the page behind. Without one, a keyboard user tabs out of a [modal dialog](./Modal%20dialog.md) and carries on through hidden links and controls, with no visible sign of where they are. It belongs on modal overlays only. A [popover](./Popover.md) or non-modal panel should let focus leave.

A trap is only acceptable if the user can get out. WCAG 2.1.2, No Keyboard Trap, requires that focus can be moved away using the keyboard alone, or that the user is told how. In a modal, Escape and a visible close [button](./Button.md) meet that need.

| Approach                | Blocks Tab | Hides page from screen readers | Work needed      |
| ----------------------- | ---------- | ------------------------------ | ---------------- |
| `<dialog>` `showModal()` | Yes       | Yes                            | None             |
| `inert` on the background | Yes     | Yes                            | Toggle it        |
| Script handling Tab     | Yes        | No                             | Most, and fragile |

The third row explains a common misunderstanding. Intercepting Tab does nothing for a screen reader's virtual cursor, which moves through content without moving focus. The user can read the page behind a dialog that looks trapped. Making the background inert solves both problems at once.

```js
// Custom overlay rendered as a sibling of the app root
app.inert = true;
overlay.querySelector("[autofocus]")?.focus();

// On close
app.inert = false;
trigger.focus();
```

With `showModal()`, Tab cycles through the dialog's controls and may also reach the browser's own interface. Do not force focus back, because that stops people reaching the address bar.

A hand-written trap breaks in predictable ways. A cached list of focusable elements goes stale when content changes, and elements in iframes or shadow DOM are missed. A trap left active after closing makes the page unreachable by keyboard, so remove it in the same code path that closes the overlay, including route changes.

When the overlay closes, return focus to the element that opened it.

_Usage:_

"Screen reader users can still read the page behind our modal."

"Our focus trap only handles Tab. Set `inert` on the app root while it's open."
