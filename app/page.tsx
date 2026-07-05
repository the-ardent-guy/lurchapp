"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { useLurchStore } from "@/lib/store";
import { scalePressProps } from "@/lib/animations";

export default function SplashPage() {
  const router = useRouter();
  const setTransitionDirection = useLurchStore((s) => s.setTransitionDirection);
  const [shaking, setShaking] = useState(false);

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

        {/* Top gradient — keeps status bar / logo legible over the photo */}
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
                color: "#E94057",
                transform: "rotate(-4deg)",
                lineHeight: 1,
              }}
            >
              LURCH
            </h1>
          </div>

          {/* Headline — centered but pushed a bit below true center */}
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
                color: "#E4CECE",
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
                color: "#E4CECE",
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
                background: "#E94057",
                border: "none",
                borderRadius: "15px",
                padding: "18px 24px",
                fontFamily: "var(--font-ui)",
                fontSize: "16px",
                fontWeight: 600,
                color: "#FFFFFF",
                cursor: "pointer",
              }}
            >
              Begin Your Damage Profile
            </motion.button>

            <motion.button
              onClick={handleSignIn}
              animate={shaking ? { x: [0, -6, 6, -4, 4, 0] } : {}}
              transition={{ duration: 0.35 }}
              style={{
                display: "block",
                width: "100%",
                textAlign: "center",
                marginTop: "16px",
                background: "transparent",
                border: "none",
                fontFamily: "var(--font-ui)",
                fontSize: "14px",
                color: "#E9DEDE",
                cursor: "pointer",
              }}
            >
              Already have an account? <span style={{ color: "#E94057" }}>Sign In</span>
            </motion.button>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  );
}
