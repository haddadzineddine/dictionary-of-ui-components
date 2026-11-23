---
description: A button with a pressed and an unpressed state, used for on-off commands such as Bold or Mute.
---

A toggle [button](./Button.md) is a button with two states, pressed and not pressed, such as Bold in a text editor or Mute in a video player. HTML has no dedicated element for it. Use a native `<button>` and expose the state with `aria-pressed`.

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

Choose the nearest alternative by what the control means. A toggle button suits a command in a [toolbar](./Toolbar.md) that applies to the current content. A [switch](./Switch.md) suits a setting that is on or off, such as email alerts. A [checkbox](./Checkbox.md) suits a choice that is submitted later with a form. For one choice among several, use a [segmented control](./Segmented%20control.md).

The pressed look must not rely on colour alone (WCAG 1.4.1). A filled background, border or icon change is easier to perceive, particularly when two neighbouring toggles are in different states.

_Usage:_

"The screen reader says 'Unmute, pressed'. Is the audio on or off?"

"We're swapping the label and setting `aria-pressed`. Keep the label as 'Mute' and only change the state."
