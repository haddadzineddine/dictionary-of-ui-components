---
description: A component that supplies behaviour, state and accessibility wiring but no visual styling.
---

A headless component supplies behaviour, state and accessibility wiring but no visual styling. It handles things like opening a menu, tracking the active item and managing keyboard input, while you provide the styling. Teams choose one when a styled library's appearance would need constant overriding, but they do not want to rebuild a complex control such as a [combobox](./Combobox.md) from scratch.

| Option                        | Behaviour | Styling      | Suits                          |
| ----------------------------- | --------- | ------------ | ------------------------------ |
| Styled [component library](./Component%20library.md) | Included | Included | Internal tools, fast starts |
| Headless component            | Included  | Yours        | Products with their own design |
| Built from scratch            | Yours     | Yours        | Unusual interactions           |

Headless APIs usually come in one of two forms. Some ship unstyled parts as a [compound component](./Compound%20component.md). Others ship a hook, or a function that returns attributes for you to spread on your own elements.

```jsx
function Disclosure({ title, children }) {
  const { buttonProps, panelProps } = useDisclosure();
  return (
    <>
      <button className="disclosure-title" {...buttonProps}>{title}</button>
      <div className="disclosure-panel" {...panelProps}>{children}</div>
    </>
  );
}
```

Here, `buttonProps` would hold `aria-expanded`, `aria-controls` and a click handler, so the consumer never writes them. The usual way this breaks is a consumer dropping those props or spreading them on the wrong element. The control still looks correct while keyboard behaviour and screen reader output (the UI read aloud) stop working. A `<div>` given the [button](./Button.md)'s props, for example, may lack focus and key handling.

A headless library handles only part of accessibility. You remain responsible for visible labels, a [focus ring](./Focus%20ring.md) with sufficient contrast, [touch target](./Touch%20target.md) sizes, color contrast, [reduced motion](./Reduced%20motion.md) and hover and selected styles. An unstyled menu can have correct accessibility attributes and still have no visible indication of which item is focused.

Styling hooks matter when choosing a library. Good ones expose state through data attributes such as `data-state="open"`, so CSS can respond without extra logic. Check that it lets you control where an overlay renders, because a [portal](./Portal.md) can affect [theming](./Theming.md) and stacking.

_Usage:_

"Should we write our own select so it matches the brand?"

"No. Use a headless component for the keyboard and ARIA behaviour and style it ourselves."
