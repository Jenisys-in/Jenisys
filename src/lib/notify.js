import "server-only";

// Instant alerts to your phone through a Telegram bot (free).
// Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in Vercel; without them alerts are skipped.

const esc = (s) => String(s ?? "").replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]);

export async function notify(title, lines = []) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat) return false;
  const text = [`<b>${esc(title)}</b>`, ...lines.filter(Boolean).map((l) => esc(l).slice(0, 600))].join("\n").slice(0, 3800);
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ chat_id: chat, text, parse_mode: "HTML", disable_web_page_preview: true }),
      signal: AbortSignal.timeout(5000),
    });
    return res.ok;
  } catch {
    return false;
  }
}
