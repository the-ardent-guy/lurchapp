"use client";

import { useEffect, useState } from "react";
import { formatCountdown } from "@/lib/utils";

interface Props {
  expiryTimestamp: number;
  matchName: string;
}

// ⚠️ CONSTRAINT: Uses setInterval for real-time tick. Must not freeze. Not Framer Motion.
export function PaywallCountdown({ expiryTimestamp, matchName }: Props) {
  const [remaining, setRemaining] = useState(expiryTimestamp - Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(expiryTimestamp - Date.now());
    }, 1000);
    return () => clearInterval(id);
  }, [expiryTimestamp]);

  return (
    <div
      className="px-4 py-3 flex items-center justify-between"
      style={{ background: "#1E1400", borderBottom: "1px solid #2E2720" }}
    >
      <p
        className="text-sm font-medium"
        style={{ fontFamily: "var(--font-ui)", color: "#C97B2A" }}
      >
        {matchName}&apos;s message will expire in{" "}
        <span className="font-bold tabular-nums">{formatCountdown(remaining)}</span>
      </p>
    </div>
  );
}
