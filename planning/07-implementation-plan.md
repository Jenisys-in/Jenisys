# I. Prioritised implementation plan

## How the work is run

- Each phase is a separate branch and pull request, reviewed by you on a Vercel preview link before it is merged.
- Copy changes are listed in the pull request and need your approval.
- Each phase ends with the test pass in file 08.
- A phase does not start until the inputs it lists have arrived. Phases with no outstanding inputs can go ahead.

## Overview

| Phase | Name | Depends on you for | Size |
|---|---|---|---|
| 0 | Stop the leaks, tell the truth | Email credential; answers on claims; true business details | Small |
| 1 | Design system v2 | Approval of direction (file 03) | Medium |
| 2 | Home page | Hero wording approval | Medium |
| 3 | Services and pricing | Service headline approval; any real screens | Medium |
| 4 | Work and proof | Screens, permissions, material for new case studies | Medium |
| 5 | Contact, booking, evaluation | Scheduler account choice | Small |
| 6 | About, careers, blog system | Photographs, biographies, blog decisions | Medium |
| 7 | SEO content and off-site | Keyword data go-ahead; listings | Ongoing |

Sizes are relative: small is a few focused changes, medium is a full page family.

---

## Phase 0: stop the leaks, tell the truth

No visual redesign. Highest return for least risk.

| # | Task | Done when |
|---|---|---|
| 0.1 | Fix enquiry notifications | A test enquiry reaches your inbox within a minute |
| 0.2 | Store newsletter sign-ups in Supabase | A test sign-up appears as a row |
| 0.3 | Add conversion events (call booked, brief sent, pricing viewed, evaluation finished, newsletter joined) | Events visible in Vercel Analytics |
| 0.4 | Remove or correct every unconfirmed claim (file 06, section 3) | No unconfirmed claim remains on the live site |
| 0.5 | One set of business details in footer, contact page and structured data | All three match |
| 0.6 | Update Organization data, default title, Facebook link | Structured data validates; no dead social link |
| 0.7 | Unify the button label to "Book a free call" / "Send a brief" | One primary label site-wide |
| 0.8 | Remove 13 unused packages, unused public files, dead components, the invalid browserslist entry | Build passes; repository about 14 MB lighter |
| 0.9 | Search Console clean-up | New sitemap reads 24 pages; old entry removed |

## Phase 1: design system v2

| # | Task | Done when |
|---|---|---|
| 1.1 | Add Paper tokens; delete the two legacy token sets and the old Tailwind config | One token source; stylesheet under 15 KB compressed |
| 1.2 | Type scale and spacing scale as tokens; no text under 12 px | Scale documented; lint check for small text |
| 1.3 | Components: buttons, plain and featured panels, divided list, chapter header, Outcome Shift v2, artefact frame, proof quote, step track, price table | Each shown on an internal `/styleguide` page (not indexed) on both grounds |
| 1.4 | Navigation and footer rebuild | Five header items plus the button; true footer |
| 1.5 | Cookie banner restyle | No blue button; does not cover the hero on phones |
| 1.6 | The Line: reusable SVG component with scroll drawing and a still state | Works with reduced motion and without scroll-timeline support |
| 1.7 | Tablet layouts for shared components | Reviewed at 820 px |
| 1.8 | Update `docs/brand/brand-system.md` to v2 | Brand document matches the build |

The style guide page is the approval point for this phase: you see every component before any page uses it.

## Phase 2: home page

| # | Task | Done when |
|---|---|---|
| 2.1 | Hero: approved headline, ribbon with still-image fallback, one result beneath | First screen states the offer on phone and desktop; picture present without WebGL |
| 2.2 | Proof chapter: enlarged Outcome Shifts | Each links to its source |
| 2.3 | Two doors chapter (Paper) | Each door leads to its service with relevant proof |
| 2.4 | Featured story chapter | One case study told with diagram and quote |
| 2.5 | Process and price chapter: step track | Replaces three current sections |
| 2.6 | Questions chapter: promises and FAQ merged | Four to six answers |
| 2.7 | In-page booking chapter | Scheduler loads on demand, in brand style |
| 2.8 | Remove blog teaser and stand-alone testimonials | Page is seven chapters; phone length cut by about 40% |

## Phase 3: services and pricing

| # | Task | Done when |
|---|---|---|
| 3.1 | Service template: promise headline, who it is for, walkthrough, inclusions and price, matching proof, process, own questions, booking | All four pages on the new template |
| 3.2 | Real walkthrough visual for AI Automation and MVP Development | Uses real screens, or the clearly labelled diagram until screens arrive |
| 3.3 | Replace Discovery Sprint and Support scenes with real deliverables | A sample scope document and a sample monthly report |
| 3.4 | Service-specific questions and structured data | No FAQ repeated across pages |
| 3.5 | Services index shows the relationship: sprint → build → support | Not four equal boxes |
| 3.6 | Pricing: compact table, tabs on phones, "what happens next" strip | Phone length roughly halved |
| 3.7 | Breadcrumb data; related work and reading blocks | Validated |

## Phase 4: work and proof

| # | Task | Done when |
|---|---|---|
| 4.1 | Case study template: result first, diagram and screens, decisions, quote, link to service | Both existing studies migrated |
| 4.2 | Rename navigation to "Work"; keep URLs or redirect | No broken links |
| 4.3 | Work index as large rows led by the result figure | Reviewed |
| 4.4 | New case study for AI Automation | Published with real, confirmed figures |
| 4.5 | New case study or live demonstration for MVP Development | Published |
| 4.6 | Attach each home-page quote to its project, with permission | No free-floating anonymous quotes |

4.4 and 4.5 wait on real material. The rest of the phase does not.

## Phase 5: contact, booking, evaluation

| # | Task | Done when |
|---|---|---|
| 5.1 | Booking panel replaces the white modal; business scheduling account | Keyboard accessible; brand styled; event tracked |
| 5.2 | Two-step brief form | Step one has three fields; completion tracked per step |
| 5.3 | Confirmation message and email to the enquirer | States who replies and when |
| 5.4 | Contact page: scheduler first, true details with time zone | Reviewed on phone |
| 5.5 | Evaluation tool: new styling, footer and service links, optional emailed report, next step by result; remove Framer Motion | About 60 KB less JavaScript on that route |

## Phase 6: about, careers, blog system

| # | Task | Done when |
|---|---|---|
| 6.1 | About: founder's note, team, how we work, true facts | No generic or unconfirmed line remains |
| 6.2 | Careers: confirmed benefits only; current date; consistent locations | Reviewed |
| 6.3 | Blog: one article template on Paper; articles moved to Markdown files | Eight bespoke components deleted |
| 6.4 | Named author with biography and `Person` data | On every article |
| 6.5 | Typographic covers and per-page social images | No AI-generated thumbnails |
| 6.6 | Apply the per-post decisions (keep, rewrite, redirect) | Redirects tested |
| 6.7 | Lab page, if real content exists | Launched, or deferred by decision |
| 6.8 | Privacy policy names the tools actually in use | Reviewed by you |
| 6.9 | 404 page in the new system | Reviewed |

## Phase 7: SEO content and off-site (ongoing)

| # | Task | Done when |
|---|---|---|
| 7.1 | Keyword and backlink baseline | Report saved in `planning/` |
| 7.2 | First four depth pages (two industries, two cost pages) | Published with real content |
| 7.3 | Business profiles, directory listings, review requests | Live, with matching details |
| 7.4 | Domain move, if chosen | Redirect map tested; Search Console change of address filed |
| 7.5 | Monthly check: rankings, enquiries by source, Core Web Vitals | A short report each month |

---

## What can start immediately

These need nothing further from you beyond approval of this plan:

- 0.2, 0.3, 0.7, 0.8 (storage, tracking, labels, clean-up)
- All of Phase 1 once the direction is approved
- 4.1 to 4.3 (case study template with the diagrams that already exist)

## What is blocked on you

| Blocked item | Needs |
|---|---|
| 0.1 | Email credential |
| 0.4, 6.1, 6.2 | Answers on claims |
| 0.5, 0.6 | True business details |
| 2.1, 3.1 | Approval of headlines |
| 3.2, 4.1 visuals | Real screens and permission |
| 4.4, 4.5 | Material for new proof |
| 6.1, 6.4 | Photographs and biographies |
| 7.4 | Domain decision |
