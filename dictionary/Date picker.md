---
description: A control for entering a calendar date by typing or by choosing from a month grid.
---

A date picker is a control for entering a calendar date, by typing or by choosing from a month grid. The native `<input type="date">` handles locale display, a built-in picker and range limits. Its appearance varies by browser, but it is the first option to try.

```html
<label for="start">Start date</label>
<input id="start" type="date" min="2026-01-01" max="2026-12-31" />
```

The displayed format follows the user's locale, while `value` is always `yyyy-mm-dd`. A common bug comes from parsing it with `new Date("2026-03-01")`. JavaScript treats a date-only string as midnight UTC, so a user west of UTC sees 28 February. Keep calendar dates as plain strings unless a time zone is part of the meaning.

For a date of birth, paging back decades is slow, so a typed field or separate day, month and year inputs work better. For a date close to today, a calendar helps people see weekdays. In any custom picker, keep a typed input available too.

A custom calendar usually opens in a [modal dialog](./Modal%20dialog.md) with a grid of days. The WAI-ARIA Authoring Practices example uses these keys.

| Key                  | Action in the grid                        |
| -------------------- | ----------------------------------------- |
| Arrow keys           | Previous or next day, or same day by week |
| Home, End            | First or last day of the week             |
| Page Up, Page Down   | Previous or next month                    |
| Shift+Page Up, Down  | Same month in previous or next year       |
| Enter, Space         | Choose the date and close                 |
| Escape               | Close without choosing                    |

Only one day is in the Tab order at a time, using a [roving tabindex](./Roving%20tabindex.md). The chosen day has `aria-selected="true"`, and today can use `aria-current="date"`. The month heading should be a polite live region so that paging is announced.

After choosing, focus returns to the trigger.

_Usage:_

"Customers in New York book March 1st, and the confirmation says February 28th."

"The date picker value is parsed as UTC. Keep it as a plain date string."
