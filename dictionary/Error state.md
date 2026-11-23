---
description: The content shown when data or an action fails, saying what happened and how the user can recover.
---

An error state is the content shown when data or an action fails, saying what happened and how the user can recover. A generic "Something went wrong" with no next step leaves the user unable to tell whether to retry, wait or contact support.

Match the size of the error to the size of the failure, so one broken widget does not take down the page.

| Scope                 | Treatment                                       |
| --------------------- | ----------------------------------------------- |
| One field             | [Inline validation](./Inline%20validation.md)   |
| A submitted form      | [Error summary](./Error%20summary.md)           |
| One section or widget | [Inline alert](./Inline%20alert.md) with retry  |
| Whole product degraded | [Banner](./Banner.md)                          |
| Page cannot render    | Full-page error with navigation still available |

A useful error state answers three questions: what failed, whether the user's work is safe, and what to do next. "We couldn't load your invoices. Your data is safe. Try again." is more useful than a status code. Distinguish causes when you can, because being offline, lacking permission and a server fault each call for a different action.

Keep it distinct from an [empty state](./Empty%20state.md). Code that catches a failed request and returns an empty list makes an outage look like missing data.

Preserve what the user entered. A retry that clears a long form turns a small failure into lost work.

For accessibility, an error that appears after an action should reach screen readers, which read the UI aloud. Insert it into a `role="alert"` region, which announces it without moving focus. When a whole view is replaced by the error, move focus to its heading by giving the heading `tabindex="-1"` and calling `.focus()`, otherwise focus can be lost with the removed content. Do not signal the error with red alone, since WCAG 1.4.1 Use of Color requires another cue such as an icon or text.

_Usage:_

"When the reports API fails, the whole dashboard goes blank."

"Wrap each widget so a failure shows a local error state with a retry button."
