---
description: Formatting applied to an input as the user types, such as adding spaces to a card number or brackets to a phone number.
---

An input mask is formatting applied to a [text field](./Text%20field.md) as the user types, such as grouping a card number into fours or adding brackets to a phone number. It rewrites the field's value while someone is typing into it, which is where most of its bugs come from.

A common symptom is a caret that jumps. The user goes back to fix a digit in the middle, the script reformats the value, and the caret lands at the end, so the next keystroke goes in the wrong place. Other failures follow the same cause: pasted values are rejected or doubled, browser autofill is garbled, and deletion stops at a separator that the mask immediately puts back.

Choose the lightest option that solves the problem.

| Approach                | How it works                              | Risk   |
| ----------------------- | ----------------------------------------- | ------ |
| Helper hint only        | Shows the format, accepts anything        | Lowest |
| Normalise on the server | Strips spaces and punctuation             | Low    |
| Format on blur          | Reformats when focus leaves               | Low    |
| Format while typing     | Rewrites on each input                    | High   |
| Fixed-slot mask         | Shows `__/__/____` and blocks other keys  | Highest |

Often it is enough to accept any reasonable format and clean it up afterwards.

If you format while typing, keep the raw value separate from the display value, restore the caret after each change, and handle paste. Do not depend on `beforeinput` alone, because autofill, spellcheck and input method editors (used to compose languages such as Japanese) may skip it. Use the `input` event as the final check.

A screen reader may read placeholder underscores aloud or announce each inserted character, so test with one. Keep `autocomplete` tokens such as `cc-number`, put the format in [helper text](./Helper%20text.md), and avoid fixed masks for international phone numbers and postcodes, which vary in length and grouping.

_Usage:_

"When I fix a digit in the card number, the cursor jumps to the end."

"The input mask rewrites the value on every keystroke. Format on blur instead."
