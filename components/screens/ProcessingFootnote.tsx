"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROCESSING_FOOTNOTES } from "@/lib/data/processingMessages";

export function ProcessingFootnote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PROCESSING_FOOTNOTES.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.6, ease: "easeIn" } }}
        exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeOut" } }}
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "12px",
          fontStyle: "italic",
          lineHeight: "1.7",
          textAlign: "center",
          color: "#6A6060",
        }}
      >
        {PROCESSING_FOOTNOTES[index]}
      </motion.p>
    </AnimatePresence>
  );
}
