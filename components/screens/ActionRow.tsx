"use client";

import { motion } from "framer-motion";
import { X, Heart, Star } from "lucide-react";

interface Props {
  onNope: () => void;
  onLike: () => void;
  disabled?: boolean;
}

export function ActionRow({ onNope, onLike, disabled = false }: Props) {
  return (
    /* Figma: action row h=99, buttons centered with 20px gaps, 40px side margins */
    <div
      className="flex items-center justify-center shrink-0"
      style={{ gap: "20px", paddingTop: "21px", paddingBottom: "24px", paddingLeft: "40px", paddingRight: "40px" }}
    >
      {/* Dislike — 78×78px, Figma x=40 */}
      <motion.button
        whileTap={{ scale: 0.85, rotate: -10, transition: { duration: 0.08 } }}
        onClick={onNope}
        disabled={disabled}
        className="rounded-full flex items-center justify-center"
        style={{
          width: "78px",
          height: "78px",
          background: "rgba(224, 112, 96, 0.12)",
          border: "1.5px solid rgba(224, 112, 96, 0.4)",
          opacity: disabled ? 0.2 : 1,
          flexShrink: 0,
        }}
        aria-label="Pass"
      >
        <X size={30} color="#E07060" strokeWidth={2.5} />
      </motion.button>

      {/* Like — 99×99px, Figma x=138 (centered on screen) */}
      <motion.button
        whileTap={{ scale: 0.88, transition: { duration: 0.08 } }}
        onClick={onLike}
        disabled={disabled}
        className="rounded-full flex items-center justify-center"
        style={{
          width: "99px",
          height: "99px",
          background: "#8B1A1A",
          boxShadow: "0 6px 28px rgba(139, 26, 26, 0.5)",
          opacity: disabled ? 0.2 : 1,
          flexShrink: 0,
        }}
        aria-label="Like"
      >
        <Heart size={36} color="#EDE8DF" strokeWidth={1.8} fill="#EDE8DF" />
      </motion.button>

      {/* Star — 78×78px, Figma x=257 */}
      <motion.button
        whileTap={{ scale: 0.85, rotate: 10, transition: { duration: 0.08 } }}
        disabled={disabled}
        className="rounded-full flex items-center justify-center"
        style={{
          width: "78px",
          height: "78px",
          background: "rgba(139, 92, 184, 0.12)",
          border: "1.5px solid rgba(139, 92, 184, 0.4)",
          opacity: disabled ? 0.2 : 1,
          flexShrink: 0,
        }}
        aria-label="Super Like"
      >
        <Star size={28} color="#8B5CB8" strokeWidth={2} fill="rgba(139, 92, 184, 0.25)" />
      </motion.button>
    </div>
  );
}
