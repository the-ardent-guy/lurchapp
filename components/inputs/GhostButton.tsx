"use client";

import { motion } from "framer-motion";
import { scalePressProps } from "@/lib/animations";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  dim?: boolean;
}

export function GhostButton({ children, onClick, className = "", dim = false }: Props) {
  return (
    <motion.button
      {...scalePressProps}
      onClick={onClick}
      className={`w-full py-3 min-h-[44px] flex items-center justify-center text-sm text-center ${className}`}
      style={{
        fontFamily: "var(--font-ui)",
        color: dim ? "#8A8070" : "#EDE8DF",
        background: "transparent",
        letterSpacing: "0.02em",
        cursor: "pointer",
        textDecoration: "underline",
        textDecorationColor: dim ? "#2E2720" : "#8A8070",
        textUnderlineOffset: "3px",
      }}
    >
      {children}
    </motion.button>
  );
}
