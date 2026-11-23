import "server-only";

// Instant alerts about new enquiries, bookings and hot leads. Both channels are free and optional:
//   Slack:    SLACK_WEBHOOK_URL (an incoming webhook, https://hooks.slack.com/services/…)
//   Telegram: TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID
// With neither set, alerts are skipped and nothing else changes.

const slackEsc = (s) => String(s ?? "").replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]);
const htmlEsc = slackEsc;

async function post(url, body) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(5000),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function notify(title, lines = []) {
  const clean = lines.filter(Boolean).map((l) => String(l).slice(0, 600));
  const sent = [];

  const slack = process.env.SLACK_WEBHOOK_URL;
  if (slack && slack.startsWith("https://hooks.slack.com/")) {
    const text = [`*${slackEsc(title)}*`, ...clean.map(slackEsc)].join("\n").slice(0, 3800);
    sent.push(post(slack, { text, unfurl_links: false, unfurl_media: false }));
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat = process.env.TELEGRAM_CHAT_ID;
  if (token && chat) {
    const text = [`<b>${htmlEsc(title)}</b>`, ...clean.map(htmlEsc)].join("\n").slice(0, 3800);
    sent.push(post(`https://api.telegram.org/bot${token}/sendMessage`, { chat_id: chat, text, parse_mode: "HTML", disable_web_page_preview: true }));
  }

  const results = await Promise.all(sent);
  return results.some(Boolean);
}
