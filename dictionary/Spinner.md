---
description: A looping animation showing that work is in progress without saying how much remains.
---

A spinner is a looping animation that shows work is in progress without saying how much remains. It suits short waits of unknown length, such as a [button](./Button.md) submitting a form. A spinner that never stops usually means the request failed and the code has no path out of its loading state.

| Situation                         | Indicator                                 |
| --------------------------------- | ----------------------------------------- |
| Short wait, unknown length        | Spinner                                   |
| Measurable work                   | [Progress bar](./Progress%20bar.md)       |
| Content with a predictable layout | [Skeleton screen](./Skeleton%20screen.md) |
| Action almost certain to succeed  | [Optimistic UI](./Optimistic%20UI.md)     |

An animation conveys nothing to a screen reader, which reads the UI aloud. Add text such as "Loading results" to a `role="status"` region that already exists in the page, so the message is announced without moving focus. Hide the decorative graphic with `aria-hidden="true"`.

```html
<div role="status">
  <svg class="spinner" aria-hidden="true"><!-- ... --></svg>
  <span class="visually-hidden">Loading results</span>
</div>
```

Spinners inside a button have their own problems. Replacing the label changes the button's width and removes its accessible name, so keep the label in place and overlay the graphic. Setting `disabled` during the request can drop keyboard focus. Use `aria-disabled="true"` and ignore repeat clicks instead.

On a fast response, a spinner appears as a brief flicker, so delay it by a few hundred milliseconds. Once shown, keep it visible briefly so it does not flash. Add a timeout that leads to an [error state](./Error%20state.md).

Under WCAG 2.2.2 Pause, Stop, Hide, moving content that runs for more than five seconds alongside other content needs a way to stop it, unless the movement is essential. A preloader that is the only content on the page is not in that position. For long waits beside usable content, show text instead. Under [reduced motion](./Reduced%20motion.md), replace rotation with a slow opacity change.

_Usage:_

"The dashboard spinner has been going for ten minutes."

"The fetch rejected and nothing clears the loading flag. It needs a timeout and an error state."
