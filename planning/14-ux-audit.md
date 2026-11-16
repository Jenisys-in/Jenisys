# UX audit of the whole site (16 November 2026)

Method: the design-critique framework (first impression, usability, hierarchy, consistency) and the WCAG 2.1 AA checklist, applied with a real browser: keyboard tours of seven pages, dialog and menu tests, form flows including failure, link-name checks, reduced-motion and touch emulation, plus Lighthouse and token-level contrast maths. Findings marked **Fixed** were changed in this pass.

## 1. Home page: the long light stretch (reported by you)

**Problem confirmed.** From client reviews to the questions, four chapters sat on near-identical warm off-white (`#f6f4ee` and `#ece9df`), so the page lost its rhythm and the reviews, which are the strongest trust element, did not stand out.

**Fixed.**
| Chapter | Before | Now |
|---|---|---|
| 03 The work | Night | Night, with a ribbon-light hairline where it meets Paper |
| 04 Client reviews | Paper (deep) | **Volt**: a full-bleed navy-to-blue ground from the logo's own sweep, with faint ribbon strands behind the quotes |
| 05 How it works and prices | Paper | Paper (unchanged) |
| Promises | Paper strip | **Night** strip |
| 06 Questions | Paper (deep) | Paper (deep) |
| 07 The call | Night | Night |

The rule is now: no two neighbouring chapters share a ground, and Volt is reserved for client voice (home and About). Contrast on the new ground: white text 11.1 to 13.1:1, muted text 8.2:1, cyan accents 8.3:1; Lighthouse contrast audit passes.

## 2. Critique summary

**First impression.** The offer is clear in the first screen, the proof is one scroll away, and the single amber action is unmistakable. The page now reads as a deliberate sequence.

**What works well.**
- One primary action on every screen, always the same words.
- Real before-and-after figures lead each proof tile.
- Prices are visible before any form.
- Chapter numbers give the page a visible outline.
- The booking window, menus and form steps behave predictably.

## 3. Findings

| # | Area | Finding | Severity | Status |
|---|---|---|---|---|
| 1 | Home | Four neighbouring chapters on the same pale ground; reviews did not stand out | Major | **Fixed** |
| 2 | Forms | After "Continue" on the contact form, focus fell to the page body; keyboard and screen-reader users lost their place | Major | **Fixed** (focus moves to the step heading) |
| 3 | Forms | After a successful send, focus was lost with the removed form | Major | **Fixed** (focus moves to the confirmation) |
| 4 | Forms | Footer newsletter fields had no visible keyboard focus ring (border colour only) | Major | **Fixed** |
| 5 | Forms | Newsletter and talent-pool inputs were 15 px, which makes iOS Safari zoom the page on focus | Moderate | **Fixed** (16 px; checked: 0 inputs under 16 px on the contact page and footer) |
| 6 | Navigation | The Services menu offered the four services but no link to the Services overview page | Moderate | **Fixed** ("All services" added to the desktop menu and the phone menu) |
| 7 | Conversion | Pricing buttons all sent visitors to an empty contact form, so the chosen plan had to be re-typed | Moderate | **Fixed**: the plan and service now carry over (banner on step 1, project type preselected, plan noted in the message) |
| 8 | Links | Four "How it works →" links on the pricing page had the same name but different destinations | Moderate | **Fixed** (each is named after its service) |
| 9 | Touch | The "Read the case →" cue on the proof tiles only appeared on hover, so phone users never saw it | Minor | **Fixed** (always visible on touch devices) |
| 10 | Forms | Field errors appear on blur and can shift the layout while a pointer is moving to the next control (seen once in testing) | Minor | Open: reserve space for the error line |
| 11 | Mobile | The home page is about 14,000 px tall on a phone (roughly 17 screens) | Minor | Open: collapse the "Recent engagements" list and the case diagram behind a toggle on phones |
| 12 | Consent | The cookie bar is last in the page order, so a keyboard user reaches it only after tabbing through the page. Trackers are off by default, so nothing is blocked | Minor | Open |
| 13 | Orientation | Breadcrumbs exist on services, work and About but not on Pricing, Contact or Blog | Minor | Open |
| 14 | Targets | Inline text links inside paragraphs are under 44 px tall (they meet the WCAG 2.2 AA 24 px minimum; the 44 px figure is a stricter guideline) | Minor | Open by design |
| 15 | Trust | No photographs, no product screens, and reviews show the project instead of the client's name | Moderate | Open: needs your material and client consent |

## 4. Accessibility (WCAG 2.1 AA)

**Perceivable**
- Images: none without `alt` on seven sampled pages.
- Contrast: every brand token pair passes 4.5:1 (see table); Lighthouse contrast audit passes on the home and About pages.
- Text size: nothing below 12 px.

| Pair | Ratio |
|---|---|
| Ink on Paper | 16.7:1 |
| Muted text on Paper / Paper deep | 6.7:1 / 6.0:1 |
| Link blue on Paper | 5.9:1 |
| Success green on Paper | 4.9:1 |
| Muted text on Night | 8.0:1 |
| Cyan on Night | 12.4:1 |
| White on Volt (top / middle) | 11.1:1 / 13.1:1 |
| Muted text on Volt | 8.2:1 |
| Button text on amber | 10.2:1 |

**Operable**
- Keyboard tour of seven pages: the skip link is the first stop, then logo and navigation; focus order follows the page; no focus lands on hidden or inert elements; every stop shows a focus indicator (after fix 4).
- Booking window: focus moves inside on open, stays inside, Escape closes it, and focus returns to the button that opened it. Page scroll is locked while open and restored after.
- Phone menu: opens, locks scroll, closes with Escape.
- Motion: with reduced motion on, nothing stays faded or clipped (0 affected elements).

**Understandable**
- Form errors are announced (`role="alert"` on failure; the failed message keeps the visitor's text).
- Every field has a visible label and the right `autocomplete`.
- The 404 page keeps the navigation and a way home.

**Robust**
- One `<h1>`, one `<main>`, no heading skips, labelled buttons, valid structured data on every page.

**Not tested:** real screen readers (VoiceOver, NVDA), 200% browser zoom on every template, and Safari.

## 5. Priority recommendations

1. Add real faces and screens (finding 15): the biggest remaining trust lever.
2. Shorten the phone home page (finding 11): hide secondary evidence behind a toggle.
3. Reserve space for field errors (finding 10) and add breadcrumbs to Pricing, Contact and Blog (finding 13).
4. Run one session with a real assistive-technology user on the contact form and the booking window.

## 6. Files changed in this pass

`src/app/global.css`, `src/components/ui-brand/ClientReviews.js`, `src/components/ui-brand/OutcomeShift.js`, `src/components/home/Promises.js`, `src/components/home/FeaturedStory.js`, `src/components/home/CallBanner.js`, `src/components/Homepage.js`, `src/components/About-us/about-us.js`, `src/components/Navbar.js`, `src/components/NewsletterForm.js`, `src/components/career/TalentPoolForm.js`, `src/components/evaluate/evaluate.module.css`, `src/components/pricing/PricingCard.js`, `src/app/pricing/page.tsx`, `src/components/contact.js`.
