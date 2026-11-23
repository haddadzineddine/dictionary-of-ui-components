---
description: A list of actions that opens from a button and closes after one is chosen.
---

A dropdown menu is a list of actions that opens from a [button](./Button.md) and usually closes after one is chosen, such as Rename, Duplicate and Delete under a "More" control. It holds actions. If the control sets a value in a form, use a [select](./Select.md). If it holds links to site sections, use a disclosure: a button with `aria-expanded` that reveals an ordinary list of links.

Mixing these up causes bugs. Adding `role="menu"` to site navigation tells screen readers to expect application-style keys, so people press arrows and nothing happens, or Tab closes the list before they reach the links. The WAI-ARIA Authoring Practices say a disclosure is better suited to most site navigation.

```html
<button type="button" aria-haspopup="menu" aria-expanded="true"
        aria-controls="actions">More</button>
<ul id="actions" role="menu" aria-label="More">
  <li role="menuitem" tabindex="-1">Rename</li>
  <li role="menuitem" tabindex="-1">Delete</li>
</ul>
```

| Key               | Action                                                 |
| ----------------- | ------------------------------------------------------ |
| Enter, Space      | On the button, opens and focuses the first item        |
| Down Arrow        | On the button, optionally opens. In the menu, next item |
| Up Arrow          | In the menu, previous item                             |
| Home, End         | First or last item, if arrows do not wrap              |
| A letter          | Optionally jumps to the next matching item             |
| Enter             | Activates the item and closes the menu                 |
| Escape            | Closes and returns focus to the button                 |
| Tab               | Leaves the menu and closes it                          |

Items can be `menuitem`, `menuitemcheckbox` or `menuitemradio`. Disabled items stay focusable so that people can discover them.

Menus inside a scrolling container or table are often clipped by `overflow: hidden`. Rendering through a [portal](./Portal.md), or using the [popover](./Popover.md) attribute with [anchor positioning](./Anchor%20positioning.md), lifts the menu above the page.

After an item runs, focus needs a destination. If "Delete" removes the row containing the button, focus falls to the page body and the user loses their place. Send it to the next row or a nearby heading.

_Usage:_

"The row actions menu gets cut off by the table."

"The table has `overflow: auto`. Render the dropdown menu in the top layer with the Popover API."
