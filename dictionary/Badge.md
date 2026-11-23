---
description: A small read-only label attached to another element, showing a count or short status such as 3 or Beta.
---

A badge is a small read-only label attached to another element that shows a count or short status, such as "3" on an inbox icon or "Beta" beside a feature name. If the user can click, remove or toggle it, use a [chip](./Chip.md) instead.

| Need                                | Component                           |
| ----------------------------------- | ----------------------------------- |
| Count or status on another element  | Badge                               |
| Removable or selectable value       | Chip                                |
| Sentence explaining a condition     | [Inline alert](./Inline%20alert.md) |

A number alone gives little context to someone using a screen reader, software that reads the UI aloud. An inbox link containing a badge may be read as "Inbox 3", which does not say three of what. A dot badge has no text at all. Provide the meaning in text that is visually hidden but still exposed to assistive technology:

```html
<a href="/inbox">
  Inbox
  <span class="badge" aria-hidden="true">3</span>
  <span class="visually-hidden">, 3 unread messages</span>
</a>
```

Updating a badge does not announce anything by itself. If the user needs to know about the change, such as an item being added to a cart, write a short message into a `role="status"` region, which screen readers read without moving focus. Do not announce every increment of a busy counter.

Color needs two checks. Status cannot be conveyed by color alone under WCAG 1.4.1, so a red or green badge also needs a word or icon. Small text on a colored fill must still meet the 4.5:1 text contrast ratio in WCAG 1.4.3, and this is often where badges fail.

A badge positioned over an icon gets clipped when an ancestor has `overflow: hidden`, and a long count can cover the icon. Cap the display at a value like `99+` while keeping the full number in the hidden text, and set a `min-width` equal to the height so single digits stay round. Hide the badge at zero, because a permanent indicator stops carrying information.

_Usage:_

"VoiceOver just says 'Notifications 12' on that button."

"The badge needs hidden text saying 12 unread, otherwise the number has no meaning."
