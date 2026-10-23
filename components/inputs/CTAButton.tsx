"use client";

import { motion } from "framer-motion";
import { scalePressProps } from "@/lib/animations";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: "primary" | "warning";
}

export function CTAButton({ children, onClick, disabled = false, className = "", variant = "primary" }: Props) {
  const bg = variant === "warning" ? "#C97B2A" : "#6B1E23";
  const glowColor = variant === "warning" ? "rgba(201,123,42,0.4)" : "rgba(107,30,35,0.55)";
  // Modern pill-ish CTA; off-white text on oxblood, soft depth.

  return (
    <motion.button
      {...scalePressProps}
      onClick={onClick}
      disabled={disabled}
      className={`w-full uppercase ${className}`}
      style={{
        fontFamily: "var(--font-ui)",
        fontSize: "13px",
        fontWeight: 600,
        letterSpacing: "0.08em",
        color: disabled ? "#5C5852" : "#F5F0E8",
        background: disabled ? "#141414" : bg,
        border: disabled ? "1px solid #2A2A2A" : `1px solid rgba(245,240,232,0.12)`,
        boxShadow: disabled ? "none" : `0 10px 30px -8px ${glowColor}, inset 0 1px 0 rgba(245,240,232,0.1)`,
        borderRadius: "14px",
        padding: "18px 24px",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background 0.15s, box-shadow 0.15s, transform 0.1s",
        lineHeight: 1,
      }}
    >
      {children}
    </motion.button>
  );
}
