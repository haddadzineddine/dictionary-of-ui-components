---
description: A small, contained response to a single user action, such as a switch sliding or a heart filling in.
---

A micro-interaction is a small, contained response to a single user action, such as a [switch](./Switch.md) sliding across, a heart filling in or a field shaking on invalid input. Its job is to confirm that something happened and show what changed. When it is missing, people click twice because they are unsure the first click worked. When it is overdone, a small animation that was pleasant once becomes a delay they sit through a hundred times a day.

A common way to break one down uses four parts.

| Part            | Question it answers             | Example: "Copy link" [button](./Button.md)    |
| --------------- | ------------------------------- | ------------------------------ |
| Trigger         | What starts it?                 | User clicks Copy               |
| Rules           | What happens?                   | URL is written to the clipboard |
| Feedback        | How does the user know?         | Label changes to "Copied"      |
| Loops and modes | What happens later or on repeat? | Label resets after two seconds |

The animation must never hold up the action. A menu that accepts no input until its 400ms opening transition ends makes the whole product feel slow. Apply the state change at once, and let the visual catch up. Keep durations short, commonly somewhere around 100 to 300 milliseconds, with an [easing](./Easing.md) curve suited to the motion. Animating `transform` and `opacity` is usually smoother than animating `width` or `top`, which force the browser to recalculate layout.

```css
.switch-thumb { transition: transform 150ms ease-out; }
[aria-checked="true"] .switch-thumb { transform: translateX(1.25rem); }

@media (prefers-reduced-motion: reduce) {
  .switch-thumb { transition: none; }
}
```

Feedback seen only as motion does not reach everyone. A "Copied" message should also be written to a `role="status"` region so that screen readers, which read the UI aloud, announce it.

Respect [reduced motion](./Reduced%20motion.md) by replacing movement with an instant change or a fade. Shaking and bouncing are the effects most worth removing, since large or repeated movement can cause discomfort for people with vestibular conditions.

_Usage:_

"Users keep double-clicking Copy because nothing seems to happen."

"Add a micro-interaction that swaps the label to Copied, and announce it through a status region."
