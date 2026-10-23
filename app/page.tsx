"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { ModalOverlay } from "@/components/layout/ModalOverlay";
import { CTAButton } from "@/components/inputs/CTAButton";
import { GhostButton } from "@/components/inputs/GhostButton";
import { useLurchStore } from "@/lib/store";
import { scalePressProps } from "@/lib/animations";
import { COPY } from "@/lib/copy";

export default function SplashPage() {
  const router = useRouter();
  const setTransitionDirection = useLurchStore((s) => s.setTransitionDirection);
  const [signInOpen, setSignInOpen] = useState(false);

  const handleBegin = () => {
    setTransitionDirection("up");
    router.push("/onboarding/gender");
  };

  const handleGuestContinue = () => {
    setSignInOpen(false);
    handleBegin();
  };

  return (
    <ScreenWrapper>
      <div style={{ position: "relative", height: "100%", background: "#2F2E2E", overflow: "hidden" }}>
        {/* Background photo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/splash-bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />

        {/* Top gradient - keeps status bar / logo legible over the photo */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "45%",
            background: "linear-gradient(to bottom, #0A0A0A 0%, rgba(10,10,10,0) 100%)",
          }}
        />

        {/* Radial gradient behind the headline for legibility */}
        <div
          style={{
            position: "absolute",
            left: "10%",
            right: "10%",
            top: "48%",
            height: "28%",
            background: "radial-gradient(ellipse at center, rgba(22,22,22,0.8) 0%, rgba(22,22,22,0) 70%)",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", height: "100%" }}>
          {/* Logo */}
          <div
            style={{
              position: "absolute",
              top: "calc(env(safe-area-inset-top, 0px) + 13%)",
              left: 0,
              right: 0,
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "clamp(58px, 18vw, 84px)",
                color: "#F5F0E8",
                textShadow: "3px 3px 0 #6B1E23",
                transform: "rotate(-4deg)",
                lineHeight: 1,
              }}
            >
              LURCH
            </h1>
          </div>

          {/* Headline - centered but pushed a bit below true center */}
          <div
            style={{
              position: "absolute",
              top: "57%",
              transform: "translateY(-50%) rotate(-0.4deg)",
              left: 0,
              right: 0,
              padding: "0 24px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "clamp(42px, 13vw, 62px)",
                lineHeight: 1.05,
                color: "#F5F0E8",
              }}
            >
              We match you
            </div>
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: "clamp(42px, 13vw, 62px)",
                lineHeight: 1.05,
                color: "#F5F0E8",
              }}
            >
              on your trauma.
            </div>
          </div>

          {/* Subtext + CTA block, anchored to bottom */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "0 32px",
              paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 28px)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "14px",
                lineHeight: 1.5,
                color: "#DFDDDD",
                textAlign: "center",
                marginBottom: "24px",
              }}
            >
              Every profile checked.
              <br />
              Not for bots. For baggage.
            </p>

            <motion.button
              {...scalePressProps}
              onClick={handleBegin}
              style={{
                display: "block",
                width: "100%",
                background: "linear-gradient(180deg, #7E2A31 0%, #661D22 100%)",
                border: "1px solid rgba(245,240,232,0.16)",
                borderRadius: "16px",
                padding: "18px 24px",
                minHeight: "58px",
                fontFamily: "var(--font-ui)",
                fontSize: "16px",
                fontWeight: 600,
                color: "#FBF7F0",
                cursor: "pointer",
                boxShadow: "0 12px 30px -8px rgba(107,30,35,0.6), inset 0 1px 0 rgba(245,240,232,0.18)",
              }}
            >
              Create account
            </motion.button>

            <motion.button
              onClick={() => setSignInOpen(true)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "center",
                marginTop: "16px",
                background: "transparent",
                border: "none",
                fontFamily: "var(--font-ui)",
                fontSize: "14px",
                color: "#F5F0E8",
                cursor: "pointer",
              }}
            >
              Already have an account? <span style={{ color: "#C44B4B" }}>Sign In</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Sign In - satire sheet. No auth vendor; guest-only showcase. */}
      <ModalOverlay isOpen={signInOpen} onClose={() => setSignInOpen(false)}>
        <div style={{ padding: "32px 28px calc(env(safe-area-inset-bottom, 0px) + 28px)" }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "#C44B4B",
              marginBottom: "14px",
            }}
          >
            Welcome back
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "30px",
              fontWeight: 600,
              lineHeight: 1.15,
              color: "#F5F0E8",
              marginBottom: "12px",
            }}
          >
            {COPY.signinSheet}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "14px",
              fontStyle: "italic",
              lineHeight: 1.6,
              color: "#9A958C",
              marginBottom: "28px",
            }}
          >
            There is nothing to sign into. There never was. You can start a damage profile
            right now. No password. No one checking.
          </p>
          <CTAButton onClick={handleGuestContinue}>Continue as guest</CTAButton>
          <GhostButton dim onClick={() => setSignInOpen(false)}>
            Back
          </GhostButton>
        </div>
      </ModalOverlay>
    </ScreenWrapper>
  );
}
