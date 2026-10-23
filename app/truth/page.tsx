"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { GhostButton } from "@/components/inputs/GhostButton";
import { CTAButton } from "@/components/inputs/CTAButton";
import { fadeUpStagger, fadeUpItem } from "@/lib/animations";
import { TRUTH_CITATIONS } from "@/lib/copy";

const WHAT_HAPPENED = [
  { label: "Variable reward loops", description: "Every swipe" },
  { label: "Artificial scarcity", description: "The like counter, the expiring match" },
  { label: "Loss aversion", description: "The countdown timer" },
  { label: "Social proof manipulation", description: "2,847 people subscribed this week" },
  { label: "Fake activity", description: "She's typed and deleted twice, always live-feeling" },
  { label: "Guilt-based exit trapping", description: "She just looked at your profile twice" },
  { label: "Bribery retention", description: "3 free Boosts if you stay" },
  { label: "Fake scarcity notification", description: "63 people matched with you" },
  { label: "Manufactured urgency", description: "Countdown timers, active now indicators" },
  { label: "A typing indicator that never resolves", description: "Someone is always typing. Forever." },
  { label: "Humans reduced to a swipeable card", description: "Judged in 0.3 seconds" },
  { label: "An AI offered to replace you", description: "In your own romantic life" },
];

export default function TruthPage() {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <div
        className="h-full overflow-y-auto lurch-scroll space-y-8"
        style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 48px)", paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 32px)", paddingLeft: "32px", paddingRight: "32px", background: "#0F0D0B" }}
      >
        {/* Header */}
        <div>
          <h1
            style={{ fontFamily: "var(--font-heading)", fontSize: "40px", fontWeight: 600, lineHeight: "1.1", color: "#F0EDED", marginBottom: "12px" }}
          >
            THE HONEST VERSION.
          </h1>
          <div style={{ height: "1px", background: "#6B1E23", width: "100%" }} />
        </div>

        {/* What happened */}
        <div>
          <p
            style={{ fontFamily: "var(--font-display)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#AEADAD", marginBottom: "16px" }}
          >
            WHAT JUST HAPPENED TO YOU · <span style={{ color: "#C44B4B" }}>Product satire</span>
          </p>
          <motion.div
            variants={fadeUpStagger}
            initial="initial"
            animate="animate"
            className="space-y-0"
            style={{ border: "1px solid #2E2720", borderRadius: "12px", overflow: "hidden" }}
          >
            {WHAT_HAPPENED.map(({ label, description }) => (
              <motion.div
                key={label}
                variants={fadeUpItem}
                className="flex flex-col px-4 py-3"
                style={{ borderBottom: "1px solid #2E2720" }}
              >
                <span
                  style={{ fontFamily: "var(--font-display)", fontSize: "14px", fontWeight: 600, color: "#F0EDED" }}
                >
                  {label}
                </span>
                <span
                  style={{ fontFamily: "var(--font-ui)", fontSize: "12px", color: "#AEADAD", marginTop: "2px" }}
                >
                  {description}
                </span>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-3 space-y-1">
            <p
              style={{ fontFamily: "var(--font-ui)", fontSize: "13px", fontStyle: "italic", color: "#AEADAD" }}
            >
              Every real dating app uses all of these.
            </p>
            <p
              style={{ fontFamily: "var(--font-ui)", fontSize: "13px", fontStyle: "italic", color: "#AEADAD" }}
            >
              You didn&apos;t notice because they work.
            </p>
          </div>
        </div>

        {/* Research — real, sourced, linked (no invented peer-reviewed stats). */}
        <div>
          <p
            style={{ fontFamily: "var(--font-display)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.12em", color: "#AEADAD", marginBottom: "6px" }}
          >
            RESEARCH WE ACTUALLY READ
          </p>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "12px", fontStyle: "italic", color: "#5C5852", marginBottom: "16px" }}>
            Real, peer-reviewed or reported sources — tap to read them yourself. We don&apos;t invent statistics to sell you a feeling.
          </p>
          <div className="space-y-2">
            {TRUTH_CITATIONS.map((c) => (
              <a
                key={c.url}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4"
                style={{
                  background: "#141414",
                  border: "1px solid #2A2A2A",
                  borderRadius: "12px",
                  textDecoration: "none",
                }}
              >
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "12px", fontWeight: 600, color: "#C44B4B", marginBottom: "3px" }}>
                  {c.author}
                </p>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "14px", lineHeight: "1.5", color: "#F5F0E8" }}>
                  {c.title} <span style={{ color: "#9A958C" }}>↗</span>
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="space-y-4">
          <p
            style={{ fontFamily: "var(--font-ui)", fontSize: "15px", fontStyle: "italic", lineHeight: "1.75", color: "#F0EDED" }}
          >
            Intimacy is not found. It is built slowly, with someone imperfect, in a context where you both show up repeatedly, in a body that is physically present, doing something that matters.
          </p>
          <p
            style={{ fontFamily: "var(--font-ui)", fontSize: "15px", fontStyle: "italic", lineHeight: "1.75", color: "#F0EDED" }}
          >
            The apps were never designed to give you that. They were designed to keep you swiping.
          </p>
          <p
            style={{ fontFamily: "var(--font-ui)", fontSize: "15px", fontStyle: "italic", lineHeight: "1.75", color: "#F0EDED" }}
          >
            You don&apos;t need a better algorithm. You might need a better Tuesday evening.
          </p>
        </div>

        <div className="space-y-2 pb-8">
          <CTAButton onClick={() => window.open("https://lurchout.vercel.app", "_blank")}>
            See what Lurch actually is
          </CTAButton>
          <GhostButton onClick={() => router.push("/feed")} dim>
            Back to the app
          </GhostButton>
        </div>
      </div>
    </ScreenWrapper>
  );
}
