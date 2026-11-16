# A. Page-by-page audit

## 1. Architecture

| Area | What is there |
|---|---|
| Framework | Next.js 16 App Router (Turbopack), React 19. Server components by default, small client islands. |
| Rendering | Every public page is static (prerendered). Only the five `/api/*` routes run on demand. |
| Styling | Tailwind CSS v4 with `@theme` tokens in `src/app/global.css` (687 lines). Brand classes are prefixed `j-`. |
| Fonts | Bricolage Grotesque (display), Geist (text), Geist Mono (labels), self-hosted through `next/font`. |
| Data | Supabase (server-only client). Offers and prices live in one file, `src/lib/offers.js`. |
| Content | Case studies in `src/lib/case-study-data.js`. Blog posts are eight hand-coded React components, 600 to 1,350 lines each. |
| Motion | Hand-written WebGL ribbon (hero), CSS 3D scenes, a pointer-tilt island, a count-up island. Framer Motion is used on one route (`/evaluate`). |
| Tracking | Vercel Analytics and Speed Insights always; Google Analytics and Apollo only after cookie consent. |
| Hosting | Vercel. Security headers and a content security policy are set in `next.config.mjs`. |

### Leftovers from earlier versions

| Item | Evidence | Effect |
|---|---|---|
| 13 unused packages | `styled-components`, `swiper`, `lottie-react`, `react-icons`, `@heroicons/react`, `react-calendly`, `@fontsource/lexend-exa`, `react-swipeable`, `use-debounce`, `express`, `formidable`, `multiparty`, `cors`, `dotenv` have no imports | Slower installs, larger attack surface, confusion |
| About 14 MB of unused files in `public/` | Two home-page videos (6.3 MB), four preloader videos, about 30 images in `public/img` that nothing references | Repository weight only; not served to visitors |
| Two older design systems in the CSS | `--ds-*` "Enterprise Design System" tokens and shadcn `--background`/`--primary` tokens sit beside the `j-` tokens | 132 KB stylesheet (22 KB compressed); three sources of truth |
| Legacy Tailwind config | `tailwind.config.js` still defines indigo `#4F46E5` and violet `#7C3AED` | Retired colours can creep back |
| Invalid browser target | `package.json` browserslist contains the entry `"supermarket"`, which is not a valid query | Should be removed |
| Dead components | `Reveal.js` (never imported), `AnimationLottie.json`, `ui/button.tsx` | Dead weight |

## 2. Measurements (local production build)

| Page | Lighthouse mobile: performance / accessibility / best practice / SEO | Largest paint | Layout shift |
|---|---|---|---|
| Home | 100 / 100 / 96 / 100 | 1.1 s | 0 |
| Service (AI Automation) | 100 / 100 / 96 / 100 | 1.1 s | 0 |
| Pricing | 100 / 100 / 96 / 100 | 1.1 s | 0 |
| Case study (NSW) | 100 / 100 / 96 / 100 | 1.1 s | 0 |
| Blog article (AI ROI) | 100 / 97 / 96 / 100 | 1.1 s | 0 |
| Contact | 100 / 100 / 96 / 100 | 0.9 s | 0 |

The "best practice" score of 96 is a local artefact: Vercel's analytics scripts only exist on Vercel.

| Page weight | JavaScript, compressed | Notes |
|---|---|---|
| Service pages, contact | about 195 KB | Almost all of it is React and Next.js itself |
| Home, blog article, evaluate | about 255 KB | Home adds the ribbon and visuals; evaluate adds Framer Motion |
| Unused on first load | 74 to 82 KB | Lighthouse estimate |

The brand system's stated budget is 120 KB of JavaScript per page. That figure is not reachable on this framework (the framework alone is larger), so the budget should be restated honestly. See file 08.

Other measured facts:

- No horizontal overflow on any page at any of the three widths.
- Exactly one `<h1>` on every page. Every page has a canonical URL, a description and a social image.
- No form input is missing a label.
- 15 to 26 links or buttons per page are shorter than 40 px on phones, mostly footer links (21 px tall) and inline text links.

## 3. Global elements

### Navigation

- Desktop: logo, Services (dropdown of four), Pricing, Case Studies, About, Blog, Contact, and an amber **Get Started** button.
- Mobile: full-screen menu, plus a sticky **Start a Project** bar after scrolling.
- Findings:
  - Seven items plus a button is one or two too many for a "minimal, premium" header. "Contact" and "Get Started" go to the same page.
  - The button says "Get Started" in the header, "Start a Project" in the hero and sticky bar, and "Get Started Today" in the footer.
  - On tablet (820 px) the sticky bar appears and covers section headings while scrolling.
  - `/evaluate` and `/career` are not in the header. `/evaluate` is not linked from the header or footer at all; one blog post links to it.

### Footer

- Tagline reads "Advancing Excellence Beyond Cost". The brief's tagline is "Transforming Technology Into Business Advantage". The site title says something else again.
- Description uses "cutting-edge", a word the brand system bans.
- Address shows Serampore, West Bengal. The contact page and home page say "Atlanta and Kolkata". The phone number is Indian only.
- The Facebook link goes to `facebook.com`, not a Jenisys page.
- Newsletter form asks for a name and an email, with no reason given to subscribe. Sign-ups are not stored (see file 06).

### Cookie banner

- On phones it covers the bottom third of the first screen, including the hero's supporting lines.
- "Accept All" is a solid blue button. It is the brightest thing on the first screen after the amber button, and it breaks the "one action colour" rule.

### Booking modal

- Opens a Calendly page for a personal account inside a white box with grey close button. It is the old visual style, and the code still carries a "replace with your actual link" comment.

## 4. Pages

Each table lists the sections in order, then findings. "Keep", "Improve" and "Redesign" are my verdicts.

### 4.1 Home `/`

Twelve sections, 9,476 px tall on desktop and 15,447 px on a phone (about 18 screens).

| # | Section | What it does | Verdict |
|---|---|---|---|
| 1 | Hero | Headline "Ship products that actually move the needle", two buttons, price line, two proof bullets, WebGL ribbon | Redesign |
| 2 | Outcomes strip | Three real before and after figures | **Keep** (signature element) |
| 3 | Two offers | AI Automation and MVP Development, each with a 3D scene | Improve |
| 4 | How it works | Four numbered cards in a tilted "staircase" | Improve (merge with pricing) |
| 5 | Case studies | Two cards with diagrams | Redesign as one featured story |
| 6 | Promises | Four tilted cards with gradient icons | Improve (merge with FAQ) |
| 7 | Pricing preview | Four prices in a row | Improve (merge with how it works) |
| 8 | Testimonials | One large quote, two small | Redesign (attach quotes to case studies) |
| 9 | FAQ | Six questions | Keep, shorten |
| 10 | Blog teaser | Three latest posts | Remove from home |
| 11 | Call banner | "Book a free 30-minute call" | **Keep** |
| 12 | Footer | See above | Improve |

Findings:

- **Message.** The headline does not say what Jenisys does or for whom. The eyebrow above it ("AI automation · MVP development") carries the real information in 13 px type.
- **Composition.** The left half holds all content. Without WebGL the right half is empty, and on phones there is no visual at all in the first screen.
- **Monotony.** Every section is the same dark navy with the same card treatment. Section 4 and section 6 are visually near-identical (four cards in a row, both tilted).
- **Length.** Twelve sections make twelve points. A pitch makes one argument in a sequence.
- **Generic lines that survived.** "Proven Impact Through Innovation", "Discover how we've transformed businesses across industries with cutting-edge technology solutions", "Real stories from our clients showcasing our dedication to impactful, high-performance solutions".
- **Proof mismatch.** The case studies are enterprise builds; the offers are small automations and MVPs.
- **Testimonials** carry a first name and a job title only ("Rajesh · Operations Lead"). They read as anonymous.
- **Blog teaser** promotes "Digital Transformation in Fortune 500 Companies" to an audience of small service businesses and founders.

### 4.2 Services index `/services`

| Section | Verdict |
|---|---|
| Header: "Four ways to work with us" | Keep the idea |
| Four large panels, each with a 3D scene | Improve |
| Outcomes strip, call banner, footer | Keep |

Findings: clear and short. The four offers are presented as equals, but two are products (automation, MVP) and two are steps around them (sprint, support). The layout should show that relationship. The 3D scenes are hidden on phones, leaving four text boxes.

### 4.3 Service pages `/services/[slug]` (four pages, one template)

| # | Section | Verdict |
|---|---|---|
| 1 | Hero with breadcrumb, name, one line, two buttons, scene | Improve |
| 2 | Who it's for, and what you get | Keep the content, redesign the layout |
| 3 | What we can build (four examples) and tool chips | Improve |
| 4 | Pricing cards | **Keep** |
| 5 | Outcomes strip | Replace with relevant proof |
| 6 | How it works | Keep |
| 7 | FAQ | Rewrite per service |
| 8 | Call banner, footer | Keep |

Findings:

- The `<h1>` is just the service name ("AI Automation"). It is not a promise and it wastes the page's most important heading for search.
- The examples are four paragraphs of text. This is where a visitor most needs to *see* the thing: a short walkthrough of one automation or one app screen.
- The proof strip shows government and SaaS billing results on a page selling small-business automation.
- All four pages show the same six questions, and the same six appear on Home and Pricing: six pages with identical FAQ content and identical FAQ structured data.
- The Discovery Sprint and Support scenes are abstract and add little.

### 4.4 Pricing `/pricing`

| Section | Verdict |
|---|---|
| Header: "Clear prices. Fixed quotes. No surprises." | **Keep** |
| Four groups of pricing cards | Keep, tighten |
| Custom projects panel | Keep |
| Promises, FAQ, call banner | Keep |

Findings: the clearest page on the site. It runs long on phones (9,538 px) because seven cards stack. A compact comparison on desktop and a tabbed view on phones would halve it. The "Most popular" badge is a claim; keep it only if it is true.

### 4.5 Case studies index `/case-study`

Header "Work we've shipped.", two cards, a call to action. Findings: two entries make a thin page. The URL says "case-study", the navigation says "Case Studies" and the page title says "Build Logs & Case Studies". Pick one name. I recommend **Work** in navigation.

### 4.6 Case study detail `/case-study/[slug]` (two pages)

Header with tags, the one outcome figure, then nine text sections (Problem, Context, Constraints, Approach, Architecture Decisions, Tradeoffs, Implementation Notes, Result, Lessons Learned) with a sticky contents list.

Findings:

- **The writing is the best on the site.** Specific, candid, technical. This is the voice the whole site should have.
- **There is nothing to look at.** About 1,000 words of text with one figure. No screen, no diagram, no quote, no client description. The home page has diagrams for both projects; the detail pages do not use them.
- The result, which is the point, arrives eighth of nine sections.
- The page ends with a generic call to action, not a link to the matching service.
- The client is unnamed, with no explanation. A line such as "Client name withheld under NDA" turns a weakness into a credibility signal, if it is true.

### 4.7 About `/about`

Sections: header and four statistics, Who We Are with mission and vision, Journey timeline 2020 to 2024, Core Values, Technology Stack, client quotes, call to action.

Findings (this page needs the most work):

- **Unverified claims throughout.** "50+ Projects Delivered", "99% Client Satisfaction", "15+ Industries Served", "24/7 Support Available"; a timeline claiming "over 15 professionals" and "a dedicated innovation lab"; quotes from "Sarah Johnson, CTO, TechCorp", "Michael Chen, Founder, StartupX" and "Emma Davis, VP Digital, Enterprise Inc". These company names look like placeholders.
- **Generic copy.** "We're not just a tech company; we're your partner in growth", "world-class technology", "leveraging cutting-edge technology", "To be the global leader in transformative digital solutions". Any agency could publish this page.
- **No people.** No founder, no team, no faces, no names. For a small agency selling trust, this is the biggest gap.
- "Design" is listed as a technology.
- The first button, "Discover How We Partner with You", scrolls to the timeline.

### 4.8 Blog index `/blog`

Header "Insights & Innovation", category filter and search, one featured post, seven cards.

Findings: the layout works. The thumbnails are AI-generated images in seven different styles, several with baked-in text ("FORTUNE 500", "CYBERSECURITY TRENDS"). They are the most "AI-generated" looking element on the site. Two posts have 2025 in the title and it is now late 2026. Search and filtering for eight posts is more interface than content.

### 4.9 Blog articles `/blog/[slug]` (eight pages)

Findings:

- **A different website.** Articles switch to a white page with royal-blue buttons, Tailwind grey text and their own card styles. Buttons are blue, not amber. This is the old design.
- Each article is its own component. A change to article design means editing eight files of up to 1,358 lines.
- The two 2026 posts (NSW SOPA, AI automation ROI) are substantial and on-topic. The AI ROI post presents figures such as "23 hrs lost weekly", "8 to 20% revenue recovered", "$26,400/year" with no sources.
- The six 2025 posts are generic ("Digital Transformation in Fortune 500 Companies") and do not serve either buyer.
- Author is "Jenisys". There is no named person, photo or biography.
- One accessibility failure: small grey text on white misses the contrast minimum.

### 4.10 Contact `/contact`

Left: heading, phone, email, hours, locations, a "schedule a call" button. Right: the form.

Findings:

- The form has **nine fields and two checkboxes**. The brand system's own rule is four fields at most.
- The heading "Let's Build Something Amazing Together" and "Ready to transform your ideas into reality?" are generic.
- On phones the form starts three screens down, below the contact details.
- "Operating Hours: 8am to 5pm" gives no time zone.
- Nothing says what happens after sending: who replies, and how soon.
- Booking a call is the lower-effort action but is presented as the minor one.

### 4.11 Careers `/career`

Header with "No current openings" and a talent-pool form, reasons, perks, culture with two quotes, FAQ.

Findings: honest about having no roles, which is good. But it lists "Equity options for senior hires", "Health & wellness allowances", and quotes "S. Gupta, Senior Engineer" and "A. Roy, Product", all unconfirmed. "Last updated: August 10, 2025" is 15 months old. The page says "Offices in India" while other pages say Atlanta and Kolkata.

### 4.12 Technical Fit Evaluation `/evaluate`

A three-step questionnaire that produces a report, with no email required.

Findings: this is a real, working tool and the only "lab" artefact on the site. It is centred, uses its own stylesheet and Framer Motion, and is linked from one blog post only. It collects no contact and offers no next step tied to the result. It is an under-used asset.

### 4.13 Privacy Policy `/privacy-policy`

Light "Day" theme, long-form legal text. Works. Description is short (101 characters). It should mention the actual tools in use (Supabase, Vercel Analytics, Google Analytics, Apollo, Calendly).

### 4.14 Not found (404)

Large gradient "404", two buttons. Fine. The gradient-filled number uses a treatment the brand system retired.

## 5. Responsive summary

| Width | State |
|---|---|
| Desktop 1440 | Solid. Left-heavy hero. Good grid discipline. |
| Tablet 820 | Works, but treated as a wide phone: mobile menu and sticky bar, which overlaps headings. Outcome figures wrap awkwardly ("6" above "days"). |
| Phone 390 | No overflow, readable. Very long pages (home is about 18 screens). First screen has no visual. Cookie banner hides a third of it. |

## 6. Accessibility summary

Good: skip link, one `<h1>` per page, labelled inputs, visible focus rings, reduced-motion support, strong contrast on the dark theme, keyboard-operable menus.

To fix: small tap targets in the footer and inline links; 108 uses of 10 to 12 px text, much of it in mono capitals; contrast failure in the blog article template; the booking modal has no focus trap, no label and no Escape key handling; the sticky bar overlaps content on tablet.
