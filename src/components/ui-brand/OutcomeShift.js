import Link from "next/link";
import CountUp from "../home/CountUp";
import { LineArrow } from "./Line";

// Signature component: a measured before → after from a published case study.
// Rule (brand system §7): only figures that appear in a delivered, published case study.
export default function OutcomeShift({ o, href, size = "lg", as: Tag = "div" }) {
  const big = size === "lg";
  const body = (
    <>
      <span className="j-eyebrow">{o.eyebrow}</span>
      <span className="mt-3 block text-[15px] text-ink-muted">{o.what}</span>
      <span className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 tabular-nums">
        {o.before && (
          <>
            <s className="font-mono text-xl text-ink-muted decoration-1 md:text-2xl">{o.before}</s>
            <LineArrow />
          </>
        )}
        <span className={big ? "j-fig text-ink" : "font-display text-[56px] font-bold leading-none tracking-[-0.04em] text-ink"}>
          <CountUp value={o.after} prefix={o.prefix || ""} suffix={o.unit} />
        </span>
      </span>
      <span className="mt-5 flex items-center justify-between font-mono text-xs uppercase tracking-[0.06em] text-gain">
        <span>▼ {o.gain}</span>
        {href && <span className="text-signal opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100" aria-hidden="true">Read the case →</span>}
      </span>
    </>
  );
  if (href)
    return (
      <Link href={href} className="group flex h-full flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
        {body}
      </Link>
    );
  return <Tag className="flex h-full flex-col">{body}</Tag>;
}
