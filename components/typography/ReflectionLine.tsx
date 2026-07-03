"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface Props {
  text: string;
  className?: string;
}

export function ReflectionLine({ text, className = "" }: Props) {
  return (
    <motion.p
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className={className}
      style={{
        fontFamily: "var(--font-ui)",
        fontSize: "13px",
        fontStyle: "italic",
        lineHeight: "1.6",
        color: "#AEADAD",
        borderLeft: "2px solid rgba(232,230,234,0.15)",
        paddingLeft: "16px",
        marginTop: "12px",
      }}
    >
      {text}
    </motion.p>
  );
}
