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
  const bg = variant === "warning" ? "#C97B2A" : "#8B1A1A";
  const glowColor = variant === "warning" ? "rgba(201,123,42,0.45)" : "rgba(139,26,26,0.5)";

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
        letterSpacing: "0.09em",
        color: disabled ? "#8A8070" : "#FFFFFF",
        background: disabled ? "#2A221A" : bg,
        /* layered look: inner highlight + outer glow */
        border: disabled ? "1px solid #2E2720" : `1px solid rgba(255,255,255,0.12)`,
        boxShadow: disabled ? "none" : `0 6px 28px ${glowColor}, inset 0 1px 0 rgba(255,255,255,0.1)`,
        borderRadius: "8px",
        /* generous padding so it outweighs everything else */
        padding: "18px 24px",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background 0.15s, box-shadow 0.15s",
        lineHeight: 1,
      }}
    >
      {children}
    </motion.button>
  );
}
