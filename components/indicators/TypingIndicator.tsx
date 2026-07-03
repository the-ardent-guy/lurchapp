"use client";

// CONSTRAINT: This indicator NEVER resolves. Never add a timeout or cleanup that clears it.
export function TypingIndicator() {
  return (
    <div
      className="flex items-center justify-center gap-1.5 py-2.5 shrink-0"
      style={{ borderTop: "1px solid #2E2720" }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#8A8070",
            display: "inline-block",
            animation: `typingPulse 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes typingPulse {
          0%, 60%, 100% { opacity: 0.3; transform: scale(1); }
          30% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}
