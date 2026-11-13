# Jenisys

The brand system for jenisys.in. Everything here comes from one source: the Jenisys mark, a single ribbon of light that loops through a J. The ribbon starts deep navy, accelerates through electric blue and ends in a glowing cyan edge. The website should feel the same way: dark and calm at rest, then fast and bright wherever something happens.

**In one line:** night-first, built from the logo's ribbon of light. One warm Flare colour for actions, and real delivery numbers as the main visual proof.

---

## 1. Why this direction

The current site uses Tailwind's stock indigo and violet (`#4F46E5` → `#7C3AED`). Thousands of template and AI-generated sites use exactly that pair, and it doesn't appear anywhere in your logo. Moving to the logo's own navy → blue → cyan, with no purple, does two things:

- It makes the site look like *Jenisys* rather than a template.
- It ties every page back to the mark, so the brand gets more recognisable with every visit.

The second idea is to treat **proof as the design**. Your case studies carry unusually concrete outcomes, like 18 days → 6 days, or 2 days → 4 hours. This system turns those into a signature component (the **Outcome Shift**, section 7). A visitor sees evidence before they see adjectives, which is what turns a browser into a lead.

## 2. Personality

Three words, all taken from what your clients already say about you in your testimonials:

| Trait | What it means on the page | Client evidence (real quotes on the site) |
|---|---|---|
| **Precise** | Exact numbers, named regulations, real units. No vague superlatives. | "They understood the regulatory constraints better than vendors who'd been in our space for years." |
| **Fast** | Quick motion, instant pages, short sentences. | "They replaced all of it in five months." |
| **Candid** | Say what we do and don't do. Name trade-offs. | "They flagged scope risks early, communicated tradeoffs clearly, and shipped on time." |

## 3. Logo

The mark is the ribbon-of-light J. Use the asset in **Logos**, and never redraw it by hand.

- **Clear space:** at least the diameter of the mark's round counter (the "O" hole) on every side.
- **Minimum size:** 24 px tall on screen, 32 px in the navigation bar.
- **Best ground:** `void` (Night). The cyan glow is designed for dark backgrounds. On Day surfaces the mark still works, but give it the full clear space.
- **Wordmark:** "Jenisys" set in the Display face at weight 600, tracking −0.02em, beside the mark, with a gap of half the mark's width.

**Don't:**
- recolour the mark to indigo or purple
- put it on photos or busy patterns
- add extra glow or drop shadows
- stretch, rotate or outline it

> **Action needed:** the only logo in the repo is a 500 px PNG wrapped inside an SVG file (`public/logo2.svg`). A true vector redraw is needed for a sharp favicon, social images and print. Until then, use the PNG at 1× or 2× only.

## 4. Colour

Night is the primary theme. Day exists for long reading, such as blog posts, case-study detail pages and legal pages.

| Role | Token | Share of a page | Rule |
|---|---|---|---|
| Ground and surfaces | `void`, `deep`, `raised` | ~70% | Elevation is shown by stepping up a surface, not by drop shadows. |
| Text | `ink`, `ink-muted` | ~20% | Body text is always `ink` or `ink-muted`, never a brand colour. |
| Brand light | `volt`, `signal`, `navy` | ~8% | Links, focus rings, data, the ribbon. |
| Action | `flare` | ~2% | **Only** on the primary call to action. Never decorative. |
| Outcome | `gain` | as needed | Only for measured improvements inside an Outcome Shift. |

**The Ribbon gradient** is `navy` → `volt` → `signal` at 120°, the logo's own sweep. It appears in exactly three places:

1. the mark
2. the 3D hero ribbon
3. the 1 px *light edge* that tops a featured panel or the active nav item

**Retired:** gradient-filled headline text, like "move the needle" in the current hero. Headlines are solid `ink`, and the brand colour comes from the ribbon around them.

**One Flare per screen.** If two buttons compete, one becomes a secondary (outline) button. On Day surfaces a Flare button also gets a 1 px `navy` bottom edge, because amber on near-white has low edge contrast.

## 5. Typography

| Role | Family | Why |
|---|---|---|
| Display | **Bricolage Grotesque** (variable, 500 to 700) | Ink-trap details and slightly condensed widths give headlines a crafted feel that stock Montserrat and Inter can't. Used for headlines and big numbers only. |
| Text | **Geist** (variable) | Very legible engineering-style sans for paragraphs and UI. |
| Mono | **Geist Mono** | Eyebrow labels, metrics, tech-stack names and code. It signals "engineers built this". |

Rules:
- Headlines are in sentence case, tracking −0.03em, `text-wrap: balance`, and never longer than 3 lines.
- Eyebrows are Mono, uppercase, +0.08em tracking, in `signal` (Night) or `volt` (Day). One per section, naming the section's real topic, e.g. `CASE STUDY · GOVERNMENT / CONSTRUCTION`.
- Paragraphs are capped at 65 characters wide.
- All numbers use tabular figures.
- Load all three faces through `next/font` with the Latin subset only, and drop Montserrat, Inter and the Google Fonts `@import`.

## 6. Layout

- 12-column grid, max width 1240 px, 24 px gutters, 16 px mobile side margins.
- **Asymmetric and left-aligned.** Headlines sit on columns 1 to 8, with proof (metrics, quotes) in 9 to 12. Avoid fully centred sections; they're the most common template tell.
- Section rhythm alternates `void` → `deep` → `void`. Sections are separated by a full-width 1 px `line` rule, not by cards floating on grey.
- **Radius:** `radius-sm` for chips and inputs, `radius-md` for buttons, `radius-lg` only for the one featured panel per section. Repeating grid items are square-cornered and split by `line` rules. They are not rounded cards with shadows.

## 7. Signature element: the Outcome Shift

A before → after figure from real delivered work. The old value is struck through in `ink-muted`, then an arrow, then the new value in Display weight with a `gain` label.

Approved figures (taken verbatim from the case studies already on the site):

- Adjudication registry, NSW: claims processing **18 days → 6 days**
- SaaS billing platform, US: monthly close **2 days → 4 hours**
- SaaS billing platform, US: billing support tickets **−80%**

**Rule:** only figures from a delivered, published case study. No estimates, no "up to", and no figures added without the client's sign-off. This is what makes the element trustworthy.

## 8. Motion: "lightspeed"

Things should feel *instant*, not animated.

- **UI motion:** 160 to 240 ms using `cubic-bezier(.2,.8,.2,1)`. No bounce and no springs on text.
- **Scroll reveals:** at most 12 px of travel plus an opacity change from 0.6 to 1. Content is never invisible before it reveals.
- **The one big moment:** a WebGL ribbon of light in the home hero, drawn from the mark's curve. It reacts subtly to the pointer and to scrolling. It must:
  - lazy-load after first paint
  - show a still image first
  - pause when off-screen
  - be replaced by the still image under `prefers-reduced-motion` or on low-power devices
  - add no more than 60 KB of gzipped JavaScript
- Inner pages get small, cheap touches instead, like the light edge sweeping across a featured panel on hover, or Outcome Shift numbers counting once when they come into view.

## 9. Imagery and icons

- No stock photos of people, and no mock dashboards with made-up figures (the current hero's "$142K revenue / 12.4K users" panel is retired).
- Use real product screens from delivered projects (with permission), or diagrams drawn with `line` strokes and `signal` nodes.
- Photos of the real team only.
- Icons: Lucide (already installed), 1.5 px stroke, `ink-muted` by default and `signal` when active. No emoji.

## 10. Voice

Plain, specific, outcome first. Write the way the case studies already do.

**Do: these lines already on the site are on-brand**
- "Replaced a manual, paper-driven claims process with structured digital workflows under the NSW SOPA framework, cutting processing time from 18 days to 6."
- "Ship products that actually move the needle."
- "Schedule a free call over a cup of coffee."

**Flag: these lines already on the site read as generic.** I'd suggest rewrites, but only with your approval.
- "Cutting-Edge Technology"
- "We leverage the latest technologies and frameworks to build scalable, future-proof solutions that drive real digital transformation."
- "groundbreaking solutions for your most complex challenges"

**Words to avoid in new copy:** leverage, cutting-edge, groundbreaking, seamless, synergy, world-class, unlock, empower.

> **Copy rule for the redesign:** no text on the live site is changed or added without your written approval. Where a layout needs words that don't exist yet, the placeholder is shown to you first and marked `[COPY NEEDED]`.

## 11. Conversion rules

1. Every screen has one primary action: **Start a Project** (Flare). The secondary action is **Schedule a free call over a cup of coffee** (outline).
2. Every call to action sits next to a piece of proof: an Outcome Shift, a client quote, or the line "Government & enterprise clients".
3. Forms ask for no more than 4 fields before the first submit.
4. The navigation bar keeps **Start a Project** visible at all times. On mobile it becomes a sticky bottom bar.
5. Case studies come before service lists on the home page, because proof sells better than a catalogue.

## 12. Speed and SEO budget (part of the brand)

| Metric | Budget |
|---|---|
| Largest Contentful Paint | < 1.8 s on 4G |
| Interaction to Next Paint | < 150 ms |
| Cumulative Layout Shift | < 0.05 |
| JavaScript per page (gzip) | < 120 KB, hero ribbon included |
| Images | AVIF/WebP via `next/image`, nothing over 200 KB |
| Fonts | 3 variable families, Latin subset, self-hosted |

Every page is rendered on the server, with one `<h1>`, a unique title and description, the right schema (Organization once site-wide; Service, Article, BreadcrumbList and FAQ where they're true), and a real 1200×630 social image built in this brand.
