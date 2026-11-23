---
description: A hierarchical list whose parent items expand and collapse, navigated with arrow keys, such as a file explorer.
---

A tree view is a hierarchical list whose parent items expand and collapse, such as the file explorer in a code editor. It suits deep, browsable structures where people move around and act on items. Do not use it for ordinary site navigation. A nested list of links with disclosure [buttons](./Button.md) is simpler and is what most sites need, because ARIA tree roles replace normal link and Tab behaviour with application-style keys.

The whole tree takes one Tab stop, usually managed with a [roving tabindex](./Roving%20tabindex.md).

| Key             | Action                                                           |
| --------------- | ---------------------------------------------------------------- |
| Up, Down Arrow  | Previous or next visible node                                    |
| Right Arrow     | Opens a closed node, or moves to the first child of an open one  |
| Left Arrow      | Closes an open node, or moves to the parent                      |
| Home, End       | First or last visible node                                       |
| Enter           | Performs the node's default action                               |
| Letter keys     | Type-ahead to a matching node                                    |
| `*`             | Optionally expands all siblings at that level                    |

```html
<ul role="tree" aria-label="Project files">
  <li role="treeitem" aria-expanded="true" aria-selected="false" tabindex="0">
    <span>src</span>
    <ul role="group">
      <li role="treeitem" aria-selected="true" tabindex="-1">index.ts</li>
    </ul>
  </li>
</ul>
```

Only parent nodes get `aria-expanded`. Putting `aria-expanded="false"` on a leaf is a common bug, because a screen reader then announces a file as collapsed, and the user tries to open something that has no children.

Moving focus and selecting are separate. In a [multi-select](./Multi-select.md) tree, the recommended model uses Space to toggle the focused node, so arrow keys can move without clearing the existing selection.

Large trees are often loaded on demand or rendered as a [virtualized list](./Virtualized%20list.md). When not all nodes are in the DOM, `aria-level`, `aria-setsize` and `aria-posinset` are required, or screen readers report wrong positions.

Make the arrow a distinct target for expanding and the label a target for activating. When a parent collapses around the focused child, move focus to the parent.

_Usage:_

"VoiceOver says every file in the project is collapsed."

"The tree view sets `aria-expanded` on leaf nodes too. Only parents should have it."
