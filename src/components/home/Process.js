import Reveal from "./Reveal";
import { process, processIntro } from "./data";

// A real sequence, so numbered steps carry meaning. The light rail runs through them.
export default function Process() {
  return (
    <section className="j-night py-24 md:py-32" aria-labelledby="process-title">
      <div className="j-wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <h2 id="process-title" className="j-h2">{processIntro.title}</h2>
          <p className="j-lead mt-5">{processIntro.lead}</p>
        </div>
        <ol className="relative lg:col-span-8 lg:col-start-6">
          <span aria-hidden="true" className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-navy via-volt to-signal" />
          {process.map((step, i) => (
            <Reveal as="li" key={step.title} className="relative grid grid-cols-[32px_1fr] gap-6 pb-12 last:pb-0">
              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-void font-mono text-xs text-signal tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-0.5">
                <h3 className="j-h3 text-ink">{step.title}</h3>
                <p className="mt-2.5 max-w-[56ch] text-[17px] leading-relaxed text-ink-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
