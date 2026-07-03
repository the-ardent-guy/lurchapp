"use client";

import { TabBar } from "@/components/nav/TabBar";
import { useLurchStore } from "@/lib/store";

interface Props {
  children: React.ReactNode;
}

export function MatchesShell({ children }: Props) {
  const { activeTab, setActiveTab } = useLurchStore();

  return (
    <div className="flex flex-col h-full" style={{ background: "#0F0D0B" }}>
      <div className="flex-1 overflow-hidden relative" style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>
        {children}
      </div>
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
