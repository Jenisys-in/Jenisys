import Tilt from "./Tilt";

// Diagrams drawn from the published case studies (states and components are taken from them).

const states = ["Draft", "Submitted", "Under Review", "Accepted", "Adjudicator Appointed", "Response Period", "Determination", "Closed"];

export function AdjudicationVisual({ className = "" }) {
  return (
    <Tilt className={className} max={4}>
      <div className="j-stage relative mx-auto w-full max-w-[460px] py-6" aria-hidden="true">
        <div className="j-floor absolute inset-[-10%]" style={{ transform: "translateZ(-30px)" }} />
        <ol className="relative grid grid-cols-2 gap-x-6 gap-y-3">
          {states.map((s, i) => (
            <li
              key={s}
              className={`j-card3d flex items-center gap-2.5 px-3 py-2.5 ${i === 7 ? "j-glow-signal" : ""}`}
              style={{ transform: `translateZ(${10 + i * 7}px)` }}
            >
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[10px] ${i === 7 ? "bg-signal text-on-flare" : "bg-volt/20 text-volt"}`}>{i + 1}</span>
              <span className="truncate text-[12.5px] text-ink">{s}</span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-center font-mono text-[11px] text-ink-muted">Statutory deadlines enforced at every step</p>
      </div>
    </Tilt>
  );
}

const pipe = [
  { title: "Product", sub: "Usage events" },
  { title: "Billing service", sub: "15-minute metering · proration · dunning", accent: true },
  { title: "Stripe", sub: "Payments and invoices" },
];

export function BillingVisual({ className = "" }) {
  return (
    <Tilt className={className} max={4}>
      <div className="j-stage relative mx-auto w-full max-w-[460px] py-6" aria-hidden="true">
        <div className="j-floor absolute inset-[-10%]" style={{ transform: "translateZ(-30px)" }} />
        <div className="relative flex flex-col items-stretch gap-3">
          {pipe.map((p, i) => (
            <div key={p.title} className="flex flex-col items-center">
              <div
                className={`j-card3d w-full px-4 py-3.5 ${p.accent ? "j-glow-signal" : ""}`}
                style={{ transform: `translateZ(${20 + i * 22}px)` }}
              >
                <p className="text-[14px] font-medium text-ink">{p.title}</p>
                <p className="font-mono text-[11px] text-ink-muted">{p.sub}</p>
              </div>
              {i < pipe.length - 1 && <span className="my-1 h-5 w-px bg-gradient-to-b from-volt to-signal" />}
            </div>
          ))}
          <div className="j-card3d mt-2 flex items-center justify-between px-4 py-2.5" style={{ transform: "translateZ(80px)" }}>
            <span className="font-mono text-[11px] text-ink-muted">Nightly reconciliation</span>
            <span className="h-2 w-2 rounded-full bg-gain shadow-[0_0_10px_#3ee59c]" />
          </div>
        </div>
      </div>
    </Tilt>
  );
}
