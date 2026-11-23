---
description: Letting users mark one or more rows in a table or list so a bulk action can apply to them.
---

Row selection lets users mark one or more rows in a [data table](./Data%20table.md) or list so an action can apply to all of them, such as archiving twenty invoices at once. It usually appears as a [checkbox](./Checkbox.md) column, with a header checkbox for selecting all rows and a [toolbar](./Toolbar.md) showing the bulk actions.

The header checkbox has three states, and `indeterminate` is set from script because HTML has no attribute for it.

| Rows selected | Header checkbox                           |
| ------------- | ----------------------------------------- |
| None          | Unchecked                                 |
| Some          | Indeterminate (`aria-checked="mixed"`)    |
| All           | Checked                                   |

An unclear "select all" can cause data loss. On a paginated table, a user ticks the header, sees every visible row checked and presses Delete, unsure whether that means 25 rows or all 1,240. State the scope in text ("25 selected. Select all 1,240") and make the larger selection a separate step. Confirm destructive bulk actions with an [alert dialog](./Alert%20dialog.md) that repeats the count.

Store selection by record ID and never by row index. Index-based selection attaches to the wrong records as soon as the table is sorted, filtered or paged.

Each checkbox needs a distinct accessible name, such as "Select invoice 1042". A column of checkboxes all named "Select" gives someone using a screen reader, which reads the UI aloud, no way to tell them apart. Announce the running count through a `role="status"` region.

| Structure                     | How selection is exposed            |
| ----------------------------- | ----------------------------------- |
| Native table with checkboxes  | The checkbox state                  |
| Grid widget (`role="grid"`)   | `aria-selected` on the row or cell  |

In a grid, the WAI-ARIA Authoring Practices require the selected state to look different from the focus indicator, and moving focus in a multi-select grid should not change the selection. If clicking a row also opens it, keep the checkbox as a separate target so that selecting does not navigate.

_Usage:_

"Sorting by date changed which rows were selected."

"We're tracking row selection by index. Key it on the invoice ID."
