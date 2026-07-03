"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { CTAButton } from "@/components/inputs/CTAButton";
import { useLurchStore } from "@/lib/store";
import { randomBetween } from "@/lib/utils";

const MONO_STACK = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';

const FEATURE_LINES = [
  "Vetting. Every profile checked. Not for bots. For baggage.",
  "Shared Damage. We match you with people who flinch at the same things.",
  "Upgrade Your Loneliness. First month free.",
];

const STATS = [
  { value: "26,000", label: "downloads" },
  { value: "0", label: "marriages" },
  { value: "∞", label: "therapy bills pending" },
];

export default function SplashPage() {
  const router = useRouter();
  const setTransitionDirection = useLurchStore((s) => s.setTransitionDirection);
  const [joinedCount, setJoinedCount] = useState(1500);
  const [shaking, setShaking] = useState(false);

  /* Randomised only after mount — avoids SSR/client hydration mismatch */
  useEffect(() => {
    setJoinedCount(randomBetween(1200, 1800));
  }, []);

  const handleBegin = () => {
    setTransitionDirection("up");
    router.push("/onboarding/gender");
  };

  const handleSignIn = () => {
    setShaking(true);
    setTimeout(() => setShaking(false), 500);
  };

  return (
    <ScreenWrapper>
      <div
        className="h-full flex flex-col"
        style={{ background: "#0F0D0B" }}
      >
        {/* Live counter pill */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "calc(env(safe-area-inset-top, 0px) + 20px)",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              padding: "7px 14px",
              borderRadius: "999px",
              border: "1px solid #2E2720",
              background: "#1A1612",
            }}
          >
            <motion.span
              animate={{ opacity: [1, 0.35, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#4A7C59",
                display: "inline-block",
              }}
            />
            <span style={{ fontFamily: "var(--font-ui)", fontSize: "12px", color: "#AEADAD" }}>
              {joinedCount.toLocaleString()} people joined today
            </span>
          </div>
        </div>

        {/* Middle content */}
        <div
          className="flex-1 overflow-y-auto lurch-scroll flex flex-col"
          style={{ padding: "0 32px", justifyContent: "center", gap: "32px" }}
        >
          {/* Logo + tagline */}
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "56px",
                fontWeight: 700,
                color: "#EDE8DF",
                letterSpacing: "-0.02em",
                display: "inline-block",
                transform: "rotate(-2deg)",
              }}
            >
              LURCH
            </h1>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "17px",
                fontStyle: "italic",
                color: "#FDA6A6",
                marginTop: "8px",
              }}
            >
              We match you on your trauma.
            </p>
          </div>

          {/* Feature lines */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {FEATURE_LINES.map((line) => (
              <p
                key={line}
                style={{
                  fontFamily: MONO_STACK,
                  fontSize: "11px",
                  lineHeight: 1.6,
                  color: "#AEADAD",
                  textAlign: "left",
                }}
              >
                — {line}
              </p>
            ))}
          </div>

          {/* Rule */}
          <div style={{ height: "1px", background: "#2E2720" }} />

          {/* Stats row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              border: "1px solid #2E2720",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            {STATS.map(({ value, label }, i) => (
              <div
                key={label}
                style={{
                  padding: "14px 8px",
                  textAlign: "center",
                  borderLeft: i > 0 ? "1px solid #2E2720" : "none",
                }}
              >
                <p style={{
                  fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 600,
                  color: "#EDE8DF", marginBottom: "2px",
                }}>
                  {value}
                </p>
                <p style={{
                  fontFamily: "var(--font-ui)", fontSize: "10px", color: "#8A8070",
                }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom — CTA, sign in, fine print */}
        <div
          style={{
            flexShrink: 0,
            padding: "0 32px calc(env(safe-area-inset-bottom, 0px) + 20px)",
          }}
        >
          <CTAButton onClick={handleBegin}>
            Begin your damage profile
          </CTAButton>

          <motion.button
            onClick={handleSignIn}
            animate={shaking ? { x: [0, -6, 6, -4, 4, 0] } : {}}
            transition={{ duration: 0.35 }}
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              marginTop: "14px",
              background: "transparent",
              border: "none",
              fontFamily: "var(--font-ui)",
              fontSize: "14px",
              color: "#AEADAD",
              cursor: "pointer",
            }}
          >
            Already have an account?{" "}
            <span style={{ color: "#E94057" }}>Sign in</span>
          </motion.button>

          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "9px",
              lineHeight: 1.5,
              color: "#4A4540",
              textAlign: "center",
              marginTop: "16px",
            }}
          >
            By continuing you agree to share your attachment patterns, childhood wounds, and browser history with third parties including but not limited to your mother. This is a satirical project. No data is collected.
          </p>
        </div>
      </div>
    </ScreenWrapper>
  );
}
