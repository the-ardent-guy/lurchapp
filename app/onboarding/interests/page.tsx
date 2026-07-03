"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { OnboardingShell } from "@/components/layout/OnboardingShell";
import { CTAButton } from "@/components/inputs/CTAButton";
import { useLurchStore } from "@/lib/store";

const PRESET: string[] = [
  "Travel",
  "Sleeping on Sundays",
  "Brunch",
  "Coffee",
  "Netflix & actually chilling",
  "Cats",
];

function InterestChip({ label }: { label: string }) {
  const [nudge, setNudge] = useState(false);

  return (
    <motion.button
      onClick={() => { setNudge(true); setTimeout(() => setNudge(false), 400); }}
      animate={nudge ? { x: [0, -4, 4, -3, 3, 0] } : {}}
      transition={{ duration: 0.3 }}
      style={{
        padding: "12px 18px",
        borderRadius: "24px",
        fontFamily: "var(--font-display)",
        fontSize: "14px",
        lineHeight: 1,
        fontWeight: 600,
        background: "#E94057",
        border: "1px solid #E94057",
        color: "#0F0D0B",
        cursor: "default",
        transition: "all 0.15s",
        whiteSpace: "nowrap",
      }}
    >
      {label}, obviously
    </motion.button>
  );
}

export default function InterestsPage() {
  const router = useRouter();
  const { setTransitionDirection } = useLurchStore();

  const handleContinue = () => {
    setTransitionDirection("up");
    router.push("/onboarding/processing");
  };

  return (
    <ScreenWrapper>
      <OnboardingShell step={5} totalSteps={8}>
        <div style={{ marginBottom: "32px" }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "38px",
              fontWeight: 600,
              lineHeight: "1.1",
              color: "#F0EDED",
              marginBottom: "8px",
            }}
          >
            Your interests.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "14px",
              lineHeight: "1.5",
              color: "#AEADAD",
            }}
          >
            We pre-selected the most common ones. You&apos;re welcome.
          </p>
        </div>

        <div className="flex-1">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
            {PRESET.map((item) => (
              <InterestChip key={item} label={item} />
            ))}
          </div>

          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "16px",
              fontStyle: "italic",
              lineHeight: "1.6",
              color: "#AEADAD",
            }}
          >
            If you had any more real interests, you wouldn&apos;t be on an app.
          </p>
        </div>

        <div style={{ paddingTop: "20px", flexShrink: 0 }}>
          <CTAButton onClick={handleContinue}>
            These are fine
          </CTAButton>
        </div>
      </OnboardingShell>
    </ScreenWrapper>
  );
}
