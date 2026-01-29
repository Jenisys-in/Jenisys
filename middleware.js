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
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  
  // Clean up old entries
  if (rateLimit.has(ip) && rateLimit.get(ip).resetTime < now) {
    rateLimit.delete(ip);
  }

  const limitData = rateLimit.get(ip) || { count: 0, resetTime: now + windowMs };
  
  // Stricter limit for API routes (20 req/min), lenient for others (100 req/min)
  const isApi = req.nextUrl.pathname.startsWith("/api/");
  const limit = isApi ? 20 : 100;

  if (limitData.count >= limit) {
    return new NextResponse("Too Many Requests", { status: 429 });
  }

  limitData.count++;
  rateLimit.set(ip, limitData);

  const host = req.headers.get("host") || "";
  const url = req.nextUrl.clone();

  // If coming from schedule.jenisys.in → serve /schedule
  if (host.startsWith("schedule.jenisys.in")) {
    url.pathname = "/schedule";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
