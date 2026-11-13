import Link from "next/link";

const steps = [
  { n: "01", title: "Free call", body: "30 minutes to understand your goal. No sales pitch.", meta: "Free" },
  { n: "02", title: "Discovery Sprint", body: "Scope, prototype and a fixed quote in 5 working days.", meta: "$499, credited" },
  { n: "03", title: "Build", body: "Working software every week, demoed to you live.", meta: "1–10 weeks" },
  { n: "04", title: "Launch and support", body: "We ship, fix anything that comes up, and stay on if you want us.", meta: "Free fix period" },
];

export default function HowItWorks() {
  return (
    <section className="j-night bg-deep border-y border-line py-24 md:py-32" aria-labelledby="how-title">
      <div className="j-wrap">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="j-eyebrow mb-4">How it works</p>
            <h2 id="how-title" className="j-h2">From first call to launch, with no surprises</h2>
          </div>
          <p className="j-lead lg:col-span-5">You know the price, the scope and the date before we write a line of code.</p>
        </div>

        {/* 3D staircase: each step sits higher than the last */}
        <ol className="j-scene mt-16 grid gap-5 md:grid-cols-4" aria-label="Steps">
          {steps.map((s, i) => (
            <li key={s.n} className="md:pt-[var(--lift)]" style={{ "--lift": `${(3 - i) * 28}px` }}>
              <div
                className={`j-card3d h-full p-6 transition-transform duration-300 hover:-translate-y-1 ${i === 3 ? "j-glow-signal" : ""}`}
                style={{ transform: "rotateX(8deg)" }}
              >
                <span className="font-display text-5xl font-bold tracking-[-0.04em] bg-gradient-to-br from-volt to-signal bg-clip-text text-transparent">{s.n}</span>
                <h3 className="j-h3 mt-4">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{s.body}</p>
                <p className="mt-5 font-mono text-[12px] uppercase tracking-[0.06em] text-signal">{s.meta}</p>
              </div>
            </li>
          ))}
        </ol>
        <Link href="/services/discovery-sprint" className="j-link mt-12 inline-flex items-center gap-2 text-[15px]">
          What you get from a Discovery Sprint <span className="font-mono" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
