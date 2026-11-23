// middleware.js
import { NextResponse } from "next/server";

// Basic in-memory rate limiter for /api/* (per instance). Also rewrites
// schedule.jenisys.in to /schedule and fixes the old /Privacy-Policy URL.
const rateLimit = new Map();

export function middleware(req) {
  // Rate-limit the form APIs only (spam protection). Pages are static and Vercel's
  // platform DDoS protection covers them; counting page views here would throttle
  // fast browsing and crawlers, because Next.js prefetches every on-screen link.
  // Separate buckets, so page-event beacons can never use up a visitor's allowance for sending a form.
  if (req.nextUrl.pathname.startsWith("/api/")) {
    const ip = (req.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
    const bucket = req.nextUrl.pathname === "/api/t" ? "t" : req.nextUrl.pathname.startsWith("/api/cron/") ? "cron" : "api";
    const limit = bucket === "t" ? 90 : bucket === "cron" ? 5 : 20;
    const key = `${bucket}:${ip}`;
    const now = Date.now();
    const entry = rateLimit.get(key);
    const data = entry && entry.resetTime > now ? entry : { count: 0, resetTime: now + 60 * 1000 };
    if (data.count >= limit) {
      return new NextResponse("Too Many Requests", { status: 429 });
    }
    data.count++;
    rateLimit.set(key, data);
    if (rateLimit.size > 5000) {
      for (const [k, v] of rateLimit) if (v.resetTime <= now) rateLimit.delete(k);
    }
  }

  // Old capitalised URL → lowercase canonical. Exact, case-sensitive match here, because
  // next.config redirects match case-insensitively and would loop on this pair.
  if (req.nextUrl.pathname === "/Privacy-Policy") {
    const to = req.nextUrl.clone();
    to.pathname = "/privacy-policy";
    return NextResponse.redirect(to, 308);
  }

  const host = req.headers.get("host") || "";
  const url = req.nextUrl.clone();

  // If coming from schedule.jenisys.in → serve /schedule
  if (host.startsWith("schedule.jenisys.in")) {
    url.pathname = "/schedule";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

// Run only on pages and API routes — never on build assets, images or files in /public.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.*\\.xml|brand/|img/|.*\\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico|mp4|webm|woff2?)$).*)"],
};
