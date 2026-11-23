---
description: A small image, initials or icon that represents a person or account in an interface.
---

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

Uploaded photos are rarely square, and stretching them distorts faces. Set equal width and height attributes to reserve the space and prevent layout shift, then crop with `object-fit: cover`. For a shape that scales, use [aspect ratio](./Aspect%20ratio.md).

Initials fallbacks have their own traps. Names do not always split into a first and last name, so derive initials carefully and handle single names and non-Latin scripts. Background colors generated from a hash can produce unreadable combinations, so choose from a fixed palette that meets the 4.5:1 text contrast ratio.

An avatar that opens an account menu is a control, so wrap it in a real [button](./Button.md) with a name such as "Account menu". Its [touch target](./Touch%20target.md) should meet WCAG 2.5.8, which asks for 24 by 24 CSS pixels or enough spacing around a smaller target. A stack of overlapping avatars can fail both. In a group, summarise the overflow with a "+3" item whose accessible name says "3 more members".

_Usage:_

"Half the comment avatars are showing a broken image icon."

"Those users have expired photo URLs. Fall back to initials on the image error event."
