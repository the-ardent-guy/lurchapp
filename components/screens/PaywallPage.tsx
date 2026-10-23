"use client";

import { useRouter } from "next/navigation";
import { useLurchStore } from "@/lib/store";
import { CTAButton } from "@/components/inputs/CTAButton";
import { GhostButton } from "@/components/inputs/GhostButton";
import { TechniqueLabel } from "@/components/typography/TechniqueLabel";
import { CURIOSITY_TAX_LABEL } from "@/lib/pricing";
import { COPY } from "@/lib/copy";

// Shown over the feed when Ex on Record (ProfileDetailPanel) is tapped.
// Dark sheet content (not pastel). Paying drops you on the absurdist checkout.
export function PaywallPage() {
  const router = useRouter();
  const { matchName, closePaywall } = useLurchStore();

  const who = matchName ? matchName.charAt(0) + matchName.slice(1).toLowerCase() : "Their";

  const handlePay = () => {
    closePaywall();
    router.push("/pay");
  };

  return (
    <div style={{ padding: "28px 24px calc(env(safe-area-inset-bottom, 0px) + 24px)", background: "#161616" }}>
      <TechniqueLabel technique={COPY.curiosityTechnique} detail="Social Proof" style={{ marginBottom: "14px" }} />

      <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "24px", fontWeight: 600, lineHeight: 1.2, color: "#F5F0E8", marginBottom: "10px" }}>
        {who}&apos;s ex on record
      </h2>
      <p style={{ fontFamily: "var(--font-ui)", fontSize: "14px", fontStyle: "italic", lineHeight: 1.55, color: "#9A958C", marginBottom: "18px" }}>
        {COPY.exRecord}
      </p>

      <p style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, color: "#F5F0E8", marginBottom: "16px" }}>
        {CURIOSITY_TAX_LABEL}
      </p>

      <CTAButton onClick={handlePay}>{COPY.curiosityPrimary}</CTAButton>
      <GhostButton dim onClick={closePaywall}>
        {COPY.curiositySecondary}
      </GhostButton>
    </div>
  );
}
