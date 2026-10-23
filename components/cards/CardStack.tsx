"use client";

import { useRouter } from "next/navigation";
import { ProfileCard, type SwipeSignal } from "./ProfileCard";
import type { Profile } from "@/lib/store";
import { COPY } from "@/lib/copy";

interface Props {
  profiles: Profile[];
  currentIndex: number;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  onSwipeUp: () => void;
  swipeSignal?: SwipeSignal | null;
}

export function CardStack({ profiles, currentIndex, onSwipeLeft, onSwipeRight, onSwipeUp, swipeSignal }: Props) {
  const router = useRouter();
  const visible = profiles.slice(currentIndex, currentIndex + 3);

  if (visible.length === 0) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center" style={{ padding: "0 28px", maxWidth: "340px" }}>
          <p
            className="mb-2"
            style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 700, color: "#3D3D3D" }}
          >
            NO MORE PROFILES
          </p>
          <p
            style={{ fontFamily: "var(--font-serif)", fontSize: "14px", fontStyle: "italic", lineHeight: 1.6, color: "#9A958C", marginBottom: "24px" }}
          >
            {COPY.emptySecure}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <button
              onClick={() => router.push("/filters")}
              style={{ padding: "13px", background: "#6B1E23", border: "1px solid rgba(245,240,232,0.14)", borderRadius: "12px", fontFamily: "var(--font-ui)", fontSize: "13px", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: "#F5F0E8", cursor: "pointer" }}
            >
              Adjust filters
            </button>
            <a
              href="https://www.google.com/maps/search/parks+near+me"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "12px", background: "rgba(245,240,232,0.05)", border: "none", borderRadius: "12px", fontFamily: "var(--font-ui)", fontSize: "13px", color: "#9A958C", textDecoration: "none" }}
            >
              Touch grass
            </a>
          </div>
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
            swipeSignal={isTop ? swipeSignal : null}
          />
        );
      })}
    </div>
  );
}
