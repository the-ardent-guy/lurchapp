"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  visible: boolean;
}

const PARAGRAPHS = [
  "You don't need an app to do an analysis of you. You're not a dataset. You're not a compatibility score or a wound index.",
  "A very beautiful person once told me: be kind and have courage. I'd like to add, wear a nice perfume, fix your dressing, and read a book. You're good to go.",
  "For the women reading this: you have spent your whole life being evaluated. Your looks, your weight, your laugh, whether you're too much or not enough. This app is about to do it again. Just know that the evaluation says nothing true about you. It never has.",
];

const CHAR_DELAY = 18;        // ms per character
const PARA_PAUSE = 480;       // ms pause before starting next paragraph
const FOOTER_DELAY = 600;     // ms after last paragraph before footer appears

export function WarmNote({ visible }: Props) {
  const [phase, setPhase] = useState<{ para: number; chars: number }>({ para: 0, chars: 0 });
  const [footerVisible, setFooterVisible] = useState(false);

  // Reset when visibility toggles
  useEffect(() => {
    if (!visible) {
      setPhase({ para: 0, chars: 0 });
      setFooterVisible(false);
    }
  }, [visible]);

  // Typewriter tick
  useEffect(() => {
    if (!visible) return;

    const { para, chars } = phase;
    const currentText = PARAGRAPHS[para];

    if (!currentText) {
      // All paragraphs done — show footer after a beat
      const t = setTimeout(() => setFooterVisible(true), FOOTER_DELAY);
      return () => clearTimeout(t);
    }

    if (chars < currentText.length) {
      // Still typing current paragraph
      const t = setTimeout(
        () => setPhase((p) => ({ ...p, chars: p.chars + 1 })),
        CHAR_DELAY
      );
      return () => clearTimeout(t);
    }

    if (para < PARAGRAPHS.length - 1) {
      // Paragraph done — pause then advance to next
      const t = setTimeout(
        () => setPhase({ para: para + 1, chars: 0 }),
        PARA_PAUSE
      );
      return () => clearTimeout(t);
    }

    // Last paragraph finished — show footer
    const t = setTimeout(() => setFooterVisible(true), FOOTER_DELAY);
    return () => clearTimeout(t);
  }, [phase, visible]);

  if (!visible) return null;

  return (
    <div style={{ maxWidth: "88%", display: "flex", flexDirection: "column", gap: "22px" }}>

      {/* Heading — Cal Sans, not typed */}
      <p style={{
        fontFamily: "var(--font-display)",
        fontSize: "22px",
        fontWeight: 600,
        lineHeight: "1.3",
        color: "#F0EDED",
      }}>
        None of those numbers are real.
      </p>

      {/* Typed paragraphs */}
      {PARAGRAPHS.map((text, i) => {
        if (i > phase.para) return null;

        const displayText =
          i < phase.para ? text : text.slice(0, phase.chars);

        return (
          <p
            key={i}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "15px",
              fontWeight: 600,
              lineHeight: "1.75",
              color: i === 2 ? "#F0EDED" : "#AEADAD",
              minHeight: "1.75em",
            }}
          >
            {displayText}
            {/* Blinking cursor on the active paragraph */}
            {i === phase.para && phase.chars < text.length && (
              <span
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1em",
                  background: "#E94057",
                  marginLeft: "2px",
                  verticalAlign: "text-bottom",
                  animation: "cursorBlink 0.9s step-end infinite",
                }}
              />
            )}
          </p>
        );
      })}

      {/* Footer — fades in after typing completes */}
      <AnimatePresence>
        {footerVisible && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "12px",
              fontStyle: "italic",
              color: "#6A6060",
              marginTop: "4px",
            }}
          >
            Now. Let&apos;s ruin it.
          </motion.p>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
