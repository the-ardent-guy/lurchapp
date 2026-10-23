"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { FeedShell } from "@/components/layout/FeedShell";
import { BoostRoulette } from "@/components/overlays/BoostRoulette";
import { useLurchStore } from "@/lib/store";
import { COPY } from "@/lib/copy";

function SkuRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", padding: "12px 0", borderBottom: "1px solid #2A2A2A" }}>
      <span style={{ fontFamily: "var(--font-ui)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#9A958C" }}>{label}</span>
      <span style={{ fontFamily: "var(--font-ui)", fontSize: "14px", color: "#F5F0E8", textAlign: "right", lineHeight: 1.4 }}>{value}</span>
    </div>
  );
}

function EntryRow({ label, sub, onClick }: { label: string; sub?: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", textAlign: "left", background: "transparent", border: "none", borderBottom: "1px solid #2A2A2A", padding: "16px 0", cursor: "pointer" }}
    >
      <span>
        <span style={{ display: "block", fontFamily: "var(--font-ui)", fontSize: "15px", color: "#F5F0E8" }}>{label}</span>
        {sub && <span style={{ display: "block", fontFamily: "var(--font-ui)", fontSize: "12px", fontStyle: "italic", color: "#9A958C", marginTop: "2px" }}>{sub}</span>}
      </span>
      <span style={{ color: "#5C5852", fontSize: "18px" }}>›</span>
    </button>
  );
}

export default function ProfilePage() {
  const router = useRouter();
  const wounds = useLurchStore((s) => s.wounds);
  const attachmentStyle = useLurchStore((s) => s.attachmentStyle);
  const gender = useLurchStore((s) => s.gender);
  const hasData = !!attachmentStyle || wounds.length > 0 || !!gender;
  const attachmentLabelValue = attachmentStyle;
  const [boostOpen, setBoostOpen] = useState(false);

  // Empty fallback — only when the visitor never did onboarding.
  if (!hasData) {
    return (
      <ScreenWrapper>
        <FeedShell>
          <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 32px", gap: "20px" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 600, color: "#9A958C", textAlign: "center", lineHeight: 1.6 }}>
              Look inside yourself. There&apos;s nothing here yet.
            </p>
            <button
              onClick={() => router.push("/onboarding/gender")}
              style={{ background: "#6B1E23", border: "1px solid rgba(245,240,232,0.14)", borderRadius: "2px", padding: "14px 22px", fontFamily: "var(--font-ui)", fontSize: "13px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#F5F0E8", cursor: "pointer" }}
            >
              Build your damage profile
            </button>
          </div>
        </FeedShell>
      </ScreenWrapper>
    );
  }

  const traumaTags = wounds.length ? wounds.join(" · ") : "Still itemising";

  return (
    <ScreenWrapper>
      <FeedShell>
        <div className="h-full overflow-y-auto lurch-scroll" style={{ padding: "28px 24px 40px" }}>
          {/* Match XP HUD */}
          <div style={{ background: "#141414", border: "1px solid #2A2A2A", borderRadius: "2px", padding: "18px 20px", marginBottom: "24px" }}>
            <p style={{ fontFamily: "var(--font-mono, var(--font-display))", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.14em", color: "#C44B4B", marginBottom: "8px" }}>
              Match XP · playful
            </p>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 600, color: "#F5F0E8", lineHeight: 1.3 }}>
              {COPY.xpHud}
            </p>
            <div style={{ marginTop: "12px", height: "6px", background: "#0A0A0A", borderRadius: "2px", overflow: "hidden" }}>
              <div style={{ width: "62%", height: "100%", background: "#6B1E23" }} />
            </div>
          </div>

          {/* SKU block */}
          <p style={{ fontFamily: "var(--font-display)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.14em", color: "#9A958C", marginBottom: "12px" }}>
            You · SKU
          </p>
          <div style={{ background: "#141414", border: "1px solid #2A2A2A", borderRadius: "2px", padding: "4px 18px 18px", marginBottom: "8px" }}>
            <SkuRow label="Height" value="Taller in my main photo" />
            <SkuRow label="Job" value="Between things, thriving" />
            <SkuRow label="Attachment" value={attachmentLabelValue ?? "Undiagnosed"} />
            <SkuRow label="Trauma tags" value={traumaTags} />
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "13px", fontStyle: "italic", color: "#C44B4B", marginTop: "14px" }}>
              {COPY.skuShip}
            </p>
          </div>

          {/* Entries */}
          <div style={{ marginTop: "20px" }}>
            <EntryRow label="Boost Roulette" sub="Buy 30 minutes of maybe." onClick={() => setBoostOpen(true)} />
            <EntryRow label="Filters" sub="Remove a convenient majority of humans." onClick={() => router.push("/filters")} />
            <EntryRow label="Weekly Lurch Wrapped" sub="Your type is still your ex." onClick={() => router.push("/wrapped")} />
            <EntryRow label="Settings" onClick={() => router.push("/settings")} />
          </div>
        </div>
      </FeedShell>

      <BoostRoulette open={boostOpen} onClose={() => setBoostOpen(false)} />
    </ScreenWrapper>
  );
}
