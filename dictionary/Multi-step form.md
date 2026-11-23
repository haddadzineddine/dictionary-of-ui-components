---
description: A long form split into a sequence of screens, with progress shown and answers kept between steps.
---

A multi-step form is a long form split into a sequence of screens, such as Address, Delivery, Payment and Review. Use it when the questions fall into clear groups, or when later questions depend on earlier answers. A short form is easier on one page.

The main risk is lost work. Someone reaches step four, presses the browser's Back control to check an answer, and the form returns to an empty first step. Give each step its own URL, and save answers as the user leaves each one.

| Stage        | What the interface does                                        |
| ------------ | -------------------------------------------------------------- |
| Start        | States how many steps there are                                |
| Each step    | Shows position in the title and heading, for example "Step 2 of 4" |
| Next         | Validates this step and saves its answers                      |
| Back         | Returns with answers intact, and does not validate             |
| Review       | Shows all answers, with a link to change each                  |
| Submit       | Sends the data and confirms the result                         |

Show progress with a [stepper](./Stepper.md) for a fixed sequence. If the number of steps depends on answers, the W3C forms tutorial suggests the `<progress>` element instead. Mark the current item with `aria-current="step"`.

When a step changes without a page load, move focus to the new step's heading (with `tabindex="-1"`) and update the document title, or screen reader users get no sign that anything changed.

Two WCAG criteria apply. Redundant Entry (3.3.7) says information already provided in the same process must be filled in or offered for selection, with narrow exceptions, so offer "same as delivery address" for billing. Error Prevention (3.3.4) requires legal, financial and data-changing submissions to be reversible, checked or confirmed, and a review step provides confirmation.

Validate each step on Next using [inline validation](./Inline%20validation.md) and an [error summary](./Error%20summary.md).

_Usage:_

"People press back on the payment step and lose their whole address."

"The multi-step form keeps answers in component state. Put each step in the URL and persist the draft."
