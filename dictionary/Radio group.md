---
description: A set of options where exactly one can be chosen, with arrow keys moving the choice inside a single Tab stop.
---

A radio group is a set of options where only one can be chosen at a time, such as a delivery speed. All options stay visible, so people can compare them before deciding. Build it from native `<input type="radio">` elements that share a `name`, wrapped in a `<fieldset>` with a `<legend>` that states the question.

```html
<fieldset>
  <legend>Delivery speed</legend>
  <label><input type="radio" name="speed" value="standard" checked /> Standard</label>
  <label><input type="radio" name="speed" value="express" /> Express</label>
</fieldset>
```

The group behaves as one Tab stop, and the arrow keys change the choice.

| Key               | Behaviour                                                 |
| ----------------- | --------------------------------------------------------- |
| Tab               | Enters the group at the checked option, or the first one  |
| Down, Right Arrow | Moves to the next option and checks it, wrapping at the end |
| Up, Left Arrow    | Moves to the previous option and checks it, wrapping      |
| Space             | Checks the focused option if it is unchecked              |

Because arrow keys change the value as they move, a handler that acts on every change breaks keyboard use. If choosing an option reloads results or navigates away, a keyboard user cannot get past the first option. WCAG 3.2.2 says changing a setting must not cause a change of context without warning. Apply the choice with a separate [button](./Button.md), or limit the change to updating content nearby.

Once a radio is checked, a user cannot uncheck it by clicking it again. An optional question therefore needs an explicit "None" option. If nothing is checked, the group is left out of the submitted data entirely, and `required` on any radio in the group makes one choice mandatory.

Compared with its alternatives, a radio group suits a short list that benefits from being read in full. A [select](./Select.md) takes less room for a long list. A [checkbox](./Checkbox.md) group is for choosing several, and a [segmented control](./Segmented%20control.md) is a compact visual treatment of the same single choice.

_Usage:_

"With the keyboard, pressing Down on the sort options reloads the page every time."

"The radio group submits on change. Add an Apply button so arrow keys can move freely."
