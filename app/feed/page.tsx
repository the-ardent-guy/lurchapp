"use client";

import { useEffect, useState } from "react";
import { ScreenWrapper } from "@/components/layout/ScreenWrapper";
import { FeedShell } from "@/components/layout/FeedShell";
import { CardStack } from "@/components/cards/CardStack";
import { NotificationPill } from "@/components/overlays/NotificationPill";
import { ModalOverlay } from "@/components/layout/ModalOverlay";
import { MatchOverlay } from "@/components/overlays/MatchOverlay";
import { ExitInterceptModal } from "@/components/overlays/ExitInterceptModal";
import { PaywallPage } from "@/components/screens/PaywallPage";
import { ProfileDetailPanel } from "@/components/screens/ProfileDetailPanel";
import { useLurchStore } from "@/lib/store";
import type { Profile } from "@/lib/store";

const NOTIFICATIONS = [
  "Your ex just joined. We thought you should know.",
  "Someone liked your photo from 2021. Your best one.",
  "3 people visited your profile and didn't swipe. You'll never know why.",
  "Kavya looked at your profile again. Still deciding.",
  "Someone super-lurched you. We can't tell you who without a subscription.",
  "Priya is active right now — she's typed and deleted twice.",
];

export default function FeedPage() {
  const {
    profiles, currentCardIndex, matchedProfile,
    isPaywallOpen,
    advanceCard, recordSwipe,
    openPaywall, closePaywall, clearMatch,
    pushNotification,
  } = useLurchStore();

  const [detailProfile, setDetailProfile] = useState<Profile | null>(null);

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

  const handleMessage = () => {
    const name = matchedProfile?.name ?? "your match";
    clearMatch();
    openPaywall(name);
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
            />
          </div>

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
            onMessage={handleMessage}
            onKeepLurching={() => clearMatch()}
          />
        )}
      </ModalOverlay>

      {/* Paywall */}
      <ModalOverlay isOpen={isPaywallOpen} onClose={closePaywall}>
        <PaywallPage />
      </ModalOverlay>

      {/* Exit intercept */}
      <ExitInterceptModal />
    </ScreenWrapper>
  );
}
