// middleware.js
import { NextResponse } from "next/server";

/**
 * This middleware checks the incoming request's host.
 * If the host starts with schedule.jenisys.in it rewrites the URL to /schedule,
 * so your /app/schedule/page.tsx is served instead of the homepage.
 */
// Basic in-memory rate limiter (per-instance)
const rateLimit = new Map();

export function middleware(req) {
  const ip = (req.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  
  // Clean up old entries
  if (rateLimit.has(ip) && rateLimit.get(ip).resetTime < now) {
    rateLimit.delete(ip);
  }

  const limitData = rateLimit.get(ip) || { count: 0, resetTime: now + windowMs };
  
  // Stricter limit for API routes (20 req/min), lenient for pages (300 req/min).
  // Static assets are excluded by the matcher below, so one page view counts once.
  const isApi = req.nextUrl.pathname.startsWith("/api/");
  const limit = isApi ? 20 : 300;

  if (limitData.count >= limit) {
    return new NextResponse("Too Many Requests", { status: 429 });
  }

  limitData.count++;
  rateLimit.set(ip, limitData);

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
