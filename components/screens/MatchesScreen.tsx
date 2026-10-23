"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLurchStore } from "@/lib/store";
import { STATIC_PROFILES } from "@/lib/data/profiles";
import { TechniqueLabel } from "@/components/typography/TechniqueLabel";
import { CTAButton } from "@/components/inputs/CTAButton";
import { GhostButton } from "@/components/inputs/GhostButton";
import { CURIOSITY_TAX_LABEL } from "@/lib/pricing";
import { COPY } from "@/lib/copy";

const LIKED_PROFILES = STATIC_PROFILES.filter((p) => p.id !== "unavailable").slice(0, 6);

const FEATURES = [
  "See who liked you — 4 people are waiting",
  "Send the first message before she forgets you exist",
  "5 Boosts/month, brief expensive bursts of hope",
  "Read Receipts — know exactly when you were ignored",
];

function MiniCard({ profile, blurred }: { profile: typeof STATIC_PROFILES[0]; blurred: boolean }) {
  return (
    <div
      style={{
        width: "100%",
        height: "160px",
        borderRadius: "2px",
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
            filter: blurred ? "blur(16px)" : "none",
            transform: blurred ? "scale(1.1)" : "none",
          }}
        />
      ) : (
        <span style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)", fontSize: "90px",
          fontFamily: "var(--font-display)", color: "#fff", opacity: 0.06,
          userSelect: "none", lineHeight: 1, pointerEvents: "none",
        }}>
          {profile.name[0]}
        </span>
      )}

      {blurred && <div style={{ position: "absolute", inset: 0, background: "rgba(107,30,35,0.35)" }} />}

      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 55%)",
      }} />

      <p style={{
        position: "absolute", bottom: blurred ? "12px" : "44px", left: "10px", right: "8px",
        fontFamily: "var(--font-display)", fontSize: "13px",
        fontWeight: 600, color: "#FFFFFF", lineHeight: 1.5,
      }}>
        {blurred ? "Someone" : `${profile.name.charAt(0) + profile.name.slice(1).toLowerCase()}, ${profile.age}`}
      </p>

      {!blurred && (
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
              <path d="M9 15.5C9 15.5 2.5 11 2.5 6.5C2.5 4.5 4 3 6 3C7.2 3 8.2 3.6 9 4.6C9.8 3.6 10.8 3 12 3C14 3 15.5 4.5 15.5 6.5C15.5 11 9 15.5 9 15.5Z" fill="#6B1E23" stroke="#6B1E23" strokeWidth={1.5}/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
      <div style={{ flex: 1, height: "1px", background: "rgba(245,240,232,0.12)" }} />
      <span style={{ fontFamily: "var(--font-ui)", fontSize: "11px", color: "rgba(245,240,232,0.4)" }}>{label}</span>
      <div style={{ flex: 1, height: "1px", background: "rgba(245,240,232,0.12)" }} />
    </div>
  );
}

export function MatchesScreen() {
  const router = useRouter();
  const { setActiveTab } = useLurchStore();
  const [unlocked, setUnlocked] = useState(false);
  const [paywallOpen, setPaywallOpen] = useState(true);

  const todayProfiles = LIKED_PROFILES.slice(0, 4);
  const yesterdayProfiles = LIKED_PROFILES.slice(4, 6);

  const handleGoToFeed = () => {
    setActiveTab("feed");
    router.push("/feed");
  };

  // Showcase: simulate the unlock so reviewers see the "HD disappointment".
  const handleUnlock = () => {
    setUnlocked(true);
    setPaywallOpen(false);
  };

  const locked = !unlocked;

  return (
    <div style={{ height: "100%", background: "var(--app-bg)", position: "relative", overflow: "hidden" }}>
      <div className="h-full overflow-y-auto lurch-scroll" style={{ padding: "40px 20px", paddingBottom: paywallOpen ? "380px" : "40px" }}>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "30px", fontWeight: 600, color: "#F5F0E8", lineHeight: 1.3, marginBottom: "6px" }}>
          Matches
        </p>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: "13px", color: "rgba(245,240,232,0.5)", lineHeight: 1.5, marginBottom: "20px" }}>
          People who liked you and your matches.
        </p>

        {unlocked && (
          <div style={{ background: "#141414", border: "1px solid #2A2A2A", borderRadius: "2px", padding: "14px 16px", marginBottom: "20px" }}>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "13px", fontStyle: "italic", color: "#9A958C", lineHeight: 1.5 }}>
              You paid nothing — no real money changes hands here. The faces are unblurred. They still will not message you. That was always the product.
            </p>
          </div>
        )}

        <SectionDivider label="Today" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
          {todayProfiles.map((p) => <MiniCard key={p.id} profile={p} blurred={locked} />)}
        </div>

        <SectionDivider label="Yesterday" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          {yesterdayProfiles.map((p) => <MiniCard key={p.id} profile={p} blurred={locked} />)}
        </div>

        {/* Escaped the paywall but still locked — honest reopen affordance */}
        {locked && !paywallOpen && (
          <button
            onClick={() => setPaywallOpen(true)}
            style={{
              marginTop: "24px", width: "100%", padding: "14px",
              background: "transparent", border: "1px solid #3D3D3D", borderRadius: "2px",
              fontFamily: "var(--font-ui)", fontSize: "13px", color: "#9A958C", cursor: "pointer",
            }}
          >
            Fine, show me who liked me
          </button>
        )}
      </div>

      {/* Curiosity Tax — dark sheet, not pastel (P0-04) */}
      <AnimatePresence>
        {paywallOpen && locked && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 40 }}
              onClick={() => setPaywallOpen(false)}
            />
            <motion.div
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              style={{
                position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 50,
                background: "#161616", borderTop: "1px solid #2A2A2A",
                borderTopLeftRadius: "12px", borderTopRightRadius: "12px",
                padding: "24px 22px calc(env(safe-area-inset-bottom, 0px) + 20px)",
              }}
            >
              <TechniqueLabel technique={COPY.curiosityTechnique} detail="Artificial Scarcity" style={{ marginBottom: "14px" }} />
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "21px", fontWeight: 600, lineHeight: 1.25, color: "#F5F0E8", marginBottom: "8px" }}>
                {COPY.curiosityTitle}
              </h3>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: "13px", fontStyle: "italic", color: "#9A958C", lineHeight: 1.55, marginBottom: "16px" }}>
                {COPY.curiosityBody} You would pay anything just to have someone talk to you — this app has spent the last ten minutes engineering exactly that feeling.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginBottom: "18px" }}>
                {FEATURES.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{ flexShrink: 0, marginTop: "2px" }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7L5.5 10L11.5 4" stroke="#4A5C45" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <p style={{ fontFamily: "var(--font-ui)", fontSize: "12.5px", color: "#C9C3B8", lineHeight: 1.4 }}>{f}</p>
                  </div>
                ))}
              </div>

              <p style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, color: "#F5F0E8", marginBottom: "14px" }}>
                {CURIOSITY_TAX_LABEL}
              </p>

              <CTAButton onClick={handleUnlock}>{COPY.curiosityPrimary}</CTAButton>
              <GhostButton dim onClick={() => setPaywallOpen(false)}>
                {COPY.curiositySecondary}
              </GhostButton>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
