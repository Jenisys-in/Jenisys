import { tech, techIntro } from "./data";

export default function TechStack() {
  const row = [...tech, ...tech];
  return (
    <section className="j-night border-t border-line py-20 md:py-24 overflow-hidden" aria-labelledby="tech-title">
      <div className="j-wrap grid gap-6 lg:grid-cols-12 lg:items-end">
        <h2 id="tech-title" className="j-h2 lg:col-span-6">{techIntro.title}</h2>
        <p className="j-lead lg:col-span-6">{techIntro.lead}</p>
      </div>
      <div className="relative mt-12 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <ul className="j-marquee flex w-max gap-3" aria-label="Technologies we use">
          {row.map((t, i) => (
            <li
              key={i}
              aria-hidden={i >= tech.length ? "true" : undefined}
              className="whitespace-nowrap rounded-md border border-line px-4 py-2.5 font-mono text-sm text-ink-muted transition-colors duration-150 hover:border-signal hover:text-signal"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
