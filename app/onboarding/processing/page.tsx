"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useReducedMotion } from "framer-motion";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { ProgressBar } from "@/components/indicators/ProgressBar";
import { ProcessingStatus } from "@/components/screens/ProcessingStatus";
import { ProcessingFootnote } from "@/components/screens/ProcessingFootnote";
import { useLurchStore } from "@/lib/store";
import { computeScores } from "@/lib/utils";

export default function ProcessingPage() {
  const router = useRouter();
  const reduced = !!useReducedMotion();
  // Fake-algorithm dwell: spec wants ≥4.0s / ≤6.5s normally, ≤1.5s reduced.
  const DURATION_MS = reduced ? 1400 : 5500;
  const { wounds, honestAnswer, setScores, setTransitionDirection } = useLurchStore();
  const [done, setDone] = useState(false);
  const navigated = useRef(false);

  const handleComplete = () => {
    if (navigated.current) return;
    navigated.current = true;
    const scores = computeScores(wounds, honestAnswer);
    setScores(scores);
    setTransitionDirection("up");
    router.push("/onboarding/score");
  };

  return (
    <ScreenWrapper>
      <div
        className="h-full flex flex-col"
        style={{
          background: "#0F0D0B",
          padding: "calc(env(safe-area-inset-top, 0px) + 48px) 32px calc(env(safe-area-inset-bottom, 0px) + 40px)",
        }}
      >
        {/* Top: heading + progress */}
        <div style={{ marginBottom: "48px" }}>
          <p style={{
            fontFamily: "var(--font-ui)",
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#C44B4B",
            marginBottom: "14px",
          }}>
            LURCH DIAGNOSTIC SYSTEM
          </p>
          <h1 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "1.1",
            color: "#F0EDED",
            marginBottom: "28px",
          }}>
            ANALYSING YOUR DAMAGE
          </h1>
          <ProgressBar durationMs={DURATION_MS} onComplete={handleComplete} />
        </div>

        {/* Middle: status lines - fills remaining space */}
        <div className="flex-1">
          <ProcessingStatus reducedMotion={reduced} onSequenceComplete={() => setDone(true)} />
        </div>

        {/* Bottom: footnote (+ skip, reduced-motion only) */}
        <ProcessingFootnote />
        {reduced && (
          <button
            onClick={handleComplete}
            style={{
              marginTop: "16px",
              alignSelf: "center",
              background: "transparent",
              border: "none",
              fontFamily: "var(--font-ui)",
              fontSize: "12px",
              color: "#9A958C",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              cursor: "pointer",
            }}
          >
            Skip the theatrics
          </button>
        )}
      </div>
    </ScreenWrapper>
  );
}
