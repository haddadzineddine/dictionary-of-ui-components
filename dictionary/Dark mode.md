---
description: An alternate color theme with light text on dark surfaces, following a system preference or a user choice.
---

Dark mode is an alternate color theme with light text on dark surfaces, following a system preference or a user's choice. It is a specific case of [theming](./Theming.md), and it takes more than inverting colors. A page that flashes white on every load, or a dark page with a bright white scrollbar and date input, is a sign that only some of the required parts were done.

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

Shadows lose their effect, so show [elevation](./Elevation.md) with lighter surfaces or borders. Logos with dark transparent backgrounds need an alternate asset.

Dark mode is separate from forced colors mode, an accessibility setting where the user's palette replaces page colors. Test both.

_Usage:_

"Dark mode looks fine except the scrollbars and select menus are bright white."

"We never set `color-scheme`, so the browser still renders native controls in light."
