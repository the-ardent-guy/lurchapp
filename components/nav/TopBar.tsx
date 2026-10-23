"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLurchStore } from "@/lib/store";

const BLR_AREAS = [
  "Koramangala, BLR",
  "Indiranagar, BLR",
  "HSR Layout, BLR",
  "Whitefield, BLR",
  "Jayanagar, BLR",
  "MG Road, BLR",
];

export function TopBar() {
  const router = useRouter();
  const { setTransitionDirection, isDark, toggleTheme } = useLurchStore();
  const [area, setArea] = useState(BLR_AREAS[0]);

  /* Randomised only after mount - avoids SSR/client hydration mismatch */
  useEffect(() => {
    setArea(BLR_AREAS[Math.floor(Math.random() * BLR_AREAS.length)]);
  }, []);

  const handleAI = () => {
    setTransitionDirection("up");
    router.push("/ai");
  };

  const handleFilters = () => {
    setTransitionDirection("up");
    router.push("/filters");
  };

  return (
    <div
      className="flex items-center shrink-0 relative z-20"
      style={{
        paddingTop: "calc(env(safe-area-inset-top, 0px) + 14px)",
        paddingBottom: "14px",
        paddingLeft: "16px",
        paddingRight: "16px",
        background: "var(--app-bg)",
        borderBottom: "1px solid var(--app-border)",
        gap: "12px",
      }}
    >
      {/* Theme toggle - left */}
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center shrink-0"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "12px",
          background: "rgba(255,255,255,0.05)",
          border: "none",
        }}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="3.5" stroke="white" strokeWidth="1.5"/>
            <line x1="10" y1="1.5" x2="10" y2="3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="10" y1="16.5" x2="10" y2="18.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="1.5" y1="10" x2="3.5" y2="10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="16.5" y1="10" x2="18.5" y2="10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="3.61" y1="3.61" x2="5.05" y2="5.05" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="14.95" y1="14.95" x2="16.39" y2="16.39" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="16.39" y1="3.61" x2="14.95" y2="5.05" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="5.05" y1="14.95" x2="3.61" y2="16.39" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M17 13.5A7.5 7.5 0 0 1 6.5 3 7.5 7.5 0 1 0 17 13.5z" stroke="#1A1210" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* Center - title + city */}
      <div className="flex-1 flex flex-col items-center">
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "22px",
            fontWeight: 600,
            color: "var(--app-text)",
            lineHeight: 1,
          }}
        >
          Discover
        </span>
        <span
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "11px",
            color: "var(--app-whisper)",
            lineHeight: 1,
            marginTop: "4px",
          }}
        >
          {area}
        </span>
      </div>

      {/* Filters - right */}
      <button
        onClick={handleFilters}
        className="flex items-center justify-center shrink-0"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "12px",
          background: "rgba(255,255,255,0.05)",
          border: "none",
        }}
        aria-label="Filters"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5h14M5.5 10h9M8 15h4" stroke="var(--app-text)" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>

      {/* AI button - right */}
      <button
        onClick={handleAI}
        className="flex items-center justify-center shrink-0"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "12px",
          background: "rgba(255,255,255,0.05)",
          border: "none",
        }}
        aria-label="AI Wingman"
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "16px",
            fontWeight: 600,
            color: "#C44B4B",
          }}
        >
          AI
        </span>
      </button>
    </div>
  );
}
