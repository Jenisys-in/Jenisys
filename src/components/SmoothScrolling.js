"use client";
import { ReactLenis } from "lenis/react";

function SmoothScrolling({ children }) {
  // Adjusted settings: higher lerp (0.1 -> 0.15) and lower duration (1.5 -> 1.2) for snappier feel
  return (
    <ReactLenis root options={{ lerp: 0.15, duration: 1.2, smoothTouch: false }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
