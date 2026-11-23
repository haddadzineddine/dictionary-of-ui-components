---
description: A multi-line plain text input for longer content such as comments, messages and descriptions.
---

A textarea is a multi-line plain text input for longer content such as comments, messages and descriptions. Use the native `<textarea>` with a visible `<label>`. For a short single value, use a [text field](./Text%20field.md). If people need headings, links or bold, use a [rich text editor](./Rich%20text%20editor.md).

Initial content goes between the tags rather than in a `value` attribute, and any whitespace there becomes part of the value. Indenting the closing tag in a template is a common reason a textarea appears to start with stray spaces.

```html
<label for="note">Delivery note</label>
<textarea id="note" name="note" rows="4" maxlength="500"></textarea>
```

| Attribute or property   | Effect                                                     |
| ----------------------- | ---------------------------------------------------------- |
| `rows`                  | Visible lines. Defaults to 2                               |
| `cols`                  | Visible width in average characters. Defaults to 20        |
| `maxlength`             | Limit in UTF-16 code units                                 |
| `wrap="hard"`           | Inserts line breaks on submit. Requires `cols`             |
| `resize` (CSS)          | Controls the drag handle                                   |

Character limits are a frequent source of bugs. `maxlength` counts UTF-16 code units, so many emoji count as two. Line breaks are normalised to two characters on submission, so a value that fits the counter in the browser can exceed a server limit. Pasted text can also be cut off at the limit with no message. Show a live count, validate on the server using the same counting rule, and tell the user when text was trimmed.

Enter inserts a new line and Tab moves focus to the next control. Do not intercept Tab to insert indentation unless the user has a documented way to leave, because WCAG 2.1.2 forbids keyboard traps.

Removing the resize handle takes away a control people use to read their own text. For auto-growing fields, MDN lists `field-sizing: content` as newly available across current browsers since June 2026. Older browsers ignore it, so keep a sensible `rows` value.

_Usage:_

"The form says 500 characters left, but the API rejects it as too long."

"The textarea counts a newline as one and the submitted value counts it as two. Match the server's rule."
