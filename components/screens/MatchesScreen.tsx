"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useLurchStore } from "@/lib/store";
import { STATIC_PROFILES } from "@/lib/data/profiles";
import { formatCountdown } from "@/lib/utils";
import { DarkPatternLabel } from "@/components/typography/DarkPatternLabel";

const LIKED_PROFILES = STATIC_PROFILES.filter((p) => p.id !== "unavailable").slice(0, 6);

const CHECK_ICON = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2.5 7L5.5 10L11.5 4" stroke="#4A7C59" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FEATURES = [
  "See who liked you — 4 people are waiting",
  "Send the first message before she forgets you exist",
  "5 Boosts/month, brief expensive bursts of hope",
  "Read Receipts, know exactly when you were ignored",
];

function MatchesCountdown({ expiryTimestamp }: { expiryTimestamp: number }) {
  const [remaining, setRemaining] = useState(expiryTimestamp - Date.now());

  useEffect(() => {
    const id = setInterval(() => setRemaining(expiryTimestamp - Date.now()), 1000);
    return () => clearInterval(id);
  }, [expiryTimestamp]);

  return <span style={{ color: "#E94057" }}>{formatCountdown(remaining)}</span>;
}

function MiniCard({ profile, index }: { profile: typeof STATIC_PROFILES[0]; index: number }) {
  const isHighlighted = index === 1;

  return (
    <div
      style={{
        width: "100%",
        height: "160px",
        borderRadius: "15px",
        overflow: "hidden",
        background: profile.photoColor,
        position: "relative",
      }}
    >
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
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "90px",
          fontFamily: "var(--font-display)",
          color: "#fff", opacity: 0.06,
          userSelect: "none", lineHeight: 1, pointerEvents: "none",
        }}>
          {profile.name[0]}
        </span>
      )}

      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 55%)",
      }} />

      <p style={{
        position: "absolute", bottom: "44px", left: "10px", right: "8px",
        fontFamily: "var(--font-display)", fontSize: "13px",
        fontWeight: 600, color: "#FFFFFF", lineHeight: 1.5,
      }}>
        {profile.name.charAt(0) + profile.name.slice(1).toLowerCase()}, {profile.age}
      </p>

      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "36px",
        background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center",
      }}>
        <button style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }} aria-label="Pass">
          <X size={14} color="rgba(255,255,255,0.6)" strokeWidth={2.5} />
        </button>
        <div style={{ width: "1px", height: "55%", background: "rgba(255,255,255,0.2)" }} />
        <button style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }} aria-label="Like">
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
            <path d="M9 15.5C9 15.5 2.5 11 2.5 6.5C2.5 4.5 4 3 6 3C7.2 3 8.2 3.6 9 4.6C9.8 3.6 10.8 3 12 3C14 3 15.5 4.5 15.5 6.5C15.5 11 9 15.5 9 15.5Z" stroke="rgba(255,255,255,0.6)" strokeWidth={1.8} fill="none"/>
          </svg>
        </button>
      </div>

      {isHighlighted && (
        <div style={{
          position: "absolute", top: "8px", right: "8px",
          width: "32px", height: "32px",
          display: "flex", alignItems: "center", justifyContent: "center",
          transform: "rotate(10deg)",
        }}>
          <div style={{
            width: "28px", height: "28px",
            background: "rgba(233,64,87,0.15)",
            border: "1px solid rgba(233,64,87,0.35)",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
              <path d="M9 15.5C9 15.5 2.5 11 2.5 6.5C2.5 4.5 4 3 6 3C7.2 3 8.2 3.6 9 4.6C9.8 3.6 10.8 3 12 3C14 3 15.5 4.5 15.5 6.5C15.5 11 9 15.5 9 15.5Z" fill="#E94057" stroke="#E94057" strokeWidth={1.5}/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
      <div style={{ flex: 1, height: "1px", background: "rgba(232,230,234,0.15)" }} />
      <span style={{ fontFamily: "var(--font-ui)", fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>{label}</span>
      <div style={{ flex: 1, height: "1px", background: "rgba(232,230,234,0.15)" }} />
    </div>
  );
}

export function MatchesScreen() {
  const router = useRouter();
  const { setActiveTab, expiryTimestamp } = useLurchStore();
  const expiry = expiryTimestamp ?? Date.now() + 24 * 60 * 60 * 1000;

  const todayProfiles = LIKED_PROFILES.slice(0, 4);
  const yesterdayProfiles = LIKED_PROFILES.slice(4, 6);

  const handleGoToFeed = () => {
    setActiveTab("feed");
    router.push("/feed");
  };

  const handleSubscribe = () => {
    router.push("/pay");
  };

  return (
    <div style={{ height: "100%", background: "var(--app-bg)", position: "relative", overflow: "hidden" }}>

      <div style={{ padding: "40px 20px 0" }}>
        <p style={{
          fontFamily: "var(--font-display)", fontSize: "30px", fontWeight: 600,
          color: "#F9E8E8", lineHeight: 1.3, marginBottom: "6px",
        }}>
          Matches
        </p>
        <p style={{
          fontFamily: "var(--font-ui)", fontSize: "13px",
          color: "rgba(255,255,255,0.5)", lineHeight: 1.5, marginBottom: "20px",
        }}>
          People who liked you and your matches.
        </p>

        <SectionDivider label="Today" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
          {todayProfiles.map((p, i) => <MiniCard key={p.id} profile={p} index={i} />)}
        </div>

        <SectionDivider label="Yesterday" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          {yesterdayProfiles.map((p, i) => <MiniCard key={p.id} profile={p} index={i} />)}
        </div>
      </div>

      {/* Permanent dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 40 }} />

      {/* Paywall card */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 30, delay: 0.15 }}
        style={{
          position: "absolute", top: "130px", left: "20px", right: "20px", zIndex: 50,
          background: "linear-gradient(125deg, rgb(230, 230, 230) 10%, rgb(247, 196, 196) 95%)",
          borderRadius: "25px", padding: "28px 24px 24px",
        }}
      >
        <p style={{
          fontFamily: "var(--font-display)", fontSize: "17px",
          color: "#323232", lineHeight: 1.35, marginBottom: "6px",
        }}>
          Your matches will expire in{" "}
          <MatchesCountdown expiryTimestamp={expiry} />
        </p>

        <DarkPatternLabel style={{ fontSize: "14px", marginBottom: "24px" }}>
          Technique: Loss Aversion + Artificial Scarcity
        </DarkPatternLabel>

        <div style={{
          background: "#FDFDFD", borderRadius: "14px",
          padding: "18px 18px 16px", marginBottom: "16px",
        }}>
          <p style={{
            fontFamily: "var(--font-display)", fontSize: "22px",
            color: "#323232", marginBottom: "16px",
          }}>
            INR 499<span style={{ fontSize: "16px", color: "#707070" }}>/month</span>
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {FEATURES.map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <span style={{ flexShrink: 0, marginTop: "2px" }}>{CHECK_ICON}</span>
                <p style={{
                  fontFamily: "var(--font-ui)", fontSize: "13px", fontStyle: "italic",
                  color: "#323232", lineHeight: 1.45,
                }}>{f}</p>
              </div>
            ))}
          </div>
        </div>

        <p style={{
          fontFamily: "var(--font-ui)", fontSize: "13px", fontStyle: "italic",
          fontWeight: 500, color: "#323232", lineHeight: 1.55, marginBottom: "16px",
        }}>
          You would pay anything just to have someone talk to you. Not because you&apos;re desperate. Because you&apos;re human and you&apos;re lonely and this app has spent the last ten minutes engineering exactly that feeling.
        </p>

        <button
          onClick={handleSubscribe}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "100%", height: "46px",
            background: "#8B1A1A", borderRadius: "14px",
            fontFamily: "var(--font-display)", fontSize: "16px",
            fontWeight: 600, color: "#EAE6E6", textAlign: "center",
          }}
        >
          Subscribe to your loneliness
        </button>

        <button
          onClick={handleGoToFeed}
          style={{
            display: "block", width: "100%", textAlign: "center",
            fontFamily: "var(--font-ui)", fontSize: "12px",
            fontStyle: "italic", fontWeight: 500,
            color: "rgba(50,50,50,0.5)", marginTop: "10px",
            background: "transparent", border: "none", cursor: "pointer",
          }}
        >
          i don&apos;t mind being left on read
        </button>
      </motion.div>
    </div>
  );
}
