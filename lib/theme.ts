"use client";

import { useLurchStore } from "./store";

const DARK = {
  bg: "#0F0D0B",
  surface: "#141210",
  surface2: "#1E1A16",
  border: "#2E2720",
  text: "#F0EDED",
  muted: "#AEADAD",
  whisper: "#6A6060",
  cardTile: "rgba(255,255,255,0.04)",
  cardTileBorder: "rgba(255,255,255,0.08)",
};

const LIGHT = {
  bg: "#FAF8F6",
  surface: "#FFFFFF",
  surface2: "#EDE8E4",
  border: "#E5E0DA",
  text: "#1A1210",
  muted: "#5A5550",
  whisper: "#9A9590",
  cardTile: "rgba(0,0,0,0.04)",
  cardTileBorder: "rgba(0,0,0,0.10)",
};

export function useColors() {
  const isDark = useLurchStore((s) => s.isDark);
  return isDark ? DARK : LIGHT;
}
