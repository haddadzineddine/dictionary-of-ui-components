---
description: A menu of actions for the item under the pointer, opened by right-click, long press or a keyboard command.
---

A context menu is a menu of actions for a specific item, opened by right-click, long press or a keyboard command. File managers and design tools use one to offer Rename, Copy and Delete on the thing under the pointer. It differs from a [dropdown menu](./Dropdown%20menu.md) because no visible [button](./Button.md) announces it, so it should only ever be a shortcut. Anything available in a context menu must also be reachable some other way, such as a "More" button on the row.

The browser fires a `contextmenu` event when the user tries to open a menu. Calling `preventDefault()` suppresses the native one so your own can appear.

```js
item.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  openMenu(event.clientX, event.clientY);
});
```

| Input     | How it opens                              | Where to place it         |
| --------- | ----------------------------------------- | ------------------------- |
| Mouse     | Right-click                               | At the pointer            |
| Keyboard  | Shift+F10 or the Menu key                 | At the focused element    |
| Touch     | Long press, where supported               | Near the finger           |

Keyboard opening is the commonly missed case. An event triggered from the keyboard may report coordinates that have nothing to do with the focused element, so a menu positioned from them can appear in a corner. Position it from the focused element in that case. Touch behaviour also differs between browsers, so test long press on real devices rather than assuming the event fires.

Once open, it follows the ARIA menu pattern: `role="menu"`, arrow keys to move, Enter to activate, Escape to close. Focus moves into the menu on opening. On closing, it returns to the element the menu acted on, and the Authoring Practices note this for menus opened from a context such as an editor.

Replacing the native menu removes Copy, Paste, spelling suggestions and "Open link in new tab". Attach the handler only to elements with useful custom actions, and leave text inputs and links alone.

_Usage:_

"I can't right-click a link to open it in a new tab anymore."

"Our context menu handler is on `document`. Scope it to the file rows."
