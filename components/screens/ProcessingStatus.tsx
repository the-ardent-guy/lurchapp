"use client";

import { useState } from "react";
import { TypewriterText } from "@/components/typography/TypewriterText";
import { PROCESSING_MESSAGES } from "@/lib/data/processingMessages";

interface Props {
  onSequenceComplete: () => void;
  reducedMotion?: boolean;
}

export function ProcessingStatus({ onSequenceComplete, reducedMotion = false }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reduced motion: show every line at once, no typewriter, no re-roll.
  if (reducedMotion) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {PROCESSING_MESSAGES.map((msg, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: "11px", lineHeight: "1.8", flexShrink: 0, color: "#C44B4B", letterSpacing: "0.05em" }}>✓</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "15px", lineHeight: "1.5", color: "#AEADAD" }}>{msg}</span>
          </div>
        ))}
      </div>
    );
  }

  const handleMessageComplete = () => {
    if (currentIndex >= PROCESSING_MESSAGES.length - 1) {
      setTimeout(onSequenceComplete, 400);
      return;
    }
    setTimeout(() => {
      setCurrentIndex((i) => i + 1);
    }, 600);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {PROCESSING_MESSAGES.slice(0, currentIndex + 1).map((msg, i) => {
        const isDone = i < currentIndex;
        const isActive = i === currentIndex;

        return (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
            <span style={{
              fontFamily: "var(--font-ui)",
              fontSize: "11px",
              lineHeight: "1.8",
              flexShrink: 0,
              color: isDone ? "#C44B4B" : "#4A4540",
              letterSpacing: "0.05em",
            }}>
              {isDone ? "✓" : "▸"}
            </span>
            {isActive ? (
              <TypewriterText
                text={msg}
                speedMs={28}
                onComplete={handleMessageComplete}
              />
            ) : (
              <span style={{
                fontFamily: "var(--font-display)",
                fontSize: "15px",
                lineHeight: "1.5",
                color: isDone ? "#AEADAD" : "#F0EDED",
              }}>
                {msg}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
