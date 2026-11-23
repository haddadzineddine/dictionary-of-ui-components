---
description: A layout that places children in one direction with a consistent gap between them.
---

A stack layout places its children in one direction, vertically or horizontally, with a consistent gap between them. It covers [form fields](./Form%20field.md), [card](./Card.md) contents and [button](./Button.md) rows. The parent controls spacing, so individual children do not need margins and can be reused anywhere.

```css
.stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
```

Spacing on the parent solves a recurring bug. When each child carries its own `margin-bottom`, the last child adds unwanted space at the end of its container, and adjacent vertical margins can collapse into one. A `gap` applies only between items.

| Need                               | Layout                     |
| ---------------------------------- | -------------------------- |
| One direction, even spacing        | Stack                      |
| Row that wraps onto new lines      | Flex with `flex-wrap`      |
| Items aligned in rows and columns  | Grid                       |
| Uneven heights packed in columns   | [Masonry layout](./Masonry%20layout.md) |

Take gap values from a [spacing scale](./Spacing%20scale.md).

An empty child still receives a gap. If a conditional wrapper renders an empty `<div>`, the stack shows a double space with nothing in it. Render nothing instead of an empty element, or apply `.stack > :empty { display: none; }` where that is safe.

Long content is another common failure. Flex items have an automatic minimum size based on their content, so a long URL in a horizontal stack can overflow instead of shrinking. Set `min-width: 0` on the item that should shrink.

Reversing visual order creates an accessibility problem. `flex-direction: column-reverse` and the `order` property move items on screen but leave the DOM order unchanged, so Tab and screen readers (software that reads the UI aloud) follow a different sequence from what is displayed. WCAG 2.4.3 Focus Order requires a sequence that preserves meaning, and 1.3.2 Meaningful Sequence requires a correct reading order where order affects meaning. If the order needs to change at a [breakpoint](./Breakpoint.md), check that both sequences still make sense.

_Usage:_

"There's a strange double gap above the submit button."

"A hidden field wrapper is still rendering in the stack layout. Don't render it at all."
