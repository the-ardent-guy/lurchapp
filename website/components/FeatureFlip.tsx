"use client";

import { useState } from "react";
import {
  HeartBreak,
  Ghost,
  FileText,
  RocketLaunch,
  Funnel,
  Vibrate,
  type Icon,
} from "@phosphor-icons/react";

// Uniform line-icon set (Phosphor, light weight) — one per feature.
const ICONS: Record<string, Icon> = {
  wound: HeartBreak,
  ghost: Ghost,
  record: FileText,
  boost: RocketLaunch,
  filters: Funnel,
  haptics: Vibrate,
};

export default function FeatureFlip({
  front,
  frontSub,
  stamp,
  back,
  iconKey,
  index,
}: {
  front: string;
  frontSub: string;
  stamp: string;
  back: string;
  iconKey: string;
  index: string;
}) {
  const [pressed, setPressed] = useState(false);
  const IconCmp = ICONS[iconKey];

  return (
    <button
      type="button"
      className="flip"
      aria-pressed={pressed}
      onClick={() => setPressed((v) => !v)}
    >
      <span className="flip-inner">
        <span className="flip-face flip-front">
          <span className="flip-index" aria-hidden="true">{index}</span>
          <span className="flip-top">
            <span className="flip-hint">Flip</span>
            {IconCmp && (
              <span className="flip-icon" aria-hidden="true">
                <IconCmp size={32} weight="light" />
              </span>
            )}
          </span>
          <span className="flip-titles">
            <span className="flip-title serif">{front}</span>
            <span className="flip-sub serif">{frontSub}</span>
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
