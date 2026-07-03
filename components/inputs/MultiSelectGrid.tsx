"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  items: string[];
  selected: string[];
  onToggle: (item: string) => void;
}

export function MultiSelectGrid({ items, selected, onToggle }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {items.map((item) => {
        const isSelected = selected.includes(item);
        return (
          <motion.button
            key={item}
            whileTap={{ scale: 0.985 }}
            onClick={() => onToggle(item)}
            style={{
              width: "100%",
              padding: "16px 20px",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              background: isSelected ? "rgba(233,64,87,0.15)" : "transparent",
              border: `1px solid ${isSelected ? "#E94057" : "rgba(232,230,234,0.25)"}`,
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: "16px",
              lineHeight: "1.4",
              fontWeight: 600,
              color: isSelected ? "#F0EDED" : "#9A9090",
            }}>
              {item}
            </span>
            <div style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              flexShrink: 0,
              background: isSelected ? "#E94057" : "transparent",
              border: `1px solid ${isSelected ? "#E94057" : "rgba(232,230,234,0.2)"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.15s",
            }}>
              <AnimatePresence>
                {isSelected && (
                  <motion.svg
                    key="check"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.12 }}
                    width="10" height="10" viewBox="0 0 10 10" fill="none"
                  >
                    <path d="M1.5 5L3.5 7L8.5 2.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
