---
description: A keyboard-opened search box that finds and runs commands or jumps to pages from anywhere in an application.
---

A command palette is a search box, opened with a keyboard shortcut, that finds and runs commands or jumps to pages from anywhere in an application. The person presses a shortcut, types a few letters of "invite user", and presses Enter. It suits large products used often by experienced people, and every command must also exist somewhere visible.

Compared with a [search field](./Search%20field.md), which returns content, a palette mainly returns actions. Compared with a [dropdown menu](./Dropdown%20menu.md), it scales to hundreds of items because people filter them by typing.

It is usually composed from existing patterns: a [modal dialog](./Modal%20dialog.md) containing a [combobox](./Combobox.md) with a listbox of results.

| Key             | Action                                      |
| --------------- | ------------------------------------------- |
| Ctrl or Cmd + K | Opens the palette (a common convention)     |
| Typing          | Filters results                             |
| Up, Down Arrow  | Moves the highlighted result                |
| Enter           | Runs the highlighted command                |
| Escape          | Closes and returns focus to where it was    |

DOM focus stays in the input while `aria-activedescendant` identifies the highlighted option, so typing keeps working. Announce the count with a `role="status"` message such as "6 results", because WCAG 4.1.3 covers this kind of update.

Keyboard shortcuts can conflict with browsers and with typing. Some browsers use Ctrl+K for their own search or address bar. A single-character shortcut such as `/` fires while someone types in a field unless you check the event target, and WCAG 2.1.4 requires that such shortcuts can be turned off or remapped, or work only while the relevant component has focus. Provide a visible [button](./Button.md) that opens the palette.

After a command runs, send focus to its result, such as the page it opened. If the command acts on the current view, return focus to the element that had it before.

_Usage:_

"Typing a slash in the comment box keeps opening the command palette."

"The shortcut listener doesn't check for inputs. Ignore it when focus is in an editable field."
