"use client";

import { TopBar } from "@/components/nav/TopBar";
import { TabBar } from "@/components/nav/TabBar";
import { useLurchStore } from "@/lib/store";

interface Props {
  children: React.ReactNode;
}

export function FeedShell({ children }: Props) {
  const { activeTab, setActiveTab } = useLurchStore();

  return (
    <div className="flex flex-col h-full" style={{ background: "var(--app-bg)" }}>
      <TopBar />
      <div className="flex-1 overflow-hidden relative">
        {children}
      </div>
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
