---
description: The proportion between an element's width and height, used to reserve space and keep media from distorting.
---

An aspect ratio is the proportion between an element's width and height, such as 16:9 for video or 1:1 for a square thumbnail. In CSS, the `aspect-ratio` property lets the browser calculate one dimension from the other. Its most frequent job is reserving space, so the page does not jump when an image finishes loading and pushes the text below it down.

```css
.thumbnail {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
```

For images, set the `width` and `height` attributes in HTML as well. Browsers use them to work out the ratio before the file arrives, so layout space is reserved early, even when CSS sets `width: 100%` and `height: auto`.

When the media does not match the box, `object-fit` decides what happens.

| Value     | Result                            | Use                    |
| --------- | --------------------------------- | ---------------------- |
| `fill`    | Stretches, distorting the image   | Rarely                 |
| `cover`   | Fills the box, cropping the edges | Thumbnails, [avatars](./Avatar.md) |
| `contain` | Fits inside, leaving empty bands  | Logos, product photos  |

Content taller than the box is the usual surprise. An element with `aspect-ratio` has an automatic minimum height based on its content, so a [card](./Card.md) set to 1:1 grows past square when its text is long. The ratio appears to be ignored. Setting `overflow: auto` or `hidden` makes the element a scroll container, which removes that minimum and keeps the ratio. Setting `min-height: 0` also keeps the ratio, but content then overflows unless you handle it separately.

Forcing text into a fixed ratio carries an accessibility risk. Users who enlarge text need the box to grow, and WCAG 1.4.4 Resize Text does not allow clipped content at 200 percent. Apply fixed ratios to media and let text containers keep their automatic height.

An explicit `width` and `height` together override the ratio, because both dimensions are already known. Set only one when you want the ratio to apply.

_Usage:_

"The article list jumps around as the thumbnails load."

"The images have no dimensions. Set an aspect ratio so the space is reserved."
