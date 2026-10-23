"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ModalOverlay } from "@/components/layout/ModalOverlay";
import { CTAButton } from "@/components/inputs/CTAButton";
import { GhostButton } from "@/components/inputs/GhostButton";
import { TechniqueLabel } from "@/components/typography/TechniqueLabel";
import { COPY } from "@/lib/copy";

interface Props {
  open: boolean;
  onClose: () => void;
}

const REEL = ["12 people", "0 replies", "a bot", "your ex", "nobody", "7 ghosts", "1 maybe"];

// LURCH-P1-05 — slot-style boost. The result is always disappointing. Reduced
// motion skips the spin and shows the result immediately. No real payment.
export function BoostRoulette({ open, onClose }: Props) {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<"idle" | "spinning" | "result">("idle");
  const [face, setFace] = useState(REEL[0]);
  const timer = useRef<number>(0);

  useEffect(() => {
    if (!open) {
      setPhase("idle");
      setFace(REEL[0]);
      clearInterval(timer.current);
    }
  }, [open]);

  const spin = () => {
    if (reduced) {
      setPhase("result");
      return;
    }
    setPhase("spinning");
    let ticks = 0;
    timer.current = window.setInterval(() => {
      setFace(REEL[Math.floor(Math.random() * REEL.length)]);
      ticks++;
      if (ticks > 16) {
        clearInterval(timer.current);
        setPhase("result");
      }
    }, 110);
  };

  return (
    <ModalOverlay isOpen={open} onClose={onClose}>
      <div style={{ padding: "28px 24px calc(env(safe-area-inset-bottom, 0px) + 24px)" }}>
        <TechniqueLabel technique="Variable Reward" detail="Intermittent Reinforcement" style={{ marginBottom: "14px" }} />
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "24px", fontWeight: 600, lineHeight: 1.2, color: "#F5F0E8", marginBottom: "10px" }}>
          Boost Roulette
        </h2>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: "14px", fontStyle: "italic", lineHeight: 1.55, color: "#9A958C", marginBottom: "22px" }}>
          {COPY.boostPitch}
        </p>

        {/* Reel */}
        <div style={{
          background: "#0A0A0A", border: "1px solid #2A2A2A", borderRadius: "12px",
          padding: "28px 16px", textAlign: "center", marginBottom: "20px",
        }}>
          {phase === "result" ? (
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "16px", color: "#F5F0E8", lineHeight: 1.5 }}>
              {COPY.boostResult}
            </p>
          ) : (
            <p style={{
              fontFamily: "var(--font-mono, var(--font-display))", fontSize: "28px", fontWeight: 700,
              color: phase === "spinning" ? "#C44B4B" : "#5C5852", letterSpacing: "0.02em",
            }}>
              {phase === "spinning" ? face : "— — —"}
            </p>
          )}
        </div>

        {phase === "result" ? (
          <GhostButton onClick={onClose}>Close (nothing happened)</GhostButton>
        ) : (
          <>
            <CTAButton onClick={spin} disabled={phase === "spinning"}>
              {phase === "spinning" ? "Spinning…" : COPY.boostCta}
            </CTAButton>
            <GhostButton dim onClick={onClose}>
              Keep my ₹99 and my dignity
            </GhostButton>
          </>
        )}
      </div>
    </ModalOverlay>
  );
}
