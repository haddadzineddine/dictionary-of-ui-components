---
description: A bounded container that groups content and actions about one item, usually repeated in a grid or list.
---

A card is a bounded container that groups content and actions about one item, such as a product, article or team member. Cards are usually repeated in a grid or list so people can scan separate items. If people need to compare the same attribute across many items, use a [data table](./Data%20table.md), because aligned columns make comparison easier than scattered card fields.

| Content                              | Component  |
| ------------------------------------ | ---------- |
| Separate items with mixed content    | Card       |
| Many records compared by attribute   | Data table |
| Simple items with one line each      | List       |
| One group of related settings        | Plain section with a heading |

Clickable cards are where most problems occur. Wrapping the entire card in `<a>` makes a screen reader (software that reads the UI aloud) announce all of its content as one long link name, and placing a [button](./Button.md) inside that link creates invalid nested interactive elements. A safer pattern keeps the link on the heading and stretches its hit area over the card with a pseudo-element:

```css
.card { position: relative; }
.card h3 a::after { content: ""; position: absolute; inset: 0; }
.card button { position: relative; z-index: 1; }
```

The raised `z-index` keeps secondary buttons clickable above the stretched link. The trade-off is that text in the card becomes harder to select, because the overlay receives the pointer.

Use semantic structure inside the card. Give each one a real heading at the correct level for the page, and mark a repeated set as a list with `<ul>`.

Uneven content is the common visual failure. One long title makes a card taller and misaligns the buttons in its row. Put cards in a grid so they stretch to equal height, make each card a flex column, and push the actions to the bottom with `margin-top: auto`. Reserve image space with [aspect ratio](./Aspect%20ratio.md) to prevent shifts as images load.

_Usage:_

"The screen reader reads the entire product card as one link."

"Move the link onto the card's title and stretch it with a pseudo-element."
