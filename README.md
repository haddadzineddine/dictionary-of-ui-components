# UI Components Dictionary

A plain-English dictionary of the parts of a user interface: controls, forms, navigation, overlays, feedback, data display, layout foundations, component APIs and interaction states.

Why does the dropdown get clipped by its parent? Why can keyboard users escape the modal? When should this be a toast, a banner or an inline alert?

Each of these has a short explanation once you know the right words. Entries define the term, describe the failure it explains where there is one, and end with a short example of engineers using it.

---

## Table of contents

- **[Section 1 — Actions](#section-1--actions)**
  - [Button](#button)
  - [Icon button](#icon-button)
  - [Toggle button](#toggle-button)
  - [Split button](#split-button)
  - [Segmented control](#segmented-control)
  - [Floating action button](#floating-action-button)
  - [Toolbar](#toolbar)
- **[Section 2 — Form Controls](#section-2--form-controls)**
  - [Text field](#text-field)
  - [Textarea](#textarea)
  - [Checkbox](#checkbox)
  - [Radio group](#radio-group)
  - [Switch](#switch)
  - [Select](#select)
  - [Combobox](#combobox)
  - [Multi-select](#multi-select)
  - [Tag input](#tag-input)
  - [Number input](#number-input)
  - [Slider](#slider)
  - [Date picker](#date-picker)
  - [File upload](#file-upload)
  - [OTP input](#otp-input)
  - [Search field](#search-field)
  - [Rich text editor](#rich-text-editor)
- **[Section 3 — Form Patterns](#section-3--form-patterns)**
  - [Form field](#form-field)
  - [Helper text](#helper-text)
  - [Inline validation](#inline-validation)
  - [Error summary](#error-summary)
  - [Input mask](#input-mask)
  - [Multi-step form](#multi-step-form)
  - [Autosave](#autosave)
- **[Section 4 — Navigation](#section-4--navigation)**
  - [Navbar](#navbar)
  - [Sidebar](#sidebar)
  - [Breadcrumb](#breadcrumb)
  - [Tabs](#tabs)
  - [Pagination control](#pagination-control)
  - [Stepper](#stepper)
  - [Dropdown menu](#dropdown-menu)
  - [Context menu](#context-menu)
  - [Command palette](#command-palette)
  - [Bottom navigation](#bottom-navigation)
  - [Tree view](#tree-view)
  - [Skip link](#skip-link)
- **[Section 5 — Overlays](#section-5--overlays)**
  - [Modal dialog](#modal-dialog)
  - [Alert dialog](#alert-dialog)
  - [Drawer](#drawer)
  - [Bottom sheet](#bottom-sheet)
  - [Popover](#popover)
  - [Tooltip](#tooltip)
  - [Hover card](#hover-card)
  - [Portal](#portal)
  - [Focus trap](#focus-trap)
  - [Scroll lock](#scroll-lock)
  - [Anchor positioning](#anchor-positioning)
- **[Section 6 — Feedback](#section-6--feedback)**
  - [Toast](#toast)
  - [Banner](#banner)
  - [Inline alert](#inline-alert)
  - [Badge](#badge)
  - [Progress bar](#progress-bar)
  - [Spinner](#spinner)
  - [Skeleton screen](#skeleton-screen)
  - [Empty state](#empty-state)
  - [Error state](#error-state)
  - [Undo pattern](#undo-pattern)
  - [Optimistic UI](#optimistic-ui)
- **[Section 7 — Data Display](#section-7--data-display)**
  - [Card](#card)
  - [Data table](#data-table)
  - [Sticky header](#sticky-header)
  - [Row selection](#row-selection)
  - [Virtualized list](#virtualized-list)
  - [Infinite scroll](#infinite-scroll)
  - [Accordion](#accordion)
  - [Carousel](#carousel)
  - [Avatar](#avatar)
  - [Chip](#chip)
  - [Timeline](#timeline)
  - [Kanban board](#kanban-board)
  - [Lightbox](#lightbox)
- **[Section 8 — Layout and Foundations](#section-8--layout-and-foundations)**
  - [App shell](#app-shell)
  - [Layout container](#layout-container)
  - [Stack layout](#stack-layout)
  - [Split pane](#split-pane)
  - [Masonry layout](#masonry-layout)
  - [Aspect ratio](#aspect-ratio)
  - [Safe area](#safe-area)
  - [Breakpoint](#breakpoint)
  - [Spacing scale](#spacing-scale)
  - [Type scale](#type-scale)
  - [Fluid typography](#fluid-typography)
  - [Elevation](#elevation)
  - [Theming](#theming)
  - [Dark mode](#dark-mode)
- **[Section 9 — Component Architecture](#section-9--component-architecture)**
  - [Component library](#component-library)
  - [Primitive component](#primitive-component)
  - [Headless component](#headless-component)
  - [Compound component](#compound-component)
  - [Polymorphic component](#polymorphic-component)
  - [Slot](#slot)
  - [Render prop](#render-prop)
  - [Variant](#variant)
  - [Uncontrolled component](#uncontrolled-component)
  - [Component explorer](#component-explorer)
  - [Atomic design](#atomic-design)
- **[Section 10 — Interaction States](#section-10--interaction-states)**
  - [Hover state](#hover-state)
  - [Focus ring](#focus-ring)
  - [Active state](#active-state)
  - [Disabled state](#disabled-state)
  - [Touch target](#touch-target)
  - [Roving tabindex](#roving-tabindex)
  - [Drag and drop](#drag-and-drop)
  - [Micro-interaction](#micro-interaction)
  - [Easing](#easing)
  - [Reduced motion](#reduced-motion)

## Section 1 — Actions

### Button

A button is a control that performs an action when activated, such as saving a record, submitting a form or opening a [modal dialog](#modal-dialog). Use the native `<button>` element. It receives keyboard focus, activates on Enter and Space, and is announced as a button by screen readers, the software that reads an interface aloud. A `<div>` with a click handler has none of this, which is why some controls work with a mouse and do nothing from the keyboard.

The nearest alternative is a link, and the choice depends on what happens next.

| Element     | Use it when                                    | Activates with |
| ----------- | ---------------------------------------------- | -------------- |
| `<button>`  | The action changes this page or sends data     | Enter, Space   |
| `<a href>`  | The action goes to another URL                 | Enter          |

A link styled to look like a button should stay a link, because users expect to open it in a new tab or copy its address.

A common bug comes from the default type. Inside a `<form>`, a `<button>` with no `type` attribute is a submit button. A "Cancel" or "Show password" button then submits the form and can reload the page, losing what the user typed. Set the type on every button.

```html
<button type="button">Cancel</button>
<button type="submit">Save invoice</button>
```

The accessible name, which is the text a screen reader announces, comes from the button's content. Prefer a specific label such as "Delete invoice" over "Click here". After activation, focus should land somewhere sensible. If the button opens a dialog, focus moves inside it.

The native `disabled` attribute removes a button from the Tab order, so keyboard users may never discover it. `aria-disabled="true"` keeps it focusable, but your script must then block the action. See [disabled state](#disabled-state) for that trade-off, and [touch target](#touch-target) for minimum sizes.

_Usage:_

"The cancel button on the settings form keeps saving people's changes."

"It has no `type`, so it defaults to submit. Add `type="button"`."

### Icon button

An icon [button](#button) is a button that shows a symbol and no visible text, such as a bin for delete or a cross for close. It saves space in dense interfaces such as a [toolbar](#toolbar) or a table row. Use one only when the symbol is widely understood. If people would have to guess, use a text label or put a visible word beside the icon.

The usual failure is a missing name. With no text inside, a screen reader (software that reads the interface aloud) may announce only "button", so the user cannot tell whether it deletes, closes or shares. Provide the name with `aria-label` or visually hidden text, and hide the decorative graphic.

```html
<button type="button" aria-label="Delete invoice 1042">
  <svg aria-hidden="true" viewBox="0 0 24 24">...</svg>
</button>
```

Names in repeated rows should say which item they act on. Twenty controls all called "Delete" are hard to tell apart when listed by a screen reader.

Keyboard behaviour matches any button: Tab reaches it, and Enter or Space activates it. Inside a toolbar, arrow keys move between controls instead.

A [tooltip](#tooltip) helps sighted users learn what the symbol means, and it must appear on keyboard focus as well as hover. It does not replace the accessible name. If the tooltip repeats that name, do not also attach it with `aria-describedby`, or the same words are announced twice.

| Concern     | What to check                                                       |
| ----------- | ------------------------------------------------------------------- |
| Target size | At least 24 by 24 CSS pixels (WCAG 2.5.8), unless an exception applies |
| Contrast    | Icon at 3:1 against adjacent colours (WCAG 1.4.11)                  |
| State       | Use a [toggle button](#toggle-button) for on and off          |

A small glyph can sit inside a larger clickable area, so padding is the usual way to reach the [touch target](#touch-target) size.

_Usage:_

"VoiceOver just says 'button' for every action in this table row."

"They're icon buttons with no names. Add an `aria-label` that includes the invoice number."

### Toggle button

A toggle [button](#button) is a button with two states, pressed and not pressed, such as Bold in a text editor or Mute in a video player. HTML has no dedicated element for it. Use a native `<button>` and expose the state with `aria-pressed`.

```html
<button type="button" aria-pressed="false">Mute</button>
```

Enter and Space flip the state, and focus stays on the control. A screen reader (software that reads the interface aloud) announces something like "Mute, toggle button, not pressed". Styling from the attribute, with `[aria-pressed="true"]`, keeps the visual state and the exposed state from drifting apart.

There are two valid ways to communicate the state, and mixing them is the common bug.

| Approach      | Label               | State attribute      | User hears              |
| ------------- | ------------------- | -------------------- | ----------------------- |
| Pressed state | Stays "Mute"        | `aria-pressed`       | "Mute, pressed"         |
| Label change  | "Mute" to "Unmute"  | None                 | "Unmute, button"        |

If the label changes and `aria-pressed` is also set, the user can hear "Unmute, pressed" and has no way to tell whether the sound is on. The WAI-ARIA Authoring Practices state that the label on a toggle must not change when its state changes. Pick one approach per control.

Choose the nearest alternative by what the control means. A toggle button suits a command in a [toolbar](#toolbar) that applies to the current content. A [switch](#switch) suits a setting that is on or off, such as email alerts. A [checkbox](#checkbox) suits a choice that is submitted later with a form. For one choice among several, use a [segmented control](#segmented-control).

The pressed look must not rely on colour alone (WCAG 1.4.1). A filled background, border or icon change is easier to perceive, particularly when two neighbouring toggles are in different states.

_Usage:_

"The screen reader says 'Unmute, pressed'. Is the audio on or off?"

"We're swapping the label and setting `aria-pressed`. Keep the label as 'Mute' and only change the state."

### Split button

A split [button](#button) is two controls drawn as one: a main button that runs the default action, and a narrow arrow button that opens a list of related actions. A "Merge" control with "Squash and merge" and "Rebase and merge" behind the arrow is a typical example. Use it when one action is clearly the common choice and the others are variations of it. If no option is the default, a plain [dropdown menu](#dropdown-menu) is clearer.

The WAI-ARIA Authoring Practices have no dedicated split button pattern, so build it from two patterns they do define.

```html
<div role="group" aria-label="Merge options">
  <button type="button">Merge</button>
  <button type="button" aria-haspopup="menu" aria-expanded="false"
          aria-label="More merge options"></button>
</div>
```

| Part        | Role              | Keyboard                                         |
| ----------- | ----------------- | ------------------------------------------------ |
| Main action | `button`          | Enter or Space runs the default action           |
| Arrow       | Menu button       | Enter, Space or Down Arrow opens the menu        |
| Open menu   | `menu`            | Arrows move, Enter activates, Escape closes      |

Each half is its own Tab stop unless the pair sits inside a [toolbar](#toolbar). When the menu closes with Escape, focus returns to the arrow.

A common structural bug is nesting the arrow inside the main button. HTML does not allow interactive content inside a `<button>`, and clicks on the arrow can also trigger the main action. Keep them as siblings and join them visually with CSS.

The arrow needs its own accessible name, because a chevron alone is announced as an unnamed button. It also needs a usable size: narrow arrows often fall below the 24 by 24 CSS pixel [touch target](#touch-target) minimum in WCAG 2.5.8.

Some products remember the last chosen option and make it the new default. If you do this, update the visible label, or people will press "Merge" and get a different merge from the one they expect.

_Usage:_

"Clicking the little arrow also fires the deploy."

"The arrow is nested inside the main button. Split the button into two siblings so the click only opens the menu."

### Segmented control

A segmented control is a row of joined options where one is active, such as Day, Week and Month on a calendar. It keeps every choice visible and changes with one click. Use it for a small set of short labels. For a long list, or labels that do not fit, a [select](#select) is a better fit.

The look does not define the semantics, and ARIA, the attributes that describe controls to assistive technology, has no segmented control role. Decide what the control does, then use the matching pattern.

| What it does                  | Build it as                      | Keyboard                           |
| ----------------------------- | -------------------------------- | ---------------------------------- |
| Sets a value                  | [Radio group](#radio-group) | Arrows move and choose            |
| Shows a different panel       | [Tabs](#tabs)                | Arrows move between tabs           |
| Turns options on independently | [Toggle buttons](#toggle-button) | Tab, then Enter or Space     |

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

Two other problems recur. The active segment is often marked by a subtle tint alone, which fails WCAG 1.4.1 if colour is the only cue. Labels can also overflow when the page is zoomed, because the row cannot wrap. WCAG 1.4.10 expects content to reflow at a width of 320 CSS pixels, so let the segments wrap or change to a select at a narrow [breakpoint](#breakpoint).

_Usage:_

"I can't reach the Week and Month options with the keyboard."

"The radios are `display: none` in the segmented control. Hide them visually instead so they stay focusable."

### Floating action button

A floating action [button](#button), often shortened to FAB, is a prominent button fixed above the content, usually in a bottom corner of a mobile screen. It holds the main action on that screen, such as composing a message. Use it when one action dominates and the user needs it at any scroll position. If a screen has several equal actions, or the action fits in the page header or a [toolbar](#toolbar), an ordinary button is simpler.

The FAB has no special role. Build it as a native `<button>` with an accessible name, since most FABs show only an icon. Tab reaches it, and Enter or Space activates it.

```css
.fab {
  position: fixed;
  inset-block-end: calc(16px + env(safe-area-inset-bottom));
  inset-inline-end: 16px;
}
```

The common failure is covering content. The last row of a list ends up under the button, so its menu or link cannot be tapped. Reserve space at the end of the scrolling content and account for the device [safe area](#safe-area).

The same overlap affects keyboard users. WCAG 2.4.11 requires that a focused element is not entirely hidden by author-created content, and a fixed button can hide one as the page scrolls to it. Setting `scroll-padding-block-end` on the scroll container keeps focused items clear.

| Problem                         | Fix                                        |
| ------------------------------- | ------------------------------------------ |
| Last list item is covered       | Add bottom padding to the list             |
| Focused element sits underneath | Use `scroll-padding-block-end`             |
| Clashes with tab bar            | Offset it above [bottom navigation](#bottom-navigation) |

Fixed positioning changes where the button appears, but not its place in the Tab order, which follows the DOM. A FAB at the end of the markup is reached last.

If the button expands into several actions, treat it as a menu button with `aria-haspopup="menu"` and `aria-expanded`, and follow the [dropdown menu](#dropdown-menu) keyboard behaviour.

_Usage:_

"I can't tap the kebab menu on the last row. The compose button is on top of it."

"The FAB overlaps the list end. Add bottom padding to the list that matches its height."

### Toolbar

A toolbar is a labelled group of related controls, such as the formatting row above a [rich text editor](#rich-text-editor). In the ARIA sense, using `role="toolbar"`, the whole group takes a single Tab stop and arrow keys move between its controls. This keeps a keyboard user from pressing Tab twenty times to get past a row of formatting commands.

The WAI-ARIA Authoring Practices recommend the role only for groups of three or more controls. For a pair of [buttons](#button), or a row of unrelated actions, use a plain container or `role="group"` and leave each one as a normal Tab stop.

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

The single Tab stop is usually built with a [roving tabindex](#roving-tabindex), where one control has `tabindex="0"` and the rest have `-1`. On first entry, focus goes to the first enabled control. On return, it can go back to the last one used.

The common bug is adding the role without the keyboard behaviour. A screen reader then announces a toolbar, but arrow keys do nothing. The reverse problem comes from controls that need the same arrow keys, such as a text input or [slider](#slider) in a horizontal toolbar. Avoid them, or include only one and place it last. Disabled controls are usually skipped, but can stay focusable when users need to discover them.

_Usage:_

"Tabbing through the editor takes forever because every format button is a stop."

"Make it a real toolbar with one Tab stop and arrow keys between the buttons."

## Section 2 — Form Controls

### Text field

A text field is a single-line input for short typed values, such as a name, email address or phone number. Use the native `<input>` element with a visible `<label>`. For content that may run over several lines, use a [textarea](#textarea). When the value must come from a known list, use a [select](#select) or [combobox](#combobox).

The `type` attribute changes the on-screen keyboard and the validation the browser performs, while the field looks much the same.

| Value      | Use for             | Effect                                     |
| ---------- | ------------------- | ------------------------------------------ |
| `text`     | General short text  | No format check                            |
| `email`    | Email addresses     | Format check, keyboard with `@`            |
| `tel`      | Phone numbers       | Phone keypad, no format check              |
| `url`      | Web addresses       | Format check, URL keyboard                 |
| `password` | Secrets             | Masks characters                           |

```html
<label for="email">Work email</label>
<input id="email" name="email" type="email" autocomplete="email" />
```

The `autocomplete` attribute tells browsers and password managers what the field holds, so they can fill it in. WCAG 1.3.5 expects this on fields that collect information about the user.

A common failure is using a placeholder as the label. The text disappears as soon as the user starts typing, so anyone who pauses or returns to check the field cannot tell what it asks for. A placeholder may add an example, but the label should stay visible. The [form field](#form-field) entry covers how the label, hint and error fit together.

A native input needs no keyboard work: Tab focuses it, and arrows, Home and End move the caret. Pressing Enter usually submits the surrounding form.

Use `readonly` when a value should be visible, focusable and submitted but not edited. A `disabled` field is skipped by Tab and is not submitted. Blocking paste makes entry harder, especially for people using password managers, so leave it enabled.

_Usage:_

"Users keep emailing to ask what the second box on the signup form is for."

"Its only label is a placeholder, so it vanishes on typing. Give the text field a real label."

### Textarea

A textarea is a multi-line plain text input for longer content such as comments, messages and descriptions. Use the native `<textarea>` with a visible `<label>`. For a short single value, use a [text field](#text-field). If people need headings, links or bold, use a [rich text editor](#rich-text-editor).

Initial content goes between the tags rather than in a `value` attribute, and any whitespace there becomes part of the value. Indenting the closing tag in a template is a common reason a textarea appears to start with stray spaces.

```html
<label for="note">Delivery note</label>
<textarea id="note" name="note" rows="4" maxlength="500"></textarea>
```

| Attribute or property   | Effect                                                     |
| ----------------------- | ---------------------------------------------------------- |
| `rows`                  | Visible lines. Defaults to 2                               |
| `cols`                  | Visible width in average characters. Defaults to 20        |
| `maxlength`             | Limit in UTF-16 code units                                 |
| `wrap="hard"`           | Inserts line breaks on submit. Requires `cols`             |
| `resize` (CSS)          | Controls the drag handle                                   |

Character limits are a frequent source of bugs. `maxlength` counts UTF-16 code units, so many emoji count as two. Line breaks are normalised to two characters on submission, so a value that fits the counter in the browser can exceed a server limit. Pasted text can also be cut off at the limit with no message. Show a live count, validate on the server using the same counting rule, and tell the user when text was trimmed.

Enter inserts a new line and Tab moves focus to the next control. Do not intercept Tab to insert indentation unless the user has a documented way to leave, because WCAG 2.1.2 forbids keyboard traps.

Removing the resize handle takes away a control people use to read their own text. For auto-growing fields, MDN lists `field-sizing: content` as newly available across current browsers since June 2026. Older browsers ignore it, so keep a sensible `rows` value.

_Usage:_

"The form says 500 characters left, but the API rejects it as too long."

"The textarea counts a newline as one and the submitted value counts it as two. Match the server's rule."

### Checkbox

A checkbox is a control for an independent yes-or-no choice, or for choosing any number of options from a group. Use the native `<input type="checkbox">` with a `<label>`. Clicking the label toggles the box, which gives a larger target for free.

| Control                       | Choices                  | Takes effect          |
| ----------------------------- | ------------------------ | --------------------- |
| Checkbox                      | Zero, one or many        | Usually on form submit |
| [Radio group](#radio-group) | Exactly one          | Usually on form submit |
| [Switch](#switch)         | On or off                | Immediately           |

Space toggles a focused checkbox. Enter does not, and in a form it may submit instead. Each box is its own Tab stop. Screen readers (software that reads the interface aloud) announce the label, the role and whether it is checked.

```html
<fieldset>
  <legend>Notify me about</legend>
  <label><input type="checkbox" name="notify" value="invoices" /> Invoices</label>
  <label><input type="checkbox" name="notify" value="reports" /> Reports</label>
</fieldset>
```

Wrap related boxes in a `<fieldset>` with a `<legend>`, so the group's question is available alongside each option.

An unchecked checkbox sends nothing on submission, so the server receives no field at all rather than `false`. An update handler that only writes fields it receives will leave the old value in place, and the user's "off" never saves. Treat a missing field as false, or send the state explicitly. Several boxes sharing a `name` send one pair each, so the server must read all values and not just the last.

A parent checkbox for a group can show a third, partly checked state. Set it from script with `input.indeterminate = true`, as no HTML attribute exists for it. The property is visual and has no effect on submission, which depends only on `checked`. For custom controls, the equivalent is `aria-checked="mixed"`.

If you restyle the box, keep the real input in place and visually hidden. Using `display: none` removes it from the keyboard.

_Usage:_

"People untick marketing emails, save, and it comes back ticked."

"An unchecked checkbox isn't submitted, so our update skips the field. Treat missing as false."

### Radio group

A radio group is a set of options where only one can be chosen at a time, such as a delivery speed. All options stay visible, so people can compare them before deciding. Build it from native `<input type="radio">` elements that share a `name`, wrapped in a `<fieldset>` with a `<legend>` that states the question.

```html
<fieldset>
  <legend>Delivery speed</legend>
  <label><input type="radio" name="speed" value="standard" checked /> Standard</label>
  <label><input type="radio" name="speed" value="express" /> Express</label>
</fieldset>
```

The group behaves as one Tab stop, and the arrow keys change the choice.

| Key               | Behaviour                                                 |
| ----------------- | --------------------------------------------------------- |
| Tab               | Enters the group at the checked option, or the first one  |
| Down, Right Arrow | Moves to the next option and checks it, wrapping at the end |
| Up, Left Arrow    | Moves to the previous option and checks it, wrapping      |
| Space             | Checks the focused option if it is unchecked              |

Because arrow keys change the value as they move, a handler that acts on every change breaks keyboard use. If choosing an option reloads results or navigates away, a keyboard user cannot get past the first option. WCAG 3.2.2 says changing a setting must not cause a change of context without warning. Apply the choice with a separate [button](#button), or limit the change to updating content nearby.

Once a radio is checked, a user cannot uncheck it by clicking it again. An optional question therefore needs an explicit "None" option. If nothing is checked, the group is left out of the submitted data entirely, and `required` on any radio in the group makes one choice mandatory.

Compared with its alternatives, a radio group suits a short list that benefits from being read in full. A [select](#select) takes less room for a long list. A [checkbox](#checkbox) group is for choosing several, and a [segmented control](#segmented-control) is a compact visual treatment of the same single choice.

_Usage:_

"With the keyboard, pressing Down on the sort options reloads the page every time."

"The radio group submits on change. Add an Apply button so arrow keys can move freely."

### Switch

A switch is an on-off control for a setting that takes effect immediately, such as turning on email alerts. People expect the change to apply at once. The usual confusion comes from placing one inside a form with a Save [button](#button): the user flips it, leaves the page, and the setting was never stored. If a choice applies only on submit, use a [checkbox](#checkbox).

| Control                              | Meaning                 | Applies              |
| ------------------------------------ | ----------------------- | -------------------- |
| Switch                               | A setting is on or off  | Immediately          |
| Checkbox                             | An option is chosen     | Usually on submit    |
| [Toggle button](#toggle-button) | A command is active    | Immediately          |

The simplest robust build is a native checkbox with the `switch` role. It keeps focus, form and label behaviour, and assistive technology announces it as a switch.

```html
<label>
  <input type="checkbox" role="switch" name="alerts" checked />
  Email alerts
</label>
```

HTML also has a newer `switch` attribute on checkbox inputs. MDN describes it as experimental with limited support, and browsers without support ignore it and show a normal checkbox.

Space toggles a focused switch. The WAI-ARIA Authoring Practices list Enter as optional, and a native checkbox does not toggle on Enter. A custom element needs `role="switch"`, `aria-checked`, `tabindex="0"` and its own key handling.

Keep the label constant. "Email alerts, on" is clear, whereas a label that changes to "Email alerts disabled" can be announced as "Email alerts disabled, on". The state also needs more than a colour change to satisfy WCAG 1.4.1, so use thumb position, an icon or on and off text.

Because a switch applies at once, the save can fail after the thumb has already moved. Show a pending state if the request is slow. On failure, move the switch back and report the error in text, for example with a [toast](#toast), so the display does not claim a setting that was not saved.

_Usage:_

"I turned off alerts, but I'm still getting emails."

"The switch only updates local state until you press Save. Either persist it on change or use a checkbox."

### Select

A select is a control that opens a list of predefined options and shows the chosen one when closed, such as a country picker. Use the native `<select>` element whenever it fits. It comes with keyboard support, type-ahead and the operating system's picker on phones, all of which a custom replacement has to rebuild.

```html
<label for="country">Country</label>
<select id="country" name="country" required>
  <option value="">Choose a country</option>
  <optgroup label="Europe">
    <option value="fr">France</option>
    <option value="de">Germany</option>
  </optgroup>
</select>
```

The empty first option makes `required` work: if the user leaves it, the form reports the field as missing. Without it, the first real option is submitted silently, so a form can collect a default country nobody chose.

| Situation                         | Use                                   |
| --------------------------------- | ------------------------------------- |
| A few options worth comparing     | [Radio group](#radio-group)     |
| A longer fixed list               | Select                                |
| Hundreds of options, or typing helps | [Combobox](#combobox)             |
| Several values allowed            | [Multi-select](#multi-select)     |
| A list of actions, not values     | [Dropdown menu](#dropdown-menu) |

A single-choice dropdown is exposed to assistive technology with the `combobox` role, and a list with `size` above 1 or the `multiple` attribute is exposed as `listbox`. Exact key behaviour varies by browser and platform. In general, Tab focuses it, arrow keys or Space work with the list, and typing jumps to a matching option.

A select that navigates or submits as soon as its value changes can break keyboard use. On some browsers, arrowing through options fires a change for each one, so keyboard users are sent away on the first press. WCAG 3.2.2 requires advance warning for this kind of context change, so use a submit [button](#button) instead.

Styling has been the main reason teams replace the element. Customizable select, enabled with `appearance: base-select`, allows full styling of the button and picker. MDN lists it as limited availability, but unsupported browsers fall back to a standard select, so it works as an enhancement.

_Usage:_

"Why do so many signups list Afghanistan?"

"The select defaults to the first country. Add an empty option and mark the field required."

### Combobox

A combobox is an input paired with a popup of suggestions, so people can type to filter a long list and then choose a value. City and assignee pickers are common examples. Choose it over a [select](#select) when the list is too long to scan. If the value is free text with occasional hints, the native `<datalist>` is simpler, although its popup cannot be styled and some screen reader and browser pairings do not announce it.

The WAI-ARIA Authoring Practices define two kinds. An editable combobox accepts typing, and a select-only combobox behaves like a custom select with no text entry. In both, DOM focus stays on the input while `aria-activedescendant` points to the highlighted option, so the user can keep typing.

```html
<label for="city">City</label>
<input id="city" role="combobox" aria-expanded="true"
       aria-controls="city-list" aria-autocomplete="list"
       aria-activedescendant="city-2" />
<ul id="city-list" role="listbox">
  <li id="city-1" role="option">Paris</li>
  <li id="city-2" role="option" aria-selected="true">Porto</li>
</ul>
```

| Key             | Action                                              |
| --------------- | --------------------------------------------------- |
| Down Arrow      | Opens the popup or moves to the next option         |
| Up Arrow        | Optionally moves to the previous or last option     |
| Enter           | Accepts the highlighted option                      |
| Escape          | Closes the popup, and may then clear the input      |
| Alt+Down Arrow  | Optionally opens the popup without moving into it   |
| Tab             | Leaves the field. The popup is not a Tab stop       |

Several failures recur. Enter can submit the surrounding form while the popup is open, because the handler did not prevent the default. `aria-expanded` may stay `false` after opening, so screen readers never report the list. Filtering may change the options without announcing anything, so add a `role="status"` message such as "4 results", which WCAG 4.1.3 expects for this kind of update.

Async options add a race: a slow response for "pa" can arrive after the one for "par" and replace it. Discard stale responses. Decide also what happens to text that matches no option when focus leaves, since keeping it silently can submit an invalid value.

_Usage:_

"Pressing Enter on a suggestion submits the whole form."

"The combobox isn't preventing the default. Enter should accept the option while the popup is open."

### Multi-select

A multi-[select](#select) is a control for choosing any number of values from a known list, such as assigning several labels to a ticket. Pick a form based on how long the list is and how much room you have.

| Form                               | Fits                     | Trade-off                              |
| ---------------------------------- | ------------------------ | -------------------------------------- |
| [Checkbox](#checkbox) group    | Short lists              | Takes vertical space                   |
| `<select multiple>`                | Basic internal tools     | Modifier keys are hard to discover     |
| Listbox with `aria-multiselectable` | Custom scrolling lists  | You build all keyboard behaviour       |
| [Combobox](#combobox) with [chips](#chip) | Long, searchable lists | Most complex to build                  |

If people need to add values that are not in the list, use a [tag input](#tag-input).

The native `<select multiple>` has a well-known trap. A plain click replaces the whole selection, so someone carefully choosing items with Ctrl or Command can lose them all with one unmodified click. MDN notes that its keyboard mechanisms are not standardised and differ across browsers and operating systems.

For a custom listbox, the WAI-ARIA Authoring Practices recommend a model where moving focus does not change the selection.

| Key                | Action                                    |
| ------------------ | ----------------------------------------- |
| Up, Down Arrow     | Move focus                                |
| Space              | Toggle the focused option                 |
| Shift+Space        | Optionally select a contiguous range      |
| Ctrl+A             | Optionally select or clear all            |

Mark options with `aria-selected` or `aria-checked`, not both, and use the same one across the product. Keep the popup open after each choice so people can pick several in a row.

Filtering causes a recurring problem: chosen items vanish from the list when the search text no longer matches them, and users think their picks were lost. Show the current selection outside the filtered list.

On submission, each value is sent as its own pair, such as `label=bug&label=urgent`. A server that reads only one value will silently keep just the last one.

_Usage:_

"I picked eight labels, clicked one more, and the other eight disappeared."

"That's the native multi-select needing Ctrl. Replace it with a checkbox list."

### Tag input

A tag input is a text input that turns each entered value into a removable item, such as labels on an article or recipients in an email. Each item is usually drawn as a [chip](#chip) inside the field. Use it when people can add values of their own. If the values must come from a fixed list, a [multi-select](#multi-select) prevents typos and duplicates.

The WAI-ARIA Authoring Practices have no tag input pattern, so the behaviour below is convention built from native parts. A simple structure is a list of tags, each with a real remove [button](#button), followed by a labelled text input.

```html
<label for="tags">Labels</label>
<ul>
  <li>design <button type="button" aria-label="Remove design">×</button></li>
</ul>
<input id="tags" aria-describedby="tags-hint" />
<p id="tags-hint">Press Enter or comma to add a label.</p>
```

| Key or action         | Common behaviour                                   |
| --------------------- | -------------------------------------------------- |
| Enter or comma        | Commits the typed text as a tag                    |
| Backspace, empty input | Focuses or removes the last tag                   |
| Tab                   | Moves on, and should commit or keep pending text   |
| Paste                 | Splits a list into separate tags                   |

Enter may submit the surrounding form instead of adding the tag, so prevent the default only when there is text to commit. Text left in the input when the user tabs away can be lost silently. Backspace that deletes a tag at once is easy to trigger by accident, so many implementations focus the tag on the first press and remove it on the second.

Input method editors, used to compose characters in languages such as Chinese and Japanese, also use Enter to confirm text. A handler that ignores this creates a broken tag mid-word. Check `event.isComposing` before committing.

When a tag is removed, its button disappears and focus would fall to the page body. Move focus to the next tag or back to the input. Announce additions and removals through a `role="status"` region, since nothing else tells a screen reader user the list changed.

_Usage:_

"Japanese users get half-finished tags every time they confirm a word."

"Enter is committing during IME composition. Have the tag input check `isComposing` first."

### Number input

A number input is a field for numeric quantities, such as how many tickets to buy. The native `<input type="number">` validates the entry, supports `min`, `max` and `step`, and is exposed to assistive technology with the `spinbutton` role. Use it for values where adding or subtracting one makes sense. For an approximate value, use a [slider](#slider).

Many values that contain digits are not numbers. Card numbers, postal codes, phone numbers and one-time codes should not use it, because arrow keys can change them and leading zeros have no numeric meaning. For these, use a [text field](#text-field) with `inputmode`.

| Value              | Markup                                            |
| ------------------ | ------------------------------------------------- |
| Quantity           | `type="number" min="1" step="1"`                  |
| Price              | `type="text" inputmode="decimal"`                 |
| Postal code        | `type="text" autocomplete="postal-code"`          |
| Numeric PIN        | `type="text" inputmode="numeric"`                 |

The default `step` is 1, so a value of `1.5` is invalid unless you set `step="0.5"` or `step="any"`. This is a frequent reason a form refuses a price that looks correct. When the typed text is not a valid number, the input's `.value` is typically an empty string, so code can read a blank where the user can see text. Check `input.validity.badInput` to tell the two apart.

For a custom control, the WAI-ARIA Authoring Practices define these keys for the `spinbutton` role.

| Key                  | Action                                  |
| -------------------- | --------------------------------------- |
| Up, Down Arrow       | Increase or decrease by one step        |
| Page Up, Page Down   | Optionally change by a larger step      |
| Home, End            | Go to the minimum or maximum, if known  |

Focus stays in the text field, and increment [buttons](#button) are usually left out of the Tab order because the arrow keys do the same job. Set `aria-valuenow`, `aria-valuemin` and `aria-valuemax`, and `aria-invalid="true"` when the value is out of range.

_Usage:_

"The price field rejects 19.99 with a 'nearest valid value' error."

"That number input has the default step of 1. Set `step="0.01"`, or use text with `inputmode="decimal"`."

### Slider

A slider is a control for choosing a value along a range by moving a thumb, such as volume or brightness. It suits values where the approximate position matters more than the exact figure. If people need a specific value, such as a price of 149, use a [number input](#number-input), or pair the two so either can set the value.

Use the native `<input type="range">`, which has the `slider` role and built-in keyboard support. It defaults to a range of 0 to 100 with a starting value halfway along, so an untouched slider can submit 50 as if the user chose it.

```html
<label for="volume">Volume</label>
<input id="volume" type="range" min="0" max="10" step="1" value="4" />
```

| Key                | Action                            |
| ------------------ | --------------------------------- |
| Right, Up Arrow    | Increase by one step              |
| Left, Down Arrow   | Decrease by one step              |
| Home, End          | Go to the minimum or maximum      |
| Page Up, Page Down | Optionally move by a larger step  |

When the raw number means little, set `aria-valuetext` so a screen reader (software that reads the interface aloud) announces something useful, such as "Medium" or "£40" rather than "2". Also show the current value on screen.

WCAG 2.5.7 requires a single-pointer alternative to dragging. Letting users click or tap the track satisfies it. Native sliders generally do this, and custom ones often do not.

A range slider with two thumbs needs two focusable elements. Each is its own Tab stop, and the Tab order stays fixed even if the thumbs swap visual position. When one thumb limits the other, update the dependent `aria-valuemin` or `aria-valuemax` as it moves.

Firing a request on every `input` event makes dragging stutter. Update the display on `input` and fetch on `change`. Some touch screen readers may not operate custom sliders, so test on real devices.

_Usage:_

"The price filter refetches on every pixel of drag, and the page locks up."

"The slider is wired to `input`. Update the label there and run the query on `change`."

### Date picker

A date picker is a control for entering a calendar date, by typing or by choosing from a month grid. The native `<input type="date">` handles locale display, a built-in picker and range limits. Its appearance varies by browser, but it is the first option to try.

```html
<label for="start">Start date</label>
<input id="start" type="date" min="2026-01-01" max="2026-12-31" />
```

The displayed format follows the user's locale, while `value` is always `yyyy-mm-dd`. A common bug comes from parsing it with `new Date("2026-03-01")`. JavaScript treats a date-only string as midnight UTC, so a user west of UTC sees 28 February. Keep calendar dates as plain strings unless a time zone is part of the meaning.

For a date of birth, paging back decades is slow, so a typed field or separate day, month and year inputs work better. For a date close to today, a calendar helps people see weekdays. In any custom picker, keep a typed input available too.

A custom calendar usually opens in a [modal dialog](#modal-dialog) with a grid of days. The WAI-ARIA Authoring Practices example uses these keys.

| Key                  | Action in the grid                        |
| -------------------- | ----------------------------------------- |
| Arrow keys           | Previous or next day, or same day by week |
| Home, End            | First or last day of the week             |
| Page Up, Page Down   | Previous or next month                    |
| Shift+Page Up, Down  | Same month in previous or next year       |
| Enter, Space         | Choose the date and close                 |
| Escape               | Close without choosing                    |

Only one day is in the Tab order at a time, using a [roving tabindex](#roving-tabindex). The chosen day has `aria-selected="true"`, and today can use `aria-current="date"`. The month heading should be a polite live region so that paging is announced.

After choosing, focus returns to the trigger.

_Usage:_

"Customers in New York book March 1st, and the confirmation says February 28th."

"The date picker value is parsed as UTC. Keep it as a plain date string."

### File upload

A file upload is a control for choosing files from a device and sending them to a server. The native `<input type="file">` opens the system file picker, works from the keyboard, and on phones can offer the camera. A custom drop zone is an addition to this control and should not replace it.

```html
<label for="receipts">Upload receipts (PDF or JPEG)</label>
<input id="receipts" type="file" name="receipts"
       accept=".pdf,image/jpeg" multiple />
```

The `accept` attribute is only a hint to the file picker. Users can usually override it, so a wrong file type can still arrive. Check type and size in the browser for quick feedback, and validate again on the server, which is the only check that can be trusted.

| Stage    | What the interface does                                |
| -------- | ------------------------------------------------------ |
| Choose   | Picker or drop, with accepted types and limits stated  |
| Check    | Reject wrong type or size with a specific message      |
| Upload   | Show a [progress bar](#progress-bar) per file    |
| Finish   | List the file name with a remove [button](#button) |
| Fail     | Keep the file listed, with the reason and a retry      |

A dropzone built only on [drag and drop](#drag-and-drop) excludes keyboard users and anyone who cannot drag. WCAG 2.5.7 requires a single-pointer alternative to dragging, and a visible "Choose files" control provides it.

Styled upload controls often break because the real input is hidden with `display: none`, which takes it out of the Tab order. Keep it visually hidden but focusable, or use a real button that calls `input.click()`.

Choosing the same file twice does nothing by default. The `change` event does not fire because the value did not change. Clear it after handling with `input.value = ""`.

Announce progress milestones and results through a `role="status"` region, so that screen reader users know when the upload ends.

_Usage:_

"If an upload fails and I pick the same file again, nothing happens."

"The file upload input keeps its old value, so `change` doesn't fire. Reset it after each attempt."

### OTP input

An OTP input is a field for a one-time passcode, the short code sent by SMS, email or an authenticator app during sign-in. Designs often show it as six separate boxes. The more robust build is one input styled to look like boxes, because a single field handles paste, autofill and deletion without any script.

```html
<label for="code">Verification code</label>
<input id="code" name="code" type="text" inputmode="numeric"
       autocomplete="one-time-code" maxlength="6" />
```

| Attribute                       | Purpose                                     |
| ------------------------------- | ------------------------------------------- |
| `autocomplete="one-time-code"`  | Lets the browser or OS offer the code       |
| `inputmode="numeric"`           | Shows a digit keyboard without number rules |
| `type="text"`                   | Keeps leading zeros                         |
| `maxlength`                     | Limits entry to the code length             |

Do not use `type="number"`. A [number input](#number-input) has no use for leading zeros, and its arrow keys can change the code. If a code may contain letters, drop `inputmode`.

Split boxes commonly break paste. The user copies 482913, pastes, and only the 4 appears, because the first box accepts a single character. The Understanding document for WCAG 3.3.8, Accessible Authentication (Minimum), says a code field must allow pasting or automatic filling, and calls out split fields that take only one digit on paste.

If the design requires separate boxes, each needs a label such as "Digit 3 of 6", the group needs a name, paste must spread across all boxes, and Backspace in an empty box must move to the previous one. Screen reader users then hear six fields instead of one, which is the main reason to prefer the single input.

Submitting automatically on the last digit can fail WCAG 3.2.2 unless users are told in advance, and it gives no chance to correct a mistake. Keep a visible Verify [button](#button).

Codes expire, so state how long one lasts, offer a resend option, and report wrong or expired codes in text beside the field.

_Usage:_

"Pasting the code from my password manager only fills the first box."

"The OTP input is six separate fields. Switch to one field with `autocomplete="one-time-code"`."

### Search field

A search field is a text input for entering a query that filters the current page or returns results. Use `<input type="search">` inside the `<search>` element. The input is exposed to assistive technology with the `searchbox` role, and the wrapper creates a landmark that screen reader users can jump to.

```html
<search>
  <form action="/search">
    <label for="q">Search articles</label>
    <input id="q" name="q" type="search" />
    <button type="submit">Search</button>
  </form>
</search>
```

If `<search>` is not an option, `role="search"` on the `<form>` gives the same landmark. A magnifying glass alone is not a label, so give the input a visible label or an `aria-label`, and name any icon-only [button](#button).

Some browsers show a clear icon, and Chrome also clears the field on Escape. Do not rely on either. If clearing matters, add your own labelled control and return focus to the input afterwards.

| Need                                | Use                                       |
| ----------------------------------- | ----------------------------------------- |
| Query that returns a results page   | Search field                              |
| Live filter of a visible list       | Search field with a status message        |
| Suggestions to choose from          | [Combobox](#combobox)                 |
| Jump to commands across the product | [Command palette](#command-palette) |

Live results have two common failures. The first is silence: the list changes, but a screen reader user hears nothing. WCAG 4.1.3 treats text such as "5 results returned" as a status message, so put the count in a `role="status"` element that exists before the update.

The second is a race. Requests sent on each keystroke can return out of order, so results for "car" can overwrite results for "cart" while the field still reads "cart". Debounce input, which means waiting for a short pause in typing, and cancel or ignore stale requests with an `AbortController`.

Keep the query in the URL so results can be shared. When nothing matches, show an [empty state](#empty-state) that repeats the query and suggests a next step.

_Usage:_

"Search sometimes shows results for what I typed two letters ago."

"The search field has a response race. Abort the previous request on each new query."

### Rich text editor

A rich text editor is an editing surface for formatted content such as headings, lists and links. It is usually built on the `contenteditable` attribute, which makes an element editable in the browser. Choose it only when people need formatting. A [textarea](#textarea), optionally with Markdown, is less work and has fewer failure modes.

| Option                       | Fits                                 | Cost                       |
| ---------------------------- | ------------------------------------ | -------------------------- |
| Plain textarea               | Comments, notes                      | No formatting              |
| Textarea with Markdown       | Technical audiences                  | Users learn syntax         |
| Editor library               | Documents, CMS content               | Bundle size, integration   |
| Custom on `contenteditable`  | Rarely justified                     | High maintenance           |

Browsers produce inconsistent markup from the same keystrokes, so mature editors keep their own document model and treat the DOM as a rendering of it. The older `document.execCommand` API is deprecated and implemented inconsistently, so new work should not depend on it. The `beforeinput` event is the usual place to intercept edits, though autocorrect and input method editors (used to compose languages such as Japanese) may skip it.

Pasted content needs cleaning. Content copied from a word processor can bring in pages of inline styles, and pasted or stored HTML can carry scripts. Sanitise on paste, and again on the server before displaying saved content, because client checks can be bypassed.

For assistive technology, give the editable region `role="textbox"`, `aria-multiline="true"` and an accessible name. Formatting commands belong in a labelled [toolbar](#toolbar) with a single Tab stop, and [buttons](#button) such as Bold should expose `aria-pressed`.

If Tab indents text, keyboard users can get stuck, which WCAG 2.1.2 prohibits unless they are told how to leave. Keep Tab for moving focus, or document a way out such as Escape then Tab. The Authoring Practices also recommend a documented shortcut from the text to the toolbar.

Pair the editor with [autosave](#autosave).

_Usage:_

"Pasting from Word turned the article into a wall of inline styles."

"The rich text editor isn't sanitising paste. Strip it to our allowed elements."

## Section 3 — Form Patterns

### Form field

A form field is the unit that groups a label, a control, optional hint text and an error message. Design systems usually provide it as a wrapper so every input gets the same layout. The parts must be connected in the markup as well as placed near each other.

| Part    | Element                 | Connected with                       |
| ------- | ----------------------- | ------------------------------------ |
| Label   | `<label>`               | `for` matching the control's `id`    |
| Control | `<input>`, `<select>`   | The `id` itself                      |
| Hint    | Text element            | `aria-describedby` on the control    |
| Error   | Text element            | `aria-describedby`, `aria-invalid`   |

```html
<div class="field">
  <label for="vat">VAT number</label>
  <input id="vat" name="vat" aria-describedby="vat-hint vat-error"
         aria-invalid="true" />
  <p id="vat-hint">Starts with a two-letter country code.</p>
  <p id="vat-error">Enter a VAT number in the correct format.</p>
</div>
```

A connected label is announced when the control receives focus, and clicking it moves focus to the control. When the connection is broken, clicking the label does nothing. A screen reader (software that reads the interface aloud) then announces only "edit text, blank".

The usual cause is a duplicated or generated `id`. When a wrapper is rendered twice with the same hard-coded `id`, every label points to the first input on the page, so clicking the second label fills in the wrong field. Generate a unique `id` per instance.

[Helper text](#helper-text) and errors are linked by `aria-describedby`, which accepts several ids and reads them in the order listed. Show the error in text, because colour alone fails WCAG 1.4.1, and set `aria-invalid="true"` only once the value has actually failed. The timing belongs to [inline validation](#inline-validation).

For a question answered by several controls, such as a [radio group](#radio-group) or date of birth in three inputs, use `<fieldset>` with `<legend>` around them. The legend names the group and each control keeps its own label. Marking required fields with the `required` attribute conveys the state to assistive technology, and a visible marker or the word "required" conveys it to everyone else.

_Usage:_

"Clicking the Billing email label focuses the Shipping email input."

"Both form fields use the same hard-coded `id`. Generate one per instance."

### Helper text

Helper text is short, persistent guidance attached to a form control. It explains what to enter, the expected format, or how the value will be used, such as "We only use this to send receipts". It sits beside the input in a [form field](#form-field), and stays visible while the person types.

Each place for guidance has limits.

| Where guidance goes                | When it works                    | Why it can fail                       |
| ---------------------------------- | -------------------------------- | ------------------------------------- |
| Label                              | Naming the field                 | Becomes long and slow to hear         |
| Helper text                        | Format rules, consequences       | Ignored if it is too long             |
| Placeholder                        | A short optional example         | Disappears on typing                  |
| [Tooltip](#tooltip)            | Optional extra detail            | Hidden until requested, hard on touch |

Connect the text to the control with `aria-describedby`, so a screen reader (software that reads the interface aloud) announces it after the label and role when the field receives focus.

```html
<label for="password">New password</label>
<input id="password" type="password" aria-describedby="password-help" />
<p id="password-help">Use at least 12 characters.</p>
```

A common failure is revealing a requirement only after the mistake. A password field gives no rules, the user submits, and only then learns the minimum length. State constraints before input. WCAG 3.3.2 requires labels or instructions where content requires user input.

A related bug is replacing helper text with the error message. Once the field is invalid, the rule that would help the person fix it disappears. Keep the helper text and add the error next to it, or write the error so that it restates the rule. If both are shown, list both ids in `aria-describedby`.

Text below a field can be covered by an on-screen keyboard or a popup, so format rules are often easier to see between the label and the input.

Keep it to one short sentence, and reserve it for fields where people might otherwise get it wrong.

_Usage:_

"People only learn the password rules after the form rejects them."

"Move the rules into helper text under the label, and keep them visible when the error appears."

### Inline validation

Inline validation is checking a field and showing the result next to it, instead of waiting until a submitted form comes back with errors. A common failure is an error that appears too soon: a person types the first letter of an email address and is immediately told it is invalid.

Timing decides whether it helps.

| When to check   | Suits                                    | Risk                               |
| --------------- | ---------------------------------------- | ---------------------------------- |
| On each input   | Password rules, character counts, fixing an existing error | Errors while still typing |
| When leaving the field | Format checks such as email or date | Focus moves before the user reads it |
| On submit       | Every field, always                      | Late feedback if used alone        |

A common pattern waits until the user leaves a field before first showing an error, then re-checks on each input while they fix it. The CSS `:user-invalid` selector supports this, because it matches only after the user has interacted with the control, whereas `:invalid` matches an empty required field on page load.

```css
input:user-invalid {
  border-color: var(--danger);
}
```

Also validate on submit and on the server.

WCAG 3.3.1 requires that errors are identified and described in text, so a red border is not enough. Put the message in the [form field](#form-field), link it with `aria-describedby`, and set `aria-invalid="true"` only after the value has failed. The W3C forms tutorial suggests `aria-live="polite"` for feedback while typing, so that the message is read when the user pauses instead of on every keystroke.

Say what to do, such as "Enter a date in the format DD/MM/YYYY", rather than "Invalid input". Keep the submit [button](#button) enabled so people can submit and see an [error summary](#error-summary).

Async checks, such as username availability, need a pending state and must ignore stale responses.

_Usage:_

"The email field turns red as soon as I type one letter."

"The inline validation runs on input. Wait for blur first, then re-check while they fix it."

### Error summary

An error summary is a list of everything wrong with a submitted form, shown at the top, where each item links to the field that needs fixing. On a long form, it addresses a specific problem: the user presses Submit, nothing appears to change, and the error is out of view further up the page.

It works alongside [inline validation](#inline-validation) rather than replacing it. The summary gives the overview and a route to each problem, and the message beside each [form field](#form-field) explains the fix in context.

```html
<div id="errors" tabindex="-1">
  <h2>There are 2 problems with your application</h2>
  <ul>
    <li><a href="#email">Enter an email address</a></li>
    <li><a href="#dob">Date of birth must be in the past</a></li>
  </ul>
</div>
```

| Step | What happens                                                      |
| ---- | ----------------------------------------------------------------- |
| 1    | User submits. Validation finds errors                             |
| 2    | Summary renders above the form, and entered values are preserved |
| 3    | Focus moves to the summary, or to the first invalid field         |
| 4    | User follows a link, and focus lands in that input                |
| 5    | User fixes it, and the summary updates on the next submit         |

The W3C forms tutorial recommends a list before the form, under a distinctive heading, with each item naming the problem and linking to the control. It advises moving focus to the first invalid field, while WCAG technique G139 shows focus moving to the error list. Pick one approach and apply it across the product.

Several failures are common. Links that point to a wrapper rather than the input scroll the page but leave focus behind, so use the control's `id`. A [sticky header](#sticky-header) can cover the target after the jump, which `scroll-padding-block-start` prevents. Clearing the user's entries on error forces them to start again, and technique G139 explicitly says to keep them.

For server-rendered forms, also prefix the page `<title>` with "Error:" so that screen reader users hear the outcome as the page loads. If script inserts the summary without moving focus, `role="alert"` announces it.

_Usage:_

"Users hit Submit and think the form is broken."

"The error is off-screen. Add an error summary at the top and move focus to it."

### Input mask

An input mask is formatting applied to a [text field](#text-field) as the user types, such as grouping a card number into fours or adding brackets to a phone number. It rewrites the field's value while someone is typing into it, which is where most of its bugs come from.

A common symptom is a caret that jumps. The user goes back to fix a digit in the middle, the script reformats the value, and the caret lands at the end, so the next keystroke goes in the wrong place. Other failures follow the same cause: pasted values are rejected or doubled, browser autofill is garbled, and deletion stops at a separator that the mask immediately puts back.

Choose the lightest option that solves the problem.

| Approach                | How it works                              | Risk   |
| ----------------------- | ----------------------------------------- | ------ |
| Helper hint only        | Shows the format, accepts anything        | Lowest |
| Normalise on the server | Strips spaces and punctuation             | Low    |
| Format on blur          | Reformats when focus leaves               | Low    |
| Format while typing     | Rewrites on each input                    | High   |
| Fixed-slot mask         | Shows `__/__/____` and blocks other keys  | Highest |

Often it is enough to accept any reasonable format and clean it up afterwards.

If you format while typing, keep the raw value separate from the display value, restore the caret after each change, and handle paste. Do not depend on `beforeinput` alone, because autofill, spellcheck and input method editors (used to compose languages such as Japanese) may skip it. Use the `input` event as the final check.

A screen reader may read placeholder underscores aloud or announce each inserted character, so test with one. Keep `autocomplete` tokens such as `cc-number`, put the format in [helper text](#helper-text), and avoid fixed masks for international phone numbers and postcodes, which vary in length and grouping.

_Usage:_

"When I fix a digit in the card number, the cursor jumps to the end."

"The input mask rewrites the value on every keystroke. Format on blur instead."

### Multi-step form

A multi-step form is a long form split into a sequence of screens, such as Address, Delivery, Payment and Review. Use it when the questions fall into clear groups, or when later questions depend on earlier answers. A short form is easier on one page.

The main risk is lost work. Someone reaches step four, presses the browser's Back control to check an answer, and the form returns to an empty first step. Give each step its own URL, and save answers as the user leaves each one.

| Stage        | What the interface does                                        |
| ------------ | -------------------------------------------------------------- |
| Start        | States how many steps there are                                |
| Each step    | Shows position in the title and heading, for example "Step 2 of 4" |
| Next         | Validates this step and saves its answers                      |
| Back         | Returns with answers intact, and does not validate             |
| Review       | Shows all answers, with a link to change each                  |
| Submit       | Sends the data and confirms the result                         |

Show progress with a [stepper](#stepper) for a fixed sequence. If the number of steps depends on answers, the W3C forms tutorial suggests the `<progress>` element instead. Mark the current item with `aria-current="step"`.

When a step changes without a page load, move focus to the new step's heading (with `tabindex="-1"`) and update the document title, or screen reader users get no sign that anything changed.

Two WCAG criteria apply. Redundant Entry (3.3.7) says information already provided in the same process must be filled in or offered for selection, with narrow exceptions, so offer "same as delivery address" for billing. Error Prevention (3.3.4) requires legal, financial and data-changing submissions to be reversible, checked or confirmed, and a review step provides confirmation.

Validate each step on Next using [inline validation](#inline-validation) and an [error summary](#error-summary).

_Usage:_

"People press back on the payment step and lose their whole address."

"The multi-step form keeps answers in component state. Put each step in the URL and persist the draft."

### Autosave

Autosave is saving a user's work automatically as they edit, without a Save [button](#button). It protects against losing a draft when a tab closes, a laptop dies or a connection drops. It suits documents, notes and settings. It does not suit actions with consequences, such as publishing or paying, where a change should stay a draft until the person commits to it.

| Step    | Who     | What happens                                    |
| ------- | ------- | ----------------------------------------------- |
| Edit    | User    | Changes content. Status becomes "Unsaved"       |
| Wait    | Client  | Debounce, which waits for a pause in typing     |
| Send    | Client  | Sends changes with a version number. "Saving"   |
| Confirm | Server  | Stores them. Status becomes "Saved"             |
| Fail    | Client  | Keeps changes locally, retries and tells the user |

A false "Saved" label causes data loss. If the status updates before the server responds, or a failed request goes unnoticed, the person closes the tab believing their work is safe. Show the status from the actual result, and make failure visible.

Requests can also finish out of order, so an older save can overwrite a newer one. Send one save at a time per document, or attach a version so the server rejects stale writes. The same check detects edits from a second tab or device, so decide how to resolve that conflict.

For leaving the page, MDN recommends saving on `visibilitychange`, since `beforeunload` and `unload` often do not fire on mobile. Use `fetch` with `keepalive` or `navigator.sendBeacon` for the final small payload. A `beforeunload` handler, added only while work is unsaved, can show the browser's generic warning.

Expose the status with `role="status"` (WCAG 4.1.3), but announce failures and recovery rather than every save, or a screen reader user hears "Saved" throughout their writing. Provide version history or an [undo pattern](#undo-pattern) for changes people regret.

_Usage:_

"It said Saved, but my last paragraph is gone after the refresh."

"Autosave sets the label before the request finishes. Update it only when the server confirms."

## Section 4 — Navigation

### Navbar

A navbar is a horizontal bar of primary links, usually at the top of every page, holding the logo, main sections and account controls. It suits products with a small number of top-level destinations. When there are many sections or deep hierarchy, a [sidebar](#sidebar) has more room. On phones, [bottom navigation](#bottom-navigation) puts the same destinations within reach of the thumb.

Build it from a `<nav>` containing a list of links, and mark the current page.

```html
<header>
  <nav aria-label="Main">
    <ul>
      <li><a href="/" aria-current="page">Home</a></li>
      <li><a href="/pricing">Pricing</a></li>
    </ul>
  </nav>
</header>
```

If a page has several `<nav>` elements, give each a unique label. Leave out the word "navigation", because the role is announced as well, and "Main navigation navigation" is what the user would hear. Keep links in the same relative order across pages, which WCAG 3.2.3 requires.

A common accessibility mistake is applying ARIA menu roles to site links. `role="menu"` promises desktop-application behaviour, including arrow-key movement, and removes the list semantics people expect. The WAI-ARIA Authoring Practices say the disclosure pattern is better suited to most websites.

| Part             | Build it as                                       | Keyboard                  |
| ---------------- | ------------------------------------------------- | ------------------------- |
| Link             | `<a href>`                                        | Tab, Enter                |
| Section dropdown | [`<button aria-expanded>`](#button) that reveals links       | Enter or Space, Escape    |
| Mobile menu      | The same button at a narrow [breakpoint](#breakpoint) | Enter or Space, Escape |

Sticky navbars cause a separate bug. When someone tabs backwards or follows an in-page link, the target can land behind the bar. WCAG 2.4.11 requires that a focused element is not entirely hidden by author content. Setting `scroll-padding-block-start` to the bar's height on the scroll container fixes both cases.

Navbars also overflow when text is zoomed, because links cannot wrap in a fixed-height row. WCAG 1.4.10 expects reflow at a width of 320 CSS pixels, so collapse the links before they are clipped.

_Usage:_

"When I tab back up the page, focused links disappear under the header."

"The navbar is sticky. Add `scroll-padding-block-start` matching its height."

### Sidebar

A sidebar is a vertical panel beside the main content, usually holding navigation, filters or supporting information. It suits applications with many sections, because a vertical list has room to grow and can show nested groups. For a handful of destinations, a [navbar](#navbar) uses less space. A sidebar stays on screen alongside the content, whereas a [drawer](#drawer) opens over it on demand.

The right element depends on what it contains.

| Content                        | Element                                     |
| ------------------------------ | ------------------------------------------- |
| Links to other pages           | `<nav aria-label="Project">`                |
| Related supporting content     | `<aside>`                                   |
| Filters for the current list   | A labelled form or group within the page    |

Sidebars often have three display states.

| State     | Display                  | Requirement                                     |
| --------- | ------------------------ | ----------------------------------------------- |
| Expanded  | Icons and labels         | Mark the current link with `aria-current="page"` |
| Rail      | Icons only               | Every link keeps an accessible name             |
| Hidden    | Nothing                  | Contents leave the Tab order                    |

A common bug affects the hidden state. A sidebar moved off-screen with `transform` is invisible, but its links remain focusable, so a keyboard user tabs through a dozen stops with no visible [focus ring](#focus-ring). Set `hidden` or `inert` on it when closed. If you animate the exit, apply it once the transition ends.

The collapse control should be a real [button](#button) with `aria-expanded` and `aria-controls`, with a name that matches its purpose, such as "Project navigation". In a collapsed rail, add a [tooltip](#tooltip) so sighted users can learn each icon, and show it on focus as well as hover.

On small screens a fixed sidebar takes most of the viewport, and WCAG 1.4.10 expects content to reflow at a width of 320 CSS pixels. Below a set [breakpoint](#breakpoint), turn it into a drawer. If the hierarchy runs several levels deep, nested disclosure lists or a [tree view](#tree-view) can structure it.

_Usage:_

"Tab seems to vanish for about ten presses after the header."

"It's going through the collapsed sidebar off-screen. Set `inert` on it when it's closed."

### Breadcrumb

A breadcrumb is a trail of links showing where the current page sits in a site's hierarchy, such as Home, Shoes, Running, Trail Pro. It lets people move up a level without using search or the main menu. It suits sites with deep structures, such as stores and documentation. On a flat site with two levels it adds clutter.

A breadcrumb shows hierarchy, while browser history records visits. The common design mistake is mixing them by building the trail from the pages a person happened to visit. The trail then differs for each visitor and stops telling them where the page belongs.

The WAI-ARIA Authoring Practices define a simple structure: a labelled navigation landmark containing an ordered list of links.

```html
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/shoes">Shoes</a></li>
    <li><a href="/shoes/trail-pro" aria-current="page">Trail Pro</a></li>
  </ol>
</nav>
```

| Part        | Requirement                                                    |
| ----------- | -------------------------------------------------------------- |
| Container   | `<nav>` with `aria-label` or `aria-labelledby`                 |
| List        | `<ol>`, because order carries meaning                          |
| Current item | `aria-current="page"` if it is a link, optional if plain text |
| Separators  | Added in CSS so they are not read aloud                        |

No special keyboard behaviour is required. The links are ordinary Tab stops, and the pattern lists keyboard interaction as not applicable. Do not add arrow-key handling or menu roles.

Separators typed into the markup may be read aloud by a screen reader (software that reads the interface aloud). Draw them with a `::before` pseudo-element instead.

Long trails can overflow on small screens. Common fixes are letting the list wrap, showing only the parent as a "Back to Shoes" link, or collapsing the middle levels behind a [button](#button) with an ellipsis. That button needs a name such as "Show full path", and hidden levels must remain reachable. Truncating with CSS alone cuts off the page names people use to orient themselves.

_Usage:_

"Why does the breadcrumb change depending on how I got to this product?"

"It's built from browsing history. It should come from the category tree."

### Tabs

Tabs are a row of labels that switch between panels of related content in the same place, showing one panel at a time. A settings screen with Profile, Billing and Team sections is a typical use. Choose them when people work with one section at a time and do not need to compare them. If they might need several sections open together, use an [accordion](#accordion). If each label goes to a separate page, use links in a [navbar](#navbar) with `aria-current="page"`, because tab roles there misdescribe what happens.

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

### Pagination control

A pagination control is a set of links for moving through a long result set one page at a time, usually with Previous, Next and numbered pages. It gives people a stable position they can return to, share and reason about, such as "page 4". That suits search results, admin lists and a [data table](#data-table). [Infinite scroll](#infinite-scroll) suits casual browsing feeds, but it makes the footer hard to reach and a position hard to keep. A "Load more" [button](#button) sits between the two.

Build it as a labelled `<nav>` containing real links, so that each page has a URL.

```html
<nav aria-label="Pagination">
  <ul>
    <li><a href="?page=2" rel="prev">Previous</a></li>
    <li><a href="?page=2" aria-label="Page 2">2</a></li>
    <li><a href="?page=3" aria-label="Page 3" aria-current="page">3</a></li>
    <li><a href="?page=4" aria-label="Page 4">4</a></li>
    <li><a href="?page=4" rel="next">Next</a></li>
  </ul>
</nav>
```

| Part       | Detail                                                      |
| ---------- | ----------------------------------------------------------- |
| Current    | `aria-current="page"` plus a non-colour visual cue          |
| Numbers    | Named "Page 3", since a bare "3" is unclear out of context  |
| Previous   | On page 1, remove it or disable it                          |
| Ellipsis   | Plain text, hidden from assistive technology                |

Keep the visible number inside any accessible name, as WCAG 2.5.3 (Label in Name) requires, so that voice-control users can say what they see. No custom keyboard handling is needed. Links are ordinary Tab stops.

When results load without a full page navigation, two problems appear. Focus stays on a link that may have been re-rendered or removed, and nothing tells a screen reader user that the list changed. Move focus to the results heading, or announce "Page 3 of 12" in a `role="status"` region, and scroll to the top of the list.

Numbered pages built on a database offset can drift. If rows are inserted while someone is reading, items shift across the page boundary, so one record appears twice or another is skipped. For fast-changing data, cursor pagination, which asks for rows after the last one seen, keeps the sequence stable, at the cost of jumping directly to page 37.

_Usage:_

"The same order shows up on page 2 and page 3."

"New rows are shifting the offset. Switch that pagination control to a cursor."

### Stepper

A stepper is a progress indicator showing the stages of a process, which ones are complete and which one the user is on. It usually sits at the top of a [multi-step form](#multi-step-form), such as Address, Delivery, Payment, Review. The word is also used for the plus and minus [buttons](#button) on a [number input](#number-input), which is a different control.

| Component                         | Shows                                |
| --------------------------------- | ------------------------------------ |
| Stepper                           | Named stages and the current one     |
| [Progress bar](#progress-bar) | How much is done, with no stage names |
| [Tabs](#tabs)                 | Sections in any order                |
| [Breadcrumb](#breadcrumb)     | Position in a site hierarchy         |

Use a stepper when the sequence is known and short enough to show. If the number of steps depends on earlier answers, a fixed list will mislead people, so a progress bar or "Step 2" without a total is more honest.

Build it as an ordered list, and mark the current step.

```html
<ol aria-label="Checkout progress">
  <li><a href="/checkout/address">
    <span class="visually-hidden">Completed: </span>Address</a></li>
  <li aria-current="step">Delivery</li>
  <li>Payment</li>
</ol>
```

`aria-current="step"` marks the active item. For finished steps, the W3C forms tutorial uses visually hidden text such as "Completed:". Colour alone fails WCAG 1.4.1, so change the shape too.

Completed steps should be links, so people can go back and review their answers. Future steps should normally be plain text. A common failure is drawing every step as clickable: someone jumps to Payment before entering an address, and the form breaks or submits incomplete data. If the steps can be done in any order, a checklist or tabs describes that better.

The stepper is not itself a keyboard widget. Links take normal Tab stops, and plain text items take none. When the step changes, move focus to the new heading, because updating the indicator alone is easy to miss.

Horizontal steppers overflow on narrow screens. Stack them vertically, or show "Step 2 of 4: Delivery" as text.

_Usage:_

"Someone got to Payment without an address and the order failed."

"Future steps in the stepper are clickable. Only link the steps they've completed."

### Dropdown menu

A dropdown menu is a list of actions that opens from a [button](#button) and usually closes after one is chosen, such as Rename, Duplicate and Delete under a "More" control. It holds actions. If the control sets a value in a form, use a [select](#select). If it holds links to site sections, use a disclosure: a button with `aria-expanded` that reveals an ordinary list of links.

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

Menus inside a scrolling container or table are often clipped by `overflow: hidden`. Rendering through a [portal](#portal), or using the [popover](#popover) attribute with [anchor positioning](#anchor-positioning), lifts the menu above the page.

After an item runs, focus needs a destination. If "Delete" removes the row containing the button, focus falls to the page body and the user loses their place. Send it to the next row or a nearby heading.

_Usage:_

"The row actions menu gets cut off by the table."

"The table has `overflow: auto`. Render the dropdown menu in the top layer with the Popover API."

### Context menu

A context menu is a menu of actions for a specific item, opened by right-click, long press or a keyboard command. File managers and design tools use one to offer Rename, Copy and Delete on the thing under the pointer. It differs from a [dropdown menu](#dropdown-menu) because no visible [button](#button) announces it, so it should only ever be a shortcut. Anything available in a context menu must also be reachable some other way, such as a "More" button on the row.

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

### Command palette

A command palette is a search box, opened with a keyboard shortcut, that finds and runs commands or jumps to pages from anywhere in an application. The person presses a shortcut, types a few letters of "invite user", and presses Enter. It suits large products used often by experienced people, and every command must also exist somewhere visible.

Compared with a [search field](#search-field), which returns content, a palette mainly returns actions. Compared with a [dropdown menu](#dropdown-menu), it scales to hundreds of items because people filter them by typing.

It is usually composed from existing patterns: a [modal dialog](#modal-dialog) containing a [combobox](#combobox) with a listbox of results.

| Key             | Action                                      |
| --------------- | ------------------------------------------- |
| Ctrl or Cmd + K | Opens the palette (a common convention)     |
| Typing          | Filters results                             |
| Up, Down Arrow  | Moves the highlighted result                |
| Enter           | Runs the highlighted command                |
| Escape          | Closes and returns focus to where it was    |

DOM focus stays in the input while `aria-activedescendant` identifies the highlighted option, so typing keeps working. Announce the count with a `role="status"` message such as "6 results", because WCAG 4.1.3 covers this kind of update.

Keyboard shortcuts can conflict with browsers and with typing. Some browsers use Ctrl+K for their own search or address bar. A single-character shortcut such as `/` fires while someone types in a field unless you check the event target, and WCAG 2.1.4 requires that such shortcuts can be turned off or remapped, or work only while the relevant component has focus. Provide a visible [button](#button) that opens the palette.

After a command runs, send focus to its result, such as the page it opened. If the command acts on the current view, return focus to the element that had it before.

_Usage:_

"Typing a slash in the comment box keeps opening the command palette."

"The shortcut listener doesn't check for inputs. Ignore it when focus is in an editable field."

### Bottom navigation

Bottom navigation is a fixed bar along the bottom of a mobile screen, with links to a small number of top-level destinations, commonly three to five. Each item pairs an icon with a short label. It keeps the main sections within reach of the thumb and visible at all times. With more destinations than fit, use a [drawer](#drawer) or a "More" item. On wide screens, a [sidebar](#sidebar) or [navbar](#navbar) usually replaces it.

Although it can look like a row of [tabs](#tabs), it navigates between destinations, so it should be a `<nav>` containing links rather than an ARIA tab list.

```html
<nav aria-label="Primary" class="bottom-nav">
  <a href="/" aria-current="page">
    <svg aria-hidden="true">...</svg> Home
  </a>
  <a href="/orders">
    <svg aria-hidden="true">...</svg> Orders
  </a>
</nav>
```

```css
.bottom-nav {
  position: fixed;
  inset-inline: 0;
  bottom: 0;
  padding-block-end: env(safe-area-inset-bottom);
}
```

Each link is a normal Tab stop, activated with Enter. Screen readers announce the visible text and `aria-current="page"` for the current destination. Keep the labels visible, because icons alone are ambiguous.

| Symptom                                | Cause                     | Fix                                      |
| -------------------------------------- | ------------------------- | ---------------------------------------- |
| Last list item hidden behind the bar   | Fixed bar overlaps content | Add bottom padding to the main region   |
| Bar sits under the home indicator      | Ignores the [safe area](#safe-area) | Pad with the `env()` inset |
| Focused link hidden while tabbing      | Bar covers it (WCAG 2.4.11) | Set `scroll-padding-block-end`         |
| Bar floats above the on-screen keyboard | Viewport resizes on input | Hide it while a [text field](#text-field) has focus |
| Mis-taps on neighbouring items         | Small targets             | Size each item as a generous [touch target](#touch-target) |

State preservation is the less visible problem. If tapping a section resets its scroll position and filters, people lose their place every time they compare two sections. Keep each section's state when moving away. Tapping the current item again conventionally scrolls that section to the top.

Mark the current item with more than colour, as WCAG 1.4.1 requires. A filled icon, an indicator or a bolder label works.

_Usage:_

"Checkout is stuck behind the tab bar on iPhones."

"The bottom navigation overlaps the page. Pad the content by its height plus the safe-area inset."

### Tree view

A tree view is a hierarchical list whose parent items expand and collapse, such as the file explorer in a code editor. It suits deep, browsable structures where people move around and act on items. Do not use it for ordinary site navigation. A nested list of links with disclosure [buttons](#button) is simpler and is what most sites need, because ARIA tree roles replace normal link and Tab behaviour with application-style keys.

The whole tree takes one Tab stop, usually managed with a [roving tabindex](#roving-tabindex).

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

Moving focus and selecting are separate. In a [multi-select](#multi-select) tree, the recommended model uses Space to toggle the focused node, so arrow keys can move without clearing the existing selection.

Large trees are often loaded on demand or rendered as a [virtualized list](#virtualized-list). When not all nodes are in the DOM, `aria-level`, `aria-setsize` and `aria-posinset` are required, or screen readers report wrong positions.

Make the arrow a distinct target for expanding and the label a target for activating. When a parent collapses around the focused child, move focus to the parent.

_Usage:_

"VoiceOver says every file in the project is collapsed."

"The tree view sets `aria-expanded` on leaf nodes too. Only parents should have it."

### Skip link

A skip link is a link at the start of a page that lets keyboard users jump past repeated navigation to the main content. Without one, someone using only the keyboard must Tab through every item in the [navbar](#navbar) and [sidebar](#sidebar) on each page before reaching what they came for. It is usually hidden until it receives focus, so most mouse users never see it.

```html
<body>
  <a class="skip-link" href="#main">Skip to main content</a>
  <header>...</header>
  <main id="main" tabindex="-1">...</main>
</body>
```

```css
.skip-link {
  position: absolute;
  transform: translateY(-200%);
}
.skip-link:focus {
  transform: none;
}
```

It should be the first focusable element. Pressing Tab on page load reveals it, Enter activates it, and the next Tab continues from inside `<main>`. `tabindex="-1"` on the target lets it take focus programmatically without adding a Tab stop.

WCAG 2.4.1, Bypass Blocks (Level A), requires a way to skip content repeated across pages. Skip links are one sufficient technique. Headings and landmarks, such as `<main>` and `<nav>`, are also listed, and screen reader users often navigate by them. Those shortcuts are not available to sighted keyboard users without extra tools, so a skip link remains useful alongside them.

| Failure                         | Cause                                  | Fix                                 |
| ------------------------------- | -------------------------------------- | ----------------------------------- |
| Link never appears              | Hidden with `display: none`            | Move it off-screen or clip it       |
| Visible but under the header    | Lower stacking than a sticky bar       | Raise its `z-index`                 |
| Nothing happens on Enter        | Target `id` is missing                 | Add the `id` to `<main>`            |
| Router intercepts the link      | `#main` treated as a route change      | Handle it and focus the target      |
| Target hidden after the jump    | [Sticky header](#sticky-header) covers it | Set `scroll-padding-block-start` |

In single-page applications, the route changes without a page load and focus may stay in the previous view. After navigation, move focus to the new page's heading or the top of the document.

When revealed, the link needs a clear [focus ring](#focus-ring).

_Usage:_

"I have to tab through forty nav links on every page."

"We need a skip link as the first focusable element, pointing at `main`."

## Section 5 — Overlays

### Modal dialog

A modal dialog is a window over the page that blocks everything behind it until the user completes or dismisses it. Use it for a short, focused task that must be finished or abandoned before continuing, such as editing a record. If people need to refer to the page while working, use a non-modal [drawer](#drawer) or a [popover](#popover). For a confirmation that demands a decision, use an [alert dialog](#alert-dialog).

Use the native `<dialog>` element and open it with `showModal()`.

```html
<dialog id="edit" aria-labelledby="edit-title">
  <h2 id="edit-title">Edit address</h2>
  <form method="dialog">
    <button value="cancel">Cancel</button>
    <button value="save">Save</button>
  </form>
</dialog>
```

| Behaviour                   | `showModal()` provides | You still do                    |
| --------------------------- | ---------------------- | ------------------------------- |
| Renders above all content   | Yes, in the top layer  | Style the `::backdrop`          |
| Makes the page inert        | Yes                    | Nothing                         |
| Moves focus inside          | Yes                    | Use `autofocus` where it helps  |
| Closes on Escape            | Yes                    | Handle `cancel` to guard drafts |
| Returns focus on close      | Yes                    | Handle a removed trigger        |
| Names the dialog            | No                     | Add `aria-labelledby`           |
| Stops the page scrolling    | No                     | Add a [scroll lock](#scroll-lock) |

Content behind the dialog cannot receive focus. A custom build has to reproduce this with a [focus trap](#focus-trap). Do not put `tabindex` on the `<dialog>` element, which the HTML specification forbids.

Initial focus depends on the content. The first control is the default. For long content, focus a heading with `tabindex="-1"` so the top is not scrolled out of view. Always include a visible close control, because not everyone has an Escape key.

Closing on an outside click is risky for forms because a stray click discards work. The `closedby` attribute controls this, but MDN lists it as limited availability.

If the trigger is gone when the dialog closes, such as after deleting its row, move focus to a logical nearby element yourself. Otherwise focus falls to the page body and keyboard users lose their place.

_Usage:_

"Keyboard users can tab to the page behind our edit popup."

"It's a styled `div`. Make it a real modal dialog with `showModal()`."

### Alert dialog

An alert dialog is a [modal dialog](#modal-dialog) that interrupts the user with an important message and requires a response, such as "Delete this project?". The `alertdialog` role tells assistive technology that this is an urgent interruption, and some platforms treat it specially, for example by playing a system sound. Use it only when the person must decide before continuing.

| Situation                         | Use                                    |
| --------------------------------- | -------------------------------------- |
| Irreversible, serious action      | Alert dialog                           |
| Reversible action                 | Do it, then offer an [undo pattern](#undo-pattern) |
| Result of a completed action      | [Toast](#toast)                    |
| Problem tied to part of the page  | [Inline alert](#inline-alert)    |

Overuse is the common failure. When every action asks "Are you sure?", people learn to press the confirm [button](#button) without reading, so the one that matters gets the same reflex. Reserve the pattern for actions that cannot be undone, and offer undo for the rest.

```html
<dialog role="alertdialog" aria-labelledby="t" aria-describedby="d">
  <h2 id="t">Delete project?</h2>
  <p id="d">This removes 12 environments and cannot be undone.</p>
  <button autofocus>Cancel</button>
  <button>Delete project</button>
</dialog>
```

Open it with `showModal()` to get the same inert background, focus handling and Escape behaviour as any modal. The title is linked with `aria-labelledby`, and the message with `aria-describedby`, so that a screen reader announces both as the dialog opens.

For destructive actions, the WAI-ARIA Authoring Practices advise that initial focus may go to the least destructive control. If the focus lands on Delete, an accidental Enter or Space, perhaps from a key held down from the previous step, causes the loss the dialog was meant to prevent. Escape should act as Cancel, and clicking the backdrop should not count as confirmation.

Button labels should state the outcome. "Delete project" and "Keep project" can be understood without reading the message, while "OK" and "Cancel" are ambiguous for a question such as "Cancel this subscription?". When the dialog closes, focus returns to the trigger, or moves to a sensible neighbour if the trigger was deleted.

_Usage:_

"Someone double-pressed Enter and wiped their workspace."

"The alert dialog focuses Delete on open. Autofocus Cancel instead."

### Drawer

A drawer is a panel that slides in from a screen edge to show navigation, details or a form. It keeps people on the current page and gives more room than a small dialog, which suits viewing a record from a list or holding filters. A [sidebar](#sidebar) is part of the page layout and stays open. A [modal dialog](#modal-dialog) is centred and suits a short task. On phones, a [bottom sheet](#bottom-sheet) is often the better form.

The first decision is whether it blocks the page.

| Type      | Page behind       | Focus                                   | Build with                  |
| --------- | ----------------- | --------------------------------------- | --------------------------- |
| Modal     | Inert, dimmed     | Moves in and stays in                   | `<dialog>` with `showModal()` |
| Non-modal | Still usable      | Follows the trigger in the Tab order    | `<aside>` or `show()`       |

A modal drawer is a dialog with different CSS. Using `<dialog>` provides the inert background, Escape handling and focus return.

```css
dialog.drawer {
  margin: 0 0 0 auto;
  height: 100dvh;
  max-height: none;
}
```

A non-modal drawer must sit next to its trigger in the DOM, or use an equivalent focus order. WCAG 2.4.3 requires a focus order that preserves meaning, and a panel at the end of the document forces keyboard users to Tab through the entire page to reach what they just opened. Keep a labelled close [button](#button), and let Escape close it while focus is inside.

A closed drawer can remain in the Tab order. Moved off-screen with `transform`, it stays focusable, so Tab disappears into invisible links and screen readers read content nobody can see. A closed `<dialog>` avoids this. For a custom panel, apply `inert` or `hidden` when closed, after any exit animation ends.

Slide animations should respect [reduced motion](#reduced-motion). A modal drawer also needs a [scroll lock](#scroll-lock) so the page behind does not move.

_Usage:_

"With the filter panel closed, Tab still lands on invisible controls."

"The drawer is only translated off-screen. Set `inert` when it's closed."

### Bottom sheet

A bottom sheet is a panel that rises from the bottom of a mobile screen to show options or supporting content, such as share targets or a place's details over a map. Many sheets can be dragged between set heights, often called detents. On wide screens, the same content usually moves to a [modal dialog](#modal-dialog), [popover](#popover) or [drawer](#drawer).

| Type      | Page behind | Suits                                   | Semantics                   |
| --------- | ----------- | --------------------------------------- | --------------------------- |
| Modal     | Inert       | A choice that must be made or dismissed | `<dialog>` with `showModal()` |
| Non-modal | Usable      | Details alongside a map or list         | Labelled region, or `show()` |

A modal sheet is a dialog with different positioning. Using `<dialog>` provides focus handling, an inert background and Escape, and you still add the dragging.

```css
dialog.sheet {
  margin: auto 0 0;
  width: 100%;
  max-width: none;
  max-height: 90dvh;
  padding-bottom: env(safe-area-inset-bottom);
  overscroll-behavior: contain;
}
```

Dragging must not be the only way to operate it. WCAG 2.5.7 requires a single-pointer alternative, so provide a visible close [button](#button), and make the handle a real button that cycles between heights. This also gives keyboard and screen reader users a way to resize it.

Scrolling and dragging can conflict. A person scrolls the sheet's list to the top, keeps swiping, and the sheet closes or the page behind starts moving. Start a drag-to-close only when the inner content is already at its top. `overscroll-behavior: contain` stops scrolling from chaining to the page in browsers that support it, and a [scroll lock](#scroll-lock) handles the rest.

The on-screen keyboard can also cover a [text field](#text-field) near the bottom of the sheet. Units such as `dvh` do not always account for it, so test on real devices and scroll the focused input into view.

Respect the device's [safe area](#safe-area), and use [reduced motion](#reduced-motion) for the slide. Return focus to the trigger on close.

_Usage:_

"Scrolling up in the filters keeps closing the whole sheet."

"The bottom sheet drag is firing during scroll. Only start it when the list is at the top."

### Popover

A popover is a non-modal floating panel opened from a control, such as a date filter or a small settings panel. The rest of the page stays usable, and it usually closes on an outside click. Choose it for short supplementary content that may contain controls. Use a [tooltip](#tooltip) for a brief text hint, and a [modal dialog](#modal-dialog) when the page must be blocked.

The HTML Popover API handles the mechanics declaratively.

```html
<button popovertarget="filters">Filters</button>
<div id="filters" popover role="dialog" aria-label="Filters">...</div>
```

| Value    | Closes on outside click or Escape | Other popovers                     |
| -------- | --------------------------------- | ---------------------------------- |
| `auto`   | Yes                               | Closes unrelated `auto` popovers   |
| `hint`   | Yes                               | Leaves `auto` popovers open        |
| `manual` | No                                | Independent, several can be open   |

A bare `popover` attribute means `auto`. MDN lists the API as widely available since April 2024, with some parts varying, so check `hint` support.

An open popover is placed in the browser's top layer, above the page regardless of `z-index`. This avoids clipping by a parent with `overflow: hidden` and the stacking problems that previously required a [portal](#portal).

Keyboard behaviour differs from a dialog. Opening a popover does not move focus into it. The browser places it next in the Tab order after its invoker, so the next Tab enters it. Closing with Escape returns focus to the invoker. If the content should receive focus at once, add `autofocus` to an element inside.

The attribute adds no semantic role, so a plain `<div popover>` is announced as nothing in particular. Add a suitable role, such as `dialog` with a label for a panel of controls, or use a list of links. A `popovertarget` [button](#button) gets an implicit expanded state, so do not manage `aria-expanded` by hand.

By default an open popover is centred in the viewport, so pair it with [anchor positioning](#anchor-positioning).

_Usage:_

"The filter panel gets clipped by the table's scroll container."

"Make it a popover. It renders in the top layer, so `overflow` can't cut it off."

### Tooltip

A tooltip is a small text label that appears when a control is hovered or receives keyboard focus, usually after a short delay. It describes that control, such as naming an [icon button](#icon-button). It holds plain text only. If the content includes a link or [button](#button), use a [popover](#popover) or [hover card](#hover-card), because focus never moves into a tooltip and a pointer user may not be able to reach it.

The WAI-ARIA Authoring Practices tooltip pattern is marked as work in progress. It describes the following behaviour.

```html
<button type="button" aria-describedby="tip">Publish</button>
<div id="tip" role="tooltip" hidden>Visible to everyone in the workspace</div>
```

| Trigger         | Behaviour                                                  |
| --------------- | ---------------------------------------------------------- |
| Focus           | Opens. Focus stays on the control                          |
| Blur            | Closes                                                     |
| Pointer enter   | Opens after a short delay                                  |
| Pointer leave   | Closes, unless the pointer moved onto the tooltip          |
| Escape          | Closes, with focus staying where it is                     |

WCAG 1.4.13, Content on Hover or Focus, sets three requirements. The tooltip must be dismissible without moving the pointer or focus, which is why Escape matters. It must be hoverable, so someone using screen magnification can move onto it and read it. It must persist until the user leaves or dismisses it, so a timer that hides it fails.

Essential information in a tooltip is out of reach for touch users, who have no hover. A tooltip on a disabled control may never appear, because a natively [disabled](#disabled-state) button cannot receive focus and some browsers do not fire pointer events on it. Use `aria-disabled` or explain the reason in visible text. The `title` attribute is not a substitute either, since it is generally unavailable from the keyboard and on touch screens.

Use `aria-describedby` when it adds a description. If it is the control's only name, use `aria-labelledby` instead.

Placement is often handled with `popover="hint"` plus [anchor positioning](#anchor-positioning), where supported.

_Usage:_

"The tooltip disappears when I try to move my mouse onto it to read it."

"That fails WCAG 1.4.13. Keep it open while the pointer is over the tooltip itself."

### Hover card

A hover card is a rich preview that appears when someone hovers over or focuses a link, such as a profile summary on a username or a page preview on a wiki link. Because it depends on a pointer or focus, treat it as a convenience: everything inside must also be available at the link's destination.

| Component                  | Content               | Opens on        | Interactive |
| -------------------------- | --------------------- | --------------- | ----------- |
| [Tooltip](#tooltip)    | Short text            | Hover, focus    | No          |
| Hover card                 | Rich preview          | Hover, focus    | Sometimes   |
| [Popover](#popover)    | Panel of content      | Click           | Yes         |

The Authoring Practices tooltip pattern says hover content with focusable elements should be a non-modal dialog rather than a tooltip. A card with a "Follow" [button](#button) therefore needs a dialog role, a label, and a keyboard route into it. If that is too much, keep the card read-only and put the action on the destination page.

WCAG 1.4.13, Content on Hover or Focus, applies directly. The card must be dismissible with a key such as Escape without moving the pointer, stay open while the pointer is over it, and remain until the user moves away.

A hover card can close before the pointer reaches it. As the pointer crosses the gap between link and card, the link fires `mouseleave` and the card closes. A short close delay, or an invisible bridge element across the gap, fixes it. An opening delay stops a series of cards flashing as the mouse crosses a list.

Touch screens have no hover, so a tap should follow the link.

The `interestfor` attribute is an emerging way to declare this behaviour. Support is limited, so treat it as an enhancement over a normal link.

_Usage:_

"The profile preview closes before I can reach the Follow button."

"The hover card closes on `mouseleave`. Add a short delay so the pointer can cross the gap."

### Portal

A portal renders a piece of interface at a different place in the DOM from where it is declared, typically at the end of `<body>`. The code still treats it as a child of the component that owns it. Portals exist to solve a visual problem: a menu inside a [card](#card) gets cut off by `overflow: hidden`, or sits behind a header despite `z-index: 9999`, because an ancestor created a stacking context, a group of elements layered together. Moving the element out of that ancestor frees it.

Native features now cover many of these cases.

| Need                              | Prefer                                      |
| --------------------------------- | ------------------------------------------- |
| Modal overlay                     | `<dialog>` with `showModal()`               |
| Menu or panel above the page      | The [`popover`](#popover) attribute     |
| Placing it next to its trigger    | [Anchor positioning](#anchor-positioning) |
| Older browser support, or a library that requires it | Portal                   |

The top layer used by `<dialog>` and popovers escapes clipping and stacking without moving the element, so it keeps its position in the DOM.

A portal's main cost is that document order and visual order diverge, and Tab and screen reader order follow the DOM. A [dropdown menu](#dropdown-menu) portalled to the end of `<body>` looks adjacent to its [button](#button), but is reached only after everything else on the page. WCAG failure F85 describes this case. Move focus into the portalled content when it opens, return it on close, and close it when focus leaves.

Inherited CSS from the old parent stops applying, so a [theming](#theming) class on a wrapper is lost. In some frameworks, events still bubble through the component tree, so a click in a portalled menu can trigger a handler on a parent row.

Remove portalled nodes when the owner unmounts, or stale overlays stay on the page.

_Usage:_

"The portalled menu looks right, but Tab jumps to the page footer."

"It's at the end of `body` now. Use the top layer instead so it stays in DOM order."

### Focus trap

A focus trap keeps keyboard focus inside an open overlay, so Tab cycles through its controls and cannot reach the page behind. Without one, a keyboard user tabs out of a [modal dialog](#modal-dialog) and carries on through hidden links and controls, with no visible sign of where they are. It belongs on modal overlays only. A [popover](#popover) or non-modal panel should let focus leave.

A trap is only acceptable if the user can get out. WCAG 2.1.2, No Keyboard Trap, requires that focus can be moved away using the keyboard alone, or that the user is told how. In a modal, Escape and a visible close [button](#button) meet that need.

| Approach                | Blocks Tab | Hides page from screen readers | Work needed      |
| ----------------------- | ---------- | ------------------------------ | ---------------- |
| `<dialog>` `showModal()` | Yes       | Yes                            | None             |
| `inert` on the background | Yes     | Yes                            | Toggle it        |
| Script handling Tab     | Yes        | No                             | Most, and fragile |

The third row explains a common misunderstanding. Intercepting Tab does nothing for a screen reader's virtual cursor, which moves through content without moving focus. The user can read the page behind a dialog that looks trapped. Making the background inert solves both problems at once.

```js
// Custom overlay rendered as a sibling of the app root
app.inert = true;
overlay.querySelector("[autofocus]")?.focus();

// On close
app.inert = false;
trigger.focus();
```

With `showModal()`, Tab cycles through the dialog's controls and may also reach the browser's own interface. Do not force focus back, because that stops people reaching the address bar.

A hand-written trap breaks in predictable ways. A cached list of focusable elements goes stale when content changes, and elements in iframes or shadow DOM are missed. A trap left active after closing makes the page unreachable by keyboard, so remove it in the same code path that closes the overlay, including route changes.

When the overlay closes, return focus to the element that opened it.

_Usage:_

"Screen reader users can still read the page behind our modal."

"Our focus trap only handles Tab. Set `inert` on the app root while it's open."

### Scroll lock

A scroll lock stops the page behind an open overlay from scrolling. Without one, someone scrolling a long [modal dialog](#modal-dialog) reaches its end and the page underneath starts moving, so when the dialog closes they are in a different place. The native `<dialog>` does not do this for you: `showModal()` makes the page inert, but the page can still scroll.

```css
html {
  scrollbar-gutter: stable;
}

html:has(dialog:modal) {
  overflow: hidden;
}

dialog {
  overscroll-behavior: contain;
}
```

The options address different parts of the problem.

| Technique                         | Effect                                   | Drawback                         |
| --------------------------------- | ---------------------------------------- | -------------------------------- |
| `overflow: hidden` on the root    | Stops page scrolling                     | Removes the scrollbar, shifting layout |
| `scrollbar-gutter: stable`        | Reserves the scrollbar's space           | Leaves a visible empty gutter    |
| `overscroll-behavior: contain`    | Stops scroll chaining from the overlay   | Applies only to scroll containers |
| `position: fixed` on the body     | Holds the page where `overflow` is not enough | Resets scroll unless restored |

A common bug is layout shift. On systems with classic scrollbars, hiding overflow removes the scrollbar, the page becomes wider, and everything jumps sideways as the dialog opens. `scrollbar-gutter: stable` on the root prevents this by keeping the space reserved.

Scroll chaining is when scrolling past the end of one container continues on its parent. Support for stopping it varies, so test on real devices.

Setting `position: fixed` on the body sends the page to the top unless you store `scrollY`, offset the body by it, and restore it on close.

A lock can also fail to release. If a route change unmounts the overlay without running its cleanup, the page stays unscrollable. Deriving the lock from CSS, as in the `:has()` rule above, avoids this because the lock ends when the dialog closes. With nested overlays and a script-based lock, count open layers and release only when the last one closes.

Keep the overlay's own content scrollable so zoomed-in users can reach all of it.

_Usage:_

"The page jumps sideways every time the modal opens."

"The scroll lock removes the scrollbar. Add `scrollbar-gutter: stable` to the root."

### Anchor positioning

Anchor positioning is a CSS feature that places one element relative to another, such as a [tooltip](#tooltip) above its [button](#button) or a menu below its trigger. It replaces JavaScript libraries that measure elements and recalculate on scroll, which is a common cause of menus lagging behind their trigger.

```css
.trigger {
  anchor-name: --menu-trigger;
}

.menu {
  position: fixed;
  position-anchor: --menu-trigger;
  position-area: bottom span-right;
  position-try-fallbacks: flip-block, flip-inline;
}
```

| Property                 | Purpose                                                  |
| ------------------------ | -------------------------------------------------------- |
| `anchor-name`            | Names the element to position against                    |
| `position-anchor`        | Says which anchor this element uses                      |
| `position-area`          | Places it on a 3x3 grid around the anchor                |
| `anchor()`               | Uses an anchor edge inside inset properties              |
| `position-try-fallbacks` | Alternative placements if it would overflow              |
| `position-visibility`    | Hides it, for example when the anchor scrolls out of view |

The positioned element must be `position: absolute` or `fixed`. A [popover](#popover) opened with `popovertarget` gets an implicit anchor to its invoker, so `position-area` works with no `anchor-name` at all.

The browser tries fallbacks only on overflow and takes the first that fits. If none fits, it keeps the original position, so set a `max-height` on tall menus.

A frequent bug comes from reusing a name. If several elements share an `anchor-name`, as in a repeated table row, the positioned element binds to the last one in the document, and every menu opens at the bottom row. Give each instance a unique name, or limit the name to a subtree with `anchor-scope`.

MDN marks `anchor-name` as Baseline 2026, newly available since January 2026, with some parts varying in support. Older browsers will ignore these properties, so provide a usable fallback position or keep a library for them.

Anchoring changes only the visual position, so the trigger and panel still need their usual roles and focus handling.

_Usage:_

"Every row's menu opens at the bottom of the table."

"They all share one `anchor-name`, so anchor positioning picks the last. Add `anchor-scope` to each row."

## Section 6 — Feedback

### Toast

A toast is a brief message that appears over the page to report the result of an action, such as "Message sent", and usually leaves after a few seconds. It does not block the interface or take focus. A common failure is an "Upload failed" toast that disappears while the user is looking elsewhere, leaving no record of what went wrong.

Use a toast only for information the user can afford to miss or can find again.

| Message                                       | Component                                   |
| --------------------------------------------- | ------------------------------------------- |
| Saved, copied, sent                           | Toast                                       |
| Condition affecting the whole page or account | [Banner](#banner)                       |
| Problem with one section                      | [Inline alert](#inline-alert)         |
| Decision needed before continuing             | [Alert dialog](#alert-dialog)         |

Screen readers, which read the interface aloud, learn about toasts through a live region: an element whose changes are announced without moving focus. Keep an empty container with `role="status"` in the page from the start, then insert each message into it. A region created at the same moment as its text may not be announced. Reserve `role="alert"` for errors, because it can interrupt current speech.

```html
<div role="status" class="toast-region"></div>
```

A timeout is acceptable when the same information exists elsewhere, such as a sent message appearing in the Sent folder. If the toast is the only place the information appears, WCAG 2.2.1 Timing Adjustable applies, so keep it on screen until dismissed. Pause the timer while the toast is hovered or contains focus.

Actions inside toasts need a second route. Live regions usually announce content as plain text, so a screen reader user may not learn that a [button](#button) exists, and a keyboard user may not reach it in time. Offer any [undo](#undo-pattern) from a menu, history view or shortcut as well. Queue multiple toasts and cap how many show at once.

_Usage:_

"The export error toast disappeared before I could read which file failed."

"Errors should not time out. Keep it until dismissed, and list the failure on the exports page too."

### Banner

A banner is a full-width message at the top of a page or region that describes a condition affecting everything below it, such as scheduled maintenance, an expired payment card or lost connectivity. It stays in the layout until the condition ends or the user dismisses it. Unlike a [toast](#toast), it does not time out. Unlike an [inline alert](#inline-alert), it is not tied to one part of the content.

| Scope of the message              | Component                           |
| --------------------------------- | ----------------------------------- |
| Whole product or account, ongoing | Banner                              |
| Result of one action, brief       | Toast                               |
| One section or form               | Inline alert                        |
| Must be answered to continue      | [Modal dialog](#modal-dialog) |

The ARIA role named `banner` is a different thing. ARIA is a set of attributes that describe an interface to assistive technology, and `role="banner"` marks the site-wide header landmark, which a top-level `<header>` already provides. Do not put it on a notification.

A message present at page load needs no live role, because it is read in document order. A message that appears later should be inserted into an existing `role="status"` container, or `role="alert"` if urgent, so that screen readers, which read the UI aloud, announce it.

Sticky banners reduce the visible area, and on small or zoomed screens several stacked banners can fill the viewport. A sticky banner can also cover the element a keyboard user has just tabbed to, which fails WCAG 2.4.11 Focus Not Obscured (Minimum) when that element is entirely hidden. Let banners scroll away, show one at a time, or reserve space with `scroll-padding-top`.

A dismissed banner that returns on every page load teaches users to ignore it. Store the dismissal and show the banner again only when the message changes. Keep billing or security notices visible until resolved.

_Usage:_

"Users keep closing the maintenance notice and it comes back on every route."

"The banner's dismissal is only in component state. Persist it against the notice ID."

### Inline alert

An inline alert is a message placed within the page content, next to the thing it concerns, that reports information, success, a warning or an error. Because it occupies space in the layout, it stays readable for as long as it is relevant. Use it instead of a [toast](#toast) when the user needs to read the message while working on that part of the page, and instead of a [banner](#banner) when the condition does not affect the whole page.

For forms, narrower patterns exist. [Inline validation](#inline-validation) belongs to a single field, and an [error summary](#error-summary) collects every error after submission. An inline alert suits a problem with the form as a whole, such as "Your payment could not be processed."

| Severity | Example                 | Role if inserted after load    |
| -------- | ----------------------- | ------------------------------ |
| Info     | Plan changes next month | `status`                       |
| Success  | Settings saved          | `status`                       |
| Warning  | API key expires today   | `status`, or `alert` if urgent |
| Error    | Payment failed          | `alert`                        |

These roles make screen readers, which read the UI aloud, announce a change without moving focus. An alert already on the page at load is generally not announced, so a static notice needs no live role and is read in document order.

Severity cannot rely on color alone, as WCAG 1.4.1 Use of Color requires another visual cue. Pair the color with an icon and a word such as "Error", and give meaningful icons a text alternative.

An error rendered at the top of a long form can appear off-screen, so the submit [button](#button) seems to do nothing. An alert inserted above a control can also push that control down just as the user clicks it. Render the alert near the action, reserve its space, or move focus to it after a failed submission.

_Usage:_

"Clicking Pay does nothing when the card is declined."

"It does show an error, but above the fold. Move the inline alert next to the Pay button."

### Badge

A badge is a small read-only label attached to another element that shows a count or short status, such as "3" on an inbox icon or "Beta" beside a feature name. If the user can click, remove or toggle it, use a [chip](#chip) instead.

| Need                                | Component                           |
| ----------------------------------- | ----------------------------------- |
| Count or status on another element  | Badge                               |
| Removable or selectable value       | Chip                                |
| Sentence explaining a condition     | [Inline alert](#inline-alert) |

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

### Progress bar

A progress bar is a track that fills to show how much of a task has finished. A determinate bar shows a measured value, and an indeterminate bar shows only that work is continuing. A bar that races to 99 percent and then stalls for a minute is usually driven by a timer or a poor estimate instead of measured work.

| Wait                                 | Indicator                                |
| ------------------------------------ | ---------------------------------------- |
| Known amount of work                 | Determinate progress bar                 |
| Unknown length, several seconds+     | Indeterminate bar with status text       |
| Short and unknown                    | [Spinner](#spinner)                  |
| Content with a known layout          | [Skeleton screen](#skeleton-screen) |

Use the native `<progress>` element where possible. Removing its `value` attribute makes it indeterminate. With a custom `role="progressbar"`, omit `aria-valuenow` for the same result. The bar needs an accessible name, and text between the `<progress>` tags is only a fallback, not a label.

```html
<label for="upload">Uploading report.pdf</label>
<progress id="upload" value="40" max="100">40%</progress>
```

A screen reader, which reads the UI aloud, should not speak every percentage. Announce milestones, such as each quarter and completion, in a separate `role="status"` region. When the bar reports on a page region, set `aria-busy="true"` on that region and clear it when loading ends, including when it fails, because assistive technology may hold back changes while it is set.

Several failures are common. The bar jumps backward when a second stage resets the value, so combine stages into one total or label them "Step 2 of 3". The bar freezes at 62 percent after a failure, so switch it to a visible [error state](#error-state) with a retry. Long tasks also need a way to cancel.

Use `<meter>` instead for a measurement that is not a task, such as disk usage.

_Usage:_

"The upload sits at 100 percent for ages before it finishes."

"That progress bar only tracks bytes sent. Add a processing stage so it doesn't claim to be done early."

### Spinner

A spinner is a looping animation that shows work is in progress without saying how much remains. It suits short waits of unknown length, such as a [button](#button) submitting a form. A spinner that never stops usually means the request failed and the code has no path out of its loading state.

| Situation                         | Indicator                                 |
| --------------------------------- | ----------------------------------------- |
| Short wait, unknown length        | Spinner                                   |
| Measurable work                   | [Progress bar](#progress-bar)       |
| Content with a predictable layout | [Skeleton screen](#skeleton-screen) |
| Action almost certain to succeed  | [Optimistic UI](#optimistic-ui)     |

An animation conveys nothing to a screen reader, which reads the UI aloud. Add text such as "Loading results" to a `role="status"` region that already exists in the page, so the message is announced without moving focus. Hide the decorative graphic with `aria-hidden="true"`.

```html
<div role="status">
  <svg class="spinner" aria-hidden="true"><!-- ... --></svg>
  <span class="visually-hidden">Loading results</span>
</div>
```

Spinners inside a button have their own problems. Replacing the label changes the button's width and removes its accessible name, so keep the label in place and overlay the graphic. Setting `disabled` during the request can drop keyboard focus. Use `aria-disabled="true"` and ignore repeat clicks instead.

On a fast response, a spinner appears as a brief flicker, so delay it by a few hundred milliseconds. Once shown, keep it visible briefly so it does not flash. Add a timeout that leads to an [error state](#error-state).

Under WCAG 2.2.2 Pause, Stop, Hide, moving content that runs for more than five seconds alongside other content needs a way to stop it, unless the movement is essential. A preloader that is the only content on the page is not in that position. For long waits beside usable content, show text instead. Under [reduced motion](#reduced-motion), replace rotation with a slow opacity change.

_Usage:_

"The dashboard spinner has been going for ten minutes."

"The fetch rejected and nothing clears the loading flag. It needs a timeout and an error state."

### Skeleton screen

A skeleton screen is a placeholder that shows grey shapes in the layout of the coming content while the real data loads. Because the shapes hold the space the content will use, the page does not jump when data arrives. It suits content regions whose structure is known in advance, such as a feed, profile or [data table](#data-table).

| Situation                          | Indicator                           |
| ---------------------------------- | ----------------------------------- |
| Known layout, loading content      | Skeleton screen                     |
| [Button](#button) or small inline wait        | [Spinner](#spinner)             |
| Long task with measurable progress | [Progress bar](#progress-bar) |
| Response usually instant           | No indicator                        |

A skeleton that does not match the final layout causes the jump it was meant to prevent. If it shows three lines and the content has five, everything below shifts on load. Build skeletons from the same layout as the real component, and give images a reserved size with [aspect ratio](#aspect-ratio).

The shapes mean nothing to a screen reader, which reads the UI aloud, so hide them with `aria-hidden="true"`. Announce loading through a short message in a `role="status"` region. You can set `aria-busy="true"` on the region being replaced, which asks assistive technology to wait for the update to finish. Clear it on success and on failure.

```html
<section aria-busy="true" aria-labelledby="orders">
  <h2 id="orders">Orders</h2>
  <div class="skeleton-row" aria-hidden="true"></div>
  <div class="skeleton-row" aria-hidden="true"></div>
</section>
```

Shimmer animations need the same care as other motion. Stop or soften them under [reduced motion](#reduced-motion), and remember that WCAG 2.2.2 Pause, Stop, Hide applies to movement lasting over five seconds alongside other content unless it is essential.

Two other failures are common. A request that fails can leave the skeleton in place forever, so every loading path needs an [error state](#error-state). A skeleton shown for a fast response flashes on screen, so delay it briefly or skip it for cached data.

_Usage:_

"The orders page jumps about a second after it loads."

"The skeleton has fixed rows but the real rows wrap to two lines. Match the row height."

### Empty state

An empty state is the content shown when a view has nothing to display, explaining why and what the user can do next. Without one, a new user opens a project list and sees a blank area, with no way to tell whether the page is broken, still loading or empty.

The right message depends on why the view is empty.

| Cause               | Example message            | Next action     |
| ------------------- | -------------------------- | --------------- |
| First use           | "No projects yet"          | Create project  |
| No search results   | "No results for 'invoce'"  | Clear search    |
| Filters too narrow  | "No open tickets match"    | Reset filters   |
| Work completed      | "All caught up"            | None needed     |
| No permission       | "You don't have access"    | Request access  |

Keep empty, loading and failed as three separate states. A common bug is initialising the list to `[]`, which renders "No invoices" for a moment before the data arrives. A worse one is falling back to `[]` when the request fails, which tells users their data is gone. Track request status explicitly and show an [error state](#error-state) for failures and a [skeleton screen](#skeleton-screen) while loading.

For accessibility, use real text and a real heading or paragraph. Illustrations are usually decorative here, so give them `alt=""`. When a search or filter empties the results without a page load, announce the outcome through a `role="status"` region that already exists, such as "No results found". WCAG 4.1.3 Status Messages covers this kind of update, which should reach screen readers (software that reads the UI aloud) without moving focus.

Keep the message specific and offer one primary action. When filters caused the empty result, repeat the active filters so the user can see what to change. Do not fill the space with marketing copy on a screen where someone is trying to work.

_Usage:_

"A customer thought we deleted their invoices."

"The API timed out and we rendered the empty state. A failed fetch needs its own error state."

### Error state

An error state is the content shown when data or an action fails, saying what happened and how the user can recover. A generic "Something went wrong" with no next step leaves the user unable to tell whether to retry, wait or contact support.

Match the size of the error to the size of the failure, so one broken widget does not take down the page.

| Scope                 | Treatment                                       |
| --------------------- | ----------------------------------------------- |
| One field             | [Inline validation](#inline-validation)   |
| A submitted form      | [Error summary](#error-summary)           |
| One section or widget | [Inline alert](#inline-alert) with retry  |
| Whole product degraded | [Banner](#banner)                          |
| Page cannot render    | Full-page error with navigation still available |

A useful error state answers three questions: what failed, whether the user's work is safe, and what to do next. "We couldn't load your invoices. Your data is safe. Try again." is more useful than a status code. Distinguish causes when you can, because being offline, lacking permission and a server fault each call for a different action.

Keep it distinct from an [empty state](#empty-state). Code that catches a failed request and returns an empty list makes an outage look like missing data.

Preserve what the user entered. A retry that clears a long form turns a small failure into lost work.

For accessibility, an error that appears after an action should reach screen readers, which read the UI aloud. Insert it into a `role="alert"` region, which announces it without moving focus. When a whole view is replaced by the error, move focus to its heading by giving the heading `tabindex="-1"` and calling `.focus()`, otherwise focus can be lost with the removed content. Do not signal the error with red alone, since WCAG 1.4.1 Use of Color requires another cue such as an icon or text.

_Usage:_

"When the reports API fails, the whole dashboard goes blank."

"Wrap each widget so a failure shows a local error state with a retry button."

### Undo pattern

The undo pattern applies an action immediately and offers a way to reverse it, instead of asking for confirmation first. Archiving an email and seeing "Conversation archived. Undo" is the typical example. It avoids the confirmation prompts that users learn to click through without reading.

Choose between undo and confirmation based on whether the action can actually be reversed.

| Action                              | Approach                            |
| ----------------------------------- | ----------------------------------- |
| Frequent and reversible             | Undo                                |
| Destructive but recoverable         | Undo, backed by a trash or history  |
| Irreversible, or affects other people | [Alert dialog](#alert-dialog) confirmation |
| Payment or legal commitment         | Review step before submitting       |

WCAG 3.3.4 Error Prevention (Legal, Financial, Data) applies to pages that create legal or financial commitments, or that change or delete user-controllable data. Those submissions must be reversible, checked for errors, or confirmed, so undo is one valid way to meet it.

There are three common implementations:

| Method           | How it works                         | Weakness                                  |
| ---------------- | ------------------------------------ | ----------------------------------------- |
| Delayed commit   | Send the request when the window ends | Closing the tab can lose or skip the action |
| Soft delete      | Mark as deleted, purge later         | Needs storage and a cleanup job           |
| Inverse action   | Run the opposite operation           | Fails if later changes conflict           |

The usual failure is an undo offered only in a [toast](#toast). If the toast times out, the option disappears, and a keyboard user or someone on a screen reader (software that reads the UI aloud) may never reach it. Keep a lasting route as well, such as a Trash view, an activity history or a keyboard shortcut.

Undo must also restore the full previous state, including the item's position in its list. Return focus to the restored item or a sensible neighbour, because the element that had focus may have been removed. Announce both the action and its reversal through a `role="status"` region.

_Usage:_

"Should deleting a label ask 'Are you sure?'"

"No, it's easy to reverse. Use the undo pattern, and keep deleted labels recoverable for 30 days."

### Optimistic UI

Optimistic UI shows the result of an action immediately, before the server confirms it, and rolls back if the request fails. A like [button](#button) that fills on tap, while the request runs in the background, is the typical example. It removes the visible wait on actions that almost always succeed.

| Step | Who    | What happens                                |
| ---- | ------ | ------------------------------------------- |
| 1    | User   | Triggers the action                         |
| 2    | Client | Saves the previous state and updates the UI |
| 3    | Client | Sends the request                           |
| 4    | Server | Accepts or rejects it                       |
| 5    | Client | On success, reconciles with the response    |
| 6    | Client | On failure, restores state and tells the user |

Use it for frequent, low-stakes, reversible actions such as starring, reordering or renaming. Do not use it for payments, permission changes or anything where showing success falsely would mislead someone. For those, show a pending state with a [spinner](#spinner) until the server confirms.

A silent rollback is a common failure. The user likes a post, moves on, and later finds the like has vanished because the request failed and nothing said so. Every rollback needs a message, usually a [toast](#toast) or [inline alert](#inline-alert) with a retry.

Race conditions are the second failure. If a user toggles a star on and off quickly, responses can arrive out of order and leave the wrong final state. Cancel earlier requests, or ignore any response that is not the latest for that item. Retried requests can also create duplicates, so give each create operation a client-generated ID the server can deduplicate.

Assistive technology needs the same truth as the screen. Update states such as `aria-pressed` immediately, and when a rollback occurs, announce it through a `role="alert"` region, because a state that silently reverts is otherwise easy to miss.

_Usage:_

"Comments sometimes appear twice after a flaky connection."

"The optimistic UI retries without an idempotency key. Generate an ID on the client so the server can dedupe."

## Section 7 — Data Display

### Card

A card is a bounded container that groups content and actions about one item, such as a product, article or team member. Cards are usually repeated in a grid or list so people can scan separate items. If people need to compare the same attribute across many items, use a [data table](#data-table), because aligned columns make comparison easier than scattered card fields.

| Content                              | Component  |
| ------------------------------------ | ---------- |
| Separate items with mixed content    | Card       |
| Many records compared by attribute   | Data table |
| Simple items with one line each      | List       |
| One group of related settings        | Plain section with a heading |

Clickable cards are where most problems occur. Wrapping the entire card in `<a>` makes a screen reader (software that reads the UI aloud) announce all of its content as one long link name, and placing a [button](#button) inside that link creates invalid nested interactive elements. A safer pattern keeps the link on the heading and stretches its hit area over the card with a pseudo-element:

```css
.card { position: relative; }
.card h3 a::after { content: ""; position: absolute; inset: 0; }
.card button { position: relative; z-index: 1; }
```

The raised `z-index` keeps secondary buttons clickable above the stretched link. The trade-off is that text in the card becomes harder to select, because the overlay receives the pointer.

Use semantic structure inside the card. Give each one a real heading at the correct level for the page, and mark a repeated set as a list with `<ul>`.

Uneven content is the common visual failure. One long title makes a card taller and misaligns the buttons in its row. Put cards in a grid so they stretch to equal height, make each card a flex column, and push the actions to the bottom with `margin-top: auto`. Reserve image space with [aspect ratio](#aspect-ratio) to prevent shifts as images load.

_Usage:_

"The screen reader reads the entire product card as one link."

"Move the link onto the card's title and stretch it with a pseudo-element."

### Data table

A data table presents structured records in rows and columns so people can read, compare, sort and act on them. Use it when each row has the same fields and people need to compare values down a column. For a small set of items with varied content, a [card](#card) or list is usually easier to scan.

Build it with a native `<table>`, which gives screen readers (software that reads the UI aloud) row and column relationships for free. A table made of `<div>` elements announces no headers unless every role is added by hand.

```html
<table>
  <caption>Open invoices</caption>
  <thead>
    <tr>
      <th scope="col" aria-sort="ascending"><button>Due date</button></th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
</table>
```

Put a [button](#button) inside each sortable header and set `aria-sort` on the `<th>` of the sorted column.

| Content                               | Pattern                      |
| ------------------------------------- | ---------------------------- |
| Static data, few controls             | Table                        |
| Many interactive cells, spreadsheet-like | Grid, with arrow-key movement |

The WAI-ARIA Authoring Practices recommend a grid when a table holds many widgets, because a grid has one Tab stop and arrow keys move between cells. It takes significant work, so do not adopt it for a table with one link per row.

Wide tables are the common failure on small screens. Wrap the table in a scrolling container so the page itself does not overflow. Some browsers do not make scrolling regions keyboard-focusable, so add `tabindex="0"`, `role="region"` and an `aria-label` to it. WCAG 1.4.10 Reflow allows data tables to scroll in two dimensions, but the headings, search and [pagination](#pagination-control) around them must still reflow.

For long data, use pagination or a [virtualized list](#virtualized-list). If rows are missing from the DOM, set `aria-rowcount` to the total and `aria-rowindex` on each row. Keep column headers visible with a [sticky header](#sticky-header).

_Usage:_

"Keyboard users have to tab through 400 links in the orders list."

"That's a data table acting like a grid. Use the grid pattern, or reduce it to one link per row."

### Sticky header

A sticky header is a page or table header that scrolls normally until it reaches an edge, then stays visible while content moves beneath it. It keeps column labels or navigation in view on long screens. It is usually built with `position: sticky`, which keeps the element in normal flow. `position: fixed` removes it from flow, so the content below needs a manual offset.

```css
th {
  position: sticky;
  top: 0;
  z-index: 1;
  background: Canvas;
}
```

A common symptom is a header that does not stick at all. These are the usual causes:

| Symptom                        | Cause                                                   | Fix                                         |
| ------------------------------ | ------------------------------------------------------- | ------------------------------------------- |
| Scrolls away immediately       | No `top` or other inset set                             | Set `top: 0`                                |
| Sticks to the wrong box        | An ancestor has `overflow: hidden` or `auto`            | Remove it, or use `overflow: clip`          |
| Stops partway down             | Its parent ends there                                   | Move it to a taller parent                  |
| Content shows through          | No background                                           | Set an opaque background                    |
| Rows paint over it             | Later content stacks higher                             | Raise its `z-index`                         |

Using `overflow: clip` works because it clips without creating a scroll container, but content it clips cannot be scrolled into view, so avoid it around interactive elements. In a [data table](#data-table), apply sticky to the `<th>` cells. With `border-collapse: collapse`, cell borders can scroll away from a stuck header, so `border-collapse: separate` is often used.

Sticky headers can hide keyboard focus. When a user presses Shift+Tab, the focused element may land underneath the header, and WCAG 2.4.11 Focus Not Obscured (Minimum) fails if it is entirely hidden. Set `scroll-padding-top` on the scroll container to the header's height.

Height matters on small or zoomed screens, where a tall header can take a large share of the viewport. An [app shell](#app-shell) that scrolls its content pane avoids some of these issues, since the header sits outside the scrolling region.

_Usage:_

"The table header stopped sticking after the redesign."

"The new wrapper has `overflow: hidden`, so that's now the sticky header's scroll container."

### Row selection

Row selection lets users mark one or more rows in a [data table](#data-table) or list so an action can apply to all of them, such as archiving twenty invoices at once. It usually appears as a [checkbox](#checkbox) column, with a header checkbox for selecting all rows and a [toolbar](#toolbar) showing the bulk actions.

The header checkbox has three states, and `indeterminate` is set from script because HTML has no attribute for it.

| Rows selected | Header checkbox                           |
| ------------- | ----------------------------------------- |
| None          | Unchecked                                 |
| Some          | Indeterminate (`aria-checked="mixed"`)    |
| All           | Checked                                   |

An unclear "select all" can cause data loss. On a paginated table, a user ticks the header, sees every visible row checked and presses Delete, unsure whether that means 25 rows or all 1,240. State the scope in text ("25 selected. Select all 1,240") and make the larger selection a separate step. Confirm destructive bulk actions with an [alert dialog](#alert-dialog) that repeats the count.

Store selection by record ID and never by row index. Index-based selection attaches to the wrong records as soon as the table is sorted, filtered or paged.

Each checkbox needs a distinct accessible name, such as "Select invoice 1042". A column of checkboxes all named "Select" gives someone using a screen reader, which reads the UI aloud, no way to tell them apart. Announce the running count through a `role="status"` region.

| Structure                     | How selection is exposed            |
| ----------------------------- | ----------------------------------- |
| Native table with checkboxes  | The checkbox state                  |
| Grid widget (`role="grid"`)   | `aria-selected` on the row or cell  |

In a grid, the WAI-ARIA Authoring Practices require the selected state to look different from the focus indicator, and moving focus in a multi-select grid should not change the selection. If clicking a row also opens it, keep the checkbox as a separate target so that selecting does not navigate.

_Usage:_

"Sorting by date changed which rows were selected."

"We're tracking row selection by index. Key it on the invoice ID."

### Virtualized list

A virtualized list renders only the rows near the viewport and swaps them as the user scrolls, while a spacer keeps the scrollbar the correct size for the full list. A list of 50,000 rows might have only 30 in the DOM at any moment. Without it, a very long list can make the page slow to render and scroll.

Virtualization has real costs, so try simpler options first.

| Option                     | Keeps rows in DOM | Find-in-page | Suits                    |
| -------------------------- | ----------------- | ------------ | ------------------------ |
| [Pagination](#pagination-control) | Current page only | Current page | Most business data |
| `content-visibility: auto` | Yes               | Yes          | Long pages, moderate lists |
| Virtualization             | Visible rows only | Rendered rows only | Very large lists   |

The CSS `content-visibility: auto` property skips rendering for off-screen content while leaving it available to find-in-page and the Tab order.

Removing rows from the DOM causes the failures people notice. Pressing Ctrl+F does not find a row that is not rendered, so provide a [search field](#search-field). Scrolling quickly can show blank space until rows mount, which rendering a few extra rows reduces. Rows of varying height can make the scroll position jump when estimates are corrected, so measure them or use a fixed height.

Focus is the main accessibility risk. If the focused row scrolls out and unmounts, focus falls to the document body and a keyboard user loses their place. Keep the focused row mounted, or restore focus when it returns.

Screen readers, which read the UI aloud, only see what is in the DOM, so state the true size:

```html
<ul aria-label="Contacts">
  <li aria-setsize="50000" aria-posinset="1201">Ada Moreno</li>
  <li aria-setsize="50000" aria-posinset="1202">Ben Okafor</li>
</ul>
```

For tables, use `aria-rowcount` on the table and `aria-rowindex` on each row. Use stable item IDs as keys, since reusing a row by index can leak state such as a checked box into a different record.

_Usage:_

"Ctrl+F can't find a customer I can see further down the list."

"It's a virtualized list, so that row isn't in the DOM. We need a search box."

### Infinite scroll

Infinite scroll loads and appends more items automatically as the user nears the end of a list. It is usually triggered by an `IntersectionObserver`, a browser API that reports when a marker element near the bottom comes into view. It suits feeds that people browse without a specific target, and it works poorly when people need to find, compare or return to a particular item.

| Pattern                                     | Position shareable | Footer reachable | Suits              |
| ------------------------------------------- | ------------------ | ---------------- | ------------------ |
| [Pagination](#pagination-control)     | Yes                | Yes              | Search, records    |
| Load more [button](#button)                            | With extra work    | Yes              | Product listings   |
| Infinite scroll                             | With extra work    | No, unless moved | Social-style feeds |

Several failures are characteristic. The footer keeps moving away as items load, so its links cannot be clicked. Opening an item and pressing Back returns the user to the top of the list. Memory grows as thousands of items accumulate, which a [virtualized list](#virtualized-list) can address. To restore position, store the page or item in the URL with `history.replaceState` and reload that slice on return.

People using a keyboard or a screen reader, which reads the UI aloud, face a further problem. Content that loads as focus moves can trap them in the list, unable to reach anything after it. A "Load more" button avoids this, because the user decides when content is added.

If you do build a feed, the WAI-ARIA Authoring Practices define a `feed` pattern:

```html
<div role="feed" aria-label="Updates" aria-busy="false">
  <article aria-posinset="1" aria-setsize="-1" aria-labelledby="t1">...</article>
</div>
```

Use `aria-setsize="-1"` when the total is unknown. Set `aria-busy="true"` while articles are being added and return it to `false` afterwards. The pattern recommends Page Down and Page Up to move between articles, and Control+End to move past the feed. Announce loading and the end of the list through a `role="status"` region, and never remove the item that has focus.

_Usage:_

"I can't click Privacy in the footer because the page keeps growing."

"That's infinite scroll pushing it away. Switch to a Load more button."

### Accordion

An accordion is a vertical stack of headers that each expand or collapse a section of content. It shortens long pages where people need only some sections, such as an FAQ or a settings list. If people need to read most of the content, leave it expanded, because collapsed sections add clicks and hide text from a quick scan.

| Need                                   | Component                |
| -------------------------------------- | ------------------------ |
| Several optional sections, stacked     | Accordion                |
| Peer views, one visible at a time      | [Tabs](#tabs)        |
| One show or hide control               | Disclosure (`<details>`) |
| Content everyone must read             | Plain headings           |

The WAI-ARIA Authoring Practices define the structure. Each header is a real [button](#button) inside a heading, and the button is the only element in that heading. The button carries `aria-expanded` and `aria-controls`. Enter and Space toggle the panel, and Tab moves through the page as usual.

```html
<h3>
  <button aria-expanded="true" aria-controls="ship">Shipping</button>
</h3>
<div id="ship">Orders leave within two days.</div>
```

A panel can also take `role="region"` with `aria-labelledby` pointing at its button. Avoid this when many panels can be open at once, roughly more than six, because it adds too many landmarks for people using a screen reader, which reads the UI aloud, to navigate.

Native `<details>` elements sharing the same `name` attribute form an exclusive group with no script, so opening one closes the others. Test it with a screen reader.

Single-open behaviour can move content away from the pointer. When a user opens a lower section, the open section above collapses, the content shifts up, and the header they clicked can move out of view. Allow several panels open, or scroll the opened header back into view. Text in a collapsed panel may not appear in find-in-page, so test it and offer an "Expand all" control on long pages. Animate height only when [reduced motion](#reduced-motion) is not requested.

_Usage:_

"Opening question eight jumps the page and I lose my place."

"The accordion closes question three above it. Let multiple panels stay open."

### Carousel

A carousel is a region that shows one slide or a few items at a time, with controls for moving through the rest. It saves vertical space, but content on later slides is easy to miss, and a slide that advances while someone is reading takes the text away from them. If every item matters, a stacked list or a grid of [cards](#card) keeps all of it visible.

| Need                              | Component                     |
| --------------------------------- | ----------------------------- |
| All items must be seen            | Grid or list                  |
| Browse similar items sideways     | Scroll container with snap    |
| Gallery of images                 | Thumbnails and [lightbox](#lightbox) |
| Rotating promotional slides       | Carousel with a stop control  |

Auto-rotation carries the strictest requirements. WCAG 2.2.2 Pause, Stop, Hide requires a way to pause moving content that starts automatically, lasts more than five seconds and appears alongside other content. The WAI-ARIA Authoring Practices add specific behaviour:

| Requirement      | Behaviour                                                 |
| ---------------- | --------------------------------------------------------- |
| Rotation control | A [button](#button) to stop and restart, first in the Tab sequence   |
| Pointer hover    | Rotation stops while hovering                             |
| Keyboard focus   | Rotation stops when focus enters, until explicitly restarted |
| Live region      | `aria-live="off"` while rotating, `polite` when stopped   |
| Next, Previous   | Buttons that keep focus in place when activated           |

```html
<section aria-roledescription="carousel" aria-label="Featured plans">
  <button>Stop slide rotation</button>
  <div aria-live="off" aria-atomic="false">
    <div role="group" aria-roledescription="slide" aria-label="2 of 5">...</div>
  </div>
</section>
```

Hidden slides are a common accessibility bug. If off-screen slides stay focusable, Tab moves focus to links the user cannot see. Apply the `inert` attribute or `hidden` to inactive slides.

Touch-only swiping is another gap. WCAG 2.5.7 Dragging Movements requires a single-pointer alternative, so visible Next and Previous buttons are needed. If you set `touch-action`, keep vertical panning and pinch zoom available, for example with `pan-y pinch-zoom`. Also honour [reduced motion](#reduced-motion) by disabling auto-rotation and sliding transitions.

_Usage:_

"The hero slide changes while I'm still reading it."

"The carousel needs to stop on hover and focus, and it needs a visible pause button."

### Avatar

An avatar is a small image, set of initials or icon that represents a person or account. It helps people recognise who wrote a comment, who owns a task or which account is signed in.

A fallback chain prevents the broken-image icon that appears when a photo URL fails.

| Priority | Display           | When                          |
| -------- | ----------------- | ----------------------------- |
| 1        | Photo             | Image loads successfully      |
| 2        | Initials          | No image, or loading failed   |
| 3        | Generic icon      | No name available             |

The correct alt text depends on what sits next to the image. When the person's name is adjacent, the avatar repeats it, so use `alt=""` and screen readers, which read the UI aloud, skip it. When the avatar stands alone, the alt text should be the person's name. Do not use "avatar" or "profile picture" as alt text.

```html
<img src="/u/42.jpg" alt="" width="40" height="40" class="avatar" />
<span>Priya Shah</span>
```

Uploaded photos are rarely square, and stretching them distorts faces. Set equal width and height attributes to reserve the space and prevent layout shift, then crop with `object-fit: cover`. For a shape that scales, use [aspect ratio](#aspect-ratio).

Initials fallbacks have their own traps. Names do not always split into a first and last name, so derive initials carefully and handle single names and non-Latin scripts. Background colors generated from a hash can produce unreadable combinations, so choose from a fixed palette that meets the 4.5:1 text contrast ratio.

An avatar that opens an account menu is a control, so wrap it in a real [button](#button) with a name such as "Account menu". Its [touch target](#touch-target) should meet WCAG 2.5.8, which asks for 24 by 24 CSS pixels or enough spacing around a smaller target. A stack of overlapping avatars can fail both. In a group, summarise the overflow with a "+3" item whose accessible name says "3 more members".

_Usage:_

"Half the comment avatars are showing a broken image icon."

"Those users have expired photo URLs. Fall back to initials on the image error event."

### Chip

A chip is a compact interactive element that represents a value, filter or choice, usually drawn as a rounded pill. Selecting "In stock" on a product page or removing a recipient from an email field are typical uses. A [badge](#badge) looks similar but is read-only, so the deciding question is whether the user can act on it.

Chips cover several behaviours, and each needs different markup.

| Type       | Purpose               | Semantics                       |
| ---------- | --------------------- | ------------------------------- |
| Filter     | Turns a filter on/off | [Button](#button) with `aria-pressed`, or a [checkbox](#checkbox) |
| Choice     | Pick one of a set     | Radio inputs                    |
| Input      | A value the user added | Text plus a remove button      |
| Suggestion | Run an action         | Plain button                    |

For a value the user entered, as in a [tag input](#tag-input), the chip is text with a separate remove button. That button needs a specific name, because a list of buttons all announced as "Remove" or "×" does not say what each one removes.

```html
<li>
  Design
  <button aria-label="Remove Design">×</button>
</li>
```

The small remove icon often fails on size. WCAG 2.5.8 Target Size (Minimum) requires pointer targets of at least 24 by 24 CSS pixels, unless spacing or another exception applies. Extend the hit area with padding or a pseudo-element, without enlarging the icon, so users do not delete the wrong chip with a slightly misplaced tap.

Removing a chip destroys the element that had focus, and focus can fall back to the top of the page. Move focus to the next chip, or to the input when none remain, and report the removal in a `role="status"` region.

Selected state must not rely on color alone under WCAG 1.4.1, so add a check mark or a change in border. A group of filter chips needs a label, using `role="group"` with `aria-label` or a `<fieldset>`.

_Usage:_

"After deleting a filter, Tab starts from the top of the page again."

"The chip had focus when it was removed. Move focus to the next chip."

### Timeline

A timeline is a chronological display of events along a line, showing what happened and when. Order histories, audit logs, incident reports and account activity commonly use one. A [stepper](#stepper) looks similar but shows progress through a defined process with future steps, while a timeline mainly records events that have already occurred.

| Need                                 | Component        |
| ------------------------------------ | ---------------- |
| Record of past events                | Timeline         |
| Progress through known steps         | Stepper          |
| Records compared by field            | [Data table](#data-table) |
| Stream of incoming messages          | Log (`role="log"`) |

Use an ordered list, because sequence is the meaning of the component. Mark each date with `<time>` so the machine-readable value is available, and add the `reversed` attribute when the newest event comes first so the numbering stays correct.

```html
<ol reversed>
  <li>
    <time datetime="2026-03-14T09:30Z">14 Mar, 09:30 UTC</time>
    Order shipped
  </li>
  <li>
    <time datetime="2026-03-13T16:05Z">13 Mar, 16:05 UTC</time>
    Payment received
  </li>
</ol>
```

Draw the connecting line and dots with CSS pseudo-elements so they stay out of the accessibility tree. If a dot's color signals a status such as failed or completed, add text or an icon as well, since WCAG 1.4.1 does not allow color to be the only cue.

Date handling is where timelines usually go wrong. "2 days ago" is easy to scan but useless in an audit or a support call, so show the absolute time as well. Decide which timezone is displayed and label it. Without that, two people comparing an incident can read the same event as different times. Rendering relative or local time on the server can also produce a different value from the browser's, causing a mismatch when the page becomes interactive.

Long histories need [pagination](#pagination-control) or a "Show earlier" [button](#button), plus grouping by day. If events arrive live, avoid moving content while someone reads it. Add new entries through a notice such as "3 new events", and let the user choose when to load them.

_Usage:_

"Support and the customer disagree about when the refund happened."

"The timeline only says 'yesterday'. Show the exact time and timezone on each event."

### Kanban board

A kanban board is a set of columns representing workflow stages, with [cards](#card) that move between them as work progresses. A typical board has To do, In progress and Done. If people mainly need to sort, filter or edit many fields, a [data table](#data-table) is a better default.

The structure is a list of lists. Each column is a labelled section containing a list of cards, which gives screen readers (software that reads the UI aloud) the column name and item count.

```html
<section aria-labelledby="doing">
  <h2 id="doing">In progress (3)</h2>
  <ul>
    <li><a href="/task/18">Fix invoice rounding</a></li>
  </ul>
</section>
```

[Drag and drop](#drag-and-drop) is the expected way to move cards, but it cannot be the only way. WCAG 2.5.7 Dragging Movements requires a single-pointer alternative, and a keyboard method alone does not satisfy it. A "Move to" [dropdown menu](#dropdown-menu) on each card works for pointer, keyboard and screen reader users together.

| Input        | How a card moves                                           |
| ------------ | ---------------------------------------------------------- |
| Mouse, touch | Drag to a column, or use the "Move to" menu                |
| Keyboard     | Open the menu, or pick up with Space and move with arrows  |
| Screen reader | Use the menu and hear "Moved to Done, position 2"         |

Announce each move through a `role="status"` region, and keep focus on the moved card.

Persistence causes the less visible failures. If position is stored as an integer index, one move rewrites every card below it, and two people moving cards at once can overwrite each other. A sortable rank value between neighbours changes only the moved card. Moves are usually [optimistic](#optimistic-ui), so a rejected request must return the card to its column and say why.

On narrow screens, the columns exceed the viewport. Horizontal scrolling is acceptable for the board, but dragging near an edge then needs auto-scroll. A single-column view with a stage picker often works better on phones.

_Usage:_

"Two of us moved cards and the order came back scrambled."

"The kanban board saves integer positions. Switch to a rank between neighbours."

### Lightbox

A lightbox is a full-screen overlay that shows an enlarged image or media item above a dimmed page. It is a specialised [modal dialog](#modal-dialog), so it inherits the same focus and dismissal rules. For a simple image, a link to the full-size file may be enough, and it works without script.

| Need                               | Component                       |
| ---------------------------------- | ------------------------------- |
| Inspect one image closely          | Lightbox, or link to the file   |
| Step through a gallery             | Lightbox with Next and Previous |
| Browse items inline                | [Carousel](#carousel)       |
| Short preview on hover             | [Hover card](#hover-card) |

The thumbnail must be a real control. An `<img>` with a click handler cannot be reached by keyboard, so wrap it in a [button](#button) or link whose name describes the action.

```html
<button aria-label="Enlarge: harbour at dusk">
  <img src="harbour-thumb.jpg" alt="" />
</button>

<dialog aria-label="Image viewer">
  <button>Close</button>
  <img src="harbour.jpg" alt="Fishing boats in a harbour at dusk" />
</dialog>
```

Opening a native `<dialog>` with `showModal()` moves focus inside it, makes the rest of the page inert, closes on Escape and returns focus to the thumbnail. A custom overlay has to build each of those itself, along with a [focus trap](#focus-trap). Add a [scroll lock](#scroll-lock) so that the page does not move behind the image.

Galleries need labelled Next and Previous buttons, plus Left and Right arrow keys as a convenience. Announce the position, such as "Image 3 of 12", in a `role="status"` region, and update the alt text with each image. Swiping cannot be the only way to move, because WCAG 2.5.7 Dragging Movements requires a single-pointer alternative.

Blocked zoom is a common failure. Viewing detail is the reason to open a lightbox, yet custom touch handlers or `touch-action: none` can block pinch zoom. Keep pinch zoom working, and show a visible Close button, since not every user knows that Escape or a backdrop click will dismiss it. Under [reduced motion](#reduced-motion), replace zoom transitions with a fade.

_Usage:_

"On my phone I can't pinch to see the floor plan detail."

"The lightbox sets `touch-action: none`. Let the browser handle pinch zoom."

## Section 8 — Layout and Foundations

### App shell

An app shell is the persistent frame of an application, such as its header and navigation, around a content area that changes from view to view. Moving between screens replaces only the content, so the frame stays put and keeps its state. In progressive web apps, the term also refers to caching that frame so it appears before any data has loaded.

| Region              | Element    | Typical content                      |
| ------------------- | ---------- | ------------------------------------ |
| Top bar             | `<header>` | Logo, search, account                |
| Primary navigation  | `<nav>`    | [Sidebar](#sidebar) links        |
| Content             | `<main>`   | The current view                     |
| Mobile navigation   | `<nav>`    | [Bottom navigation](#bottom-navigation) |

These elements create landmarks, which let people using a screen reader, software that reads the UI aloud, jump between regions. Give multiple `<nav>` elements distinct labels, and add a [skip link](#skip-link) so keyboard users can bypass the frame.

```css
.shell {
  display: grid;
  grid-template: "top top" auto "nav main" 1fr / 16rem 1fr;
  height: 100dvh;
}
.shell main { overflow: auto; min-height: 0; }
```

On mobile browsers, `100vh` is based on the largest viewport, with browser toolbars retracted, so the bottom of a full-height shell can sit behind them. The `dvh` unit tracks the visible area but changes as toolbars move, which can resize content during scrolling. The `svh` unit is stable and always fits, at the cost of some unused space when toolbars retract.

A grid child will not scroll unless its minimum size is released, so a `<main>` without `min-height: 0` can push the page taller and produce two scrollbars. With scrolling inside `<main>`, the browser may not restore scroll position on Back, so the router may have to do it.

Route changes need explicit handling because no page load happens. Move focus to the new view's heading or `<main>`, and update the document title, or a screen reader user receives no sign that anything changed. Keep a failed view contained in the content area so navigation still works.

_Usage:_

"The bottom nav is hidden behind Safari's toolbar on iPhones."

"The app shell uses `100vh`. Switch it to `100dvh` and pad for the [safe area](#safe-area)."

### Layout container

A layout container is a centred wrapper that limits content to a maximum width and keeps consistent gutters at the page edges. Without one, text on a wide monitor stretches into lines that are tiring to read, and content on a phone touches the screen edge. The name is easy to confuse with a container query, a CSS feature that styles elements based on the size of an ancestor. A layout container only constrains width.

```css
.container {
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
}
```

The element takes the full width minus the gutters until it reaches `70rem`, then stays there and centres.

Most systems define a few widths for different content.

| Size   | Typical limit | Use                     |
| ------ | ------------- | ----------------------- |
| Prose  | `65ch`        | Articles, documentation |
| Narrow | `40rem`       | Forms, settings         |
| Wide   | `70rem`       | Dashboards, marketing   |
| Full   | None          | Tables, maps, media     |

The `ch` unit is the width of the font's zero character.

Full-width sections inside a container are a common failure. Developers often break a band out of the container with `width: 100vw`. On systems with classic scrollbars, `100vw` can be wider than the visible area, because it does not subtract the scrollbar, and the page gains a horizontal scrollbar. Avoid this by placing the band outside the container, with an inner container for its content.

Nesting containers also causes trouble. Two nested wrappers apply the gutter twice, leaving content indented on mobile. Keep one container per band of the page, and use a [stack layout](#stack-layout) or grid inside it.

Avoid fixed widths. A `width: 1200px` wrapper forces horizontal scrolling on narrow or zoomed screens, and WCAG 1.4.10 Reflow requires content to fit a width equivalent to 320 CSS pixels without two-dimensional scrolling, aside from content that needs it. Let the container shrink and change the inner layout at a [breakpoint](#breakpoint).

_Usage:_

"There's a horizontal scrollbar on every page on Windows."

"The hero uses `100vw` inside the layout container. Move it out and let it fill the body."

### Stack layout

A stack layout places its children in one direction, vertically or horizontally, with a consistent gap between them. It covers [form fields](#form-field), [card](#card) contents and [button](#button) rows. The parent controls spacing, so individual children do not need margins and can be reused anywhere.

```css
.stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
```

Spacing on the parent solves a recurring bug. When each child carries its own `margin-bottom`, the last child adds unwanted space at the end of its container, and adjacent vertical margins can collapse into one. A `gap` applies only between items.

| Need                               | Layout                     |
| ---------------------------------- | -------------------------- |
| One direction, even spacing        | Stack                      |
| Row that wraps onto new lines      | Flex with `flex-wrap`      |
| Items aligned in rows and columns  | Grid                       |
| Uneven heights packed in columns   | [Masonry layout](#masonry-layout) |

Take gap values from a [spacing scale](#spacing-scale).

An empty child still receives a gap. If a conditional wrapper renders an empty `<div>`, the stack shows a double space with nothing in it. Render nothing instead of an empty element, or apply `.stack > :empty { display: none; }` where that is safe.

Long content is another common failure. Flex items have an automatic minimum size based on their content, so a long URL in a horizontal stack can overflow instead of shrinking. Set `min-width: 0` on the item that should shrink.

Reversing visual order creates an accessibility problem. `flex-direction: column-reverse` and the `order` property move items on screen but leave the DOM order unchanged, so Tab and screen readers (software that reads the UI aloud) follow a different sequence from what is displayed. WCAG 2.4.3 Focus Order requires a sequence that preserves meaning, and 1.3.2 Meaningful Sequence requires a correct reading order where order affects meaning. If the order needs to change at a [breakpoint](#breakpoint), check that both sequences still make sense.

_Usage:_

"There's a strange double gap above the submit button."

"A hidden field wrapper is still rendering in the stack layout. Don't render it at all."

### Split pane

A split pane is two adjacent regions separated by a movable divider that lets the user resize them. Code editors, email clients and design tools use it to show a list beside a detail view. Use it when people work across both regions and prefer different proportions. If one fixed ratio works for everyone, a plain two-column grid is simpler. For a panel needed only occasionally, a [drawer](#drawer) leaves more room for the main content.

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

WCAG 2.5.7 Dragging Movements requires a single-pointer alternative to dragging, so add collapse or step [buttons](#button) that can be clicked or tapped. The visible divider is often 1px wide, so extend its hit area to meet the [touch target](#touch-target) requirement.

A drag can stop following the cursor when the pointer leaves the divider. Call `setPointerCapture()` on pointer down so that later events keep going to the divider. If a pane contains an iframe, test dragging across it, because the frame can receive the pointer events. Setting `pointer-events: none` on the frame during the drag is a common fix.

Clamp sizes so neither pane collapses to an unusable width, and set `min-width: 0` so wide content cannot block resizing. Below a [breakpoint](#breakpoint), stack the panes or show one at a time.

_Usage:_

"The divider gets stuck whenever I drag over the preview."

"The preview is an iframe, so the split pane loses the pointer. Disable its pointer events during the drag."

### Masonry layout

A masonry layout packs items of uneven height into columns, placing each item in the lane with the most available space. Image galleries and pinboards use it to avoid the gaps a regular grid leaves when row heights differ. If items have similar heights, or reading order matters, use a regular grid, which keeps rows aligned and order predictable.

CSS now has a native approach called grid lanes, set with `display: grid-lanes`. Browser support is still limited and the feature is marked experimental in MDN at the time of writing, so check current compatibility data and treat it as a progressive enhancement. Earlier proposals used `grid-template-rows: masonry`, so older articles may show syntax that no longer applies.

```css
.gallery {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
}

@supports (display: grid-lanes) {
  .gallery { display: grid-lanes; }
}
```

| Technique        | Order of items     | Trade-off                            |
| ---------------- | ------------------ | ------------------------------------ |
| `grid-lanes`     | Across lanes       | Limited browser support              |
| CSS columns      | Down each column   | Reads top to bottom, then across     |
| JavaScript       | Across lanes       | Absolute positions, runs on resize   |
| Grid row spans   | Across lanes       | Needs measured item heights          |

CSS multi-column layout is the common fallback, and it causes a specific surprise. Items flow down the first column before starting the second, so a newest-first feed appears out of order, and appending items can reshuffle the existing columns.

Focus order is the main accessibility issue. Items are placed by available height, so visual order can differ from DOM order, and pressing Tab can make focus jump between lanes. WCAG 2.4.3 Focus Order requires a sequence that preserves meaning and operability. If order carries meaning, such as ranked results, do not use masonry.

Images need reserved dimensions, with `width` and `height` attributes or [aspect ratio](#aspect-ratio). Otherwise items change height as images load, and placement shifts. Combining masonry with [infinite scroll](#infinite-scroll) makes these problems harder to notice and to fix.

_Usage:_

"Tabbing through the gallery jumps from column to column."

"That comes with the masonry layout. If order matters here, use a normal grid."

### Aspect ratio

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
| `cover`   | Fills the box, cropping the edges | Thumbnails, [avatars](#avatar) |
| `contain` | Fits inside, leaving empty bands  | Logos, product photos  |

Content taller than the box is the usual surprise. An element with `aspect-ratio` has an automatic minimum height based on its content, so a [card](#card) set to 1:1 grows past square when its text is long. The ratio appears to be ignored. Setting `overflow: auto` or `hidden` makes the element a scroll container, which removes that minimum and keeps the ratio. Setting `min-height: 0` also keeps the ratio, but content then overflows unless you handle it separately.

Forcing text into a fixed ratio carries an accessibility risk. Users who enlarge text need the box to grow, and WCAG 1.4.4 Resize Text does not allow clipped content at 200 percent. Apply fixed ratios to media and let text containers keep their automatic height.

An explicit `width` and `height` together override the ratio, because both dimensions are already known. Set only one when you want the ratio to apply.

_Usage:_

"The article list jumps around as the thumbnails load."

"The images have no dimensions. Set an aspect ratio so the space is reserved."

### Safe area

A safe area is the part of a screen not covered by notches, rounded corners or system bars, where content stays fully visible. A fixed bottom bar whose buttons sit under the phone's home indicator, or text clipped by a camera cutout in landscape, is the usual sign that a page has ignored it.

CSS exposes the insets through environment variables, read with the `env()` function.

| Variable                   | Typical cause on a phone          |
| -------------------------- | --------------------------------- |
| `safe-area-inset-top`      | Notch or status area              |
| `safe-area-inset-right`    | Cutout in landscape               |
| `safe-area-inset-bottom`   | Home indicator                    |
| `safe-area-inset-left`     | Cutout in landscape               |

On devices with cutouts, browsers generally keep the page inside the safe area by default. To draw edge to edge, a page opts in with `viewport-fit=cover`, and from then on it is responsible for keeping content clear of the unsafe regions.

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
```

```css
.bottom-bar {
  position: fixed;
  inset-inline: 0;
  bottom: 0;
  padding-block-end: max(0.75rem, env(safe-area-inset-bottom));
}
```

The `max()` keeps a minimum padding on devices where the inset is 0, which includes rectangular displays with nothing occupying the viewport. The second argument of `env()` is a fallback used when the variable is not available, as in `env(safe-area-inset-bottom, 0px)`.

Three mistakes are common. Adding `viewport-fit=cover` without using the insets puts content under the hardware. Padding only the bottom works in portrait, but rotating the device moves the cutout to a side, so the left and right insets matter as well. Offsetting a bar with `bottom: env(safe-area-inset-bottom)` instead of padding it leaves page content visible in the strip beneath.

[Bottom navigation](#bottom-navigation), [bottom sheets](#bottom-sheet), [toasts](#toast) and [floating buttons](#floating-action-button) are the components most often affected. Test them on a real device or simulator in both orientations, because a desktop browser usually reports an inset of 0.

_Usage:_

"The checkout button is partly under the iPhone home bar."

"We set `viewport-fit=cover` but never added the safe area inset to the footer padding."

### Breakpoint

A breakpoint is a width at which a layout changes, such as a [sidebar](#sidebar) collapsing into a menu below 48rem. It is usually written as a CSS media query, a rule that applies only when the viewport meets a condition. Breakpoints are one part of responsive design, which adapts a page to the space available.

```css
.layout { display: grid; gap: 1rem; }

@media (width >= 48em) {
  .layout { grid-template-columns: 16rem 1fr; }
}
```

Choose breakpoints where the content starts to look wrong, instead of copying the dimensions of particular phones. Device sizes change, and a layout tuned to three popular screens can break at every width between them.

| Question                               | Tool                      |
| -------------------------------------- | ------------------------- |
| Does the page have room for a sidebar? | Media query               |
| Does this component's parent have room? | Container query          |
| Should this size scale smoothly?       | [Fluid typography](#fluid-typography), `clamp()` |
| Should items wrap when they run out of room? | Flex or grid wrapping |

A container query responds to the size of an ancestor element instead of the viewport, which suits a [card](#card) that appears in both a wide page and a narrow sidebar.

Using `em` in media queries has a specific benefit. It resolves against the browser's initial font size, not the page's CSS, so a user who increases their default font size gets the narrower layout sooner, and text has room.

Browser zoom also triggers breakpoints, because zooming reduces the viewport's width in CSS pixels. A 1280px window at 400 percent is 320 CSS pixels wide, which is the width WCAG 1.4.10 Reflow tests. Anything hidden at a small breakpoint must stay available in another form, or zoomed desktop users lose it.

Boundary bugs are a common symptom. Pairing `max-width: 767px` with `min-width: 768px` leaves a gap at fractional widths such as 767.5px, where neither rule applies and the layout looks broken. Range syntax avoids it with `width < 48em` and `width >= 48em`.

_Usage:_

"The nav disappears completely at exactly one window size."

"Our two breakpoints leave a gap at 767.5px. Use range syntax so they meet."

### Spacing scale

A spacing scale is a fixed set of allowed values for padding, margins and gaps across an interface. Instead of choosing 13px here and 17px there, developers pick the nearest step. Without one, a product drifts into dozens of nearly identical values, and screens look slightly misaligned even though no single rule is wrong.

Many scales build on a base of 4 or 8 pixels, with steps that grow as the values get larger.

| Name         | Value     | Pixels at default | Typical use                 |
| ------------ | --------- | ----------------- | --------------------------- |
| `--space-1`  | `0.25rem` | 4                 | Icon and label              |
| `--space-2`  | `0.5rem`  | 8                 | Inside compact controls     |
| `--space-3`  | `0.75rem` | 12                | Control padding             |
| `--space-4`  | `1rem`    | 16                | Between related fields      |
| `--space-6`  | `1.5rem`  | 24                | [Card](#card) padding                |
| `--space-8`  | `2rem`    | 32                | Between groups              |
| `--space-12` | `3rem`    | 48                | Between page sections       |

Publish the values as CSS variables or design tokens, which are named design values shared across code and design files. Naming each step by its multiple of the base, as above, leaves room to add a value later without renaming everything. Names like `small` and `medium` run out quickly.

```css
.card {
  display: grid;
  gap: var(--space-3);
  padding: var(--space-6);
}
```

Use spacing to show relationships. Items that belong together get a smaller gap than items that do not, so a label sits closer to its own input than to the previous field. When every gap is the same, grouping is lost and forms become harder to scan.

Reduce large section spacing on narrow screens at a [breakpoint](#breakpoint).

The common failure is erosion through one-off values added to fix a single screen. Lint for raw pixel values in spacing properties, and add a new step only when several components need it. A [stack layout](#stack-layout) that takes a scale value as its gap keeps these decisions in one place.

_Usage:_

"Why is this form 15px apart when the other one is 16?"

"Someone hard-coded it. Use the spacing scale so they stay consistent."

### Type scale

A type scale is a limited, related set of font sizes that gives text a consistent hierarchy across an interface. Without a scale, a product collects sizes like 15px, 16px and 17px that are too close to read as different levels and too numerous to maintain.

A common way to build one is to multiply a base size by a fixed ratio. The table uses a base of `1rem` and a ratio of 1.25, rounded to three decimals.

| Step      | Size       | Pixels at default | Line height | Use            |
| --------- | ---------- | ----------------- | ----------- | -------------- |
| `small`   | `0.8rem`   | 12.8              | 1.5         | Captions       |
| `base`    | `1rem`     | 16                | 1.5         | Body text      |
| `lg`      | `1.25rem`  | 20                | 1.4         | Lead text      |
| `xl`      | `1.563rem` | 25                | 1.3         | [Card](#card) titles    |
| `2xl`     | `1.953rem` | 31.25             | 1.2         | Section titles |
| `3xl`     | `2.441rem` | 39                | 1.1         | Page titles    |

A larger ratio creates stronger contrast between levels and suits marketing pages. A smaller ratio suits dense dashboards, where big headings would waste space. Define line height with each size, since large text generally needs tighter leading than body text.

```css
:root {
  --text-base: 1rem;
  --text-xl: 1.563rem;
}
h2 { font-size: var(--text-xl); line-height: 1.3; }
```

Keep visual size separate from heading level. A common failure is choosing `<h4>` because it looks the right size, which breaks the outline that people using a screen reader, which reads the UI aloud, navigate by. Choose the heading level from the document's structure, then apply whichever scale step fits.

Use `rem` for font sizes. A size in `px` does not follow the default font size a user sets in their browser, although page zoom still works. Check that nothing clips when text grows, since WCAG 1.4.4 Resize Text requires text to resize to 200 percent without loss of content or function.

To adapt the scale to screen width, change its values at a [breakpoint](#breakpoint) or use [fluid typography](#fluid-typography).

_Usage:_

"Our card titles and section headings look almost identical."

"They're one pixel apart. Map both onto the type scale so they differ by a full step."

### Fluid typography

Fluid typography is text that scales smoothly with the viewport between a minimum and a maximum size, instead of jumping at a [breakpoint](#breakpoint). It is usually written with the CSS `clamp()` function, which takes a minimum, a preferred value and a maximum.

```css
h1 {
  font-size: clamp(1.5rem, 1rem + 2.5vw, 3rem);
}
```

The browser resolves `clamp(MIN, VAL, MAX)` as `max(MIN, min(VAL, MAX))`. In this example, the heading is `1.5rem` on small screens, `3rem` on large screens, and grows with the viewport in between.

| Approach                 | Behaviour                     | Suits                         |
| ------------------------ | ----------------------------- | ----------------------------- |
| Fixed [type scale](#type-scale) | Same at all widths | Dense application interfaces |
| Steps at breakpoints     | Jumps between sizes           | Simple, predictable control   |
| Fluid with `clamp()`     | Continuous between two limits | Headings, marketing pages     |

The main failure is text that does not respond to zoom. Browser zoom reduces the viewport's width in CSS pixels, so a size set only in `vw` stays about the same physical size however far the user zooms. WCAG lists this as failure F94 under 1.4.4 Resize Text, which requires text to be resizable to 200 percent without loss of content or functionality.

Mixing a `rem` value into the preferred value helps, because the `rem` part responds to zoom and to the user's font-size setting. It does not fully solve the problem, since the `vw` part still shrinks in CSS pixels as zoom increases, so the text grows by less than the zoom factor. MDN advises making the maximum a relative unit at least twice the minimum, so that text can still reach 200 percent. The example above follows that rule. Test it by zooming and comparing the rendered size.

Do not use `px` for the limits, since they ignore the user's default font size. Body text benefits least from fluid scaling, and a fixed `1rem` is often the better choice.

_Usage:_

"The hero title doesn't get any bigger when I zoom to 200 percent."

"Its fluid typography is pure `vw`. Add a `rem` component and clamp it."

### Elevation

Elevation is the apparent height of a surface above the page, shown with shadow or tone to communicate what sits on top of what. A [card](#card) at a low level looks attached to the page, while a [modal dialog](#modal-dialog) at a high level looks separate from everything behind it. It is a visual language, and it does not by itself control which element paints in front.

Most systems define a few named levels instead of allowing arbitrary shadows.

| Level | Typical surface                        | Shadow     |
| ----- | -------------------------------------- | ---------- |
| 0     | Page background                        | None       |
| 1     | Cards, panels                          | Subtle     |
| 2     | [Sticky headers](#sticky-header) | Small      |
| 3     | Dropdowns, [popovers](#popover)    | Medium     |
| 4     | Dialogs, [drawers](#drawer)        | Large      |

Keep elevation and `z-index` as separate decisions that happen to line up. Painting order is governed by stacking contexts, the groups within which `z-index` values compete. A menu with a level 3 shadow can still render behind a header if its ancestor forms a lower group. A [portal](#portal) is the common way out of that situation.

```css
:root {
  --elevation-1: 0 1px 2px rgb(0 0 0 / 0.15);
  --elevation-3: 0 4px 12px rgb(0 0 0 / 0.2);
}
.menu {
  box-shadow: var(--elevation-3);
  border: 1px solid transparent;
}
```

The transparent border in that example is there for forced colors mode, an accessibility setting that replaces page colors with a user-chosen palette. In this mode, `box-shadow` is forced to `none`, so a menu defined only by its shadow loses its edge and merges with the page. Border colors are replaced by a system color, so the transparent border becomes visible.

Shadows are also hard to see in [dark mode](#dark-mode), because there is little light to darken. A common approach is to make higher surfaces slightly lighter in tone, and keep a subtle border. Where a boundary is needed to identify a control, WCAG 1.4.11 Non-text Contrast requires 3:1 against adjacent colors, and a soft shadow alone rarely provides it.

_Usage:_

"In high contrast mode the dropdown blends into the page."

"Its elevation is only a box shadow, which gets removed. Add a transparent border."

### Theming

Theming is changing an interface's visual values, such as colors, radii and fonts, by swapping named variables without editing the components. The same [button](#button) can follow a customer's brand or switch to [dark mode](#dark-mode) because it refers to `--color-accent` instead of a fixed color. A theme that half works, with one panel staying white, usually means a component has a hard-coded value that bypasses the variables.

CSS custom properties are the usual mechanism, since they inherit through the DOM and can change at runtime without rebuilding styles.

```css
:root {
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
}
[data-theme="dark"] {
  --color-surface: #16181d;
  --color-text: #e8e8e8;
}
.panel {
  background: var(--color-surface);
  color: var(--color-text);
}
```

Naming decides whether a theme stays maintainable. Most systems use design tokens, which are named design values, in tiers.

| Tier      | Example             | Holds                 | Changes per theme |
| --------- | ------------------- | --------------------- | ----------------- |
| Raw       | `--blue-600`        | A literal color       | No                |
| Semantic  | `--color-accent`    | A role in the UI      | Yes               |
| Component | `--button-bg`       | One component's value | Sometimes         |

Components should use semantic names.

Because custom properties inherit, a theme can apply to a subtree by setting the attribute on any element, which is useful for a dark [sidebar](#sidebar) in a light app. Content rendered through a [portal](#portal) moves to another part of the DOM and can lose that scope, so a menu opened from the dark sidebar appears in the light theme. Copy the theme attribute to the portal's container.

A stored theme applied by client-side JavaScript causes a flash of the wrong colors on load. Set the attribute with a small inline script in `<head>` before the body renders, or on the server from a cookie.

Each theme must meet contrast on its own. WCAG 1.4.3 requires 4.5:1 for normal text and 1.4.11 requires 3:1 for control boundaries, and a pair that passes in one theme can fail in another. Check every semantic color pair per theme.

_Usage:_

"The date popup stays light inside our dark sidebar."

"It's portalled out of the theming scope. Pass the `data-theme` attribute to the portal root."

### Dark mode

Dark mode is an alternate color theme with light text on dark surfaces, following a system preference or a user's choice. It is a specific case of [theming](#theming), and it takes more than inverting colors. A page that flashes white on every load, or a dark page with a bright white scrollbar and date input, is a sign that only some of the required parts were done.

Three CSS features handle different jobs.

| Feature                 | Job                                                     |
| ----------------------- | ------------------------------------------------------- |
| `prefers-color-scheme`  | Detects the user's system preference                    |
| `color-scheme`          | Tells the browser to render native UI in light or dark  |
| `light-dark()`          | Picks one of two values based on the used color scheme  |

The `color-scheme` property affects the canvas, scrollbars, form controls and system colors. It is also required for `light-dark()` to work.

```css
:root { color-scheme: light dark; }

body {
  background: light-dark(#ffffff, #16181d);
  color: light-dark(#1a1a1a, #e8e8e8);
}
```

```html
<meta name="color-scheme" content="light dark" />
```

The meta tag gives the browser the preference before CSS loads, which helps prevent a white flash. If the app offers its own toggle, provide three options: System, Light and Dark. Store the choice, and apply it with a small inline script in `<head>` before the body paints. Setting `color-scheme: dark` on the root for the Dark option keeps native controls in step.

Colors need to be designed for dark surfaces, not flipped. Pure white on pure black can feel harsh, so many palettes soften both ends. Saturated brand colors that work on white may fall below the 4.5:1 text contrast ratio required by WCAG 1.4.3 on a dark background, so check every pair in both themes.

Shadows lose their effect, so show [elevation](#elevation) with lighter surfaces or borders. Logos with dark transparent backgrounds need an alternate asset.

Dark mode is separate from forced colors mode, an accessibility setting where the user's palette replaces page colors. Test both.

_Usage:_

"Dark mode looks fine except the scrollbars and select menus are bright white."

"We never set `color-scheme`, so the browser still renders native controls in light."

## Section 9 — Component Architecture

### Component library

A component library is a versioned collection of reusable UI pieces, such as [buttons](#button), inputs and dialogs, that teams install and build products from. It gives several applications one implementation of each control, so a fix to a [modal dialog](#modal-dialog) reaches all of them. A design system, the wider set of standards, guidance and shared design decisions, may include a component library, but the library is only its code.

| Approach             | You get                         | You give up                    |
| -------------------- | ------------------------------- | ------------------------------ |
| Styled library       | Fast start, finished visuals    | Distinct look, easy overrides  |
| [Headless](#headless-component) library | Behaviour and accessibility | You write all the styling |
| Copied-in source     | Full control of the code        | Upstream fixes arrive manually |
| Built in-house       | Exact fit                       | Ongoing maintenance cost       |

Controls such as a [combobox](#combobox) or [date picker](#date-picker) are expensive to build well, so many teams adopt a tested library for them.

A breaking change can affect every consuming app at once, so follow semantic versioning: major for breaking changes, minor for additions, patch for fixes. Publish a changelog, deprecate an API before removing it. When upgrades become painful, teams stop taking them, and different apps end up pinned to different versions.

Style overrides are the other recurring problem. If consumers reach into internal class names to adjust a component, every internal change can break them. Expose supported options such as a [variant](#variant), CSS variables or a [slot](#slot), and treat the internal markup as private.

Using a library does not make a product accessible by itself. It can provide correct roles and keyboard support, but labels, heading order, focus destinations and color choices remain the product team's responsibility.

Document each component in a [component explorer](#component-explorer) with its states, so teams can find what already exists before building a second version.

_Usage:_

"We've got four different date pickers across our apps."

"Put one in the component library and migrate them over one at a time."

### Primitive component

A primitive component is a low-level building block with one narrow job, from which larger components are assembled. Text, Box, Icon and a bare [button](#button) are typical examples. A `SearchBar` is not a primitive, because it combines several parts for a specific purpose.

The term is used in two ways, which can confuse a conversation.

| Meaning             | Provides                         | Examples                     |
| ------------------- | -------------------------------- | ---------------------------- |
| Visual primitive    | Styling and layout from tokens   | Box, Text, [Stack](#stack-layout) |
| Behaviour primitive | State, keyboard and accessibility wiring  | Dialog, Menu, [Tabs](#tabs) parts     |

A behaviour primitive is usually a [headless component](#headless-component) with no visual styling. In [atomic design](#atomic-design), visual primitives roughly correspond to atoms.

A primitive has to stay open, because it does not know where it will be used. It should forward standard attributes, event handlers and refs (handles to the underlying DOM node) to the element it renders. If it drops them, consumers cannot attach an `aria-describedby`, a test ID or a focus call, and they end up writing a replacement.

```jsx
function Text({ as: Tag = "span", size = "base", className = "", ...rest }) {
  return <Tag className={`text-${size} ${className}`} {...rest} />;
}
```

Spreading `...rest` is what passes those attributes through. The `as` prop makes it a [polymorphic component](#polymorphic-component), so the same text styles can apply to a `<p>` or `<h2>` without changing the document's structure.

The common failure is a primitive that accumulates options. A Box gains props for every CSS property, then responsive versions of each, until it is a second styling language. Keep props limited to values from your tokens, and let unusual cases use regular CSS.

The opposite failure is promoting a component too early. A shape that appears twice may be coincidence, and a shared abstraction forces both uses to change together. Extract a primitive once several components need the same behaviour. A change to a primitive affects everything built on it, so it needs visual regression tests and a careful release.

_Usage:_

"I can't add `aria-describedby` to our Input."

"The primitive component isn't forwarding extra props. Spread them onto the native element."

### Headless component

A headless component supplies behaviour, state and accessibility wiring but no visual styling. It handles things like opening a menu, tracking the active item and managing keyboard input, while you provide the styling. Teams choose one when a styled library's appearance would need constant overriding, but they do not want to rebuild a complex control such as a [combobox](#combobox) from scratch.

| Option                        | Behaviour | Styling      | Suits                          |
| ----------------------------- | --------- | ------------ | ------------------------------ |
| Styled [component library](#component-library) | Included | Included | Internal tools, fast starts |
| Headless component            | Included  | Yours        | Products with their own design |
| Built from scratch            | Yours     | Yours        | Unusual interactions           |

Headless APIs usually come in one of two forms. Some ship unstyled parts as a [compound component](#compound-component). Others ship a hook, or a function that returns attributes for you to spread on your own elements.

```jsx
function Disclosure({ title, children }) {
  const { buttonProps, panelProps } = useDisclosure();
  return (
    <>
      <button className="disclosure-title" {...buttonProps}>{title}</button>
      <div className="disclosure-panel" {...panelProps}>{children}</div>
    </>
  );
}
```

Here, `buttonProps` would hold `aria-expanded`, `aria-controls` and a click handler, so the consumer never writes them. The usual way this breaks is a consumer dropping those props or spreading them on the wrong element. The control still looks correct while keyboard behaviour and screen reader output (the UI read aloud) stop working. A `<div>` given the [button](#button)'s props, for example, may lack focus and key handling.

A headless library handles only part of accessibility. You remain responsible for visible labels, a [focus ring](#focus-ring) with sufficient contrast, [touch target](#touch-target) sizes, color contrast, [reduced motion](#reduced-motion) and hover and selected styles. An unstyled menu can have correct accessibility attributes and still have no visible indication of which item is focused.

Styling hooks matter when choosing a library. Good ones expose state through data attributes such as `data-state="open"`, so CSS can respond without extra logic. Check that it lets you control where an overlay renders, because a [portal](#portal) can affect [theming](#theming) and stacking.

_Usage:_

"Should we write our own select so it matches the brand?"

"No. Use a headless component for the keyboard and ARIA behaviour and style it ourselves."

### Compound component

A compound component is a set of components designed to work together, sharing state implicitly through a common parent. The HTML `<select>` and `<option>` elements work this way: neither is useful alone, and the parent tracks which option is chosen. In a [component library](#component-library), the same idea looks like this:

```jsx
<Tabs defaultValue="account">
  <Tabs.List>
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Panel value="account"><AccountForm /></Tabs.Panel>
  <Tabs.Panel value="billing"><BillingForm /></Tabs.Panel>
</Tabs>
```

The alternative is a single component configured with data, such as `<Tabs items={[...]} />`. That API is shorter, but it struggles once one tab needs a [badge](#badge), another needs a [tooltip](#tooltip) and a third needs a different wrapper. Each request adds another prop, and the component ends up with options like `renderTabLabel` and `tabClassNameByIndex`.

| API style       | Good for                        | Weakness                    |
| --------------- | ------------------------------- | --------------------------- |
| Config prop     | Uniform, data-driven lists      | Grows a prop per exception  |
| Compound        | Flexible structure and content  | More verbose to use         |
| [Render prop](#render-prop) | Custom output from internal state | Harder to read when nested |
| [Slot](#slot) | Replacing named regions       | Fixed set of regions        |

The parent usually shares state through a context, a framework feature that passes data to descendants without props. Older implementations used `cloneElement` to inject props into direct children. That approach breaks as soon as someone wraps a child in a `<div>` or their own component, and the tab silently stops responding. Context works at any depth, so prefer it.

A part rendered outside its parent has no context to read. Throw a clear error such as "Tabs.Trigger must be used within Tabs" rather than failing with an undefined value.

Accessibility wiring is a major benefit of this pattern. The parent can generate IDs and connect `aria-controls`, `aria-labelledby` and `aria-selected` across parts, and it can run [roving tabindex](#roving-tabindex) so the caller never handles them.

_Usage:_

"Our Tabs component has 22 props now, mostly for one-off tab labels."

"Make it a compound component so callers can put whatever they need inside each trigger."

### Polymorphic component

A polymorphic component can render as different HTML elements or components, usually through a prop named `as`. It lets the same styles apply to different semantics. A `Button` can render a `<button>` for an action and an `<a>` for navigation while looking identical.

```jsx
function Button({ as: Tag = "button", ...props }) {
  const typeProp = Tag === "button" ? { type: "button" } : {};
  return <Tag className="btn" {...typeProp} {...props} />;
}

<Button onClick={save}>Save</Button>
<Button as="a" href="/pricing">See pricing</Button>
```

Pick the element that matches the behaviour. A link navigates to a URL, and a button performs an action. Changing the tag changes what the browser provides, and the component does not get that behaviour back for free.

| Rendered as      | What changes                                                     |
| ---------------- | ---------------------------------------------------------------- |
| `<button>`       | Focusable, activates on Enter and Space, supports `disabled`     |
| `<a href>`       | Focusable, activates on Enter only, can open in a new tab        |
| `<a>` no `href`  | Not a link and not focusable                                     |
| `<div>`          | No role, no focus, no keyboard activation                        |

Using `as="div"` on an interactive component removes its keyboard behaviour. It still looks and clicks like a button, but keyboard users cannot reach it and screen readers, which read the UI aloud, do not announce it as a control. Restrict the allowed values, or add the role, `tabindex` and key handling when a non-interactive element is truly required.

Attributes do not all carry over either. `disabled` has no effect on an `<a>`, so a "disabled" link stays clickable. If a link must appear unavailable, remove the `href` and communicate the [disabled state](#disabled-state) another way.

TypeScript adds cost. Correctly typing props that change with `as` requires complex generics, which can slow the type checker and produce hard-to-read errors. An alternative is the `asChild` pattern, where the component merges its props onto a single child element supplied by the caller, as described in [Slot](#slot). This leaves the choice of element visible in the calling code and avoids the generic types.

_Usage:_

"The nav item looks like a button but Tab skips it."

"Someone passed `as="div"` to our polymorphic component. It should be an anchor with an `href`."

### Slot

A slot is a named placeholder inside a component where the caller supplies their own content. The component controls the structure and position, and the caller controls what goes there. A `Card` might expose `header`, `media` and `footer` slots. Slots usually replace a growing list of props such as `title`, `titleIcon`, `titleColor` and `subtitle`, each added for one screen.

```jsx
function Card({ header, footer, children }) {
  return (
    <article className="card">
      <header>{header}</header>
      <div className="card-body">{children}</div>
      {footer && <footer>{footer}</footer>}
    </article>
  );
}

<Card header={<h2>Invoice 1042</h2>} footer={<PayButton />}>
  Due on 14 March
</Card>
```

The mechanism differs by technology.

| Technology     | How a slot is expressed                    |
| -------------- | ------------------------------------------ |
| Web Components | `<slot name="footer">` in the shadow tree  |
| Vue            | `<slot name="footer">` in the template     |
| React          | `children` and props that accept elements  |

In Web Components, a `<slot>` can contain fallback content, shown when nothing is assigned to it. Slotted nodes remain in the light DOM, the host's regular children, and are only displayed at the slot's position. Page styles therefore still apply to them, and `::slotted()` from inside the component reaches only the top-level assigned elements.

Some libraries use the word for a different technique. An `asChild` prop, or a `Slot` utility, merges a component's props onto the single element the caller passes, so a menu trigger can be a custom link without an extra wrapper. This fails when the child does not pass received props and refs to its DOM node, leaving the trigger inert.

Slots hand structure to callers, which brings accessibility risk. A caller can put a link inside a slot that is already wrapped in a [button](#button), producing invalid nested interactive content. Document what each slot accepts, and wire names from the component, for example by connecting a dialog's title slot through `aria-labelledby`.

Prefer a slot when content varies. Use a plain prop for simple data like a label string, and a [render prop](#render-prop) when the content depends on the component's internal state.

_Usage:_

"Design wants an icon and a link in the card title now."

"Stop adding title props. Give the card a header slot."

### Render prop

A render prop is a prop whose value is a function that the component calls with its internal state to produce UI. The component owns the logic, and the caller decides what the output looks like. It is useful when the content of a region depends on data only the component knows, such as which row is being rendered in a list.

```jsx
<VirtualList
  items={contacts}
  renderItem={(contact, { index, isFocused }) => (
    <ContactRow contact={contact} index={index} highlighted={isFocused} />
  )}
/>
```

The nearest alternatives solve slightly different problems.

| Pattern             | Content depends on internal state | Typical use                |
| ------------------- | --------------------------------- | -------------------------- |
| [Slot](#slot)   | No                                | Fixed regions of a layout  |
| Render prop         | Yes                               | List items, custom cells   |
| Hook                | Yes, caller owns all markup       | Sharing logic only         |
| [Compound component](#compound-component) | Via context | Multi-part widgets |

In React, hooks replaced many earlier uses of render props for sharing logic, because several render props combined produced deeply nested callbacks. The pattern remains a good fit when a parent must render per item, as a [virtualized list](#virtualized-list) or [data table](#data-table) does when it asks the caller how to draw each row.

Performance is the first thing that goes wrong. An inline function has a new identity on every render, so a memoized child that receives it re-renders each time. Memoize the row component itself, and keep the function stable if measurements show a problem.

Remounting is a less obvious failure. Defining a component inside the render function creates a new component type on each render, so the framework discards the previous subtree. Inputs lose their text and focus disappears. Return elements of a stable component type instead.

Render props can also drop accessibility wiring, because the caller writes the markup. If the component needs `role`, `id` or `aria-selected` on each option, pass them as a props object, and require the caller to spread it, as in `renderOption={(option, props) => <li {...props}>{option.label}</li>}`.

_Usage:_

"Every keystroke in the row's input loses focus."

"The render prop defines a new component inline, so it remounts. Move it out."

### Variant

A variant is a named, predefined visual version of a component, selected through a prop such as `variant="danger"`. Variants give a [component library](#component-library) a limited set of approved appearances, so teams do not restyle a [button](#button) with one-off classes on each screen.

```jsx
<Button variant="primary" size="md">Save</Button>
<Button variant="danger" size="sm">Delete</Button>
```

A component's styling usually has separate axes, and each should be its own prop.

| Axis     | Example values               | Describes                     |
| -------- | ---------------------------- | ----------------------------- |
| Variant  | `primary`, `secondary`, `ghost` | Visual emphasis            |
| Tone     | `neutral`, `danger`, `success`  | Meaning                    |
| Size     | `sm`, `md`, `lg`             | Physical scale                |
| State    | hover, focus, disabled       | Current interaction, not a prop choice |

Interaction states are not variants. A [hover state](#hover-state) or [disabled state](#disabled-state) applies on top of every variant, so each one has to be designed and tested for all of them.

Use a union value instead of boolean props. With `<Button primary danger ghost>`, the API allows contradictory combinations and nothing says which wins. A single `variant` prop with a closed set of values makes invalid combinations impossible, and a type checker can enforce it.

Combinations are the main cost. Three variants, three tones, three sizes and five states already produce 135 possible appearances. Some will be unintended or untested, and a danger ghost button may fail contrast even though the other pairings pass. Define only the combinations you support, and list them in a [component explorer](#component-explorer) so that gaps are visible. Each one must meet the 4.5:1 text contrast of WCAG 1.4.3, and its [focus ring](#focus-ring) must remain visible.

A `danger` button also needs a label that states the action, because color alone does not convey meaning.

If a new option changes behaviour, structure or required props, it is probably a separate component.

_Usage:_

"Can I just add a red class to this button?"

"Use the danger variant so it gets the tested hover, focus and contrast styles."

### Uncontrolled component

An uncontrolled component keeps its own state internally and takes only an initial value from its parent. A plain HTML `<input>` works this way: the browser stores what the user types, and your code reads it when needed. The opposite is a controlled component, where the parent owns the value and passes it down on every change.

```jsx
// Uncontrolled: the DOM holds the value
<input name="email" defaultValue={user.email} />

// Controlled: the parent holds the value
<input value={email} onChange={(e) => setEmail(e.target.value)} />
```

| Question                                 | Uncontrolled          | Controlled        |
| ---------------------------------------- | --------------------- | ----------------- |
| Where is the value stored?               | DOM or component      | Parent state      |
| Read the value only on submit?           | A good fit            | Extra code        |
| Validate or format on each keystroke?    | Awkward               | A good fit        |
| Keep two views in sync?                  | Difficult             | A good fit        |
| Re-render on each keystroke?             | No                    | Usually           |

Uncontrolled [text fields](#text-field) suit simple forms, because `FormData` can collect every named field at submit time and the parent does not re-render while the user types.

A common bug comes from expecting the initial value to update. `defaultValue` is read only when the component first mounts. If a user switches from customer A to customer B and the same form stays mounted, the fields still show customer A's data. Giving the form a key tied to the record forces a fresh mount:

```jsx
<CustomerForm key={customer.id} customer={customer} />
```

Another common failure is switching modes. In React, a `value` that starts as `undefined` and later becomes a string turns an uncontrolled input into a controlled one and logs a warning. Initialise the state to an empty string, or use `value ?? ""`. A `value` with no `onChange` handler produces a field that cannot be edited.

Library components often support both modes, accepting `value` with `onChange`, or `defaultValue` alone. A [dropdown menu](#dropdown-menu) may have `open` and `defaultOpen`, for example. Follow this naming so callers can start uncontrolled and take over the state only when they need it.

_Usage:_

"The edit form still shows the last customer after I pick a new one."

"It's an uncontrolled component using `defaultValue`. Add a `key` so it remounts."

### Component explorer

A component explorer is a development tool that renders components in isolation, so each state can be built, reviewed and tested without running the full application. Storybook is a widely used example. Reaching a payment form's declined message in the real app might take a login, a seeded account and a failed card, whereas an explorer shows that state directly.

Each entry, often called a story, renders a component with fixed inputs.

| State to capture  | Why it is worth having                     |
| ----------------- | ------------------------------------------ |
| Default           | Baseline for review                        |
| Loading           | Shows the [skeleton screen](#skeleton-screen) or [spinner](#spinner) |
| [Empty state](#empty-state) | Rarely seen during normal development |
| [Error state](#error-state) | Hard to trigger in the real app   |
| Long content      | Exposes overflow and truncation            |
| Dark theme        | Exposes hard-coded colors                  |

Designers can review real components in a browser, and generated prop tables turn the explorer into documentation for a [component library](#component-library).

It also provides a base for automated tests. Visual regression tools compare screenshots of each story to catch unintended changes, and automated accessibility checkers can run against each state. These checkers find only some issues, so manual testing with a keyboard and a screen reader (software that reads the UI aloud) is still needed.

Stories go out of date when they are written once and abandoned. Run them as tests in continuous integration so that a broken story fails the build.

Isolation also hides integration problems. A component can look correct in an explorer and break in the app, because the app adds global CSS, providers, real data lengths or a parent that creates a stacking context, which traps `z-index` values. Load the application's global styles and providers in the explorer and use realistic data.

_Usage:_

"How do I see the payment form's declined state without a test card?"

"Open it in the component explorer. There's a story for each error."

### Atomic design

Atomic design is a methodology created by Brad Frost that describes interfaces in five levels, from small parts up to complete pages. It borrows its names from chemistry. Its purpose is to help a team think about an interface as a whole and as a collection of parts at the same time.

| Level     | Definition                                  | Example                  |
| --------- | ------------------------------------------- | ------------------------ |
| Atoms     | Basic elements that cannot be reduced further and still function | Label, input, [button](#button) |
| Molecules | Simple groups of atoms working as one unit  | [Search field](#search-field) |
| Organisms | Distinct sections built from smaller parts  | Site header              |
| Templates | Page layouts showing content structure      | Article layout           |
| Pages     | Templates filled with representative content | The real pricing page   |

The page level is useful because a headline that fits a template with placeholder text may wrap to four lines with a real title. In code, atoms roughly correspond to a [primitive component](#primitive-component).

Frost describes atomic design as a mental model and states that it is not a linear process.

The common failure comes from applying the levels as a strict folder structure. A team creates `atoms/`, `molecules/` and `organisms/`, then spends review time arguing about whether a [card](#card) is a molecule or an organism. The answer rarely affects how the code works. Many teams organise files by feature or component name and keep the vocabulary for discussion only.

The hierarchy says nothing about accessibility on its own. A set of accessible atoms can still form an inaccessible organism, for example if a label is separated from its input or the heading levels are wrong when the parts combine. Test at the level where users actually meet the interface.

_Usage:_

"Is this filter bar a molecule or an organism?"

"It doesn't matter. Atomic design is there to help us talk about it, so put it with the search feature."

## Section 10 — Interaction States

### Hover state

A hover state is the visual change on an element while a pointer rests over it, signalling that the element can be interacted with. A darker [button](#button) background or an underlined link are typical examples. In CSS it is written with the `:hover` pseudo-class. It is an extra hint for mouse and trackpad users, because touch and keyboard users may never trigger it.

| State               | Trigger                     | CSS              |
| ------------------- | --------------------------- | ---------------- |
| Hover               | Pointer over the element    | `:hover`         |
| [Focus](#focus-ring) | Keyboard or script focus | `:focus-visible` |
| [Active](#active-state) | Being pressed       | `:active`        |
| [Disabled](#disabled-state) | Unavailable     | `:disabled`      |

Do not hide essential controls behind hover. A table row whose Edit and Delete buttons appear only on hover gives touch users no way to reach them, and keyboard users may tab onto invisible controls. Keep the controls visible on devices that cannot hover, and reveal them on keyboard focus as well.

```css
.row-actions { opacity: 1; }

@media (hover: hover) {
  .row-actions { opacity: 0; }
  .row:hover .row-actions,
  .row:focus-within .row-actions { opacity: 1; }
}
```

The `hover` media feature describes only the primary input, so a laptop with a touchscreen may report either value.

Touchscreens cause a second bug. Depending on the browser, `:hover` may never match, may match briefly, or may stay applied after a tap until the user touches something else. A button then looks stuck in its highlighted state. Wrapping hover styles in `@media (hover: hover)` prevents this on most phones.

Content that appears on hover, such as a [tooltip](#tooltip), has specific requirements under WCAG 1.4.13 Content on Hover or Focus. The user must be able to dismiss it without moving the pointer, move the pointer onto it without it vanishing, and it must stay until they leave.

Avoid hover changes that alter layout, such as a bolder font or a thicker border, which shift neighbouring elements. Use color, shadow or an outline.

_Usage:_

"How do I delete a row on the iPad? I can't see the button."

"It only appears in the hover state. Show the actions when the device can't hover."

### Focus ring

A focus ring is the visible outline showing which element currently has keyboard focus. A stylesheet containing `outline: none` with no replacement is a common failure: pressing Tab appears to do nothing, because focus is moving through the page invisibly.

Three WCAG 2.2 criteria apply.

| Criterion                     | Level | Requirement                                                       |
| ----------------------------- | ----- | ----------------------------------------------------------------- |
| 2.4.7 Focus Visible           | AA    | A visible indicator exists in keyboard use                        |
| 1.4.11 Non-text Contrast      | AA    | A custom indicator has 3:1 contrast against adjacent colors       |
| 2.4.13 Focus Appearance       | AAA   | At least the area of a 2px perimeter, with 3:1 change between the focused and unfocused states |

Use `:focus-visible`, which applies when the browser judges that focus should be shown. It shows the ring for keyboard navigation and for text inputs, and generally omits it on mouse clicks of [buttons](#button).

```css
:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
```

Prefer `outline` over `box-shadow` for the ring. Forced colors mode, an accessibility setting that replaces page colors with a user palette, sets `box-shadow` to `none`, so a shadow-only ring disappears. Outlines stay and take on a system color.

One color rarely works on every surface. A blue ring can vanish on a blue button or a dark panel. Either set the color per [theme](#theming), or draw a two-tone ring using an outline plus a contrasting inner shadow, so that one of the two always stands out.

Clipping is the other frequent bug. An ancestor with `overflow: hidden` cuts off the outer part of the ring, which shows up on items in scroll containers and on [cards](#card). Use a negative `outline-offset` to draw the ring inside the element. A [sticky header](#sticky-header) can also cover the focused element entirely, which fails WCAG 2.4.11 Focus Not Obscured (Minimum), and `scroll-padding` prevents that.

_Usage:_

"I can't tell where I am when I tab through the settings page."

"A CSS reset removed the outline. Add a focus ring with `:focus-visible`."

### Active state

An active state is the brief visual change on a control while it is being pressed, confirming that the input registered. In CSS it is written with `:active`, which with a mouse typically begins on press and ends on release. A [button](#button) with no pressed feedback can feel unresponsive, and people often click it a second time.

The word "active" is also used loosely for a persistent state.

| Term             | Meaning                         | How to express it                 |
| ---------------- | ------------------------------- | --------------------------------- |
| Active (pressed) | Being pressed right now         | `:active`                         |
| Toggled on       | A [toggle button](#toggle-button) stays on | `aria-pressed="true"` |
| Current page     | Where the user is in navigation | `aria-current="page"`             |
| Selected         | Chosen item in a set            | `aria-selected="true"`            |

A nav link styled with `:active` will not stay highlighted on the current page, because the pseudo-class ends on release. Use `aria-current="page"` and style from that attribute, which also tells screen readers (software that reads the UI aloud) which link is current.

```css
.button:hover { background: var(--accent-hover); }
.button:active { background: var(--accent-pressed); }
```

A later `:hover` rule with equal specificity overrides `:active`, so the pressed style never shows while the pointer is over the element. For links, declare the rules in the order `:link`, `:visited`, `:hover`, `:active`.

Moving the control on press can lose the click. If `:active` applies `transform: translateY(2px)` and the user presses near the top edge, the button slides from under the pointer. The release then lands on another element, and the browser fires `click` on their common ancestor, so the button's handler does not run. Apply the movement to an inner element, or use a color or a slight shadow change.

Browsers differ on whether `:active` matches during keyboard or touch activation, so do not make it the only feedback for an action. Under [reduced motion](#reduced-motion), limit press effects to color changes.

_Usage:_

"The current nav item only highlights while I'm clicking it."

"You've used the active state. Set `aria-current="page"` and style that instead."

### Disabled state

A disabled state shows a control that exists but is currently unavailable, with interaction blocked until a condition changes. A greyed-out Submit [button](#button) is the familiar case, and also the familiar complaint: the user cannot tell why it is grey or what would enable it.

HTML offers `disabled`, and ARIA (attributes for assistive technology) offers `aria-disabled`. They behave differently.

| Behaviour           | `disabled`             | `aria-disabled="true"`            |
| ------------------- | ---------------------- | --------------------------------- |
| In the Tab order    | No                     | Yes                               |
| Blocks activation   | Yes                    | No, your code must block it       |
| Automatic styles    | Yes, via `:disabled`   | No, style the attribute           |
| Submitted in forms  | No                     | Yes, handle it yourself           |
| Works on any element | Form controls only    | Any element with a suitable role  |

The WAI-ARIA Authoring Practices advise using `disabled` when users can infer the control from what is around it, such as Previous on the first page of results. Use `aria-disabled` when the control should remain discoverable, such as items in a [toolbar](#toolbar) or menu, since people using a screen reader, which reads the UI aloud, find content largely by moving focus.

```html
<button aria-disabled="true" aria-describedby="why">Publish</button>
<p id="why">Add a title before publishing.</p>
```

With `aria-disabled`, block both click and keyboard activation in script. `pointer-events: none` stops the mouse only.

Often it is better not to disable the control. Leave Submit enabled, and on click show what is missing with [inline validation](#inline-validation) or an [error summary](#error-summary).

Native `disabled` has its own traps. If a focused button becomes disabled during a request, focus can be lost. A [tooltip](#tooltip) explaining the reason generally will not work on it either, because the button cannot receive focus and may not fire pointer events. Use `aria-disabled` when an explanation is needed.

WCAG 1.4.3 and 1.4.11 exempt inactive components from contrast requirements, but keep the label readable so users know what the control is.

_Usage:_

"Why can't I click Publish? Nothing tells me."

"It's in a disabled state until there's a title. Enable it and show the error on submit."

### Touch target

A touch target is the area of a control that accepts a tap or click, which can be larger than the visible icon or text. When it is too small, or too close to a neighbour, users tap the wrong item or need several attempts. A 16px close icon beside a Delete [button](#button) is the kind of layout that produces these errors, particularly for people with tremors or limited dexterity.

WCAG 2.2 has two criteria for size, and they are often confused. Both apply to all pointer input, including a mouse.

| Criterion                  | Level | Minimum size      | Spacing exception |
| -------------------------- | ----- | ----------------- | ----------------- |
| 2.5.8 Target Size (Minimum) | AA   | 24 by 24 CSS px   | Yes               |
| 2.5.5 Target Size (Enhanced) | AAA | 44 by 44 CSS px   | No                |

Under 2.5.8, a smaller target can still pass through spacing. Draw a 24px diameter circle centred on the target's bounding box. The target passes if its circle does not intersect another target or the circle of another undersized target.

Other exceptions apply to 2.5.8:

| Exception          | Example                                                |
| ------------------ | ------------------------------------------------------ |
| Equivalent         | Another compliant control on the page does the same job |
| Inline             | A link inside a sentence                               |
| User agent control | An unstyled native control                             |
| Essential          | Pins on a map where position carries meaning           |

Criterion 2.5.5 has similar exceptions for equivalent, inline, user agent and essential targets, but no spacing exception.

The visible element can stay small while the target grows. Add padding, or extend the hit area with a pseudo-element:

```css
.icon-button { position: relative; width: 1rem; height: 1rem; }
.icon-button::after {
  content: "";
  position: absolute;
  inset: -0.25rem;
}
```

Here a 16px icon gets a 24px target at the default font size. Check that expanded hit areas do not overlap, because the element painted on top then takes the tap. Dense [toolbars](#toolbar), [data table](#data-table) row actions, [chip](#chip) remove buttons and [icon buttons](#icon-button) often fall short.

_Usage:_

"People keep hitting Delete when they mean to hit Edit on mobile."

"Those icons are 16px and touching. Give each a bigger touch target and some space between them."

### Roving tabindex

Roving tabindex is a focus technique where only one item in a group is in the Tab order, and arrow keys move focus among the rest. It makes a composite widget, one control made of many focusable parts, behave as a single Tab stop. Without it, a [toolbar](#toolbar) with 20 [buttons](#button) takes 20 presses of Tab to get past.

The WAI-ARIA Authoring Practices describe the steps.

| Step | When                     | What happens                                                |
| ---- | ------------------------ | ----------------------------------------------------------- |
| 1    | Widget loads             | One item gets `tabindex="0"`, the others `tabindex="-1"`    |
| 2    | Arrow key pressed        | Current item is set to `-1`, next item is set to `0`        |
| 3    | Same key handler         | Call `.focus()` on the new item                             |
| 4    | User tabs away and back  | Focus returns to the item holding `tabindex="0"`            |

```html
<div role="toolbar" aria-label="Formatting">
  <button tabindex="0">Bold</button>
  <button tabindex="-1">Italic</button>
  <button tabindex="-1">Underline</button>
</div>
```

The usual alternative is `aria-activedescendant`.

| Technique               | Real DOM focus    | Scrolling           | Typical use                   |
| ----------------------- | ----------------- | ------------------- | ----------------------------- |
| Roving tabindex         | Moves to the item | Browser handles it  | Toolbars, tabs, [tree views](#tree-view) |
| `aria-activedescendant` | Stays on container | You handle it      | [Combobox](#combobox) with typing focus in the input |

Use `aria-activedescendant` when focus must stay in a text input while the user moves through suggestions.

A common bug is losing the Tab stop. If the item holding `tabindex="0"` is removed or disabled, no item in the group is tabbable, and the widget can no longer be reached by keyboard. Whenever items change, confirm that exactly one remains at `0`. If the focused item was removed, move focus to a neighbour.

Decide whether arrows wrap at the ends, and support Home and End where the pattern calls for them. Do not trap Tab inside the group, because Tab should always leave the widget. Keep the visible [focus ring](#focus-ring) on the current item.

_Usage:_

"It takes 14 tabs to get past the editor's formatting bar."

"It needs roving tabindex, so the bar is one Tab stop and arrows move inside it."

### Drag and drop

Drag and drop is moving an item by pressing it, carrying it with a pointer and releasing it over a target. It is used to reorder lists, move [kanban board](#kanban-board) [cards](#card) and add files to a [file upload](#file-upload). It should not be the only way to do something, because it is difficult or impossible for many people.

| Phase    | User action        | Interface response                        |
| -------- | ------------------ | ----------------------------------------- |
| Pick up  | Presses and moves  | Item lifts, valid targets are indicated   |
| Move     | Carries the item   | Insertion point shown, edges auto-scroll  |
| Drop     | Releases           | Item lands, result saved                  |
| Cancel   | Presses Escape     | Item returns to its origin                |

WCAG treats input methods separately. Under 2.5.7 Dragging Movements (AA), anything done by dragging must also be achievable with a single pointer without dragging, unless dragging is essential. A keyboard alternative alone does not meet this, because it has to work with clicks or taps. Under 2.1.1 Keyboard (A), the function also has to work from a keyboard. A "Move to" menu or Up and Down buttons cover both. Announce each result through a `role="status"` region.

| API                 | Good at                               | Limitation                         |
| ------------------- | ------------------------------------- | ---------------------------------- |
| HTML Drag and Drop  | Files, dragging between windows       | Limited styling, uneven touch support |
| Pointer Events      | Custom reordering, touch and mouse    | You build the behaviour            |

With the HTML API, a drop target that never fires `drop` is a common bug. An element only becomes a valid target if its `dragover` event is cancelled.

```js
zone.addEventListener("dragover", (event) => event.preventDefault());
```

With Pointer Events, touch drags can be cancelled when the browser decides to scroll instead, which fires `pointercancel`. Set `touch-action: none` on a dedicated drag handle, not the whole item, so that users can still scroll and pinch zoom the page.

Save the result [optimistically](#optimistic-ui) and return the item to its origin if the request fails.

_Usage:_

"Reordering works with a mouse but the list just scrolls on my phone."

"The drag and drop handle needs `touch-action: none`, or the browser takes over the gesture."

### Micro-interaction

A micro-interaction is a small, contained response to a single user action, such as a [switch](#switch) sliding across, a heart filling in or a field shaking on invalid input. Its job is to confirm that something happened and show what changed. When it is missing, people click twice because they are unsure the first click worked. When it is overdone, a small animation that was pleasant once becomes a delay they sit through a hundred times a day.

A common way to break one down uses four parts.

| Part            | Question it answers             | Example: "Copy link" [button](#button)    |
| --------------- | ------------------------------- | ------------------------------ |
| Trigger         | What starts it?                 | User clicks Copy               |
| Rules           | What happens?                   | URL is written to the clipboard |
| Feedback        | How does the user know?         | Label changes to "Copied"      |
| Loops and modes | What happens later or on repeat? | Label resets after two seconds |

The animation must never hold up the action. A menu that accepts no input until its 400ms opening transition ends makes the whole product feel slow. Apply the state change at once, and let the visual catch up. Keep durations short, commonly somewhere around 100 to 300 milliseconds, with an [easing](#easing) curve suited to the motion. Animating `transform` and `opacity` is usually smoother than animating `width` or `top`, which force the browser to recalculate layout.

```css
.switch-thumb { transition: transform 150ms ease-out; }
[aria-checked="true"] .switch-thumb { transform: translateX(1.25rem); }

@media (prefers-reduced-motion: reduce) {
  .switch-thumb { transition: none; }
}
```

Feedback seen only as motion does not reach everyone. A "Copied" message should also be written to a `role="status"` region so that screen readers, which read the UI aloud, announce it.

Respect [reduced motion](#reduced-motion) by replacing movement with an instant change or a fade. Shaking and bouncing are the effects most worth removing, since large or repeated movement can cause discomfort for people with vestibular conditions.

_Usage:_

"Users keep double-clicking Copy because nothing seems to happen."

"Add a micro-interaction that swaps the label to Copied, and announce it through a status region."

### Easing

Easing is the curve that controls how an animation's speed changes between its start and end. The same 200ms movement can feel abrupt, mechanical or smooth depending on the curve.

CSS provides keywords, each equivalent to a specific function.

| Keyword       | Equivalent                         | Common use                     |
| ------------- | ---------------------------------- | ------------------------------ |
| `linear`      | `cubic-bezier(0, 0, 1, 1)`         | [Spinners](#spinner), [progress bars](#progress-bar), opacity |
| `ease`        | `cubic-bezier(0.25, 0.1, 0.25, 1)` | The CSS default                |
| `ease-in`     | `cubic-bezier(0.42, 0, 1, 1)`      | Elements leaving the screen    |
| `ease-out`    | `cubic-bezier(0, 0, 0.58, 1)`      | Elements entering the screen   |
| `ease-in-out` | `cubic-bezier(0.42, 0, 0.58, 1)`   | Elements moving across screen  |

The usual convention is to use `ease-out` for things that appear, because they respond right away and then settle. Use `ease-in` for things that leave. Using `ease-in` on an entrance is a common mistake: the slow start reads as lag right after the user clicks.

Beyond the keywords, three functions give finer control. `cubic-bezier()` defines a custom curve. Its x values must stay between 0 and 1, while its y values may go outside that range to create overshoot. `linear()` draws a curve through points, and `steps()` jumps in discrete stages.

```css
.popover {
  transition: transform 180ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

The y value of 1.56 makes the element pass its target and settle back.

In a `@keyframes` animation, the timing function applies between each pair of keyframes, not across the whole animation. A three-keyframe animation with `ease-in-out` slows to a stop at the middle keyframe, which appears as a stutter. Remove the middle keyframe, or set a timing function per keyframe.

Easing does not make motion safe. A gently curved animation can still cause discomfort, so honour [reduced motion](#reduced-motion) separately. Define a few named curves as CSS variables so that [micro-interactions](#micro-interaction) across the product feel related.

_Usage:_

"The dropdown feels laggy even though it's only 150ms."

"It's using `ease-in`, so it starts slowly. Change the easing to `ease-out`."

### Reduced motion

Reduced motion means honouring a user's system setting that asks for less non-essential animation. Large movement such as parallax, zooming and sliding panels can cause dizziness or nausea for people with vestibular disorders, so an animation that looks harmless to its author can make a page unusable for someone else. Browsers expose the setting through the `prefers-reduced-motion` media feature, with the values `no-preference` and `reduce`.

The setting does not require removing all animation. Replace large motion with a gentler effect, and keep feedback that carries information.

| Original effect             | Under reduced motion           |
| --------------------------- | ------------------------------ |
| Page or panel slide         | Crossfade or instant change    |
| Zoom into a [lightbox](#lightbox) | Fade in               |
| Parallax                    | Static background              |
| Auto-rotating [carousel](#carousel) | No auto-rotation    |
| Smooth scroll to anchor     | Instant jump                   |
| [Spinner](#spinner) rotation | Slow opacity pulse        |

```css
.panel { transition: transform 300ms ease-out; }

@media (prefers-reduced-motion: reduce) {
  .panel { transition: opacity 150ms linear; }
}
```

WCAG 2.3.3 Animation from Interactions (AAA) requires that motion triggered by interaction can be disabled unless it is essential. Color or opacity changes that do not alter perceived size, shape or position are outside its definition of motion. WCAG 2.2.2 Pause, Stop, Hide (A) separately covers content that moves automatically for more than five seconds alongside other content. For 2.2.2, provide a visible pause control as well as the media query.

A blanket reset is a common shortcut, and it can break an interface.

```css
* { animation: none !important; transition: none !important; }
```

With no transition, the `transitionend` event never fires. Code that waits for it to remove a closed [modal dialog](#modal-dialog) or unlock a form then hangs, and the UI gets stuck for exactly the users who turned on this setting. Prefer targeted rules, and do not depend on animation events for state changes without a fallback.

JavaScript-driven animation ignores CSS media queries, so check `matchMedia("(prefers-reduced-motion: reduce)")` and listen for changes.

_Usage:_

"With reduced motion on, the settings modal never closes."

"Our reset removes the transition, so `transitionend` never fires. Close it without waiting for the event."
