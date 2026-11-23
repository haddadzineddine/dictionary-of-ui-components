---
description: A text input that turns each entered value into a removable tag, for free-form lists such as labels or email recipients.
---

A tag input is a text input that turns each entered value into a removable item, such as labels on an article or recipients in an email. Each item is usually drawn as a [chip](./Chip.md) inside the field. Use it when people can add values of their own. If the values must come from a fixed list, a [multi-select](./Multi-select.md) prevents typos and duplicates.

The WAI-ARIA Authoring Practices have no tag input pattern, so the behaviour below is convention built from native parts. A simple structure is a list of tags, each with a real remove [button](./Button.md), followed by a labelled text input.

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
