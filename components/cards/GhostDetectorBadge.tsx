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
        border: `1px solid ${isHigh ? "#C0392B" : "#8B1A1A"}`,
        borderRadius: "8px",
      }}
    >
      <Ghost size={12} color={isHigh ? "#C0392B" : "#8B1A1A"} />
      <span
        className="text-xs font-medium"
        style={{ fontFamily: "var(--font-ui)", color: isHigh ? "#C0392B" : "#8B1A1A" }}
      >
        Ghost Detector™ {isHigh ? "HIGH RISK" : "ACTIVE"}
      </span>
    </div>
  );
}
