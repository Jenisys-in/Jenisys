"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Mobile-only: keeps the primary action in reach once the hero has scrolled away.
export default function StickyCta() {
  const pathname = usePathname() || "/";
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY > document.body.scrollHeight - 700;
      setShow(window.scrollY > 640 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (pathname.startsWith("/contact") || pathname.startsWith("/quote")) return null;
  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-40 px-4 transition-transform duration-200 ${show ? "translate-y-0" : "translate-y-[140%]"}`}
      style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom, 0px))" }}
      aria-hidden={!show}
    >
      <Link
        href="/contact"
        tabIndex={show ? 0 : -1}
        className="j-btn j-btn-primary w-full !rounded-full shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)]"
      >
        Start a Project <span className="j-arrow">→</span>
      </Link>
    </div>
  );
}
