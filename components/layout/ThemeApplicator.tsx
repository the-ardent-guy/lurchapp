"use client";

import { useEffect } from "react";
import { useLurchStore } from "@/lib/store";

export function ThemeApplicator() {
  const isDark = useLurchStore((s) => s.isDark);
  useEffect(() => {
    const shell = document.querySelector<HTMLElement>(".phone-shell");
    if (shell) shell.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);
  return null;
}
