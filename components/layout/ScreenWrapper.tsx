"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useLurchStore } from "@/lib/store";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function ScreenWrapper({ children, className = "" }: Props) {
  const pathname = usePathname();
  const storeDirection = useLurchStore((s) => s.activeTransitionDirection);

  // Always-current ref so exit animation sees the direction set at nav time
  const directionRef = useRef(storeDirection);
  directionRef.current = storeDirection;

  const variants: Variants = {
    initial: () => ({
      y: directionRef.current === "down" ? "-60%" : "60%",
      opacity: 0,
    }),
    animate: {
      y: 0,
      opacity: 1,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transition: { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] as any },
    },
    exit: () => ({
      y: directionRef.current === "down" ? "60%" : "-60%",
      opacity: 0,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      transition: { duration: 0.22, ease: [0.55, 0, 1, 0.45] as any },
    }),
  };

  return (
    <motion.div
      key={pathname}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`h-full w-full overflow-hidden ${className}`}
      style={{ position: "absolute", inset: 0 }}
    >
      {children}
    </motion.div>
  );
}
