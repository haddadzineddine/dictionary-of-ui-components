---
description: Checking a form field and showing the result next to it before or at submission, rather than only after a full page reload.
---

Inline validation is checking a field and showing the result next to it, instead of waiting until a submitted form comes back with errors. A common failure is an error that appears too soon: a person types the first letter of an email address and is immediately told it is invalid.

Timing decides whether it helps.

| When to check   | Suits                                    | Risk                               |
| --------------- | ---------------------------------------- | ---------------------------------- |
| On each input   | Password rules, character counts, fixing an existing error | Errors while still typing |
| When leaving the field | Format checks such as email or date | Focus moves before the user reads it |
| On submit       | Every field, always                      | Late feedback if used alone        |

A common pattern waits until the user leaves a field before first showing an error, then re-checks on each input while they fix it. The CSS `:user-invalid` selector supports this, because it matches only after the user has interacted with the control, whereas `:invalid` matches an empty required field on page load.

```css
input:user-invalid {
  border-color: var(--danger);
}
```

Also validate on submit and on the server.

WCAG 3.3.1 requires that errors are identified and described in text, so a red border is not enough. Put the message in the [form field](./Form%20field.md), link it with `aria-describedby`, and set `aria-invalid="true"` only after the value has failed. The W3C forms tutorial suggests `aria-live="polite"` for feedback while typing, so that the message is read when the user pauses instead of on every keystroke.

Say what to do, such as "Enter a date in the format DD/MM/YYYY", rather than "Invalid input". Keep the submit [button](./Button.md) enabled so people can submit and see an [error summary](./Error%20summary.md).

Async checks, such as username availability, need a pending state and must ignore stale responses.

_Usage:_

"The email field turns red as soon as I type one letter."

"The inline validation runs on input. Wait for blur first, then re-check while they fix it."
