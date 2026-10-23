"use client";

import { OnboardingProgress } from "@/components/nav/OnboardingProgress";
import { BackButton } from "@/components/nav/BackButton";
import { ONBOARDING_STEPS } from "@/lib/pricing";

interface Props {
  children: React.ReactNode;
  step: number;
  totalSteps?: number;
  showBack?: boolean;
  onBack?: () => void;
  bonusStep?: boolean;
}

export function OnboardingShell({ children, step, totalSteps = ONBOARDING_STEPS, showBack = true, onBack, bonusStep = false }: Props) {
  return (
    <div className="flex flex-col h-full" style={{ background: "#0F0D0B" }}>
      <div
        className="flex items-center justify-between shrink-0"
        style={{
          paddingTop: "calc(env(safe-area-inset-top, 0px) + 16px)",
          paddingBottom: "16px",
          paddingLeft: "28px",
          paddingRight: "28px",
        }}
      >
        {showBack ? <BackButton onBack={onBack} /> : <div style={{ width: "40px" }} />}
        <OnboardingProgress step={step} totalSteps={totalSteps} bonus={bonusStep} />
      </div>

      <div className="flex-1 overflow-hidden flex flex-col" style={{ padding: "20px 28px 32px" }}>
        {children}
      </div>
    </div>
  );
}
