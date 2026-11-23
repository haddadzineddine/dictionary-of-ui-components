---
description: Short persistent guidance attached to a form control that explains what to enter or how the value will be used.
---

Helper text is short, persistent guidance attached to a form control. It explains what to enter, the expected format, or how the value will be used, such as "We only use this to send receipts". It sits beside the input in a [form field](./Form%20field.md), and stays visible while the person types.

Each place for guidance has limits.

| Where guidance goes                | When it works                    | Why it can fail                       |
| ---------------------------------- | -------------------------------- | ------------------------------------- |
| Label                              | Naming the field                 | Becomes long and slow to hear         |
| Helper text                        | Format rules, consequences       | Ignored if it is too long             |
| Placeholder                        | A short optional example         | Disappears on typing                  |
| [Tooltip](./Tooltip.md)            | Optional extra detail            | Hidden until requested, hard on touch |

Connect the text to the control with `aria-describedby`, so a screen reader (software that reads the interface aloud) announces it after the label and role when the field receives focus.

```html
<label for="password">New password</label>
<input id="password" type="password" aria-describedby="password-help" />
<p id="password-help">Use at least 12 characters.</p>
```

A common failure is revealing a requirement only after the mistake. A password field gives no rules, the user submits, and only then learns the minimum length. State constraints before input. WCAG 3.3.2 requires labels or instructions where content requires user input.

A related bug is replacing helper text with the error message. Once the field is invalid, the rule that would help the person fix it disappears. Keep the helper text and add the error next to it, or write the error so that it restates the rule. If both are shown, list both ids in `aria-describedby`.

Text below a field can be covered by an on-screen keyboard or a popup, so format rules are often easier to see between the label and the input.

Keep it to one short sentence, and reserve it for fields where people might otherwise get it wrong.

_Usage:_

"People only learn the password rules after the form rejects them."

"Move the rules into helper text under the label, and keep them visible when the error appears."
