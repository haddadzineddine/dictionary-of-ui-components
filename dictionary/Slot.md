---
description: A named placeholder inside a component where the caller supplies their own content.
---

A slot is a named placeholder inside a component where the caller supplies their own content. The component controls the structure and position, and the caller controls what goes there. A `Card` might expose `header`, `media` and `footer` slots. Slots usually replace a growing list of props such as `title`, `titleIcon`, `titleColor` and `subtitle`, each added for one screen.

```jsx
function Card({ header, footer, children }) {
  return (
    <article className="card">
      <header>{header}</header>
      <div className="card-body">{children}</div>
      {footer && <footer>{footer}</footer>}
    </article>
  );
}

<Card header={<h2>Invoice 1042</h2>} footer={<PayButton />}>
  Due on 14 March
</Card>
```

The mechanism differs by technology.

| Technology     | How a slot is expressed                    |
| -------------- | ------------------------------------------ |
| Web Components | `<slot name="footer">` in the shadow tree  |
| Vue            | `<slot name="footer">` in the template     |
| React          | `children` and props that accept elements  |

In Web Components, a `<slot>` can contain fallback content, shown when nothing is assigned to it. Slotted nodes remain in the light DOM, the host's regular children, and are only displayed at the slot's position. Page styles therefore still apply to them, and `::slotted()` from inside the component reaches only the top-level assigned elements.

Some libraries use the word for a different technique. An `asChild` prop, or a `Slot` utility, merges a component's props onto the single element the caller passes, so a menu trigger can be a custom link without an extra wrapper. This fails when the child does not pass received props and refs to its DOM node, leaving the trigger inert.

Slots hand structure to callers, which brings accessibility risk. A caller can put a link inside a slot that is already wrapped in a [button](./Button.md), producing invalid nested interactive content. Document what each slot accepts, and wire names from the component, for example by connecting a dialog's title slot through `aria-labelledby`.

Prefer a slot when content varies. Use a plain prop for simple data like a label string, and a [render prop](./Render%20prop.md) when the content depends on the component's internal state.

_Usage:_

"Design wants an icon and a link in the card title now."

"Stop adding title props. Give the card a header slot."
