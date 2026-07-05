"use client";

import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { CTAButton } from "@/components/inputs/CTAButton";
import { GhostButton } from "@/components/inputs/GhostButton";

export default function SecureExitPage() {
  return (
    <ScreenWrapper>
      <div
        className="h-full flex flex-col"
        style={{
          background: "#0F0D0B",
          paddingTop: "calc(env(safe-area-inset-top, 0px) + 48px)",
          paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 32px)",
          paddingLeft: "32px",
          paddingRight: "32px",
        }}
      >
        <div className="flex-1 flex flex-col justify-center gap-6">
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "1.1",
              color: "#F0EDED",
            }}
          >
            YOU&apos;RE SECURE.
          </h1>

          <p
            style={{ fontFamily: "var(--font-ui)", fontSize: "14px", fontStyle: "italic", lineHeight: "1.6", color: "#AEADAD" }}
          >
            Dating apps are not for you. You&apos;ll be fine. You&apos;re already fine. That&apos;s the whole point.
          </p>

          <div
            className="space-y-4"
            style={{ fontFamily: "var(--font-ui)", fontSize: "14px", lineHeight: "1.6", color: "#AEADAD" }}
          >
            <p>
              You don&apos;t need an algorithm to find connection. You probably make friends easily, communicate your needs, and leave situations that aren&apos;t working for you. We genuinely have nothing to offer you here.
            </p>
            <p>You must have a lot of money.</p>
            <p>
              Since we can&apos;t monetise your loneliness, we&apos;d like to monetise your goodwill instead.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <CTAButton onClick={() => window.open("https://lurchout.vercel.app/shop", "_blank")}>
            Buy a T-shirt
          </CTAButton>
          <GhostButton onClick={() => window.open("https://lurchout.vercel.app", "_blank")}>
            Buy me a coffee
          </GhostButton>
          <p
            className="text-center"
            style={{ fontFamily: "var(--font-ui)", fontSize: "11px", fontStyle: "italic", color: "#6A6060" }}
          >
            This is the only page on Lurch where no dark patterns were used. You&apos;ve earned it.
          </p>
        </div>
      </div>
    </ScreenWrapper>
  );
}
