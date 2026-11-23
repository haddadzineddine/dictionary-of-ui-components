---
description: A set of components designed to work together, sharing state implicitly through a common parent.
---

A compound component is a set of components designed to work together, sharing state implicitly through a common parent. The HTML `<select>` and `<option>` elements work this way: neither is useful alone, and the parent tracks which option is chosen. In a [component library](./Component%20library.md), the same idea looks like this:

```jsx
<Tabs defaultValue="account">
  <Tabs.List>
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Panel value="account"><AccountForm /></Tabs.Panel>
  <Tabs.Panel value="billing"><BillingForm /></Tabs.Panel>
</Tabs>
```

The alternative is a single component configured with data, such as `<Tabs items={[...]} />`. That API is shorter, but it struggles once one tab needs a [badge](./Badge.md), another needs a [tooltip](./Tooltip.md) and a third needs a different wrapper. Each request adds another prop, and the component ends up with options like `renderTabLabel` and `tabClassNameByIndex`.

| API style       | Good for                        | Weakness                    |
| --------------- | ------------------------------- | --------------------------- |
| Config prop     | Uniform, data-driven lists      | Grows a prop per exception  |
| Compound        | Flexible structure and content  | More verbose to use         |
| [Render prop](./Render%20prop.md) | Custom output from internal state | Harder to read when nested |
| [Slot](./Slot.md) | Replacing named regions       | Fixed set of regions        |

The parent usually shares state through a context, a framework feature that passes data to descendants without props. Older implementations used `cloneElement` to inject props into direct children. That approach breaks as soon as someone wraps a child in a `<div>` or their own component, and the tab silently stops responding. Context works at any depth, so prefer it.

A part rendered outside its parent has no context to read. Throw a clear error such as "Tabs.Trigger must be used within Tabs" rather than failing with an undefined value.

Accessibility wiring is a major benefit of this pattern. The parent can generate IDs and connect `aria-controls`, `aria-labelledby` and `aria-selected` across parts, and it can run [roving tabindex](./Roving%20tabindex.md) so the caller never handles them.

_Usage:_

"Our Tabs component has 22 props now, mostly for one-off tab labels."

"Make it a compound component so callers can put whatever they need inside each trigger."
