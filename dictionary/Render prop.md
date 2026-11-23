---
description: A prop whose value is a function that the component calls with internal state to produce UI.
---

A render prop is a prop whose value is a function that the component calls with its internal state to produce UI. The component owns the logic, and the caller decides what the output looks like. It is useful when the content of a region depends on data only the component knows, such as which row is being rendered in a list.

```jsx
<VirtualList
  items={contacts}
  renderItem={(contact, { index, isFocused }) => (
    <ContactRow contact={contact} index={index} highlighted={isFocused} />
  )}
/>
```

The nearest alternatives solve slightly different problems.

| Pattern             | Content depends on internal state | Typical use                |
| ------------------- | --------------------------------- | -------------------------- |
| [Slot](./Slot.md)   | No                                | Fixed regions of a layout  |
| Render prop         | Yes                               | List items, custom cells   |
| Hook                | Yes, caller owns all markup       | Sharing logic only         |
| [Compound component](./Compound%20component.md) | Via context | Multi-part widgets |

In React, hooks replaced many earlier uses of render props for sharing logic, because several render props combined produced deeply nested callbacks. The pattern remains a good fit when a parent must render per item, as a [virtualized list](./Virtualized%20list.md) or [data table](./Data%20table.md) does when it asks the caller how to draw each row.

Performance is the first thing that goes wrong. An inline function has a new identity on every render, so a memoized child that receives it re-renders each time. Memoize the row component itself, and keep the function stable if measurements show a problem.

Remounting is a less obvious failure. Defining a component inside the render function creates a new component type on each render, so the framework discards the previous subtree. Inputs lose their text and focus disappears. Return elements of a stable component type instead.

Render props can also drop accessibility wiring, because the caller writes the markup. If the component needs `role`, `id` or `aria-selected` on each option, pass them as a props object, and require the caller to spread it, as in `renderOption={(option, props) => <li {...props}>{option.label}</li>}`.

_Usage:_

"Every keystroke in the row's input loses focus."

"The render prop defines a new component inline, so it remounts. Move it out."
