---
description: A placeholder that shows grey shapes in the layout of the coming content while the real data loads.
---

A skeleton screen is a placeholder that shows grey shapes in the layout of the coming content while the real data loads. Because the shapes hold the space the content will use, the page does not jump when data arrives. It suits content regions whose structure is known in advance, such as a feed, profile or [data table](./Data%20table.md).

| Situation                          | Indicator                           |
| ---------------------------------- | ----------------------------------- |
| Known layout, loading content      | Skeleton screen                     |
| [Button](./Button.md) or small inline wait        | [Spinner](./Spinner.md)             |
| Long task with measurable progress | [Progress bar](./Progress%20bar.md) |
| Response usually instant           | No indicator                        |

A skeleton that does not match the final layout causes the jump it was meant to prevent. If it shows three lines and the content has five, everything below shifts on load. Build skeletons from the same layout as the real component, and give images a reserved size with [aspect ratio](./Aspect%20ratio.md).

The shapes mean nothing to a screen reader, which reads the UI aloud, so hide them with `aria-hidden="true"`. Announce loading through a short message in a `role="status"` region. You can set `aria-busy="true"` on the region being replaced, which asks assistive technology to wait for the update to finish. Clear it on success and on failure.

```html
<section aria-busy="true" aria-labelledby="orders">
  <h2 id="orders">Orders</h2>
  <div class="skeleton-row" aria-hidden="true"></div>
  <div class="skeleton-row" aria-hidden="true"></div>
</section>
```

Shimmer animations need the same care as other motion. Stop or soften them under [reduced motion](./Reduced%20motion.md), and remember that WCAG 2.2.2 Pause, Stop, Hide applies to movement lasting over five seconds alongside other content unless it is essential.

Two other failures are common. A request that fails can leave the skeleton in place forever, so every loading path needs an [error state](./Error%20state.md). A skeleton shown for a fast response flashes on screen, so delay it briefly or skip it for cached data.

_Usage:_

"The orders page jumps about a second after it loads."

"The skeleton has fixed rows but the real rows wrap to two lines. Match the row height."
