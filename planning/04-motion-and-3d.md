# F. 3D and motion: where, why, and where not

## F1. Technology decisions

| Technology | Decision | Reason |
|---|---|---|
| **Three.js** | Do not add | About 170 KB compressed for the core library. The site's whole first load is 195 to 255 KB. Nothing here needs a scene graph, 3D models or lighting. |
| **React Three Fiber** | Do not add | Needs Three.js plus its own runtime, and turns the hero into a client-rendered React tree. |
| **GSAP** | Do not add | About 40 KB with ScrollTrigger. Native CSS scroll-driven animation and one small observer cover every effect proposed below. |
| **Framer Motion** | Keep to one route, then remove | Used only on `/evaluate`, where it adds about 60 KB. Replace with CSS transitions when that page is rebuilt. |
| **Raw WebGL (existing ribbon)** | **Keep** | 3 KB, no library, already pauses off-screen and respects reduced motion. |
| **CSS and SVG** | **Primary tool** | Free to load, runs on the compositor, degrades gracefully. |
| **View Transitions API** | Add | Built into the browser. Gives smooth page-to-page transitions at no library cost. |

The rule behind these: motion must either **explain** something or **confirm** an action. Decoration is not a reason.

## F2. Where motion is used

| # | Where | What moves | Why it earns its place | Technique | Cost |
|---|---|---|---|---|---|
| 1 | Home hero | The ribbon of light, slowly twisting; reacts slightly to the pointer | The brand's one signature moment; it is the logo in motion | Existing WebGL shader | 3 KB, lazy |
| 2 | Home, down the page | The Line draws itself as you scroll, tangled → ordered | It is the story of the page (file 03) | SVG path with `stroke-dashoffset`, CSS `animation-timeline: view()`, observer fallback | Under 2 KB |
| 3 | Outcome Shifts | Old value strikes through, the arrow draws, the new value counts up once | Makes the before and after legible as a change | CSS plus the existing count-up island | Existing |
| 4 | AI Automation scene | A packet travels: enquiry → AI sorts → CRM → reply → booked | Shows what an automation *is* faster than a paragraph can | Existing CSS `offset-path` | Existing |
| 5 | Case study diagram | State machine steps light in sequence; billing pipeline shows data flowing | Explains the system that was built | SVG and CSS, triggered on view | Under 1 KB |
| 6 | Step track | Each step fills as it enters view | Shows progress and order | CSS | Negligible |
| 7 | Page navigation | Cross-fade; a case study row expands into its page header | Continuity; feels instant | View Transitions API | 0 KB |
| 8 | Buttons, links, panels | Arrow nudge, light-edge sweep, 160 to 240 ms | Confirms interactivity | CSS | Existing |
| 9 | Booking panel and form steps | Height and opacity change between steps | Keeps context during a task | CSS | Negligible |

## F3. Where 3D is used

| Place | Decision | Reason |
|---|---|---|
| Hero ribbon | **Keep** | The one true 3D moment |
| AI Automation and MVP scenes (home, service heroes) | **Keep, but fill with real content** | Layered depth helps show a flow or a product. Replace skeleton bars with real screens once available. |
| Pointer tilt on those two scenes | Keep on desktop only | Subtle and already limited to fine pointers |
| Tilted text cards (How it works, Promises, "What you get") | **Remove** | Tilt on text adds nothing and slightly softens type. The staggered version on service pages also caused the phone overflow fixed on 13 November. |
| Discovery Sprint and Support scenes | **Replace** | Abstract; use a real sprint deliverable and a real monthly report |
| Glow shadows | Reduce to one featured element per page | Overuse is the main "template" tell |
| Grid floor backgrounds | Hero only | Same reason |

## F4. What to add that is missing today

| Gap | Fix |
|---|---|
| Hero has no picture when WebGL is unavailable, and none on phones | Ship a pre-rendered still of the ribbon (AVIF, under 40 KB) as the base layer; WebGL fades in over it. Phones get a cropped still. |
| Dead `Reveal.js` component | Delete; scroll reveals use CSS |
| Booking modal has no motion or focus management | Rebuild as an in-page panel |

## F5. Motion rules

| Rule | Value |
|---|---|
| Interface timing | 160 to 240 ms, `cubic-bezier(.2,.8,.2,1)` |
| Scroll reveals | At most 12 px of travel; content is never invisible before it animates |
| Loops | Only the hero ribbon and the automation packet loop. Both pause off-screen and when the tab is hidden. |
| Reduced motion | Every animation has a still state. The Line appears fully drawn. |
| Low-power devices | Ribbon shows the still image when the device reports data-saver, low memory or a software renderer |
| Never | Scroll hijacking, parallax on text, auto-playing video, cursor followers, bounce or spring on text, preloaders |

## F6. Performance budget for motion

| Budget | Limit |
|---|---|
| Total JavaScript added by all motion | 8 KB compressed |
| Hero still image | 40 KB |
| Main-thread work from animation | None during scroll (compositor-only properties: transform and opacity) |
| Interaction to Next Paint | Under 150 ms |
| Layout shift caused by motion | 0 |
