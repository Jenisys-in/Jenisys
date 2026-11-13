import Link from "next/link";
import RibbonMount from "./RibbonMount";
import { hero } from "./data";

export default function Hero() {
  return (
    <section className="j-night relative isolate overflow-hidden" aria-labelledby="hero-title">
      {/* Static backdrop: renders instantly, and is the whole picture when WebGL is unavailable */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 j-grid-bg" />
      <div
        aria-hidden="true"
        className="absolute -z-20 right-[-20%] top-[-10%] h-[90%] w-[85%] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(27,42,160,.55), rgba(76,141,255,.18) 55%, transparent)" }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <RibbonMount />
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-void" />

      <div className="j-wrap pt-16 pb-20 md:pt-28 md:pb-32 lg:pt-32 lg:pb-40">
        <div className="max-w-[46rem]">
          <p className="j-eyebrow mb-6 flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-gradient-to-r from-navy via-volt to-signal" aria-hidden="true" />
            {hero.proof[0]}
          </p>
          <h1 id="hero-title" className="j-h1 text-ink">
            {hero.titleStart} <span className="relative whitespace-nowrap text-ink">{hero.titleEnd}<span aria-hidden="true" className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-navy via-volt to-signal" /></span>
          </h1>
          <p className="j-lead mt-7">{hero.lead}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="j-btn j-btn-primary">
              Start a Project <span className="j-arrow">→</span>
            </Link>
            <Link href="/case-study" className="j-btn j-btn-secondary">
              See Our Work
            </Link>
          </div>
          <ul className="mt-12 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-8 font-mono text-[13px] text-ink-muted">
            {hero.proof.slice(1).map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_10px_#14e2f9]" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
