import { BadgeDollarSign, MonitorPlay, KeyRound, Globe2 } from "lucide-react";
import { promises } from "@/lib/offers";

const icons = [BadgeDollarSign, MonitorPlay, KeyRound, Globe2];

export default function Promises() {
  return (
    <section className="j-night bg-deep border-y border-line py-24 md:py-28" aria-labelledby="promise-title">
      <div className="j-wrap">
        <p className="j-eyebrow mb-4">Why clients pick Jenisys</p>
        <h2 id="promise-title" className="j-h2 max-w-3xl">Agency quality, without agency surprises</h2>
        <ul className="j-scene mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p, i) => {
            const Icon = icons[i];
            return (
              <li key={p.title} className="j-card3d p-6 transition-transform duration-300 hover:-translate-y-1" style={{ transform: "rotateX(6deg)" }}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy via-volt to-signal text-white shadow-[0_10px_30px_-8px_rgba(20,226,249,0.6)]">
                  <Icon size={22} />
                </span>
                <h3 className="j-h3 mt-6">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{p.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
