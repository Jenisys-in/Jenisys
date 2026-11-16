# Build log: execution of the audit plan (16 November 2026)

Branch: `claude/charming-goldberg-dyj5cz` (not merged, not deployed to production).

## Done

| Plan item | Status |
|---|---|
| 0.2 Newsletter sign-ups stored (new `newsletter_subscribers` table, migration applied) | Done |
| 0.3 Conversion events: `call_opened`, `brief_started`, `brief_step_2`, `brief_sent`, `newsletter_joined`, `pricing_viewed`, `evaluation_finished` | Done (needs a Vercel plan that records custom events to appear in the dashboard) |
| 0.4 Unconfirmed claims removed (About statistics, timeline, placeholder-style quotes; Careers quotes and perks; home-page testimonials; "Most popular" badge) | Done (removed, not replaced) |
| 0.5, 0.6 Organization data, default title and description, slogan, locations, removed unverified opening hours and `$$$` price range, dead Facebook link removed | Done (Atlanta has city-level data only) |
| 0.7 One primary action ("Book a free call") and one secondary ("Send a brief") | Done |
| 0.8 Clean-up: 17 unused packages, 6 videos, 29 unused images, shadcn leftovers, dead components, invalid browserslist | Done |
| 1.x Design system v2: Paper ground, scoped tokens, type scale, chapter header, Outcome Shift v2, the Line, flat panels, Cta, PageHero, cookie bar, navigation, footer | Done |
| 2.x Home page rebuilt as six chapters after the hero (proof, two ways in, the work, how it works with prices, promises and questions, the call) | Done |
| 3.x Service template (promise headline, own FAQ, related work, breadcrumbs), services index as sprint → build → support, pricing page with its own FAQ | Done |
| 4.x Work index and case study template (result first, system diagram, Paper reading ground) | Done for the two existing studies. New case studies need real material. |
| 5.x Booking dialog (native `<dialog>`, focus trap, Escape), two-step brief form, tracking | Done |
| 6.x About and Careers trimmed to what is supportable; blog index restyled; 404 restyled | Done |
| SEO: per-page social cards from `/og`, breadcrumb data on services, pricing, work, blog; service-specific FAQ data; no duplicate FAQ markup | Done |

## Not done, and why

| Item | Reason |
|---|---|
| Blog article template and Markdown migration (eight bespoke components) | Large; unchanged except a contrast fix. Articles are still the old white design. |
| Typographic blog covers | Needs a decision on the covers; AI thumbnails remain. |
| Rebuilding `/evaluate` in v2 styling and removing Framer Motion | It works and is tracked; restyle deferred. |
| Real product screens, team photos, founder note, new case studies | Need your material and permissions. Slots are designed to work without them. |
| Notification email fix | Needs a Gmail App Password (or another mail service) in `EMAIL_PASS`. Not something code can fix. |
| Privacy policy update to name Supabase, Vercel Analytics, Google Analytics, Apollo, Calendly | Legal text; needs your review. |
| Domain decision, business profile and directory listings, reviews | Business decisions and accounts only you hold. |
| Legacy `--ds-*` and shadcn tokens in `global.css` | Still used by the blog articles and `/evaluate`; remove together with those. |
| Booking account | Scheduler URL is still the previous personal Calendly link; set `NEXT_PUBLIC_BOOKING_URL` to change it without a code change. |

## Wording that needs your sign-off

All of this is new copy proposed in `planning/06-conversion-and-content.md`.

- Home hero: "We turn manual work into software that runs itself." and its supporting line
- Footer tagline: "Technology, turned into advantage." and its description
- Chapter titles and leads on the home page (for example "Two systems we built, and what changed")
- Service page headlines (these reuse the existing one-line descriptions)
- Service-specific and pricing FAQ answers (every fact restates the existing pricing tiers)
- Contact page headline and two-step form text; About lead; Careers trimmed text
- Cookie bar wording: "Analytics and visitor-tracking cookies load only if you accept."

## Test results

| Check | Result |
|---|---|
| Production build | Passes, 0 type errors |
| Crawl of all 24 sitemap URLs plus a 404, at 1440, 820 and 390 px | All return 200 (404 returns 404); one `<h1>`, one `<main>`, canonical, description 80 to 160 characters, valid structured data, social card present; no horizontal overflow; no console or page errors; no broken internal links; no images missing alt text |
| Lighthouse mobile (8 pages) | Performance 98 to 100, accessibility 100, SEO 100, best practice 96 (local artefact), largest paint 0.9 to 1.1 s, layout shift 0 |
| Interaction tests (Playwright) | Cookie banner (equal buttons, 44 px), decline blocks Google Analytics, booking dialog open/Escape/scroll lock, services dropdown, newsletter validation and POST, contact two-step validation and unchanged payload, phone menu, sticky call bar after consent, redirects, social card renders as PNG |
| Not tested | Real phones and Safari; live email delivery; live Supabase writes from the preview; the WebGL ribbon on a GPU; Calendly inside the dialog (blocked in this sandbox) |

## Remaining opportunities

1. Fix email notifications, then confirm one real enquiry end to end on a preview.
2. Real product screens and a founder note: the two biggest gaps in trust.
3. Two new case studies (one per offer), then rebuild the blog around one template.
4. Domain move off `.in`, Google Business Profile, Clutch and review requests.
5. Keyword and baseline measurement (create an OpenSEO project), then the four depth pages in `05-seo-roadmap.md`.
6. Remove Framer Motion and the legacy tokens after the evaluation tool and blog are migrated; JavaScript and CSS then drop further.

## Round 2 (16 November 2026)

Added after the first report: real data from your Upwork profile (reviews, three portfolio projects, founding year, offices), a labelled Line, client-reviews chapter, three new case studies, a real About page, six generic articles retired with redirects, the two kept articles restyled, brand-card blog covers, Framer Motion and the legacy style rules removed, a privacy-policy services section, Person data, a keyword baseline, and listing copy. See `12-plan-compliance.md` for the line-by-line status.
