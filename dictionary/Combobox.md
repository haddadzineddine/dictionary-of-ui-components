---
description: An input paired with a popup of suggestions, letting people type to filter and choose a value from a long list.
---

A combobox is an input paired with a popup of suggestions, so people can type to filter a long list and then choose a value. City and assignee pickers are common examples. Choose it over a [select](./Select.md) when the list is too long to scan. If the value is free text with occasional hints, the native `<datalist>` is simpler, although its popup cannot be styled and some screen reader and browser pairings do not announce it.

The WAI-ARIA Authoring Practices define two kinds. An editable combobox accepts typing, and a select-only combobox behaves like a custom select with no text entry. In both, DOM focus stays on the input while `aria-activedescendant` points to the highlighted option, so the user can keep typing.

```html
<label for="city">City</label>
<input id="city" role="combobox" aria-expanded="true"
       aria-controls="city-list" aria-autocomplete="list"
       aria-activedescendant="city-2" />
<ul id="city-list" role="listbox">
  <li id="city-1" role="option">Paris</li>
  <li id="city-2" role="option" aria-selected="true">Porto</li>
</ul>
```

| Key             | Action                                              |
| --------------- | --------------------------------------------------- |
| Down Arrow      | Opens the popup or moves to the next option         |
| Up Arrow        | Optionally moves to the previous or last option     |
| Enter           | Accepts the highlighted option                      |
| Escape          | Closes the popup, and may then clear the input      |
| Alt+Down Arrow  | Optionally opens the popup without moving into it   |
| Tab             | Leaves the field. The popup is not a Tab stop       |

Several failures recur. Enter can submit the surrounding form while the popup is open, because the handler did not prevent the default. `aria-expanded` may stay `false` after opening, so screen readers never report the list. Filtering may change the options without announcing anything, so add a `role="status"` message such as "4 results", which WCAG 4.1.3 expects for this kind of update.

Async options add a race: a slow response for "pa" can arrive after the one for "par" and replace it. Discard stale responses. Decide also what happens to text that matches no option when focus leaves, since keeping it silently can submit an invalid value.

_Usage:_

"Pressing Enter on a suggestion submits the whole form."

"The combobox isn't preventing the default. Enter should accept the option while the popup is open."
