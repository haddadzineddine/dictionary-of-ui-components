---
description: Changing an interface's visual values, such as colors and radii, by swapping named variables without editing components.
---

Theming is changing an interface's visual values, such as colors, radii and fonts, by swapping named variables without editing the components. The same [button](./Button.md) can follow a customer's brand or switch to [dark mode](./Dark%20mode.md) because it refers to `--color-accent` instead of a fixed color. A theme that half works, with one panel staying white, usually means a component has a hard-coded value that bypasses the variables.

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

Because custom properties inherit, a theme can apply to a subtree by setting the attribute on any element, which is useful for a dark [sidebar](./Sidebar.md) in a light app. Content rendered through a [portal](./Portal.md) moves to another part of the DOM and can lose that scope, so a menu opened from the dark sidebar appears in the light theme. Copy the theme attribute to the portal's container.

A stored theme applied by client-side JavaScript causes a flash of the wrong colors on load. Set the attribute with a small inline script in `<head>` before the body renders, or on the server from a cookie.

Each theme must meet contrast on its own. WCAG 1.4.3 requires 4.5:1 for normal text and 1.4.11 requires 3:1 for control boundaries, and a pair that passes in one theme can fail in another. Check every semantic color pair per theme.

_Usage:_

"The date popup stays light inside our dark sidebar."

"It's portalled out of the theming scope. Pass the `data-theme` attribute to the portal root."
