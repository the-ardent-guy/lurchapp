"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  durationMs: number;
  onComplete?: () => void;
}

// Non-linear keyframes: fast → slow → fast
const KEYFRAMES = [
  { t: 0, p: 0 },
  { t: 0.20, p: 0.45 },
  { t: 0.70, p: 0.72 },
  { t: 0.85, p: 0.78 },
  { t: 1.00, p: 1.00 },
];

function interpolate(progress: number): number {
  for (let i = 1; i < KEYFRAMES.length; i++) {
    const prev = KEYFRAMES[i - 1];
    const curr = KEYFRAMES[i];
    if (progress <= curr.t) {
      const frac = (progress - prev.t) / (curr.t - prev.t);
      return prev.p + frac * (curr.p - prev.p);
    }
  }
  return 1;
}

export function ProgressBar({ durationMs, onComplete }: Props) {
  const [fill, setFill] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);
  const completedRef = useRef(false);

  useEffect(() => {
    completedRef.current = false;

    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / durationMs, 1);
      const displayFill = interpolate(progress);
      setFill(displayFill);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else if (!completedRef.current) {
        completedRef.current = true;
        onComplete?.();
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [durationMs, onComplete]);

  return (
    <div
      className="w-full rounded-full overflow-hidden"
      style={{ background: "#1A1612", height: "3px" }}
    >
      <div
        className="h-full rounded-full"
        style={{
          width: `${fill * 100}%`,
          background: "#E94057",
          boxShadow: "0 0 10px rgba(233,64,87,0.7)",
          transition: "none",
        }}
      />
    </div>
  );
}
