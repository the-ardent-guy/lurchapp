"use client";

import { AnimatePresence } from "framer-motion";
import { ModalOverlay } from "@/components/layout/ModalOverlay";
import { ExitStageGuilty } from "@/components/screens/ExitStageGuilty";
import { ExitStageDesperate } from "@/components/screens/ExitStageDesperate";
import { ExitStageConfession } from "@/components/screens/ExitStageConfession";
import { useLurchStore } from "@/lib/store";

export function ExitInterceptModal() {
  const { stage, isIntercepting, advanceStage, resetIntercept, setTransitionDirection } = useLurchStore();

  const handleLeave = () => {
    resetIntercept();
    setTransitionDirection("up");
  };

  const handleStay = () => {
    resetIntercept();
  };

  return (
    <ModalOverlay isOpen={isIntercepting} preventClose>
      <AnimatePresence mode="wait">
        {stage === 1 && (
          <ExitStageGuilty
            key="guilty"
            onStay={handleStay}
            onContinueLeaving={advanceStage}
          />
        )}
        {stage === 2 && (
          <ExitStageDesperate
            key="desperate"
            onStay={handleStay}
            onContinueLeaving={advanceStage}
          />
        )}
        {stage === 3 && (
          <ExitStageConfession
            key="confession"
            onLeave={handleLeave}
          />
        )}
      </AnimatePresence>
    </ModalOverlay>
  );
}
