"use client";

import { useEffect, useState } from "react";
import { ACTIVITY_MESSAGES } from "@/lib/data/activityMessages";

export function ActivityBanner() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % ACTIVITY_MESSAGES.length);
        setVisible(true);
      }, 400);
    }, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="px-4 py-2 shrink-0 transition-opacity duration-400"
      style={{
        background: "#1A1612",
        borderBottom: "1px solid #2E2720",
        opacity: visible ? 1 : 0,
      }}
    >
      <p
        className="text-xs"
        style={{ fontFamily: "var(--font-ui)", color: "#C97B2A" }}
      >
        {ACTIVITY_MESSAGES[index]}
      </p>
    </div>
  );
}
