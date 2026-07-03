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

interface Props {
  profile: Profile | null;
  onClose: () => void;
  onPass: () => void;
  onLike: () => void;
}

function PhotoCard({ profile }: { profile: Profile }) {
  return (
    <div style={{
      borderRadius: "16px", overflow: "hidden",
      background: profile.photoColor,
      height: "260px", position: "relative",
      flexShrink: 0,
    }}>
      {profile.photoUrl ? (
        <img
          src={profile.photoUrl}
          alt=""
          aria-hidden
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center top",
          }}
        />
      ) : (
        <span style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)", fontSize: "160px",
          fontFamily: "var(--font-display)", color: "#fff", opacity: 0.06,
          fontWeight: "bold", userSelect: "none", lineHeight: 1, pointerEvents: "none",
        }}>
          {profile.name[0]}
        </span>
      )}

      {/* Gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 30%, transparent 65%)",
      }} />

      {/* Distance */}
      <div style={{
        position: "absolute", top: "14px", left: "14px",
        height: "28px", background: "rgba(15,13,11,0.6)", backdropFilter: "blur(10px)",
        borderRadius: "7px", display: "flex", alignItems: "center",
        gap: "4px", paddingLeft: "8px", paddingRight: "10px",
      }}>
        <svg width="9" height="12" viewBox="0 0 10 13" fill="none">
          <path d="M5 0C2.79 0 1 1.79 1 4C1 7 5 13 5 13C5 13 9 7 9 4C9 1.79 7.21 0 5 0ZM5 5.5C4.17 5.5 3.5 4.83 3.5 4C3.5 3.17 4.17 2.5 5 2.5C5.83 2.5 6.5 3.17 6.5 4C6.5 4.83 5.83 5.5 5 5.5Z" fill="rgba(237,232,223,0.8)"/>
        </svg>
        <span style={{ fontFamily: "var(--font-ui)", fontSize: "11px", color: "rgba(237,232,223,0.85)" }}>
          {profile.distance ?? "1 km"}
        </span>
      </div>

      {/* Info */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 16px 18px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "10px" }}>
          {profile.extraBadges?.map((b) => <TraitBadge key={b.label} label={b.label} small={b.small} />)}
          {profile.wounds.slice(0, 2).map((w) => <WoundBadge key={w} label={w} />)}
          {profile.attachmentLabel && <AttachmentBadge label={profile.attachmentLabel} />}
        </div>

        <div style={{ display: "flex", gap: "24px" }}>
          <div>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "10px", color: "rgba(217,216,216,0.55)", marginBottom: "1px" }}>
              Ghost Risk
            </p>
            <p style={{
              fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 600,
              color: profile.ghostRisk >= 65 ? "#E94057" : "#FFFFFF",
            }}>
              {profile.ghostRisk}%
            </p>
          </div>
          {profile.vibeScore !== null && (
            <div>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: "10px", color: "rgba(217,216,216,0.55)", marginBottom: "1px" }}>
                Vibe Score
              </p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 600, color: "#FFFFFF" }}>
                {profile.vibeScore}
              </p>
            </div>
          )}
        </div>
      </div>
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
        color: "#E94057", marginBottom: "12px",
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
        color: "#E94057", marginBottom: "6px",
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
        color: "#E94057", marginBottom: "12px",
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
  const { openPaywall } = useLurchStore();
  return (
    <div style={{
      background: colors.surface, borderRadius: "16px",
      padding: "22px 20px", flexShrink: 0,
      border: `1px solid ${colors.border}`,
    }}>
      <p style={{
        fontFamily: "var(--font-display)", fontSize: "10px",
        textTransform: "uppercase", letterSpacing: "0.15em",
        color: "#E94057", marginBottom: "12px",
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
        filter: "blur(5px)", userSelect: "none", pointerEvents: "none",
        marginBottom: "20px",
      }}>
        {profile.exReview ?? "She was incredible. The closer I got, the further she became."}
      </p>
      <button
        onClick={() => openPaywall(profile.name)}
        style={{
          background: "rgba(233,64,87,0.08)",
          border: "1px solid rgba(233,64,87,0.32)",
          borderRadius: "10px", padding: "10px 18px",
          fontFamily: "var(--font-ui)", fontSize: "12px",
          fontWeight: 600, color: "#E94057", letterSpacing: "0.03em",
        }}
      >
        Unlock for ₹299/mo
      </button>
    </div>
  );
}

export function ProfileDetailPanel({ profile, onClose, onPass, onLike }: Props) {
  const colors = useColors();
  const [isDraggingHandle, setIsDraggingHandle] = useState(false);

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
              width: "40px", height: "4px", borderRadius: "2px",
              backgroundColor: isDraggingHandle ? "#E94057" : colors.border,
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

          {/* Scrollable cards */}
          <div
            className="lurch-scroll"
            style={{ flex: 1, overflowY: "auto", padding: "0 16px" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingBottom: "16px" }}>
              <PhotoCard profile={profile} />
              <PromptCard profile={profile} colors={colors} />
              <TruthsAndLieCard profile={profile} colors={colors} />
              <ShadowPromptCard profile={profile} colors={colors} />
              <ExReviewCard profile={profile} colors={colors} />
            </div>
          </div>

          {/* Action bar — pass / like */}
          <div style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
            padding: "16px 24px 20px",
            borderTop: `1px solid ${colors.border}`,
            background: colors.bg,
          }}>
            {/* Pass */}
            <button
              onClick={onPass}
              style={{
                width: "60px", height: "60px", borderRadius: "50%",
                border: `1.5px solid ${colors.border}`,
                background: "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M6 6L16 16M16 6L6 16" stroke={colors.muted} strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Like */}
            <button
              onClick={onLike}
              style={{
                width: "68px", height: "68px", borderRadius: "50%",
                background: "#E94057",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 16px rgba(233,64,87,0.35)",
              }}
            >
              <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                <path
                  d="M11 19C11 19 3 13.5 3 8C3 5.5 5 3.5 7.5 3.5C9 3.5 10.3 4.2 11 5.2C11.7 4.2 13 3.5 14.5 3.5C17 3.5 19 5.5 19 8C19 13.5 11 19 11 19Z"
                  fill="white"
                  stroke="white"
                  strokeWidth={1.5}
                />
              </svg>
            </button>

            {/* Placeholder to balance layout */}
            <div style={{ width: "60px" }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
