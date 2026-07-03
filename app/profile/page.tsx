"use client";

import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { FeedShell } from "@/components/layout/FeedShell";
import { useColors } from "@/lib/theme";

export default function ProfilePage() {
  const colors = useColors();

  return (
    <ScreenWrapper>
      <FeedShell>
        <div style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 32px",
        }}>
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "17px",
            fontWeight: 600,
            color: colors.whisper,
            textAlign: "center",
            lineHeight: 1.6,
          }}>
            Looking for your profile? Look inside yourself. There&apos;s nothing here.
          </p>
        </div>
      </FeedShell>
    </ScreenWrapper>
  );
}
