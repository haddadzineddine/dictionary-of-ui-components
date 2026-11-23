---
description: A vertical panel beside the main content, usually holding navigation or filters, that can often collapse.
---

A sidebar is a vertical panel beside the main content, usually holding navigation, filters or supporting information. It suits applications with many sections, because a vertical list has room to grow and can show nested groups. For a handful of destinations, a [navbar](./Navbar.md) uses less space. A sidebar stays on screen alongside the content, whereas a [drawer](./Drawer.md) opens over it on demand.

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

A common bug affects the hidden state. A sidebar moved off-screen with `transform` is invisible, but its links remain focusable, so a keyboard user tabs through a dozen stops with no visible [focus ring](./Focus%20ring.md). Set `hidden` or `inert` on it when closed. If you animate the exit, apply it once the transition ends.

The collapse control should be a real [button](./Button.md) with `aria-expanded` and `aria-controls`, with a name that matches its purpose, such as "Project navigation". In a collapsed rail, add a [tooltip](./Tooltip.md) so sighted users can learn each icon, and show it on focus as well as hover.

On small screens a fixed sidebar takes most of the viewport, and WCAG 1.4.10 expects content to reflow at a width of 320 CSS pixels. Below a set [breakpoint](./Breakpoint.md), turn it into a drawer. If the hierarchy runs several levels deep, nested disclosure lists or a [tree view](./Tree%20view.md) can structure it.

_Usage:_

"Tab seems to vanish for about ten presses after the header."

"It's going through the collapsed sidebar off-screen. Set `inert` on it when it's closed."
