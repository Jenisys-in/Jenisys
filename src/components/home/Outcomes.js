import Link from "next/link";
import CountUp from "./CountUp";
import { outcomes } from "./data";

// The signature proof element (brand system §7).
export default function Outcomes() {
  return (
    <section aria-label="Results from delivered projects" className="j-night">
      <div className="j-wrap">
        <ul className="grid border-y border-line md:grid-cols-3">
          {outcomes.map((o, i) => (
            <li key={i} className={`border-line ${i > 0 ? "border-t md:border-t-0 md:border-l" : ""}`}>
              <Link href={o.href} className="group flex h-full flex-col gap-3 px-1 py-8 md:px-8 md:py-10 transition-colors duration-200 hover:bg-deep">
                <span className="j-eyebrow">{o.eyebrow}</span>
                <span className="text-sm text-ink-muted">{o.what}</span>
                <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1 tabular-nums">
                  {o.before && (
                    <>
                      <s className="font-mono text-xl text-ink-muted decoration-1">{o.before}</s>
                      <span className="font-mono text-signal" aria-hidden="true">→</span>
                    </>
                  )}
                  <span className="font-display text-[56px] md:text-[64px] font-bold leading-none tracking-[-0.04em] text-ink">
                    <CountUp value={o.after} prefix={o.prefix || ""} suffix={o.unit} />
                  </span>
                </span>
                <span className="mt-auto flex items-center justify-between font-mono text-xs uppercase tracking-[0.06em] text-gain">
                  <span>▼ {o.gain}</span>
                  <span className="text-signal opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
