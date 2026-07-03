"use client";

import { motion } from "framer-motion";
import { matchAvatarLeft, matchAvatarRight, avatarPulseProps } from "@/lib/animations";

interface Props {
  userAvatarColor: string;
  matchAvatarColor: string;
  matchName: string;
  onAnimationComplete: () => void;
}

export function AvatarPairAnimation({ userAvatarColor, matchAvatarColor, matchName, onAnimationComplete }: Props) {
  return (
    <div className="flex items-center justify-center gap-2">
      <motion.div
        variants={matchAvatarLeft}
        initial="initial"
        animate="animate"
        className="w-16 h-16 rounded-full"
        style={{ background: userAvatarColor }}
      />
      <motion.div
        variants={matchAvatarRight}
        initial="initial"
        animate="animate"
        onAnimationComplete={onAnimationComplete}
        className="flex flex-col items-center"
      >
        <motion.div
          {...avatarPulseProps}
          className="w-16 h-16 rounded-full"
          style={{ background: matchAvatarColor }}
        />
        <span
          className="text-xs mt-1"
          style={{ fontFamily: "var(--font-ui)", color: "#8A8070" }}
        >
          {matchName}
        </span>
      </motion.div>
    </div>
  );
}
