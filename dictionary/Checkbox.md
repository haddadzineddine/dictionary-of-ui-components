---
description: A control for an independent yes-or-no choice, or for choosing any number of options from a group.
---

A checkbox is a control for an independent yes-or-no choice, or for choosing any number of options from a group. Use the native `<input type="checkbox">` with a `<label>`. Clicking the label toggles the box, which gives a larger target for free.

| Control                       | Choices                  | Takes effect          |
| ----------------------------- | ------------------------ | --------------------- |
| Checkbox                      | Zero, one or many        | Usually on form submit |
| [Radio group](./Radio%20group.md) | Exactly one          | Usually on form submit |
| [Switch](./Switch.md)         | On or off                | Immediately           |

Space toggles a focused checkbox. Enter does not, and in a form it may submit instead. Each box is its own Tab stop. Screen readers (software that reads the interface aloud) announce the label, the role and whether it is checked.

```html
<fieldset>
  <legend>Notify me about</legend>
  <label><input type="checkbox" name="notify" value="invoices" /> Invoices</label>
  <label><input type="checkbox" name="notify" value="reports" /> Reports</label>
</fieldset>
```

Wrap related boxes in a `<fieldset>` with a `<legend>`, so the group's question is available alongside each option.

An unchecked checkbox sends nothing on submission, so the server receives no field at all rather than `false`. An update handler that only writes fields it receives will leave the old value in place, and the user's "off" never saves. Treat a missing field as false, or send the state explicitly. Several boxes sharing a `name` send one pair each, so the server must read all values and not just the last.

A parent checkbox for a group can show a third, partly checked state. Set it from script with `input.indeterminate = true`, as no HTML attribute exists for it. The property is visual and has no effect on submission, which depends only on `checked`. For custom controls, the equivalent is `aria-checked="mixed"`.

If you restyle the box, keep the real input in place and visually hidden. Using `display: none` removes it from the keyboard.

_Usage:_

"People untick marketing emails, save, and it comes back ticked."

"An unchecked checkbox isn't submitted, so our update skips the field. Treat missing as false."
