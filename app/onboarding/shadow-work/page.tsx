"use client";

import { useRouter } from "next/navigation";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { OnboardingShell } from "@/components/layout/OnboardingShell";
import { OptionCard } from "@/components/inputs/OptionCard";
import { CTAButton } from "@/components/inputs/CTAButton";
import { useLurchStore } from "@/lib/store";

const OPTIONS: { value: string; label: string }[] = [
  { value: "find-something-wrong", label: "I find something wrong with them" },
  { value: "get-busier", label: "I get busier than I actually am" },
  { value: "test-them", label: "I test them, without telling them I'm testing them" },
  { value: "say-im-fine", label: "I say I'm fine. I say it a lot." },
  { value: "dont-know", label: "I don't know. I haven't let it happen recently." },
];

export default function ShadowWorkPage() {
  const router = useRouter();
  const { shadowWorkAnswer, setShadowWorkAnswer, setTransitionDirection } = useLurchStore();

  const handleContinue = () => {
    setTransitionDirection("up");
    router.push("/onboarding/interests");
  };

  return (
    <ScreenWrapper>
      <OnboardingShell step={1} totalSteps={1} bonusStep>
        <div style={{ marginBottom: "24px", flexShrink: 0 }}>
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
            What do you do when someone gets too close?
          </h1>
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "14px",
              lineHeight: "1.5",
              color: "#AEADAD",
            }}
          >
            Not what you think you do. The actual thing.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto lurch-scroll flex flex-col gap-3">
          {OPTIONS.map(({ value, label }) => (
            <OptionCard
              key={value}
              label={label}
              selected={shadowWorkAnswer === value}
              onSelect={() => setShadowWorkAnswer(value)}
            />
          ))}
        </div>

        <div style={{ paddingTop: "20px", flexShrink: 0 }}>
          <CTAButton onClick={handleContinue} disabled={!shadowWorkAnswer}>
            Continue
          </CTAButton>
        </div>
      </OnboardingShell>
    </ScreenWrapper>
  );
}
