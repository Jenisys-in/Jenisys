// middleware.js
import { NextResponse } from "next/server";

/**
 * This middleware checks the incoming request's host.
 * If the host starts with schedule.jenisys.in it rewrites the URL to /schedule,
 * so your /app/schedule/page.tsx is served instead of the homepage.
 */
export function middleware(req) {
  const host = req.headers.get("host") || "";
  const url = req.nextUrl.clone();

  // If coming from schedule.jenisys.in → serve /schedule
  if (host.startsWith("schedule.jenisys.in")) {
    url.pathname = "/schedule";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
