"use client";

import { ProfileCard } from "./ProfileCard";
import type { Profile } from "@/lib/store";

interface Props {
  profiles: Profile[];
  currentIndex: number;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onSwipeUp: () => void;
}

export function CardStack({ profiles, currentIndex, onSwipeLeft, onSwipeRight, onSwipeUp }: Props) {
  const visible = profiles.slice(currentIndex, currentIndex + 3);

  if (visible.length === 0) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-8">
          <p
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "var(--font-display)", color: "#2E2720" }}
          >
            NO MORE PROFILES
          </p>
          <p
            className="text-sm italic"
            style={{ fontFamily: "var(--font-serif)", color: "#8A8070" }}
          >
            You&apos;ve seen everyone. They&apos;ve seen you. No one has moved.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute" style={{ inset: "8px 20px 12px" }}>
      {[...visible].reverse().map((profile, reversedIndex) => {
        const stackIndex = visible.length - 1 - reversedIndex;
        const isTop = stackIndex === 0;
        return (
          <ProfileCard
            key={profile.id}
            profile={profile}
            isTop={isTop}
            stackIndex={stackIndex}
            onSwipeLeft={isTop ? onSwipeLeft : () => {}}
            onSwipeRight={isTop ? onSwipeRight : () => {}}
            onSwipeUp={isTop ? onSwipeUp : undefined}
          />
        );
      })}
    </div>
  );
}
