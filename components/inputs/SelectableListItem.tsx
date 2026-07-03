"use client";

import { motion } from "framer-motion";
import { scalePressProps } from "@/lib/animations";
import { Check } from "lucide-react";

interface Props {
  label: string;
  selected: boolean;
  onSelect: () => void;
  isSpecial?: boolean; // for "Human" at bottom of gender list
}

export function SelectableListItem({ label, selected, onSelect, isSpecial = false }: Props) {
  return (
    <motion.button
      {...scalePressProps}
      onClick={onSelect}
      className="w-full flex items-center justify-between px-4 py-3.5 text-left transition-colors duration-100"
      style={{
        background: selected ? "#231E18" : "transparent",
        borderBottom: "1px solid #2E2720",
        borderTop: isSpecial ? "1px solid #2E2720" : undefined,
        marginTop: isSpecial ? "8px" : undefined,
      }}
    >
      <span
        className={`text-sm ${isSpecial ? "text-base font-medium" : ""}`}
        style={{
          fontFamily: "var(--font-ui)",
          color: selected ? "#EDE8DF" : isSpecial ? "#EDE8DF" : "#8A8070",
        }}
      >
        {label}
        {isSpecial && selected && (
          <span
            className="block text-xs italic mt-0.5"
            style={{ fontFamily: "var(--font-serif)", color: "#8A8070" }}
          >
            Good enough.
          </span>
        )}
      </span>
      {selected && <Check size={14} color="#8B1A1A" />}
    </motion.button>
  );
}
