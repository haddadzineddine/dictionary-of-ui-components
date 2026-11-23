---
description: A labelled group of related controls that takes one Tab stop and uses arrow keys to move between them.
---

A toolbar is a labelled group of related controls, such as the formatting row above a [rich text editor](./Rich%20text%20editor.md). In the ARIA sense, using `role="toolbar"`, the whole group takes a single Tab stop and arrow keys move between its controls. This keeps a keyboard user from pressing Tab twenty times to get past a row of formatting commands.

The WAI-ARIA Authoring Practices recommend the role only for groups of three or more controls. For a pair of [buttons](./Button.md), or a row of unrelated actions, use a plain container or `role="group"` and leave each one as a normal Tab stop.

| Key               | Action in a horizontal toolbar               |
| ----------------- | -------------------------------------------- |
| Tab, Shift+Tab    | Move focus into or out of the toolbar        |
| Right, Left Arrow | Move to the next or previous control         |
| Home, End         | Optionally move to the first or last control |
| Enter, Space      | Activate the focused control                 |

In a vertical toolbar, set `aria-orientation="vertical"`, and Up and Down Arrow do the moving. Wrapping from the last control to the first is optional.

```html
<div role="toolbar" aria-label="Text formatting">
  <button type="button" aria-pressed="false" tabindex="0">Bold</button>
  <button type="button" aria-pressed="false" tabindex="-1">Italic</button>
  <button type="button" aria-pressed="false" tabindex="-1">Underline</button>
</div>
```

The single Tab stop is usually built with a [roving tabindex](./Roving%20tabindex.md), where one control has `tabindex="0"` and the rest have `-1`. On first entry, focus goes to the first enabled control. On return, it can go back to the last one used.

The common bug is adding the role without the keyboard behaviour. A screen reader then announces a toolbar, but arrow keys do nothing. The reverse problem comes from controls that need the same arrow keys, such as a text input or [slider](./Slider.md) in a horizontal toolbar. Avoid them, or include only one and place it last. Disabled controls are usually skipped, but can stay focusable when users need to discover them.

_Usage:_

"Tabbing through the editor takes forever because every format button is a stop."

"Make it a real toolbar with one Tab stop and arrow keys between the buttons."
