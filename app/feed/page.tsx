"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { FeedShell } from "@/components/layout/FeedShell";
import { CardStack } from "@/components/cards/CardStack";
import { FeedActionRow } from "@/components/cards/FeedActionRow";
import type { SwipeSignal } from "@/components/cards/ProfileCard";
import { NotificationPill } from "@/components/overlays/NotificationPill";
import { ModalOverlay } from "@/components/layout/ModalOverlay";
import { MatchOverlay } from "@/components/overlays/MatchOverlay";
import { ExitInterceptModal } from "@/components/overlays/ExitInterceptModal";
import { PaywallPage } from "@/components/screens/PaywallPage";
import { ProfileDetailPanel } from "@/components/screens/ProfileDetailPanel";
import { GhostButton } from "@/components/inputs/GhostButton";
import { useLurchStore } from "@/lib/store";
import type { Profile } from "@/lib/store";
import { SWIPE_FATIGUE_AFTER } from "@/lib/pricing";
import { COPY } from "@/lib/copy";

const NOTIFICATIONS = [
  "Your ex just joined. We thought you should know.",
  "Someone liked your photo from 2021. Your best one.",
  "3 people visited your profile and didn't swipe. You'll never know why.",
  "Kavya looked at your profile again. Still deciding.",
  "Someone super-lurched you. We can't tell you who without a subscription.",
  "Priya is active right now — she's typed and deleted twice.",
];

export default function FeedPage() {
  const router = useRouter();
  const {
    profiles, currentCardIndex, matchedProfile,
    isPaywallOpen, swipeHistory,
    advanceCard, recordSwipe,
    closePaywall, clearMatch,
    pushNotification,
  } = useLurchStore();

  const [detailProfile, setDetailProfile] = useState<Profile | null>(null);
  const [swipeSignal, setSwipeSignal] = useState<SwipeSignal | null>(null);
  const [fatigueOpen, setFatigueOpen] = useState(false);
  const [fatigueShown, setFatigueShown] = useState(false);

  // Swipe-fatigue interstitial — once, after 12 swipes (P1-12).
  useEffect(() => {
    if (!fatigueShown && swipeHistory.length >= SWIPE_FATIGUE_AFTER) {
      setFatigueOpen(true);
      setFatigueShown(true);
    }
  }, [swipeHistory.length, fatigueShown]);

  const triggerSwipe = (dir: "left" | "right" | "up") =>
    setSwipeSignal((s) => ({ dir, nonce: (s?.nonce ?? 0) + 1 }));

  // Schedule randomised notifications
  useEffect(() => {
    const shuffled = [...NOTIFICATIONS].sort(() => Math.random() - 0.5);
    const baseDelays = [4000, 22000, 45000, 72000, 105000];
    const timers = baseDelays.map((base, i) => {
      const delay = base + Math.floor(Math.random() * 7000);
      return setTimeout(() => {
        pushNotification({
          message: shuffled[i % shuffled.length],
          autoDismissMs: 4500,
        });
      }, delay);
    });
    return () => timers.forEach(clearTimeout);
  }, [pushNotification]);

  const handleSwipe = (direction: "left" | "right") => {
    const current = profiles[currentCardIndex];
    if (!current) return;
    recordSwipe(direction, current.id);
    advanceCard();
  };

  const handleSwipeUp = () => {
    const current = profiles[currentCardIndex];
    if (current) setDetailProfile(current);
  };

  // Pass/like from within the detail panel — closes panel and records swipe
  const handleDetailPass = () => {
    setDetailProfile(null);
    handleSwipe("left");
  };

  const handleDetailLike = () => {
    setDetailProfile(null);
    handleSwipe("right");
  };

  const handleConversation = () => {
    const name = matchedProfile?.name ?? "your match";
    clearMatch();
    router.push(`/chat?with=${encodeURIComponent(name)}`);
  };

  return (
    <ScreenWrapper>
      <FeedShell>
        <div className="flex flex-col h-full" style={{ position: "relative" }}>
          {/* Notification pill */}
          <NotificationPill />

          {/* Card area — fills all remaining space down to the tab bar */}
          <div className="flex-1 relative">
            <CardStack
              profiles={profiles}
              currentIndex={currentCardIndex}
              onSwipeLeft={() => handleSwipe("left")}
              onSwipeRight={() => handleSwipe("right")}
              onSwipeUp={handleSwipeUp}
              swipeSignal={swipeSignal}
            />
          </div>

          {/* Visible Like / Pass chrome (P0-03) + Super Lurch (P1-14) */}
          <FeedActionRow
            disabled={!profiles[currentCardIndex]}
            onPass={() => triggerSwipe("left")}
            onLike={() => triggerSwipe("right")}
            onDetails={() => triggerSwipe("up")}
            onSuper={() => {
              pushNotification({ message: COPY.superResult, autoDismissMs: 3500 });
              triggerSwipe("right");
            }}
          />

          {/* Profile detail — slides up over feed */}
          <ProfileDetailPanel
            profile={detailProfile}
            onClose={() => setDetailProfile(null)}
            onPass={handleDetailPass}
            onLike={handleDetailLike}
          />
        </div>
      </FeedShell>

      {/* Match overlay */}
      <ModalOverlay isOpen={!!matchedProfile} preventClose>
        {matchedProfile && (
          <MatchOverlay
            profile={matchedProfile}
            onKeepSwiping={() => clearMatch()}
            onConversation={handleConversation}
          />
        )}
      </ModalOverlay>

      {/* Paywall */}
      <ModalOverlay isOpen={isPaywallOpen} onClose={closePaywall}>
        <PaywallPage />
      </ModalOverlay>

      {/* Swipe fatigue (P1-12) */}
      <ModalOverlay isOpen={fatigueOpen} onClose={() => setFatigueOpen(false)}>
        <div style={{ padding: "32px 24px calc(env(safe-area-inset-bottom, 0px) + 24px)" }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.18em", color: "#C44B4B", marginBottom: "14px" }}>
            A quick check-in
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "26px", fontWeight: 600, lineHeight: 1.2, color: "#F5F0E8", marginBottom: "20px" }}>
            {COPY.fatigue}
          </h2>
          <a
            href="https://www.google.com/maps/search/parks+near+me"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setFatigueOpen(false)}
            style={{ display: "block", width: "100%", textAlign: "center", background: "#6B1E23", border: "1px solid rgba(245,240,232,0.14)", borderRadius: "12px", padding: "16px", fontFamily: "var(--font-ui)", fontSize: "13px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#F5F0E8", textDecoration: "none", marginBottom: "4px" }}
          >
            Touch grass
          </a>
          <GhostButton dim onClick={() => setFatigueOpen(false)}>
            Continue damaging
          </GhostButton>
        </div>
      </ModalOverlay>

      {/* Exit intercept */}
      <ExitInterceptModal />
    </ScreenWrapper>
  );
}
