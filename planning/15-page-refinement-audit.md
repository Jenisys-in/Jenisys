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
