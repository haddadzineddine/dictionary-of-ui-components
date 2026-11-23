---
description: A named, predefined visual version of a component, selected through a prop such as primary or danger.
---

A variant is a named, predefined visual version of a component, selected through a prop such as `variant="danger"`. Variants give a [component library](./Component%20library.md) a limited set of approved appearances, so teams do not restyle a [button](./Button.md) with one-off classes on each screen.

```jsx
<Button variant="primary" size="md">Save</Button>
<Button variant="danger" size="sm">Delete</Button>
```

A component's styling usually has separate axes, and each should be its own prop.

| Axis     | Example values               | Describes                     |
| -------- | ---------------------------- | ----------------------------- |
| Variant  | `primary`, `secondary`, `ghost` | Visual emphasis            |
| Tone     | `neutral`, `danger`, `success`  | Meaning                    |
| Size     | `sm`, `md`, `lg`             | Physical scale                |
| State    | hover, focus, disabled       | Current interaction, not a prop choice |

Interaction states are not variants. A [hover state](./Hover%20state.md) or [disabled state](./Disabled%20state.md) applies on top of every variant, so each one has to be designed and tested for all of them.

Use a union value instead of boolean props. With `<Button primary danger ghost>`, the API allows contradictory combinations and nothing says which wins. A single `variant` prop with a closed set of values makes invalid combinations impossible, and a type checker can enforce it.

Combinations are the main cost. Three variants, three tones, three sizes and five states already produce 135 possible appearances. Some will be unintended or untested, and a danger ghost button may fail contrast even though the other pairings pass. Define only the combinations you support, and list them in a [component explorer](./Component%20explorer.md) so that gaps are visible. Each one must meet the 4.5:1 text contrast of WCAG 1.4.3, and its [focus ring](./Focus%20ring.md) must remain visible.

A `danger` button also needs a label that states the action, because color alone does not convey meaning.

If a new option changes behaviour, structure or required props, it is probably a separate component.

_Usage:_

"Can I just add a red class to this button?"

"Use the danger variant so it gets the tested hover, focus and contrast styles."
