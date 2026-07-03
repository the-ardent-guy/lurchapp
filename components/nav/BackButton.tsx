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
        width: "56px",
        height: "56px",
        borderRadius: "16px",
        background: "#1A1612",
        border: "1.5px solid #3A3530",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        cursor: "pointer",
      }}
    >
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M14 5L8 11L14 17" stroke="#E94057" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.button>
  );
}
