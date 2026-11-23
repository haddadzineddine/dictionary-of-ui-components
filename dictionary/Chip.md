---
description: A compact interactive element representing a value, filter or choice that can be selected or removed.
---

A chip is a compact interactive element that represents a value, filter or choice, usually drawn as a rounded pill. Selecting "In stock" on a product page or removing a recipient from an email field are typical uses. A [badge](./Badge.md) looks similar but is read-only, so the deciding question is whether the user can act on it.

Chips cover several behaviours, and each needs different markup.

| Type       | Purpose               | Semantics                       |
| ---------- | --------------------- | ------------------------------- |
| Filter     | Turns a filter on/off | [Button](./Button.md) with `aria-pressed`, or a [checkbox](./Checkbox.md) |
| Choice     | Pick one of a set     | Radio inputs                    |
| Input      | A value the user added | Text plus a remove button      |
| Suggestion | Run an action         | Plain button                    |

For a value the user entered, as in a [tag input](./Tag%20input.md), the chip is text with a separate remove button. That button needs a specific name, because a list of buttons all announced as "Remove" or "×" does not say what each one removes.

```html
<li>
  Design
  <button aria-label="Remove Design">×</button>
</li>
```

The small remove icon often fails on size. WCAG 2.5.8 Target Size (Minimum) requires pointer targets of at least 24 by 24 CSS pixels, unless spacing or another exception applies. Extend the hit area with padding or a pseudo-element, without enlarging the icon, so users do not delete the wrong chip with a slightly misplaced tap.

Removing a chip destroys the element that had focus, and focus can fall back to the top of the page. Move focus to the next chip, or to the input when none remain, and report the removal in a `role="status"` region.

Selected state must not rely on color alone under WCAG 1.4.1, so add a check mark or a change in border. A group of filter chips needs a label, using `role="group"` with `aria-label` or a `<fieldset>`.

_Usage:_

"After deleting a filter, Tab starts from the top of the page again."

"The chip had focus when it was removed. Move focus to the next chip."
