"use client";

import { motion } from "framer-motion";

interface Props {
  step: number;
  totalSteps: number;
  bonus?: boolean;
}

export function OnboardingProgress({ step, totalSteps, bonus = false }: Props) {
  if (bonus) {
    return (
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          color: "#C97B2A",
          border: "1px solid rgba(201,123,42,0.4)",
          borderRadius: "999px",
          padding: "4px 12px",
        }}
      >
        Bonus
      </div>
    );
  }

  return (
    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
      {Array.from({ length: totalSteps }).map((_, i) => {
        const active = i === step - 1;
        return (
          <motion.div
            key={i}
            animate={{
              width: active ? "22px" : "14px",
              background: active ? "#FFFFFF" : "#4A4540",
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ height: "6px", borderRadius: "3px" }}
          />
        );
      })}
    </div>
  );
}
