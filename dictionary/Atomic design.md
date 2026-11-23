---
description: A methodology by Brad Frost that describes interfaces in five levels, from atoms up to complete pages.
---

Atomic design is a methodology created by Brad Frost that describes interfaces in five levels, from small parts up to complete pages. It borrows its names from chemistry. Its purpose is to help a team think about an interface as a whole and as a collection of parts at the same time.

| Level     | Definition                                  | Example                  |
| --------- | ------------------------------------------- | ------------------------ |
| Atoms     | Basic elements that cannot be reduced further and still function | Label, input, [button](./Button.md) |
| Molecules | Simple groups of atoms working as one unit  | [Search field](./Search%20field.md) |
| Organisms | Distinct sections built from smaller parts  | Site header              |
| Templates | Page layouts showing content structure      | Article layout           |
| Pages     | Templates filled with representative content | The real pricing page   |

The page level is useful because a headline that fits a template with placeholder text may wrap to four lines with a real title. In code, atoms roughly correspond to a [primitive component](./Primitive%20component.md).

Frost describes atomic design as a mental model and states that it is not a linear process.

The common failure comes from applying the levels as a strict folder structure. A team creates `atoms/`, `molecules/` and `organisms/`, then spends review time arguing about whether a [card](./Card.md) is a molecule or an organism. The answer rarely affects how the code works. Many teams organise files by feature or component name and keep the vocabulary for discussion only.

The hierarchy says nothing about accessibility on its own. A set of accessible atoms can still form an inaccessible organism, for example if a label is separated from its input or the heading levels are wrong when the parts combine. Test at the level where users actually meet the interface.

_Usage:_

"Is this filter bar a molecule or an organism?"

"It doesn't matter. Atomic design is there to help us talk about it, so put it with the search feature."
