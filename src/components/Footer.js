import React from "react";
import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";

const quickLinks = [
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Case Study", href: "/case-study" },
  { name: "Career", href: "/career" },
];

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/jenisys.in/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/jenisys" },
  { name: "Facebook", href: "https://www.facebook.com" },
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
            <p className="mt-5 font-display text-xl text-ink">Advancing Excellence Beyond Cost</p>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-muted">
              Delivering innovative solutions that drive business growth and operational excellence through
              cutting-edge technology and strategic consulting.
            </p>
            <Link href="/contact" className="j-btn j-btn-secondary mt-7">
              Get Started Today <span className="j-arrow">→</span>
            </Link>
          </div>

          <nav aria-label="Quick Links" className="lg:col-span-2">
            <h2 className={heading}>Quick Links</h2>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className="text-ink-muted transition-colors duration-150 hover:text-ink">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className={heading}>Contact Us</h2>
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
              <a href="tel:+918240384648" className="font-mono text-ink transition-colors duration-150 hover:text-signal">
                +91 8240384648
              </a>
              <a href="mailto:contact@jenisys.in" className="font-mono text-ink transition-colors duration-150 hover:text-signal">
                contact@jenisys.in
              </a>
            </address>
          </div>

          <div className="lg:col-span-3">
            <h2 className={heading}>Stay Connected</h2>
            <ul className="mb-7 flex flex-wrap gap-x-5 gap-y-2">
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="j-link text-[15px]">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mb-3 text-[15px] text-ink">Subscribe to our newsletter</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Jenisys. All rights reserved.</p>
          <Link href="/Privacy-Policy" className="transition-colors duration-150 hover:text-ink">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
