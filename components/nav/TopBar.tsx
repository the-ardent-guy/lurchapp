"use client";

import { useRouter } from "next/navigation";
import { useLurchStore } from "@/lib/store";

export function TopBar() {
  const router = useRouter();
  const { setTransitionDirection, isDark, toggleTheme } = useLurchStore();

  const handleAI = () => {
    setTransitionDirection("up");
    router.push("/ai");
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
      {/* Theme toggle — left */}
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center shrink-0"
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "14px",
          background: "transparent",
          border: "1px solid var(--app-border)",
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

      {/* Center — title + city */}
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
          Mumbai, MH
        </span>
      </div>

      {/* AI button — right */}
      <button
        onClick={handleAI}
        className="flex items-center justify-center shrink-0"
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "14px",
          background: "transparent",
          border: "1px solid var(--app-border)",
        }}
        aria-label="AI Wingman"
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "16px",
            fontWeight: 600,
            color: "#E94057",
          }}
        >
          AI
        </span>
      </button>
    </div>
  );
}
