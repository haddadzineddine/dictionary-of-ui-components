---
description: A brief, non-blocking message that appears over the page to report a result, then usually leaves by itself.
---

A toast is a brief message that appears over the page to report the result of an action, such as "Message sent", and usually leaves after a few seconds. It does not block the interface or take focus. A common failure is an "Upload failed" toast that disappears while the user is looking elsewhere, leaving no record of what went wrong.

Use a toast only for information the user can afford to miss or can find again.

| Message                                       | Component                                   |
| --------------------------------------------- | ------------------------------------------- |
| Saved, copied, sent                           | Toast                                       |
| Condition affecting the whole page or account | [Banner](./Banner.md)                       |
| Problem with one section                      | [Inline alert](./Inline%20alert.md)         |
| Decision needed before continuing             | [Alert dialog](./Alert%20dialog.md)         |

Screen readers, which read the interface aloud, learn about toasts through a live region: an element whose changes are announced without moving focus. Keep an empty container with `role="status"` in the page from the start, then insert each message into it. A region created at the same moment as its text may not be announced. Reserve `role="alert"` for errors, because it can interrupt current speech.

```html
<div role="status" class="toast-region"></div>
```

A timeout is acceptable when the same information exists elsewhere, such as a sent message appearing in the Sent folder. If the toast is the only place the information appears, WCAG 2.2.1 Timing Adjustable applies, so keep it on screen until dismissed. Pause the timer while the toast is hovered or contains focus.

Actions inside toasts need a second route. Live regions usually announce content as plain text, so a screen reader user may not learn that a [button](./Button.md) exists, and a keyboard user may not reach it in time. Offer any [undo](./Undo%20pattern.md) from a menu, history view or shortcut as well. Queue multiple toasts and cap how many show at once.

_Usage:_

"The export error toast disappeared before I could read which file failed."

"Errors should not time out. Keep it until dismissed, and list the failure on the exports page too."
