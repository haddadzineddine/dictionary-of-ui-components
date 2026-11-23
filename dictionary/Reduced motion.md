---
description: Honouring a user's system setting that asks for less non-essential animation.
---

Reduced motion means honouring a user's system setting that asks for less non-essential animation. Large movement such as parallax, zooming and sliding panels can cause dizziness or nausea for people with vestibular disorders, so an animation that looks harmless to its author can make a page unusable for someone else. Browsers expose the setting through the `prefers-reduced-motion` media feature, with the values `no-preference` and `reduce`.

The setting does not require removing all animation. Replace large motion with a gentler effect, and keep feedback that carries information.

| Original effect             | Under reduced motion           |
| --------------------------- | ------------------------------ |
| Page or panel slide         | Crossfade or instant change    |
| Zoom into a [lightbox](./Lightbox.md) | Fade in               |
| Parallax                    | Static background              |
| Auto-rotating [carousel](./Carousel.md) | No auto-rotation    |
| Smooth scroll to anchor     | Instant jump                   |
| [Spinner](./Spinner.md) rotation | Slow opacity pulse        |

```css
.panel { transition: transform 300ms ease-out; }

@media (prefers-reduced-motion: reduce) {
  .panel { transition: opacity 150ms linear; }
}
```

WCAG 2.3.3 Animation from Interactions (AAA) requires that motion triggered by interaction can be disabled unless it is essential. Color or opacity changes that do not alter perceived size, shape or position are outside its definition of motion. WCAG 2.2.2 Pause, Stop, Hide (A) separately covers content that moves automatically for more than five seconds alongside other content. For 2.2.2, provide a visible pause control as well as the media query.

A blanket reset is a common shortcut, and it can break an interface.

```css
* { animation: none !important; transition: none !important; }
```

With no transition, the `transitionend` event never fires. Code that waits for it to remove a closed [modal dialog](./Modal%20dialog.md) or unlock a form then hangs, and the UI gets stuck for exactly the users who turned on this setting. Prefer targeted rules, and do not depend on animation events for state changes without a fallback.

JavaScript-driven animation ignores CSS media queries, so check `matchMedia("(prefers-reduced-motion: reduce)")` and listen for changes.

_Usage:_

"With reduced motion on, the settings modal never closes."

"Our reset removes the transition, so `transitionend` never fires. Close it without waiting for the event."
