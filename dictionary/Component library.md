---
description: A versioned collection of reusable UI components that teams install and build products from.
---

A component library is a versioned collection of reusable UI pieces, such as [buttons](./Button.md), inputs and dialogs, that teams install and build products from. It gives several applications one implementation of each control, so a fix to a [modal dialog](./Modal%20dialog.md) reaches all of them. A design system, the wider set of standards, guidance and shared design decisions, may include a component library, but the library is only its code.

| Approach             | You get                         | You give up                    |
| -------------------- | ------------------------------- | ------------------------------ |
| Styled library       | Fast start, finished visuals    | Distinct look, easy overrides  |
| [Headless](./Headless%20component.md) library | Behaviour and accessibility | You write all the styling |
| Copied-in source     | Full control of the code        | Upstream fixes arrive manually |
| Built in-house       | Exact fit                       | Ongoing maintenance cost       |

Controls such as a [combobox](./Combobox.md) or [date picker](./Date%20picker.md) are expensive to build well, so many teams adopt a tested library for them.

A breaking change can affect every consuming app at once, so follow semantic versioning: major for breaking changes, minor for additions, patch for fixes. Publish a changelog, deprecate an API before removing it. When upgrades become painful, teams stop taking them, and different apps end up pinned to different versions.

Style overrides are the other recurring problem. If consumers reach into internal class names to adjust a component, every internal change can break them. Expose supported options such as a [variant](./Variant.md), CSS variables or a [slot](./Slot.md), and treat the internal markup as private.

Using a library does not make a product accessible by itself. It can provide correct roles and keyboard support, but labels, heading order, focus destinations and color choices remain the product team's responsibility.

Document each component in a [component explorer](./Component%20explorer.md) with its states, so teams can find what already exists before building a second version.

_Usage:_

"We've got four different date pickers across our apps."

"Put one in the component library and migrate them over one at a time."
