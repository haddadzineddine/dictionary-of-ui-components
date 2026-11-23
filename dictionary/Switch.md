---
description: An on-off control for a setting that takes effect immediately, without a separate save step.
---

A switch is an on-off control for a setting that takes effect immediately, such as turning on email alerts. People expect the change to apply at once. The usual confusion comes from placing one inside a form with a Save [button](./Button.md): the user flips it, leaves the page, and the setting was never stored. If a choice applies only on submit, use a [checkbox](./Checkbox.md).

| Control                              | Meaning                 | Applies              |
| ------------------------------------ | ----------------------- | -------------------- |
| Switch                               | A setting is on or off  | Immediately          |
| Checkbox                             | An option is chosen     | Usually on submit    |
| [Toggle button](./Toggle%20button.md) | A command is active    | Immediately          |

The simplest robust build is a native checkbox with the `switch` role. It keeps focus, form and label behaviour, and assistive technology announces it as a switch.

```html
<label>
  <input type="checkbox" role="switch" name="alerts" checked />
  Email alerts
</label>
```

HTML also has a newer `switch` attribute on checkbox inputs. MDN describes it as experimental with limited support, and browsers without support ignore it and show a normal checkbox.

Space toggles a focused switch. The WAI-ARIA Authoring Practices list Enter as optional, and a native checkbox does not toggle on Enter. A custom element needs `role="switch"`, `aria-checked`, `tabindex="0"` and its own key handling.

Keep the label constant. "Email alerts, on" is clear, whereas a label that changes to "Email alerts disabled" can be announced as "Email alerts disabled, on". The state also needs more than a colour change to satisfy WCAG 1.4.1, so use thumb position, an icon or on and off text.

Because a switch applies at once, the save can fail after the thumb has already moved. Show a pending state if the request is slow. On failure, move the switch back and report the error in text, for example with a [toast](./Toast.md), so the display does not claim a setting that was not saved.

_Usage:_

"I turned off alerts, but I'm still getting emails."

"The switch only updates local state until you press Save. Either persist it on change or use a checkbox."
