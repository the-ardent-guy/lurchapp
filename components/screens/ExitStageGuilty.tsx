"use client";

import { motion } from "framer-motion";
import { stageSlideIn } from "@/lib/animations";
import { CTAButton } from "@/components/inputs/CTAButton";
import { GhostButton } from "@/components/inputs/GhostButton";

interface Props {
  onStay: () => void;
  onContinueLeaving: () => void;
}

export function ExitStageGuilty({ onStay, onContinueLeaving }: Props) {
  return (
    <motion.div
      variants={stageSlideIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-8 space-y-4"
    >
      <p
        style={{ fontFamily: "var(--font-display)", fontSize: "38px", fontWeight: 600, lineHeight: "1.1", color: "#F0EDED" }}
      >
        WAIT.
      </p>
      <p
        style={{ fontFamily: "var(--font-ui)", fontSize: "14px", fontStyle: "italic", lineHeight: "1.6", color: "#AEADAD" }}
      >
        She just opened the app. She looked at your profile twice.
      </p>
      <div className="space-y-2 pt-2">
        <CTAButton onClick={onStay}>STAY</CTAButton>
        <GhostButton onClick={onContinueLeaving} dim>Leave anyway</GhostButton>
      </div>
    </motion.div>
  );
}
