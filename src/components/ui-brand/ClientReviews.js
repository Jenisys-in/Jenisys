import { Star } from "lucide-react";
import { ChapterHead } from "./Chapter";
import { RibbonStill } from "./Line";
import { reviews, upwork } from "@/lib/upwork";

// Real client reviews from the owner's Upwork profile. Names are left out; the project title identifies each one.
export default function ClientReviews({ n = "04", ground = "volt", id = "reviews", count = 4 }) {
  const shown = reviews.slice(0, count);
  return (
    <section id={id} className={`${ground === "paper" ? "j-paper bg-deep" : ground === "night" ? "j-night" : "j-volt"} j-edge relative isolate overflow-hidden j-section scroll-mt-20`} aria-labelledby={`${id}-title`}>
      {ground === "volt" && <RibbonStill lite className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-25" />}
      <div className="j-wrap">
        <ChapterHead
          n={n}
          name="Client reviews"
          id={`${id}-title`}
          title="What clients say after the work ships"
          lead={`Top Rated on Upwork: ${upwork.fiveStarCount} of ${upwork.reviewCount} client reviews are five stars.`}
        />
        <ul className="mt-14 grid border-y border-line md:grid-cols-2">
          {shown.map((r, i) => (
            <li key={r.project} className={`flex flex-col border-line px-1 py-9 md:px-8 md:py-12 ${i % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"} ${i > 1 ? "border-t" : ""} ${i > 0 ? "max-md:border-t" : ""}`}>
              <p className="flex items-center gap-1 text-signal" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" aria-hidden="true" />
                ))}
              </p>
              <blockquote className="mt-5 font-display text-[20px] font-medium leading-[1.35] tracking-[-0.01em] text-ink md:text-[22px]">
                “{r.quote}”
              </blockquote>
              <p className="mt-auto pt-7 font-mono text-[12px] uppercase tracking-[0.06em] text-ink-muted">
                <span className="text-ink">Upwork client</span> · {r.project} · {r.date}
              </p>
            </li>
          ))}
        </ul>
        <a href={upwork.profileUrl} target="_blank" rel="noopener noreferrer" className="j-link mt-8 inline-flex items-center gap-2 py-2 text-[15px]">
          See every review on Upwork <span className="font-mono" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
