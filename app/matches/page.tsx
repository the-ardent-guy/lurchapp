"use client";

import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { MatchesShell } from "@/components/layout/MatchesShell";
import { MatchesScreen } from "@/components/screens/MatchesScreen";

export default function MatchesPage() {
  return (
    <ScreenWrapper>
      <MatchesShell>
        <MatchesScreen />
      </MatchesShell>
    </ScreenWrapper>
  );
}
