# G. SEO audit and roadmap

## G1. Current state

### What is already right

| Item | State |
|---|---|
| Rendering | Every page is static HTML; content is in the source, not injected by script |
| Titles and descriptions | Unique on all 19 routes; titles 24 to 82 characters, descriptions 101 to 157 |
| Canonical URLs | Present and self-referencing on every page |
| Headings | One `<h1>` per page; logical `<h2>`/`<h3>` order |
| `robots.txt` | Allows everything except `/api/`; points to the sitemap |
| Sitemap | `/sitemap.xml`, 24 URLs, generated from the same data as the pages |
| Redirects | 13 permanent redirects from retired URLs to their replacements |
| Structured data | Organization (site-wide), ProfessionalService and Service with offers (home), FAQPage, TechArticle and BreadcrumbList (case studies), BlogPosting (articles) |
| Speed | Lighthouse mobile performance 100; layout shift 0 |
| AI crawlers | `llms.txt` present and accurate |
| 404 | Returns a real 404 and is marked `noindex` |

### What is wrong or missing

| # | Finding | Severity | Detail |
|---|---|---|---|
| S1 | **Country-code domain** | High | `.in` is treated by Google as targeting India. Target buyers are in the US, Australia and the UK. This cannot be changed in Search Console. |
| S2 | **Inconsistent name, address and phone** | High | Structured data and footer: Serampore, West Bengal. Home and contact: "Atlanta and Kolkata". Phone: India only. Search engines and directories need one consistent set. |
| S3 | **Organization data is out of date** | High | Description still reads "leading IT consulting and software development company offering web, mobile, AI/ML, cloud...". Logo points to the touch icon. No Atlanta location. |
| S4 | **Same FAQ on six pages** | High | Identical six questions and FAQPage data on Home, Pricing and four service pages. |
| S5 | **Thin topical coverage** | High | Four service pages. No pages for the specific jobs buyers search for (an industry, a use case, a cost question). |
| S6 | **Blog off-topic and dated** | High | Six of eight posts are generic 2025 pieces. Two have "2025" in the title. Author is "Jenisys" with no person behind it. |
| S7 | **Weak experience and authority signals** | High | No named author, founder or team page; unsourced statistics in articles; anonymous testimonials. |
| S8 | **Service `<h1>` is a label** | Medium | "AI Automation" rather than what the buyer searches or wants. |
| S9 | **Sparse internal linking** | Medium | Service pages do not link to related case studies or articles; case studies do not link to the matching service; `/evaluate` is orphaned. |
| S10 | **One social image for all pages** | Medium | Shared links look identical regardless of page. |
| S11 | **Breadcrumb data only on case studies** | Medium | Missing on service and blog pages. |
| S12 | **Default site title is stale** | Low | Root fallback reads "AI Software Agency & Enterprise Custom Solutions". |
| S13 | **Search Console housekeeping** | Low | New sitemap was still "Couldn't fetch" on 14 November; old `sitemap-0.xml` entry should be removed. |
| S14 | **Unknowns** | n/a | Backlinks, ranking keywords, real-user speed data and search demand have not been measured. |

A note on FAQ markup: since 2023 Google shows FAQ rich results mainly for government and health sites. The markup still helps AI answer engines read the page, so keep it, but do not expect expanded search listings from it.

## G2. Roadmap

### Stage 1: correct the facts (Phase 0 of the build)

| Action | Needs from you |
|---|---|
| Decide the one true set of business details: legal name, addresses, phone numbers, hours with time zone | The real details |
| Update Organization data: description, logo file, both locations, founder, social profiles | Real social URLs |
| Fix or remove the Facebook link | Page URL, or confirm removal |
| Update the default title and the privacy description | Approval of wording |
| Remove the old sitemap entry in Search Console; confirm the new one reads 24 pages | Two clicks in Search Console |
| Set up measurement: Search Console query export, a keyword and backlink baseline | Permission to create an OpenSEO project |
| Decide on the domain (see G3) | A decision |

### Stage 2: fix the template issues (Phases 2 to 4)

| Action | Result |
|---|---|
| Rewrite each service `<h1>` as a promise that contains the search phrase | Better relevance and click-through |
| Write four to six questions **per service**; keep general questions on Pricing only | No duplicate FAQ |
| Add breadcrumb data to service and blog pages | Cleaner search listings |
| Generate a social image per page from its title and key figure | Distinct, branded shares |
| Add "Related work" and "Related reading" blocks to service pages; link each case study to its service | Stronger internal linking |
| Link `/evaluate` from the footer and from service pages | Orphan fixed |
| Add `Person` data for the founder and each named author | Authority signals |

### Stage 3: build topical depth (Phase 7)

Every page below needs real content. None is published as a thin placeholder. Search volumes must be checked before committing; the list is a hypothesis based on the two buyer groups.

| Cluster | Candidate pages | Buyer |
|---|---|---|
| AI automation by industry | Accounting and bookkeeping firms · real estate agencies · clinics · law firms · recruiters · trades | Service businesses |
| AI automation by job | Lead follow-up · invoice and document processing · appointment booking · reporting | Service businesses |
| Cost and comparison | What an AI automation costs · Zapier or Make versus custom · what an MVP costs · agency versus freelancer versus in-house | Both |
| MVP by type | SaaS MVP · marketplace MVP · mobile app MVP · adding AI to a product | Founders |
| Proof | One new case study per offer (see file 06) | Both |

Start with four pages: the two industries where you have real experience, and the two cost pages. Expand only when those rank or convert.

### Stage 4: the blog

| Post | Recommendation |
|---|---|
| AI Automation for Small Business: costs and returns (2026) | **Keep.** Add sources for every figure, or mark figures as illustrative. |
| NSW SOPA: why contractors lose money (2026) | **Keep.** Link to the NSW case study. |
| Cloud Migration Strategies for Startups | Rewrite for founders, or redirect to MVP Development |
| A Guide to Building Scalable React Applications | Rewrite as a practical founder guide, or redirect |
| Best Practices for Modern API Design | Redirect to MVP Development |
| Digital Transformation in Fortune 500 Companies | Redirect to the blog index |
| The Future of AI in Business by 2025 | Redirect to AI Automation |
| Top Cybersecurity Trends for CTOs in 2025 | Redirect to the blog index |

Redirect rather than delete, so any existing links keep their value. Move articles from eight bespoke components to Markdown files rendered by one template. Add a named author with a photograph and short biography.

### Stage 5: off-site (yours to do; I can prepare the text)

| Action | Why |
|---|---|
| Google Business Profile for each real office | Local visibility and reviews |
| Clutch, GoodFirms and DesignRush profiles | Where agency buyers compare; strong links |
| LinkedIn company page kept current; founder posts linking to case studies | Authority and referral traffic |
| Bing Webmaster Tools | Also feeds several AI assistants |
| Ask both case-study clients for a review or a named quote | Real proof on and off the site |

## G3. The domain question

| Option | Benefit | Cost |
|---|---|---|
| Keep `jenisys.in` | No work; existing history kept | A lasting handicap in US, Australian and UK results |
| Move to a generic domain (`.com`, `.co`, `.io`, `.dev`) with page-by-page redirects | Removes the country signal; reads as international | Domain cost; a few weeks of ranking fluctuation; needs a careful migration |
| Generic domain for the site, keep `.in` redirecting | Same as above, and keeps old links working | Same as above |

I recommend moving if a suitable generic domain is available. The site has little ranking history to lose, so now is the cheapest time. I have not checked availability.

## G4. Speed and Core Web Vitals

| Metric | Now (lab) | Target | Risk in the redesign |
|---|---|---|---|
| Largest Contentful Paint | 0.9 to 1.1 s | Under 1.8 s on 4G | Real product images in heroes: must be sized, AVIF, and prioritised |
| Layout shift | 0 | Under 0.05 | Booking panel and images need reserved space |
| Blocking time | 40 to 60 ms | Under 150 ms | Low, provided no animation library is added |
| JavaScript | 195 to 255 KB | No increase; reduce by removing Framer Motion and unused code | See file 04 |
| CSS | 132 KB raw, 22 KB compressed | Under 15 KB compressed | Deleting legacy tokens |

Lab figures are from a local build. Real-user figures should be read from Vercel Speed Insights after each phase.
