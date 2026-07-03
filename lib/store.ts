"use client";

import { create } from "zustand";
import type { StateCreator } from "zustand";
import { STATIC_PROFILES } from "./data/profiles";

// ─── Shared Types ──────────────────────────────────────────────────────────────

export type AttachmentStyle = "anxious" | "avoidant" | "disorganized" | "secure";
export type SwipeDirection = "left" | "right";
export type ExitInterceptStage = 0 | 1 | 2 | 3;
export type TabId = "feed" | "messages" | "profile" | "wingman";

export interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  look: string;
  photoColor: string;
  wounds: string[];
  attachmentStyle: AttachmentStyle;
  attachmentLabel: string;
  ghostRisk: number;
  vibeScore: number | null;
  hasGhostDetector: boolean;
  hiddenNote: string;
  inAppGuide?: string;
  distance?: string;
  promptQuestion?: string;
  promptAnswer?: string;
  exReview?: string;
  gender?: "man" | "woman";
  photoUrl?: string;
  threeOrLie?: {
    statements: [string, string, string, string];
    lieIndex: 0 | 1 | 2 | 3;
  };
  matchedBecause?: string;
  shadowPrompt?: { question: string; answer: string };
  extraBadges?: { label: string; small?: boolean }[];
}

export interface Notification {
  id: string;
  message: string;
  createdAt: number;
  autoDismissMs: number;
}

export interface ScorePayload {
  woundDepth: number;
  ghostRisk: number;
  patternRepeat: number;
  readiness: number;
}

// ─── Slices ────────────────────────────────────────────────────────────────────

interface OnboardingSlice {
  gender: string | null;
  preference: string | null;
  attachmentStyle: AttachmentStyle | null;
  secureLoopRound: number;
  wounds: string[];
  honestAnswer: string | null;
  shadowWorkAnswer: string | null;
  setGender: (gender: string) => void;
  setPreference: (pref: string) => void;
  setAttachmentStyle: (style: AttachmentStyle) => void;
  incrementSecureLoop: () => void;
  toggleWound: (wound: string) => void;
  setHonestAnswer: (answer: string) => void;
  setShadowWorkAnswer: (answer: string) => void;
  resetOnboarding: () => void;
}

interface ScoreSlice {
  woundDepth: number | null;
  ghostRisk: number | null;
  patternRepeat: number | null;
  readiness: number | null;
  scoresRevealed: boolean;
  setScores: (payload: ScorePayload) => void;
  revealScores: () => void;
}

interface FeedSlice {
  profiles: Profile[];
  currentCardIndex: number;
  matchedProfile: Profile | null;
  hasMatched: boolean;
  typingIndicatorActive: boolean;
  swipeHistory: Array<{ direction: SwipeDirection; profileId: string; timestamp: number }>;
  advanceCard: () => void;
  setMatch: (profile: Profile) => void;
  clearMatch: () => void;
  setTypingIndicator: (active: boolean) => void;
  recordSwipe: (direction: SwipeDirection, profileId: string) => void;
}

interface PaywallSlice {
  matchName: string | null;
  expiryTimestamp: number | null;
  isPaywallOpen: boolean;
  openPaywall: (matchName: string) => void;
  closePaywall: () => void;
}

interface NotificationSlice {
  queue: Notification[];
  pushNotification: (n: Omit<Notification, "id" | "createdAt">) => void;
  dismissNotification: (id: string) => void;
  clearAllNotifications: () => void;
}

interface ExitInterceptSlice {
  stage: ExitInterceptStage;
  isIntercepting: boolean;
  beginIntercept: () => void;
  advanceStage: () => void;
  resetIntercept: () => void;
}

interface UISlice {
  activeTab: TabId;
  activeTransitionDirection: "up" | "down";
  isDark: boolean;
  setActiveTab: (tab: TabId) => void;
  setTransitionDirection: (direction: "up" | "down") => void;
  toggleTheme: () => void;
}

type LurchStore = OnboardingSlice &
  ScoreSlice &
  FeedSlice &
  PaywallSlice &
  NotificationSlice &
  ExitInterceptSlice &
  UISlice;

// ─── Slice creators ───────────────────────────────────────────────────────────

function filterProfiles(pref: string | null): Profile[] {
  if (pref !== "women" && pref !== "men") return STATIC_PROFILES;
  return STATIC_PROFILES.filter((p) => !p.gender || p.gender === (pref === "men" ? "man" : "woman"));
}

const createOnboardingSlice: StateCreator<LurchStore, [], [], OnboardingSlice> = (set) => ({
  gender: null,
  preference: null,
  attachmentStyle: null,
  secureLoopRound: 0,
  wounds: [],
  honestAnswer: null,
  shadowWorkAnswer: null,
  setGender: (gender) => set({ gender }),
  setPreference: (pref) => set({ preference: pref, profiles: filterProfiles(pref), currentCardIndex: 0 }),
  setAttachmentStyle: (style) => set({ attachmentStyle: style }),
  incrementSecureLoop: () =>
    set((s) => ({ secureLoopRound: Math.min(s.secureLoopRound + 1, 5) })),
  toggleWound: (wound) =>
    set((s) => ({
      wounds: s.wounds.includes(wound)
        ? s.wounds.filter((w) => w !== wound)
        : [...s.wounds, wound],
    })),
  setHonestAnswer: (answer) => set({ honestAnswer: answer }),
  setShadowWorkAnswer: (answer) => set({ shadowWorkAnswer: answer }),
  resetOnboarding: () =>
    set({
      gender: null,
      preference: null,
      attachmentStyle: null,
      secureLoopRound: 0,
      wounds: [],
      honestAnswer: null,
      shadowWorkAnswer: null,
    }),
});

const createScoreSlice: StateCreator<LurchStore, [], [], ScoreSlice> = (set) => ({
  woundDepth: null,
  ghostRisk: null,
  patternRepeat: null,
  readiness: null,
  scoresRevealed: false,
  setScores: (payload) =>
    set({
      woundDepth: payload.woundDepth,
      ghostRisk: payload.ghostRisk,
      patternRepeat: payload.patternRepeat,
      readiness: payload.readiness,
    }),
  revealScores: () => set({ scoresRevealed: true }),
});

const createFeedSlice: StateCreator<LurchStore, [], [], FeedSlice> = (set, get) => ({
  profiles: STATIC_PROFILES,
  currentCardIndex: 0,
  matchedProfile: null,
  hasMatched: false,
  typingIndicatorActive: false,
  swipeHistory: [],
  advanceCard: () => {
    const { currentCardIndex, profiles, swipeHistory } = get();
    if (profiles.length === 0) return;
    const rightSwipes = swipeHistory.filter((s) => s.direction === "right").length;
    if (rightSwipes === 2) {
      const matchProfile = profiles[currentCardIndex];
      get().setMatch(matchProfile);
    }
    set((s) => ({
      currentCardIndex: (s.currentCardIndex + 1) % s.profiles.length,
    }));
  },
  setMatch: (profile) => set({ matchedProfile: profile, hasMatched: true }),
  clearMatch: () => set({ matchedProfile: null }),
  setTypingIndicator: (active) => set({ typingIndicatorActive: active }),
  recordSwipe: (direction, profileId) =>
    set((s) => ({
      swipeHistory: [
        ...s.swipeHistory,
        { direction, profileId, timestamp: Date.now() },
      ],
    })),
});

const createPaywallSlice: StateCreator<LurchStore, [], [], PaywallSlice> = (set) => ({
  matchName: null,
  expiryTimestamp: null,
  isPaywallOpen: false,
  openPaywall: (matchName) =>
    set((s) => ({
      matchName,
      expiryTimestamp: s.expiryTimestamp ?? Date.now() + 24 * 60 * 60 * 1000,
      isPaywallOpen: true,
    })),
  closePaywall: () => set({ isPaywallOpen: false }),
});

const createNotificationSlice: StateCreator<LurchStore, [], [], NotificationSlice> = (set) => ({
  queue: [],
  pushNotification: (n) =>
    set((s) => ({
      queue: [
        ...s.queue,
        { ...n, id: `${Date.now()}-${Math.random()}`, createdAt: Date.now() },
      ],
    })),
  dismissNotification: (id) =>
    set((s) => ({ queue: s.queue.filter((n) => n.id !== id) })),
  clearAllNotifications: () => set({ queue: [] }),
});

const createExitInterceptSlice: StateCreator<LurchStore, [], [], ExitInterceptSlice> = (set) => ({
  stage: 0,
  isIntercepting: false,
  beginIntercept: () => set({ isIntercepting: true, stage: 1 }),
  advanceStage: () =>
    set((s) => ({
      stage: s.stage < 3 ? ((s.stage + 1) as ExitInterceptStage) : s.stage,
    })),
  resetIntercept: () => set({ stage: 0, isIntercepting: false }),
});

const createUISlice: StateCreator<LurchStore, [], [], UISlice> = (set) => ({
  activeTab: "feed",
  activeTransitionDirection: "up",
  isDark: true,
  setActiveTab: (tab) => set({ activeTab: tab }),
  setTransitionDirection: (direction) => set({ activeTransitionDirection: direction }),
  toggleTheme: () => set((s) => ({ isDark: !s.isDark })),
});

// ─── Store ────────────────────────────────────────────────────────────────────

export const useLurchStore = create<LurchStore>()((...a) => ({
  ...createOnboardingSlice(...a),
  ...createScoreSlice(...a),
  ...createFeedSlice(...a),
  ...createPaywallSlice(...a),
  ...createNotificationSlice(...a),
  ...createExitInterceptSlice(...a),
  ...createUISlice(...a),
}));
