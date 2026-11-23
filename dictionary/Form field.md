---
description: The unit that groups a label, control, hint and error message so that they work together.
---

A form field is the unit that groups a label, a control, optional hint text and an error message. Design systems usually provide it as a wrapper so every input gets the same layout. The parts must be connected in the markup as well as placed near each other.

| Part    | Element                 | Connected with                       |
| ------- | ----------------------- | ------------------------------------ |
| Label   | `<label>`               | `for` matching the control's `id`    |
| Control | `<input>`, `<select>`   | The `id` itself                      |
| Hint    | Text element            | `aria-describedby` on the control    |
| Error   | Text element            | `aria-describedby`, `aria-invalid`   |

```html
<div class="field">
  <label for="vat">VAT number</label>
  <input id="vat" name="vat" aria-describedby="vat-hint vat-error"
         aria-invalid="true" />
  <p id="vat-hint">Starts with a two-letter country code.</p>
  <p id="vat-error">Enter a VAT number in the correct format.</p>
</div>
```

A connected label is announced when the control receives focus, and clicking it moves focus to the control. When the connection is broken, clicking the label does nothing. A screen reader (software that reads the interface aloud) then announces only "edit text, blank".

The usual cause is a duplicated or generated `id`. When a wrapper is rendered twice with the same hard-coded `id`, every label points to the first input on the page, so clicking the second label fills in the wrong field. Generate a unique `id` per instance.

[Helper text](./Helper%20text.md) and errors are linked by `aria-describedby`, which accepts several ids and reads them in the order listed. Show the error in text, because colour alone fails WCAG 1.4.1, and set `aria-invalid="true"` only once the value has actually failed. The timing belongs to [inline validation](./Inline%20validation.md).

For a question answered by several controls, such as a [radio group](./Radio%20group.md) or date of birth in three inputs, use `<fieldset>` with `<legend>` around them. The legend names the group and each control keeps its own label. Marking required fields with the `required` attribute conveys the state to assistive technology, and a visible marker or the word "required" conveys it to everyone else.

_Usage:_

"Clicking the Billing email label focuses the Shipping email input."

"Both form fields use the same hard-coded `id`. Generate one per instance."
