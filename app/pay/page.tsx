"use client";

import { useRouter } from "next/navigation";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { FeedShell } from "@/components/layout/FeedShell";

export default function PayPage() {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <FeedShell>
        <div className="h-full overflow-y-auto lurch-scroll" style={{ padding: "48px 28px 40px" }}>

          <p style={{
            fontFamily: "var(--font-display)", fontSize: "10px",
            textTransform: "uppercase", letterSpacing: "0.18em",
            color: "#E94057", marginBottom: "16px",
          }}>
            Oh. You clicked.
          </p>

          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "40px", fontWeight: 600,
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
                style={{
                  height: "40px", padding: "0 20px",
                  background: "#E94057", borderRadius: "10px",
                  fontFamily: "var(--font-display)", fontSize: "13px",
                  fontWeight: 600, color: "#FFFFFF",
                }}
              >
                ₹799 — Worth it
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
                style={{
                  height: "40px", padding: "0 20px",
                  background: "#2E2720", borderRadius: "10px",
                  fontFamily: "var(--font-display)", fontSize: "13px",
                  fontWeight: 600, color: "#AEADAD",
                  border: "1px solid #3A3028",
                }}
              >
                ₹20 — One puff
              </button>
            </div>

          </div>

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
