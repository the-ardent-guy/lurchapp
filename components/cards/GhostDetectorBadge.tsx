"use client";

import { Ghost } from "lucide-react";

interface Props {
  risk: number;
}

export function GhostDetectorBadge({ risk }: Props) {
  const isHigh = risk >= 65;
  return (
    <div
      className="flex items-center gap-1.5 px-2.5 py-1 rounded"
      style={{
        background: "#1E1410",
        border: `1px solid ${isHigh ? "#C44B4B" : "#6B1E23"}`,
        borderRadius: "8px",
      }}
    >
      <Ghost size={12} color={isHigh ? "#C44B4B" : "#6B1E23"} />
      <span
        className="text-xs font-medium"
        style={{ fontFamily: "var(--font-ui)", color: isHigh ? "#C44B4B" : "#6B1E23" }}
      >
        Ghost Detector™ {isHigh ? "HIGH RISK" : "ACTIVE"}
      </span>
    </div>
  );
}
