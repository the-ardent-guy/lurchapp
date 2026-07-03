"use client";

import { useEffect, useState } from "react";

interface Props {
  text: string;
  speedMs?: number;
  onComplete?: () => void;
}

export function TypewriterText({ text, speedMs = 28, onComplete }: Props) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayed("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index >= text.length) {
      onComplete?.();
      return;
    }
    const t = setTimeout(() => {
      setDisplayed((prev) => prev + text[index]);
      setIndex((i) => i + 1);
    }, speedMs);
    return () => clearTimeout(t);
  }, [index, text, speedMs, onComplete]);

  return (
    <span style={{ fontFamily: "var(--font-display)", fontSize: "15px", lineHeight: "1.5", color: "#F0EDED" }}>
      {displayed}
      {index < text.length && (
        <span className="animate-pulse" style={{ color: "#E94057" }}>|</span>
      )}
    </span>
  );
}
