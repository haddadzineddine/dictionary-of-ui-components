---
description: A list of form errors shown after submission, with each item linking to the field that needs fixing.
---

An error summary is a list of everything wrong with a submitted form, shown at the top, where each item links to the field that needs fixing. On a long form, it addresses a specific problem: the user presses Submit, nothing appears to change, and the error is out of view further up the page.

It works alongside [inline validation](./Inline%20validation.md) rather than replacing it. The summary gives the overview and a route to each problem, and the message beside each [form field](./Form%20field.md) explains the fix in context.

```html
<div id="errors" tabindex="-1">
  <h2>There are 2 problems with your application</h2>
  <ul>
    <li><a href="#email">Enter an email address</a></li>
    <li><a href="#dob">Date of birth must be in the past</a></li>
  </ul>
</div>
```

| Step | What happens                                                      |
| ---- | ----------------------------------------------------------------- |
| 1    | User submits. Validation finds errors                             |
| 2    | Summary renders above the form, and entered values are preserved |
| 3    | Focus moves to the summary, or to the first invalid field         |
| 4    | User follows a link, and focus lands in that input                |
| 5    | User fixes it, and the summary updates on the next submit         |

The W3C forms tutorial recommends a list before the form, under a distinctive heading, with each item naming the problem and linking to the control. It advises moving focus to the first invalid field, while WCAG technique G139 shows focus moving to the error list. Pick one approach and apply it across the product.

Several failures are common. Links that point to a wrapper rather than the input scroll the page but leave focus behind, so use the control's `id`. A [sticky header](./Sticky%20header.md) can cover the target after the jump, which `scroll-padding-block-start` prevents. Clearing the user's entries on error forces them to start again, and technique G139 explicitly says to keep them.

For server-rendered forms, also prefix the page `<title>` with "Error:" so that screen reader users hear the outcome as the page loads. If script inserts the summary without moving focus, `role="alert"` announces it.

_Usage:_

"Users hit Submit and think the form is broken."

"The error is off-screen. Add an error summary at the top and move focus to it."
