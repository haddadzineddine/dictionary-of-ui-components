---
description: Two adjacent regions separated by a movable divider that lets the user resize them.
---

A split pane is two adjacent regions separated by a movable divider that lets the user resize them. Code editors, email clients and design tools use it to show a list beside a detail view. Use it when people work across both regions and prefer different proportions. If one fixed ratio works for everyone, a plain two-column grid is simpler. For a panel needed only occasionally, a [drawer](./Drawer.md) leaves more room for the main content.

The divider is a real control. The WAI-ARIA Authoring Practices define it as the window splitter pattern, using a focusable `separator` whose value is the size of the primary pane.

```html
<div role="separator" tabindex="0"
     aria-orientation="vertical"
     aria-label="Resize file list"
     aria-controls="files"
     aria-valuenow="30" aria-valuemin="15" aria-valuemax="60"></div>
```

| Key               | Behaviour                                  |
| ----------------- | ------------------------------------------ |
| Left, Right Arrow | Move a vertical splitter                   |
| Up, Down Arrow    | Move a horizontal splitter                 |
| Enter             | Collapse the primary pane, or restore it   |
| Home (optional)   | Give the primary pane its smallest size    |
| End (optional)    | Give the primary pane its largest size     |
| F6 (optional)     | Cycle between panes                        |

WCAG 2.5.7 Dragging Movements requires a single-pointer alternative to dragging, so add collapse or step [buttons](./Button.md) that can be clicked or tapped. The visible divider is often 1px wide, so extend its hit area to meet the [touch target](./Touch%20target.md) requirement.

A drag can stop following the cursor when the pointer leaves the divider. Call `setPointerCapture()` on pointer down so that later events keep going to the divider. If a pane contains an iframe, test dragging across it, because the frame can receive the pointer events. Setting `pointer-events: none` on the frame during the drag is a common fix.

Clamp sizes so neither pane collapses to an unusable width, and set `min-width: 0` so wide content cannot block resizing. Below a [breakpoint](./Breakpoint.md), stack the panes or show one at a time.

_Usage:_

"The divider gets stuck whenever I drag over the preview."

"The preview is an iframe, so the split pane loses the pointer. Disable its pointer events during the drag."
