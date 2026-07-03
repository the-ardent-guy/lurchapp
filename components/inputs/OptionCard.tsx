"use client";

import { motion, AnimatePresence } from "framer-motion";
import { scalePressProps } from "@/lib/animations";

interface Props {
  label: string;
  sublabel?: string;
  selected: boolean;
  onSelect: () => void;
}

export function OptionCard({ label, sublabel, selected, onSelect }: Props) {
  return (
    <motion.button
      {...scalePressProps}
      onClick={onSelect}
      className="w-full text-left transition-all duration-150"
      style={{
        padding: "16px 20px",
        borderRadius: "15px",
        background: selected ? "#E94057" : "transparent",
        border: `1px solid ${selected ? "#E94057" : "rgba(232,230,234,0.25)"}`,
        minHeight: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
      }}
    >
      <div>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "15px",
            lineHeight: "1.5",
            fontWeight: 600,
            color: selected ? "#0F0D0B" : "#F0EDED",
          }}
        >
          {label}
        </p>
        {sublabel && (
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "12px",
              fontStyle: "italic",
              lineHeight: "1.6",
              color: "#8A8070",
              marginTop: "4px",
            }}
          >
            {sublabel}
          </p>
        )}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.svg
            key="check"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15 }}
            width="20" height="20" viewBox="0 0 20 20" fill="none"
            style={{ flexShrink: 0 }}
          >
            <path d="M4 10L8 14L16 6" stroke="#0F0D0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        )}
        {!selected && (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, opacity: 0.25 }}>
            <path d="M4 10L8 14L16 6" stroke="#F0EDED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
