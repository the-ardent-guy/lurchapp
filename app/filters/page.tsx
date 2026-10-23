"use client";

import { useRouter } from "next/navigation";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { CTAButton } from "@/components/inputs/CTAButton";
import { useLurchStore } from "@/lib/store";
import { countDiscarded, POOL_SIZE } from "@/lib/data/filters";
import { COPY } from "@/lib/copy";

function Toggle({ on, onChange, danger = false }: { on: boolean; onChange: (v: boolean) => void; danger?: boolean }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      onClick={() => onChange(!on)}
      style={{
        width: "46px", height: "26px", borderRadius: "2px", cursor: "pointer", flexShrink: 0,
        background: on ? (danger ? "#C44B4B" : "#6B1E23") : "#2A2A2A",
        border: `1px solid ${on ? (danger ? "#C44B4B" : "#6B1E23") : "#3D3D3D"}`,
        position: "relative", transition: "background 0.15s",
      }}
    >
      <span style={{
        position: "absolute", top: "2px", left: on ? "22px" : "2px",
        width: "20px", height: "20px", background: "#F5F0E8", borderRadius: "1px",
        transition: "left 0.15s",
      }} />
    </button>
  );
}

export default function FiltersPage() {
  const router = useRouter();
  const { heightIndustryStandard, classistMode, setHeightIndustryStandard, setClassistMode } = useLurchStore();

  const discarded = countDiscarded(heightIndustryStandard, classistMode);

  return (
    <ScreenWrapper>
      <div className="h-full overflow-y-auto lurch-scroll" style={{ background: "#0A0A0A" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "calc(env(safe-area-inset-top, 0px) + 16px) 20px 14px", borderBottom: "1px solid #2A2A2A" }}>
          <button onClick={() => router.push("/feed")} aria-label="Back" style={{ background: "transparent", border: "none", cursor: "pointer", padding: "4px" }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M14 5L8 11L14 17" stroke="#C44B4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 600, color: "#F5F0E8" }}>Filters</p>
        </div>

        <div style={{ padding: "24px 20px 40px" }}>
          {/* Live discard counter */}
          <div style={{ background: "#141414", border: "1px solid #2A2A2A", borderRadius: "2px", padding: "20px", marginBottom: "24px" }}>
            <p style={{ fontFamily: "var(--font-mono, var(--font-display))", fontSize: "32px", fontWeight: 700, color: discarded > 0 ? "#C44B4B" : "#F5F0E8", letterSpacing: "-0.02em" }}>
              {COPY.heightCounter(discarded)}
            </p>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "12px", color: "#9A958C", marginTop: "6px" }}>
              {discarded} of {POOL_SIZE} people in your deck, removed before you ever saw them.
            </p>
          </div>

          {/* Industry Standard height */}
          <div style={{ borderTop: "1px solid #2A2A2A", padding: "20px 0" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "15px", fontWeight: 600, color: "#F5F0E8", marginBottom: "4px" }}>{COPY.heightTitle}</p>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "12px", color: "#9A958C", lineHeight: 1.5 }}>{COPY.heightDefaultNote}</p>
                <span style={{ display: "inline-block", marginTop: "8px", fontFamily: "var(--font-mono, var(--font-ui))", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#5C5852", border: "1px solid #3D3D3D", borderRadius: "2px", padding: "2px 7px" }}>
                  Industry rumor
                </span>
              </div>
              <Toggle on={heightIndustryStandard} onChange={setHeightIndustryStandard} />
            </div>
            {heightIndustryStandard && (
              <button
                onClick={() => setHeightIndustryStandard(false)}
                style={{ marginTop: "14px", background: "transparent", border: "1px solid #3D3D3D", borderRadius: "2px", padding: "10px 14px", fontFamily: "var(--font-ui)", fontSize: "13px", color: "#F5F0E8", cursor: "pointer" }}
              >
                {COPY.heightEscape}
              </button>
            )}
          </div>

          {/* Classist Mode */}
          <div style={{ borderTop: "1px solid #2A2A2A", padding: "20px 0" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
              <div>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "15px", fontWeight: 600, color: "#C44B4B", marginBottom: "4px" }}>{COPY.classist}</p>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "12px", color: "#9A958C", lineHeight: 1.5 }}>
                  Only show people with generational wealth.
                </p>
                {classistMode && (
                  <p style={{ fontFamily: "var(--font-ui)", fontSize: "12px", fontStyle: "italic", color: "#C44B4B", marginTop: "8px" }}>{COPY.classistCaption}</p>
                )}
              </div>
              <Toggle on={classistMode} onChange={setClassistMode} danger />
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <CTAButton onClick={() => router.push("/feed")}>Done</CTAButton>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  );
}
