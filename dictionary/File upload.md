---
description: A control for choosing files from a device and sending them, often with a drop zone, progress and per-file errors.
---

A file upload is a control for choosing files from a device and sending them to a server. The native `<input type="file">` opens the system file picker, works from the keyboard, and on phones can offer the camera. A custom drop zone is an addition to this control and should not replace it.

```html
<label for="receipts">Upload receipts (PDF or JPEG)</label>
<input id="receipts" type="file" name="receipts"
       accept=".pdf,image/jpeg" multiple />
```

The `accept` attribute is only a hint to the file picker. Users can usually override it, so a wrong file type can still arrive. Check type and size in the browser for quick feedback, and validate again on the server, which is the only check that can be trusted.

| Stage    | What the interface does                                |
| -------- | ------------------------------------------------------ |
| Choose   | Picker or drop, with accepted types and limits stated  |
| Check    | Reject wrong type or size with a specific message      |
| Upload   | Show a [progress bar](./Progress%20bar.md) per file    |
| Finish   | List the file name with a remove [button](./Button.md) |
| Fail     | Keep the file listed, with the reason and a retry      |

A dropzone built only on [drag and drop](./Drag%20and%20drop.md) excludes keyboard users and anyone who cannot drag. WCAG 2.5.7 requires a single-pointer alternative to dragging, and a visible "Choose files" control provides it.

Styled upload controls often break because the real input is hidden with `display: none`, which takes it out of the Tab order. Keep it visually hidden but focusable, or use a real button that calls `input.click()`.

Choosing the same file twice does nothing by default. The `change` event does not fire because the value did not change. Clear it after handling with `input.value = ""`.

Announce progress milestones and results through a `role="status"` region, so that screen reader users know when the upload ends.

_Usage:_

"If an upload fails and I pick the same file again, nothing happens."

"The file upload input keeps its old value, so `change` doesn't fire. Reset it after each attempt."
