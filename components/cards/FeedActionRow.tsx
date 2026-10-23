"use client";

import { motion } from "framer-motion";
import { scalePressProps } from "@/lib/animations";

interface Props {
  onPass: () => void;
  onLike: () => void;
  onDetails: () => void;
  onSuper?: () => void;
  disabled?: boolean;
}

// Visible Like/Pass chrome. Clear hierarchy: Like is the hero (oxblood, glow),
// Pass is secondary, Super Lurch is a small recessive accent. Floating circles,
// no borders.
export function FeedActionRow({ onPass, onLike, onDetails, onSuper, disabled = false }: Props) {
  return (
    <div className="shrink-0 flex flex-col items-center" style={{ padding: "4px 20px 16px", gap: "10px" }}>
      <button
        onClick={onDetails}
        disabled={disabled}
        style={{
          display: "flex", alignItems: "center", gap: "5px",
          background: "transparent", border: "none", cursor: disabled ? "default" : "pointer",
          fontFamily: "var(--font-ui)", fontSize: "11px", letterSpacing: "0.04em",
          color: "#6A6560", opacity: disabled ? 0.4 : 1, padding: "2px 8px",
        }}
      >
        <svg width="11" height="7" viewBox="0 0 14 8" fill="none">
          <path d="M1 7L7 1L13 7" stroke="#6A6560" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        View profile
      </button>

      <div className="flex items-center justify-center" style={{ gap: "24px" }}>
        {/* Pass — secondary */}
        <motion.button
          {...scalePressProps}
          onClick={onPass}
          disabled={disabled}
          aria-label="Pass"
          style={{
            width: "60px", height: "60px", borderRadius: "9999px",
            background: "#1C1A18", border: "none",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 8px 24px -10px rgba(0,0,0,0.9)",
            cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M6 6L16 16M16 6L6 16" stroke="#C44B4B" strokeWidth="2.3" strokeLinecap="round" />
          </svg>
        </motion.button>

        {/* Super Lurch — recessive accent */}
        {onSuper && (
          <motion.button
            {...scalePressProps}
            onClick={onSuper}
            disabled={disabled}
            aria-label="Super Lurch"
            style={{
              width: "46px", height: "46px", borderRadius: "9999px",
              background: "#171513", border: "none",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 6px 18px -10px rgba(0,0,0,0.9)",
              cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 1.5l2.1 4.6 5 .5-3.8 3.4 1.1 5L9 12.9 4.6 15l1.1-5L1.9 6.6l5-.5L9 1.5z" fill="none" stroke="#C8F000" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
          </motion.button>
        )}

        {/* Like — hero */}
        <motion.button
          {...scalePressProps}
          onClick={onLike}
          disabled={disabled}
          aria-label="Like"
          style={{
            width: "72px", height: "72px", borderRadius: "9999px",
            background: "#6B1E23", border: "none",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 12px 30px -8px rgba(107,30,35,0.85)",
            cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1,
          }}
        >
          <svg width="31" height="31" viewBox="0 0 22 22" fill="none">
            <path
              d="M11 19C11 19 3 13.5 3 8C3 5.5 5 3.5 7.5 3.5C9 3.5 10.3 4.2 11 5.2C11.7 4.2 13 3.5 14.5 3.5C17 3.5 19 5.5 19 8C19 13.5 11 19 11 19Z"
              fill="#F5F0E8"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
