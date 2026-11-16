"use client";
import { useEffect, useState } from "react";
import CalendarButton from "@/components/home/CalendarButton";
import { readConsent, CONSENT_EVENT } from "@/lib/consent";
import { usePathname } from "next/navigation";

// Mobile-only: keeps the primary action in reach once the hero has scrolled away.
export default function StickyCta() {
  const pathname = usePathname() || "/";
  const [show, setShow] = useState(false);
  const [decided, setDecided] = useState(false);
  // The cookie banner and this bar share the bottom edge: wait until the visitor has chosen.
  useEffect(() => {
    const check = () => setDecided(readConsent() !== null);
    const t = setTimeout(check, 1800);
    window.addEventListener(CONSENT_EVENT, check);
    return () => { clearTimeout(t); window.removeEventListener(CONSENT_EVENT, check); };
  }, []);
  useEffect(() => {
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY > document.body.scrollHeight - 700;
      setShow(decided && window.scrollY > 640 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [decided]);
  if (pathname.startsWith("/contact") || pathname.startsWith("/quote")) return null;
  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 px-4 transition-transform duration-200 ${show ? "translate-y-0" : "translate-y-[140%]"}`}
      style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom, 0px))" }}
      aria-hidden={!show}
      inert={!show}
    >
      <CalendarButton className="j-btn j-btn-primary w-full !rounded-full shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)]" source="sticky">
        Book a free call <span className="j-arrow" aria-hidden="true">→</span>
      </CalendarButton>
    </div>
  );
}
