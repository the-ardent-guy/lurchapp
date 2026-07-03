"use client";

import { motion } from "framer-motion";

interface Props {
  step: number;
  totalSteps: number;
}

export function OnboardingProgress({ step, totalSteps }: Props) {
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
