"use client";

import { useLurchStore } from "@/lib/store";
import { CTAButton } from "@/components/inputs/CTAButton";

export function LikesLockPanel() {
  const openPaywall = useLurchStore((s) => s.openPaywall);

  return (
    <div
      className="px-4 py-3 flex items-center gap-3 shrink-0"
      style={{ background: "#1A1612", borderBottom: "1px solid #2E2720" }}
    >
      {/* Blurred avatars */}
      <div className="flex -space-x-2">
        {["#3A2020", "#1A2A35", "#2A1A30", "#251A10"].map((color, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full border"
            style={{
              background: color,
              borderColor: "#0F0D0B",
              filter: "blur(3px)",
            }}
          />
        ))}
      </div>
      <div className="flex-1">
        <p className="text-xs font-medium" style={{ fontFamily: "var(--font-ui)", color: "#EDE8DF" }}>
          4 people liked you
        </p>
        <p className="text-xs" style={{ fontFamily: "var(--font-ui)", color: "#8A8070" }}>
          Unlock to see who
        </p>
      </div>
      <button
        onClick={() => openPaywall("your likes")}
        className="text-xs font-semibold px-3 py-1.5 rounded"
        style={{
          fontFamily: "var(--font-ui)",
          background: "#8B1A1A",
          color: "#EDE8DF",
          borderRadius: "4px",
          letterSpacing: "0.05em",
        }}
      >
        UPGRADE
      </button>
    </div>
  );
}
