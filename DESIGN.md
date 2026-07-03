# LURCH — Visual Design Reference

Extracted from the live codebase on 2026-07-04. This is the source of truth for
building new screens consistently. Where the codebase itself is inconsistent,
that's documented explicitly (see §7) rather than papered over — check before
assuming.

---

## 1. Color

### 1.1 Two parallel systems exist — know which one you're in

**System A — hardcoded hex (majority pattern, onboarding + most components)**
No shared token, values typed literally inline. This is what ~95% of existing
components actually do.

**System B — `lib/theme.ts` `useColors()` hook + `.phone-shell[data-theme]` CSS
vars (`--app-*`)** — dark/light switchable, consumed by nav shell (`TopBar`,
`TabBar`, `FeedShell`, `MatchesShell`) and newer screens (`ai`, `profile`,
`ProfileDetailPanel`).

They use **different hex values for the same role** (surface, text, muted).
**Recommendation for new work: use System B (`useColors()`)** — it's the only
one that supports the light theme toggle and is where nav-adjacent code already
lives. Don't invent a third value for an existing role; match whichever system
the screen you're extending already uses.

| Role | System A (hardcoded, legacy) | System B (`theme.ts`, dark) | System B (`theme.ts`, light) |
|---|---|---|---|
| App bg | `#0F0D0B` | `#0F0D0B` | `#FAF8F6` |
| Surface 1 | `#1A1612` | `#141210` | `#FFFFFF` |
| Surface 2 | `#231E18` | `#1E1A16` | `#EDE8E4` |
| Border | `#2E2720` | `#2E2720` | `#E5E0DA` |
| Text primary | `#EDE8DF` (or `#F0EDED`) | `#F0EDED` | `#1A1210` |
| Text muted | `#8A8070` (or `#AEADAD`) | `#AEADAD` | `#5A5550` |
| Text whisper (dimmest) | `#6A6060` | `#6A6060` | `#9A9590` |
| Desktop surround (outside phone shell) | `#050403` | — | — |

`#8A8070` vs `#AEADAD` for "muted" are both in live use with no clear rule
distinguishing them (§7). `#8A8070` skews warm/dim, `#AEADAD` skews neutral
grey — pick based on which reads better against the specific bg, not by role.

### 1.2 Brand reds — two, with distinct jobs

| Color | Hex | Use for |
|---|---|---|
| Oxblood | `#8B1A1A` | Primary CTA button surface, big swipe-Like button, back-button chevron, wound/damage accent dividers |
| Splash red | `#E94057` | Selected-state fill on option rows, active tab, eyebrow/label text, brand accents, countdown numerals |

### 1.3 Semantic / accent colors

| Color | Hex | Use for |
|---|---|---|
| Warning / urgency amber | `#C97B2A` | Fake-scarcity UI: `CTAButton variant="warning"`, `ActivityBanner`, countdown bars, desperate-exit-stage notification box |
| Urgency bg (paired with amber) | `#1E1400` | Background behind amber urgency containers only |
| Success green | `#4A7C59` | "LURCH" (swipe-right) stamp, paywall feature checkmarks, correct-guess highlight |
| Ghost/danger red | `#C0392B` | High-risk `GhostDetectorBadge` state, "PASS" swipe stamp |
| Super-like purple | `#8B5CB8` | Super-Like button only (`ActionRow`) — one-off, not reused elsewhere |
| Dislike coral | `#E07060` | Dislike/X button only (`ActionRow`) — one-off, not reused elsewhere |
| Chip/badge pink-red | `#EB7676` | `WoundBadge`, `AttachmentBadge` chip fill (text sits on top in near-black `#101010`) |
| Notification pill pink | `#FFAEAE` | `NotificationPill` toast only — a third, distinct pink from the two below |
| Pink sub-copy | `#FDA6A6` | Narrow: unselected sublabel text on `/onboarding/attachment` rows only — not a general "sub" color |

### 1.4 The "manipulation card" — a deliberate light-mode intrusion

A recurring, high-signal pattern: dark app UI is interrupted by a **light,
warm gradient card** at match/paywall moments, on purpose, for psychological
contrast against the oxblood/near-black default palette.

- Background: `linear-gradient(125deg, rgb(230,230,230) 10%, rgb(247,196,196) 95%)`
- Inner content flips to dark-on-light: body text `#323232`/`#1A0A0A`/`#2C2C2C`, secondary text `#707070`, inner white card `#FDFDFD`, button text `#EAE6E6`
- CTA button inside stays oxblood `#8B1A1A` — the one color constant that survives the palette flip
- Used in: `MatchOverlay`, `PaywallPage`, `MatchesScreen` paywall card, `SecurePopup` (`onboarding/attachment`)

Use this pattern specifically for "big emotional / big ask" moments (match
reveal, paywall), not for routine UI — its power is that it's rare.

---

## 2. Typography

### 2.1 Fonts (loaded, live)

| Variable | Stack | Loaded via | Role |
|---|---|---|---|
| `--font-display` | `'Cal Sans', 'Clash Display', sans-serif` | Cal Sans: jsDelivr CDN `@font-face`, weight 600. Clash Display: Fontshare `<link>`, weights 600/700 | Headings, numerals, labels, brand, eyebrows |
| `--font-ui` | `var(--font-inter), sans-serif` | `next/font/google` | Body copy, UI text — also used for `SerifMoment` and `TypewriterText` despite their names |
| `--font-serif` | `var(--font-instrument), Georgia, serif` | `next/font/google`, Instrument Serif, weight 400 normal+italic | Sparse — `OptionCard` sublabel, "Good enough." subtext |

`Plus Jakarta Sans` is loaded (`next/font/google`, 700/800) but has **zero
usages** anywhere. Dead weight — don't build on it, and feel free to remove
the import if touching `layout.tsx`.

`SerifMoment` renders `var(--font-ui)` (Inter), not the serif font — the name
is misleading, don't assume otherwise.

### 2.2 Screen-heading convention (apply to any new full-screen view)

- Heading: `font-display`, **38px**, weight 600, line-height 1.1–1.15, color `#F0EDED`
- Subtitle: `font-ui`, **14px**, line-height 1.5, color `#AEADAD`

### 2.3 Eyebrow label — a recurring but never-extracted pattern

Used in ≥6 places (ai/pay/truth pages, `MatchOverlay`, `ProfileDetailPanel`
cards) with near-identical values, reimplemented inline each time. **Worth
extracting into a shared component next time you touch one of these screens.**

- `font-display`, **10–11px**, uppercase, letter-spacing `0.12em`–`0.18em`
- **Red** (`#E94057`) = branded/urgent context marker (default meaning)
- **Grey** (`#6A6060`) = neutral option numbering, e.g. "OPTION A" on `/pay` — do not use red for this case

### 2.4 Component type specs

| Component | Font | Size | Weight/Style | Color |
|---|---|---|---|---|
| `DisplayHeading` | display | xl≈48px / lg≈36px / md≈30px (Tailwind scale) | bold, uppercase | `#EDE8DF` |
| `UIText` | ui | xs/sm/base | normal/medium/semibold | `#EDE8DF`, or `#8A8070` when `muted` |
| `SerifMoment` | ui (not serif — see above) | 15px | italic, line-height 1.75 | `#F0EDED` |
| `ReflectionLine` | ui | 13px | italic, line-height 1.6 | `#AEADAD`, left border `2px solid rgba(232,230,234,0.15)` |
| `TypewriterText` | **display** | 15px | line-height 1.5, cursor `\|` in `#E94057` pulsing | `#F0EDED` |
| `DarkPatternLabel` | ui | 12px (text-xs) | italic | `#8A8070` |

---

## 3. Spacing & Radius

### 3.1 Phone shell

- `max-width: 430px`, `height: 100dvh` (with `100vh` / `-webkit-fill-available` fallbacks)
- Desktop framing: `box-shadow: 0 0 0 1px rgba(255,255,255,0.07), 0 40px 100px rgba(0,0,0,0.9)`
- Below 430px viewport: shadow drops, shell goes edge-to-edge

### 3.2 Radius — by component family, not by token

`--radius-*` tokens exist in `globals.css` (`card:12px`, `chip:8px`, `btn:4px`,
`pill:999px`) but are **not consistently honored** — treat the table below as
ground truth, not the tokens.

| Component family | Radius |
|---|---|
| Option/selection rows (`OptionCard`, `MultiSelectGrid`, `AttachmentRow`) | 15px |
| Buttons (`CTAButton`) | 8px |
| Profile/photo cards | 16–20px (varies: ProfileCard 20px, detail-panel PhotoCard 16px, MatchesScreen MiniCard 15px) |
| Modal sheet top corners | 16px (`rounded-t-2xl`) |
| Manipulation card (match/paywall gradient) | 14–25px — inconsistent between instances, don't treat either as canonical |
| Chips/badges (`GhostDetectorBadge`) | 8px |
| Chips/badges (`WoundBadge`, `AttachmentBadge`) | 12px, fixed 24px height (reads as pill-ish despite radius) |
| `BackButton` | 16px on 56×56px |
| `TopBar` icon buttons | 14px on 48×48px |
| `NotificationPill` | 20px |
| `/pay` surface cards | 16px (note: not 15px like option rows) |
| `/truth` confession-list container | 12px, rows inside are flat (no individual radius) |

### 3.3 Onboarding shell spacing

- Horizontal padding: **28px**
- Top padding: `env(safe-area)+16px`
- Body padding: `20px 28px 32px`
- Progress dots: height 6px, radius 3px, inactive width 14px / active width 22px, gap 6px, inactive `#4A4540`, **active is pure white `#FFFFFF`** (not accent red)

---

## 4. Motion (`lib/animations.ts`)

| Preset | Purpose | Values |
|---|---|---|
| `slideUpScreen` / `slideDownScreen` | full-screen vertical transition | y ±100%, fade, 0.3s easeOut both directions |
| `fadeIn` | generic content fade | 0.25s easeOut in / 0.2s easeIn out |
| `fadeInSlow` | emotional/slow reveal | 0.8s easeIn in / 0.4s easeOut out |
| `fadeUpStagger` + `fadeUpItem` | staggered list reveal | stagger 0.08s, delay 0.1s; item y 16→0, 0.4s easeOut |
| `scalePressProps` | tap feedback, used on nearly every button | scale 0.96, 0.08s |
| `notificationSlide` | toast-in from top | y -100%→0, 0.4s in / 0.3s out |
| `screenShakeSequence` | imperative shake | x [0,-12,12,-8,8,-4,4,0], 0.4s easeInOut |
| `matchAvatarLeft` / `matchAvatarRight` | match-screen avatar entrance | x ±60vw→0, scale 0.85→1, 0.45s easeOut |
| `avatarPulseProps` | match avatar pulse ring | scale [1,1.12,1] + boxShadow ring, delay 0.5s |
| `dividerDraw` | animated line draw | width 0→100%, 0.4s easeInOut |
| `cardStackDepth(index)` | swipe-deck depth calc | scale 1-i*0.04, y i*8, zIndex 10-i |
| `stageSlideIn` | exit-intercept modal stage transitions | x 100%→0, 0.25s in / -100% 0.2s out |

**Spring configs** (inline, not centralized — match these if adding to the same area):
- Swipe card stack: `{ stiffness: 300, damping: 28 }`, drag elastic 0.5
- `NotificationPill` entrance: `{ stiffness: 400, damping: 32, mass: 0.8 }`
- `ProfileDetailPanel` sheet: `{ stiffness: 340, damping: 36 }`
- `MatchesScreen` paywall card: `{ stiffness: 320, damping: 30, delay: 0.15 }`
- `ScreenWrapper` (top-level page transition, hardcoded, not in animations.ts): cubic-bezier `[0.25,0.46,0.45,0.94]` in (0.28s) / `[0.55,0,1,0.45]` out (0.22s)

**No confetti/particle effects exist anywhere** — match celebration is the
avatar pulse-ring + staggered stat reveal, nothing more. Don't assume
confetti is "missing," it was never part of the language.

**Deceptive-by-design timing** (part of the satire, not a bug):
- `ProgressBar` (processing screen): fake non-linear loading curve (fast→slow→fast: 0%@0, 45%@20%, 72%@70%, 78%@85%, 100%@100%), glow `0 0 10px rgba(233,64,87,0.7)`
- `TypingIndicator`: 1.2s pulse, staggered 0.2s/dot — **never resolves** (explicit code comment)
- `PaywallCountdown`: uses `setInterval`, explicitly NOT Framer Motion — code comment flags this is deliberate (RAF-driven animation can throttle in background tabs; a countdown needs wall-clock accuracy)
- Typewriter reveals (`TypewriterText`, `WarmNote`): 18–28ms/char, paragraph pause 480–600ms

---

## 5. Component Patterns

### 5.1 Buttons

- **`CTAButton`**: full-width, uppercase, `font-ui` 13px/600/letter-spacing 0.09em, padding `18px 24px`, radius 8px.
  - `variant="primary"`: bg `#8B1A1A`, border `1px solid rgba(255,255,255,0.12)`, shadow `0 6px 28px rgba(139,26,26,0.5), inset 0 1px 0 rgba(255,255,255,0.1)`
  - `variant="warning"`: bg `#C97B2A`, glow `rgba(201,123,42,0.45)` — use for manufactured-urgency CTAs
  - disabled: bg `#1A1612`, border `1px solid #2E2720`, text `#8A8070`, no shadow
- **`GhostButton`**: transparent underlined text, `py-3 min-h-[44px]`, 14px, underline `#8A8070` (or `#2E2720` when `dim`). **Always paired below a `CTAButton`** as the "reject/dismiss" action — primary CTA + dim ghost "no thanks" link is the standard two-button screen footer.

### 5.2 Option/selection rows

`OptionCard`, `MultiSelectGrid`, `AttachmentRow` are three near-duplicate
implementations of the same visual pattern (consolidation opportunity, not a
design divergence): 15px radius, padding `16px 20px`, unselected border `1px
solid rgba(232,230,234,0.25)` on transparent bg, selected bg/border `#E94057`
with text flipping to `#0F0D0B` for contrast, checkmark animates in
scale+opacity over 0.15s.

`SelectableListItem` (flat lists, e.g. gender picker) is different: no
radius, `borderBottom: 1px solid #2E2720`, selected bg `#231E18`, check icon
in **oxblood** `#8B1A1A` (not splash red) via `lucide-react`.

### 5.3 Cards

- **Swipe cards** (`ProfileCard`/`MiniCard`/`PhotoCard`): `photoColor` bg painted first (never transparent while loading), gradient overlay `linear-gradient(to top, rgba(0,0,0,0.97) 0%, ...70%, transparent)`, distance pill top-left (`rgba(15,13,11,0.6)` + `backdrop-filter: blur(10px)`, 7px radius), LURCH/PASS stamps (3px solid border, rotated ±6–10deg, `#4A7C59`/`#C0392B`) fade in based on drag-x.
- **`WoundBadge` / `AttachmentBadge`**: byte-for-byte duplicated components (§7) — bg `#EB7676`, 12px radius, 24px height, text `#101010` 11.5px.
- **`GhostDetectorBadge`**: bg `#1E1410`, border 1px (oxblood, or `#C0392B` when risk ≥ 65), 8px radius, `lucide-react` Ghost icon.
- **Empty state** (`CardStack` "no more profiles"): `font-display` 2xl bold `#2E2720` (deliberately near-invisible against bg), serif-italic subtext `#8A8070`.
- **Stat row** (`ScoreCountUp` and reused shape in `MatchOverlay`/`ProfileDetailPanel`): label 13px `#AEADAD` left, value `font-display` 22px/700 `#EDE8DF` `-0.02em` tracking right, `tabular-nums`, 16px vertical padding, 1px `#2E2720` divider (omit on last row). Good candidate for extraction if you add a fourth stat surface.

### 5.4 Overlays / modals

- **`ModalOverlay`**: backdrop `rgba(15,13,11,0.92)` — near-opaque, not a translucent blur. Sheet slides from bottom, `y:100%→0` 0.35s easeOut in / 0.25s easeIn out, `rounded-t-2xl`, bg `#1A1612`, `border: 1px solid #2E2720` (no bottom border).
- **`ExitInterceptModal`**: 3 staged full-bleed screens (Guilty→Desperate→Confession) via `stageSlideIn`, `preventClose` set.
- **`NotificationPill`**: top-right toast, bg `#FFAEAE`, 20px radius, shadow `0 2px 10px rgba(0,0,0,0.18)`, spring-in from right.

### 5.5 Nav

- **`BackButton`**: 56×56px, 16px radius, bg `#1A1612`, border `1.5px solid #3A3530` (this border shade is unique to BackButton — not reused), chevron `#E94057`.
- **`TopBar`**: `var(--app-bg)`/`var(--app-border)` (System B), theme toggle + AI button both 48×48px/14px radius/transparent/`1px solid var(--app-border)`. Title `font-display` 22px/600; city subtitle `font-ui` 11px `var(--app-whisper)`.
- **`TabBar`**: height `60px + safe-area-bottom`, active `#E94057`, inactive `#AEADAD` — the cleanest canonical active/inactive pair in the codebase, use this exact combination for any new active-state indicator. Badge dot: 10px circle, `#E94057`.

---

## 6. Content/Tone Conventions (affects visual, not just copy)

- No literal `"DARK PATTERN:"` label prefix system exists — satire is delivered through footnote/confession copy (`processingMessages.ts` `PROCESSING_FOOTNOTES`), not a tagged callout component.
- `DarkPatternLabel` component exists but is styled identically to other italic meta-text (no distinct badge/icon treatment) — if you want dark-pattern annotations to visually stand out, that's an open gap, not an established pattern to match.
- Fabricated social proof (`ACTIVITY_MESSAGES`, `NOTIFICATION_MESSAGES` in `lib/data/activityMessages.ts`) drives the amber `ActivityBanner` and pink `NotificationPill` — any new "engagement nudge" copy should route through one of these two existing surfaces rather than inventing a third.

---

## 7. Known Inconsistencies (read before "fixing" something that looks wrong)

1. **Three color systems coexist**: `--color-*` CSS `@theme` tokens (mostly unused downstream), `theme.ts` `useColors()` hook (System B, dark+light), and hardcoded inline hex (System A, majority of components). Don't assume a mismatch is a bug — check which system the surrounding code uses.
2. **Radius tokens are aspirational** — `--radius-btn: 4px` but `CTAButton` uses 8px; cards range 14–25px; option rows use 15px with no matching token at all. Follow §3.2's per-family table, not the tokens.
3. **Two "muted" text colors** (`#8A8070`, `#AEADAD`) used interchangeably, no documented rule.
4. **`SerifMoment` doesn't use the serif font** (renders Inter, not Instrument Serif).
5. **Plus Jakarta Sans is loaded but never used** anywhere in `app/` or `components/`.
6. **`--font-display` is a two-font stack** (Cal Sans primary, Clash Display fallback), not "just Cal Sans."
7. **`WoundBadge` and `AttachmentBadge` are duplicate components** — consolidate if touching either.
8. **A full light theme exists** (`theme.ts` LIGHT palette, toggled via `TopBar` sun/moon button) — easy to forget since most screens were built/reviewed in dark mode only. Check both when changing anything in System B territory.

---

## 8. Where things live

| Concern | File(s) |
|---|---|
| Color tokens (System A) | `app/globals.css` (`@theme` block) |
| Color tokens (System B) | `lib/theme.ts`, `.phone-shell[data-theme]` in `app/globals.css` |
| Fonts | `app/layout.tsx` (Fontshare `<link>`, `next/font/google` calls), `app/globals.css` (`@font-face` for Cal Sans) |
| Animation presets | `lib/animations.ts` |
| Typography components | `components/typography/*.tsx` |
| Buttons/inputs | `components/inputs/*.tsx` |
| Cards/badges | `components/cards/*.tsx` |
| Overlays/modals | `components/overlays/*.tsx`, `components/layout/ModalOverlay.tsx` |
| Nav | `components/nav/*.tsx` |
| Onboarding shell | `components/layout/OnboardingShell.tsx` |
