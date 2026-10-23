"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLurchStore } from "@/lib/store";

export function NotificationPill() {
  const queue = useLurchStore((s) => s.queue);
  const dismissNotification = useLurchStore((s) => s.dismissNotification);
  const current = queue[0];

  useEffect(() => {
    if (!current || current.autoDismissMs <= 0) return;
    const t = setTimeout(() => dismissNotification(current.id), current.autoDismissMs);
    return () => clearTimeout(t);
  }, [current?.id, current?.autoDismissMs, dismissNotification]);

  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        right: "14px",
        zIndex: 60,
        pointerEvents: "none",
        maxWidth: "270px",
      }}
    >
      <AnimatePresence mode="wait">
        {current && (
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: "calc(100% + 24px)" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "calc(100% + 24px)" }}
            transition={{ type: "spring", stiffness: 400, damping: 32, mass: 0.8 }}
            style={{
              background: "#161616",
              border: "1px solid #3D3D3D",
              borderLeft: "2px solid #6B1E23",
              borderRadius: "2px",
              boxShadow: "0px 4px 16px rgba(0,0,0,0.5)",
              padding: "9px 14px",
              pointerEvents: "auto",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "1.45",
                color: "#F5F0E8",
              }}
            >
              {current.message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
