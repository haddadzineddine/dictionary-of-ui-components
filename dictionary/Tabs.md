---
description: A row of labels that switches between panels of related content in the same place, showing one panel at a time.
---

Tabs are a row of labels that switch between panels of related content in the same place, showing one panel at a time. A settings screen with Profile, Billing and Team sections is a typical use. Choose them when people work with one section at a time and do not need to compare them. If they might need several sections open together, use an [accordion](./Accordion.md). If each label goes to a separate page, use links in a [navbar](./Navbar.md) with `aria-current="page"`, because tab roles there misdescribe what happens.

```html
<div role="tablist" aria-label="Account settings">
  <button role="tab" id="t1" aria-selected="true" aria-controls="p1">Profile</button>
  <button role="tab" id="t2" aria-selected="false" aria-controls="p2"
          tabindex="-1">Billing</button>
</div>
<div role="tabpanel" id="p1" aria-labelledby="t1" tabindex="0">...</div>
<div role="tabpanel" id="p2" aria-labelledby="t2" tabindex="0" hidden>...</div>
```

The tab list is one Tab stop, and arrow keys move within it.

| Key               | Action                                                   |
| ----------------- | -------------------------------------------------------- |
| Tab               | Enters at the active tab, then moves on to the panel     |
| Left, Right Arrow | Previous or next tab, wrapping at the ends               |
| Home, End         | Optionally first or last tab                             |
| Enter, Space      | Activates the tab, if it does not activate on focus      |

In a vertical tab list, set `aria-orientation="vertical"` and use Up and Down Arrow instead.

Activation can be automatic, where arrowing to a tab shows its panel, or manual, where the user presses Enter or Space. The Authoring Practices recommend automatic activation only when panels appear without noticeable delay. If each panel fetches data, automatic activation fires a request for every tab the user passes through, so use manual.

A panel with no focusable content, or whose first element is not focusable, should have `tabindex="0"` so that keyboard users can reach it.

Two state bugs are common. Unmounting a hidden panel discards anything typed in it, so a half-completed form is empty when the user comes back. Keep panels mounted and use `hidden`. And if the active tab lives only in memory, refreshing or sharing the link resets it, so reflect it in the URL.

_Usage:_

"I filled in Billing, checked Profile, and my Billing draft is gone."

"The tabs unmount inactive panels. Keep them mounted and toggle `hidden`."
