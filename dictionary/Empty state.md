---
description: The content shown when a view has nothing to display, explaining why and what the user can do next.
---

An empty state is the content shown when a view has nothing to display, explaining why and what the user can do next. Without one, a new user opens a project list and sees a blank area, with no way to tell whether the page is broken, still loading or empty.

The right message depends on why the view is empty.

| Cause               | Example message            | Next action     |
| ------------------- | -------------------------- | --------------- |
| First use           | "No projects yet"          | Create project  |
| No search results   | "No results for 'invoce'"  | Clear search    |
| Filters too narrow  | "No open tickets match"    | Reset filters   |
| Work completed      | "All caught up"            | None needed     |
| No permission       | "You don't have access"    | Request access  |

Keep empty, loading and failed as three separate states. A common bug is initialising the list to `[]`, which renders "No invoices" for a moment before the data arrives. A worse one is falling back to `[]` when the request fails, which tells users their data is gone. Track request status explicitly and show an [error state](./Error%20state.md) for failures and a [skeleton screen](./Skeleton%20screen.md) while loading.

For accessibility, use real text and a real heading or paragraph. Illustrations are usually decorative here, so give them `alt=""`. When a search or filter empties the results without a page load, announce the outcome through a `role="status"` region that already exists, such as "No results found". WCAG 4.1.3 Status Messages covers this kind of update, which should reach screen readers (software that reads the UI aloud) without moving focus.

Keep the message specific and offer one primary action. When filters caused the empty result, repeat the active filters so the user can see what to change. Do not fill the space with marketing copy on a screen where someone is trying to work.

_Usage:_

"A customer thought we deleted their invoices."

"The API timed out and we rendered the empty state. A failed fetch needs its own error state."
