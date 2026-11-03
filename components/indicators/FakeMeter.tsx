"use client";

import { useEffect, useRef, useState } from "react";

export type MeterPhase = "chaos" | "settle" | "confess";
type Format = "integer" | "decimal" | "percent";

interface Props {
  label: string;
  phase: MeterPhase;
  target: number; // final fake value
  suffix?: string;
  format?: Format;
  reducedMotion: boolean;
  isLast?: boolean;
}

function render(value: number, format: Format, suffix: string) {
  const n =
    format === "decimal" ? value.toFixed(1)
    : format === "percent" ? `${Math.round(value)}%`
    : `${Math.round(value)}`;
  return `${n}${suffix}`;
}

/**
 * A satirical metric that visibly scrambles (chaos), snaps to a fake target
 * (settle), then gets struck through when the app confesses the numbers aren't
 * real (confess). Reduced motion skips straight to the settled static value.
 */
export function FakeMeter({ label, phase, target, suffix = "", format = "integer", reducedMotion, isLast = false }: Props) {
  const [value, setValue] = useState<number>(reducedMotion ? target : 0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (reducedMotion) {
      setValue(target);
      return;
    }

    if (phase === "chaos") {
      // Rapid random scramble, ~4Hz (new value every ~240ms) - reads as the
      // algorithm "thinking", not as a janky animation.
      const max = format === "decimal" ? 9.9 : 100;
      const tick = () => {
        setValue(Math.random() * max);
        rafRef.current = window.setTimeout(tick, 220 + Math.random() * 60);
      };
      tick();
      return () => clearTimeout(rafRef.current);
    }

    if (phase === "settle") {
      // Animate from current value to the fixed fake target.
      const start = performance.now();
      const from = value;
      const DURATION = 400;
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / DURATION);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(from + (target - from) * eased);
        if (t < 1) rafRef.current = requestAnimationFrame(step);
        else setValue(target);
      };
      rafRef.current = requestAnimationFrame(step);
      return () => cancelAnimationFrame(rafRef.current);
    }

    // confess - hold the fake target, dimmed/struck-through
    setValue(target);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, reducedMotion, target]);

  const isConfess = phase === "confess";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 0",
        borderBottom: isLast ? "none" : "1px solid #2A2A2A",
        opacity: isConfess ? 0.45 : 1,
        transition: "opacity 0.4s ease-out",
      }}
    >
      <span style={{ fontFamily: "var(--font-ui)", fontSize: "13px", lineHeight: 1.5, color: "#9A958C" }}>
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono, var(--font-display))",
          fontSize: "22px",
          fontWeight: 700,
          color: "#F5F0E8",
          letterSpacing: "-0.02em",
          fontVariantNumeric: "tabular-nums",
          textDecoration: isConfess ? "line-through" : "none",
          textDecorationColor: "#C44B4B",
        }}
      >
        {render(value, format, suffix)}
      </span>
    </div>
  );
}
