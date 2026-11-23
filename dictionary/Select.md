---
description: A native control that opens a list of predefined options and shows the chosen one when closed.
---

A select is a control that opens a list of predefined options and shows the chosen one when closed, such as a country picker. Use the native `<select>` element whenever it fits. It comes with keyboard support, type-ahead and the operating system's picker on phones, all of which a custom replacement has to rebuild.

```html
<label for="country">Country</label>
<select id="country" name="country" required>
  <option value="">Choose a country</option>
  <optgroup label="Europe">
    <option value="fr">France</option>
    <option value="de">Germany</option>
  </optgroup>
</select>
```

The empty first option makes `required` work: if the user leaves it, the form reports the field as missing. Without it, the first real option is submitted silently, so a form can collect a default country nobody chose.

| Situation                         | Use                                   |
| --------------------------------- | ------------------------------------- |
| A few options worth comparing     | [Radio group](./Radio%20group.md)     |
| A longer fixed list               | Select                                |
| Hundreds of options, or typing helps | [Combobox](./Combobox.md)             |
| Several values allowed            | [Multi-select](./Multi-select.md)     |
| A list of actions, not values     | [Dropdown menu](./Dropdown%20menu.md) |

A single-choice dropdown is exposed to assistive technology with the `combobox` role, and a list with `size` above 1 or the `multiple` attribute is exposed as `listbox`. Exact key behaviour varies by browser and platform. In general, Tab focuses it, arrow keys or Space work with the list, and typing jumps to a matching option.

A select that navigates or submits as soon as its value changes can break keyboard use. On some browsers, arrowing through options fires a change for each one, so keyboard users are sent away on the first press. WCAG 3.2.2 requires advance warning for this kind of context change, so use a submit [button](./Button.md) instead.

Styling has been the main reason teams replace the element. Customizable select, enabled with `appearance: base-select`, allows full styling of the button and picker. MDN lists it as limited availability, but unsupported browsers fall back to a standard select, so it works as an enhancement.

_Usage:_

"Why do so many signups list Afghanistan?"

"The select defaults to the first country. Add an empty option and mark the field required."
