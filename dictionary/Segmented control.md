---
description: A row of joined options where one is active, used to choose a view or value from a small set.
---

A segmented control is a row of joined options where one is active, such as Day, Week and Month on a calendar. It keeps every choice visible and changes with one click. Use it for a small set of short labels. For a long list, or labels that do not fit, a [select](./Select.md) is a better fit.

The look does not define the semantics, and ARIA, the attributes that describe controls to assistive technology, has no segmented control role. Decide what the control does, then use the matching pattern.

| What it does                  | Build it as                      | Keyboard                           |
| ----------------------------- | -------------------------------- | ---------------------------------- |
| Sets a value                  | [Radio group](./Radio%20group.md) | Arrows move and choose            |
| Shows a different panel       | [Tabs](./Tabs.md)                | Arrows move between tabs           |
| Turns options on independently | [Toggle buttons](./Toggle%20button.md) | Tab, then Enter or Space     |

For the value case, native radio inputs provide the behaviour without scripting. Hide the circle visually and style the label.

```html
<fieldset class="segmented">
  <legend>Calendar view</legend>
  <label><input type="radio" name="view" value="day" /> Day</label>
  <label><input type="radio" name="view" value="week" checked /> Week</label>
  <label><input type="radio" name="view" value="month" /> Month</label>
</fieldset>
```

The common way this breaks is hiding the inputs with `display: none`. That removes them from the keyboard and the accessibility tree, so the control works only with a mouse. Clip them visually or set `opacity: 0` on an input that stays in the layout, and show focus on the label with `:has(:focus-visible)`.

Two other problems recur. The active segment is often marked by a subtle tint alone, which fails WCAG 1.4.1 if colour is the only cue. Labels can also overflow when the page is zoomed, because the row cannot wrap. WCAG 1.4.10 expects content to reflow at a width of 320 CSS pixels, so let the segments wrap or change to a select at a narrow [breakpoint](./Breakpoint.md).

_Usage:_

"I can't reach the Week and Month options with the keyboard."

"The radios are `display: none` in the segmented control. Hide them visually instead so they stay focusable."
