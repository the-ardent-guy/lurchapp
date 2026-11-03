"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { TypingIndicator } from "@/components/indicators/TypingIndicator";
import { OPENER_SMILE_INR, CURIOSITY_TAX_INR } from "@/lib/pricing";
import { COPY } from "@/lib/copy";

type Tier = { id: string; label: string; price: string; note: string };

const TIERS: Tier[] = [
  { id: "free", label: COPY.openerFree, price: "Free", note: "The opener 1.2 billion people have already ignored." },
  { id: "smile", label: COPY.openerPaid, price: `₹${OPENER_SMILE_INR}`, note: "The smiley is where the value is, apparently." },
  { id: "premium", label: COPY.openerPremium, price: `₹${CURIOSITY_TAX_INR}/mo`, note: "Premium. Reading their profile is, somehow, a paid feature." },
];

function ChatInner() {
  const router = useRouter();
  const params = useSearchParams();
  const rawName = params.get("with") ?? "your match";
  const name = rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase();

  const [messages, setMessages] = useState<string[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [composerOpen, setComposerOpen] = useState(true);

  const send = (tier: Tier) => {
    const text = tier.id === "premium" ? "Hey, your profile said you walked out of two first dates. Respect." : tier.label;
    setMessages((m) => [...m, text]);
    setComposerOpen(false);
    // The classic Lurch outcome: they start typing, forever.
    setShowTyping(true);
  };

  return (
    <div style={{ height: "100%", background: "#0A0A0A", display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "calc(env(safe-area-inset-top, 0px) + 16px) 20px 14px", borderBottom: "1px solid #2A2A2A" }}>
        <button onClick={() => router.push("/feed")} aria-label="Back" style={{ background: "transparent", border: "none", cursor: "pointer", padding: "4px" }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M14 5L8 11L14 17" stroke="#F5F0E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 600, color: "#F5F0E8" }}>{name}</p>
        <span style={{ fontFamily: "var(--font-mono, var(--font-ui))", fontSize: "11px", color: "#9A958C", marginLeft: "auto" }}>Active 2m ago*</span>
      </div>

      {/* Thread */}
      <div className="flex-1 overflow-y-auto lurch-scroll" style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {messages.length === 0 && (
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "13px", fontStyle: "italic", color: "#5C5852", textAlign: "center", marginTop: "20px" }}>
            You matched. Now one of you has to pretend this is going somewhere.
          </p>
        )}
        {messages.map((m, i) => (
          <div key={i} style={{ alignSelf: "flex-end", maxWidth: "80%", background: "#6B1E23", color: "#F5F0E8", borderRadius: "12px", padding: "10px 14px", fontFamily: "var(--font-ui)", fontSize: "14px", lineHeight: 1.4 }}>
            {m}
          </div>
        ))}
        {showTyping && (
          <div style={{ alignSelf: "flex-start" }}>
            <TypingIndicator />
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "11px", fontStyle: "italic", color: "#5C5852", marginTop: "6px" }}>
              * {name} is typing. {name} has been typing since you matched. {name} will not finish.
            </p>
          </div>
        )}
      </div>

      {/* Opening Line Marketplace (P1-09) */}
      {composerOpen ? (
        <div style={{ borderTop: "1px solid #2A2A2A", padding: "18px 20px calc(env(safe-area-inset-bottom, 0px) + 18px)", background: "#141414" }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.16em", color: "#C44B4B", marginBottom: "12px" }}>
            Opening Line Marketplace
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {TIERS.map((t) => (
              <button
                key={t.id}
                onClick={() => send(t)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  width: "100%", textAlign: "left", gap: "12px",
                  background: "rgba(245,240,232,0.05)", border: "none", borderRadius: "12px",
                  padding: "12px 14px", cursor: "pointer",
                }}
              >
                <span style={{ minWidth: 0 }}>
                  <span style={{ display: "block", fontFamily: "var(--font-ui)", fontSize: "15px", fontWeight: 600, color: "#F5F0E8" }}>&ldquo;{t.label}&rdquo;</span>
                  <span style={{ display: "block", fontFamily: "var(--font-ui)", fontSize: "11px", fontStyle: "italic", color: "#9A958C", marginTop: "2px" }}>{t.note}</span>
                </span>
                <span style={{ flexShrink: 0, fontFamily: "var(--font-mono, var(--font-display))", fontSize: "12px", color: "#C44B4B" }}>{t.price}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ borderTop: "1px solid #2A2A2A", padding: "16px 20px calc(env(safe-area-inset-bottom, 0px) + 16px)", background: "#141414" }}>
          <button
            onClick={() => router.push("/feed")}
            style={{ width: "100%", background: "rgba(245,240,232,0.05)", border: "none", borderRadius: "12px", padding: "14px", fontFamily: "var(--font-ui)", fontSize: "13px", color: "#9A958C", cursor: "pointer" }}
          >
            Go judge someone else instead
          </button>
        </div>
      )}
    </div>
  );
}

export default function ChatPage() {
  return (
    <ScreenWrapper>
      <Suspense fallback={<div style={{ height: "100%", background: "#0A0A0A" }} />}>
        <ChatInner />
      </Suspense>
    </ScreenWrapper>
  );
}
