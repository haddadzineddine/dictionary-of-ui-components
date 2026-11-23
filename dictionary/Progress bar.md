---
description: A track that fills to show how much of a task has finished, or that work continues when the amount is unknown.
---

A progress bar is a track that fills to show how much of a task has finished. A determinate bar shows a measured value, and an indeterminate bar shows only that work is continuing. A bar that races to 99 percent and then stalls for a minute is usually driven by a timer or a poor estimate instead of measured work.

| Wait                                 | Indicator                                |
| ------------------------------------ | ---------------------------------------- |
| Known amount of work                 | Determinate progress bar                 |
| Unknown length, several seconds+     | Indeterminate bar with status text       |
| Short and unknown                    | [Spinner](./Spinner.md)                  |
| Content with a known layout          | [Skeleton screen](./Skeleton%20screen.md) |

Use the native `<progress>` element where possible. Removing its `value` attribute makes it indeterminate. With a custom `role="progressbar"`, omit `aria-valuenow` for the same result. The bar needs an accessible name, and text between the `<progress>` tags is only a fallback, not a label.

```html
<label for="upload">Uploading report.pdf</label>
<progress id="upload" value="40" max="100">40%</progress>
```

A screen reader, which reads the UI aloud, should not speak every percentage. Announce milestones, such as each quarter and completion, in a separate `role="status"` region. When the bar reports on a page region, set `aria-busy="true"` on that region and clear it when loading ends, including when it fails, because assistive technology may hold back changes while it is set.

Several failures are common. The bar jumps backward when a second stage resets the value, so combine stages into one total or label them "Step 2 of 3". The bar freezes at 62 percent after a failure, so switch it to a visible [error state](./Error%20state.md) with a retry. Long tasks also need a way to cancel.

Use `<meter>` instead for a measurement that is not a task, such as disk usage.

_Usage:_

"The upload sits at 100 percent for ages before it finishes."

"That progress bar only tracks bytes sent. Add a processing stage so it doesn't claim to be done early."
