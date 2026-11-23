---
description: A modal dialog that interrupts the user with an important message and requires a response, such as confirming a deletion.
---

An alert dialog is a [modal dialog](./Modal%20dialog.md) that interrupts the user with an important message and requires a response, such as "Delete this project?". The `alertdialog` role tells assistive technology that this is an urgent interruption, and some platforms treat it specially, for example by playing a system sound. Use it only when the person must decide before continuing.

| Situation                         | Use                                    |
| --------------------------------- | -------------------------------------- |
| Irreversible, serious action      | Alert dialog                           |
| Reversible action                 | Do it, then offer an [undo pattern](./Undo%20pattern.md) |
| Result of a completed action      | [Toast](./Toast.md)                    |
| Problem tied to part of the page  | [Inline alert](./Inline%20alert.md)    |

Overuse is the common failure. When every action asks "Are you sure?", people learn to press the confirm [button](./Button.md) without reading, so the one that matters gets the same reflex. Reserve the pattern for actions that cannot be undone, and offer undo for the rest.

```html
<dialog role="alertdialog" aria-labelledby="t" aria-describedby="d">
  <h2 id="t">Delete project?</h2>
  <p id="d">This removes 12 environments and cannot be undone.</p>
  <button autofocus>Cancel</button>
  <button>Delete project</button>
</dialog>
```

Open it with `showModal()` to get the same inert background, focus handling and Escape behaviour as any modal. The title is linked with `aria-labelledby`, and the message with `aria-describedby`, so that a screen reader announces both as the dialog opens.

For destructive actions, the WAI-ARIA Authoring Practices advise that initial focus may go to the least destructive control. If the focus lands on Delete, an accidental Enter or Space, perhaps from a key held down from the previous step, causes the loss the dialog was meant to prevent. Escape should act as Cancel, and clicking the backdrop should not count as confirmation.

Button labels should state the outcome. "Delete project" and "Keep project" can be understood without reading the message, while "OK" and "Cancel" are ambiguous for a question such as "Cancel this subscription?". When the dialog closes, focus returns to the trigger, or moves to a sensible neighbour if the trigger was deleted.

_Usage:_

"Someone double-pressed Enter and wiped their workspace."

"The alert dialog focuses Delete on open. Autofocus Cancel instead."
