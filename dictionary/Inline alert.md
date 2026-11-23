---
description: A message placed in the page content beside the thing it concerns, reporting information, success, a warning or an error.
---

An inline alert is a message placed within the page content, next to the thing it concerns, that reports information, success, a warning or an error. Because it occupies space in the layout, it stays readable for as long as it is relevant. Use it instead of a [toast](./Toast.md) when the user needs to read the message while working on that part of the page, and instead of a [banner](./Banner.md) when the condition does not affect the whole page.

For forms, narrower patterns exist. [Inline validation](./Inline%20validation.md) belongs to a single field, and an [error summary](./Error%20summary.md) collects every error after submission. An inline alert suits a problem with the form as a whole, such as "Your payment could not be processed."

| Severity | Example                 | Role if inserted after load    |
| -------- | ----------------------- | ------------------------------ |
| Info     | Plan changes next month | `status`                       |
| Success  | Settings saved          | `status`                       |
| Warning  | API key expires today   | `status`, or `alert` if urgent |
| Error    | Payment failed          | `alert`                        |

These roles make screen readers, which read the UI aloud, announce a change without moving focus. An alert already on the page at load is generally not announced, so a static notice needs no live role and is read in document order.

Severity cannot rely on color alone, as WCAG 1.4.1 Use of Color requires another visual cue. Pair the color with an icon and a word such as "Error", and give meaningful icons a text alternative.

An error rendered at the top of a long form can appear off-screen, so the submit [button](./Button.md) seems to do nothing. An alert inserted above a control can also push that control down just as the user clicks it. Render the alert near the action, reserve its space, or move focus to it after a failed submission.

_Usage:_

"Clicking Pay does nothing when the card is declined."

"It does show an error, but above the fold. Move the inline alert next to the Pay button."
