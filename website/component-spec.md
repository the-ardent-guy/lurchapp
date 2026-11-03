# Lurch App — Component Specification

**Version:** 1.0  
**Status:** Pre-build reference. No code exists yet.  
**Scope:** Screens S01–S15. All 52 components defined.

---

## Table of Contents

1. [Component Tree](#1-component-tree)
2. [Per-Component Spec](#2-per-component-spec)
3. [Zustand Store Shape](#3-zustand-store-shape)
4. [Screen-to-Component Map](#4-screen-to-component-map)
5. [Shared Animation Variants](#5-shared-animation-variants)

---

## 1. Component Tree

### Layout / Wrappers
- AppShell
- ScreenWrapper
- OnboardingShell
- FeedShell
- ModalOverlay

### Navigation
- TabBar
- TopBar
- BackButton
- OnboardingProgress

### Inputs & Selectors
- SelectableListItem
- VirtualizedSelectList
- OptionCard
- MultiSelectGrid
- CTAButton
- GhostButton

### Cards & Surfaces
- ProfileCard
- CardStack
- ScoreCard
- StatsCard
- FeatureListItem
- ResearchDataCard
- PunchlineCard
- WoundBadge
- AttachmentBadge
- GhostDetectorBadge
- SocialProofBlock

### Overlays & Modals
- MatchOverlay
- ExitInterceptModal
- NotificationBanner
- LikesLockPanel
- ActivityBanner

### Feedback & Indicators
- ProgressBar
- TypingIndicator
- PaywallCountdown
- ScoreCountUp
- DividerLine

### Typography
- DisplayHeading
- UIText
- SerifMoment
- DarkPatternLabel
- TypewriterText
- ReflectionLine

### Screen-specific Components
- SplashLogo
- SecureLoopCounter
- ProcessingStatus
- ProcessingFootnote
- WarmNote
- ActionRow
- AvatarPairAnimation
- CandidCopyBlock
- WhatHappenedList
- ExitStageGuilty
- ExitStageDesperate
- ExitStageConfession

---

## 2. Per-Component Spec

---

### AppShell

**Category:** Layout / Wrapper  
**Used on screens:** All (S01–S15)

**Props:**
- `children: ReactNode` — screen content
- `activeTransitionDirection: 'up' | 'down'` — controls slide direction for ScreenWrapper children

**Animation states:**
- `idle` — static container, no visible animation
- `transitioning` — passes direction context down to ScreenWrapper; does not animate itself

**Notes:** Root layout component. Wraps the entire app. Manages the Framer Motion `AnimatePresence` context for route-level transitions. Reads `activeTransitionDirection` from UISlice to determine slide direction. Does not render visible chrome.

---

### ScreenWrapper

**Category:** Layout / Wrapper  
**Used on screens:** All (S01–S15)

**Props:**
- `children: ReactNode`
- `direction: 'up' | 'down'` — inherited from AppShell context; determines enter/exit variants

**Animation states:**
- `initial` — off-screen (translateY: 100% if direction=up, translateY: -100% if direction=down)
- `animate` — translateY: 0, opacity: 1, 300ms ease-out
- `exit` — translateY: -100% if direction=up, translateY: 100% if direction=down, opacity: 0, 300ms ease-out

**Notes:** Every page.tsx wraps its content in ScreenWrapper. The `direction` prop determines which `slideUpScreen` or `slideDownScreen` variant is applied. BackButton updates `activeTransitionDirection` to `'down'` before navigating; all forward links set it to `'up'`.

---

### OnboardingShell

**Category:** Layout / Wrapper  
**Used on screens:** S02, S03, S04, S04B, S05, S06, S07

**Props:**
- `children: ReactNode`
- `step: number` — current step index (1-based, for OnboardingProgress)
- `totalSteps: number` — total number of onboarding steps (7, excluding S04B)
- `showBack: boolean` — whether to render BackButton
- `onBack?: () => void` — override for back behaviour; if omitted, uses router.back()

**Animation states:**
- `idle` — static wrapper

**Notes:** Renders OnboardingProgress at the top and BackButton beside it. Provides consistent vertical padding and max-width constraints for onboarding screens. S04B (SecureExitPage) uses this shell with `showBack: false`.

---

### FeedShell

**Category:** Layout / Wrapper  
**Used on screens:** S09

**Props:**
- `children: ReactNode`

**Animation states:**
- `idle` — static

**Notes:** Provides layout for the main feed: fixed TopBar at top, fixed TabBar at bottom, scrollable middle area. Manages z-index layers so NotificationBanner renders above TopBar. Does not scroll itself; inner regions handle their own overflow.

---

### ModalOverlay

**Category:** Layout / Wrapper  
**Used on screens:** S11, S12, S14

**Props:**
- `isOpen: boolean`
- `onClose?: () => void` — if omitted, overlay is not dismissible by backdrop tap
- `children: ReactNode`
- `backdropOpacity?: number` — default 0.85
- `preventClose?: boolean` — when true, tapping backdrop does nothing and no close button is shown (used for ExitInterceptModal)

**Animation states:**
- `initial` — opacity: 0, backdropOpacity: 0
- `animate` — opacity: 1, backdrop fades to `backdropOpacity`, 250ms ease-out
- `exit` — opacity: 0, backdrop fades to 0, 200ms ease-in

**Notes:** Renders a full-viewport fixed overlay. Background color `#0F0D0B` at `backdropOpacity`. Children are rendered in a centred container. For MatchOverlay and ExitInterceptModal, `preventClose` is `true`.

---

### TabBar

**Category:** Navigation  
**Used on screens:** S09, S13

**Props:**
- `activeTab: 'feed' | 'messages' | 'profile' | 'wingman'`
- `onTabChange: (tab: 'feed' | 'messages' | 'profile' | 'wingman') => void`

**Animation states:**
- `idle` — static bottom bar, background `#1A1612`, border-top `#2E2720`
- `tabActive` — active icon: fill colour `#8B1A1A`, label weight 600. Transition 80ms.
- `tabPress` — scale: 0.96, 80ms, then spring back

**Notes:** Four tabs: Feed (grid icon), Messages (message-square icon), Profile (user icon), Wingman (zap icon). All icons Lucide outline. Messages tab always shows a faint unread dot (static, never resolves — it's a dark pattern). Wingman tab navigates to S13.

---

### TopBar

**Category:** Navigation  
**Used on screens:** S09

**Props:**
- `likesCount: number` — always renders as locked (not a real count — shown blurred)
- `onLikesPress: () => void` — triggers LikesLockPanel / paywall

**Animation states:**
- `idle` — static bar, background `#0F0D0B`, border-bottom `#2E2720`

**Notes:** Shows the LURCH wordmark (left), a blurred/locked likes indicator (centre), and a notification bell icon (right, Lucide outline). The likes count is intentionally rendered blurred with a lock icon overlay — this is a dark pattern and must look exactly like a real blurred number.

---

### BackButton

**Category:** Navigation  
**Used on screens:** S02, S03, S04, S05, S06 (via OnboardingShell)

**Props:**
- `onPress: () => void`
- `label?: string` — defaults to no label (icon only)

**Animation states:**
- `idle` — chevron-left Lucide icon, colour `#8A8070`
- `hover` — colour `#EDE8DF`, 120ms
- `active` — scale: 0.96, 80ms

**Notes:** Before calling `onPress`, sets `activeTransitionDirection` to `'down'` in UISlice so ScreenWrapper exits correctly. When rendered on any screen that has unsaved state, the press triggers the exit intercept flow (beginIntercept) before navigating.

---

### OnboardingProgress

**Category:** Navigation  
**Used on screens:** S02, S03, S04, S05, S06, S07

**Props:**
- `step: number`
- `totalSteps: number`

**Animation states:**
- `idle` — thin horizontal bar, filled portion colour `#8B1A1A`, unfilled `#2E2720`
- `stepAdvance` — filled width animates via layout animation, 300ms spring

**Notes:** Thin bar (4px height, no border radius) at the very top of OnboardingShell. Does not show step numbers — only the proportional fill. S04's Secure loop does not advance this bar (secureLoopRound does not count as a step forward).

---

### SelectableListItem

**Category:** Inputs & Selectors  
**Used on screens:** S02, S05, S06

**Props:**
- `label: string`
- `isSelected: boolean`
- `onSelect: () => void`
- `variant: 'single' | 'multi'` — single renders a circle indicator, multi renders a checkbox-style square
- `disabled?: boolean`

**Animation states:**
- `idle` — background `#1A1612`, border `#2E2720`, label colour `#8A8070`
- `selected` — background `#231E18`, border `#8B1A1A`, label colour `#EDE8DF`. Transition 120ms.
- `active` (press) — scale: 0.98, 80ms

**Notes:** Full-width row. 16px padding. 12px border radius. On S06 (single select, Honest Question), selecting any item immediately triggers the ReflectionLine appearing beneath the list — this is a prop callback, not internal state. On S05 (multi-select), selecting/deselecting toggles that item in the wounds array.

---

### VirtualizedSelectList

**Category:** Inputs & Selectors  
**Used on screens:** S02

**Props:**
- `items: string[]` — 80+ gender identity strings
- `selected: string | null`
- `onSelect: (item: string) => void`
- `estimatedItemHeight?: number` — default 56px

**Animation states:**
- `idle` — static virtualized list
- `itemSelect` — delegates to SelectableListItem animation states

**Notes:** Wraps a virtualized list implementation (react-window or equivalent) to handle 80+ items without performance degradation. Items are rendered as SelectableListItem with `variant='single'`. The list must support touch momentum scrolling on mobile. No search bar — alphabetical order only.

---

### OptionCard

**Category:** Inputs & Selectors  
**Used on screens:** S03, S04

**Props:**
- `label: string`
- `description?: string` — one-line clarification below label
- `isSelected: boolean`
- `onSelect: () => void`
- `disabled?: boolean`

**Animation states:**
- `idle` — background `#1A1612`, border `#2E2720`, corner radius 12px
- `selected` — border `#8B1A1A`, background `#231E18`, label `#EDE8DF`. 120ms transition.
- `active` — scale: 0.96, 80ms
- `disabled` — opacity: 0.4, no pointer events

**Notes:** Displayed in a 2×2 grid on S03 and S04. On S04, selecting 'Secure' does not advance the onboarding flow — instead it calls `incrementSecureLoop` and re-renders the screen with SecureLoopCounter updated, up to round 5, at which point it routes to S04B. On S04B re-route: if secureLoopRound < 5, the OptionCard for 'Secure' appears but is intercepted. On round 5, the CTAButton routes to S04B instead of S05.

---

### MultiSelectGrid

**Category:** Inputs & Selectors  
**Used on screens:** S05

**Props:**
- `items: string[]`
- `selected: string[]`
- `onToggle: (item: string) => void`
- `columns?: number` — default 2

**Animation states:**
- `idle` — grid of SelectableListItem (multi variant)
- `itemToggle` — delegates to SelectableListItem

**Notes:** Wrapper that renders items in a grid layout using SelectableListItem with `variant='multi'`. No minimum selection enforced — the CTAButton on S05 becomes active as soon as at least one item is selected. Items can be deselected freely.

---

### CTAButton

**Category:** Inputs & Selectors  
**Used on screens:** All (S01, S02–S08, S11, S12, S13, S14, S15)

**Props:**
- `label: string`
- `onPress: () => void`
- `disabled?: boolean`
- `variant?: 'primary' | 'destructive'` — primary: `#8B1A1A` background; destructive: border `#C0392B`, transparent background
- `fullWidth?: boolean` — default true on mobile
- `loading?: boolean` — shows a subtle spinner inside the button

**Animation states:**
- `idle` — background `#8B1A1A`, text `#EDE8DF`, border-radius 4px
- `disabled` — opacity: 0.35, no pointer events
- `active` (press) — scale: 0.96, 80ms, spring back 120ms
- `loading` — label hidden, spinner visible, scale: 1.0 locked

**Notes:** Primary action button across all screens. When `disabled` transitions to `false`, the button does not animate in — it simply becomes interactive. No hover glow. No shadow. On S12 (Paywall), the primary CTA uses manipulative copy such as "Find Them Before It's Too Late" — that text is passed as `label`; this component has no opinion on copy.

---

### GhostButton

**Category:** Inputs & Selectors  
**Used on screens:** S04B, S11, S12, S13, S14, S15

**Props:**
- `label: string`
- `onPress: () => void`
- `dim?: boolean` — reduces text colour to `#8A8070` (used for secondary/dismissive CTAs on paywall)

**Animation states:**
- `idle` — transparent background, no border, text `#8A8070`
- `active` — scale: 0.96, text `#EDE8DF`, 80ms
- `dim:idle` — text `#2E2720`

**Notes:** Used for skip links, dismiss actions, and secondary choices. On S12 (Paywall), the GhostButton is intentionally low contrast (dim variant) to discourage dismissal — this is an explicit dark pattern. On S14 (ExitIntercept), GhostButton labels are guilt-framed ("No thanks, I enjoy being alone").

---

### ProfileCard

**Category:** Cards & Surfaces  
**Used on screens:** S09, S10

**Props:**
- `id: string`
- `name: string`
- `age: number`
- `location: string`
- `bio: string`
- `photoColor: string` — hex string used as photo area background (no real photos)
- `photoEmoji?: string` — optional single emoji overlaid on photo area
- `wounds: string[]`
- `attachmentStyle: 'anxious' | 'avoidant' | 'disorganized' | 'secure'`
- `lurchScore: number`
- `avoidanceScore: number`
- `anxietyScore: number`
- `ghostRisk: number`
- `hasGhostDetector: boolean`
- `isTopCard: boolean` — only the top card receives drag events
- `onSwipeLeft: () => void`
- `onSwipeRight: () => void`
- `dragConstraints: RefObject<Element>` — bounding box from CardStack

**Animation states:**
- `idle` — centred, rotation: 0, scale: 1.0
- `dragging` — follows pointer with `x` and `y` offset; rotation interpolated from `x` offset, max ±15deg. Cursor: grabbing.
- `flyLeft` — x: -160vw, rotate: -30deg, opacity: 0, spring physics, calls onSwipeLeft on completion
- `flyRight` — x: 160vw, rotate: 30deg, opacity: 0, spring physics, calls onSwipeRight on completion
- `springBack` — x: 0, y: 0, rotate: 0, opacity: 1, spring stiffness: 300, damping: 20
- `stacked` (not top card) — slight downward offset + scale reduction per stack depth (max 3 visible)

**Notes:** Card anatomy top-to-bottom: photo area (fixed height, `photoColor` bg, photoEmoji centred), name/age/location row, bio text (2 lines clamped), wounds row (WoundBadges), attachment row (AttachmentBadge), scores row (4 numeric values with labels), optional GhostDetectorBadge. Drag threshold: card must travel >80px horizontally before releasing triggers flyLeft/flyRight; anything less springs back. S10 reference: the 14 archetypes are static data objects conforming to ProfileCard's prop shape — they are not a separate component.

---

### CardStack

**Category:** Cards & Surfaces  
**Used on screens:** S09

**Props:**
- `profiles: Profile[]`
- `currentIndex: number`
- `onSwipe: (direction: 'left' | 'right', index: number) => void`

**Animation states:**
- `idle` — stack of up to 3 visible ProfileCards, depth-offset via translateY and scale
- `swipeComplete` — top card flies off, remaining cards shift up with 200ms spring

**Notes:** Renders at most 3 ProfileCards at once for performance. Cards below the top have `isTopCard: false` and receive no drag events. Uses a `ref` to pass `dragConstraints` to each ProfileCard. When `currentIndex` advances past all profiles, renders an empty state (a surface card reading "You've seen everyone. That's the app.").

---

### ScoreCard

**Category:** Cards & Surfaces  
**Used on screens:** S08

**Props:**
- `label: string` — e.g. "Lurch Score", "Avoidance", "Anxiety", "Ghost Risk"
- `value: number`
- `description: string` — one-line brutal annotation below the score
- `accentColor?: string` — defaults to `#8B1A1A`; Ghost Risk uses `#C0392B`

**Animation states:**
- `hidden` — opacity: 0, translateY: 16px
- `revealed` — opacity: 1, translateY: 0, 400ms ease-out. Triggered when ScoreCountUp completes for this card.

**Notes:** Rendered four times on S08. Each card fades up 600ms after the previous one. The ScoreCountUp component lives inside each ScoreCard. Score values are computed from onboarding answers (deterministic formula, not random — same answers always yield same scores) but the formula is satirical and not clinically meaningful.

---

### StatsCard

**Category:** Cards & Surfaces  
**Used on screens:** S11

**Props:**
- `matchName: string`
- `compatibilityPercent: number` — e.g. 94
- `sharedWounds: string[]` — subset of wound labels common to both user and match
- `attachmentPairing: string` — e.g. "Anxious × Avoidant"
- `pairingAnnotation: string` — one-line satirical note, e.g. "You pursue. They withdraw. Chemistry."

**Animation states:**
- `hidden` — opacity: 0
- `staggerIn` — each stat row fades up sequentially, 100ms apart, starting after AvatarPairAnimation completes

**Notes:** Surface `#1A1612`, border `#2E2720`, border-radius 12px. Sits below the AvatarPairAnimation on S11. The `compatibilityPercent` is always comically high (90–99%) regardless of actual answers — this is intentional satire.

---

### FeatureListItem

**Category:** Cards & Surfaces  
**Used on screens:** S12, S13

**Props:**
- `icon: LucideIcon`
- `label: string`
- `description: string`
- `darkPatternLabel?: string` — if present, renders a DarkPatternLabel beside the feature title (S12 only)
- `locked?: boolean` — if true, overlays a lock icon and reduces opacity to 0.5 (paywall feature lock)

**Animation states:**
- `idle` — static row
- `revealStagger` — fades up with parent stagger when screen loads

**Notes:** Used on S12 (Paywall feature list, several items show DarkPatternLabel and locked state) and S13 (AI Wingman feature list, no dark pattern labels). Icon is Lucide outline, colour `#8A8070`. Label in Inter 500, description in Inter 400 `#8A8070`.

---

### ResearchDataCard

**Category:** Cards & Surfaces  
**Used on screens:** S15

**Props:**
- `stat: string` — e.g. "26% lonelier"
- `finding: string` — one-sentence brutal research finding
- `source: string` — attribution line
- `accentColor?: string` — defaults to `#C97B2A` (amber, warning register)

**Animation states:**
- `idle` — static card
- `revealStagger` — fades up sequentially on scroll-into-view (IntersectionObserver or Framer scroll-driven)

**Notes:** Surface `#1A1612`, left border 3px solid `accentColor`. No shadows. Stat rendered in DisplayHeading scale but without Clash Display — uses Inter 700 tabular numerals. Source line in Inter 400 small, colour `#8A8070`.

---

### PunchlineCard

**Category:** Cards & Surfaces  
**Used on screens:** S13

**Props:**
- `headline: string` — the satirical punchline
- `subtext?: string`

**Animation states:**
- `idle` — static card
- `entrance` — slides up 200ms, opacity fade, after feature list has loaded

**Notes:** Full-width surface `#231E18`, border `#2E2720`, border-radius 12px. Headline in SerifMoment (Instrument Serif), intentionally styled as the emotional gut punch of the AI Wingman screen. This is the screen's exit note before CTAs.

---

### WoundBadge

**Category:** Cards & Surfaces  
**Used on screens:** S09, S10

**Props:**
- `label: string` — wound label e.g. "Abandonment", "Enmeshment"
- `size?: 'sm' | 'md'` — sm for card stack, md for expanded card

**Animation states:**
- `idle` — static pill chip

**Notes:** Background `#2E2720`, text `#8A8070`, border-radius 999px, padding 4px 10px. No animation. Rendered in a horizontal scrollable row on ProfileCard (overflow-x: scroll, no scrollbar visible). Maximum 3 wounds visible without scrolling.

---

### AttachmentBadge

**Category:** Cards & Surfaces  
**Used on screens:** S09, S10

**Props:**
- `style: 'anxious' | 'avoidant' | 'disorganized' | 'secure'`

**Animation states:**
- `idle` — static chip

**Notes:** Border-radius 8px (chip). Colour per style: anxious = `#C97B2A` text on `#2E1A00` background; avoidant = `#4A7C59` text on `#0D1F15` background; disorganized = `#C0392B` text on `#1A0000` background; secure = `#EDE8DF` text on `#1A1612` background. The 'secure' variant is extremely rare in the 14 archetype dataset by design.

---

### GhostDetectorBadge

**Category:** Cards & Surfaces  
**Used on screens:** S09, S10

**Props:**
- `riskLevel: number` — 0–100 Ghost Risk score
- `label?: string` — defaults to "Ghost Detector™ Active"

**Animation states:**
- `idle` — subtle amber pulse glow on border (CSS keyframe animation, separate from Framer Motion)
- `hover` — tooltip with satirical copy: "Notifies you 3–5 business days after they ghost. You're welcome."

**Notes:** Only appears on ProfileCards where `hasGhostDetector: true`. Background `#1A0D00`, border `#C97B2A`, text `#C97B2A`. The amber pulse is a CSS animation (`@keyframes pulse`) not Framer Motion — it runs indefinitely without being tied to any state change.

---

### SocialProofBlock

**Category:** Cards & Surfaces  
**Used on screens:** S12

**Props:**
- `testimonials: Array<{ quote: string; name: string; age: number }>` — static data prop
- `rating: string` — e.g. "4.8 stars · 12,000 reviews"

**Animation states:**
- `idle` — static

**Notes:** The testimonials are intentionally bleak ("I've been here for three months and I just feel... watched." — Arjun, 31). The high star rating beside bleak quotes is the dark pattern. Rating shown as star icons (Lucide star, filled via CSS clip) plus copy. No real data — static props only.

---

### MatchOverlay

**Category:** Overlays & Modals  
**Used on screens:** S11

**Props:**
- `isOpen: boolean`
- `matchedProfile: Profile`
- `onContinue: () => void` — routes to paywall
- `onDismiss?: () => void` — secondary dismiss action

**Animation states:**
- `closed` — opacity: 0, pointer-events: none
- `opening` — ModalOverlay backdrop fades in, then AvatarPairAnimation triggers, then StatsCard stagger
- `open` — fully visible, CTAButton and GhostButton rendered

**Notes:** Uses ModalOverlay as base. `preventClose: true`. Background `#0F0D0B` at 0.95 opacity. Sequence: 1) backdrop appears 2) AvatarPairAnimation plays 3) "It's a Lurch" headline fades in 4) StatsCard staggers in 5) CTAs appear. Total sequence ~1400ms. onDismiss is optional — if omitted, the only exit is onContinue (routes to paywall).

---

### ExitInterceptModal

**Category:** Overlays & Modals  
**Used on screens:** S14

**Props:**
- `stage: 0 | 1 | 2 | 3`
- `onAdvance: () => void`
- `onExit: () => void`
- `isOpen: boolean`

**Animation states:**
- `closed` — not rendered
- `stageEnter` — ModalOverlay slides up 300ms. Screen shakes first via screenShake variant on the parent screen.
- `stageTransition` — current stage content slides out left, next stage slides in right, 250ms

**Notes:** Stage 0 = not intercepting. Stage 1 = ExitStageGuilty renders inside. Stage 2 = ExitStageDesperate renders. Stage 3 = ExitStageConfession renders. `preventClose: true` on ModalOverlay for all stages. The modal slides up from the bottom on first trigger. Between stages, content cross-fades. Stage 3 (Confession) is the only stage with an exit path via `onExit`.

---

### NotificationBanner

**Category:** Overlays & Modals  
**Used on screens:** S09

**Props:**
- `notification: { id: string; message: string } | null`
- `onDismiss: (id: string) => void`
- `autoDismissMs?: number` — default 4000

**Animation states:**
- `hidden` — translateY: -100%, opacity: 0
- `visible` — translateY: 0, opacity: 1, 400ms ease-out. Auto-dismisses after `autoDismissMs`.
- `exit` — translateY: -100%, opacity: 0, 300ms ease-in

**Notes:** ⚠️ **CONSTRAINT: 400ms slide-down entry, 4s auto-dismiss.** Positioned fixed at top, below TopBar (z-index layer). Background `#231E18`, border-bottom `#2E2720`. Messages are satirical activity alerts: "Meera typed something. Then deleted it." or "You have 4 new likes. You can't see them." Triggered by `pushNotification` action in NotificationSlice.

---

### LikesLockPanel

**Category:** Overlays & Modals  
**Used on screens:** S09

**Props:**
- `likesCount: number` — rendered blurred
- `onUnlock: () => void` — opens paywall

**Animation states:**
- `idle` — blurred number overlay with lock icon
- `press` — scale: 0.97 on container, 80ms, then triggers onUnlock

**Notes:** Displayed inline in the TopBar (not a modal — positioned within the top bar layout). The `likesCount` number is rendered with CSS `filter: blur(6px)` and a semi-transparent lock icon on top. The actual number is irrelevant — it's always blurred. This is an explicit dark pattern.

---

### ActivityBanner

**Category:** Overlays & Modals  
**Used on screens:** S09

**Props:**
- `message: string` — rotating pre-written satirical activity messages
- `onPress?: () => void`

**Animation states:**
- `idle` — subtle static bar below TopBar
- `cycle` — message fades out, new message fades in on a 8-second interval (CSS fade, not Framer Motion)

**Notes:** Thin banner directly below TopBar. Background `#1A1612`, text `#8A8070`. Messages cycle automatically from a static list: "12 people swiped right while you were reading someone else's bio." / "A conversation is waiting. It will never start itself." / "Someone liked you. We can't tell you who." These are static strings — no real data. The rotation is driven by a `setInterval` in a useEffect, not Zustand.

---

### ProgressBar

**Category:** Feedback & Indicators  
**Used on screens:** S07

**Props:**
- `progress: number` — 0 to 1
- `duration: number` — total fill duration in milliseconds
- `onComplete?: () => void`

**Animation states:**
- `filling` — non-linear fill curve: fast (0→0.6) in first 30% of duration, slow (0.6→0.85) in middle 40%, fast (0.85→1.0) in final 30%
- `complete` — width: 100%, brief hold, then onComplete fires

**Notes:** ⚠️ **CONSTRAINT: Fill must be non-linear (fast → slow → fast). Do not use a linear ease.** Implemented via a custom Framer Motion keyframe array: `[0, 0.6, 0.85, 1.0]` at `[0, 0.3, 0.7, 1.0]` of the animation progress. Height: 3px. Background track: `#2E2720`. Fill: `#8B1A1A`. No border radius. On S07, `onComplete` triggers the transition to S08.

---

### TypingIndicator

**Category:** Feedback & Indicators  
**Used on screens:** S09

**Props:**
- `active: boolean`

**Animation states:**
- `inactive` — opacity: 0
- `active` — three dots visible, CSS `@keyframes` pulse stagger: dot 1 at 0ms, dot 2 at 150ms, dot 3 at 300ms, repeat indefinitely

**Notes:** ⚠️ **CONSTRAINT: Never resolves. The typing indicator never disappears while `active: true`. The typing indicator must remain active indefinitely on S09 — set `typingIndicatorActive: true` on mount and never set it to false.** This is an explicit dark pattern. Rendered below the CardStack as if someone is responding to you. The "person" typing is never named. Dots are 6px circles, colour `#8A8070`.

---

### PaywallCountdown

**Category:** Feedback & Indicators  
**Used on screens:** S12

**Props:**
- `expiryTimestamp: number` — Unix ms timestamp
- `onExpire?: () => void`

**Animation states:**
- `ticking` — seconds value updates every 1000ms via `setInterval`
- `expired` — shows "00:00" and calls onExpire if provided
- `urgentPulse` — when remaining time < 60s, the countdown text colour shifts to `#C97B2A` with a subtle scale pulse on each tick (scale 1.0 → 1.04 → 1.0, 200ms)

**Notes:** ⚠️ **CONSTRAINT: Must tick in real time. Must not freeze or pause. Do not use Framer Motion animate for the number — use `setInterval` with state update for time remaining, and only use Framer Motion for the urgentPulse visual effect.** Renders as MM:SS format. Displayed in the urgency banner at the top of S12.

---

### ScoreCountUp

**Category:** Feedback & Indicators  
**Used on screens:** S08

**Props:**
- `targetValue: number`
- `duration?: number` — default 600ms per score
- `delay?: number` — stagger delay before this count-up starts
- `onComplete?: () => void`

**Animation states:**
- `counting` — value animates from 0 to `targetValue`, easeOut curve
- `complete` — holds at `targetValue`, fires onComplete

**Notes:** ⚠️ **CONSTRAINT: 600ms count-up per score, staggered 600ms apart.** Uses `useMotionValue` + `useTransform` or a `requestAnimationFrame` loop with easeOut easing. Does not use CSS transitions. Renders the numeric value only — label and description are in the parent ScoreCard. When `onComplete` fires, the ScoreCard's `revealed` animation triggers.

---

### DividerLine

**Category:** Feedback & Indicators  
**Used on screens:** S08

**Props:**
- `delay?: number` — ms before line starts drawing
- `onComplete?: () => void`

**Animation states:**
- `pre` — width: 0, opacity: 1
- `drawing` — width: 100%, 400ms ease-in-out, fires onComplete when done
- `done` — width: 100%, static

**Notes:** Used on S08 between the four ScoreCards and the WarmNote. Height: 1px. Colour: `#2E2720`. The line draws from left to right after all four ScoreCountUp animations complete. `onComplete` triggers WarmNote fade-in. Implemented as a Framer Motion `width` animation from 0 to `'100%'`.

---

### DisplayHeading

**Category:** Typography  
**Used on screens:** All

**Props:**
- `children: ReactNode`
- `level?: 1 | 2 | 3` — maps to h1/h2/h3
- `size?: 'xl' | 'lg' | 'md'` — xl: 40px, lg: 28px, md: 20px
- `color?: string` — defaults to `#EDE8DF`
- `align?: 'left' | 'center' | 'right'` — default left

**Animation states:**
- `idle` — static

**Notes:** Font: Clash Display, weight 600. No italic. Line-height: 1.1. Letter-spacing: -0.02em. Used for all primary headlines across the app. Never used for body copy.

---

### UIText

**Category:** Typography  
**Used on screens:** All

**Props:**
- `children: ReactNode`
- `size?: 'sm' | 'base' | 'lg'` — sm: 13px, base: 16px, lg: 18px
- `color?: string` — defaults to `#8A8070`
- `weight?: 400 | 500 | 600`
- `as?: 'p' | 'span' | 'div' | 'label'` — default p

**Animation states:**
- `idle` — static

**Notes:** Font: Inter. Used for all body copy, labels, descriptions, micro-copy. Primary text colour `#EDE8DF` for important copy; secondary `#8A8070` for supporting copy. Always pass explicit `color` rather than relying on defaults for primary-weight text.

---

### SerifMoment

**Category:** Typography  
**Used on screens:** S04B, S06, S07, S08, S13, S15

**Props:**
- `children: ReactNode`
- `size?: 'sm' | 'md' | 'lg'` — sm: 16px, md: 22px, lg: 32px
- `italic?: boolean` — default true
- `color?: string` — defaults to `#EDE8DF`
- `align?: 'left' | 'center'` — default center

**Animation states:**
- `idle` — static (used when not fading in)
- `fadeIn` — opacity 0 → 1 over 800ms ease-in (slower than standard fadeIn). Used for WarmNote on S08 and rotating footnotes on S07.

**Notes:** Font: Instrument Serif. Used sparingly — only for emotionally weighted moments. On S07, ProcessingFootnote uses SerifMoment with the `fadeIn` animation variant cycling through 5–6 rotating philosophical fragments. On S08, WarmNote uses SerifMoment with the slow fadeIn, triggered after DividerLine completes.

---

### DarkPatternLabel

**Category:** Typography  
**Used on screens:** S12

**Props:**
- `label: string` — e.g. "Urgency Design", "Manufactured Scarcity", "Fear of Abandonment"
- `tooltipText?: string` — explains the dark pattern on hover/press

**Animation states:**
- `idle` — small chip, background `#2E1A00`, text `#C97B2A`, border-radius 8px
- `tooltipOpen` — tooltip slides up below the label, 150ms, holds until dismissed

**Notes:** Used exclusively on S12 (Paywall). Each paywall dark pattern element has a DarkPatternLabel next to it naming what it is. This is the satirical layer — the paywall looks exactly like a real one, but each manipulation technique is labelled. The tooltip text provides a one-sentence explanation of the dark pattern. This is what makes S12 satire rather than an actual paywall.

---

### TypewriterText

**Category:** Typography  
**Used on screens:** S07

**Props:**
- `text: string`
- `speed?: number` — ms per character, default 40
- `onComplete?: () => void`
- `cursor?: boolean` — default true (renders a blinking `|` cursor)

**Animation states:**
- `typing` — characters reveal one-by-one via string slice
- `complete` — full text visible, cursor continues blinking if `cursor: true`
- `cursorBlink` — CSS `@keyframes` blink on `|`, 500ms interval

**Notes:** Used on S07 for ProcessingStatus messages. Each status message is a new TypewriterText render — when a message completes, the next message fades out the old one and starts typing the new one. Font: Inter 500, colour `#EDE8DF`. The sequence of messages is pre-written satirical AI-speak: "Analysing attachment blueprints…", "Cross-referencing wound inventory…", "Calibrating your emotional damage index…" etc.

---

### ReflectionLine

**Category:** Typography  
**Used on screens:** S06

**Props:**
- `text: string` — the reflection line that appears after the user selects an answer
- `visible: boolean`

**Animation states:**
- `hidden` — opacity: 0, translateY: 8px
- `visible` — opacity: 1, translateY: 0, 500ms ease-out, triggered when user makes a selection

**Notes:** Renders below the SelectableListItem list on S06. Font: Instrument Serif (SerifMoment component internally), italic, centred, colour `#8A8070`. The text is a gentle, slightly devastating observation about the user's choice — e.g. if they answered "I fall fast and hard": "You confuse intensity for certainty." The text content is determined by which option is selected — stored as a map of answer → reflection string in S06 page data.

---

### SplashLogo

**Category:** Screen-specific  
**Used on screens:** S01

**Props:**
- `onAnimationComplete: () => void`

**Animation states:**
- `entrance` — LURCH wordmark fades in over 600ms, then translates up 20px over 400ms
- `tagline` — tagline fades in 300ms after wordmark settles
- `exit` — entire logo fades out 200ms when onAnimationComplete triggers navigation

**Notes:** Renders the LURCH wordmark in Clash Display bold, `#EDE8DF`. Below it, a tagline in Instrument Serif italic: *"The involuntary forward motion."* Below the tagline, a very small Inter UIText: *"Finally, love — optimised."* These are static strings. The `onAnimationComplete` fires after ~1500ms total, or immediately if user taps anywhere (skip splash).

---

### SecureLoopCounter

**Category:** Screen-specific  
**Used on screens:** S04

**Props:**
- `round: number` — current secureLoopRound (1–5)

**Animation states:**
- `idle` — static
- `increment` — brief scale pulse on the counter text when round advances: scale 1.0 → 1.15 → 1.0, 200ms

**Notes:** Rendered at the top of S04 beneath OnboardingProgress, only visible when secureLoopRound > 1. Copy template: *"Interesting. Let's try again. (Round {round} of 5)"*. Font: UIText, colour `#C97B2A`. On round 5, the copy changes to *"One more time. This is the last one."* and the OptionCard for 'Secure' routes to S04B on selection.

---

### ProcessingStatus

**Category:** Screen-specific  
**Used on screens:** S07

**Props:**
- `messages: string[]` — ordered list of fake AI status messages
- `currentIndex: number`
- `onSequenceComplete: () => void`

**Animation states:**
- `messageEnter` — TypewriterText reveals the current message
- `messageFade` — current message opacity fades to 0 over 300ms before next message starts
- `complete` — all messages done, onSequenceComplete fires

**Notes:** Cycles through `messages` array in order. Each message waits for TypewriterText `onComplete` before pausing 800ms, then fading out and starting the next. The sequence runs in sync with ProgressBar. Pre-written messages (static): 1) "Analysing attachment blueprints…" 2) "Cross-referencing wound inventory…" 3) "Calibrating emotional damage index…" 4) "Identifying recurring patterns…" 5) "Confirming compatibility with historical mistakes…" 6) "Results ready."

---

### ProcessingFootnote

**Category:** Screen-specific  
**Used on screens:** S07

**Props:**
- `footnotes: string[]` — list of rotating serif footnotes
- `intervalMs?: number` — default 3500

**Animation states:**
- `fade` — current footnote fades out (400ms), next fades in (600ms), slow pace

**Notes:** Renders at the bottom of S07 beneath ProgressBar. Uses SerifMoment with the slow `fadeIn` variant. Cycles through footnotes at `intervalMs` regardless of ProgressBar state. Pre-written footnotes (static examples): *"Based on proprietary research conducted entirely in our heads."* / *"No licensed therapists were consulted. Or harmed. Probably."* / *"Your results are scientifically valid in the same way a horoscope is."* Cycles indefinitely until S07 exits.

---

### WarmNote

**Category:** Screen-specific  
**Used on screens:** S08

**Props:**
- `text: string`
- `visible: boolean`

**Animation states:**
- `hidden` — opacity: 0
- `visible` — opacity: 1, 1000ms ease-in (slower than all other fade-ins on the screen). Triggered by DividerLine `onComplete`.

**Notes:** ⚠️ **CONSTRAINT: Fades in slower than scores (1000ms vs 400ms). Must feel like the screen exhales.** Renders below the DividerLine on S08. Uses SerifMoment. The text is a warm, direct note — not a product pitch. Example: *"These numbers are not a verdict. They're a starting point. You already knew most of this."* Static text passed as prop from the S08 page.

---

### ActionRow

**Category:** Screen-specific  
**Used on screens:** S09

**Props:**
- `onNope: () => void`
- `onLike: () => void`
- `disabled?: boolean` — true when no more profiles

**Animation states:**
- `idle` — two circular icon buttons, nope (x icon, `#C0392B`) and like (heart icon, `#4A7C59`)
- `nopePress` — nope button scale: 0.90, brief rotate -10deg, 80ms
- `likePress` — like button scale: 0.90, brief rotate +10deg, 80ms
- `disabled` — both buttons opacity: 0.25

**Notes:** Rendered below CardStack on S09. Pressing nope/like programmatically triggers the ProfileCard's flyLeft/flyRight animation then calls `recordSwipe` and `advanceCard`. The action buttons are supplemental to direct card dragging — both methods must produce the same state result. Centred horizontally. No Super Like button unless specified in a future iteration.

---

### AvatarPairAnimation

**Category:** Screen-specific  
**Used on screens:** S11

**Props:**
- `userAvatarColor: string` — hex, derived from user's ghost risk score (higher risk = darker)
- `matchAvatarColor: string` — hex, from matched profile's `photoColor`
- `matchName: string`
- `onAnimationComplete: () => void`

**Animation states:**
- `initial` — user avatar off-screen left, match avatar off-screen right
- `slideToCenter` — both slide to centre simultaneously, 500ms ease-out
- `meetPulse` — when they meet: both scale 1.0 → 1.08 → 1.0 together, 300ms
- `settle` — slight separation (they don't fully overlap), held position, fires onAnimationComplete

**Notes:** Avatars are simple circles (60px diameter) using `userAvatarColor` and `matchAvatarColor` as backgrounds. No real photos. Match avatar has matchName label beneath it. The "It's a Lurch" headline fades in during the `settle` state, above the avatar pair. Total animation before onAnimationComplete: ~850ms.

---

### CandidCopyBlock

**Category:** Screen-specific  
**Used on screens:** S12

**Props:**
- `headline: string` — e.g. "We built this to be hard to leave."
- `body: string` — 2–3 sentence honest admission about the paywall design
- `footnote?: string`

**Animation states:**
- `idle` — static block

**Notes:** Sits between the paywall feature list and CTAs on S12. This is the satirical pivot — the paywall suddenly admits what it is doing. Surface `#1A1612`, 16px padding, border `#2E2720`. Headline in SerifMoment italic. Body in UIText. This is the only place on S12 where the deadpan corporate register breaks — it speaks directly.

---

### WhatHappenedList

**Category:** Screen-specific  
**Used on screens:** S15

**Props:**
- `items: Array<{ label: string; description: string }>`

**Animation states:**
- `idle` — static
- `revealStagger` — each item fades up 80ms apart on mount

**Notes:** Rendered below S15's header. Each item has a label in UIText weight 600 colour `#EDE8DF` and a description in UIText weight 400 colour `#8A8070`. A thin `#2E2720` divider separates items. This list explains what just happened in the app — the onboarding was manipulative, the scores are fake, the typing indicator never resolves, etc.

---

### ExitStageGuilty

**Category:** Screen-specific  
**Used on screens:** S14

**Props:**
- `onStay: () => void` — dismiss intercept, return to feed
- `onContinueLeaving: () => void` — advance to stage 2

**Animation states:**
- `enter` — content fades in after ModalOverlay opens

**Notes:** Stage 1 content for ExitInterceptModal. Headline in DisplayHeading, emotional guilt-trip copy. Example headline: *"You have 4 unread likes."* Body: *"They've been waiting. Don't you want to know who?"* Primary CTA (CTAButton): "Stay and Find Out". Secondary CTA (GhostButton, dim): "No thanks, I'll leave."

---

### ExitStageDesperate

**Category:** Screen-specific  
**Used on screens:** S14

**Props:**
- `onStay: () => void`
- `onContinueLeaving: () => void`

**Animation states:**
- `enter` — slides in from right, replacing stage 1 content, 250ms

**Notes:** Stage 2 content. More desperate register. Example headline: *"Wait."* Body: *"We worked really hard on this algorithm. Please. We calculated your Lurch Score and everything."* Primary CTA: "Okay, one more look." Secondary GhostButton dim: "I genuinely have to go."

---

### ExitStageConfession

**Category:** Screen-specific  
**Used on screens:** S14

**Props:**
- `onLeave: () => void` — the only exit available at stage 3

**Animation states:**
- `enter` — slides in from right, 250ms. Headline in SerifMoment to signal tonal shift.

**Notes:** Stage 3 content. The app confesses. Tone shifts from guilt to honesty — this is the only moment in S14 where the satire drops entirely. Example text: *"Okay. We were doing the thing. You caught us. Go live your life."* CTAButton (single): "Leave." No GhostButton. No secondary option. `onLeave` resets exit intercept stage and navigates to S15 (Truth Screen).

---

## 3. Zustand Store Shape

### Shared Types

```typescript
type AttachmentStyle = 'anxious' | 'avoidant' | 'disorganized' | 'secure'
type SwipeDirection = 'left' | 'right'
type ExitInterceptStage = 0 | 1 | 2 | 3
type TabId = 'feed' | 'messages' | 'profile' | 'wingman'

interface Profile {
  id: string
  name: string
  age: number
  location: string
  bio: string
  photoColor: string           // hex, used as bg of photo area (no real photos)
  photoEmoji?: string          // optional emoji overlaid on photo area
  wounds: string[]
  attachmentStyle: AttachmentStyle
  lurchScore: number
  avoidanceScore: number
  anxietyScore: number
  ghostRisk: number
  hasGhostDetector: boolean
}

interface Notification {
  id: string
  message: string
  createdAt: number            // Unix ms
  autoDismissMs: number
}

interface ScorePayload {
  lurchScore: number
  avoidanceScore: number
  anxietyScore: number
  ghostRisk: number
}
```

---

### OnboardingSlice

Stores all answers from S02–S06.

| Field | Type | Default | Set by |
|---|---|---|---|
| `gender` | `string \| null` | `null` | `setGender` |
| `preference` | `'men' \| 'women' \| 'everyone' \| 'no-one' \| null` | `null` | `setPreference` |
| `attachmentStyle` | `AttachmentStyle \| null` | `null` | `setAttachmentStyle` |
| `secureLoopRound` | `number` | `0` | `incrementSecureLoop` |
| `wounds` | `string[]` | `[]` | `toggleWound` |
| `honestAnswer` | `string \| null` | `null` | `setHonestAnswer` |

**Actions:**

```typescript
setGender: (gender: string) => void
setPreference: (pref: 'men' | 'women' | 'everyone' | 'no-one') => void
setAttachmentStyle: (style: AttachmentStyle) => void
incrementSecureLoop: () => void   // increments secureLoopRound by 1, max 5
toggleWound: (wound: string) => void  // adds if not present, removes if present
setHonestAnswer: (answer: string) => void
resetOnboarding: () => void       // resets all fields to defaults
```

**Notes:** `secureLoopRound` starts at 0 (no loop yet entered) and increments each time the user selects 'Secure' on S04. When it reaches 5, the next 'Secure' selection routes to S04B rather than looping again. `resetOnboarding` is called if the user exits the onboarding flow entirely (edge case).

---

### ScoreSlice

Stores computed Lurch Scores, set at end of S07.

| Field | Type | Default | Set by |
|---|---|---|---|
| `lurchScore` | `number \| null` | `null` | `setScores` |
| `avoidanceScore` | `number \| null` | `null` | `setScores` |
| `anxietyScore` | `number \| null` | `null` | `setScores` |
| `ghostRisk` | `number \| null` | `null` | `setScores` |
| `scoresRevealed` | `boolean` | `false` | `revealScores` |

**Actions:**

```typescript
setScores: (payload: ScorePayload) => void  // sets all four scores atomically
revealScores: () => void                    // sets scoresRevealed: true; triggers S08 count-up sequence
```

**Notes:** Scores are computed from `OnboardingSlice` answers using a deterministic (but satirically arbitrary) formula in a pure function `computeScores(onboardingAnswers)` — no randomness. The same answers always produce the same scores. All four scores are in the 0–100 range. `lurchScore` is always high (70+) regardless of answers — this is by design.

---

### FeedSlice

Manages the main feed state (S09).

| Field | Type | Default | Set by |
|---|---|---|---|
| `profiles` | `Profile[]` | `STATIC_PROFILES` (14 archetypes) | none (static import) |
| `currentCardIndex` | `number` | `0` | `advanceCard` |
| `matchedProfile` | `Profile \| null` | `null` | `setMatch`, `clearMatch` |
| `hasMatched` | `boolean` | `false` | `setMatch` |
| `typingIndicatorActive` | `boolean` | `false` | `setTypingIndicator` |
| `swipeHistory` | `Array<{ direction: SwipeDirection; profileId: string; timestamp: number }>` | `[]` | `recordSwipe` |

**Actions:**

```typescript
advanceCard: () => void
  // increments currentCardIndex; if currentCardIndex === profiles.length - 1, stays (empty state)

setMatch: (profile: Profile) => void
  // sets matchedProfile and hasMatched: true; triggers MatchOverlay

clearMatch: () => void
  // sets matchedProfile: null; does NOT reset hasMatched (once matched, always matched)

setTypingIndicator: (active: boolean) => void

recordSwipe: (direction: SwipeDirection, profileId: string) => void
  // appends to swipeHistory with current timestamp
```

**Notes:** `profiles` is never mutated at runtime — it is a static import of the 14 archetype objects. Match is triggered programmatically: on the 7th right swipe, `setMatch` is called with a specific archetype profile. This is hardcoded in the `advanceCard` logic or a middleware function — it is not random.

---

### PaywallSlice

Manages paywall open state and countdown data (S12).

| Field | Type | Default | Set by |
|---|---|---|---|
| `matchName` | `string \| null` | `null` | `openPaywall` |
| `expiryTimestamp` | `number \| null` | `null` | `openPaywall` |
| `isPaywallOpen` | `boolean` | `false` | `openPaywall`, `closePaywall` |

**Actions:**

```typescript
openPaywall: (matchName: string, expiryTimestamp: number) => void
  // sets all three fields atomically; expiryTimestamp is Date.now() + 24 * 60 * 60 * 1000 (24h)

closePaywall: () => void
  // sets isPaywallOpen: false; matchName and expiryTimestamp persist so countdown survives re-open
```

**Notes:** `expiryTimestamp` is set once on `openPaywall` and never updated. If the user closes and reopens the paywall, the same timestamp is used — the countdown continues from where it left off. This is intentional: the urgency is "real" within the session. Across page refreshes, the timestamp is lost (no persistence). `matchName` is used in the paywall urgency copy: *"{matchName} is waiting. You have 24:00:00."*

---

### NotificationSlice

Manages the notification banner queue (S09).

| Field | Type | Default | Set by |
|---|---|---|---|
| `queue` | `Notification[]` | `[]` | `pushNotification`, `dismissNotification` |

**Actions:**

```typescript
pushNotification: (notification: Omit<Notification, 'id' | 'createdAt'>) => void
  // generates id (nanoid or Date.now().toString()), sets createdAt: Date.now(), appends to queue

dismissNotification: (id: string) => void
  // removes notification with matching id from queue

clearAll: () => void
  // empties queue
```

**Notes:** NotificationBanner reads `queue[0]` only — it shows one notification at a time. When `dismissNotification` is called on the current notification, the next one in the queue becomes `queue[0]` and auto-shows. Notifications on S09 are pushed on a schedule driven by a `useEffect` in the S09 page component — not by user actions. Example schedule: push first notification 5s after mount, push second 30s later, etc.

---

### ExitInterceptSlice

Manages the three-stage exit intercept flow (S14).

| Field | Type | Default | Set by |
|---|---|---|---|
| `stage` | `ExitInterceptStage` | `0` | `beginIntercept`, `advanceStage` |
| `isIntercepting` | `boolean` | `false` | `beginIntercept`, `resetIntercept` |

**Actions:**

```typescript
beginIntercept: () => void
  // sets isIntercepting: true, stage: 1

advanceStage: () => void
  // increments stage by 1; if stage === 3, does not advance further (stage 3 is terminal)

resetIntercept: () => void
  // sets stage: 0, isIntercepting: false; called after user exits via stage 3 or stays via stages 1/2
```

**Notes:** `beginIntercept` is called by BackButton when the user tries to navigate away from S09. The ExitInterceptModal listens to `isIntercepting` and `stage` to determine what to render. Stage 3 is the only stage where `resetIntercept` can be called (the user exits). In stages 1 and 2, the user can either `advanceStage` (continue trying to leave) or `resetIntercept` + stay on feed.

---

### SecureLoopSlice

Covered within OnboardingSlice (`secureLoopRound`). No separate slice needed.

---

### UISlice

General UI state.

| Field | Type | Default | Set by |
|---|---|---|---|
| `activeTab` | `TabId` | `'feed'` | `setActiveTab` |
| `activeTransitionDirection` | `'up' \| 'down'` | `'up'` | `setTransitionDirection` |

**Actions:**

```typescript
setActiveTab: (tab: TabId) => void
setTransitionDirection: (direction: 'up' | 'down') => void
```

---

### Full Store Type

```typescript
type LurchStore =
  OnboardingSlice &
  ScoreSlice &
  FeedSlice &
  PaywallSlice &
  NotificationSlice &
  ExitInterceptSlice &
  UISlice
```

Store is created with `create<LurchStore>()(...)` using Zustand's standard pattern. No middleware required (no persistence, no devtools in production). Slices are composed by spreading their `StateCreator` results in a single `create` call.

---

## 4. Screen-to-Component Map

| Screen | Components Used | Zustand Reads | Zustand Writes |
|---|---|---|---|
| **S01 Splash** | ScreenWrapper, SplashLogo, CTAButton | — | setTransitionDirection |
| **S02 Gender Identity** | ScreenWrapper, OnboardingShell, OnboardingProgress, BackButton, VirtualizedSelectList, SelectableListItem, DisplayHeading, CTAButton | gender | setGender, setTransitionDirection |
| **S03 Preference** | ScreenWrapper, OnboardingShell, OnboardingProgress, BackButton, OptionCard, DisplayHeading, CTAButton | preference | setPreference, setTransitionDirection |
| **S04 Attachment Style** | ScreenWrapper, OnboardingShell, OnboardingProgress, BackButton, OptionCard, SecureLoopCounter, DisplayHeading, CTAButton | attachmentStyle, secureLoopRound | setAttachmentStyle, incrementSecureLoop, setTransitionDirection |
| **S04B Secure Exit** | ScreenWrapper, OnboardingShell, DisplayHeading, UIText, SerifMoment, CTAButton, GhostButton | secureLoopRound | setTransitionDirection |
| **S05 Wound Inventory** | ScreenWrapper, OnboardingShell, OnboardingProgress, BackButton, MultiSelectGrid, SelectableListItem, DisplayHeading, CTAButton | wounds | toggleWound, setTransitionDirection |
| **S06 Honest Question** | ScreenWrapper, OnboardingShell, OnboardingProgress, BackButton, SelectableListItem, ReflectionLine, DisplayHeading, CTAButton | honestAnswer | setHonestAnswer, setTransitionDirection |
| **S07 Processing** | ScreenWrapper, ProgressBar, TypewriterText, ProcessingStatus, ProcessingFootnote, SerifMoment, DisplayHeading | gender, preference, attachmentStyle, wounds, honestAnswer | setScores, revealScores, setTransitionDirection |
| **S08 Lurch Score** | ScreenWrapper, ScoreCard, ScoreCountUp, DividerLine, WarmNote, SerifMoment, DisplayHeading, UIText, CTAButton | lurchScore, avoidanceScore, anxietyScore, ghostRisk, scoresRevealed | revealScores, setTransitionDirection |
| **S09 Main Feed** | FeedShell, ScreenWrapper, TopBar, TabBar, ActivityBanner, LikesLockPanel, CardStack, ProfileCard, WoundBadge, AttachmentBadge, GhostDetectorBadge, ActionRow, TypingIndicator, NotificationBanner, DisplayHeading | currentCardIndex, profiles, matchedProfile, hasMatched, typingIndicatorActive, queue, activeTab | advanceCard, setMatch, recordSwipe, setTypingIndicator, pushNotification, dismissNotification, setActiveTab, openPaywall, beginIntercept, setTransitionDirection |
| **S10 Profile Cards** | (archetypes rendered via ProfileCard in S09's CardStack; no separate screen route) | — | — |
| **S11 Match Screen** | ModalOverlay, MatchOverlay, AvatarPairAnimation, StatsCard, DisplayHeading, UIText, CTAButton, GhostButton | matchedProfile, hasMatched | openPaywall, clearMatch, setTransitionDirection |
| **S12 Paywall** | ScreenWrapper, ModalOverlay, PaywallCountdown, FeatureListItem, CandidCopyBlock, SocialProofBlock, DarkPatternLabel, DisplayHeading, UIText, SerifMoment, CTAButton, GhostButton | matchName, expiryTimestamp, isPaywallOpen | closePaywall |
| **S13 AI Wingman** | ScreenWrapper, FeedShell, TabBar, FeatureListItem, PunchlineCard, DisplayHeading, UIText, SerifMoment, CTAButton, GhostButton | activeTab | setActiveTab, setTransitionDirection |
| **S14 Exit Intercept** | ModalOverlay, ExitInterceptModal, ExitStageGuilty, ExitStageDesperate, ExitStageConfession, DisplayHeading, UIText, SerifMoment, CTAButton, GhostButton | stage, isIntercepting | advanceStage, resetIntercept, setTransitionDirection |
| **S15 Truth Screen** | ScreenWrapper, ResearchDataCard, WhatHappenedList, DisplayHeading, UIText, SerifMoment, CTAButton, GhostButton | — | resetOnboarding (optional, for restart flow) |

---

## 5. Shared Animation Variants

All variants are Framer Motion `Variants` objects. Import and reuse across components — do not redefine inline.

---

### `slideUpScreen`

Screen enters from below (forward navigation).

```
initial:  { y: '100%', opacity: 0 }
animate:  { y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }
exit:     { y: '-100%', opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } }
```

**Used by:** ScreenWrapper (direction='up')

---

### `slideDownScreen`

Screen exits downward (back navigation).

```
initial:  { y: '-100%', opacity: 0 }
animate:  { y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }
exit:     { y: '100%', opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } }
```

**Used by:** ScreenWrapper (direction='down')

---

### `fadeIn`

Standard opacity fade, 250ms.

```
initial:  { opacity: 0 }
animate:  { opacity: 1, transition: { duration: 0.25, ease: 'easeOut' } }
exit:     { opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }
```

**Used by:** ModalOverlay backdrop, ExitStageGuilty/Desperate/Confession content, SplashLogo tagline, GhostButton (dim state), SocialProofBlock

---

### `fadeInSlow`

Slow opacity fade, 800ms. For emotional serif moments.

```
initial:  { opacity: 0 }
animate:  { opacity: 1, transition: { duration: 0.8, ease: 'easeIn' } }
exit:     { opacity: 0, transition: { duration: 0.4, ease: 'easeOut' } }
```

**Used by:** SerifMoment (fadeIn state), WarmNote, ProcessingFootnote

---

### `fadeUpStagger`

Parent variant. Children use `fadeUpItem`.

```
// parent
initial:  {}
animate:  { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }

// child (fadeUpItem)
initial:  { opacity: 0, y: 16 }
animate:  { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
```

**Used by:** StatsCard rows, FeatureListItem lists (S12, S13), WhatHappenedList items, ResearchDataCard grid, ScoreCard reveal (delayed per card)

---

### `scalePress`

Active/press state for interactive elements.

```
whileTap: { scale: 0.96, transition: { duration: 0.08 } }
```

**Used by:** CTAButton, GhostButton, OptionCard, SelectableListItem, ActionRow buttons, TabBar tabs

---

### `notificationSlide`

Banner slides down from above top bar.

```
initial:  { y: '-100%', opacity: 0 }
animate:  { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }
exit:     { y: '-100%', opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } }
```

**Used by:** NotificationBanner

**Notes:** ⚠️ CONSTRAINT: Entry must be exactly 400ms (`duration: 0.4`). Auto-dismiss after 4000ms (`autoDismissMs` default).

---

### `screenShake`

Horizontal shake triggered on back gesture before ExitInterceptModal opens.

```
animate: {
  x: [0, -12, 12, -8, 8, -4, 4, 0],
  transition: { duration: 0.4, ease: 'easeInOut' }
}
```

**Used by:** ExitInterceptModal (applied to the screen container before the modal slides up)

**Notes:** Applied once on `beginIntercept`. The shake completes before ExitInterceptModal's enter animation begins — sequence them with an `onComplete` callback.

---

### `matchAvatarLeft`

Left avatar (user) enters from off-screen left.

```
initial:  { x: '-60vw', opacity: 0 }
animate:  { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
```

**Used by:** AvatarPairAnimation (user avatar)

---

### `matchAvatarRight`

Right avatar (match) enters from off-screen right.

```
initial:  { x: '60vw', opacity: 0 }
animate:  { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
```

**Used by:** AvatarPairAnimation (match avatar)

---

### `avatarPulse`

Brief scale pulse when both avatars meet at centre.

```
animate: {
  scale: [1, 1.08, 1],
  transition: { duration: 0.3, ease: 'easeInOut', delay: 0.5 }
}
```

**Notes:** `delay: 0.5` ensures pulse starts after the slide-to-centre animations complete. Applied to both avatars simultaneously.

**Used by:** AvatarPairAnimation (both avatars, after `matchAvatarLeft`/`matchAvatarRight` complete)

---

### `dividerDraw`

Horizontal line draws left-to-right.

```
initial:  { width: 0 }
animate:  { width: '100%', transition: { duration: 0.4, ease: 'easeInOut' } }
```

**Used by:** DividerLine

---

### `cardStackDepth`

Non-top cards in CardStack have visual depth via scale and offset.

```
// depth 1 (second card)
{ scale: 0.96, y: 8, opacity: 0.6 }

// depth 2 (third card)
{ scale: 0.92, y: 16, opacity: 0.3 }
```

**Notes:** Applied as initial/animate props directly on non-top ProfileCard instances — not a named variant but defined here as a shared constant. When the top card flies off, depth-1 and depth-2 cards animate to their new positions with a spring: `{ type: 'spring', stiffness: 300, damping: 24 }`.

**Used by:** CardStack (applied to ProfileCard children at index +1 and +2)

---

### `cardSpringBack`

Card returns to centre after a drag that does not cross threshold.

```
animate: {
  x: 0,
  y: 0,
  rotate: 0,
  opacity: 1,
  transition: { type: 'spring', stiffness: 300, damping: 20 }
}
```

**Used by:** ProfileCard (drag release below threshold)

---

### `cardFlyOff`

Card flies off screen with momentum when drag exceeds threshold.

```
// flyLeft
animate: { x: '-160vw', rotate: -30, opacity: 0,
  transition: { type: 'spring', stiffness: 200, damping: 20 } }

// flyRight
animate: { x: '160vw', rotate: 30, opacity: 0,
  transition: { type: 'spring', stiffness: 200, damping: 20 } }
```

**Notes:** Direction determined at swipe commit. Spring physics preserves the velocity of the drag gesture — pass `velocity` from the drag event into the `transition` to maintain momentum feel.

**Used by:** ProfileCard (drag release above threshold, or ActionRow button press)

---

### `stageSlideIn`

Stage content slides in from the right inside ExitInterceptModal.

```
initial:  { x: '100%', opacity: 0 }
animate:  { x: 0, opacity: 1, transition: { duration: 0.25, ease: 'easeOut' } }
exit:     { x: '-100%', opacity: 0, transition: { duration: 0.2, ease: 'easeIn' } }
```

**Used by:** ExitStageGuilty, ExitStageDesperate, ExitStageConfession (wrapped in AnimatePresence with `mode='wait'`)

---

*End of component specification. Total components: 52. Total screens: 15. Total Zustand slices: 7.*
