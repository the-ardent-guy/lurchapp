"use client";

import { useEffect, useRef, useState } from "react";

type Card = { name: string; sub: string; ghost?: string; self?: boolean };

const CARDS: Card[] = [
  { name: "You, 27", sub: "your city", self: true },
  { name: "Mehak, 29", sub: "Mumbai", ghost: "Ghost 22%" },
  { name: "Priya, 27", sub: "Bangalore", ghost: "Ghost 68%" },
  { name: "Kavya, 29", sub: "Delhi", ghost: "Ghost 45%" },
];

// Initial of the name, used as a plain avatar block (no stock photos).
function initial(name: string) {
  return name.trim().charAt(0).toUpperCase();
}

export default function HeroPhone() {
  const [index, setIndex] = useState(0);
  const [swiping, setSwiping] = useState(false);
  const [reduced, setReduced] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReduced(true);
      return;
    }
    const push = (fn: () => void, ms: number) => {
      timers.current.push(setTimeout(fn, ms));
    };
    let i = 0;
    const cycle = () => {
      // hold on the current card, then swipe it away and advance
      const holdFor = i === 0 ? 1600 : 2000; // linger a beat longer on the "You" card
      push(() => {
        setSwiping(true);
        push(() => {
          i = (i + 1) % CARDS.length;
          setIndex(i);
          setSwiping(false);
          cycle();
        }, 500);
      }, holdFor);
    };
    cycle();
    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, []);

  const card = CARDS[index];
  const showNope = card.self;

  return (
    <div className="phone" aria-hidden="true">
      <span className="phone-notch" />
      <div className="phone-screen">
        <div className="swipe-stack">
          <div className={`swipe-card${swiping && !reduced ? " swipe-anim" : ""}`}>
            {/* plain avatar block - no photographs */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: card.self ? "#201012" : "#17130f",
                color: "rgba(245,240,232,0.10)",
                fontFamily: "var(--font-stamp-face)",
                fontSize: "120px",
                lineHeight: 1,
              }}
            >
              {initial(card.name)}
            </div>

            {card.ghost && <span className="ghost-tag">{card.ghost}</span>}

            {showNope && (
              <span className={`nope-stamp${reduced ? " in" : " in"}`}>NOPE</span>
            )}

            <div className="meta">
              <div className="swipe-name">{card.name}</div>
              <div className="swipe-sub">{card.sub}</div>
            </div>
          </div>
        </div>

        {showNope && (
          <p className="phone-caption">Judged in 0.3 seconds. Welcome.</p>
        )}
      </div>
    </div>
  );
}
