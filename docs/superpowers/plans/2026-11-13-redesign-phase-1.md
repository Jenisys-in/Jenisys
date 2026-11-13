# Jenisys Redesign — Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Put the approved Jenisys brand system in place site-wide, and rebuild the navigation, footer and home page as fast, server-rendered, conversion-focused pages.

**Architecture:** Brand tokens live in `src/app/global.css` (`@theme`) as Tailwind v4 colours and fonts. The home page becomes a server component tree under `src/components/home/`. Only small client islands are used: the WebGL ribbon hero, scroll reveal, count-up and calendar buttons. Inner pages get an interim re-skin (colour remap to the Day palette) until their own phases.

**Tech Stack:** Next.js 16 app router, React 19, Tailwind v4, next/font, raw WebGL (no three.js).

**Spec:** `docs/brand/brand-system.md` + `docs/brand/tokens.json` (published at https://claude.ai/artifact/NW9TtiamQoypfXCd9LHNuM)

## Global Constraints

- No visible copy is invented or rewritten. Every string on the page comes from the existing components. The only exceptions are the approved Outcome Shift labels ("Two-thirds faster", "Close in an afternoon", "Measured after launch").
- No fake data. The hero mock dashboard ($142K / 12.4K / +47%) is removed. The schema's `+1-XXX-XXX-XXXX` phone is removed.
- `flare` appears only on the primary "Start a Project" call to action, one per screen.
- No purple anywhere. Headline gradient text is retired.
- Budgets: home JavaScript under 120 KB gzipped (hero ribbon included); LCP under 1.8 s; CLS under 0.05. The ribbon lazy-loads and is replaced by a still image under `prefers-reduced-motion`.
- Fonts: Bricolage Grotesque, Geist and Geist Mono via next/font. Montserrat, Inter and the Google Fonts `@import` are removed.
- One `<h1>` per page. Organization JSON-LD appears once, site-wide.

## Review Focus

- **No WebGL** (old phones, blocked GPU): the hero must still look finished, using the CSS ribbon fallback, with no console errors.
- **Reduced motion:** no ribbon animation, no count-up, and content is fully visible at once.
- **Phone width (360 to 430 px):** no horizontal scroll. Nav collapses to a menu, and a sticky "Start a Project" bar appears after the hero.
- **JavaScript off / before hydration:** all text, links and Outcome Shift final values are present in the server HTML.
- **Inner pages** (services, blog, case study): still render, with the brand Day colours, inside the new nav and footer.

---

### Task 1: Brand foundation (tokens, fonts, global CSS, layout, SEO head)

**Files:** Modify `src/app/layout.js`, `src/app/global.css`, `src/components/ClientLayout.js`, `src/app/page.tsx`. Create `public/favicon.ico`, `public/apple-touch-icon.png`, `public/og-image.jpg`.

- [ ] Add the brand colour tokens to `@theme` (`--color-void` … `--color-alert`, Night values) and the font variables `--font-display`, `--font-sans`, `--font-mono`.
- [ ] Load the fonts via next/font in the layout. Remove the Google Fonts `@import`, Montserrat and Inter.
- [ ] Organization JSON-LD rendered once from the layout, without the fake phone number. Remove the duplicate from `page.tsx`.
- [ ] Remove AOS (no pages use `data-aos`) and Lenis (native scroll is faster).
- [ ] Create a brand OG image (1200×630) and the missing icon files.
- [ ] Verify: `next build` passes, and the `/` HTML contains exactly one `application/ld+json` Organization.

### Task 2: Navbar and Footer

**Files:** Rewrite `src/components/Navbar.js` and `src/components/Footer.js` (same links and copy).

- [ ] Night nav: the mark plus the wordmark, the same menu items and services dropdown, and "Get Started" as the Flare button. Keyboard dropdown support. A mobile sheet menu.
- [ ] Footer: server component with the same copy, links, address and newsletter form (a client island), and the current year.
- [ ] Verify: all existing hrefs are still present (diff the href lists before and after).

### Task 3: Home page

**Files:** Create `src/components/home/{Hero,RibbonCanvas,OutcomeShift,CaseStudies,Services,Process,Testimonials,About,TechStack,CallBanner,BlogTeaser,Reveal,CalendarButton,StickyCta}.js`. Rewrite `src/components/Homepage.js`. Delete `HomepageCSR.js` and `src/components/Homepage/*` once unused.

- [ ] Section order, following the conversion rules (proof before catalogue):
  1. Hero
  2. Outcome Shift
  3. Case studies
  4. Services and industries
  5. Process
  6. Testimonials
  7. Vision, mission and values
  8. Tech stack
  9. Coffee/beer call banner
  10. Blog
- [ ] `RibbonCanvas`: a raw WebGL fragment shader of a twisting light ribbon (navy → volt → signal) that reacts to the pointer. Paused off-screen and on a hidden tab. CSS fallback.
- [ ] Verify: Playwright screenshots at 1440 and 390 px, no console errors, and Lighthouse performance and SEO scores recorded.

### Task 4: Interim inner-page re-skin

- [ ] Remap the legacy hex colours across `src/`: `#4F46E5`→`#1652D9`, `#3730A3`→`#1B2AA0`, `#7C3AED`→`#0A7590`. Gradient-text headlines become solid.
- [ ] Verify: the build passes and spot-check screenshots of `/services/ai-ml`, `/about` and `/blog`.

### Later phases (separate plans)

- Phase 2: services (7 pages) and industries
- Phase 3: about, career, startup partnership
- Phase 4: case studies and blog (8 posts, as data-driven server pages, with images converted to WebP)
- Phase 5: contact, quote, evaluate forms
