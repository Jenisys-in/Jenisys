import Tilt from "./Tilt";

// 3D scene: a product taking shape on laptop and phone. Abstract UI only — no fake data.
function Bars({ rows = 3 }) {
  return (
    <div className="flex flex-col gap-2">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="h-6 w-6 shrink-0 rounded-md bg-volt/25" />
          <span className="j-skel h-2.5" style={{ width: `${70 - i * 12}%` }} />
        </div>
      ))}
    </div>
  );
}

export default function MvpDevices({ className = "" }) {
  return (
    <Tilt className={className}>
      <div className="j-stage relative mx-auto h-[380px] w-full max-w-[540px]" aria-hidden="true">
        <div className="j-floor absolute inset-[-15%] rounded-full" style={{ transform: "translateZ(-50px)" }} />
        {/* Laptop screen */}
        <div className="j-card3d absolute left-[2%] top-[6%] w-[78%] overflow-hidden" style={{ transform: "translateZ(10px)" }}>
          <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-alert/70" />
            <span className="h-2 w-2 rounded-full bg-flare/70" />
            <span className="h-2 w-2 rounded-full bg-gain/70" />
            <span className="j-skel ml-3 h-2 w-32" />
          </div>
          <div className="grid grid-cols-[72px_1fr]">
            <div className="flex flex-col gap-3 border-r border-line p-3">
              <span className="h-5 w-5 rounded-md bg-gradient-to-br from-navy via-volt to-signal" />
              <span className="j-skel h-2 w-10" />
              <span className="j-skel h-2 w-8" />
              <span className="j-skel h-2 w-11" />
              <span className="j-skel h-2 w-9" />
            </div>
            <div className="flex flex-col gap-3 p-4">
              <div className="flex items-center justify-between">
                <span className="j-skel-strong h-3 w-28" />
                <span className="h-6 w-16 rounded-md bg-flare/80" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-14 rounded-lg border border-line bg-raised/60" />
                <div className="h-14 rounded-lg border border-line bg-raised/60" />
                <div className="h-14 rounded-lg border border-signal/40 bg-signal/10" />
              </div>
              <svg viewBox="0 0 200 50" className="h-14 w-full">
                <path d="M0 40 C 30 38, 40 20, 70 24 S 120 10, 150 16 S 185 6, 200 4" fill="none" stroke="#14e2f9" strokeWidth="2" />
                <path d="M0 40 C 30 38, 40 20, 70 24 S 120 10, 150 16 S 185 6, 200 4 L200 50 L0 50Z" fill="url(#mvp-a)" />
                <defs>
                  <linearGradient id="mvp-a" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#14e2f9" stopOpacity=".25" />
                    <stop offset="1" stopColor="#14e2f9" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <Bars rows={2} />
            </div>
          </div>
        </div>
        {/* Phone */}
        <div className="j-card3d j-glow-signal j-float absolute right-[2%] top-[30%] w-[30%] min-w-[130px] overflow-hidden rounded-[22px] p-3" style={{ transform: "translateZ(90px)" }}>
          <span className="mx-auto mb-3 block h-1.5 w-10 rounded-full bg-ink-muted/40" />
          <span className="mb-3 block h-16 rounded-xl bg-gradient-to-br from-navy via-volt to-signal opacity-80" />
          <span className="j-skel-strong mb-2 block h-2.5 w-3/4" />
          <span className="j-skel mb-4 block h-2 w-1/2" />
          <Bars rows={3} />
          <span className="mt-4 block h-7 rounded-lg bg-flare/85" />
        </div>
        {/* Launch chip */}
        <div className="j-card3d absolute bottom-[4%] left-[8%] flex items-center gap-2 px-3 py-2" style={{ transform: "translateZ(60px)" }}>
          <span className="h-2 w-2 rounded-full bg-gain shadow-[0_0_10px_#3ee59c]" />
          <span className="font-mono text-[11px] text-ink">Deployed to production</span>
        </div>
      </div>
    </Tilt>
  );
}
