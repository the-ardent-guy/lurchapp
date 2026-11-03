// ─── Lurch copy bank ─────────────────────────────────────────────────────────
// Paste-ready strings from the handoff spec §5. Centralised so prices/wording
// stay consistent across screens. India-specific gags are kept verbatim.

import { CURIOSITY_TAX_INR, BOOST_SPIN_INR, SUPER_LURCH_INR, OPENER_SMILE_INR } from "./pricing";

export const COPY = {
  // Curiosity Tax (subscription paywall)
  curiosityTitle: "Someone liked you. Identity is a premium feature.",
  curiosityBody: "This is how the industry funds itself.",
  curiosityTechnique: "Loss Aversion",
  curiosityPrimary: `Unlock my dopamine (₹${CURIOSITY_TAX_INR}/mo)`,
  curiositySecondary: "I'm fine being free and unseen",
  curiosityAlt: "Subscribe to your loneliness",

  // Sign in
  signinSheet: "You do not have an account. Loneliness is free.",

  // Match overlay
  matchTitle: "It's a Lurch",
  matchPrimary: "Keep Swiping",
  matchSecondary: "Pretend you want a conversation",
  ghostGate: "87% chance they vanish after 'haha yeah.' You'll still open with 'hey.'",

  // Filters
  heightTitle: "Industry Standard: 6′0″+",
  heightCounter: (n: number) => `Humans discarded: ${n}`,
  heightEscape: "Actually, I have a personality.",
  classist: "Classist Mode",
  classistCaption: "Romance is a luxury good.",
  heightDefaultNote: "Default: 6′0″+. We've removed a convenient majority of humans.",

  // Boost roulette
  boostPitch: "Buy 30 minutes of maybe. Odds not disclosed. Love not included.",
  boostResult: "You were seen by 12 people who will not message you.",
  boostCta: `Spin for ₹${BOOST_SPIN_INR}`,

  // Profile / XP
  xpHud: "Level 7 Lonely. 2,400 XP to Platinum Emptiness.",
  skuShip: "Ships with emotional unavailability.",

  // Exit interceptor
  exit1: "Are you sure? There's someone 0.4 km away who also has daddy issues.",
  exit3: "We'll keep your profile warm for 30 days of relapse.",

  // About
  aboutParadox: "If this worked, we'd be broke.",
  aboutChurn: "Successful couples are churn. Thank you for staying single.",

  // Opening line marketplace
  openerFree: "Hey",
  openerPaid: "Hey :)",
  openerPremium: "Actually reading their profile",

  // States
  fatigue: "You've judged 91 humans in 11 minutes. Self-esteem: loading…",
  emptySecure: "Secure attachment users are outside. Try a park.",
  notFound: "This route ghosted you.",
  notFoundSub: "404: expectations.",
  wrapped: "You swiped left on 400 people. Your type is still your ex.",
  exRecord: "Their ex left a review. Blurred for your protection and our ARR.",
  superLurch: `Spend ₹${SUPER_LURCH_INR} to jump the queue of people they will also ignore.`,
  superResult: "Delivered to their Notifications Graveyard.",
  inventory: "I agree to become inventory.",

  openerSmileInr: OPENER_SMILE_INR,
} as const;

// Real citations for /truth and About (spec §6). Labelled research vs satire.
export const TRUTH_CITATIONS = [
  {
    author: "Nader (2025)",
    title: "Gamification of dating online",
    url: "https://onlinelibrary.wiley.com/doi/full/10.1111/theo.12549",
  },
  {
    author: "Pettersen & Karlsen (AoIR 2023)",
    title: "Dark patterns & gamification in dating apps",
    url: "https://spir.aoir.org/ojs/index.php/spir/article/download/13478/11426/85839",
  },
  {
    author: "Boyle / The Guardian (Nov 2024)",
    title: "Addicted to love: how dating apps exploit their users",
    url: "https://www.theguardian.com/lifeandstyle/2024/nov/03/addicted-to-love-how-dating-apps-exploit-their-users",
  },
  {
    author: "Computers in Human Behavior (2024)",
    title: "Systematic review: dating apps, body image & mental health",
    url: "https://doi.org/10.1016/j.chb.2024.108515",
  },
  {
    author: "YouGov (Jun 2025)",
    title: "Should dating apps let people filter by height?",
    url: "https://yougov.com/en-gb/articles/52319-should-dating-apps-let-people-filter-by-height",
  },
  {
    author: "Computers in Human Behavior (2021)",
    title: "Partner choice overload in online dating",
    url: "https://www.sciencedirect.com/science/article/pii/S0747563221003009",
  },
] as const;
