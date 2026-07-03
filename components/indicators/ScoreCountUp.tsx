"use client";

import { useEffect, useState } from "react";

interface Props {
  label: string;
  target: number;
  suffix?: string;
  delayMs?: number;
  onComplete?: () => void;
  format?: "integer" | "decimal" | "percent";
  isLast?: boolean;
}

export function ScoreCountUp({ label, target, suffix = "", delayMs = 0, onComplete, format = "integer", isLast = false }: Props) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => setStarted(true), delayMs);
    return () => clearTimeout(delay);
  }, [delayMs]);

  useEffect(() => {
    if (!started) return;
    const duration = 800;
    const steps = 40;
    const stepDuration = duration / steps;
    let step = 0;

    const id = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * target);
      if (step >= steps) {
        clearInterval(id);
        setValue(target);
        onComplete?.();
      }
    }, stepDuration);

    return () => clearInterval(id);
  }, [started, target, onComplete]);

  const display =
    format === "decimal"
      ? value.toFixed(1)
      : format === "percent"
      ? `${Math.round(value)}%`
      : `${Math.round(value)}`;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        /* brief: 16px between each stat row */
        padding: "16px 0",
        borderBottom: isLast ? "none" : "1px solid #2E2720",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "13px",
          lineHeight: "1.5",
          color: "#AEADAD",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "22px",
          fontWeight: 700,
          color: "#EDE8DF",
          letterSpacing: "-0.02em",
          tabularNums: "tabular-nums",
        } as React.CSSProperties}
      >
        {display}{suffix}
      </span>
    </div>
  );
}
