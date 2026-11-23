# Website ↔ Jesper CRM integration (23 November 2026)

Branches: website `claude/charming-goldberg-dyj5cz`, Jesper `claude/website-integration`. Not merged, not deployed.

## How data flows

```
Browser (only after cookie consent)
  └─ VisitorTracker: page views, time per page and section, reading depth, buying signals
       └─ POST /api/t (same-origin beacon) ──► Supabase: web_events (raw, 90 days) + web_visitors (totals, score)
                                                  └─ high intent ──► Jesper /api/v1/signals ──► crm_web_visitors
Contact form ──► /api/contact ──► Supabase contacts (always first) ──► Jesper lead (exactly once)
Calendly booking ──► /api/booking ──► verified with Calendly API ──► Supabase bookings ──► Jesper lead at "Discovery call" + meeting task
Newsletter ──► Supabase only (links the visitor's email; no CRM lead)
Daily cron ──► heartbeat (Supabase stays active) · Jesper /health (wakes Neon) · retry unsynced leads · delete old raw events
```

**Which database holds what**

| Supabase (website) | Jesper on Neon (CRM) |
|---|---|
| Every form submission and booking, with sync status | Leads, contacts, companies, tasks, activities |
| Raw page events (deleted after 90 days) | One "Website" activity per lead visit (at most every 6 hours) |
| Visitor totals and intent score | High-intent visitors (`crm_web_visitors`), kept out of the pipeline |
| Heartbeat | Idempotency keys (`crm_intake_refs`), tracked-link tokens |

**No duplicates:** each website record is sent with `externalRef` (`web:contact:<id>`, `web:booking:<id>`). Jesper processes each once, even if the same one arrives five times at once. A second enquiry from someone with an open lead is logged on that lead with a reply task. A colleague from the same company goes onto the company's open lead, with their name and email in the note.

**Kept separate:** website leads have the `website` tag and the source "Website contact form" or "Website booking" (saved view *Website leads*). Anonymous visitors never become leads.

## Intent score (0–100)

| Signal | Points |
|---|---|
| Pricing page viewed (or 30 s on pricing) | 20 |
| Case study read to 75% | 15 |
| Each service page (max 3) | 5 |
| Came back (second visit) | 15 |
| Opened the booking calendar | 25 |
| Booked a call | 40 |
| Started the brief form | 10 |
| Sent the brief | 30 |
| Finished the fit evaluation | 20 |
| Joined the newsletter | 10 |
| Arrived through a personal link | 10 |

Known people (email or personal link) are reported to Jesper on each new visit; anonymous visitors only at 50+ and on every 15-point rise. A linked visitor at 60+ (or opening a personal link) gets a follow-up task for today and a Telegram alert.

## Setup (in this order)

1. **Deploy Jesper** from `claude/website-integration` (`npm run build:server`, then deploy to Neon Functions as before). The schema upgrades itself to version 2 on the first request.
2. **In Jesper → Admin → API keys & MCP:** create a key named "Jenisys website" with **Capture leads** and **Send website visitor signals**. Copy it once.
3. **In Vercel → Project → Settings → Environment Variables** (Production and Preview):
   - `JESPER_API_URL` = the Jesper server address (the one in Jesper's sign-in screen)
   - `JESPER_API_KEY` = the key from step 2
   - `CRON_SECRET` = any long random string (Vercel Cron sends it automatically)
   - `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` (optional): create a bot with @BotFather, send it a message, then read your chat ID from `https://api.telegram.org/bot<token>/getUpdates`
   - `CALENDLY_TOKEN` (optional): Calendly → Integrations → API & webhooks → Personal access token. Without it, bookings still alert you but stay in Calendly.
4. **Merge the website branch.** `vercel.json` adds the daily job (04:17 UTC).
5. Test once: send a brief from the live site. It should appear in Jesper under *Website leads* within seconds, and on Telegram.

Without the variables, the website works exactly as before (Supabase only), and unsynced leads are delivered by the daily job once the variables are added.

## Security

- Jesper key only on the server; the browser never sees it. Separate key scope (`web:write`) for signals.
- Tracking endpoint: same-origin only, 16 KB limit, typed and bounded fields, event types allow-listed, bots ignored, own rate-limit bucket (90/min) so it cannot block form sending (20/min).
- Contact form: honeypot field, generic error messages (no internal details), stored before any outside call.
- Bookings verified against Calendly's API; forged URLs are refused.
- Supabase: new tables have row-level security on with no public policies; the scoring function can only be run by the service role. Security advisor: only the expected "RLS on, no policy" notices.
- Jesper: existing hashed keys, rate limits, audit log; new inputs validated and length-capped; concurrent duplicates return 409.
- Dependencies: Next.js patched to 16.4.6 (critical advisory). Jesper: MCP SDK and Hono node server patched.

## Tests

- Jesper: 17/17 server and unit tests, including the website integration and the upgrade from schema 1.
- Website end-to-end, browser → website → Supabase schema → Jesper: 27/27 (consent and no-consent, tracked links, repeat enquiries, anonymous visitors, attacks, booking, daily job and retry).
- Regression: 22 pages crawled, no broken links; 30/30 interaction checks. Lighthouse mobile 92–96, largest paint 0.9 s, layout shift 0 (same as before).

## Still open

- `nodemailer` needs a major upgrade (advisory concerns options the site does not pass from users); `zod` 4 and `exceljs` in Jesper likewise.
- Calendly's API access on the free plan should be confirmed when you create the token.
- The rate limiter is per server instance (in memory); Vercel's platform protection covers large floods.
- The new privacy-policy paragraphs describe the tracking accurately but are legal text: please read them before merging.
