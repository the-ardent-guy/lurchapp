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

// LURCH-P0-03 - visible Like/Pass chrome. Same handlers as the swipe gesture.
// Modern circular buttons: clear X (pass) + heart (like), lime Super Lurch star.
export function FeedActionRow({ onPass, onLike, onDetails, onSuper, disabled = false }: Props) {
  return (
    <div className="shrink-0 flex flex-col items-center" style={{ padding: "6px 20px 16px", gap: "8px" }}>
      {/* View profile affordance */}
      <button
        onClick={onDetails}
        disabled={disabled}
        style={{
          display: "flex", alignItems: "center", gap: "6px",
          background: "transparent", border: "none", cursor: disabled ? "default" : "pointer",
          fontFamily: "var(--font-ui)", fontSize: "11px", letterSpacing: "0.06em",
          textTransform: "uppercase", color: "#9A958C", opacity: disabled ? 0.4 : 1,
        }}
      >
        <svg width="12" height="8" viewBox="0 0 14 8" fill="none">
          <path d="M1 7L7 1L13 7" stroke="#9A958C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        View profile
      </button>

      <div className="flex items-center justify-center" style={{ gap: "26px" }}>
        {/* Pass */}
        <motion.button
          {...scalePressProps}
          onClick={onPass}
          disabled={disabled}
          aria-label="Pass"
          style={{
            width: "62px", height: "62px", borderRadius: "9999px",
            background: "#141414", border: "1px solid #3D3D3D",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 6px 18px -8px rgba(0,0,0,0.8)",
            cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
            <path d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5" stroke="#C44B4B" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </motion.button>

        {/* Super Lurch (priority like) */}
        {onSuper && (
          <motion.button
            {...scalePressProps}
            onClick={onSuper}
            disabled={disabled}
            aria-label="Super Lurch"
            style={{
              width: "50px", height: "50px", borderRadius: "9999px",
              background: "#141414", border: "1px solid #3D3D3D",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
              <path d="M9 1.5l2.1 4.6 5 .5-3.8 3.4 1.1 5L9 12.9 4.6 15l1.1-5L1.9 6.6l5-.5L9 1.5z" fill="none" stroke="#C8F000" strokeWidth="1.3" strokeLinejoin="round" />
            </svg>
          </motion.button>
        )}

        {/* Like */}
        <motion.button
          {...scalePressProps}
          onClick={onLike}
          disabled={disabled}
          aria-label="Like"
          style={{
            width: "70px", height: "70px", borderRadius: "9999px",
            background: "#6B1E23", border: "1px solid rgba(245,240,232,0.14)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 10px 26px -8px rgba(107,30,35,0.75)",
            cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1,
          }}
        >
          <svg width="30" height="30" viewBox="0 0 22 22" fill="none">
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
