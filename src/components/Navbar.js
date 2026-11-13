"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

const services = [
  { name: "Web Development", path: "/services/web-development" },
  { name: "Mobile App Development", path: "/services/mobile-development" },
  { name: "Cloud Solutions", path: "/services/cloud-solutions" },
  { name: "AI & Machine Learning", path: "/services/ai-ml" },
  { name: "Custom Software Development", path: "/services/Custom-Software-Development" },
  { name: "IT consulting", path: "/services/IT-consulting" },
  { name: "Maintenance & Support", path: "/services/Maintenance" },
];

const aboutItems = [
  { name: "Learn About Us", path: "/about" },
  { name: "Industries We Serve", path: "/industries" },
];

const navItems = [
  { name: "Case Studies", path: "/case-study" },
  { name: "Services", path: "/services", dropdownItems: services },
  { name: "About Us", path: "/about", dropdownItems: aboutItems },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

function isItemActive(item, pathname) {
  if (pathname === item.path) return true;
  if (item.dropdownItems) return item.dropdownItems.some((d) => pathname === d.path);
  return item.path !== "/" && pathname.startsWith(item.path + "/");
}

function DesktopItem({ item, pathname, open, setOpen }) {
  const active = isItemActive(item, pathname);
  const closeTimer = useRef(null);
  const isOpen = open === item.name;

  const base =
    "relative flex items-center gap-1.5 px-3.5 py-2 text-[15px] rounded-lg transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal";
  const tone = active ? "text-ink" : "text-ink-muted hover:text-ink";
  const indicator = active && (
    <span className="absolute left-3.5 right-3.5 -bottom-[13px] h-px bg-gradient-to-r from-navy via-volt to-signal" />
  );

  if (!item.dropdownItems) {
    return (
      <Link href={item.path} className={`${base} ${tone}`} aria-current={active ? "page" : undefined}>
        {item.name}
        {indicator}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        clearTimeout(closeTimer.current);
        setOpen(item.name);
      }}
      onMouseLeave={() => {
        closeTimer.current = setTimeout(() => setOpen(null), 140);
      }}
    >
      <button
        type="button"
        className={`${base} ${tone}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setOpen(isOpen ? null : item.name)}
      >
        {item.name}
        <ChevronDown size={14} className={`transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`} />
        {indicator}
      </button>
      <div
        className={`absolute left-0 top-full pt-3 transition-all duration-150 ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-1 invisible pointer-events-none"
        }`}
      >
        <ul className="min-w-[17rem] rounded-xl border border-line bg-deep/95 backdrop-blur-xl p-1.5 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6)]">
          {item.dropdownItems.map((d) => (
            <li key={d.path}>
              <Link
                href={d.path}
                onClick={() => setOpen(null)}
                className={`group flex items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-sm transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal ${
                  pathname === d.path ? "text-ink bg-raised" : "text-ink-muted hover:text-ink hover:bg-raised"
                }`}
              >
                {d.name}
                <span className="font-mono text-signal opacity-0 -translate-x-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Navbar() {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(null);
  const [mobileSection, setMobileSection] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpen(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-flare focus:px-4 focus:py-2 focus:text-on-flare"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
          scrolled || mobileOpen ? "bg-void/85 backdrop-blur-xl border-b border-line" : "bg-void border-b border-transparent"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <nav aria-label="Main" className="j-wrap flex h-16 lg:h-[72px] items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
            aria-label="Jenisys home"
          >
            <Image src="/brand/jenisys-mark-64.png" alt="" width={36} height={36} priority />
            <span className="font-display text-[22px] font-semibold tracking-[-0.02em] text-ink">Jenisys</span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <DesktopItem key={item.name} item={item} pathname={pathname} open={open} setOpen={setOpen} />
            ))}
          </div>

          <div className="hidden lg:block">
            <Link href="/contact" className="j-btn j-btn-primary !min-h-[42px] !py-2.5 !px-5">
              Get Started <span className="j-arrow">→</span>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden -mr-2 p-2.5 rounded-lg text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-40 bg-void transition-[opacity,transform] duration-200 ${
          mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="j-wrap h-full overflow-y-auto pt-24 pb-10 flex flex-col">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.name} className="border-b border-line">
                {item.dropdownItems ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-4 font-display text-2xl text-ink"
                      aria-expanded={mobileSection === item.name}
                      onClick={() => setMobileSection(mobileSection === item.name ? null : item.name)}
                      tabIndex={mobileOpen ? 0 : -1}
                    >
                      {item.name}
                      <ChevronDown
                        size={20}
                        className={`text-ink-muted transition-transform duration-150 ${
                          mobileSection === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileSection === item.name && (
                      <ul className="pb-4">
                        {item.dropdownItems.map((d) => (
                          <li key={d.path}>
                            <Link
                              href={d.path}
                              className="block py-2.5 pl-1 text-ink-muted hover:text-signal"
                              tabIndex={mobileOpen ? 0 : -1}
                            >
                              {d.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className="block py-4 font-display text-2xl text-ink"
                    tabIndex={mobileOpen ? 0 : -1}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="j-btn j-btn-primary mt-8 w-full" tabIndex={mobileOpen ? 0 : -1}>
            Get Started <span className="j-arrow">→</span>
          </Link>
        </div>
      </div>

      <div className="h-16 lg:h-[72px] bg-void" style={{ marginTop: "env(safe-area-inset-top, 0px)" }} aria-hidden="true" />
    </>
  );
}

export default Navbar;
