---
description: A component that can render as different HTML elements or components, usually through an as prop.
---

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

Attributes do not all carry over either. `disabled` has no effect on an `<a>`, so a "disabled" link stays clickable. If a link must appear unavailable, remove the `href` and communicate the [disabled state](./Disabled%20state.md) another way.

TypeScript adds cost. Correctly typing props that change with `as` requires complex generics, which can slow the type checker and produce hard-to-read errors. An alternative is the `asChild` pattern, where the component merges its props onto a single child element supplied by the caller, as described in [Slot](./Slot.md). This leaves the choice of element visible in the calling code and avoids the generic types.

_Usage:_

"The nav item looks like a button but Tab skips it."

"Someone passed `as="div"` to our polymorphic component. It should be an anchor with an `href`."
