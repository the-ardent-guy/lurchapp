"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { scalePressProps } from "@/lib/animations";
import { useLurchStore } from "@/lib/store";

interface Props {
  onBack?: () => void;
}

export function BackButton({ onBack }: Props) {
  const router = useRouter();
  const setTransitionDirection = useLurchStore((s) => s.setTransitionDirection);

  const handleBack = () => {
    setTransitionDirection("down");
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <motion.button
      {...scalePressProps}
      onClick={handleBack}
      aria-label="Go back"
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "12px",
        background: "rgba(255,255,255,0.05)",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        cursor: "pointer",
      }}
    >
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
        <path d="M14 5L8 11L14 17" stroke="#F5F0E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.button>
  );
}
