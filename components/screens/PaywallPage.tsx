"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLurchStore } from "@/lib/store";
import { formatCountdown } from "@/lib/utils";

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

function MatchCountdown({ expiryTimestamp, matchName }: { expiryTimestamp: number; matchName: string }) {
  const [remaining, setRemaining] = useState(expiryTimestamp - Date.now());
  useEffect(() => {
    const id = setInterval(() => setRemaining(expiryTimestamp - Date.now()), 1000);
    return () => clearInterval(id);
  }, [expiryTimestamp]);

  return (
    <p style={{
      fontFamily: "var(--font-display)", fontSize: "16px",
      color: "#323232", lineHeight: 1.31, marginBottom: "6px",
    }}>
      {matchName}&apos;s message will expire in{" "}
      <span style={{ color: "#E94057" }}>{formatCountdown(remaining)}</span>
    </p>
  );
}

export function PaywallPage() {
  const router = useRouter();
  const { matchName, expiryTimestamp, closePaywall } = useLurchStore();
  const expiry = expiryTimestamp ?? Date.now() + 24 * 60 * 60 * 1000;

  return (
    <div style={{
      background: "linear-gradient(125deg, rgb(230,230,230) 10%, rgb(247,196,196) 95%)",
      padding: "28px 24px 24px",
    }}>
      {/* Timer */}
      {matchName ? (
        <MatchCountdown expiryTimestamp={expiry} matchName={matchName} />
      ) : (
        <p style={{
          fontFamily: "var(--font-display)", fontSize: "16px",
          color: "#323232", lineHeight: 1.31, marginBottom: "6px",
        }}>
          Your matches will expire in{" "}
          <span style={{ color: "#E94057" }}>{formatCountdown(expiry - Date.now())}</span>
        </p>
      )}

      {/* Technique label */}
      <p style={{
        fontFamily: "var(--font-ui)", fontSize: "11px", fontStyle: "italic",
        color: "#323232", marginBottom: "16px",
      }}>
        Technique: Loss Aversion + Artificial Scarcity
      </p>

      {/* White inner card */}
      <div style={{
        background: "#FDFDFD", borderRadius: "14px",
        padding: "16px 16px 14px", marginBottom: "16px",
      }}>
        <p style={{
          fontFamily: "var(--font-display)", fontSize: "18px",
          color: "#323232", marginBottom: "14px",
        }}>
          INR 499<span style={{ fontSize: "14px", color: "#707070" }}>/month</span>
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {FEATURES.map((f) => (
            <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <span style={{ flexShrink: 0, marginTop: "1px" }}>{CHECK_ICON}</span>
              <p style={{
                fontFamily: "var(--font-ui)", fontSize: "10px", fontStyle: "italic",
                color: "#323232", lineHeight: 1.4,
              }}>
                {f}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Candid copy */}
      <p style={{
        fontFamily: "var(--font-ui)", fontSize: "11px", fontStyle: "italic",
        fontWeight: 500, color: "#323232", lineHeight: 1.5, marginBottom: "16px",
      }}>
        You would pay anything just to have someone talk to you. Not because you&apos;re desperate. Because you&apos;re human and you&apos;re lonely and this app has spent the last ten minutes engineering exactly that feeling.
      </p>

      {/* CTA */}
      <button
        onClick={() => { closePaywall(); router.push("/pay"); }}
        style={{
          display: "block", width: "100%", height: "42px",
          background: "#8B1A1A", borderRadius: "14px",
          fontFamily: "var(--font-display)", fontSize: "15px",
          fontWeight: 600, color: "#EAE6E6", textAlign: "center",
          marginBottom: "12px",
        }}
      >
        Subscribe to your loneliness
      </button>

      {/* Ghost dismiss */}
      <button
        onClick={closePaywall}
        style={{
          display: "block", width: "100%", textAlign: "center",
          fontFamily: "var(--font-ui)", fontSize: "11px",
          fontStyle: "italic", fontWeight: 500, color: "#323232",
        }}
      >
        no thanks, i&apos;m okay being left on read
      </button>
    </div>
  );
}
