---
description: A field for numeric quantities, with step controls and range limits, and a poor fit for digit strings such as card numbers.
---

A number input is a field for numeric quantities, such as how many tickets to buy. The native `<input type="number">` validates the entry, supports `min`, `max` and `step`, and is exposed to assistive technology with the `spinbutton` role. Use it for values where adding or subtracting one makes sense. For an approximate value, use a [slider](./Slider.md).

Many values that contain digits are not numbers. Card numbers, postal codes, phone numbers and one-time codes should not use it, because arrow keys can change them and leading zeros have no numeric meaning. For these, use a [text field](./Text%20field.md) with `inputmode`.

| Value              | Markup                                            |
| ------------------ | ------------------------------------------------- |
| Quantity           | `type="number" min="1" step="1"`                  |
| Price              | `type="text" inputmode="decimal"`                 |
| Postal code        | `type="text" autocomplete="postal-code"`          |
| Numeric PIN        | `type="text" inputmode="numeric"`                 |

The default `step` is 1, so a value of `1.5` is invalid unless you set `step="0.5"` or `step="any"`. This is a frequent reason a form refuses a price that looks correct. When the typed text is not a valid number, the input's `.value` is typically an empty string, so code can read a blank where the user can see text. Check `input.validity.badInput` to tell the two apart.

For a custom control, the WAI-ARIA Authoring Practices define these keys for the `spinbutton` role.

| Key                  | Action                                  |
| -------------------- | --------------------------------------- |
| Up, Down Arrow       | Increase or decrease by one step        |
| Page Up, Page Down   | Optionally change by a larger step      |
| Home, End            | Go to the minimum or maximum, if known  |

Focus stays in the text field, and increment [buttons](./Button.md) are usually left out of the Tab order because the arrow keys do the same job. Set `aria-valuenow`, `aria-valuemin` and `aria-valuemax`, and `aria-invalid="true"` when the value is out of range.

_Usage:_

"The price field rejects 19.99 with a 'nearest valid value' error."

"That number input has the default step of 1. Set `step="0.01"`, or use text with `inputmode="decimal"`."
