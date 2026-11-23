---
description: A field for a short one-time passcode sent by SMS, email or an authenticator app during sign-in.
---

An OTP input is a field for a one-time passcode, the short code sent by SMS, email or an authenticator app during sign-in. Designs often show it as six separate boxes. The more robust build is one input styled to look like boxes, because a single field handles paste, autofill and deletion without any script.

```html
<label for="code">Verification code</label>
<input id="code" name="code" type="text" inputmode="numeric"
       autocomplete="one-time-code" maxlength="6" />
```

| Attribute                       | Purpose                                     |
| ------------------------------- | ------------------------------------------- |
| `autocomplete="one-time-code"`  | Lets the browser or OS offer the code       |
| `inputmode="numeric"`           | Shows a digit keyboard without number rules |
| `type="text"`                   | Keeps leading zeros                         |
| `maxlength`                     | Limits entry to the code length             |

Do not use `type="number"`. A [number input](./Number%20input.md) has no use for leading zeros, and its arrow keys can change the code. If a code may contain letters, drop `inputmode`.

Split boxes commonly break paste. The user copies 482913, pastes, and only the 4 appears, because the first box accepts a single character. The Understanding document for WCAG 3.3.8, Accessible Authentication (Minimum), says a code field must allow pasting or automatic filling, and calls out split fields that take only one digit on paste.

If the design requires separate boxes, each needs a label such as "Digit 3 of 6", the group needs a name, paste must spread across all boxes, and Backspace in an empty box must move to the previous one. Screen reader users then hear six fields instead of one, which is the main reason to prefer the single input.

Submitting automatically on the last digit can fail WCAG 3.2.2 unless users are told in advance, and it gives no chance to correct a mistake. Keep a visible Verify [button](./Button.md).

Codes expire, so state how long one lasts, offer a resend option, and report wrong or expired codes in text beside the field.

_Usage:_

"Pasting the code from my password manager only fills the first box."

"The OTP input is six separate fields. Switch to one field with `autocomplete="one-time-code"`."
