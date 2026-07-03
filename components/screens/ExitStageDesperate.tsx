"use client";

import { motion } from "framer-motion";
import { stageSlideIn } from "@/lib/animations";
import { CTAButton } from "@/components/inputs/CTAButton";
import { GhostButton } from "@/components/inputs/GhostButton";

interface Props {
  onStay: () => void;
  onContinueLeaving: () => void;
}

export function ExitStageDesperate({ onStay, onContinueLeaving }: Props) {
  return (
    <motion.div
      variants={stageSlideIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-8 space-y-4"
    >
      <div
        className="px-4 py-3 rounded"
        style={{ background: "#1E1400", border: "1px solid #C97B2A", borderRadius: "8px" }}
      >
        <p className="text-sm font-medium" style={{ fontFamily: "var(--font-ui)", color: "#C97B2A" }}>
          NOTIFICATION: 63 people have matched with you. They all want you. Pay us.
        </p>
      </div>
      <p
        className="text-sm leading-relaxed"
        style={{ fontFamily: "var(--font-ui)", color: "#8A8070" }}
      >
        Your profile will drop in rankings the moment you go inactive. You&apos;ve worked hard to get here. Don&apos;t waste it.
      </p>
      <div className="space-y-2">
        <CTAButton onClick={onStay}>OKAY, I&apos;LL STAY</CTAButton>
        <GhostButton onClick={onContinueLeaving} dim>I know what you&apos;re doing</GhostButton>
      </div>
    </motion.div>
  );
}
