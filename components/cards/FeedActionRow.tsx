"use client";

import { motion } from "framer-motion";
import { scalePressProps } from "@/lib/animations";

interface Props {
  onPass: () => void;
  onLike: () => void;
  onDetails: () => void;
  disabled?: boolean;
}

// LURCH-P0-03 — visible Like/Pass chrome. Same handlers as the swipe gesture.
export function FeedActionRow({ onPass, onLike, onDetails, disabled = false }: Props) {
  return (
    <div
      className="shrink-0 flex items-center justify-center"
      style={{ gap: "28px", padding: "10px 20px 14px" }}
    >
      {/* Pass */}
      <motion.button
        {...scalePressProps}
        onClick={onPass}
        disabled={disabled}
        aria-label="Pass"
        style={{
          width: "58px",
          height: "58px",
          borderRadius: "2px",
          background: "#141414",
          border: "1px solid #3D3D3D",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.4 : 1,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M5 5L17 17M17 5L5 17" stroke="#C44B4B" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </motion.button>

      {/* Details (swipe up) */}
      <motion.button
        {...scalePressProps}
        onClick={onDetails}
        disabled={disabled}
        aria-label="View profile details"
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "2px",
          background: "transparent",
          border: "1px solid #2A2A2A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.4 : 1,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 10L8 5L12 10" stroke="#9A958C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>

      {/* Like */}
      <motion.button
        {...scalePressProps}
        onClick={onLike}
        disabled={disabled}
        aria-label="Like"
        style={{
          width: "58px",
          height: "58px",
          borderRadius: "2px",
          background: "#6B1E23",
          border: "1px solid rgba(245,240,232,0.14)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(107,30,35,0.45)",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.4 : 1,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
          <path
            d="M11 19C11 19 3 13.5 3 8C3 5.5 5 3.5 7.5 3.5C9 3.5 10.3 4.2 11 5.2C11.7 4.2 13 3.5 14.5 3.5C17 3.5 19 5.5 19 8C19 13.5 11 19 11 19Z"
            fill="#F5F0E8"
          />
        </svg>
      </motion.button>
    </div>
  );
}
