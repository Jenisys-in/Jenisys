import { BadgeDollarSign, MonitorPlay, KeyRound, Globe2 } from "lucide-react";
import { promises } from "@/lib/offers";
import { ChapterHead } from "../ui-brand/Chapter";

const icons = [BadgeDollarSign, MonitorPlay, KeyRound, Globe2];

// Four commitments as a divided row (no tilted cards). Paper ground.
export default function Promises({ n = "05", compact = false, ground = "paper" }) {
  return (
    <section className={`${ground === "night" ? "j-night j-edge" : "j-paper border-y border-line"} j-section-tight`} aria-labelledby="promise-title">
      <div className="j-wrap">
        {compact ? (
          <h2 id="promise-title" className="sr-only">Our promises</h2>
        ) : (
          <ChapterHead n={n} name="Promises" id="promise-title" title="Agency quality, without agency surprises" className="j-rise mb-12" />
        )}
        <ul className="grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p, i) => {
            const Icon = icons[i];
            return (
              <li key={p.title} className="border-line px-1 py-8 sm:px-8 sm:first:pl-0 lg:border-l lg:first:border-l-0 lg:[&:nth-child(n+2)]:pl-8 [&:nth-child(n+2)]:border-t sm:[&:nth-child(n+2)]:border-t-0 sm:[&:nth-child(n+3)]:border-t">
                <Icon size={22} strokeWidth={1.5} className="text-signal" aria-hidden="true" />
                <h3 className="j-h3 mt-5">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{p.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
