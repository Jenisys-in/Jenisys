# Jenisys website: audit and strategy (Phase 1)

Date: 16 November 2026. Scope: audit and plan only. No production source file was changed.

## How to read this

| File | Covers | Brief item |
|---|---|---|
| [01-page-audit.md](01-page-audit.md) | Architecture, every public page, section by section | A |
| [02-strengths-and-problems.md](02-strengths-and-problems.md) | What to keep, and problems ranked by severity | B, C |
| [03-design-direction.md](03-design-direction.md) | Design direction, principles and the design system | D, E |
| [04-motion-and-3d.md](04-motion-and-3d.md) | Where motion and 3D earn their place, and where they don't | F |
| [05-seo-roadmap.md](05-seo-roadmap.md) | Technical SEO findings and the roadmap | G |
| [06-conversion-and-content.md](06-conversion-and-content.md) | Messaging, trust, conversion journey, content | H |
| [07-implementation-plan.md](07-implementation-plan.md) | Phased build plan with acceptance checks | I |
| [08-risks-and-testing.md](08-risks-and-testing.md) | Risks, dependencies, test plan | J |

## The verdict in five lines

1. **The engineering is already strong.** Mobile Lighthouse scores 100 for performance and SEO on the six pages tested, with zero layout shift. Keep the stack.
2. **The design is competent but not memorable.** It is one dark navy surface from top to bottom, with glowing cards, a grid background and mono labels. That is the common "dark developer tool" look. Nothing on the page could only be Jenisys.
3. **The proof does not match the offer.** The site sells $1,500 AI automations and $7,500 MVPs. Both case studies are large custom platforms (a government registry and a SaaS billing system). A buyer of either offer sees no example of the thing they are buying.
4. **Trust is undermined by unverified claims.** The About page shows "50+ projects, 99% satisfaction" and testimonials from "TechCorp", "StartupX" and "Enterprise Inc". The Careers page quotes two staff members. None of this has been confirmed by you. One fake-looking testimonial costs more trust than ten real ones earn.
5. **Leads can be lost today.** Contact enquiries are saved to the database, but the notification email fails, so nobody is told. Newsletter sign-ups are not saved anywhere. This is the first thing to fix, before any design work.

## What I recommend

- **Direction: "Signal on Paper."** Keep the logo-derived ribbon, the type and the amber action colour. Add a second, light "Paper" ground so the page has rhythm, and make one continuous line of light the storytelling device: tangled at the top (the manual problem), ordered at the bottom (the result). Details in file 03.
- **No Three.js, React Three Fiber or GSAP.** The existing hand-written WebGL ribbon is 3 KB and is the right "one big moment". Everything else is CSS and SVG. Details in file 04.
- **Cut the home page from 12 sections to 7 chapters**, each making one point, ending in one action.
- **One primary action site-wide: "Book a free call."** Today there are six different button labels for the same step.

## Decisions I need from you

| # | Decision | My recommendation |
|---|---|---|
| 1 | **Positioning.** "Premium lab" and "from $499" pull in opposite directions. | Keep fixed, public prices (they convert), but lead with results, not price. Price moves from the hero to the pricing chapter. |
| 2 | **Tagline.** "Transforming Technology Into Business Advantage". | It is clear but generic; many agencies use near-identical lines. Shorten to **"Technology, turned into advantage."** Options in file 06. |
| 3 | **Design direction** "Signal on Paper" (file 03). | Approve, or tell me what to change. |
| 4 | **Unverified claims** (list in file 06, section 3). | For each: confirm it is true, correct it, or I remove it. |
| 5 | **Domain.** `.in` tells Google the site targets India. Your clients are in the US, Australia and the UK. | Consider a `.com`, `.co` or `.io` with a full redirect. This is a business decision, not a design one. |
| 6 | **"Lab" content.** A lab needs real experiments to show. | Launch a Lab page only with real items. The Technical Fit Evaluation tool is the first. Tell me what else exists. |
| 7 | **Assets only you can supply.** | Real team photos, product screenshots from delivered work, client permission for names or logos, and the true office addresses. |
| 8 | **Old blog posts.** Six of eight are generic 2025 pieces unrelated to your buyers. | Rewrite two, redirect four. Per-post list in file 05. |

## Implementation sequence (summary)

| Phase | What | Why first |
|---|---|---|
| 0 | Stop lead loss, confirm or remove claims, fix address and schema facts, add conversion tracking, delete dead code | Protects revenue and trust; no design risk |
| 1 | Design system v2: Paper ground, type scale, components, navigation, footer, one call to action | Everything else is built from it |
| 2 | Home page as a seven-chapter story | Highest traffic, highest impact |
| 3 | Service pages and pricing | Where buying decisions are made |
| 4 | Work: case study redesign plus new proof for both offers | Closes the proof gap |
| 5 | Contact, booking and the evaluation tool | The conversion step itself |
| 6 | About, careers, blog system and article template | Credibility and consistency |
| 7 | SEO content expansion and off-site listings | Compounding growth |

Each phase ships on its own and is reviewed by you before the next starts. Copy is never changed without your approval.

## How the audit was done, and its limits

- Read the whole repository (162 tracked files), built it, and ran it locally as a production build.
- Captured all 19 routes at desktop (1440), tablet (820) and phone (390) widths: 114 screenshots.
- Measured headings, metadata, structured data, links, tap targets, page weight and overflow on every page.
- Ran Lighthouse (simulated mobile throttling) on six key pages.
- **Not measured:** real-user Core Web Vitals, Search Console data, backlinks and keyword search volumes. The OpenSEO connector has no project set up; I can create one if you want real keyword and backlink data.
- **Not seen:** the WebGL hero ribbon. The test browser has no graphics card and the ribbon correctly switches itself off there, so I judged the hero without it. I also could not test on physical phones.
