---
description: A control that performs an action when activated, such as saving, submitting a form or opening a dialog.
---

A button is a control that performs an action when activated, such as saving a record, submitting a form or opening a [modal dialog](./Modal%20dialog.md). Use the native `<button>` element. It receives keyboard focus, activates on Enter and Space, and is announced as a button by screen readers, the software that reads an interface aloud. A `<div>` with a click handler has none of this, which is why some controls work with a mouse and do nothing from the keyboard.

The nearest alternative is a link, and the choice depends on what happens next.

| Element     | Use it when                                    | Activates with |
| ----------- | ---------------------------------------------- | -------------- |
| `<button>`  | The action changes this page or sends data     | Enter, Space   |
| `<a href>`  | The action goes to another URL                 | Enter          |

A link styled to look like a button should stay a link, because users expect to open it in a new tab or copy its address.

A common bug comes from the default type. Inside a `<form>`, a `<button>` with no `type` attribute is a submit button. A "Cancel" or "Show password" button then submits the form and can reload the page, losing what the user typed. Set the type on every button.

```html
<button type="button">Cancel</button>
<button type="submit">Save invoice</button>
```

The accessible name, which is the text a screen reader announces, comes from the button's content. Prefer a specific label such as "Delete invoice" over "Click here". After activation, focus should land somewhere sensible. If the button opens a dialog, focus moves inside it.

The native `disabled` attribute removes a button from the Tab order, so keyboard users may never discover it. `aria-disabled="true"` keeps it focusable, but your script must then block the action. See [disabled state](./Disabled%20state.md) for that trade-off, and [touch target](./Touch%20target.md) for minimum sizes.

_Usage:_

"The cancel button on the settings form keeps saving people's changes."

"It has no `type`, so it defaults to submit. Add `type="button"`."
