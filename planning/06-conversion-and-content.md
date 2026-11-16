# H. Conversion and content roadmap

**Copy rule:** every line of proposed wording below is a proposal. Nothing is changed on the site until you approve it.

## 1. The conversion journey today

| Step | What happens | Where it leaks |
|---|---|---|
| Arrive | Headline about "moving the needle" | Visitor is not told what Jenisys does or whether it is for them |
| Understand | Twelve sections, similar in look | Attention fades; the argument is not sequenced |
| Believe | Two enterprise case studies; anonymous quotes; unverified About page | Proof does not match the offer; trust is fragile |
| Decide | Prices are clear | Good |
| Act | Six button labels; a nine-field form; a white pop-up scheduler | Friction and doubt at the last step |
| Follow-up | Row saved; notification email fails | **The enquiry may never be seen** |
| Measure | Nothing is tracked | No way to know which step fails |

## 2. Fix first: lead handling

| Issue | Fix | Who |
|---|---|---|
| Notification emails fail (Gmail login rejected) | Add a Gmail App Password to `EMAIL_PASS`, or move to a transactional email service | You supply the credential; I wire it |
| Newsletter sign-ups are not stored | Save them to a Supabase table before attempting any email | Me |
| No acknowledgement to the enquirer | Send a short confirmation stating who will reply and by when | Me, with your wording |
| No tracking | Record: call booked, brief sent, step-two completed, pricing viewed, evaluation finished, newsletter joined. Use Vercel Analytics events (no cookies needed). | Me |
| No single view of leads | A simple protected list of enquiries, or a daily digest email | Your preference |

## 3. Claims to confirm, correct or remove

I cannot verify any of these. For each, tell me: true as written, true with a correction, or remove.

| Where | Claim |
|---|---|
| About | "50+ Projects Delivered" |
| About | "99% Client Satisfaction" |
| About | "15+ Industries Served" |
| About | "24/7 Support Available" |
| About | Founded 2020 |
| About | "Grew our expert team to over 15 professionals" (2022) |
| About | Projects "across three continents" (2023) |
| About | "Established a dedicated innovation lab" (2024) |
| About | Quotes: Sarah Johnson (CTO, TechCorp), Michael Chen (Founder, StartupX), Emma Davis (VP Digital, Enterprise Inc) |
| Home | Quotes by first name: Rajesh, Priya and Ananya are shown; Sarah, David and Marcus are in the code. Are these real clients, and may we show a company type or link each to its project? |
| Home, footer | Offices in Atlanta and Kolkata; address in Serampore |
| Careers | Quotes from "S. Gupta, Senior Engineer" and "A. Roy, Product" |
| Careers | "Equity options for senior hires", "Health & wellness allowances", "Learning & conference budget" |
| Pricing | "Most popular" badges |
| Blog (AI ROI) | "23 hrs/week lost", "8 to 20% revenue recovered", "$26,400/year" and similar figures |
| Case studies | All figures (already treated as verified; please reconfirm once) |

## 4. Close the proof gap

The site needs at least one example for each offer.

| Offer | Proof needed | Honest ways to get it |
|---|---|---|
| AI Automation | One delivered automation with a measured result | A past small project, even an internal one, written up with real numbers. Or run the first one at a reduced price in exchange for a case study. |
| MVP Development | One shipped MVP | Same. A product screen and a launch date are enough to start. |
| Either | A working demonstration | Build a small real automation visitors can try on the site (for example: submit an enquiry and watch it get sorted and answered). This is true "lab" content and proves capability without a client. |

Until that exists, be explicit instead of implying: present the two case studies as "larger systems we have built" and the offers as "the same engineering, packaged small".

## 5. Messaging

### Positioning statement (proposal)

> Jenisys is a software studio and lab that builds AI automations and first products for growing businesses, at a fixed price, with results you can measure.

### Tagline options

| Option | Comment |
|---|---|
| "Transforming Technology Into Business Advantage" | Your current line. Clear, but long and close to many other agencies. |
| **"Technology, turned into advantage."** | Same meaning in four words. My recommendation. |
| "Built to move a number." | Ties directly to the before and after figures. More distinctive, less formal. |
| "Software that pays for itself." | Strong for small-business buyers; a promise you must be able to back. |

### Hero options (proposal)

| | Headline | Supporting line |
|---|---|---|
| A | We turn manual work into software that runs itself. | AI automations for service businesses and first products for founders. Fixed price, weekly demos, results you can measure. |
| B | Technology, turned into advantage. | Fixed-price AI automation and MVP development, by the team that cut a government claims process from 18 days to 6. |
| C | Your next hire should be software. | (Same supporting line as A.) |

I recommend A for clarity, with B as the brand line elsewhere.

### Lines to replace (all need your approval)

| Current | Where | Problem |
|---|---|---|
| "Ship products that actually move the needle" | Home hero | Does not say what or for whom |
| "Proven Impact Through Innovation" | Home | Generic |
| "Discover how we've transformed businesses across industries with cutting-edge technology solutions." | Home | Generic; banned word |
| "Real stories from our clients showcasing our dedication to impactful, high-performance solutions." | Home | Generic |
| "Stay up-to-date with the latest industry trends, insights, and news from our team of experts." | Home | Generic |
| "Advancing Excellence Beyond Cost" and the footer description | Footer | Third tagline; banned word |
| "Let's Build Something Amazing Together" | Contact | Generic |
| "We're not just a tech company; we're your partner in growth." and most of About | About | Generic; unverified |
| "Insights & Innovation" | Blog | Generic |

### One call to action

| Role | Label | Goes to |
|---|---|---|
| Primary (amber) | **Book a free call** | In-page scheduler |
| Secondary (outline) | **Send a brief** | Two-step form |
| Under every primary button | "30 minutes. You leave with a price range, even if we're not the right fit." | Existing line, reused |

## 6. Page-by-page conversion changes

| Page | Change | Expected effect |
|---|---|---|
| Home | Seven chapters; offer stated in the hero; one featured story; booking in page | Clearer argument, shorter path |
| Home | Two doors: "I run a service business" / "I'm building a product" | Visitor self-selects; each path shows relevant proof |
| Services | Promise as headline; a visual walkthrough of one real example; matching proof; own questions | Buyer sees the thing they would buy |
| Pricing | Compact table; "what happens after you pay" strip; custom-quote panel kept | Faster comparison |
| Work | Result leads each entry; quote attached; link to matching service | Proof drives to an offer |
| Contact | Scheduler first; two-step form; reply-time promise; hours with time zone | Higher completion |
| About | Founder's note and photograph; real team; true facts only | Trust |
| Evaluate | Link from footer and services; optional "email me this report"; next step tied to the result | Turns a hidden tool into a lead source |
| Blog | One template; an offer-relevant call to action in each article | Readers reach an offer |
| Cookie banner | Smaller, bottom-left on desktop, slim bar on phones, no blue button | First screen is the hero, not the banner |

## 7. Trust signals: what exists, what is missing

| Signal | State | Action |
|---|---|---|
| Measured results | Three real figures | Keep and enlarge |
| Detailed case studies | Two, well written | Add visuals; add two more |
| Named clients or logos | None | Ask permission; otherwise state "name withheld under NDA" where true |
| Attributed testimonials | First names only | Ask for role plus company type, and link to the project |
| Founder and team | Absent | Photographs, names, short biographies |
| Guarantees | "Fixed price", "you own the code", free fix period | Keep; present as a short promise list |
| Third-party reviews | None | Clutch or Google reviews from the two clients |
| Security and process | Not mentioned | A short "how we handle your data and access" note, if true |
| Company facts | Inconsistent | One legal name, registration, real addresses |

Nothing in the "missing" column is ever filled with invented material.

## 8. Content you need to supply

| Item | For |
|---|---|
| Founder photograph and a few lines in your own words | About, home |
| Team names, roles and photographs (those willing) | About |
| Screens from delivered projects, with permission | Work, services |
| Any small automation or MVP delivered, with numbers | New case studies |
| Client permission for names, logos or fuller quotes | Work, home |
| True addresses, phone numbers, hours and time zone | Footer, contact, structured data |
| What the "lab" has actually built or explored | Lab page |
| Answers to section 3 | Whole site |
