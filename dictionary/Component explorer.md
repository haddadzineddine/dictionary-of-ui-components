---
description: A development tool that renders components in isolation so each state can be built, reviewed and tested.
---

A component explorer is a development tool that renders components in isolation, so each state can be built, reviewed and tested without running the full application. Storybook is a widely used example. Reaching a payment form's declined message in the real app might take a login, a seeded account and a failed card, whereas an explorer shows that state directly.

Each entry, often called a story, renders a component with fixed inputs.

| State to capture  | Why it is worth having                     |
| ----------------- | ------------------------------------------ |
| Default           | Baseline for review                        |
| Loading           | Shows the [skeleton screen](./Skeleton%20screen.md) or [spinner](./Spinner.md) |
| [Empty state](./Empty%20state.md) | Rarely seen during normal development |
| [Error state](./Error%20state.md) | Hard to trigger in the real app   |
| Long content      | Exposes overflow and truncation            |
| Dark theme        | Exposes hard-coded colors                  |

Designers can review real components in a browser, and generated prop tables turn the explorer into documentation for a [component library](./Component%20library.md).

It also provides a base for automated tests. Visual regression tools compare screenshots of each story to catch unintended changes, and automated accessibility checkers can run against each state. These checkers find only some issues, so manual testing with a keyboard and a screen reader (software that reads the UI aloud) is still needed.

Stories go out of date when they are written once and abandoned. Run them as tests in continuous integration so that a broken story fails the build.

Isolation also hides integration problems. A component can look correct in an explorer and break in the app, because the app adds global CSS, providers, real data lengths or a parent that creates a stacking context, which traps `z-index` values. Load the application's global styles and providers in the explorer and use realistic data.

_Usage:_

"How do I see the payment form's declined state without a test card?"

"Open it in the component explorer. There's a story for each error."
