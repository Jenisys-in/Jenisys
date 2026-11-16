import { outcomes as all } from "@/lib/outcomes";
import OutcomeShift from "../ui-brand/OutcomeShift";
import { ChapterHead } from "../ui-brand/Chapter";

const outcomes = all.filter((o) => o.featured).map((o) => ({ ...o, href: `/case-study/${o.slug}` }));

// Chapter 01 — proof before promise. The signature element, enlarged.
export default function Outcomes({ compact = false, headless = false }) {
  return (
    <section aria-labelledby="proof-title" className={`j-night ${compact ? "" : "pt-8 pb-20 md:pt-12 md:pb-28"}`}>
      <div className="j-wrap">
        {!headless && (
          <ChapterHead
            n="01"
            name="Proof"
            id="proof-title"
            title="Results from delivered projects"
            lead="Real before-and-after figures, taken from two published case studies."
            className="j-rise mb-12 md:mb-16"
          />
        )}
        {headless && <h2 id="proof-title" className="sr-only">Results from delivered projects</h2>}
        <ul className="grid border-y border-line md:grid-cols-3">
          {outcomes.map((o, i) => (
            <li key={i} className={`border-line px-1 py-9 md:px-8 md:py-12 md:first:pl-0 md:last:pr-0 ${i > 0 ? "border-t md:border-t-0 md:border-l" : ""}`}>
              <OutcomeShift o={o} href={o.href} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
