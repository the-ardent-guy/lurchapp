"use client";

import { motion } from "framer-motion";
import { stageSlideIn } from "@/lib/animations";
import { CTAButton } from "@/components/inputs/CTAButton";
import { useRouter } from "next/navigation";
import { useLurchStore } from "@/lib/store";

interface Props {
  onLeave: () => void;
}

export function ExitStageConfession({ onLeave }: Props) {
  const router = useRouter();
  const setTransitionDirection = useLurchStore((s) => s.setTransitionDirection);

  const handleLeave = () => {
    onLeave();
    setTransitionDirection("up");
    router.push("/truth");
  };

  return (
    <motion.div
      variants={stageSlideIn}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-6 py-8 space-y-4"
    >
      <p
        style={{ fontFamily: "var(--font-display)", fontSize: "30px", fontWeight: 600, lineHeight: "1.15", color: "#F0EDED" }}
      >
        Yeah. You caught us.
      </p>
      <p
        style={{ fontFamily: "var(--font-ui)", fontSize: "14px", lineHeight: "1.6", color: "#AEADAD" }}
      >
        Everything on this screen was designed to make you stay. The notification about 63 matches is fake. The countdown on your match was fake. The activity banner was fake. The typing indicator, the one that&apos;s been going since your first match, that was fake too.
      </p>
      <p
        style={{ fontFamily: "var(--font-ui)", fontSize: "14px", lineHeight: "1.6", color: "#AEADAD" }}
      >
        We made all of it because it works. It works on everyone. Including people who know it&apos;s happening.
      </p>
      <p
        style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 600, color: "#F0EDED" }}
      >
        You can leave now.
      </p>
      <CTAButton onClick={handleLeave}>Take me to the truth</CTAButton>
    </motion.div>
  );
}
