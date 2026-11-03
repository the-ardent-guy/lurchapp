"use client";

import { useState } from "react";

export default function FeatureFlip({
  front,
  frontSub,
  stamp,
  back,
}: {
  front: string;
  frontSub: string;
  stamp: string;
  back: string;
}) {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      type="button"
      className="flip"
      aria-pressed={pressed}
      onClick={() => setPressed((v) => !v)}
    >
      <span className="flip-inner">
        <span className="flip-face flip-front">
          <span className="flip-hint">Flip</span>
          <span>
            <span className="serif" style={{ fontSize: "20px", display: "block", marginBottom: "8px" }}>
              {front}
            </span>
            <span style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.5 }}>{frontSub}</span>
          </span>
        </span>

        <span className="flip-face flip-back">
          <span className="stamp" style={{ fontSize: "16px", alignSelf: "flex-start" }}>
            {stamp}
          </span>
          <span style={{ fontSize: "16px", color: "var(--text)", lineHeight: 1.5 }}>{back}</span>
        </span>
      </span>
    </button>
  );
}
