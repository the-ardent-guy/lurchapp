import type { ScorePayload } from "./store";

// Deterministic score computation — same answers always produce same scores.
// Scores are satirically arbitrary by design. lurchScore (woundDepth) is always high.
export function computeScores(wounds: string[], honestAnswer: string | null): ScorePayload {
  const woundDepth = Math.min(55 + wounds.length * 5, 100);

  const ghostRisk =
    honestAnswer === "validation" ? 52
    : honestAnswer === "feel-something" ? 38
    : honestAnswer === "relationship" ? 41
    : honestAnswer === "boredom" ? 61
    : 47;

  const patternRepeat = wounds.length >= 7 ? 5.1 : wounds.length >= 4 ? 4.2 : 3.1;

  const readiness =
    honestAnswer === "relationship" ? 38
    : honestAnswer === "dont-know" ? 29
    : 31;

  return { woundDepth, ghostRisk, patternRepeat, readiness };
}

export function formatCountdown(ms: number): string {
  if (ms <= 0) return "00:00:00";
  const totalSeconds = Math.floor(ms / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

// Non-linear progress — fast → slow → fast
export function progressKeyframes(durationMs: number): [number, number][] {
  return [
    [0, 0],
    [durationMs * 0.2, 0.45],
    [durationMs * 0.7, 0.72],
    [durationMs * 0.85, 0.78],
    [durationMs, 1.0],
  ];
}

export function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
