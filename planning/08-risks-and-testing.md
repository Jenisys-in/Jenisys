# J. Risks, dependencies and testing

## J1. Risks

| # | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| R1 | Real assets do not arrive (photographs, screens, permissions, new case studies) | High | High | Every template is designed to look complete with diagrams and type alone. Asset slots are added later without layout change. No placeholder imagery ships. |
| R2 | Claims cannot be confirmed, leaving About thin | Medium | Medium | A short, true About page is stronger than a long, doubtful one. Lead with the founder's note and the two real projects. |
| R3 | A light Paper ground weakens the logo, whose glow suits dark | Medium | Medium | The mark appears only on Night areas (header over hero, footer). Paper sections use the wordmark or a flat navy mark. Verified on the style guide before any page is built. |
| R4 | The redesign slows the site | Medium | High | Hard budgets (below), checked on every pull request. No animation library. Images sized and prioritised. |
| R5 | The scroll-drawn Line performs badly or is unsupported | Low | Medium | Uses native scroll-driven animation where available, an observer fallback elsewhere, and a fully drawn still state. Compositor-only properties. |
| R6 | Rankings dip after URL or content changes | Medium | Medium | Keep URLs wherever possible; permanent redirects for every change; redirect map tested; one phase at a time so causes are traceable. |
| R7 | A domain move causes a temporary drop | Medium (if chosen) | Medium | Page-by-page redirects, Search Console change of address, done once, at a quiet time. |
| R8 | Premium positioning and visible low prices confuse buyers | Medium | Medium | Lead with results; show prices in the pricing chapter; frame small packages as entry points to larger work. Watch enquiry quality after Phase 2. |
| R9 | Changing the hero and buttons lowers conversions | Low | High | Conversion tracking goes in first (Phase 0), so before and after can be compared. Changes can be reverted per phase. |
| R10 | Copy approval becomes the bottleneck | High | Medium | All proposed wording is collected per phase in one list for a single review. |
| R11 | Scope creep back to "more effects" | Medium | Medium | The principle "one moment of light per page" is the test for every new request. |
| R12 | Third-party scheduler affects speed or privacy | Medium | Low | Loaded only on click; no cookies before consent; listed in the privacy policy. |
| R13 | Blog migration breaks article layout or loses content | Medium | Medium | Migrate the two strong posts first; compare old and new side by side; keep old components until verified. |
| R14 | Unsourced statistics in articles are challenged | Medium | Medium | Add sources or label as illustrative during migration. |
| R15 | The stated 120 KB JavaScript budget cannot be met | Certain | Low | Restate the budget honestly: the framework itself is about 170 KB. New rule: no page exceeds today's figure, and feature code stays under 40 KB. |

## J2. Dependencies

| Dependency | Needed for | Owner |
|---|---|---|
| Email credential or email service account | Phase 0 | You |
| Answers on the claims list | Phases 0 and 6 | You |
| True business details | Phase 0 | You |
| Approval of the design direction | Phase 1 | You |
| Approval of headlines and other wording | Phases 2, 3, 6 | You |
| Photographs, biographies | Phase 6 | You |
| Product screens and client permissions | Phases 3 and 4 | You and your clients |
| Material for two new proofs | Phase 4 | You |
| Business scheduling account | Phase 5 | You |
| Domain decision | Phase 7 | You |
| OpenSEO project for keyword and backlink data | Phase 7 | Your go-ahead; I set it up |
| Vercel and Supabase access | All phases | Already connected |

Technical dependencies: none new. The plan removes packages and adds none, apart from a Markdown renderer for the blog in Phase 6.

## J3. Budgets (pass or fail on every pull request)

| Budget | Limit |
|---|---|
| Lighthouse mobile performance | 95 or higher on every template |
| Lighthouse accessibility | 100 |
| Largest Contentful Paint (lab, mobile) | Under 1.8 s |
| Cumulative Layout Shift | Under 0.05 |
| Total Blocking Time | Under 150 ms |
| JavaScript per page | Not above today's figure for that page |
| Any single image | Under 200 KB as served |
| Horizontal overflow | None at 320, 390, 820 and 1440 px |
| Text size | Nothing under 12 px |
| Tap targets | 44 px minimum |
| Contrast | 4.5:1 for text, 3:1 for large text and interface parts, on both grounds |

## J4. Test plan

### Every pull request

| Test | Method |
|---|---|
| Build | `npm run build` passes with no new warnings |
| All routes respond | Crawl every URL in the sitemap; expect 200, one `<h1>`, a canonical, a description |
| Redirects | Each old URL returns a permanent redirect to the right page |
| Links | No broken internal links |
| Structured data | Every block parses; types as planned per template |
| Overflow | Automated check at four widths on every page |
| Visual review | Screenshots at phone, tablet and desktop, compared with the previous version |
| Lighthouse | Mobile run on each changed template |
| Accessibility | Automated checks, plus keyboard-only pass through navigation, forms and booking |
| Reduced motion | Every animation has a still state |
| No WebGL | Hero shows its still image |

### Per phase

| Phase | Extra tests |
|---|---|
| 0 | End-to-end enquiry: submit → row in Supabase → email received → confirmation to sender. Newsletter row saved. Each tracking event fires once. API rate limit still returns 429 after 20 requests a minute. |
| 1 | Style guide reviewed on both grounds; contrast measured for every token pair; components at four widths |
| 2 | First screen on a 390 px phone shows headline, button and a visual with the cookie banner open. Scroll performance recorded: no long frames. |
| 3 | No FAQ text shared between pages; price figures match `offers.js` everywhere |
| 4 | Every figure on a case study matches its source text; quotes shown only with permission |
| 5 | Form completes with keyboard and screen reader; errors announced; double submission prevented; scheduler traps focus and closes on Escape |
| 6 | Old and new article compared for content loss; redirected posts land correctly; author data validates |
| 7 | After any domain move: full redirect map crawl; Search Console coverage watched for four weeks |

### Devices and browsers

| Target | How |
|---|---|
| Chrome, Edge, Safari, Firefox (current) | Automated on Chromium; manual check on the others |
| iPhone Safari and Android Chrome | **You on real devices**, using each preview link. I cannot test physical phones. |
| Tablet, portrait and landscape | Emulated at 820 and 1180 px, plus a real device if you have one |
| Slow network and low-end device | Lighthouse throttling |

### After each release

| Check | Source |
|---|---|
| Real-user Core Web Vitals | Vercel Speed Insights |
| Errors | Vercel runtime logs for 24 hours |
| Enquiries and bookings | Conversion events and Supabase rows, compared with the previous period |
| Indexing | Search Console coverage and sitemap status |

## J5. Rollback

Each phase is one merge. If a release harms enquiries, speed or indexing, the previous deployment is restored in Vercel in one step and the pull request is reverted. Phase 0 clean-up (package and file removal) is kept separate from behaviour changes so either can be reverted alone.
