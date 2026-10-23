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

// Primary action. One per view. Modern: solid fill, flat, subtle depth,
// sentence case, no shouty letter-spacing. The oxblood IS the emphasis.
export function CTAButton({ children, onClick, disabled = false, className = "", variant = "primary" }: Props) {
  const bg = variant === "warning" ? "#C97B2A" : "#6B1E23";

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
        color: disabled ? "#6A6560" : "#F5F0E8",
        background: disabled ? "#1C1A18" : bg,
        border: "none",
        boxShadow: disabled ? "none" : "0 1px 2px rgba(0,0,0,0.35), inset 0 1px 0 rgba(245,240,232,0.1)",
        borderRadius: "14px",
        padding: "16px 24px",
        minHeight: "54px",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background 0.15s, opacity 0.15s",
        lineHeight: 1.1,
      }}
    >
      {children}
    </motion.button>
  );
}
