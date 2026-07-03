"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { OnboardingShell } from "@/components/layout/OnboardingShell";
import { CTAButton } from "@/components/inputs/CTAButton";
import { useLurchStore } from "@/lib/store";

const OPTIONS: { value: string; label: string }[] = [
  { value: "women", label: "Women" },
  { value: "men", label: "Men" },
  { value: "tall-guys", label: "Tall guys specifically" },
  { value: "gen-wealth", label: "With generational wealth" },
  { value: "fun-not-too-much", label: "Fun but not too much" },
  { value: "ambitious-not-more", label: "Ambitious but not more than me" },
  { value: "independent-still-needs-me", label: "Independent but still needs me" },
  { value: "sanskaari-humour", label: "Sanskaari but also gets my humour" },
  { value: "everyone-lying", label: "Everyone (I'm lying to myself)" },
  { value: "know-when-see", label: "I'll know when I see them" },
];

function PreferenceRow({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
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
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, opacity: 0.25 }}>
            <path d="M4 10L8 14L16 6" stroke="#F0EDED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function PreferencePage() {
  const router = useRouter();
  const { preference, setPreference, setTransitionDirection } = useLurchStore();
  const [showWealthNote, setShowWealthNote] = useState(false);

  const handleSelect = (value: string) => {
    setPreference(value);
    if (value === "gen-wealth") {
      setShowWealthNote(true);
      setTimeout(() => setShowWealthNote(false), 2000);
    }
  };

  const handleContinue = () => {
    setTransitionDirection("up");
    router.push("/onboarding/attachment");
  };

  return (
    <ScreenWrapper>
      <OnboardingShell step={2}>
        {/* Header */}
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
            Who are you here for?
          </h1>
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "14px",
              lineHeight: "1.5",
              color: "#AEADAD",
            }}
          >
            The algorithm needs to know. Your heart already does. Your mother has opinions too.
          </p>
        </div>

        {/* Options */}
        <div className="flex-1 overflow-y-auto lurch-scroll" style={{ marginRight: "-4px", paddingRight: "4px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingBottom: "8px" }}>
            {OPTIONS.map(({ value, label }) => (
              <div key={value}>
                <PreferenceRow
                  label={label}
                  selected={preference === value}
                  onSelect={() => handleSelect(value)}
                />
                {value === "gen-wealth" && (
                  <AnimatePresence>
                    {showWealthNote && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontSize: "12px",
                          fontStyle: "italic",
                          color: "#8A8070",
                          paddingTop: "6px",
                          paddingLeft: "4px",
                        }}
                      >
                        Noted. We&apos;ll sort by net worth descending.
                      </motion.p>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            {/* Emotionally available — permanently unselectable */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "18px 20px",
                  borderRadius: "15px",
                  background: "transparent",
                  border: "1px solid rgba(232,230,234,0.1)",
                  opacity: 0.4,
                  cursor: "not-allowed",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "16px",
                    lineHeight: "1.5",
                    color: "#8A8070",
                    fontWeight: 600,
                  }}
                >
                  Emotionally available
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "12px",
                  fontStyle: "italic",
                  color: "#6A6060",
                  paddingTop: "6px",
                  paddingLeft: "4px",
                }}
              >
                unavailable in your area.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ paddingTop: "20px", flexShrink: 0 }}>
          <CTAButton onClick={handleContinue} disabled={!preference}>
            Continue
          </CTAButton>
        </div>
      </OnboardingShell>
    </ScreenWrapper>
  );
}
