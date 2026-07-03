"use client";

import { motion } from "framer-motion";
import { fadeInSlow } from "@/lib/animations";

interface Props {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function SerifMoment({ children, className = "", animate = false }: Props) {
  const style = {
    fontFamily: "var(--font-ui)" as const,
    fontStyle: "italic" as const,
    fontSize: "15px",
    lineHeight: "1.75",
    color: "#F0EDED",
  };

  if (animate) {
    return (
      <motion.p
        variants={fadeInSlow}
        initial="initial"
        animate="animate"
        className={className}
        style={style}
      >
        {children}
      </motion.p>
    );
  }
  return (
    <p className={className} style={style}>
      {children}
    </p>
  );
}
