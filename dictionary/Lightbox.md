---
description: A full-screen overlay that shows an enlarged image or media item above a dimmed page.
---

A lightbox is a full-screen overlay that shows an enlarged image or media item above a dimmed page. It is a specialised [modal dialog](./Modal%20dialog.md), so it inherits the same focus and dismissal rules. For a simple image, a link to the full-size file may be enough, and it works without script.

| Need                               | Component                       |
| ---------------------------------- | ------------------------------- |
| Inspect one image closely          | Lightbox, or link to the file   |
| Step through a gallery             | Lightbox with Next and Previous |
| Browse items inline                | [Carousel](./Carousel.md)       |
| Short preview on hover             | [Hover card](./Hover%20card.md) |

The thumbnail must be a real control. An `<img>` with a click handler cannot be reached by keyboard, so wrap it in a [button](./Button.md) or link whose name describes the action.

```html
<button aria-label="Enlarge: harbour at dusk">
  <img src="harbour-thumb.jpg" alt="" />
</button>

<dialog aria-label="Image viewer">
  <button>Close</button>
  <img src="harbour.jpg" alt="Fishing boats in a harbour at dusk" />
</dialog>
```

Opening a native `<dialog>` with `showModal()` moves focus inside it, makes the rest of the page inert, closes on Escape and returns focus to the thumbnail. A custom overlay has to build each of those itself, along with a [focus trap](./Focus%20trap.md). Add a [scroll lock](./Scroll%20lock.md) so that the page does not move behind the image.

Galleries need labelled Next and Previous buttons, plus Left and Right arrow keys as a convenience. Announce the position, such as "Image 3 of 12", in a `role="status"` region, and update the alt text with each image. Swiping cannot be the only way to move, because WCAG 2.5.7 Dragging Movements requires a single-pointer alternative.

Blocked zoom is a common failure. Viewing detail is the reason to open a lightbox, yet custom touch handlers or `touch-action: none` can block pinch zoom. Keep pinch zoom working, and show a visible Close button, since not every user knows that Escape or a backdrop click will dismiss it. Under [reduced motion](./Reduced%20motion.md), replace zoom transitions with a fade.

_Usage:_

"On my phone I can't pinch to see the floor plan detail."

"The lightbox sets `touch-action: none`. Let the browser handle pinch zoom."
