# D. Design direction, and E. Design system

## D1. The direction: "Signal on Paper"

**One sentence:** a calm, two-ground site (dark Night and warm Paper) tied together by a single line of light that starts tangled and ends ordered, with real results and real artefacts as the only decoration.

This is an evolution of the current brand system, not a replacement. The ribbon colours, the typefaces and the amber action colour stay. What changes is restraint, rhythm and story.

### Why this, and not something else

| Option considered | Verdict |
|---|---|
| Keep the all-dark site and add more 3D | Rejected. More effects on the same template make it look more generic, not less, and cost speed. |
| Go fully light and minimal | Rejected. It throws away the logo's glow, which only works on dark, and it is the other common template. |
| **Two grounds with one storytelling line** | Recommended. Contrast between dark and light creates rhythm and makes each dark moment feel deliberate. The line gives the site an idea that is only Jenisys's. |

### The storytelling device: the Line

The logo is a ribbon of light that loops into a J. The site extends that ribbon into a narrative.

| Stage of the page | What the line does | What it says |
|---|---|---|
| Hero | The ribbon, alive and twisting | Technology as raw energy |
| Problem | Thin, tangled, looping back on itself | How manual work feels |
| Offers and process | Untangles into parallel tracks, one per step | Order being applied |
| Proof | Becomes the arrow inside each Outcome Shift (18 days → 6 days) | The measured change |
| Close | One straight line leading to the button | A clear next step |

This is the brief's tagline made visible: technology, turned into advantage. It is drawn in SVG and CSS, so it costs almost nothing to load. On phones it simplifies to a vertical thread at the left edge.

## D2. Design principles

1. **One idea per screen.** Each section makes a single point with a single visual. If a section needs two headings, it is two sections or it is too much.
2. **Proof before promise.** A number, a screen or a named result appears before any adjective.
3. **Show the work.** Visuals are real artefacts: product screens, system diagrams, the actual workflow. No stock photos, no invented dashboards, no AI-generated illustrations.
4. **Quiet by default, one moment of light.** Each page has exactly one animated or glowing element. Everything else is still.
5. **Two grounds.** Night for statements and proof. Paper for reading, comparing and deciding.
6. **Nothing invented.** No client, quote, number or award appears unless it is true and confirmed.
7. **Speed is a brand attribute.** A page that loads instantly is the first proof of engineering quality.
8. **One action.** Every page leads to the same next step, with the same words.

## D3. What changes at a glance

| Today | Proposed |
|---|---|
| One dark navy surface, 12 sections | Night and Paper alternating, 7 chapters |
| Glow on most cards | Glow reserved for the one featured element per page |
| Tilted "3D" text cards | Flat panels divided by hairlines |
| Abstract skeleton screens | Real screens and diagrams from delivered work |
| Grid background on every header | Grid only in the hero; other headers are plain |
| Mono capitals labels everywhere | Mono only for data and chapter numbers |
| Six button labels | One primary label, one secondary |
| No people | Founder and team, photographed |

---

# E. Design system (v2)

Values marked *new* are additions. Everything else exists today and is kept. Exact contrast ratios are verified in Phase 1 before any value is final.

## E1. Colour

### Night ground (kept)

| Token | Value | Use |
|---|---|---|
| `void` | `#050a1c` | Page ground |
| `deep` | `#0a1330` | Raised section |
| `raised` | `#111d45` | Panel |
| `line` | `#22305f` | Hairlines |
| `ink` | `#edf2ff` | Text |
| `ink-muted` | `#98a5c9` | Secondary text |

### Paper ground (*new*, replaces the cold "Day" theme)

| Token | Value | Use |
|---|---|---|
| `paper` | `#f6f4ee` | Page ground: a warm off-white, not pure white |
| `paper-raised` | `#ffffff` | Panel |
| `paper-line` | `#dedad0` | Hairlines |
| `paper-ink` | `#0a1230` | Text |
| `paper-muted` | `#4a5578` | Secondary text |

Warm paper is the deliberate choice. Cold white with blue is the default look of software sites; warm paper next to deep navy reads as considered and editorial.

### Brand light and action (kept)

| Token | Value | Rule |
|---|---|---|
| `navy` → `volt` → `signal` | `#1b2aa0` → `#4c8dff` → `#14e2f9` | The ribbon gradient. Used only for the mark, the Line, and the 1 px light edge. |
| `signal` | `#14e2f9` | Data highlights and active states on Night |
| `volt-day` | `#1652d9` | Links and data on Paper |
| `flare` | `#ffb23f` | **Primary button only.** One per screen. |
| `gain` | `#3ee59c` | Measured improvements only |
| `alert` | `#ff7a70` | Errors only |

Rules:

- About 90% of any screen is ground and text. Brand colour is a small accent.
- No gradient-filled text anywhere (the 404 page and step numbers currently break this).
- The cookie banner's blue button becomes a secondary outline button.
- The three legacy token sets (`--ds-*`, shadcn variables, the old Tailwind config) are deleted.

## E2. Typography

Families are unchanged: Bricolage Grotesque for display, Geist for text, Geist Mono for data.

| Role | Size (phone → desktop) | Weight | Notes |
|---|---|---|---|
| Display (hero only) | 44 → 96 px | 650 | Line height 0.98, tracking −0.035em |
| H1 (inner pages) | 38 → 64 px | 650 | |
| H2 (chapter) | 30 → 48 px | 600 | |
| H3 | 20 → 24 px | 600 | |
| Lead | 18 → 21 px | 400 | Max 60 characters per line |
| Body | 17 px | 400 | Line height 1.65; max 68 characters |
| Small | 14 px | 400 | Captions, form help |
| Label (mono) | 12 → 13 px | 500 | Uppercase, +0.08em. **Never below 12 px.** |
| Figure (Outcome Shift) | 56 → 88 px | 700 | Tabular numbers |

Changes from today: a larger hero display size; one fewer heading size; no text under 12 px (there are 108 instances now); mono restricted to labels, prices and data.

## E3. Spacing and layout

| Item | Value |
|---|---|
| Spacing scale | 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160 px |
| Grid | 12 columns, 1240 px max, 24 px gutters (kept) |
| Side margin | 20 px phone, 32 px tablet, auto on desktop |
| Chapter padding | 72 px phone, 112 px tablet, 160 px desktop |
| Reading column | 680 px for articles and case studies |
| Breakpoints | 640, 768, 1024, 1280 px. **Tablet (768 to 1023) gets its own two-column layouts**, not the phone layout. |

Layout rules:

- Left-aligned and asymmetric: headline on columns 1 to 7, supporting content on 8 to 12.
- Each chapter opens with a mono chapter number and name (`02 · PROOF`), which doubles as a visible outline of the argument.
- Night and Paper chapters alternate. Two dark chapters never sit together without a hairline and a change of content type.
- Generous empty space is part of the design. A chapter may be one sentence and one figure.

## E4. Components

### Buttons

| Type | Look | Use |
|---|---|---|
| Primary | Amber fill, dark text, 12 px radius, 48 px tall, arrow nudges on hover | The one action: **Book a free call** |
| Secondary | 1 px outline, text colour of the ground | **Send a brief**, "See the work" |
| Text link | Underlined on hover, small arrow | Everything else |

All buttons have a 48 px minimum height and a visible focus ring. Footer and inline links get a 44 px tap area.

### Panels (replaces "cards")

| Type | Look | Use |
|---|---|---|
| Plain panel | Flat, 1 px hairline, 16 px radius, no shadow, no glow, no tilt | Default container |
| Featured panel | Same, plus the 1 px ribbon light edge on top | One per section at most |
| Divided list | No boxes; rows split by hairlines | Features, steps, FAQs, specs |

The current glowing, tilted `j-card3d` is retired except inside the two offer scenes.

### Signature components

| Component | Description |
|---|---|
| **Outcome Shift** (kept, enlarged) | Old value struck through, the Line as the arrow, new value in figure size, source link to the case study |
| **Chapter header** (*new*) | Mono number and name, H2, optional one-line lead |
| **Artefact frame** (*new*) | A real screen or diagram in a thin device or window frame, with a mono caption stating what it is and which project |
| **Proof quote** (*new*) | A quote attached to the case study it came from, with role, industry and a link. Never free-floating. |
| **Step track** (*new*) | The four process steps on the Line, each with its price and duration |
| **Price table** | Compact comparison on desktop, tabs on phones |
| **Booking panel** (*new*) | In-page scheduler in brand colours, replacing the white modal |

### Navigation

- Desktop: logo · **Work** · **Services** · **Pricing** · **About** · (Lab, when it has content) · primary button.
- "Contact" and "Blog" move to the footer; the button is the contact path.
- Header is 64 px, transparent over the hero, solid after scrolling.
- Phone: full-screen menu (kept). Sticky action bar on phones only, hidden on tablets and whenever the cookie banner is open.

### Footer

One tagline, one address block that is true, real social links only, a newsletter line that says what subscribers get, and links to Blog, Careers, Evaluation tool and Privacy.

### Forms

- Two steps. Step one: name, email, what you need (one free-text field). Step two, optional: budget, timing, company, phone.
- Inline validation, clear success state stating who replies and when.
- Consent checkbox stays; the marketing opt-in moves to step two.

## E5. Imagery and icons

| Kind | Rule |
|---|---|
| Product screens | Real screens from delivered work, with client permission, sensitive data blurred |
| Diagrams | Drawn in SVG from the real system (the state machine and billing pipeline diagrams already exist) |
| People | Real photographs of the founder and team, one consistent treatment |
| Blog images | Replace AI-generated thumbnails with a generated typographic cover in brand style |
| Icons | Lucide, 1.5 px stroke, no gradient tiles behind them |
| Never | Stock photos, AI illustrations, invented dashboards, emoji |

## E6. Page blueprints

### Home: seven chapters

| # | Ground | Chapter | Content |
|---|---|---|---|
| 1 | Night | Hero | A headline that states the offer, one line of support, primary and secondary buttons, the ribbon. One real result beneath. |
| 2 | Night | Proof | Three Outcome Shifts, large, each linking to its source |
| 3 | Paper | Two ways in | "I run a service business" and "I'm building a product": two doors, each with a real artefact |
| 4 | Night | One story | A featured case study told visually: before, system diagram, after, the client's quote |
| 5 | Paper | How it works, and what it costs | The step track with prices on it; link to full pricing |
| 6 | Paper | Questions | Promises and FAQ merged into four to six honest answers |
| 7 | Night | The call | Booking panel, in page |

Blog teaser and stand-alone testimonials are removed from the home page.

### Service page

Hero with a promise as the `<h1>` → who it is for → **a walkthrough of one real example** → what is included and price → the matching proof → process → service-specific questions → booking.

### Case study

Result first, as a full-width Outcome Shift → client and context → the problem → the system, with diagram and screens → decisions and trade-offs → what we learned → client quote → link to the matching service and booking.

### Other pages

| Page | Blueprint |
|---|---|
| Pricing | Paper ground, compact table, custom-quote panel, questions, booking |
| About | Founder's note with photograph, how we work, the team, true facts only, booking |
| Work index | Large rows, one per project, result figure leading each row |
| Blog | Paper ground, one article template, typographic covers, named author |
| Contact | Booking panel first, two-step brief form second, true contact details |
| Lab | Only when real items exist: the evaluation tool, build notes, experiments |
