"use client";
import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";

// WCAG 2.2.2: the hero's light (ribbon, beam, headline glint) runs continuously, so visitors can stop it.
// The choice is remembered on this device. Reduced-motion users never see the motion, so the control hides.
export default function MotionToggle({ className = "" }) {
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    let saved = false;
    try { saved = localStorage.getItem("j-motion") === "paused"; } catch {}
    if (saved) apply(true);
    setPaused(saved);
  }, []);
  const apply = (p) => {
    if (p) document.documentElement.dataset.motion = "paused";
    else delete document.documentElement.dataset.motion;
    window.dispatchEvent(new Event("j-motion"));
  };
  const toggle = () => {
    const p = !paused;
    setPaused(p);
    apply(p);
    try { p ? localStorage.setItem("j-motion", "paused") : localStorage.removeItem("j-motion"); } catch {}
  };
  return (
    <button type="button" onClick={toggle} className={`j-motion-toggle ${className}`}>
      {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
      {paused ? "Play motion" : "Pause motion"}
    </button>
  );
}
