import { ShieldCheck, RefreshCw, DatabaseBackup, Wrench } from "lucide-react";
import Tilt from "./Tilt";

const checks = [
  { icon: ShieldCheck, label: "Security updates applied" },
  { icon: RefreshCw, label: "Dependencies up to date" },
  { icon: DatabaseBackup, label: "Backup verified" },
  { icon: Wrench, label: "Fixes shipped this month" },
];

export default function SupportVisual({ className = "" }) {
  return (
    <Tilt className={className}>
      <div className="j-stage relative mx-auto w-full max-w-[440px] py-8" aria-hidden="true">
        <div className="j-floor absolute inset-[-15%] rounded-full" style={{ transform: "translateZ(-40px)" }} />
        <div className="j-card3d p-5" style={{ transform: "translateZ(20px)" }}>
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-medium text-ink">System status</span>
            <span className="flex items-center gap-2 font-mono text-[11px] text-gain">
              <span className="h-2 w-2 rounded-full bg-gain shadow-[0_0_10px_#3ee59c] j-pulse" /> All systems normal
            </span>
          </div>
          <div className="mt-4 flex gap-1" aria-hidden="true">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i} className="h-7 flex-1 rounded-sm bg-gain/60" />
            ))}
          </div>
        </div>
        <ul className="mt-4 flex flex-col gap-3">
          {checks.map((c, i) => {
            const Icon = c.icon;
            return (
              <li key={c.label} className="j-card3d flex items-center gap-3 px-4 py-3" style={{ transform: `translateZ(${40 + i * 14}px)` }}>
                <Icon size={18} className="text-signal" />
                <span className="text-[14px] text-ink">{c.label}</span>
                <span className="ml-auto font-mono text-[11px] text-gain">✓</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Tilt>
  );
}
