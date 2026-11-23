---
description: A CSS feature that positions an element relative to another element, with fallbacks when it would overflow the viewport.
---

Anchor positioning is a CSS feature that places one element relative to another, such as a [tooltip](./Tooltip.md) above its [button](./Button.md) or a menu below its trigger. It replaces JavaScript libraries that measure elements and recalculate on scroll, which is a common cause of menus lagging behind their trigger.

```css
.trigger {
  anchor-name: --menu-trigger;
}

.menu {
  position: fixed;
  position-anchor: --menu-trigger;
  position-area: bottom span-right;
  position-try-fallbacks: flip-block, flip-inline;
}
```

| Property                 | Purpose                                                  |
| ------------------------ | -------------------------------------------------------- |
| `anchor-name`            | Names the element to position against                    |
| `position-anchor`        | Says which anchor this element uses                      |
| `position-area`          | Places it on a 3x3 grid around the anchor                |
| `anchor()`               | Uses an anchor edge inside inset properties              |
| `position-try-fallbacks` | Alternative placements if it would overflow              |
| `position-visibility`    | Hides it, for example when the anchor scrolls out of view |

The positioned element must be `position: absolute` or `fixed`. A [popover](./Popover.md) opened with `popovertarget` gets an implicit anchor to its invoker, so `position-area` works with no `anchor-name` at all.

The browser tries fallbacks only on overflow and takes the first that fits. If none fits, it keeps the original position, so set a `max-height` on tall menus.

A frequent bug comes from reusing a name. If several elements share an `anchor-name`, as in a repeated table row, the positioned element binds to the last one in the document, and every menu opens at the bottom row. Give each instance a unique name, or limit the name to a subtree with `anchor-scope`.

MDN marks `anchor-name` as Baseline 2026, newly available since January 2026, with some parts varying in support. Older browsers will ignore these properties, so provide a usable fallback position or keep a library for them.

Anchoring changes only the visual position, so the trigger and panel still need their usual roles and focus handling.

_Usage:_

"Every row's menu opens at the bottom of the table."

"They all share one `anchor-name`, so anchor positioning picks the last. Add `anchor-scope` to each row."
