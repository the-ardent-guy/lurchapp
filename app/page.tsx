"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { useLurchStore } from "@/lib/store";

const GIRL_1 = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80&fit=crop&crop=face";
const GIRL_2 = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80&fit=crop&crop=face";
const GIRL_3 = "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80&fit=crop&crop=face";

const SLIDES = [
  {
    title: "A dating app. Finally honest.",
    body: "We match you based on your trauma. Not your interests. Not your hobbies. Your wounds.",
    center: GIRL_2,
    left: GIRL_1,
    right: GIRL_3,
  },
  {
    title: "Compatibility",
    body: "We find people who've been hurt in almost exactly the same way. You'll have so much to talk about.",
    center: GIRL_3,
    left: GIRL_2,
    right: GIRL_1,
  },
  {
    title: "Lurch Gold",
    body: "Sign up today and enjoy your first month of monetised loneliness, on us.",
    center: GIRL_1,
    left: GIRL_3,
    right: GIRL_2,
  },
] as const;

export default function SplashPage() {
  const router = useRouter();
  const setTransitionDirection = useLurchStore((s) => s.setTransitionDirection);
  const [slide, setSlide] = useState(0);
  const [shaking, setShaking] = useState(false);

  /* Auto-advance */
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 3500);
    return () => clearInterval(t);
  }, []);

  const advance = () => setSlide((s) => (s + 1) % SLIDES.length);

  const handleBegin = () => {
    setTransitionDirection("up");
    router.push("/onboarding/gender");
  };

  const handleSignIn = () => {
    setShaking(true);
    setTimeout(() => setShaking(false), 500);
  };

  const current = SLIDES[slide];

  return (
    <ScreenWrapper>
      <div
        className="h-full relative overflow-hidden select-none"
        style={{ background: "#0F0D0B" }}
      >
        {/* ── Photo cards — tap to advance ── */}
        <div
          className="absolute inset-0 cursor-pointer"
          style={{ bottom: "42%" }}
          onClick={advance}
        >
          {/* Left card — bleeds off-screen left */}
          <div
            className="absolute overflow-hidden"
            style={{
              left: "calc(-154 / 375 * 100%)",
              top: "calc(106 / 812 * 100vh)",
              width: "calc(200 / 375 * 100%)",
              height: "calc(300 / 812 * 100vh)",
              borderRadius: "15px",
            }}
          >
            <AnimatePresence>
              <motion.img
                key={current.left}
                src={current.left}
                alt=""
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-100%" }}
                transition={{ duration: 0.32, ease: "easeOut" }}
              />
            </AnimatePresence>
          </div>

          {/* Center card — hero, taller */}
          <div
            className="absolute overflow-hidden"
            style={{
              left: "calc(70 / 375 * 100%)",
              top: "calc(76 / 812 * 100vh)",
              width: "calc(235 / 375 * 100%)",
              height: "calc(360 / 812 * 100vh)",
              borderRadius: "15px",
            }}
          >
            <AnimatePresence>
              <motion.img
                key={current.center}
                src={current.center}
                alt=""
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -20 }}
                transition={{ duration: 0.38, ease: [0.34, 1.2, 0.64, 1] }}
              />
            </AnimatePresence>
          </div>

          {/* Right card — bleeds off-screen right */}
          <div
            className="absolute overflow-hidden"
            style={{
              left: "calc(329 / 375 * 100%)",
              top: "calc(106 / 812 * 100vh)",
              width: "calc(200 / 375 * 100%)",
              height: "calc(300 / 812 * 100vh)",
              borderRadius: "15px",
            }}
          >
            <AnimatePresence>
              <motion.img
                key={current.right}
                src={current.right}
                alt=""
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.32, ease: "easeOut" }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* ── Bottom content — fixed, doesn't advance on tap ── */}
        <div
          className="absolute left-0 right-0 bottom-0 flex flex-col items-center"
          style={{
            paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 28px)",
            paddingLeft: "40px",
            paddingRight: "40px",
          }}
        >
          {/* Title + body — crossfade on slide change */}
          <div
            className="w-full flex flex-col items-center"
            style={{ marginBottom: "24px", minHeight: "108px" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slide}
                className="flex flex-col items-center"
                style={{ gap: "10px", textAlign: "center" }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#E94057",
                    lineHeight: 1.4,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {current.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "#E1E1E1",
                    maxWidth: "265px",
                  }}
                >
                  {current.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicator — pill expands on active */}
          <div
            className="flex items-center"
            style={{ gap: "6px", marginBottom: "32px" }}
          >
            {SLIDES.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Slide ${i + 1}`}
                animate={{
                  width: i === slide ? "20px" : "8px",
                  background: i === slide ? "#E94057" : "#8A8070",
                  opacity: i === slide ? 1 : 0.5,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{
                  height: "8px",
                  borderRadius: "4px",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              />
            ))}
          </div>

          {/* Primary CTA */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleBegin}
            style={{
              width: "100%",
              padding: "18px 24px",
              background: "#E94057",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "15px",
              boxShadow: "0 15px 15px rgba(233,64,87,0.2)",
              fontFamily: "var(--font-display)",
              fontSize: "16px",
              fontWeight: 700,
              color: "#FFFFFF",
              cursor: "pointer",
              letterSpacing: "-0.01em",
              marginBottom: "16px",
              lineHeight: 1,
            }}
          >
            Create an account
          </motion.button>

          {/* Sign in */}
          <motion.button
            onClick={handleSignIn}
            animate={shaking ? { x: [0, -6, 6, -4, 4, 0] } : {}}
            transition={{ duration: 0.35 }}
            style={{
              background: "transparent",
              border: "none",
              fontFamily: "var(--font-ui)",
              fontSize: "14px",
              lineHeight: "1.5",
              color: "#E9DEDE",
              cursor: "pointer",
            }}
          >
            Already have an account?{" "}
            <span style={{ color: "#E94057" }}>Sign In</span>
          </motion.button>
        </div>
      </div>
    </ScreenWrapper>
  );
}
