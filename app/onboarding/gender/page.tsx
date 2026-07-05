"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { OnboardingShell } from "@/components/layout/OnboardingShell";
import { CTAButton } from "@/components/inputs/CTAButton";
import { useLurchStore } from "@/lib/store";
import { GENDER_LIST, HUMAN_INDEX } from "@/lib/data/genderList";

function GenderRow({ label, selected, onSelect }: { label: string; selected: boolean; onSelect: () => void }) {
  return (
    <motion.button
      onClick={onSelect}
      whileTap={{ scale: 0.985 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "18px 20px",
        borderRadius: "15px",
        background: selected ? "#E94057" : "transparent",
        border: `1px solid ${selected ? "#E94057" : "rgba(232,230,234,0.25)"}`,
        cursor: "pointer",
        transition: "background 0.15s, border-color 0.15s",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "16px",
          lineHeight: "1.5",
          color: selected ? "#0F0D0B" : "#F0EDED",
          fontWeight: 600,
          textAlign: "left",
        }}
      >
        {label}
      </span>
      <AnimatePresence>
        {selected && (
          <motion.svg
            key="check"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15 }}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{ flexShrink: 0 }}
          >
            <path d="M4 10L8 14L16 6" stroke="#0F0D0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        )}
        {!selected && (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, opacity: 0.3 }}>
            <path d="M4 10L8 14L16 6" stroke="#F0EDED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function GenderPage() {
  const router = useRouter();
  const { gender, setGender, setTransitionDirection } = useLurchStore();

  const [showScrollComment, setShowScrollComment] = useState(false);
  const scrollTimerStarted = useRef(false);
  const scrollCommentShown = useRef(false);

  const handleListScroll = () => {
    if (scrollTimerStarted.current || scrollCommentShown.current) return;
    scrollTimerStarted.current = true;
    setTimeout(() => {
      scrollCommentShown.current = true;
      setShowScrollComment(true);
      setTimeout(() => setShowScrollComment(false), 3000);
    }, 8000);
  };

  const handleContinue = () => {
    setTransitionDirection("up");
    router.push("/onboarding/preference");
  };

  const allGenders = GENDER_LIST.slice(0, HUMAN_INDEX);
  const humanOption = GENDER_LIST[HUMAN_INDEX];

  return (
    <ScreenWrapper>
      <div style={{ position: "relative", height: "100%" }}>
      <OnboardingShell step={1}>
        {/* Header */}
        <div style={{ marginBottom: "24px", flexShrink: 0 }}>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "1.1",
              color: "#F0EDED",
              marginBottom: "8px",
            }}
          >
            I identify as
          </h1>
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "14px",
              lineHeight: "1.5",
              color: "#939192",
            }}
          >
            Take your time. We have all of them. Even the ones you just invented.
          </p>
        </div>

        {/* Scrollable gender list */}
        <div
          className="flex-1 overflow-y-auto lurch-scroll"
          style={{ marginRight: "-4px", paddingRight: "4px" }}
          onScroll={handleListScroll}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingBottom: "8px" }}>
            {allGenders.map((g) => (
              <GenderRow
                key={g}
                label={g}
                selected={gender === g}
                onSelect={() => setGender(g)}
              />
            ))}

            {/* Divider before Human */}
            <div style={{ borderTop: "1px solid #2E2720", margin: "4px 0" }} />

            <GenderRow
              label={humanOption}
              selected={gender === humanOption}
              onSelect={() => setGender(humanOption)}
            />
            <AnimatePresence>
              {gender === humanOption && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "12px",
                    fontStyle: "italic",
                    color: "#8A8070",
                    paddingLeft: "4px",
                  }}
                >
                  Good enough.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Fixed CTA */}
        <div style={{ paddingTop: "20px", flexShrink: 0 }}>
          <CTAButton onClick={handleContinue} disabled={!gender}>
            Continue
          </CTAButton>
        </div>
      </OnboardingShell>

      {/* Floating aside — the app commenting on how long you've been scrolling */}
      <AnimatePresence>
        {showScrollComment && (
          <motion.p
            key="scroll-comment"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "absolute",
              left: "50%",
              top: "45%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              textAlign: "center",
              fontFamily: "var(--font-ui)",
              fontSize: "12px",
              fontStyle: "italic",
              color: "#C97B2A",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            Damn, I know right.
          </motion.p>
        )}
      </AnimatePresence>
      </div>
    </ScreenWrapper>
  );
}
