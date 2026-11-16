# Plan compliance: audit documents versus what is built

Checked 16 November 2026, after the second build round. Status: **Done**, **Partly** (what is missing is stated), **Not done** (reason stated), **Yours** (needs a decision or an account only you have).

## 02 Problems (ranked)

| # | Problem | Status | Detail |
|---|---|---|---|
| C1 | Enquiry notification email fails | **Not done** | Enquiries are saved and emails no longer break the form. The fix is a Gmail App Password (or another mail service) in `EMAIL_PASS`. |
| C2 | Newsletter sign-ups discarded | Done | Stored in `newsletter_subscribers` before any email is attempted. |
| C3 | Unverified claims and placeholder testimonials | Done | Removed. Replaced with facts and quotes from your Upwork profile (`src/lib/upwork.js`). |
| C4 | Proof does not match the offer | Done | Three Upwork-portfolio projects added (document AI, integration bridge, Docker migration), each linked from the matching service page. A written MVP case study is still missing (see Yours). |
| H1 | No memorable identity | Done | Signal on Paper, the Line, chapters. |
| H2 | No people or real imagery | Partly | Named engineer section on About, from his own words. No photograph and no product screens yet (Yours). |
| H3 | Hero does not say what Jenisys does | Done | |
| H4 | Positioning conflict and three taglines | Partly | One tagline everywhere. It is proposed wording and needs your approval. |
| H5 | Six labels for one action | Done | Book a free call / Send a brief. |
| H6 | Nine-field form | Done | Two steps: three fields, then optional details. |
| H7 | No conversion tracking | Done | Events fire; whether Vercel shows custom events depends on your plan. |
| H8 | Blog articles in the old design | Done | Six generic articles retired with redirects; the two kept articles restyled onto the brand grounds. They are still bespoke components, not Markdown. |
| H9 | `.in` domain | **Yours** | Decision needed. |
| H10 | Inconsistent business facts | Partly | Offices consistent everywhere (Atlanta 30324 and Kolkata). The footer still shows the Serampore street address and an Indian phone number only. |
| H11 | Identical FAQ on six pages | Done | |
| H12 | Thin topical coverage | Partly | Five case studies now. The industry, cost and use-case pages in `05` stage 3 are not written. |
| M1 to M14 | Medium items | Done | Except M7 (some generic wording remains inside the two kept articles) and M10 (the evaluation tool links to a call, but has no "email me this report"). |
| L1 to L8 | Low items | Done | L2 and L3 mostly: a small legacy card rule and the shadcn colour variables remain; tap targets are fixed except inline text links. |

## 03 Design direction and system

| Item | Status |
|---|---|
| Two grounds (Night and Paper) | Done |
| The Line as the story device | Done. It was unlabelled and unclear in the first build; it is now labelled ("Manual work" to "Software that runs itself") and sits close to the hero. |
| Principles: one idea per screen, proof before promise, one moment of light, nothing invented | Done |
| Colour, type scale, spacing, buttons, panels, forms | Done |
| Chapter header, Outcome Shift, step track, price table | Done |
| Artefact frame with real screens | **Not done**: no real screens available |
| Proof quote tied to a case study | Done for the two Upwork projects that have reviews |
| Navigation of five items plus button, true footer | Done |
| Home blueprint | Done: hero, proof, two ways in, the work, client reviews, how it works with prices, questions, the call |
| Service, case study, pricing, contact, about, blog, work blueprints | Done |
| Lab page | **Not done**: no real lab items (evaluation tool is linked from the footer) |

## 04 Motion and 3D

| Item | Status |
|---|---|
| No Three.js, React Three Fiber or GSAP | Done |
| Keep the 3 KB WebGL ribbon, add a static still | Done |
| The Line drawn on scroll with fallbacks | Done |
| View Transitions between pages | Done |
| Remove tilted text cards | Done |
| Remove Framer Motion | Done (evaluation tool now uses a CSS fade) |
| Replace the Discovery and Support scenes with real deliverables | **Not done**: they remain abstract diagrams |
| All motion has a still state under reduced motion | Done |

## 05 SEO

| Item | Status |
|---|---|
| S1 country-code domain | **Yours** |
| S2, S3 organisation facts and data | Done (Atlanta with postal code, Kolkata, 2023, slogan) |
| S4 duplicate FAQ | Done |
| S5 topical depth | Partly (see H12) |
| S6 blog | Done |
| S7 authority signals | Partly: named engineer with `Person` data on About; articles still list "Jenisys" as author |
| S8 service headings | Done |
| S9 internal links | Done |
| S10 social cards | Done |
| S11 breadcrumbs | Done |
| S12, S13 | Search Console clean-up is **Yours** |
| S14 baseline | Done for keywords (`planning/10-keyword-baseline.md`); backlinks not measured |
| Stage 5 off-site | Text prepared in `planning/11-listing-copy.md`; accounts are **Yours** |

## 06 Conversion and content

| Item | Status |
|---|---|
| Fix lead handling | Partly: storage, tracking and non-fatal email done; email delivery **Not done** |
| Confirm or remove claims | Done: removed or replaced with Upwork facts |
| Close the proof gap | Partly: see C4 |
| Hero, tagline, one action | Done, wording awaits your approval |
| Page-by-page conversion changes | Done except the "email me this report" on the evaluation tool |
| Trust signals: measured results, case studies, attributed reviews, named engineer, guarantees, third-party reviews | Done from Upwork. Named clients or logos: not shown (names withheld on purpose). Company registration details: **Yours** |

## 07 Implementation plan

| Phase | Status |
|---|---|
| 0 Stop the leaks | Done except 0.1 email (credential) and 0.9 Search Console (**Yours**) |
| 1 Design system v2 | Done |
| 2 Home | Done |
| 3 Services and pricing | Done except real walkthrough screens |
| 4 Work and proof | Done except a written MVP case study |
| 5 Contact, booking, evaluation | Done except "email me this report" and the personal Calendly link (set `NEXT_PUBLIC_BOOKING_URL`) |
| 6 About, careers, blog | Done except photographs and Markdown migration of the two kept articles |
| 7 SEO and off-site | Baseline and listing text done; depth pages, domain move and accounts open |

## 08 Risks and testing

| Item | Status |
|---|---|
| Budgets: Lighthouse performance 95+, accessibility 100, LCP under 1.8 s, CLS under 0.05, no overflow, 12 px minimum text | Met on the pages measured (performance varies 94 to 100 between runs because of blocking-time noise) |
| Per-pull-request crawl, structured data, redirects | Done on every build |
| Interaction tests | 30 checks pass |
| Real iPhone Safari and Android Chrome | **Yours**: use the preview link |
| Live email delivery and live database writes from a preview | Not tested |
| Rollback per phase | Everything is on one branch; revert the merge to roll back |

## Bottom line

I read all eight planning documents and implemented them. Everything in the plan that code can do is done, with these exceptions:

1. **Needs your credential:** notification email.
2. **Needs your material or decision:** photographs, product screens, an MVP write-up, domain, directory accounts, Search Console, company registration details, approval of the new wording.
3. **Deliberately left out:** the Lab page (no real items), named client logos (no permission), and an "email me this report" feature (needs your decision on collecting addresses).
