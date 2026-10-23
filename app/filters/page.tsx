"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { CTAButton } from "@/components/inputs/CTAButton";
import { useLurchStore } from "@/lib/store";
import { countDiscarded, POOL_SIZE, type FilterFlags } from "@/lib/data/filters";
import { COPY } from "@/lib/copy";

const MAN = new Set(["Man", "Transgender man", "Demi-boy"]);
const WOMAN = new Set(["Woman", "Transgender woman", "Demi-girl"]);

function Toggle({ on, onChange, danger = false }: { on: boolean; onChange: (v: boolean) => void; danger?: boolean }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      onClick={() => onChange(!on)}
      style={{
        width: "48px", height: "28px", borderRadius: "9999px", cursor: "pointer", flexShrink: 0,
        background: on ? (danger ? "#C44B4B" : "#6B1E23") : "#2A2A2A",
        border: `1px solid ${on ? (danger ? "#C44B4B" : "#6B1E23") : "#3D3D3D"}`,
        position: "relative", transition: "background 0.18s",
      }}
    >
      <span style={{
        position: "absolute", top: "2px", left: on ? "22px" : "2px",
        width: "22px", height: "22px", background: "#F5F0E8", borderRadius: "9999px",
        transition: "left 0.18s", boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
      }} />
    </button>
  );
}

function FilterCard({ title, sub, caption, on, onChange, danger = false, badge, children, accentTitle }: {
  title: string; sub?: string; caption?: string; on: boolean; onChange: (v: boolean) => void;
  danger?: boolean; badge?: string; children?: React.ReactNode; accentTitle?: boolean;
}) {
  return (
    <div style={{ background: "#141414", border: "1px solid #2A2A2A", borderRadius: "16px", padding: "18px 18px" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
        <div style={{ minWidth: 0 }}>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "15px", fontWeight: 600, color: danger || accentTitle ? "#C44B4B" : "#F5F0E8", marginBottom: "4px" }}>{title}</p>
          {sub && <p style={{ fontFamily: "var(--font-ui)", fontSize: "12.5px", color: "#9A958C", lineHeight: 1.5 }}>{sub}</p>}
          {badge && (
            <span style={{ display: "inline-block", marginTop: "9px", fontFamily: "var(--font-mono, var(--font-ui))", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#5C5852", border: "1px solid #3D3D3D", borderRadius: "9999px", padding: "3px 9px" }}>{badge}</span>
          )}
          {caption && on && (
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "12.5px", fontStyle: "italic", color: "#C44B4B", marginTop: "9px" }}>{caption}</p>
          )}
          {children}
        </div>
        <Toggle on={on} onChange={onChange} danger={danger} />
      </div>
    </div>
  );
}

export default function FiltersPage() {
  const router = useRouter();
  const { heightIndustryStandard, classistMode, setHeightIndustryStandard, setClassistMode, gender } = useLurchStore();

  // Extra playful filters live locally (persist for the session is enough here).
  const [ghostProof, setGhostProof] = useState(false);
  const [noExTexters, setNoExTexters] = useState(false);
  const [noFish, setNoFish] = useState(false);
  const [measuredEnough, setMeasuredEnough] = useState(false);
  const [initiators, setInitiators] = useState(false);

  const flags: FilterFlags = { height: heightIndustryStandard, classist: classistMode, ghostProof, noExTexters, noFish, measuredEnough, initiators };
  const discarded = countDiscarded(flags);

  const isMan = gender ? MAN.has(gender) : false;
  const isWoman = gender ? WOMAN.has(gender) : false;

  return (
    <ScreenWrapper>
      <div className="h-full overflow-y-auto lurch-scroll" style={{ background: "#0A0A0A" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "calc(env(safe-area-inset-top, 0px) + 18px) 22px 16px", borderBottom: "1px solid #1E1E1E" }}>
          <button onClick={() => router.push("/feed")} aria-label="Back" style={{ background: "transparent", border: "none", cursor: "pointer", padding: "4px" }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M14 5L8 11L14 17" stroke="#C44B4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "19px", fontWeight: 600, color: "#F5F0E8" }}>Filters</p>
        </div>

        <div style={{ padding: "22px 22px 40px", display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Live discard counter */}
          <div style={{ background: "linear-gradient(140deg, #1a0e0f 0%, #141414 70%)", border: "1px solid #2A2A2A", borderRadius: "18px", padding: "24px" }}>
            <p style={{ fontFamily: "var(--font-mono, var(--font-display))", fontSize: "30px", fontWeight: 700, color: discarded > 0 ? "#C44B4B" : "#F5F0E8", letterSpacing: "-0.02em" }}>
              {COPY.heightCounter(discarded)}
            </p>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "12.5px", color: "#9A958C", marginTop: "8px", lineHeight: 1.5 }}>
              {discarded} of {POOL_SIZE} people in your deck, removed before you ever saw them.
            </p>
          </div>

          {/* Industry Standard height */}
          <FilterCard
            title={COPY.heightTitle}
            sub={COPY.heightDefaultNote}
            badge="Industry rumor"
            on={heightIndustryStandard}
            onChange={setHeightIndustryStandard}
          >
            {heightIndustryStandard && (
              <button
                onClick={() => setHeightIndustryStandard(false)}
                style={{ marginTop: "14px", background: "transparent", border: "1px solid #3D3D3D", borderRadius: "10px", padding: "10px 14px", fontFamily: "var(--font-ui)", fontSize: "13px", color: "#F5F0E8", cursor: "pointer" }}
              >
                {COPY.heightEscape}
              </button>
            )}
          </FilterCard>

          {/* Classist Mode */}
          <FilterCard title={COPY.classist} sub="Only show people with generational wealth." caption={COPY.classistCaption} on={classistMode} onChange={setClassistMode} danger />

          {/* Universal extras */}
          <FilterCard title="Ghost-proof" sub="Hide anyone likely to vanish after “haha yeah.”" badge="Uses real ghost risk" on={ghostProof} onChange={setGhostProof} />
          <FilterCard title="No ex-texters" sub="Hide people still texting the person who ruined them." caption="You, too. But we can't filter you out." on={noExTexters} onChange={setNoExTexters} />

          {/* Gender-aware block */}
          {(isMan || isWoman) && (
            <p style={{ fontFamily: "var(--font-display)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.14em", color: "#9A958C", margin: "8px 2px 0" }}>
              For you, specifically
            </p>
          )}

          {isMan && (
            <>
              <FilterCard
                title="Measured Enough"
                sub="Hide anyone who'll ask your height before your name."
                caption="You've been reduced to a number too. We noticed."
                accentTitle
                on={measuredEnough}
                onChange={setMeasuredEnough}
              />
              <FilterCard
                title="They text first"
                sub="Only show people who'll open with something other than silence."
                caption="Statistically, you will still text first. Hope is a feature."
                on={initiators}
                onChange={setInitiators}
              />
            </>
          )}

          {isWoman && (
            <FilterCard
              title="No More Fish"
              sub="Hide men holding a fish they caught once, in 2019, for the personality."
              caption="Also filters the gym-mirror selfie and the “my ex was crazy” bio. You're welcome."
              accentTitle
              on={noFish}
              onChange={setNoFish}
            />
          )}

          {!isMan && !isWoman && (
            <FilterCard
              title="Hide the ick"
              sub="Hide profiles that would, on sight, give you the ick."
              caption="The ick is the only honest algorithm. We're just surfacing it."
              on={noFish}
              onChange={setNoFish}
            />
          )}

          <div style={{ marginTop: "8px" }}>
            <CTAButton onClick={() => router.push("/feed")}>Done</CTAButton>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  );
}
