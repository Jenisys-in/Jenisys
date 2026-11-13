import { Mail, Sparkles, Database, Send, CalendarCheck } from "lucide-react";
import Tilt from "./Tilt";

// 3D scene: an enquiry flowing through an AI automation. Labels describe steps only — no invented figures.
const steps = [
  { icon: Mail, title: "New enquiry", sub: "Website, email or form" },
  { icon: Sparkles, title: "AI reads and sorts it", sub: "Intent, urgency, details", accent: true },
  { icon: Database, title: "CRM updated", sub: "Contact and deal created" },
  { icon: Send, title: "Instant reply sent", sub: "Personal, on-brand" },
  { icon: CalendarCheck, title: "Call booked", sub: "Straight into your calendar" },
];

export default function AutomationFlow({ className = "" }) {
  return (
    <Tilt className={className}>
      <div className="j-stage relative mx-auto h-[380px] w-full max-w-[520px]" aria-hidden="true">
        <div className="j-floor absolute inset-[-20%] rounded-full" style={{ transform: "translateZ(-40px)" }} />
        {/* connecting path the packet travels along */}
        <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 520 380" fill="none">
          <path d="M70 52 C 250 52, 270 120, 260 132 S 120 200, 120 212 S 300 290, 450 300" stroke="url(#af-g)" strokeWidth="2" strokeDasharray="4 6" />
          <defs>
            <linearGradient id="af-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#1b2aa0" />
              <stop offset=".5" stopColor="#4c8dff" />
              <stop offset="1" stopColor="#14e2f9" />
            </linearGradient>
          </defs>
        </svg>
        <span
          className="j-packet absolute left-0 top-0 h-3 w-3 rounded-full bg-signal shadow-[0_0_16px_#14e2f9]"
          style={{ offsetPath: "path('M70 52 C 250 52, 270 120, 260 132 S 120 200, 120 212 S 300 290, 450 300')" }}
        />
        {steps.map((s, i) => {
          const pos = [
            { left: "0%", top: "2%" },
            { left: "40%", top: "24%" },
            { left: "2%", top: "48%" },
            { left: "44%", top: "66%" },
            { left: "6%", top: "82%" },
          ][i];
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className={`j-card3d absolute flex w-[58%] max-w-[270px] items-center gap-3 px-4 py-3 ${s.accent ? "j-glow-signal" : ""}`}
              style={{ ...pos, transform: `translateZ(${20 + i * 14}px)` }}
            >
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${s.accent ? "bg-signal/15 text-signal j-pulse" : "bg-volt/15 text-volt"}`}>
                <Icon size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-[14px] font-medium text-ink">{s.title}</span>
                <span className="block truncate font-mono text-[11px] text-ink-muted">{s.sub}</span>
              </span>
            </div>
          );
        })}
      </div>
    </Tilt>
  );
}
