"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { ExitInterceptModal } from "@/components/overlays/ExitInterceptModal";
import { useLurchStore } from "@/lib/store";
import { COPY } from "@/lib/copy";

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ borderBottom: "1px solid #2A2A2A", padding: "18px 0" }}>{children}</div>
  );
}

export default function SettingsPage() {
  const router = useRouter();
  const { beginIntercept } = useLurchStore();
  const [haptics, setHaptics] = useState<"soft" | "hard">("hard");

  return (
    <ScreenWrapper>
      <div className="h-full overflow-y-auto lurch-scroll" style={{ background: "#0A0A0A" }}>
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "calc(env(safe-area-inset-top, 0px) + 16px) 20px 14px", borderBottom: "1px solid #2A2A2A" }}>
          <button onClick={() => router.push("/profile")} aria-label="Back" style={{ background: "transparent", border: "none", cursor: "pointer", padding: "4px" }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M14 5L8 11L14 17" stroke="#C44B4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 600, color: "#F5F0E8" }}>Settings</p>
        </div>

        <div style={{ padding: "8px 20px 40px" }}>
          {/* Haptics of Rejection */}
          <Row>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "15px", fontWeight: 600, color: "#F5F0E8", marginBottom: "4px" }}>Haptics of Rejection</p>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "12px", fontStyle: "italic", color: "#9A958C", marginBottom: "12px" }}>
              How hard the phone should buzz when someone passes on you.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {(["soft", "hard"] as const).map((v) => {
                const on = haptics === v;
                return (
                  <button
                    key={v}
                    onClick={() => setHaptics(v)}
                    style={{
                      flex: 1, padding: "10px", borderRadius: "12px", cursor: "pointer",
                      background: on ? "#6B1E23" : "transparent",
                      border: `1px solid ${on ? "#6B1E23" : "#3D3D3D"}`,
                      color: on ? "#F5F0E8" : "#9A958C",
                      fontFamily: "var(--font-ui)", fontSize: "13px", fontWeight: 600, textTransform: "capitalize",
                    }}
                  >
                    {v}
                  </button>
                );
              })}
            </div>
          </Row>

          {/* About — the paradox */}
          <Row>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.16em", color: "#C44B4B", marginBottom: "12px" }}>About</p>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "15px", fontStyle: "italic", color: "#F5F0E8", lineHeight: 1.6, marginBottom: "8px" }}>{COPY.aboutParadox}</p>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "15px", fontStyle: "italic", color: "#9A958C", lineHeight: 1.6 }}>{COPY.aboutChurn}</p>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "12px", color: "#5C5852", lineHeight: 1.6, marginTop: "14px" }}>
              Lurch parodies dark patterns. It does not charge real money in this build. Every paywall here has a free way out.
            </p>
          </Row>

          {/* Reduced motion note */}
          <Row>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "13px", color: "#9A958C", lineHeight: 1.6 }}>
              Reduced motion is respected throughout — if your device requests it, the score theatre, sheets and swipe physics all calm down automatically.
            </p>
          </Row>

          {/* Truth */}
          <Row>
            <button
              onClick={() => router.push("/truth")}
              style={{ background: "transparent", border: "none", cursor: "pointer", padding: 0, fontFamily: "var(--font-ui)", fontSize: "15px", color: "#F5F0E8", textAlign: "left" }}
            >
              Read the truth about this app →
            </button>
          </Row>

          {/* Leave */}
          <button
            onClick={beginIntercept}
            style={{
              marginTop: "28px", width: "100%", padding: "16px",
              background: "transparent", border: "1px solid #3D3D3D", borderRadius: "12px",
              fontFamily: "var(--font-ui)", fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em",
              textTransform: "uppercase", color: "#C44B4B", cursor: "pointer",
            }}
          >
            Leave Lurch
          </button>
        </div>
      </div>

      {/* Exit interceptor — 3 stages, always escapable, ends at /truth */}
      <ExitInterceptModal />
    </ScreenWrapper>
  );
}
