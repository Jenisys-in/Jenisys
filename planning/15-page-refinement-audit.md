# Page-by-page audit and refinement round (16 November 2026)

Triggered by: (1) the client-reviews section feeling slow to appear, (2) overlapping text on the Work and case-study pages on phones, (3) a request to audit every page section by section and refine the case study, service, pricing and About pages.

Tools used: an automated text-overlap and clipping detector run on all 21 public pages at 8 widths (320, 360, 390, 430, 768, 820, 1024, 1440 px), Chrome trace measurements, real-browser anchor and keyboard tests, Lighthouse, and screenshots reviewed section by section. The code graph (Graphify) was queried for what depends on shared components, but its index is built from the earlier `main` commit, so every dependency it reported was re-checked with a text search of the current branch.

## 1. Client-reviews section felt slow

**What I could and could not measure.** In this headless browser, scroll frames were identical (17 ms) with and without every suspect, and paint time was 74 to 80 ms in all variants. The lab has no real GPU, so it cannot reproduce a graphics-driven lag. I therefore removed the two things that make a section feel late on a real device, without claiming a measured speed-up:

| Cause | Why it feels slow | Fix |
|---|---|---|
| Scroll-linked fade on chapter headings (`animation-timeline: view()`) | Content starts almost invisible and fills in as you scroll, which reads as "still loading" | Removed everywhere; content is visible the moment it scrolls in |
| Full-width ribbon behind the quotes with a blur filter | A large filtered SVG is costly to paint on mid-range phones | The decoration on this section is now a "lite" version: 5 strands, no blur filter |

## 2. Overlapping text (confirmed and fixed)

| Where | Cause | Fix |
|---|---|---|
| Work page, widths 320 to 820 px | The result figure block used "fill the cell" height. When extra results sat under it ("−80%", "−35%", "<150 ms"), it grew past its cell and drew on top of the next project's title | The block only fills its cell where it needs to (home proof strip); not on Work, case-study or the home featured story |
| Home "featured story" metrics at 320 px | Three metric columns too tight for the labels | One column under 420 px, three above |
| AI-automation article, 320 and 360 px | Use-case card header (title and big ROI figure) did not wrap and clipped | Header wraps; title can shrink |

After the fixes the detector finds no overlapping text and no clipped text on any page at any of the 8 widths, apart from the decorative 3D scenes, which are cropped on purpose.

## 3. Section-by-section audit and refinements

### Case study
| Section | Finding | Change |
|---|---|---|
| Hero | Four tag chips wrapped awkwardly | Two chips (type and system) |
| (none) | No scannable summary; a reader met about 1,000 words straight away | **At-a-glance strip**: industry, duration or delivery date, stack, type |
| Navigation | Section list existed on desktop only; phones had none | **Section chip strip** under the header on phones and tablets; anchors tested |
| Body | Nine identical text blocks with unlabelled eyebrows | Numbered section labels (01 to 09); slightly smaller body type on phones |
| End | Dead end after the last section | **"Want something like this?"** link to the matching service with its price, and a **Next project** card |

### Service pages
| Section | Finding | Change |
|---|---|---|
| Hero | Price and timeline were a small grey line | **Facts strip**: starting price (large), timeline, best for |
| Navigation | 8,000+ px of scrolling on phones with no way to jump | **"On this page" chips**: Overview, Examples, Pricing, Related work, Questions |
| Examples | Four identical text blocks | Numbered 01 to 04 |
| Anchors | Jump targets would hide under the fixed header | Section targets with scroll margins; tested at desktop and phone |

### Pricing
| Section | Finding | Change |
|---|---|---|
| Top | Visitors had to read all four groups to find theirs | **"Which one is right for me?"** four-card guide (idea, manual work, product, live system) that jumps to the matching group |
| Groups | No anchors | Each group is a jump target |

### About
| Section | Finding | Change |
|---|---|---|
| Engineer | Name and text only, no visual anchor | An initials mark ("TD") in the logo gradient ring. It is clearly a monogram, not a photograph |
| Rest | Facts, reviews, work and offices read well | Unchanged |

### Reviewed and left as is
Home hero, proof, two-ways-in, the work, how-it-works, promises, questions and call chapters (reviewed in the previous round); contact page (two-step form tested); blog index; evaluation tool; careers; privacy; 404.

## 4. Test results

See the summary at the end of the chat message and `planning/13-qa-report.md` for the baseline. This round's checks:

| Check | Result |
|---|---|
| Production build | Passes, no type errors |
| Crawl, 21 public pages plus 404, 3 widths | All pass; no broken links |
| Interaction tests | 30 of 30 pass |
| Anchor tests (service chips, case-study chips, pricing guide) | 15 of 16 pass; the one flagged case is the last section on a phone, where the page cannot scroll further and the heading is fully visible |
| Overlap and clipping detector | No overlap or clipping outside decorative 3D scenes |
| Keyboard and focus | Focus visible on every stop; focus moves correctly through the contact form; booking window traps and returns focus |
| Lighthouse (mobile, local) | Accessibility 100 and SEO 100 on all six pages tested. Performance: case study 99, service 99, pricing 99, About 98, Work 98, home 97 to 100 over four runs (one outlier read 90 straight after the heavy test suite; it did not repeat). Largest paint 0.9 to 1.0 s, layout shift 0 |

## 5. Still open

- The phone home page is long (about 14,000 px).
- Real photographs and product screens are still missing (needs your material).
- Case studies from the Upwork portfolio are shorter than the two detailed ones; a longer write-up of any of them would help.
- Real-device checks (iPhone Safari, Android Chrome) are yours: the reviews-section lag could only be addressed by cause, not measured here.

---

# Home hero redesign (17 November 2026)

Requested: first line in full capitals; an effect on the second line; remove the two old buttons and replace them with one frosted-glass rectangle containing a catchy call to action (4 to 5 words or more) and three icon-and-label items beneath it.

**Reference links.** The two Pinterest links could not be opened from this environment (blocked), so the effect is my own, built from the brand's idea of light travelling along the ribbon. If the references show something different, say so and it can be swapped.

| Part | What was built |
|---|---|
| Line 1 | "WE TURN MANUAL WORK": full capitals (CSS), smaller and letter-spaced so it reads as the lead-in |
| Line 2 | "into software that runs itself.": large, plain white with a streak of the logo's blue and cyan that travels through the words. It starts about 2.6 s after load, runs four sweeps, then rests on plain white. Under reduced-motion settings it does not animate. The heading text itself is unchanged for search engines and screen readers |
| Glass panel | Frosted rectangle (blur, soft border, top light edge) over the ribbon, with a soft glow behind. It falls back to a solid navy panel where the browser cannot blur |
| Button | "Book your free strategy call →" (5 words, 58 px tall, amber, opens the booking window) |
| Three items | Clock icon with "30 mins"; dollar icon with "Price range discussion"; route icon with "Consultation for next steps". Icons sit in small cyan-tinted rounded squares |
| Removed | "Book a free call" and "Send a brief" buttons and the line under them, from the hero only (they remain everywhere else) |
| Layout | Desktop: headline left, glass panel right, over the ribbon. Tablet and phone: panel under the headline, full width on phones. Checked at 320, 390, 820 and 1440 px |

**Tests.** Button opens the booking window; reachable by keyboard with a visible focus ring; three items present; no horizontal overflow at 1440, 390 and 320 px; item text at least 13 px; reduced-motion turns the sweep off; no overlapping text at 8 widths; crawl clean; 30 of 30 interaction checks pass; Lighthouse accessibility and SEO 100.

**Performance decision.** The first version looped the sweep forever. A looping repaint of clipped text raised main-thread blocking in tests (median 377 ms against 208 ms with it off, 5 runs each at 4x CPU slowdown), so the sweep now starts after the page has settled and stops after four passes. Lighthouse for the home page after the change: 93 to 95 (blocking time 270 to 330 ms), against 97 to 100 before the hero redesign. 

**Remaining gap, explained.** To find out whether any single new effect was responsible, each was switched off in turn (9 runs each at 4x CPU slowdown). Median blocking time: current 308 ms, without the glow behind the panel 316 ms, without the glass blur 284 ms, without the headline glow 339 ms. All differences are smaller than the spread between runs of the same variant, so no one effect is a measurable cost; the small gap against the earlier 97 to 100 is more likely the new interactive button and icons, plus normal run-to-run variation (the same page read 86 to 100 across runs). Real-device timing is still worth checking on your phone.

## Hero round 3 (17 November 2026)

- Call card moved under the headline, full width, styled as fluted glass (frosted blur, vertical reeds, pill tag, mark, mixed light/bold capitals statement, three items along the bottom).
- New statement on the card (restates the call, no new claims): "Bring one slow, manual process. Leave with next steps and a price range."
- A beam of the logo's light (CSS gradients, transform-only drift) sits behind the card so the glass has something to bend.
- "into software that runs itself." now always shows the blue-cyan gradient, and a white glint loops through it forever. It moves only with transform, so it costs no repaint. The glint's words come from a data attribute, so the heading text appears once for search engines and screen readers.
- The WebGL ribbon now runs on phones too: half resolution and 30 frames a second below 768 px; still skipped on low-power devices, software renderers and reduced motion.
- New "Pause motion" control (WCAG 2.2.2); the choice is remembered; hidden for reduced-motion users.
- Measured: Lighthouse mobile performance 94 to 96 (95 to 97 before), largest paint 0.9 s both, layout shift 0; blocking time at 4x CPU within run-to-run noise of the previous version.
