"use client";

import { useRouter } from "next/navigation";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { COPY } from "@/lib/copy";

// LURCH-P2-01 — Weekly Lurch Wrapped. Demo numbers, clearly framed as satire.
const STATS = [
  { big: "400", label: "people swiped left (satirical demo figure)" },
  { big: "11 min", label: "spent judging strangers today" },
  { big: "0", label: "conversations that went anywhere" },
  { big: "1", label: "type, and it is still your ex" },
];

export default function WrappedPage() {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <div className="h-full overflow-y-auto lurch-scroll" style={{ background: "#0A0A0A", padding: "calc(env(safe-area-inset-top, 0px) + 40px) 28px calc(env(safe-area-inset-bottom, 0px) + 32px)" }}>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.16em", color: "#C44B4B", marginBottom: "14px" }}>
          Your Lurch Wrapped · satire
        </p>
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "34px", fontWeight: 600, lineHeight: 1.15, color: "#F5F0E8", marginBottom: "28px" }}>
          {COPY.wrapped}
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
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
          style={{ marginTop: "24px", width: "100%", padding: "14px", background: "transparent", border: "1px solid #3D3D3D", borderRadius: "12px", fontFamily: "var(--font-ui)", fontSize: "13px", color: "#9A958C", cursor: "pointer" }}
        >
          Back to profile
        </button>
      </div>
    </ScreenWrapper>
  );
}
