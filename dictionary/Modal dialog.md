---
description: A window over the page that blocks everything behind it until the user completes or dismisses it.
---

A modal dialog is a window over the page that blocks everything behind it until the user completes or dismisses it. Use it for a short, focused task that must be finished or abandoned before continuing, such as editing a record. If people need to refer to the page while working, use a non-modal [drawer](./Drawer.md) or a [popover](./Popover.md). For a confirmation that demands a decision, use an [alert dialog](./Alert%20dialog.md).

Use the native `<dialog>` element and open it with `showModal()`.

```html
<dialog id="edit" aria-labelledby="edit-title">
  <h2 id="edit-title">Edit address</h2>
  <form method="dialog">
    <button value="cancel">Cancel</button>
    <button value="save">Save</button>
  </form>
</dialog>
```

| Behaviour                   | `showModal()` provides | You still do                    |
| --------------------------- | ---------------------- | ------------------------------- |
| Renders above all content   | Yes, in the top layer  | Style the `::backdrop`          |
| Makes the page inert        | Yes                    | Nothing                         |
| Moves focus inside          | Yes                    | Use `autofocus` where it helps  |
| Closes on Escape            | Yes                    | Handle `cancel` to guard drafts |
| Returns focus on close      | Yes                    | Handle a removed trigger        |
| Names the dialog            | No                     | Add `aria-labelledby`           |
| Stops the page scrolling    | No                     | Add a [scroll lock](./Scroll%20lock.md) |

Content behind the dialog cannot receive focus. A custom build has to reproduce this with a [focus trap](./Focus%20trap.md). Do not put `tabindex` on the `<dialog>` element, which the HTML specification forbids.

Initial focus depends on the content. The first control is the default. For long content, focus a heading with `tabindex="-1"` so the top is not scrolled out of view. Always include a visible close control, because not everyone has an Escape key.

Closing on an outside click is risky for forms because a stray click discards work. The `closedby` attribute controls this, but MDN lists it as limited availability.

If the trigger is gone when the dialog closes, such as after deleting its row, move focus to a logical nearby element yourself. Otherwise focus falls to the page body and keyboard users lose their place.

_Usage:_

"Keyboard users can tab to the page behind our edit popup."

"It's a styled `div`. Make it a real modal dialog with `showModal()`."
