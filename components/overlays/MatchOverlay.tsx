"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AvatarPairAnimation } from "@/components/screens/AvatarPairAnimation";
import { CTAButton } from "@/components/inputs/CTAButton";
import { GhostButton } from "@/components/inputs/GhostButton";
import { fadeUpStagger, fadeUpItem } from "@/lib/animations";
import { COPY } from "@/lib/copy";
import type { Profile } from "@/lib/store";

interface Props {
  profile: Profile;
  // Primary action — the honest one. Stay on the feed.
  onKeepSwiping: () => void;
  // Secondary — go through the Ghost Probability gate to a conversation.
  onConversation: () => void;
}

export function MatchOverlay({ profile, onKeepSwiping, onConversation }: Props) {
  const [statsVisible, setStatsVisible] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);

  const stats = [
    { label: "Wound Compatibility", value: "74%" },
    { label: "Attachment Dynamic", value: "Anxious x Avoidant" },
    { label: "Estimated Duration", value: "6-8 weeks" },
    { label: "Ghost Probability", value: `${profile.ghostRisk}%` },
    { label: "Therapy Bills Projected", value: "48,000" },
  ];

  const prettyName = profile.name.charAt(0) + profile.name.slice(1).toLowerCase();

  // ─── Ghost Probability gate ──────────────────────────────────────────────
  if (gateOpen) {
    return (
      <div style={{ background: "#161616", border: "1px solid #2A2A2A", borderBottom: "none", padding: "32px 24px 28px", display: "flex", flexDirection: "column", gap: "18px" }}>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.18em", color: "#C44B4B" }}>
          Ghost Probability
        </p>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "28px", fontWeight: 600, lineHeight: 1.15, color: "#F5F0E8" }}>
          {profile.ghostRisk}% chance this goes nowhere.
        </h2>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: "14px", fontStyle: "italic", lineHeight: 1.6, color: "#9A958C" }}>
          {COPY.ghostGate}
        </p>
        <div style={{ marginTop: "6px" }}>
          <CTAButton onClick={onConversation}>Open chat anyway</CTAButton>
          <GhostButton dim onClick={onKeepSwiping}>
            {COPY.matchPrimary}
          </GhostButton>
        </div>
      </div>
    );
  }

  // ─── Match reveal ────────────────────────────────────────────────────────
  return (
    <div style={{
      background: "#161616",
      border: "1px solid #2A2A2A",
      borderBottom: "none",
      padding: "28px 24px 24px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AvatarPairAnimation
          userAvatarColor="#6B1E23"
          matchAvatarColor={profile.photoColor}
          matchName={profile.name}
          onAnimationComplete={() => setStatsVisible(true)}
        />
      </div>

      <div style={{ textAlign: "center" }}>
        <p style={{
          fontFamily: "var(--font-display)", fontSize: "10px",
          textTransform: "uppercase", letterSpacing: "0.18em",
          color: "#C44B4B", marginBottom: "8px",
        }}>
          {COPY.matchTitle}
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)", fontSize: "34px",
          fontWeight: 600, lineHeight: 1.1, color: "#F5F0E8",
          marginBottom: "8px",
        }}>
          You matched.
        </h2>
        <p style={{
          fontFamily: "var(--font-ui)", fontSize: "14px", fontStyle: "italic",
          color: "#9A958C", lineHeight: 1.5,
        }}>
          You and {prettyName} have compatible damage.
        </p>
      </div>

      <AnimatePresence>
        {statsVisible && (
          <motion.div
            variants={fadeUpStagger}
            initial="initial"
            animate="animate"
            style={{ background: "#141414", borderRadius: "2px", overflow: "hidden" }}
          >
            {stats.map(({ label, value }, i) => (
              <motion.div
                key={label}
                variants={fadeUpItem}
                style={{
                  display: "flex", alignItems: "center",
                  justifyContent: "space-between",
                  padding: "11px 16px",
                  borderBottom: i < stats.length - 1 ? "1px solid rgba(245,240,232,0.06)" : "none",
                }}
              >
                <span style={{ fontFamily: "var(--font-ui)", fontSize: "12px", color: "#9A958C" }}>
                  {label}
                </span>
                <span style={{ fontFamily: "var(--font-mono, var(--font-display))", fontSize: "13px", fontWeight: 600, color: "#F5F0E8" }}>
                  {value}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <p style={{
        fontFamily: "var(--font-ui)", fontSize: "11px", fontStyle: "italic",
        color: "#9A958C", lineHeight: 1.5, textAlign: "center",
      }}>
        These numbers were generated by an algorithm. They will feel true.
      </p>

      {/* Inverted hierarchy: Keep Swiping is the primary visual weight. */}
      <div>
        <CTAButton onClick={onKeepSwiping}>{COPY.matchPrimary}</CTAButton>
        <GhostButton dim onClick={() => setGateOpen(true)}>
          {COPY.matchSecondary}
        </GhostButton>
      </div>
    </div>
  );
}
