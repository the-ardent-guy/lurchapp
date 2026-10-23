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

// Primary action. One per view. Premium: subtle top-lit gradient, soft depth,
// crisp edge, sentence case. The oxblood IS the emphasis.
export function CTAButton({ children, onClick, disabled = false, className = "", variant = "primary" }: Props) {
  const fill = variant === "warning"
    ? "linear-gradient(180deg, #D98A3A 0%, #C97B2A 100%)"
    : "linear-gradient(180deg, #7E2A31 0%, #661D22 100%)";
  const glow = variant === "warning" ? "rgba(201,123,42,0.45)" : "rgba(107,30,35,0.6)";

  return (
    <motion.button
      {...scalePressProps}
      onClick={onClick}
      disabled={disabled}
      className={`w-full ${className}`}
      style={{
        fontFamily: "var(--font-ui)",
        fontSize: "15px",
        fontWeight: 600,
        letterSpacing: "0.01em",
        color: disabled ? "#6A6560" : "#FBF7F0",
        background: disabled ? "#1C1A18" : fill,
        border: disabled ? "none" : "1px solid rgba(245,240,232,0.16)",
        boxShadow: disabled ? "none" : `0 10px 28px -10px ${glow}, inset 0 1px 0 rgba(245,240,232,0.18)`,
        borderRadius: "16px",
        padding: "17px 24px",
        minHeight: "56px",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "filter 0.15s, opacity 0.15s",
        lineHeight: 1.1,
      }}
    >
      {children}
    </motion.button>
  );
}
