---
description: Saving a user's work automatically as they edit, so that it survives a closed tab or failed connection.
---

Autosave is saving a user's work automatically as they edit, without a Save [button](./Button.md). It protects against losing a draft when a tab closes, a laptop dies or a connection drops. It suits documents, notes and settings. It does not suit actions with consequences, such as publishing or paying, where a change should stay a draft until the person commits to it.

| Step    | Who     | What happens                                    |
| ------- | ------- | ----------------------------------------------- |
| Edit    | User    | Changes content. Status becomes "Unsaved"       |
| Wait    | Client  | Debounce, which waits for a pause in typing     |
| Send    | Client  | Sends changes with a version number. "Saving"   |
| Confirm | Server  | Stores them. Status becomes "Saved"             |
| Fail    | Client  | Keeps changes locally, retries and tells the user |

A false "Saved" label causes data loss. If the status updates before the server responds, or a failed request goes unnoticed, the person closes the tab believing their work is safe. Show the status from the actual result, and make failure visible.

Requests can also finish out of order, so an older save can overwrite a newer one. Send one save at a time per document, or attach a version so the server rejects stale writes. The same check detects edits from a second tab or device, so decide how to resolve that conflict.

For leaving the page, MDN recommends saving on `visibilitychange`, since `beforeunload` and `unload` often do not fire on mobile. Use `fetch` with `keepalive` or `navigator.sendBeacon` for the final small payload. A `beforeunload` handler, added only while work is unsaved, can show the browser's generic warning.

Expose the status with `role="status"` (WCAG 4.1.3), but announce failures and recovery rather than every save, or a screen reader user hears "Saved" throughout their writing. Provide version history or an [undo pattern](./Undo%20pattern.md) for changes people regret.

_Usage:_

"It said Saved, but my last paragraph is gone after the refresh."

"Autosave sets the label before the request finishes. Update it only when the server confirms."
