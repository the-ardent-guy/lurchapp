"use client";

import { useEffect, useRef, useState } from "react";

const NOTES = [
  "Your ex just joined. We thought you should know.",
  "Someone liked your photo from 2021. Your best one.",
  "3 people viewed your profile and didn't swipe.",
  "Priya is typing. Priya has stopped typing.",
];

const FIRST_DELAY = 8000;
const GAP = 15000;
const VISIBLE_FOR = 5000;

export default function FakeNotifications() {
  const [active, setActive] = useState<number | null>(null);
  const [shown, setShown] = useState(false); // controls the slide-in class
  const [closed, setClosed] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (closed) return;
    const t = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms);
      timers.current.push(id);
      return id;
    };

    const show = (i: number) => {
      setActive(i);
      setShown(false);
      t(() => setShown(true), 40); // next tick -> transition in
      t(() => setShown(false), VISIBLE_FOR); // fade out
      t(() => setActive(null), VISIBLE_FOR + 400); // unmount
      if (i + 1 < NOTES.length) {
        t(() => show(i + 1), GAP);
      }
    };

    t(() => show(0), FIRST_DELAY);

    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [closed]);

  if (active === null || closed) return null;

  return (
    <div className="notif-wrap" aria-hidden="true">
      <div className={`notif${shown ? " in" : ""}`}>
        <span className="notif-icon">L</span>
        <span className="notif-body">{NOTES[active]}</span>
        <button
          type="button"
          className="notif-close"
          tabIndex={-1}
          onClick={() => {
            timers.current.forEach(clearTimeout);
            setShown(false);
            setActive(null);
            setClosed(true);
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
