---
description: A progress indicator showing the steps of a process, which are complete and which one the user is on.
---

A stepper is a progress indicator showing the stages of a process, which ones are complete and which one the user is on. It usually sits at the top of a [multi-step form](./Multi-step%20form.md), such as Address, Delivery, Payment, Review. The word is also used for the plus and minus [buttons](./Button.md) on a [number input](./Number%20input.md), which is a different control.

| Component                         | Shows                                |
| --------------------------------- | ------------------------------------ |
| Stepper                           | Named stages and the current one     |
| [Progress bar](./Progress%20bar.md) | How much is done, with no stage names |
| [Tabs](./Tabs.md)                 | Sections in any order                |
| [Breadcrumb](./Breadcrumb.md)     | Position in a site hierarchy         |

Use a stepper when the sequence is known and short enough to show. If the number of steps depends on earlier answers, a fixed list will mislead people, so a progress bar or "Step 2" without a total is more honest.

Build it as an ordered list, and mark the current step.

```html
<ol aria-label="Checkout progress">
  <li><a href="/checkout/address">
    <span class="visually-hidden">Completed: </span>Address</a></li>
  <li aria-current="step">Delivery</li>
  <li>Payment</li>
</ol>
```

`aria-current="step"` marks the active item. For finished steps, the W3C forms tutorial uses visually hidden text such as "Completed:". Colour alone fails WCAG 1.4.1, so change the shape too.

Completed steps should be links, so people can go back and review their answers. Future steps should normally be plain text. A common failure is drawing every step as clickable: someone jumps to Payment before entering an address, and the form breaks or submits incomplete data. If the steps can be done in any order, a checklist or tabs describes that better.

The stepper is not itself a keyboard widget. Links take normal Tab stops, and plain text items take none. When the step changes, move focus to the new heading, because updating the indicator alone is easy to miss.

Horizontal steppers overflow on narrow screens. Stack them vertically, or show "Step 2 of 4: Delivery" as text.

_Usage:_

"Someone got to Payment without an address and the order failed."

"Future steps in the stepper are clickable. Only link the steps they've completed."
