"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PanInfo } from "framer-motion";
import type { Profile } from "@/lib/store";
import { useLurchStore } from "@/lib/store";
import { useColors } from "@/lib/theme";
import { WoundBadge } from "@/components/cards/WoundBadge";
import { AttachmentBadge } from "@/components/cards/AttachmentBadge";
import { TraitBadge } from "@/components/cards/TraitBadge";
import { lifestyleShots } from "@/lib/data/lifestyle";

interface Props {
  profile: Profile | null;
  onClose: () => void;
  onPass: () => void;
  onLike: () => void;
}

function HeroPhoto({ profile }: { profile: Profile }) {
  return (
    <div style={{
      borderRadius: "20px", overflow: "hidden",
      background: profile.photoColor,
      height: "440px", position: "relative",
      flexShrink: 0,
    }}>
      {profile.photoUrl ? (
        <img src={profile.photoUrl} alt="" aria-hidden
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
      ) : (
        <span style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "200px", fontFamily: "var(--font-display)", color: "#fff", opacity: 0.06, fontWeight: "bold", lineHeight: 1 }}>
          {profile.name[0]}
        </span>
      )}

      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 28%, transparent 55%)" }} />

      {/* Distance pill */}
      <div style={{
        position: "absolute", top: "16px", left: "16px",
        height: "30px", background: "rgba(0,0,0,0.45)", backdropFilter: "blur(12px)",
        borderRadius: "9999px", display: "flex", alignItems: "center",
        gap: "5px", paddingLeft: "11px", paddingRight: "13px",
        border: "1px solid rgba(255,255,255,0.12)",
      }}>
        <svg width="9" height="12" viewBox="0 0 10 13" fill="none">
          <path d="M5 0C2.79 0 1 1.79 1 4C1 7 5 13 5 13C5 13 9 7 9 4C9 1.79 7.21 0 5 0ZM5 5.5C4.17 5.5 3.5 4.83 3.5 4C3.5 3.17 4.17 2.5 5 2.5C5.83 2.5 6.5 3.17 6.5 4C6.5 4.83 5.83 5.5 5 5.5Z" fill="rgba(245,240,232,0.85)"/>
        </svg>
        <span style={{ fontFamily: "var(--font-ui)", fontSize: "11px", color: "rgba(245,240,232,0.9)" }}>{profile.distance ?? "1 km"}</span>
      </div>

      {/* Name + badges */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "18px 20px 22px" }}>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "32px", fontWeight: 600, color: "#FFFFFF", lineHeight: 1.15, letterSpacing: "-0.01em", marginBottom: "6px" }}>
          {profile.name.charAt(0) + profile.name.slice(1).toLowerCase()}, {profile.age}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {profile.extraBadges?.map((b) => <TraitBadge key={b.label} label={b.label} small={b.small} />)}
          {profile.wounds.slice(0, 2).map((w) => <WoundBadge key={w} label={w} />)}
          {profile.attachmentLabel && <AttachmentBadge label={profile.attachmentLabel} />}
        </div>
      </div>
    </div>
  );
}

function Vitals({ profile }: { profile: Profile }) {
  const replies = profile.ghostRisk >= 70 ? "Replies: eventually, maybe" : profile.ghostRisk >= 45 ? "Replies: when bored" : "Replies: surprisingly fast";
  const items = [
    profile.location,
    profile.attachmentLabel,
    replies,
    "Looking for: whatever hurts",
  ].filter(Boolean) as string[];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", flexShrink: 0 }}>
      {items.map((t) => (
        <span key={t} style={{
          fontFamily: "var(--font-ui)", fontSize: "12px", color: "#C9C3B8",
          background: "#141414", border: "1px solid #2A2A2A", borderRadius: "9999px",
          padding: "7px 13px",
        }}>{t}</span>
      ))}
    </div>
  );
}

function LifestylePhoto({ src, caption }: { src: string; caption: string }) {
  return (
    <div style={{ borderRadius: "18px", overflow: "hidden", position: "relative", height: "300px", flexShrink: 0, background: "#141414" }}>
      <img src={src} alt="" aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 45%)" }} />
      <p style={{ position: "absolute", bottom: "14px", left: "16px", right: "16px", fontFamily: "var(--font-ui)", fontSize: "13px", fontStyle: "italic", color: "rgba(245,240,232,0.92)", lineHeight: 1.4 }}>
        “{caption}”
      </p>
    </div>
  );
}

function PromptCard({ profile, colors }: { profile: Profile; colors: ReturnType<typeof useColors> }) {
  return (
    <div style={{
      background: colors.surface, borderRadius: "16px",
      padding: "22px 20px", flexShrink: 0,
      border: `1px solid ${colors.border}`,
    }}>
      <p style={{
        fontFamily: "var(--font-display)", fontSize: "10px",
        textTransform: "uppercase", letterSpacing: "0.15em",
        color: "#C44B4B", marginBottom: "12px",
      }}>
        Lurch Prompt
      </p>
      <p style={{
        fontFamily: "var(--font-display)", fontSize: "13px",
        color: colors.muted, lineHeight: 1.4, marginBottom: "12px",
      }}>
        {profile.promptQuestion ?? "The last time I was completely honest"}
      </p>
      <p style={{
        fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 600,
        color: colors.text, lineHeight: 1.5,
      }}>
        {profile.promptAnswer ?? ""}
      </p>
    </div>
  );
}

function TruthsAndLieCard({ profile, colors }: { profile: Profile; colors: ReturnType<typeof useColors> }) {
  const [guessed, setGuessed] = useState<number | null>(null);
  const data = profile.threeOrLie;
  if (!data) return null;

  const { statements, lieIndex } = data;
  const isRevealed = guessed !== null;
  const isCorrect = guessed === lieIndex;

  return (
    <div style={{
      background: colors.surface, borderRadius: "16px",
      padding: "22px 20px", flexShrink: 0,
      border: `1px solid ${colors.border}`,
    }}>
      <p style={{
        fontFamily: "var(--font-display)", fontSize: "10px",
        textTransform: "uppercase", letterSpacing: "0.15em",
        color: "#C44B4B", marginBottom: "6px",
      }}>
        Three or a Lie
      </p>
      <p style={{
        fontFamily: "var(--font-ui)", fontSize: "12px", fontStyle: "italic",
        color: colors.muted, marginBottom: "16px",
      }}>
        {isRevealed
          ? isCorrect
            ? "You found the lie."
            : `Nope. Statement ${lieIndex + 1} was the lie.`
          : "Tap the one that isn’t true."}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {statements.map((statement, i) => {
          const isTheLie = i === lieIndex;
          const isWrongGuess = isRevealed && guessed === i && !isCorrect;

          let bg = colors.cardTile;
          let borderColor = colors.cardTileBorder;
          let textColor = colors.text;

          if (isRevealed) {
            if (isTheLie) {
              bg = "rgba(74,124,89,0.12)";
              borderColor = "rgba(74,124,89,0.35)";
            } else if (isWrongGuess) {
              bg = "rgba(192,57,43,0.08)";
              borderColor = "rgba(192,57,43,0.22)";
              textColor = colors.muted;
            }
          }

          return (
            <motion.button
              key={i}
              onClick={() => { if (!isRevealed) setGuessed(i); }}
              whileTap={!isRevealed ? { scale: 0.975 } : {}}
              style={{
                background: bg,
                border: `1px solid ${borderColor}`,
                borderRadius: "10px",
                padding: "12px 14px",
                textAlign: "left",
                cursor: isRevealed ? "default" : "pointer",
                color: textColor,
                fontFamily: "var(--font-ui)",
                fontSize: "13px",
                lineHeight: 1.5,
                transition: "background 0.2s, border-color 0.2s",
                width: "100%",
              }}
            >
              {statement}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function ShadowPromptCard({ profile, colors }: { profile: Profile; colors: ReturnType<typeof useColors> }) {
  if (!profile.shadowPrompt) return null;

  return (
    <div style={{
      background: colors.surface, borderRadius: "16px",
      padding: "22px 20px", flexShrink: 0,
      border: `1px solid ${colors.border}`,
    }}>
      <p style={{
        fontFamily: "var(--font-display)", fontSize: "10px",
        textTransform: "uppercase", letterSpacing: "0.15em",
        color: "#C44B4B", marginBottom: "12px",
      }}>
        Lurch Prompt
      </p>
      <p style={{
        fontFamily: "var(--font-display)", fontSize: "13px",
        color: colors.muted, lineHeight: 1.4, marginBottom: "12px",
      }}>
        {profile.shadowPrompt.question}
      </p>
      <p style={{
        fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 600,
        color: colors.text, lineHeight: 1.5,
      }}>
        {profile.shadowPrompt.answer}
      </p>
    </div>
  );
}

function ExReviewCard({ profile, colors }: { profile: Profile; colors: ReturnType<typeof useColors> }) {
  const { openPaywall, exUnlocked } = useLurchStore();
  const review = profile.exReview ?? "She was incredible. The closer I got, the further she became.";
  const splitAt = review.indexOf(". ");
  const teaser = splitAt === -1 ? review : review.slice(0, splitAt + 1);
  const reveal = splitAt === -1 ? "" : review.slice(splitAt + 2);

  return (
    <div style={{
      background: colors.surface, borderRadius: "16px",
      padding: "22px 20px", flexShrink: 0,
      border: `1px solid ${colors.border}`,
    }}>
      <p style={{
        fontFamily: "var(--font-display)", fontSize: "10px",
        textTransform: "uppercase", letterSpacing: "0.15em",
        color: "#C44B4B", marginBottom: "12px",
      }}>
        Ex on Record
      </p>
      <p style={{
        fontFamily: "var(--font-ui)", fontSize: "13px", fontStyle: "italic",
        color: colors.muted, marginBottom: "14px",
      }}>
        Their last match left a review.
      </p>
      <p style={{
        fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 500,
        color: colors.text, lineHeight: 1.55,
        marginBottom: reveal ? "4px" : "20px",
      }}>
        {teaser}
      </p>
      {reveal && (
        <p style={{
          fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 500,
          color: colors.text, lineHeight: 1.55,
          filter: exUnlocked ? "none" : "blur(5px)",
          userSelect: exUnlocked ? "auto" : "none",
          pointerEvents: "none",
          marginBottom: "20px",
          transition: "filter 0.4s ease-out",
        }}>
          {reveal}
        </p>
      )}
      {exUnlocked ? (
        <p style={{
          fontFamily: "var(--font-ui)", fontSize: "12px", fontStyle: "italic",
          color: colors.muted, letterSpacing: "0.02em",
        }}>
          Unlocked. No money changed hands. The review was never going to help you.
        </p>
      ) : (
        <button
          onClick={() => openPaywall(profile.name)}
          style={{
            background: "rgba(107,30,35,0.08)",
            border: "1px solid rgba(107,30,35,0.32)",
            borderRadius: "12px", padding: "10px 18px",
            fontFamily: "var(--font-ui)", fontSize: "12px",
            fontWeight: 600, color: "#C44B4B", letterSpacing: "0.03em",
          }}
        >
          Unlock for ₹299/mo
        </button>
      )}
    </div>
  );
}

export function ProfileDetailPanel({ profile, onClose, onPass, onLike }: Props) {
  const colors = useColors();
  const [isDraggingHandle, setIsDraggingHandle] = useState(false);
  const shots = lifestyleShots(profile?.id ?? "placeholder");

  const handleHandleDrag = (_: unknown, info: PanInfo) => {
    setIsDraggingHandle(false);
    if (info.offset.y > 80 || info.velocity.y > 500) onClose();
  };

  return (
    <AnimatePresence>
      {profile && (
        <motion.div
          key="profile-detail"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 340, damping: 36 }}
          style={{
            position: "absolute",
            inset: 0,
            background: colors.bg,
            zIndex: 80,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Drag handle — swipe down to close */}
          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.4}
            onDragStart={() => setIsDraggingHandle(true)}
            onDragEnd={handleHandleDrag}
            style={{
              flexShrink: 0,
              paddingTop: "12px",
              paddingBottom: "8px",
              display: "flex",
              justifyContent: "center",
              cursor: isDraggingHandle ? "grabbing" : "grab",
              touchAction: "none",
            }}
          >
            <div style={{
              width: "40px", height: "4px", borderRadius: "12px",
              backgroundColor: isDraggingHandle ? "#C44B4B" : colors.border,
              transform: isDraggingHandle ? "scaleX(1.6)" : "scaleX(1)",
              transition: "background-color 0.15s, transform 0.15s",
            }} />
          </motion.div>

          {/* Header */}
          <div style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            padding: "0 20px 14px",
          }}>
            <p style={{
              fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 600,
              color: colors.text, lineHeight: 1.2,
            }}>
              {profile.name.charAt(0) + profile.name.slice(1).toLowerCase()}, {profile.age}
            </p>
            {profile.location && (
              <p style={{
                fontFamily: "var(--font-ui)", fontSize: "12px",
                color: colors.whisper,
              }}>
                {profile.location}
              </p>
            )}
          </div>

          {/* Scrollable cards — interleaved like a real dating profile */}
          <div
            className="lurch-scroll"
            style={{ flex: 1, overflowY: "auto", padding: "0 18px" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", paddingBottom: "20px" }}>
              <HeroPhoto profile={profile} />
              <Vitals profile={profile} />
              <PromptCard profile={profile} colors={colors} />
              <LifestylePhoto src={shots[0].url} caption={shots[0].caption} />
              <TruthsAndLieCard profile={profile} colors={colors} />
              <ShadowPromptCard profile={profile} colors={colors} />
              <LifestylePhoto src={shots[1].url} caption={shots[1].caption} />
              <ExReviewCard profile={profile} colors={colors} />
            </div>
          </div>

          {/* Action bar — pass / like (matches feed chrome) */}
          <div style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
            padding: "16px 24px 22px",
            borderTop: `1px solid ${colors.border}`,
            background: colors.bg,
          }}>
            {/* Pass */}
            <button
              onClick={onPass}
              aria-label="Pass"
              style={{
                width: "62px", height: "62px", borderRadius: "9999px",
                border: `1px solid #3D3D3D`,
                background: "#141414",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 6px 18px -8px rgba(0,0,0,0.8)",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
                <path d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5" stroke="#C44B4B" strokeWidth="2.4" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Like */}
            <button
              onClick={onLike}
              aria-label="Like"
              style={{
                width: "72px", height: "72px", borderRadius: "9999px",
                background: "#6B1E23", border: "1px solid rgba(245,240,232,0.14)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 10px 26px -8px rgba(107,30,35,0.75)",
              }}
            >
              <svg width="30" height="30" viewBox="0 0 22 22" fill="none">
                <path
                  d="M11 19C11 19 3 13.5 3 8C3 5.5 5 3.5 7.5 3.5C9 3.5 10.3 4.2 11 5.2C11.7 4.2 13 3.5 14.5 3.5C17 3.5 19 5.5 19 8C19 13.5 11 19 11 19Z"
                  fill="#F5F0E8"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
