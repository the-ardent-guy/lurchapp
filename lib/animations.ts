import type { Variants } from "framer-motion";

export const slideUpScreen: Variants = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit:    { y: "-100%", opacity: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export const slideDownScreen: Variants = {
  initial: { y: "-100%", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit:    { y: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.25, ease: "easeOut" } },
  exit:    { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
};

export const fadeInSlow: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: "easeIn" } },
  exit:    { opacity: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const fadeUpStagger: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const fadeUpItem: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// whileTap only — use directly as prop, not as variant
export const scalePressProps = {
  whileTap: { scale: 0.96, transition: { duration: 0.08 } },
};

export const notificationSlide: Variants = {
  initial: { y: "-100%", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  exit:    { y: "-100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

// Applied imperatively via controls.start()
export const screenShakeSequence = {
  x: [0, -12, 12, -8, 8, -4, 4, 0],
  transition: { duration: 0.4, ease: "easeInOut" },
};

export const matchAvatarLeft: Variants = {
  initial: { x: "-60vw", opacity: 0, scale: 0.85 },
  animate: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export const matchAvatarRight: Variants = {
  initial: { x: "60vw", opacity: 0, scale: 0.85 },
  animate: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export const avatarPulseProps = {
  animate: {
    scale: [1, 1.12, 1],
    boxShadow: [
      "0 0 0 0px rgba(233,64,87,0)",
      "0 0 0 18px rgba(233,64,87,0.3)",
      "0 0 0 36px rgba(233,64,87,0)",
    ],
    transition: {
      scale: { duration: 0.4, ease: "easeInOut" as const, delay: 0.5 },
      boxShadow: { duration: 0.7, ease: "easeOut" as const, delay: 0.5 },
    },
  },
};

export const dividerDraw: Variants = {
  initial: { width: 0 },
  animate: { width: "100%", transition: { duration: 0.4, ease: "easeInOut" } },
};

export const cardStackDepth = (index: number) => ({
  scale: 1 - index * 0.04,
  y: index * 8,
  zIndex: 10 - index,
});

export const stageSlideIn: Variants = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.25, ease: "easeOut" } },
  exit:    { x: "-100%", opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
};
