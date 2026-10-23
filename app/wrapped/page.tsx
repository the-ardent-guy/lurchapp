"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { COPY } from "@/lib/copy";

// LURCH-P2-01 - Weekly Lurch Wrapped. Demo numbers, clearly framed as satire.
const STATS = [
  { big: "400", label: "people swiped left (satirical demo figure)" },
  { big: "11 min", label: "spent judging strangers today" },
  { big: "0", label: "conversations that went anywhere" },
  { big: "1", label: "type, and it is still your ex" },
];

// Text that leaves the app when someone shares the card. Satire, no analytics.
const SHARE_TEXT =
  "LURCH scored my trauma, taxed my loneliness ₹299, and had me reject 400 strangers in 11 minutes. Every number was fake. That is the whole point. It is a parody of what dating apps actually do to you.";

export default function WrappedPage() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title: "Lurch", text: SHARE_TEXT });
        return;
      }
      await navigator.clipboard.writeText(SHARE_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* user dismissed the share sheet, or clipboard was blocked - no-op */
    }
  };

  return (
    <ScreenWrapper>
      <div className="h-full overflow-y-auto lurch-scroll" style={{ background: "#0A0A0A", padding: "calc(env(safe-area-inset-top, 0px) + 40px) 28px calc(env(safe-area-inset-bottom, 0px) + 32px)" }}>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.16em", color: "#C44B4B", marginBottom: "14px" }}>
          Your Lurch Wrapped · satire
        </p>
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "34px", fontWeight: 600, lineHeight: 1.15, color: "#F5F0E8", marginBottom: "24px" }}>
          {COPY.wrapped}
        </h1>

        {/* The share card - the screenshottable payoff. Mask off, thesis on it. */}
        <div
          style={{
            position: "relative",
            background: "linear-gradient(165deg, #1A0E0F 0%, #0C0809 100%)",
            border: "1px solid #3A2023",
            borderRadius: "20px",
            padding: "28px 24px 24px",
            overflow: "hidden",
            boxShadow: "0 24px 60px -24px rgba(107,30,35,0.7)",
          }}
        >
          {/* oxblood wash top-left */}
          <div style={{ position: "absolute", top: "-40%", left: "-20%", width: "70%", height: "80%", background: "radial-gradient(ellipse at center, rgba(143,42,49,0.35) 0%, rgba(143,42,49,0) 70%)", pointerEvents: "none" }} />

          <div style={{ position: "relative" }}>
            <span style={{ display: "inline-block", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "26px", color: "#F5F0E8", textShadow: "2px 2px 0 #6B1E23", transform: "rotate(-3deg)", lineHeight: 1, marginBottom: "22px" }}>
              LURCH
            </span>

            <p style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "23px", lineHeight: 1.25, color: "#F5F0E8", marginBottom: "16px" }}>
              It scored my trauma, taxed my loneliness ₹299, and had me reject 400 strangers.
            </p>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "14px", lineHeight: 1.5, color: "#C9A9AB", marginBottom: "20px" }}>
              In 11 minutes. Every number was fake. That is the point.
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "16px", borderTop: "1px solid rgba(245,240,232,0.1)" }}>
              <span style={{ fontFamily: "var(--font-ui)", fontSize: "12px", color: "#9A8285", fontStyle: "italic" }}>
                we match you on your trauma
              </span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#C44B4B" }}>
                lurch · satire
              </span>
            </div>
          </div>
        </div>

        {/* Share action - outside the card so it is not part of the screenshot */}
        <button
          onClick={handleShare}
          style={{
            marginTop: "14px", width: "100%", padding: "16px", minHeight: "54px",
            background: "linear-gradient(180deg, #7E2A31 0%, #661D22 100%)",
            border: "1px solid rgba(245,240,232,0.16)", borderRadius: "16px",
            fontFamily: "var(--font-ui)", fontSize: "15px", fontWeight: 600, color: "#FBF7F0",
            cursor: "pointer",
            boxShadow: "0 10px 28px -10px rgba(107,30,35,0.6), inset 0 1px 0 rgba(245,240,232,0.18)",
          }}
        >
          {copied ? "Copied to clipboard" : "Share the damage"}
        </button>

        {/* The receipt, expanded */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginTop: "28px" }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ background: "#141414", border: "1px solid #2A2A2A", borderRadius: "12px", padding: "20px" }}>
              <p style={{ fontFamily: "var(--font-mono, var(--font-display))", fontSize: "34px", fontWeight: 700, color: "#F5F0E8", letterSpacing: "-0.02em" }}>{s.big}</p>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: "13px", color: "#9A958C", marginTop: "4px" }}>{s.label}</p>
            </div>
          ))}
        </div>

        <p style={{ fontFamily: "var(--font-ui)", fontSize: "12px", fontStyle: "italic", color: "#5C5852", marginTop: "20px", lineHeight: 1.6 }}>
          These figures are a product joke, not analytics. Nothing here is tracked or sold.
        </p>

        <button
          onClick={() => router.push("/profile")}
          style={{ marginTop: "24px", width: "100%", padding: "14px", background: "rgba(245,240,232,0.05)", border: "none", borderRadius: "12px", fontFamily: "var(--font-ui)", fontSize: "13px", color: "#9A958C", cursor: "pointer" }}
        >
          Back to profile
        </button>
      </div>
    </ScreenWrapper>
  );
}
