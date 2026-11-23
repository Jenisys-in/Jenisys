import React from "react";
import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";
import CookieSettingsButton from "./CookieSettingsButton";
import CalendarButton from "./home/CalendarButton";

const quickLinks = [
  { name: "Work", href: "/case-study" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Technical Fit Evaluation", href: "/evaluate" },
  { name: "Careers", href: "/career" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/jenisys.in/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/jenisys" },
];

const heading = "j-eyebrow mb-5";

const Footer = () => {
  return (
    <footer className="j-night relative overflow-hidden border-t border-line">
      <div className="j-wrap pt-20 pb-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Jenisys home">
              <Image src="/brand/jenisys-mark-64.png" alt="" width={40} height={40} />
              <span className="font-display text-2xl font-semibold tracking-[-0.02em]">JENISYS</span>
            </Link>
            <p className="mt-5 font-display text-2xl leading-tight tracking-[-0.02em] text-ink">Technology, turned into advantage.</p>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-muted">
              Fixed-price AI automation and MVP development, with offices in Atlanta and Kolkata.
            </p>
            <CalendarButton className="j-btn j-btn-primary mt-7" source="footer">
              Book a free call <span className="j-arrow" aria-hidden="true">→</span>
            </CalendarButton>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <h2 className={heading}>Explore</h2>
            <ul className="flex flex-col gap-0.5">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="inline-block py-2.5 text-ink-muted transition-colors duration-150 hover:text-ink">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className={heading}>Contact</h2>
            <address className="not-italic flex flex-col gap-4 text-[15px] text-ink-muted">
              <p className="leading-relaxed">
                Raja Ram mohon roy
                <br />
                Sarani
                <br />
                Serampore, West Bengal 712203
                <br />
                India
              </p>
              <a href="tel:+918240384648" className="inline-block py-2 font-mono text-ink transition-colors duration-150 hover:text-signal">
                +91 8240384648
              </a>
              <a href="mailto:contact@jenisys.in" className="inline-block py-2 font-mono text-ink transition-colors duration-150 hover:text-signal">
                contact@jenisys.in
              </a>
            </address>
          </div>

          <div className="lg:col-span-3">
            <h2 className={heading}>Follow and subscribe</h2>
            <ul className="mb-7 flex flex-wrap gap-x-5 gap-y-2">
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="j-link inline-block py-3 text-[15px]">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mb-3 text-[15px] text-ink">New articles, by email.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Jenisys. All rights reserved.</p>
          <span className="flex gap-6">
            <CookieSettingsButton className="inline-block py-2 transition-colors duration-150 hover:text-ink" />
            <Link href="/privacy-policy" className="inline-block py-2 transition-colors duration-150 hover:text-ink">
              Privacy Policy
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
