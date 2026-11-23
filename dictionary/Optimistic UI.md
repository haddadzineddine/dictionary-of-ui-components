---
description: Showing the result of an action immediately, before the server confirms it, and rolling back if the request fails.
---

Optimistic UI shows the result of an action immediately, before the server confirms it, and rolls back if the request fails. A like [button](./Button.md) that fills on tap, while the request runs in the background, is the typical example. It removes the visible wait on actions that almost always succeed.

| Step | Who    | What happens                                |
| ---- | ------ | ------------------------------------------- |
| 1    | User   | Triggers the action                         |
| 2    | Client | Saves the previous state and updates the UI |
| 3    | Client | Sends the request                           |
| 4    | Server | Accepts or rejects it                       |
| 5    | Client | On success, reconciles with the response    |
| 6    | Client | On failure, restores state and tells the user |

Use it for frequent, low-stakes, reversible actions such as starring, reordering or renaming. Do not use it for payments, permission changes or anything where showing success falsely would mislead someone. For those, show a pending state with a [spinner](./Spinner.md) until the server confirms.

A silent rollback is a common failure. The user likes a post, moves on, and later finds the like has vanished because the request failed and nothing said so. Every rollback needs a message, usually a [toast](./Toast.md) or [inline alert](./Inline%20alert.md) with a retry.

Race conditions are the second failure. If a user toggles a star on and off quickly, responses can arrive out of order and leave the wrong final state. Cancel earlier requests, or ignore any response that is not the latest for that item. Retried requests can also create duplicates, so give each create operation a client-generated ID the server can deduplicate.

Assistive technology needs the same truth as the screen. Update states such as `aria-pressed` immediately, and when a rollback occurs, announce it through a `role="alert"` region, because a state that silently reverts is otherwise easy to miss.

_Usage:_

"Comments sometimes appear twice after a flaky connection."

"The optimistic UI retries without an idempotency key. Generate an ID on the client so the server can dedupe."
