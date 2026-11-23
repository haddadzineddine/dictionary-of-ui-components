---
description: A chronological display of events along a line, showing what happened and when.
---

A timeline is a chronological display of events along a line, showing what happened and when. Order histories, audit logs, incident reports and account activity commonly use one. A [stepper](./Stepper.md) looks similar but shows progress through a defined process with future steps, while a timeline mainly records events that have already occurred.

| Need                                 | Component        |
| ------------------------------------ | ---------------- |
| Record of past events                | Timeline         |
| Progress through known steps         | Stepper          |
| Records compared by field            | [Data table](./Data%20table.md) |
| Stream of incoming messages          | Log (`role="log"`) |

Use an ordered list, because sequence is the meaning of the component. Mark each date with `<time>` so the machine-readable value is available, and add the `reversed` attribute when the newest event comes first so the numbering stays correct.

```html
<ol reversed>
  <li>
    <time datetime="2026-03-14T09:30Z">14 Mar, 09:30 UTC</time>
    Order shipped
  </li>
  <li>
    <time datetime="2026-03-13T16:05Z">13 Mar, 16:05 UTC</time>
    Payment received
  </li>
</ol>
```

Draw the connecting line and dots with CSS pseudo-elements so they stay out of the accessibility tree. If a dot's color signals a status such as failed or completed, add text or an icon as well, since WCAG 1.4.1 does not allow color to be the only cue.

Date handling is where timelines usually go wrong. "2 days ago" is easy to scan but useless in an audit or a support call, so show the absolute time as well. Decide which timezone is displayed and label it. Without that, two people comparing an incident can read the same event as different times. Rendering relative or local time on the server can also produce a different value from the browser's, causing a mismatch when the page becomes interactive.

Long histories need [pagination](./Pagination%20control.md) or a "Show earlier" [button](./Button.md), plus grouping by day. If events arrive live, avoid moving content while someone reads it. Add new entries through a notice such as "3 new events", and let the user choose when to load them.

_Usage:_

"Support and the customer disagree about when the refund happened."

"The timeline only says 'yesterday'. Show the exact time and timezone on each event."
