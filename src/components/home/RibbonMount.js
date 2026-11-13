"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const RibbonCanvas = dynamic(() => import("./RibbonCanvas"), { ssr: false });

// Mounts the WebGL ribbon only after the page is idle, so it never competes with first paint.
export default function RibbonMount() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const go = () => setReady(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(go, { timeout: 1500 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(go, 600);
    return () => clearTimeout(t);
  }, []);
  return ready ? <RibbonCanvas /> : null;
}
