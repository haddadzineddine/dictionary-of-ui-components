---
description: A primary action joined to a small arrow that opens a menu of related alternatives.
---

A split [button](./Button.md) is two controls drawn as one: a main button that runs the default action, and a narrow arrow button that opens a list of related actions. A "Merge" control with "Squash and merge" and "Rebase and merge" behind the arrow is a typical example. Use it when one action is clearly the common choice and the others are variations of it. If no option is the default, a plain [dropdown menu](./Dropdown%20menu.md) is clearer.

The WAI-ARIA Authoring Practices have no dedicated split button pattern, so build it from two patterns they do define.

```html
<div role="group" aria-label="Merge options">
  <button type="button">Merge</button>
  <button type="button" aria-haspopup="menu" aria-expanded="false"
          aria-label="More merge options"></button>
</div>
```

| Part        | Role              | Keyboard                                         |
| ----------- | ----------------- | ------------------------------------------------ |
| Main action | `button`          | Enter or Space runs the default action           |
| Arrow       | Menu button       | Enter, Space or Down Arrow opens the menu        |
| Open menu   | `menu`            | Arrows move, Enter activates, Escape closes      |

Each half is its own Tab stop unless the pair sits inside a [toolbar](./Toolbar.md). When the menu closes with Escape, focus returns to the arrow.

A common structural bug is nesting the arrow inside the main button. HTML does not allow interactive content inside a `<button>`, and clicks on the arrow can also trigger the main action. Keep them as siblings and join them visually with CSS.

The arrow needs its own accessible name, because a chevron alone is announced as an unnamed button. It also needs a usable size: narrow arrows often fall below the 24 by 24 CSS pixel [touch target](./Touch%20target.md) minimum in WCAG 2.5.8.

Some products remember the last chosen option and make it the new default. If you do this, update the visible label, or people will press "Merge" and get a different merge from the one they expect.

_Usage:_

"Clicking the little arrow also fires the deploy."

"The arrow is nested inside the main button. Split the button into two siblings so the click only opens the menu."
