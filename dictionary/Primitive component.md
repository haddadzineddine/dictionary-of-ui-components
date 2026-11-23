---
description: A low-level building block with a narrow job, from which larger components in a library are assembled.
---

A primitive component is a low-level building block with one narrow job, from which larger components are assembled. Text, Box, Icon and a bare [button](./Button.md) are typical examples. A `SearchBar` is not a primitive, because it combines several parts for a specific purpose.

The term is used in two ways, which can confuse a conversation.

| Meaning             | Provides                         | Examples                     |
| ------------------- | -------------------------------- | ---------------------------- |
| Visual primitive    | Styling and layout from tokens   | Box, Text, [Stack](./Stack%20layout.md) |
| Behaviour primitive | State, keyboard and accessibility wiring  | Dialog, Menu, [Tabs](./Tabs.md) parts     |

A behaviour primitive is usually a [headless component](./Headless%20component.md) with no visual styling. In [atomic design](./Atomic%20design.md), visual primitives roughly correspond to atoms.

A primitive has to stay open, because it does not know where it will be used. It should forward standard attributes, event handlers and refs (handles to the underlying DOM node) to the element it renders. If it drops them, consumers cannot attach an `aria-describedby`, a test ID or a focus call, and they end up writing a replacement.

```jsx
function Text({ as: Tag = "span", size = "base", className = "", ...rest }) {
  return <Tag className={`text-${size} ${className}`} {...rest} />;
}
```

Spreading `...rest` is what passes those attributes through. The `as` prop makes it a [polymorphic component](./Polymorphic%20component.md), so the same text styles can apply to a `<p>` or `<h2>` without changing the document's structure.

The common failure is a primitive that accumulates options. A Box gains props for every CSS property, then responsive versions of each, until it is a second styling language. Keep props limited to values from your tokens, and let unusual cases use regular CSS.

The opposite failure is promoting a component too early. A shape that appears twice may be coincidence, and a shared abstraction forces both uses to change together. Extract a primitive once several components need the same behaviour. A change to a primitive affects everything built on it, so it needs visual regression tests and a careful release.

_Usage:_

"I can't add `aria-describedby` to our Input."

"The primitive component isn't forwarding extra props. Spread them onto the native element."
