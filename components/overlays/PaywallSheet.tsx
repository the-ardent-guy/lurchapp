"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { ModalOverlay } from "@/components/layout/ModalOverlay";
import { CTAButton } from "@/components/inputs/CTAButton";
import { GhostButton } from "@/components/inputs/GhostButton";
import { TechniqueLabel } from "@/components/typography/TechniqueLabel";
import { formatCountdown } from "@/lib/utils";
import { COPY } from "@/lib/copy";

interface Props {
  open: boolean;
  onClose: () => void; // the secondary escape MUST call this - never blocked
  title: string;
  body: string;
  technique: string;
  techniqueDetail?: string;
  priceLabel: string; // "₹299/mo"
  primaryLabel: string;
  secondaryLabel?: string;
  onPrimary: () => void; // simulate only
  blurredContent?: ReactNode;
  countdownTo?: Date | null;
}

function Countdown({ to }: { to: Date }) {
  const [remaining, setRemaining] = useState(to.getTime() - Date.now());
  useEffect(() => {
    const id = setInterval(() => setRemaining(to.getTime() - Date.now()), 1000);
    return () => clearInterval(id);
  }, [to]);
  return <span style={{ color: "#C44B4B" }}>{formatCountdown(remaining)}</span>;
}

/**
 * Dark bottom-sheet paywall (spec §4). Never pastel. Secondary dismiss is
 * always available - this build does not trap anyone or take real money.
 */
export function PaywallSheet({
  open,
  onClose,
  title,
  body,
  technique,
  techniqueDetail,
  priceLabel,
  primaryLabel,
  secondaryLabel = COPY.curiositySecondary,
  onPrimary,
  blurredContent,
  countdownTo,
}: Props) {
  return (
    <ModalOverlay isOpen={open} onClose={onClose}>
      <div style={{ padding: "28px 24px calc(env(safe-area-inset-bottom, 0px) + 24px)" }}>
        <TechniqueLabel technique={technique} detail={techniqueDetail} style={{ marginBottom: "16px" }} />

        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "24px", fontWeight: 600, lineHeight: 1.2, color: "#F5F0E8", marginBottom: "10px" }}>
          {title}
        </h2>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: "14px", fontStyle: "italic", lineHeight: 1.55, color: "#9A958C", marginBottom: "18px" }}>
          {body}
        </p>

        {countdownTo && (
          <p style={{ fontFamily: "var(--font-mono, var(--font-display))", fontSize: "13px", color: "#9A958C", marginBottom: "16px" }}>
            Expires in <Countdown to={countdownTo} />
          </p>
        )}

        {blurredContent && (
          <div style={{ position: "relative", marginBottom: "18px", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ filter: "blur(14px)", pointerEvents: "none", transform: "scale(1.05)" }}>{blurredContent}</div>
            <div style={{ position: "absolute", inset: 0, background: "var(--lurch-blur-tint, rgba(107,30,35,0.35))" }} />
          </div>
        )}

        <p style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, color: "#F5F0E8", marginBottom: "16px", letterSpacing: "-0.01em" }}>
          {priceLabel}
        </p>

        <CTAButton onClick={onPrimary}>{primaryLabel}</CTAButton>
        <GhostButton dim onClick={onClose}>
          {secondaryLabel}
        </GhostButton>
      </div>
    </ModalOverlay>
  );
}
