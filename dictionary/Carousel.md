---
description: A region that shows one slide or a few items at a time, with controls for moving through the rest.
---

A carousel is a region that shows one slide or a few items at a time, with controls for moving through the rest. It saves vertical space, but content on later slides is easy to miss, and a slide that advances while someone is reading takes the text away from them. If every item matters, a stacked list or a grid of [cards](./Card.md) keeps all of it visible.

| Need                              | Component                     |
| --------------------------------- | ----------------------------- |
| All items must be seen            | Grid or list                  |
| Browse similar items sideways     | Scroll container with snap    |
| Gallery of images                 | Thumbnails and [lightbox](./Lightbox.md) |
| Rotating promotional slides       | Carousel with a stop control  |

Auto-rotation carries the strictest requirements. WCAG 2.2.2 Pause, Stop, Hide requires a way to pause moving content that starts automatically, lasts more than five seconds and appears alongside other content. The WAI-ARIA Authoring Practices add specific behaviour:

| Requirement      | Behaviour                                                 |
| ---------------- | --------------------------------------------------------- |
| Rotation control | A [button](./Button.md) to stop and restart, first in the Tab sequence   |
| Pointer hover    | Rotation stops while hovering                             |
| Keyboard focus   | Rotation stops when focus enters, until explicitly restarted |
| Live region      | `aria-live="off"` while rotating, `polite` when stopped   |
| Next, Previous   | Buttons that keep focus in place when activated           |

```html
<section aria-roledescription="carousel" aria-label="Featured plans">
  <button>Stop slide rotation</button>
  <div aria-live="off" aria-atomic="false">
    <div role="group" aria-roledescription="slide" aria-label="2 of 5">...</div>
  </div>
</section>
```

Hidden slides are a common accessibility bug. If off-screen slides stay focusable, Tab moves focus to links the user cannot see. Apply the `inert` attribute or `hidden` to inactive slides.

Touch-only swiping is another gap. WCAG 2.5.7 Dragging Movements requires a single-pointer alternative, so visible Next and Previous buttons are needed. If you set `touch-action`, keep vertical panning and pinch zoom available, for example with `pan-y pinch-zoom`. Also honour [reduced motion](./Reduced%20motion.md) by disabling auto-rotation and sliding transitions.

_Usage:_

"The hero slide changes while I'm still reading it."

"The carousel needs to stop on hover and focus, and it needs a visible pause button."
