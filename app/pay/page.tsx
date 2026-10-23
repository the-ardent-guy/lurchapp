"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { FeedShell } from "@/components/layout/FeedShell";

export default function PayPage() {
  const router = useRouter();
  const [bought, setBought] = useState<null | "tee" | "puff">(null);
  const confirmation = bought === "tee"
    ? "No card was charged. Picture the t-shirt arriving anyway. Picture wearing it. Picture the silence."
    : bought === "puff"
    ? "No card was charged. But the thought of the puff kept someone going. Probably the developer."
    : null;

  return (
    <ScreenWrapper>
      <FeedShell>
        <div className="h-full overflow-y-auto lurch-scroll" style={{ padding: "48px 28px 40px" }}>

          <p style={{
            fontFamily: "var(--font-display)", fontSize: "10px",
            textTransform: "uppercase", letterSpacing: "0.18em",
            color: "#C44B4B", marginBottom: "16px",
          }}>
            Oh. You clicked.
          </p>

          <h1 style={{
            fontFamily: "var(--font-heading)", fontSize: "40px", fontWeight: 600,
            lineHeight: 1.05, color: "#F0EDED", marginBottom: "12px",
          }}>
            You&apos;re ready to pay for this crap?
          </h1>

          <p style={{
            fontFamily: "var(--font-ui)", fontSize: "14px", fontStyle: "italic",
            lineHeight: 1.6, color: "#AEADAD", marginBottom: "36px",
          }}>
            We get it. You&apos;ve got money. Emotional unavailability and disposable income. The whole package.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>

            {/* T-shirt */}
            <div style={{
              background: "#1A1612", border: "1px solid #2E2720",
              borderRadius: "16px", padding: "20px",
            }}>
              <p style={{
                fontFamily: "var(--font-display)", fontSize: "11px",
                textTransform: "uppercase", letterSpacing: "0.14em",
                color: "#6A6060", marginBottom: "8px",
              }}>
                Option A
              </p>
              <p style={{
                fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 600,
                color: "#F0EDED", marginBottom: "6px",
              }}>
                Buy Our T-shirt
              </p>
              <p style={{
                fontFamily: "var(--font-ui)", fontSize: "13px",
                lineHeight: 1.55, color: "#AEADAD", marginBottom: "16px",
              }}>
                It says &ldquo;I matched with someone on Lurch&rdquo; on the front. The back says &ldquo;they left me on read.&rdquo; Wear it on dates. We hear it works.
              </p>
              <button
                onClick={() => setBought("tee")}
                style={{
                  height: "44px", padding: "0 22px", cursor: "pointer", border: "none",
                  background: "#6B1E23", borderRadius: "12px",
                  fontFamily: "var(--font-ui)", fontSize: "14px",
                  fontWeight: 600, color: "#F5F0E8",
                }}
              >
                ₹799, worth it
              </button>
            </div>

            {/* Veg puff */}
            <div style={{
              background: "#1A1612", border: "1px solid #2E2720",
              borderRadius: "16px", padding: "20px",
            }}>
              <p style={{
                fontFamily: "var(--font-display)", fontSize: "11px",
                textTransform: "uppercase", letterSpacing: "0.14em",
                color: "#6A6060", marginBottom: "8px",
              }}>
                Option B
              </p>
              <p style={{
                fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 600,
                color: "#F0EDED", marginBottom: "6px",
              }}>
                Buy Me a Veg Puff
              </p>
              <p style={{
                fontFamily: "var(--font-ui)", fontSize: "13px",
                lineHeight: 1.55, color: "#AEADAD", marginBottom: "16px",
              }}>
                ₹20. Flaky. Warm. Better than most situationships. Your money goes directly to the developer&apos;s snack. We will think of you.
              </p>
              <button
                onClick={() => setBought("puff")}
                style={{
                  height: "44px", padding: "0 22px", cursor: "pointer",
                  background: "rgba(245,240,232,0.06)", borderRadius: "12px",
                  fontFamily: "var(--font-ui)", fontSize: "14px",
                  fontWeight: 600, color: "#C9C3B8",
                  border: "none",
                }}
              >
                ₹20, one puff
              </button>
            </div>

          </div>

          {confirmation && (
            <div style={{ background: "#141414", border: "1px solid #2A2A2A", borderRadius: "14px", padding: "18px 20px", marginBottom: "24px" }}>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: "14px", fontStyle: "italic", lineHeight: 1.6, color: "#C9C3B8" }}>
                {confirmation}
              </p>
            </div>
          )}

          <button
            onClick={() => router.back()}
            style={{
              width: "100%", textAlign: "center",
              fontFamily: "var(--font-ui)", fontSize: "11px",
              fontStyle: "italic", color: "#4A4540",
              background: "transparent", border: "none", cursor: "pointer",
            }}
          >
            never mind, i&apos;ll stay lonely for free
          </button>

        </div>
      </FeedShell>
    </ScreenWrapper>
  );
}
