"use client";

import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { OnboardingShell } from "@/components/layout/OnboardingShell";
import { OptionCard } from "@/components/inputs/OptionCard";
import { ReflectionLine } from "@/components/typography/ReflectionLine";
import { CTAButton } from "@/components/inputs/CTAButton";
import { useLurchStore } from "@/lib/store";

const OPTIONS: { value: string; label: string; reflection: string }[] = [
  {
    value: "validation",
    label: "Validation that I'm still desirable after my last situationship",
    reflection: "Most people here. You're not alone in that.",
  },
  {
    value: "feel-something",
    label: "To feel something while avoiding the thing I actually need",
    reflection: "The app is very good at providing this. That's the problem.",
  },
  {
    value: "relationship",
    label: "A relationship (I've been saying this for three years)",
    reflection: "The app will keep you looking. That's not the same thing.",
  },
  {
    value: "boredom",
    label: "I'm bored and my thumb just knows this motion now",
    reflection: "You've identified the mechanism. It won't stop working on you.",
  },
  {
    value: "dont-know",
    label: "I genuinely don't know. No one's asked before now.",
    reflection: "That's the most honest answer on this screen.",
  },
];

export default function HonestPage() {
  const router = useRouter();
  const { honestAnswer, setHonestAnswer, setTransitionDirection } = useLurchStore();

  const handleContinue = () => {
    setTransitionDirection("up");
    router.push("/onboarding/processing");
  };

  return (
    <ScreenWrapper>
      <OnboardingShell step={6}>
        <div style={{ marginBottom: "24px", flexShrink: 0 }}>
          <h1
            style={{ fontFamily: "var(--font-display)", fontSize: "38px", fontWeight: 600, lineHeight: "1.1", color: "#F0EDED", marginBottom: "8px" }}
          >
            What are you actually here for?
          </h1>
          <p
            style={{ fontFamily: "var(--font-ui)", fontSize: "14px", lineHeight: "1.5", color: "#AEADAD" }}
          >
            Not what you tell people. The actual thing.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto lurch-scroll flex flex-col gap-3">
          {OPTIONS.map(({ value, label, reflection }) => (
            <div key={value}>
              <OptionCard
                label={label}
                selected={honestAnswer === value}
                onSelect={() => setHonestAnswer(value)}
              />
              <AnimatePresence>
                {honestAnswer === value && (
                  <ReflectionLine text={reflection} />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: "20px", flexShrink: 0 }}>
          <CTAButton onClick={handleContinue} disabled={!honestAnswer}>
            ANALYSE MY DAMAGE
          </CTAButton>
        </div>
      </OnboardingShell>
    </ScreenWrapper>
  );
}
