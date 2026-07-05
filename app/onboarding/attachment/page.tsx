"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { OnboardingShell } from "@/components/layout/OnboardingShell";
import { CTAButton } from "@/components/inputs/CTAButton";
import { useLurchStore } from "@/lib/store";

type AttachmentOption = "anxious" | "avoidant" | "disorganized" | "secure";

const OPTIONS: { style: AttachmentOption; label: string; selectedLabel?: string; sub: string }[] = [
  { style: "anxious",     label: "Anxious",          sub: "I re-read the last message eleven times" },
  { style: "avoidant",    label: "Avoidant",          sub: "I need space ( ongoing. )" },
  { style: "disorganized",label: "Fearful - Avoidant",sub: "I want closeness & it terrifies me." },
  { style: "secure",      label: "Secure", selectedLabel: "Secure, bitch.", sub: "I have a therapist & I'm fine" },
];

const SECURE_ROUNDS = [
  {
    question: "Are you sure?\nMost people who say that have just never been left on read by someone they really liked.",
    optionA: "Yes, I'm secure.",
    optionB: "Actually, let me reconsider.",
  },
  {
    question: "Secure. Really. You've never spiral-texted at 2am? Never checked their Stories to see if they were ignoring you specifically?",
    optionA: "I haven't, no",
    optionB: "Okay fine",
  },
  {
    question: "We've cross-referenced your wound inventory against 26,000 users. Secure attachment in your age bracket has a 4.2% occurrence rate. You're saying you're in that 4.2%.",
    optionA: "Apparently yes",
    optionB: "I need a moment",
  },
  {
    question: "Your posture when you read that last message. The half-second before you decided you were fine. That was us. We saw it.",
    optionA: "I'm genuinely secure",
    optionB: "What is happening",
  },
  {
    question: "Alright. We believe you. You're secure. You probably have plants that are still alive and a morning routine. Good for you. This app is not for you.",
    optionA: "Take me out of here",
    optionB: "",
  },
];

function AttachmentRow({
  label, selectedLabel, sub, selected, onSelect,
}: {
  label: string; selectedLabel?: string; sub: string; selected: boolean; onSelect: () => void;
}) {
  return (
    <motion.button
      onClick={onSelect}
      whileTap={{ scale: 0.985 }}
      style={{
        display: "flex", alignItems: "flex-start", justifyContent: "space-between",
        width: "100%", padding: "16px 20px", borderRadius: "15px",
        background: selected ? "#E94057" : "transparent",
        border: `1px solid ${selected ? "#E94057" : "rgba(232,230,234,0.25)"}`,
        cursor: "pointer", flexShrink: 0, gap: "12px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1, alignItems: "flex-start" }}>
        <span style={{
          fontFamily: "var(--font-display)", fontSize: "18px", lineHeight: "1.5",
          color: selected ? "#0F0D0B" : "#F0EDED", fontWeight: 600, textAlign: "left",
        }}>
          {selected && selectedLabel ? selectedLabel : label}
        </span>
        {sub && (
          <span style={{
            fontFamily: "var(--font-ui)", fontSize: "12px", fontStyle: "italic",
            lineHeight: "1.28", color: selected ? "rgba(0,0,0,0.5)" : "#FDA6A6", textAlign: "left",
          }}>
            {sub}
          </span>
        )}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.svg key="check" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }} transition={{ duration: 0.15 }}
            width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "3px" }}
          >
            <path d="M4 10L8 14L16 6" stroke="#0F0D0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function SecurePopup({
  round, onConfirm, onReconsider,
}: {
  round: typeof SECURE_ROUNDS[0]; onConfirm: () => void; onReconsider: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{
        position: "absolute", inset: 0, zIndex: 50,
        background: "rgba(54,54,54,0.75)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: "0 36px",
      }}
      onClick={onReconsider}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 12 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{
          background: "linear-gradient(125deg, rgb(230,230,230) 10%, rgb(247,196,196) 95%)",
          borderRadius: "25px", width: "100%", maxWidth: "303px",
          padding: "32px 24px 24px", display: "flex", flexDirection: "column", gap: "20px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <p style={{
          fontFamily: "var(--font-ui)", fontSize: "16px", lineHeight: "1.5",
          color: "#2C2C2C", whiteSpace: "pre-line",
        }}>
          {round.question}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <button onClick={onConfirm} style={{
            width: "100%", height: "45px", background: "#FFFDFD", border: "1px solid #000",
            borderRadius: "12px", fontFamily: "var(--font-ui)", fontSize: "14px",
            color: "#272727", cursor: "pointer", textAlign: "left", padding: "0 18px",
          }}>
            {round.optionA}
          </button>
          {round.optionB && (
            <button onClick={onReconsider} style={{
              width: "100%", height: "45px", background: "#FFFDFD", border: "1px solid #000",
              borderRadius: "12px", fontFamily: "var(--font-ui)", fontSize: "14px",
              color: "#272727", cursor: "pointer", textAlign: "left", padding: "0 18px",
            }}>
              {round.optionB}
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AttachmentPage() {
  const router = useRouter();
  const { attachmentStyle, setAttachmentStyle, incrementSecureLoop, setTransitionDirection } = useLurchStore();
  const [secureRound, setSecureRound] = useState<number | null>(null);

  const showPopup = secureRound !== null;
  const currentRound = secureRound !== null ? SECURE_ROUNDS[secureRound] : null;

  const handleRowClick = (style: AttachmentOption) => {
    if (style === "secure") {
      setSecureRound(0);
    } else {
      setAttachmentStyle(style);
    }
  };

  const handleSecureConfirm = () => {
    incrementSecureLoop();
    if (secureRound !== null && secureRound >= SECURE_ROUNDS.length - 1) {
      setSecureRound(null);
      setTransitionDirection("up");
      router.push("/onboarding/attachment/secure-exit");
    } else {
      setSecureRound((r) => (r ?? 0) + 1);
    }
  };

  const handleSecureReconsider = () => {
    setSecureRound(null);
  };

  const handleContinue = () => {
    setTransitionDirection("up");
    router.push("/onboarding/wounds");
  };

  return (
    <ScreenWrapper>
      {/* Popup at ScreenWrapper level — clears OnboardingShell overflow-hidden */}
      <AnimatePresence>
        {showPopup && currentRound && (
          <SecurePopup
            key={`secure-${secureRound}`}
            round={currentRound}
            onConfirm={handleSecureConfirm}
            onReconsider={handleSecureReconsider}
          />
        )}
      </AnimatePresence>

      <OnboardingShell step={3}>
        <div style={{ marginBottom: "20px", flexShrink: 0 }}>
          <h1 style={{
            fontFamily: "var(--font-heading)", fontSize: "40px", fontWeight: 600,
            lineHeight: "1.15", color: "#F0EDED", marginBottom: "10px",
          }}>
            What&apos;s your attachment style?
          </h1>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "14px", lineHeight: "1.5", color: "#AEADAD" }}>
            We already know. This is to see if you do.
          </p>
        </div>

        <div className="flex-1 flex flex-col" style={{ gap: "10px" }}>
          {OPTIONS.map(({ style, label, selectedLabel, sub }) => (
            <AttachmentRow
              key={style}
              label={label}
              selectedLabel={selectedLabel}
              sub={sub}
              selected={attachmentStyle === style}
              onSelect={() => handleRowClick(style)}
            />
          ))}
        </div>

        <div style={{ paddingTop: "20px", flexShrink: 0 }}>
          <CTAButton
            onClick={handleContinue}
            disabled={!attachmentStyle || attachmentStyle === "secure"}
          >
            Continue
          </CTAButton>
        </div>
      </OnboardingShell>
    </ScreenWrapper>
  );
}
