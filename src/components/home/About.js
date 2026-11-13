import Link from "next/link";
import { vision, mission, values, valuesIntro } from "./data";

export default function About() {
  return (
    <section className="j-night py-24 md:py-32" aria-labelledby="vision-title">
      <div className="j-wrap">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="j-eyebrow mb-4" id="vision-title">Our Vision</p>
            <p className="font-display text-[28px] md:text-[40px] font-medium leading-[1.15] tracking-[-0.025em] text-ink text-balance">
              {vision}
            </p>
            <Link href="/about" aria-label="Learn more about Jenisys and our vision" className="j-btn j-btn-secondary mt-10">
              Learn More <span className="j-arrow">→</span>
            </Link>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <h2 className="j-eyebrow mb-6">Our Mission</h2>
            <ul className="border-t border-line">
              {mission.map((m) => (
                <li key={m} className="flex gap-4 border-b border-line py-5 text-[17px] leading-snug text-ink">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-28">
          <p className="j-eyebrow mb-4">{valuesIntro.eyebrow}</p>
          <h2 className="j-h2 max-w-3xl">
            {valuesIntro.titleA} <span className="text-ink-muted">{valuesIntro.titleB}</span>
          </h2>
          <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <li key={v.title} className="bg-void p-7 transition-colors duration-200 hover:bg-deep">
                <h3 className="font-display text-xl font-semibold tracking-[-0.015em] text-ink">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{v.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
