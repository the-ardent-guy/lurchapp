"use client";

import { motion } from "framer-motion";
import { dividerDraw } from "@/lib/animations";

interface Props {
  onComplete?: () => void;
  className?: string;
  accent?: boolean;
}

export function DividerLine({ onComplete, className = "", accent = false }: Props) {
  return (
    /* brief: accent-color divider signals tonal shift between stats and emotional copy */
    <div className={`overflow-hidden ${className}`} style={{ height: "1px", width: accent ? "48px" : "100%" }}>
      <motion.div
        variants={dividerDraw}
        initial="initial"
        animate="animate"
        onAnimationComplete={onComplete}
        style={{ height: "1px", background: accent ? "#8B1A1A" : "#2E2720" }}
      />
    </div>
  );
}
