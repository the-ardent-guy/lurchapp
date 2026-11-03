"use client";

import { motion } from "framer-motion";
import { scalePressProps } from "@/lib/animations";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  dim?: boolean;
}

// Tertiary action, always paired under a CTAButton as the quiet "no thanks".
// Modern: plain text, no underline, clearly recessive.
export function GhostButton({ children, onClick, className = "", dim = false }: Props) {
  return (
    <motion.button
      {...scalePressProps}
      onClick={onClick}
      className={`w-full min-h-[48px] flex items-center justify-center text-center ${className}`}
      style={{
        fontFamily: "var(--font-ui)",
        fontSize: "14px",
        fontWeight: 500,
        color: dim ? "#6A6560" : "#9A958C",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "10px 16px",
      }}
    >
      {children}
    </motion.button>
  );
}
