"use client";

import { useRouter } from "next/navigation";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { OnboardingShell } from "@/components/layout/OnboardingShell";
import { MultiSelectGrid } from "@/components/inputs/MultiSelectGrid";
import { CTAButton } from "@/components/inputs/CTAButton";
import { useLurchStore } from "@/lib/store";
import { WOUND_LIST } from "@/lib/data/woundList";

export default function WoundsPage() {
  const router = useRouter();
  const { wounds, toggleWound, setTransitionDirection } = useLurchStore();

  const handleContinue = () => {
    setTransitionDirection("up");
    router.push("/onboarding/interests");
  };

  return (
    <ScreenWrapper>
      <OnboardingShell step={4}>
        <div style={{ marginBottom: "24px", flexShrink: 0 }}>
          <h1 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "1.1",
            color: "#F0EDED",
            marginBottom: "8px",
          }}>
            What did they do to you?
          </h1>
          <p style={{
            fontFamily: "var(--font-ui)",
            fontSize: "14px",
            lineHeight: "1.5",
            color: "#AEADAD",
          }}>
            Select all that apply. We&apos;ll find you someone who does the same things.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto lurch-scroll">
          <MultiSelectGrid
            items={WOUND_LIST}
            selected={wounds}
            onToggle={toggleWound}
          />
          <p style={{
            fontFamily: "var(--font-ui)",
            fontSize: "12px",
            fontStyle: "italic",
            textAlign: "center",
            marginTop: "16px",
            paddingBottom: "8px",
            color: "#6A6060",
          }}>
            You can select all of them. We won&apos;t judge. The algorithm will.
          </p>
        </div>

        <div style={{ paddingTop: "20px", flexShrink: 0 }}>
          <CTAButton onClick={handleContinue} disabled={wounds.length === 0}>
            Continue
          </CTAButton>
          <button
            onClick={() => {
              setTransitionDirection("up");
              router.push("/onboarding/shadow-work");
            }}
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              marginTop: "14px",
              background: "transparent",
              border: "none",
              fontFamily: "var(--font-ui)",
              fontSize: "12px",
              fontStyle: "italic",
              color: "#6A6060",
              cursor: "pointer",
            }}
          >
            Want to go deeper? One more question.
          </button>
        </div>
      </OnboardingShell>
    </ScreenWrapper>
  );
}
