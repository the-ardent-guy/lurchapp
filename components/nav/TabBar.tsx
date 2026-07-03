"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { scalePressProps } from "@/lib/animations";
import type { TabId } from "@/lib/store";
import { useLurchStore } from "@/lib/store";
import { useRouter } from "next/navigation";

interface Props {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const ACTIVE = "#E94057";
const INACTIVE = "#AEADAD";

function FeedIcon({ active }: { active: boolean }) {
  const c = active ? ACTIVE : INACTIVE;
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="2" y="2" width="8" height="10" rx="2" fill={c}/>
      <rect x="12" y="2" width="8" height="6" rx="2" fill={c}/>
      <rect x="12" y="10" width="8" height="10" rx="2" fill={c}/>
      <rect x="2" y="14" width="8" height="6" rx="2" fill={c}/>
    </svg>
  );
}

function HeartIcon({ active }: { active: boolean }) {
  const c = active ? ACTIVE : INACTIVE;
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M11 19C11 19 3 13.5 3 8C3 5.5 5 3.5 7.5 3.5C9 3.5 10.3 4.2 11 5.2C11.7 4.2 13 3.5 14.5 3.5C17 3.5 19 5.5 19 8C19 13.5 11 19 11 19Z"
        stroke={c}
        strokeWidth={active ? 2 : 1.5}
        fill={active ? c : "none"}
      />
    </svg>
  );
}

function ChatIcon({ active }: { active: boolean }) {
  const c = active ? ACTIVE : INACTIVE;
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M4 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-4 3V6a2 2 0 0 1 2-2z"
        stroke={c}
        strokeWidth={active ? 1.8 : 1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={active ? `${c}18` : "none"}
      />
    </svg>
  );
}

const TABS: {
  id: TabId;
  label: string;
  badge?: boolean;
  icon: (active: boolean) => React.ReactNode;
}[] = [
  { id: "feed",     label: "Discover", icon: (a) => <FeedIcon active={a} /> },
  { id: "messages", label: "Matches",  icon: (a) => <HeartIcon active={a} />, badge: true },
  { id: "wingman",  label: "Chat",     icon: (a) => <ChatIcon active={a} /> },
  { id: "profile",  label: "Profile",  icon: (a) => <User size={22} color={a ? ACTIVE : INACTIVE} strokeWidth={a ? 2 : 1.5} fill={a ? "rgba(233,64,87,0.1)" : "none"} /> },
];

export function TabBar({ activeTab, onTabChange }: Props) {
  const router = useRouter();
  const { setTransitionDirection } = useLurchStore();

  const handleTabPress = (id: TabId) => {
    if (id === "messages") {
      onTabChange(id);
      setTransitionDirection("up");
      router.push("/matches");
      return;
    }
    if (id === "wingman") {
      onTabChange(id);
      setTransitionDirection("up");
      router.push("/ai");
      return;
    }
    if (id === "feed") {
      onTabChange(id);
      router.push("/feed");
      return;
    }
    if (id === "profile") {
      onTabChange(id);
      router.push("/profile");
      return;
    }
    onTabChange(id);
  };

  return (
    <div
      className="flex items-stretch shrink-0"
      style={{
        background: "var(--app-bg)",
        borderTop: "1px solid var(--app-border)",
        height: "calc(60px + env(safe-area-inset-bottom, 0px))",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      {TABS.map(({ id, label, icon, badge }) => {
        const isActive = activeTab === id;
        return (
          <motion.button
            key={id}
            {...scalePressProps}
            onClick={() => handleTabPress(id)}
            className="flex-1 flex flex-col items-center justify-center gap-1"
          >
            <div className="relative">
              {icon(isActive)}
              {badge && (
                <span
                  className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
                  style={{ background: ACTIVE }}
                />
              )}
            </div>
            <span
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "10px",
                fontWeight: isActive ? 600 : 400,
                color: isActive ? ACTIVE : INACTIVE,
                letterSpacing: "0.01em",
                lineHeight: 1,
              }}
            >
              {label}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
