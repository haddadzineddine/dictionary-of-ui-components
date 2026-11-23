---
description: A component that keeps its own state internally, taking only an initial value from its parent.
---

An uncontrolled component keeps its own state internally and takes only an initial value from its parent. A plain HTML `<input>` works this way: the browser stores what the user types, and your code reads it when needed. The opposite is a controlled component, where the parent owns the value and passes it down on every change.

```jsx
// Uncontrolled: the DOM holds the value
<input name="email" defaultValue={user.email} />

// Controlled: the parent holds the value
<input value={email} onChange={(e) => setEmail(e.target.value)} />
```

| Question                                 | Uncontrolled          | Controlled        |
| ---------------------------------------- | --------------------- | ----------------- |
| Where is the value stored?               | DOM or component      | Parent state      |
| Read the value only on submit?           | A good fit            | Extra code        |
| Validate or format on each keystroke?    | Awkward               | A good fit        |
| Keep two views in sync?                  | Difficult             | A good fit        |
| Re-render on each keystroke?             | No                    | Usually           |

Uncontrolled [text fields](./Text%20field.md) suit simple forms, because `FormData` can collect every named field at submit time and the parent does not re-render while the user types.

A common bug comes from expecting the initial value to update. `defaultValue` is read only when the component first mounts. If a user switches from customer A to customer B and the same form stays mounted, the fields still show customer A's data. Giving the form a key tied to the record forces a fresh mount:

```jsx
<CustomerForm key={customer.id} customer={customer} />
```

Another common failure is switching modes. In React, a `value` that starts as `undefined` and later becomes a string turns an uncontrolled input into a controlled one and logs a warning. Initialise the state to an empty string, or use `value ?? ""`. A `value` with no `onChange` handler produces a field that cannot be edited.

Library components often support both modes, accepting `value` with `onChange`, or `defaultValue` alone. A [dropdown menu](./Dropdown%20menu.md) may have `open` and `defaultOpen`, for example. Follow this naming so callers can start uncontrolled and take over the state only when they need it.

_Usage:_

"The edit form still shows the last customer after I pick a new one."

"It's an uncontrolled component using `defaultValue`. Add a `key` so it remounts."
