# B. Strengths worth preserving, and C. Problems ranked

## B. What is already excellent

Do not redesign these. Build on them.

| Strength | Why it matters | Where |
|---|---|---|
| **The Outcome Shift** (~~18 days~~ → 6 days) | Real, specific, verifiable results, shown as a designed object. It is the one element no competitor can copy. | Home, service pages, case studies |
| **Case study writing** | Candid and technical: constraints, trade-offs, what went wrong. It proves competence better than any claim. | `/case-study/*` |
| **Public fixed prices** | Rare among agencies. Removes the biggest reason a small buyer does not enquire. | `/pricing`, `src/lib/offers.js` |
| **Logo-derived colour** | Navy to blue to cyan comes from the mark itself, plus one amber for action. It is ownable. | Brand tokens |
| **Typeface choice** | Bricolage Grotesque has character; Geist and Geist Mono read as engineering. Already self-hosted. | `layout.js` |
| **Speed** | Lighthouse 100 on mobile, zero layout shift, everything prerendered. | Whole site |
| **The hand-written WebGL ribbon** | 3 KB, no library, pauses off-screen, respects reduced motion. The right way to do a hero effect. | `RibbonCanvas.js` |
| **Technical SEO base** | Canonicals, sitemap, robots, structured data, redirects from old URLs, `llms.txt`. | `seo.js`, `sitemap.ts` |
| **Single source of truth for offers** | Prices and offer copy live in one file and flow to every page and to structured data. | `src/lib/offers.js` |
| **Privacy posture** | Trackers load only after consent. Database locked down. | `ConsentScripts.js`, Supabase |
| **Accessibility base** | Skip link, focus rings, labelled forms, reduced-motion support. | Whole site |
| **The evaluation tool** | A working product, not a brochure page. | `/evaluate` |

## C. Problems, ranked by severity and business impact

Severity: **Critical** loses money or trust now. **High** materially limits conversion or ranking. **Medium** weakens quality. **Low** is polish.

### Critical

| # | Problem | Evidence | Business impact |
|---|---|---|---|
| C1 | **Enquiries are not announced to anyone.** | Contact rows save to Supabase, but the notification email fails with a Gmail login error (still unresolved from the previous round). | A lead can sit unseen for days. Speed of reply is the largest factor in winning small projects. |
| C2 | **Newsletter sign-ups are discarded.** | `/api/newsletter` only sends an email; it stores nothing. With email failing, the address is lost. | Every subscriber so far may be gone. |
| C3 | **Unverified claims and placeholder-looking testimonials.** | About: "50+", "99%", "15+", "24/7"; "TechCorp", "StartupX", "Enterprise Inc". Careers: two staff quotes, equity and health benefits. Blog: unsourced statistics. | A careful buyer who spots one invented detail discounts everything else, including the real case studies. Also a legal exposure under advertising rules. |
| C4 | **The proof does not match the offer.** | Offers: small-business automation and founder MVPs. Proof: a government registry (7 months) and a SaaS billing platform (5 months). | The visitor cannot see an example of what they would buy. The strongest assets argue for a different service. |

### High

| # | Problem | Evidence | Business impact |
|---|---|---|---|
| H1 | **No memorable identity.** | One navy surface for the full page; glow cards; grid background; mono labels. Sections 4 and 6 of the home page look the same. | The site is forgettable. "Premium" is carried by distinctiveness and restraint, and neither is present. |
| H2 | **No people, no real imagery.** | Zero photographs. Visuals are abstract skeleton screens. No founder, team or client. | Buyers of services buy people. Abstract visuals read as "template". |
| H3 | **The hero does not say what Jenisys does.** | "Ship products that actually move the needle." The offer is in 13 px text above it. | Visitors decide in seconds whether they are in the right place. |
| H4 | **Positioning conflict.** | Brief: premium lab. Site: price-led, from $499. Footer, title and brief carry three different taglines. | Mixed signals attract neither premium nor budget buyers. |
| H5 | **Six labels for one action.** | "Get Started", "Start a Project", "Get Started Today", "Start Your Project", "Start a conversation", "Book a free call". | Unclear next step; weakens the main button. |
| H6 | **The contact form is long.** | Nine fields and two checkboxes; on phones it starts three screens down. | Each extra field lowers completion. |
| H7 | **No conversion tracking.** | No events for form submit, booking open or key clicks. | Nothing can be improved because nothing is measured. |
| H8 | **Blog articles are a different, older design.** | White pages, blue buttons, eight bespoke components. | Breaks the brand at the point of highest reading attention; expensive to maintain. |
| H9 | **`.in` domain for a US, Australia and UK audience.** | Google treats `.in` as targeting India and this cannot be overridden. | A structural ceiling on rankings in target markets. |
| H10 | **Inconsistent business facts.** | Serampore in the footer and structured data; "Atlanta and Kolkata" elsewhere; Indian phone only; three taglines. | Hurts local search trust signals and looks careless. |
| H11 | **Identical FAQ on six pages.** | Same six questions and structured data on Home, Pricing and all four service pages. | Duplicate content; wasted chance to answer service-specific objections. |
| H12 | **Thin topical coverage.** | Four service pages; six of eight blog posts off-topic. | Few pages can rank for what buyers search. |

### Medium

| # | Problem | Evidence |
|---|---|---|
| M1 | Home page is too long | 12 sections; about 18 screens on a phone |
| M2 | Case study pages have no visuals and bury the result | Result is section 8 of 9 |
| M3 | Service page `<h1>` is only the service name | "AI Automation" |
| M4 | Decorative 3D on text cards | `rotateX` tilt on How it works, Promises and outcome cards adds nothing and softens text |
| M5 | Hero has no fallback picture | Right half empty without WebGL; no visual at all on phones |
| M6 | Anonymous testimonials | First name and role only |
| M7 | Generic copy survives | "cutting-edge", "world-class", "leverage" in eight files |
| M8 | Cookie banner competes with the hero | Blue "Accept All" button; covers a third of the phone screen |
| M9 | Booking modal is off-brand and not accessible | White box, personal Calendly account, no focus trap |
| M10 | Evaluation tool is orphaned and captures nothing | Linked from one blog post |
| M11 | One social image for every page | `og-image.jpg` everywhere |
| M12 | AI-generated blog thumbnails in mixed styles | Seven styles, baked-in text |
| M13 | Tablet treated as a wide phone | Sticky bar overlaps headings at 820 px |
| M14 | Outdated structured data description | Still says "leading IT consulting... web, mobile, AI/ML, cloud" |

### Low

| # | Problem |
|---|---|
| L1 | 13 unused packages and about 14 MB of unused public files |
| L2 | Three token systems in one stylesheet; legacy Tailwind config with retired colours |
| L3 | Small tap targets in the footer; heavy use of 10 to 12 px text |
| L4 | Invalid `"supermarket"` browserslist entry |
| L5 | Privacy policy description is short and does not name the tools in use |
| L6 | 404 page uses the retired gradient-text treatment |
| L7 | Facebook link points to `facebook.com` |
| L8 | Careers page "Last updated" is 15 months old |
