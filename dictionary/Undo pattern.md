---
description: Applying an action immediately and offering a way to reverse it, instead of asking for confirmation first.
---

The undo pattern applies an action immediately and offers a way to reverse it, instead of asking for confirmation first. Archiving an email and seeing "Conversation archived. Undo" is the typical example. It avoids the confirmation prompts that users learn to click through without reading.

Choose between undo and confirmation based on whether the action can actually be reversed.

| Action                              | Approach                            |
| ----------------------------------- | ----------------------------------- |
| Frequent and reversible             | Undo                                |
| Destructive but recoverable         | Undo, backed by a trash or history  |
| Irreversible, or affects other people | [Alert dialog](./Alert%20dialog.md) confirmation |
| Payment or legal commitment         | Review step before submitting       |

WCAG 3.3.4 Error Prevention (Legal, Financial, Data) applies to pages that create legal or financial commitments, or that change or delete user-controllable data. Those submissions must be reversible, checked for errors, or confirmed, so undo is one valid way to meet it.

There are three common implementations:

| Method           | How it works                         | Weakness                                  |
| ---------------- | ------------------------------------ | ----------------------------------------- |
| Delayed commit   | Send the request when the window ends | Closing the tab can lose or skip the action |
| Soft delete      | Mark as deleted, purge later         | Needs storage and a cleanup job           |
| Inverse action   | Run the opposite operation           | Fails if later changes conflict           |

The usual failure is an undo offered only in a [toast](./Toast.md). If the toast times out, the option disappears, and a keyboard user or someone on a screen reader (software that reads the UI aloud) may never reach it. Keep a lasting route as well, such as a Trash view, an activity history or a keyboard shortcut.

Undo must also restore the full previous state, including the item's position in its list. Return focus to the restored item or a sensible neighbour, because the element that had focus may have been removed. Announce both the action and its reversal through a `role="status"` region.

_Usage:_

"Should deleting a label ask 'Are you sure?'"

"No, it's easy to reverse. Use the undo pattern, and keep deleted labels recoverable for 30 days."
