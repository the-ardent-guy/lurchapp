"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { PanInfo } from "framer-motion";
import type { Profile } from "@/lib/store";
import { WoundBadge } from "./WoundBadge";
import { AttachmentBadge } from "./AttachmentBadge";
import { TraitBadge } from "./TraitBadge";

interface Props {
  profile: Profile;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onSwipeUp?: () => void;
  isTop: boolean;
  stackIndex: number;
}

const SWIPE_THRESHOLD = 100;

const STACK_SPRING = { type: "spring" as const, stiffness: 300, damping: 28 };

export function ProfileCard({ profile, onSwipeLeft, onSwipeRight, onSwipeUp, isTop, stackIndex }: Props) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-12, 12]);
  const lurchOpacity = useTransform(x, [30, 80], [0, 1]);
  const lurchScale = useTransform(x, [30, 120], [0.7, 1.05]);
  const lurchRotate = useTransform(x, [30, 120], [-10, 0]);
  const passOpacity = useTransform(x, [-80, -30], [1, 0]);
  const passScale = useTransform(x, [-120, -30], [1.05, 0.7]);
  const passRotate = useTransform(x, [-120, -30], [0, 10]);
  const [isDragging, setIsDragging] = useState(false);

  const isUnavailable = profile.id === "unavailable";

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    setIsDragging(false);
    const { offset, velocity } = info;
    const absX = Math.abs(offset.x);
    const absY = Math.abs(offset.y);

    if (absY > absX) {
      if (offset.y < -80 || velocity.y < -500) onSwipeUp?.();
    } else {
      if (offset.x > SWIPE_THRESHOLD) onSwipeRight();
      else if (offset.x < -SWIPE_THRESHOLD) onSwipeLeft();
    }
  };

  const scale = 1 - stackIndex * 0.04;
  const yOffset = stackIndex * 10;
  const depthOpacity = stackIndex === 0 ? 1 : 1 - stackIndex * 0.12;

  if (isUnavailable) {
    return (
      <motion.div
        style={{
          x: isTop ? x : 0,
          rotate: isTop ? rotate : 0,
          zIndex: 10 - stackIndex,
          position: "absolute",
          inset: 0,
          willChange: "transform",
          cursor: isTop ? (isDragging ? "grabbing" : "grab") : "default",
          touchAction: "none",
        }}
        initial={{ scale, y: yOffset, opacity: depthOpacity }}
        animate={{ scale, y: yOffset, opacity: depthOpacity }}
        transition={STACK_SPRING}
        drag={isTop}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.5}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 28 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
      >
        <div style={{
          position: "absolute", inset: 0,
          borderRadius: "20px", overflow: "hidden",
          background: "#141210",
          border: "1px solid #2E2720",
          display: "flex", flexDirection: "column",
          justifyContent: "space-between",
          padding: "28px 24px 28px",
        }}>
          <div>
            <p style={{
              fontFamily: "var(--font-display)", fontSize: "10px",
              textTransform: "uppercase", letterSpacing: "0.18em",
              color: "#E94057", marginBottom: "20px",
            }}>
              Profile Unavailable
            </p>
            <p style={{
              fontFamily: "var(--font-display)", fontSize: "34px", fontWeight: 600,
              lineHeight: 1.1, color: "#3A3028",
            }}>
              [UNAVAILABLE]
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ height: "1px", background: "#2E2720" }} />
            {[
              { label: "Last Active", value: "Not your business" },
              { label: "Ghost Probability", value: "100%" },
              { label: "Account Status", value: "Deleted" },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: "11px", color: "#4A4540" }}>{label}</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600, color: "#6A6060" }}>{value}</span>
              </div>
            ))}
            <div style={{ height: "1px", background: "#2E2720" }} />
          </div>

          <div>
            <p style={{
              fontFamily: "var(--font-ui)", fontSize: "13px", fontStyle: "italic",
              lineHeight: 1.55, color: "#4A4540",
            }}>
              Deleted their account right before you matched.
            </p>
            <p style={{
              fontFamily: "var(--font-ui)", fontSize: "11px",
              color: "#2E2720", marginTop: "6px",
            }}>
              This happens more than you think.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      style={{
        x: isTop ? x : 0,
        rotate: isTop ? rotate : 0,
        zIndex: 10 - stackIndex,
        position: "absolute",
        inset: 0,
        borderRadius: "20px",
        overflow: "hidden",
        cursor: isTop ? (isDragging ? "grabbing" : "grab") : "default",
        touchAction: "none",
        willChange: "transform",
      }}
      initial={{ scale, y: yOffset }}
      animate={{ scale, y: yOffset }}
      transition={STACK_SPRING}
      drag={isTop ? true : false}
      dragDirectionLock
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.5}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 28 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
    >
      {/* Color always renders first — card is never transparent while photo loads */}
      <div style={{ position: "absolute", inset: 0, background: profile.photoColor }} />

      {profile.photoUrl ? (
        <img
          src={profile.photoUrl}
          alt=""
          aria-hidden
          loading={isTop ? "eager" : "lazy"}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center top",
          }}
        />
      ) : (
        <span style={{
          position: "absolute", bottom: "35%", left: "50%",
          transform: "translateX(-50%)", fontSize: "220px",
          fontFamily: "var(--font-display)", color: "#fff", opacity: 0.07,
          fontWeight: "bold", userSelect: "none", lineHeight: 1, pointerEvents: "none",
        }}>
          {profile.name[0]}
        </span>
      )}

      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.75) 22%, rgba(0,0,0,0.1) 50%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "absolute", top: "16px", left: "16px", height: "30px",
        background: "rgba(15,13,11,0.6)", backdropFilter: "blur(10px)",
        borderRadius: "7px", display: "flex", alignItems: "center",
        gap: "4px", paddingLeft: "9px", paddingRight: "11px", zIndex: 10,
      }}>
        <svg width="9" height="12" viewBox="0 0 10 13" fill="none">
          <path d="M5 0C2.79 0 1 1.79 1 4C1 7 5 13 5 13C5 13 9 7 9 4C9 1.79 7.21 0 5 0ZM5 5.5C4.17 5.5 3.5 4.83 3.5 4C3.5 3.17 4.17 2.5 5 2.5C5.83 2.5 6.5 3.17 6.5 4C6.5 4.83 5.83 5.5 5 5.5Z" fill="rgba(237,232,223,0.85)"/>
        </svg>
        <span style={{ fontFamily: "var(--font-ui)", fontSize: "11px", color: "rgba(237,232,223,0.9)" }}>
          {profile.distance ?? "1 km"}
        </span>
      </div>

      {isTop && (
        <div style={{
          position: "absolute", bottom: "84px", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "2px",
          opacity: 0.35, pointerEvents: "none", zIndex: 8,
        }}>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M1 7L7 1L13 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M1 7L7 1L13 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}

      {isTop && (
        <motion.div style={{ opacity: lurchOpacity, scale: lurchScale, rotate: lurchRotate, position: "absolute", top: 20, left: 18, zIndex: 20 }}>
          <div style={{ border: "3px solid #4A7C59", borderRadius: "6px", padding: "4px 12px", transform: "rotate(-6deg)" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: "bold", color: "#4A7C59" }}>LURCH</span>
          </div>
        </motion.div>
      )}

      {isTop && (
        <motion.div style={{ opacity: passOpacity, scale: passScale, rotate: passRotate, position: "absolute", top: 20, right: 18, zIndex: 20 }}>
          <div style={{ border: "3px solid #C0392B", borderRadius: "6px", padding: "4px 12px", transform: "rotate(6deg)" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: "bold", color: "#C0392B" }}>PASS</span>
          </div>
        </motion.div>
      )}

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 18px 22px" }}>
        <p style={{
          fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 600,
          color: "#FFFFFF", lineHeight: "1.4", marginBottom: "2px",
        }}>
          {profile.name.charAt(0) + profile.name.slice(1).toLowerCase()}{profile.age > 0 ? `, ${profile.age}` : ""}
        </p>

        {profile.location && (
          <p style={{
            fontFamily: "var(--font-ui)", fontSize: "12px",
            color: "rgba(217,216,216,0.65)", lineHeight: "1.5", marginBottom: "10px",
          }}>
            {profile.location}
          </p>
        )}

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "12px" }}>
          {profile.extraBadges?.map((b) => <TraitBadge key={b.label} label={b.label} small={b.small} />)}
          {profile.wounds.slice(0, 2).map((w) => <WoundBadge key={w} label={w} />)}
          {profile.attachmentLabel && <AttachmentBadge label={profile.attachmentLabel} />}
        </div>

        {profile.matchedBecause && (
          <div style={{ marginBottom: "10px" }}>
            <p style={{
              fontFamily: "var(--font-ui)", fontSize: "9px", textTransform: "uppercase",
              letterSpacing: "0.08em", color: "#8A8070", marginBottom: "3px",
            }}>
              Matched because
            </p>
            <p style={{
              fontFamily: "var(--font-ui)", fontSize: "12px", fontStyle: "italic",
              color: "rgba(217,216,216,0.85)", lineHeight: 1.4,
            }}>
              {profile.matchedBecause}
            </p>
          </div>
        )}

        <div style={{ display: "flex", gap: "28px" }}>
          <div>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "11px", color: "rgba(217,216,216,0.6)", marginBottom: "2px" }}>
              Ghost Risk
            </p>
            <p style={{
              fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 600,
              color: profile.ghostRisk >= 65 ? "#E94057" : "#FFFFFF",
            }}>
              {profile.ghostRisk}%
            </p>
          </div>
          {profile.vibeScore !== null && (
            <div>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: "11px", color: "rgba(217,216,216,0.6)", marginBottom: "2px" }}>
                Vibe Score
              </p>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 600, color: "#FFFFFF" }}>
                {profile.vibeScore}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
