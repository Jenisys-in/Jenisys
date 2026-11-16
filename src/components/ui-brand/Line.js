// The Line: the logo's ribbon of light, extended into the page's story.
// Pure SVG, no JavaScript. Drawn on scroll where the browser supports it; fully drawn otherwise.

const GRADIENT = (id, w = 1) => (
  // userSpaceOnUse: a horizontal line has a zero-height bounding box, which would paint nothing with the default units
  <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={w} y2="0">
    <stop offset="0" stopColor="#1b2aa0" />
    <stop offset=".5" stopColor="#4c8dff" />
    <stop offset="1" stopColor="#14e2f9" />
  </linearGradient>
);

// Tangled on the left, ordered on the right: manual work becoming a process.
export function LineDivider({ className = "", labels = false }) {
  const d =
    "M0 70 C 60 10, 120 120, 170 60 S 250 0, 270 62 S 190 130, 150 84 S 230 20, 330 62 C 420 100, 520 70, 640 70 L 1200 70";
  const svg = (
    <svg viewBox="0 0 1200 140" preserveAspectRatio="none" className={`j-wipe h-[84px] w-full md:h-[112px] ${className}`} aria-hidden="true" focusable="false">
      <defs>{GRADIENT("jl-div", 1200)}</defs>
      <path d={d} fill="none" stroke="url(#jl-div)" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
  if (!labels) return svg;
  // Labelled version: says what the picture means (manual work becoming a process).
  return (
    <figure>
      {svg}
      <figcaption className="mt-2 flex justify-between font-mono text-[12px] uppercase tracking-[0.08em] text-ink-muted">
        <span>Manual work</span>
        <span className="text-signal">Software that runs itself</span>
      </figcaption>
    </figure>
  );
}

// A straight line with an arrowhead, ending at the action. Pass dir="down" for stacked layouts.
export function LineStraight({ className = "", arrow = true }) {
  return (
    <svg viewBox="0 0 600 24" preserveAspectRatio="none" className={`j-wipe h-6 w-full ${className}`} aria-hidden="true" focusable="false">
      <defs>{GRADIENT("jl-str", 600)}</defs>
      <path d={arrow ? "M0 12 L 590 12" : "M0 12 L 600 12"} fill="none" stroke="url(#jl-str)" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      {arrow && <path d="M584 5 L 598 12 L 584 19" fill="none" stroke="#14e2f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />}
    </svg>
  );
}

// Short arrow used inside Outcome Shifts (old value → new value).
export function LineArrow({ className = "" }) {
  return (
    <svg viewBox="0 0 64 20" className={`h-5 w-16 shrink-0 ${className}`} aria-hidden="true" focusable="false">
      <defs>{GRADIENT("jl-arr", 64)}</defs>
      <path d="M2 10 L 58 10" pathLength="1" className="j-draw" fill="none" stroke="url(#jl-arr)" strokeWidth="2" strokeLinecap="round" />
      <path d="M50 3 L 60 10 L 50 17" fill="none" stroke="#14e2f9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// The static hero ribbon: shown instantly, and whenever WebGL is unavailable (phones, low-power, no GPU).
export function RibbonStill({ className = "", lite = false }) {
  const count = lite ? 5 : 9;
  const strands = Array.from({ length: count }, (_, i) => {
    const t = i / (count - 1) - 0.5;
    const a = 70 * t;
    return `M-40 ${300 + a} C 160 ${120 + a * 2.2}, 300 ${520 - a * 2}, 520 ${300 + a * 0.6} S 820 ${120 + a * 1.4}, 1000 ${260 + a}`;
  });
  return (
    <svg viewBox="0 0 960 600" preserveAspectRatio="xMaxYMid slice" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="rs-g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#1b2aa0" />
          <stop offset=".55" stopColor="#4c8dff" />
          <stop offset="1" stopColor="#14e2f9" />
        </linearGradient>
        {!lite && <filter id="rs-b" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="2.2" /></filter>}
      </defs>
      <g fill="none" stroke="url(#rs-g)" strokeLinecap="round">
        {strands.map((d, i) => (
          <path key={i} d={d} strokeWidth={i === 0 || i === count - 1 ? 2.4 : 1.1} opacity={i === 0 || i === count - 1 ? 0.95 : 0.5} />
        ))}
        {!lite && <path d={strands[0]} strokeWidth="6" opacity="0.35" filter="url(#rs-b)" />}
        {!lite && <path d={strands[count - 1]} strokeWidth="6" opacity="0.35" filter="url(#rs-b)" />}
      </g>
    </svg>
  );
}
