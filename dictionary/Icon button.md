---
description: A button that shows a symbol with no visible text, and needs a separate accessible name to make sense to assistive technology.
---

An icon [button](./Button.md) is a button that shows a symbol and no visible text, such as a bin for delete or a cross for close. It saves space in dense interfaces such as a [toolbar](./Toolbar.md) or a table row. Use one only when the symbol is widely understood. If people would have to guess, use a text label or put a visible word beside the icon.

The usual failure is a missing name. With no text inside, a screen reader (software that reads the interface aloud) may announce only "button", so the user cannot tell whether it deletes, closes or shares. Provide the name with `aria-label` or visually hidden text, and hide the decorative graphic.

```html
<button type="button" aria-label="Delete invoice 1042">
  <svg aria-hidden="true" viewBox="0 0 24 24">...</svg>
</button>
```

Names in repeated rows should say which item they act on. Twenty controls all called "Delete" are hard to tell apart when listed by a screen reader.

Keyboard behaviour matches any button: Tab reaches it, and Enter or Space activates it. Inside a toolbar, arrow keys move between controls instead.

A [tooltip](./Tooltip.md) helps sighted users learn what the symbol means, and it must appear on keyboard focus as well as hover. It does not replace the accessible name. If the tooltip repeats that name, do not also attach it with `aria-describedby`, or the same words are announced twice.

| Concern     | What to check                                                       |
| ----------- | ------------------------------------------------------------------- |
| Target size | At least 24 by 24 CSS pixels (WCAG 2.5.8), unless an exception applies |
| Contrast    | Icon at 3:1 against adjacent colours (WCAG 1.4.11)                  |
| State       | Use a [toggle button](./Toggle%20button.md) for on and off          |

A small glyph can sit inside a larger clickable area, so padding is the usual way to reach the [touch target](./Touch%20target.md) size.

_Usage:_

"VoiceOver just says 'button' for every action in this table row."

"They're icon buttons with no names. Add an `aria-label` that includes the invoice number."
