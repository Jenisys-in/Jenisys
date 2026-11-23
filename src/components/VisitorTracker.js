"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { CONSENT_EVENT } from "@/lib/consent";
import { attribution, consented, flush, forgetVisitor, onSignal, pushEvent } from "@/lib/visitor";

// Measures what a visitor reads, for buying signals in the CRM. Runs only after cookie consent.
// Cost: one IntersectionObserver, one passive scroll listener and a beacon when the tab is hidden.
// Nothing here blocks rendering or input.

const label = (path) => (path === "/" ? "home" : path.replace(/^\/+|\/+$/g, ""));
const sectionKey = (el) => {
  const raw = el.id || el.getAttribute("aria-labelledby") || "";
  return raw.replace(/-title$/, "").slice(0, 40);
};

export default function VisitorTracker() {
  const pathname = usePathname();
  const page = useRef(null); // { path, visibleSince, ms, depth, sections: Map, observer }
  const enabled = useRef(false);

  // Close the current page: turn its timers into events.
  const closePage = () => {
    const p = page.current;
    if (!p) return;
    const now = performance.now();
    if (p.visibleSince != null) p.ms += now - p.visibleSince;
    for (const [key, s] of p.sections) {
      if (s.since != null) s.ms += now - s.since;
      if (s.ms >= 2000) pushEvent({ t: "section", p: p.path, s: `${label(p.path)} › ${key}`, ms: Math.round(s.ms) });
    }
    if (p.ms >= 2000) pushEvent({ t: "section", p: p.path, s: label(p.path), ms: Math.round(p.ms) });
    if (p.depth > 0) pushEvent({ t: "read", p: p.path, d: Math.round(p.depth) });
    p.observer?.disconnect();
    page.current = null;
  };

  // Bank the time so far without closing the page (tab hidden, periodic flush).
  const bank = () => {
    const p = page.current;
    if (!p) return;
    closePage();
    openPage(p.path, true);
  };

  const openPage = (path, resumed = false) => {
    const p = { path, visibleSince: document.hidden ? null : performance.now(), ms: 0, depth: 0, sections: new Map(), observer: null };
    page.current = p;
    if (!resumed) pushEvent({ t: "page_view", p: path });
    const vh = window.innerHeight || 800;
    p.observer = new IntersectionObserver((entries) => {
      const now = performance.now();
      for (const e of entries) {
        const key = sectionKey(e.target);
        if (!key) continue;
        const s = p.sections.get(key) || { ms: 0, since: null };
        // "Reading" = the section fills at least half the screen, or is at least half visible if it is short.
        const reading = e.isIntersecting && e.intersectionRect.height >= Math.min(vh * 0.5, e.boundingClientRect.height * 0.5);
        if (reading && s.since == null && !document.hidden) s.since = now;
        if (!reading && s.since != null) { s.ms += now - s.since; s.since = null; }
        p.sections.set(key, s);
      }
    }, { threshold: [0, 0.25, 0.5, 0.75, 1] });
    document.querySelectorAll("main section[id], main section[aria-labelledby]").forEach((el) => p.observer.observe(el));
  };

  useEffect(() => {
    let interval;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const p = page.current;
        if (!p) return;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const d = h > 0 ? (window.scrollY / h) * 100 : 100;
        if (d > p.depth) p.depth = Math.min(100, d);
      });
    };
    const onVisibility = () => {
      if (!page.current) return;
      if (document.hidden) {
        bank();
        flush();
      } else {
        bank(); // fresh observer, so sections already on screen start counting again
      }
    };
    // Leaving the page (link to another page, reload, closing the tab): always send what was measured.
    const onPageHide = () => {
      if (!page.current) return;
      closePage();
      flush();
    };
    const start = () => {
      if (enabled.current || !consented()) return;
      enabled.current = true;
      attribution();
      openPage(window.location.pathname);
      window.addEventListener("scroll", onScroll, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
      window.addEventListener("pagehide", onPageHide);
      interval = setInterval(() => { if (!document.hidden) { bank(); flush(); } }, 60000);
    };
    const stop = () => {
      enabled.current = false;
      page.current?.observer?.disconnect();
      page.current = null;
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", onPageHide);
      clearInterval(interval);
    };
    const onConsent = (e) => {
      if (e.detail?.granted) start();
      else { stop(); forgetVisitor(); }
    };
    // Buying signals (booking opened, form sent…) go out straight away.
    const off = onSignal(() => setTimeout(flush, 300));
    start();
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => { stop(); off(); window.removeEventListener(CONSENT_EVENT, onConsent); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Client-side navigation: close the old page and start measuring the new one once it has rendered.
  useEffect(() => {
    if (!enabled.current) return;
    if (page.current?.path === pathname) return;
    closePage();
    flush();
    const id = requestAnimationFrame(() => openPage(pathname));
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}
