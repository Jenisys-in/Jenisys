# QA report: independent review of the implemented site (16 November 2026)

Scope: branch `claude/charming-goldberg-dyj5cz` at the latest commit. Reviewed against planning documents 01 to 12. Not merged, not deployed.

## Overall score: 8 / 10

| Area | Score | Reason |
|---|---|---|
| Visual system and brand | 8.5 | Two grounds, the Line, chapter numbering and one primary action are applied consistently. Premium feel is strong on desktop. |
| Responsiveness | 8 | No overflow at 320, 390, 820 and 1440 px on all pages sampled. Phone home is long (about 14,000 px). |
| Technical quality | 9 | Build clean, no runtime errors in the crawl, forms and integrations behave as before, 30 of 30 interaction checks pass. |
| Accessibility | 8.5 | One `<h1>` and `<main>` per page, labelled controls and images, no heading skips, skip link present. Inline text links are under 44 px tap height. |
| SEO and structured data | 8 | Canonicals, social cards, breadcrumbs, Person and Organization data correct; sitemap lists all 21 public pages. Limited by the .in domain and thin topical depth. |
| Performance | 8.5 | Lighthouse mobile performance 94 to 100 (run-to-run noise), LCP 0.9 to 1.1 s, layout shift 0. |
| Conversion and trust | 7 | Clear offer and one action. Held back by no real screens, no photographs and no named clients. |

## Phase 1: implementation against the plan

Full line-by-line status is in `12-plan-compliance.md`. Independent confirmation of the main items:

- Implemented as described: Paper and Night grounds, the Line, chapters, single primary action, flat panels, service template, pricing FAQ, booking dialog, two-step brief, newsletter storage, conversion events, consent gating of trackers, Upwork-sourced proof, redirects for retired URLs and articles, Person data, listing copy and keyword baseline.
- Partly implemented: the blog (two bespoke articles restyled, not migrated to Markdown), the evaluation tool (Framer Motion removed, legacy tokens still used), tagline (proposed, not approved), footer address (street address for Atlanta still missing).
- Missed or deferred: real screens, photographs, a written MVP case study, Lab page, the "email me this report" option, the domain decision.

## Phase 2: visual quality, page by page

- **Home:** Hero, proof, two ways in, the work, client reviews, process with prices, questions and call read in the intended order. The Line now has labels. Desktop and phone both checked. Phone SaaS result line wrapped awkwardly: fixed in this pass.
- **Services (AI Automation):** Promise headline, walkthrough visual, pricing, related work and own FAQ all in place. The related-work block is the right proof for the service.
- **Case study (document AI):** Result first, system details, honest note that it is shorter than the two detailed studies, link to the Upwork profile.
- **About:** Facts strip, named engineer from his own words, four client reviews, offices. The page no longer claims anything it cannot show.
- **Pricing:** Clear groups, featured tiers marked "Recommended", custom quote panel, pricing FAQ.
- **Contact:** Booking first, two-step brief. Matches the old API contract.
- **Blog index and articles:** Branded cover cards and restyled articles. The two articles still use older component code and are the least polished pages.
- **Evaluation tool:** Works, styled in the older dark-dashboard look, with a call to action after the report.

Motion: the WebGL ribbon, the Line wipe and step fades all have still states under reduced motion. No layout shift was measured from motion.

## Phase 3: technical checks

| Check | Result |
|---|---|
| Production build | Passes, no type errors |
| Crawl of 21 public URLs plus 404 at 1440, 820 and 390 px | Status codes correct; one `<h1>`; canonical; description length; valid structured data; social card; no overflow; no console or page errors; no broken internal links |
| Interaction tests | 30 of 30 pass |
| Accessibility sample (7 pages) | No images without alt, no unlabelled buttons, no heading skips |
| Lighthouse mobile | Performance 94 to 100, accessibility 100, SEO 100, best practice 96 (local artefact) |
| Redirects | Old service and blog URLs return 308 to live pages |
| Sitemap, robots, llms.txt | Present; sitemap lists all public pages |

## Phase 4: conversion and SEO

- Services are clear within the first screen, and each offer has a price and a timeline.
- Every call to action is the same action, which makes the journey easy to follow.
- Trust rests on real Upwork facts and the two long case studies. No testimonials, numbers or results were invented.
- SEO: keyword research supports the two retitled service pages. No ranking gains are claimed.

## Critical issues

None that block a merge.

## Problems ranked by severity

1. **High, external:** enquiry notification email is not delivered until `EMAIL_PASS` holds a Gmail App Password. Enquiries are saved to the database, so no lead is lost, but nobody is alerted.
2. **High, business:** no real product screens, team photographs or written MVP case study. These are the largest remaining gaps in trust.
3. **Medium, SEO:** the `.in` domain limits results outside India.
4. **Medium, legal:** the privacy policy's new services section should be reviewed by you, and the older sections still reference the previous site.
5. **Medium, consistency:** the two retained blog articles and the evaluation tool still use older component code and legacy tokens.
6. **Low, visual:** the phone home page is long; the SaaS row and hero trust line wrap on very narrow screens.
7. **Low, accessibility:** inline links inside paragraphs are under 44 px tap height. This is a judgement call; footer and navigation targets meet the minimum.
8. **Low, content:** the footer still shows the Serampore street address next to Atlanta without a street address.

## Visual improvements required

- Replace the abstract Discovery and Support scenes with real deliverables (scope document, monthly report) once available.
- Add a founder or team photograph to the About page.
- Restyle the two blog articles onto the same grounds as the rest of the site, or migrate them to the shared template.

## SEO problems

- Domain choice (see 3 above).
- Two articles still list "Jenisys" as author, with no person behind them.
- Topical depth: five case studies and four service pages; the planned industry, cost and use-case pages are not written.

## Performance problems

None blocking. Two notes: the home page ships the WebGL ribbon and client islands, which account for most of its blocking time on slower runs; and the older evaluation tool and blog articles carry the largest page weight among the pages tested.

## Conversion problems

- No real screens, photographs or named clients on the home or service pages.
- Booking window still opens the personal Calendly link (set `NEXT_PUBLIC_BOOKING_URL` to change it).
- No "email me this report" on the evaluation tool; its call to action leads to a call only.

## Fixes made in this pass

- `src/components/home/FeaturedStory.js`: the SaaS before-and-after row no longer wraps on phones.
- `planning/13-qa-report.md`: this report.

## Outstanding

Items 1, 2 and 8 above need your material or credentials. Items 3 and 4 need your decisions. Items 5 and 6 are optional polish.

## Note on the screenshots

Two images sent with messages in this session did not reach the session's image folder, so I could not inspect them. If they show something specific, please re-send them or describe the problem.
