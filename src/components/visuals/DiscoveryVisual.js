import { FileText, LayoutTemplate, BadgeCheck } from "lucide-react";
import Tilt from "./Tilt";

const docs = [
  { icon: FileText, title: "Scope document", sub: "Every feature, screen and integration" },
  { icon: LayoutTemplate, title: "Prototype", sub: "Clickable screens or workflow map" },
  { icon: BadgeCheck, title: "Fixed quote", sub: "Price and timeline in writing", accent: true },
];

export default function DiscoveryVisual({ className = "" }) {
  return (
    <Tilt className={className}>
      <div className="j-stage relative mx-auto h-[360px] w-full max-w-[460px]" aria-hidden="true">
        <div className="j-floor absolute inset-[-15%] rounded-full" style={{ transform: "translateZ(-40px)" }} />
        {docs.map((d, i) => {
          const Icon = d.icon;
          return (
            <div
              key={d.title}
              className={`j-card3d absolute left-[8%] w-[80%] p-5 ${d.accent ? "j-glow-signal" : ""}`}
              style={{ top: `${8 + i * 26}%`, transform: `translateZ(${i * 40}px) translateX(${i * 18}px)` }}
            >
              <div className="flex items-center gap-3">
                <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${d.accent ? "bg-signal/15 text-signal" : "bg-volt/15 text-volt"}`}>
                  <Icon size={20} />
                </span>
                <span>
                  <span className="block text-[15px] font-medium text-ink">{d.title}</span>
                  <span className="block font-mono text-[11px] text-ink-muted">{d.sub}</span>
                </span>
              </div>
              <div className="mt-4 flex flex-col gap-1.5">
                <span className="j-skel h-2 w-full" />
                <span className="j-skel h-2 w-4/5" />
              </div>
            </div>
          );
        })}
      </div>
    </Tilt>
  );
}
