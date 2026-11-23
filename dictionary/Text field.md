---
description: A single-line input for short typed values such as a name, email address or phone number.
---

A text field is a single-line input for short typed values, such as a name, email address or phone number. Use the native `<input>` element with a visible `<label>`. For content that may run over several lines, use a [textarea](./Textarea.md). When the value must come from a known list, use a [select](./Select.md) or [combobox](./Combobox.md).

The `type` attribute changes the on-screen keyboard and the validation the browser performs, while the field looks much the same.

| Value      | Use for             | Effect                                     |
| ---------- | ------------------- | ------------------------------------------ |
| `text`     | General short text  | No format check                            |
| `email`    | Email addresses     | Format check, keyboard with `@`            |
| `tel`      | Phone numbers       | Phone keypad, no format check              |
| `url`      | Web addresses       | Format check, URL keyboard                 |
| `password` | Secrets             | Masks characters                           |

```html
<label for="email">Work email</label>
<input id="email" name="email" type="email" autocomplete="email" />
```

The `autocomplete` attribute tells browsers and password managers what the field holds, so they can fill it in. WCAG 1.3.5 expects this on fields that collect information about the user.

A common failure is using a placeholder as the label. The text disappears as soon as the user starts typing, so anyone who pauses or returns to check the field cannot tell what it asks for. A placeholder may add an example, but the label should stay visible. The [form field](./Form%20field.md) entry covers how the label, hint and error fit together.

A native input needs no keyboard work: Tab focuses it, and arrows, Home and End move the caret. Pressing Enter usually submits the surrounding form.

Use `readonly` when a value should be visible, focusable and submitted but not edited. A `disabled` field is skipped by Tab and is not submitted. Blocking paste makes entry harder, especially for people using password managers, so leave it enabled.

_Usage:_

"Users keep emailing to ask what the second box on the signup form is for."

"Its only label is a placeholder, so it vanishes on typing. Give the text field a real label."
