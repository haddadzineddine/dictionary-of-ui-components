---
description: A full-width message at the top of a page or region describing a condition that affects everything below it.
---

A banner is a full-width message at the top of a page or region that describes a condition affecting everything below it, such as scheduled maintenance, an expired payment card or lost connectivity. It stays in the layout until the condition ends or the user dismisses it. Unlike a [toast](./Toast.md), it does not time out. Unlike an [inline alert](./Inline%20alert.md), it is not tied to one part of the content.

| Scope of the message              | Component                           |
| --------------------------------- | ----------------------------------- |
| Whole product or account, ongoing | Banner                              |
| Result of one action, brief       | Toast                               |
| One section or form               | Inline alert                        |
| Must be answered to continue      | [Modal dialog](./Modal%20dialog.md) |

The ARIA role named `banner` is a different thing. ARIA is a set of attributes that describe an interface to assistive technology, and `role="banner"` marks the site-wide header landmark, which a top-level `<header>` already provides. Do not put it on a notification.

A message present at page load needs no live role, because it is read in document order. A message that appears later should be inserted into an existing `role="status"` container, or `role="alert"` if urgent, so that screen readers, which read the UI aloud, announce it.

Sticky banners reduce the visible area, and on small or zoomed screens several stacked banners can fill the viewport. A sticky banner can also cover the element a keyboard user has just tabbed to, which fails WCAG 2.4.11 Focus Not Obscured (Minimum) when that element is entirely hidden. Let banners scroll away, show one at a time, or reserve space with `scroll-padding-top`.

A dismissed banner that returns on every page load teaches users to ignore it. Store the dismissal and show the banner again only when the message changes. Keep billing or security notices visible until resolved.

_Usage:_

"Users keep closing the maintenance notice and it comes back on every route."

"The banner's dismissal is only in component state. Persist it against the notice ID."
