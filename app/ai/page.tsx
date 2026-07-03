"use client";

import { useRouter } from "next/navigation";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { FeedShell } from "@/components/layout/FeedShell";
import { CTAButton } from "@/components/inputs/CTAButton";
import { GhostButton } from "@/components/inputs/GhostButton";
import { useColors } from "@/lib/theme";

export default function AIPage() {
  const router = useRouter();
  const colors = useColors();

  return (
    <ScreenWrapper>
      <FeedShell>
        <div className="h-full overflow-y-auto lurch-scroll" style={{ padding: "28px 32px 40px" }}>

          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "#E94057",
            marginBottom: "14px",
          }}>
            LURCH AI
          </p>

          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "38px",
            fontWeight: 600,
            lineHeight: "1.1",
            color: colors.text,
            marginBottom: "24px",
          }}>
            YOUR AI WINGMAN
          </h1>

          <p style={{
            fontFamily: "var(--font-ui)",
            fontSize: "17px",
            fontStyle: "italic",
            lineHeight: "1.55",
            color: colors.text,
            marginBottom: "24px",
          }}>
            You don&apos;t have to talk to anyone here. Not even once.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "28px" }}>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "15px", lineHeight: "1.65", color: colors.muted }}>
              LURCH AI chats for you. In your tone. Better than you. It reads the room, times the reply, tracks her cycle so you don&apos;t have to, and has needed to say &ldquo;I&apos;m sorry&rdquo; exactly twice.
            </p>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "15px", lineHeight: "1.65", color: colors.muted }}>
              It can also fix him. Without sitting through another forty-five minute explanation of why his ex was the problem, how the referee was wrong, or what his startup is actually trying to do.
            </p>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "15px", lineHeight: "1.65", color: colors.text, fontStyle: "italic" }}>
              Knows when to push. Knows when to disappear.
            </p>
          </div>

          <div style={{
            background: colors.surface,
            border: `1px solid ${colors.border}`,
            borderRadius: "14px",
            padding: "20px",
            marginBottom: "32px",
          }}>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "14px", fontStyle: "italic", lineHeight: "1.65", color: colors.muted }}>
              Support us enough and we&apos;ll be able to make physical clones of you.
            </p>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "14px", fontStyle: "italic", lineHeight: "1.65", color: colors.whisper, marginTop: "6px" }}>
              Wink wink.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <CTAButton onClick={() => router.push("/pay")}>LET AI BE YOU — ₹299/MO</CTAButton>
            <GhostButton dim>I&apos;ll embarrass myself, thanks</GhostButton>
          </div>

        </div>
      </FeedShell>
    </ScreenWrapper>
  );
}
