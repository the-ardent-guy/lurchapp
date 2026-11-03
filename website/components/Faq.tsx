"use client";

import { useState } from "react";

const QA: [string, string][] = [
  ["Is Lurch a real dating app?", "As real as the others. It just admits it."],
  ["Will I find love here?", "No. You'll find out why you haven't."],
  ["Is it free?", "Yes. Every paywall is fake and has a way out."],
  ["Do you sell my data?", "We don't collect any. Just disappointment."],
  ["Can I talk to a real person?", "That's the problem, isn't it."],
];

export default function Faq() {
  const [locked, setLocked] = useState(true);

  return (
    <div className={`faq${locked ? " faq-locked" : ""}`} style={{ position: "relative", maxWidth: 760, margin: "0 auto" }}>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--s4)" }}>
        {QA.map(([q, a]) => (
          <li key={q} style={{ borderBottom: "1px solid var(--border)", paddingBottom: "var(--s4)" }}>
            <p className="serif" style={{ fontSize: "20px", marginBottom: "8px" }}>{q}</p>
            <p className="faq-answer" style={{ fontSize: "16px", color: "var(--muted)" }} aria-hidden={locked}>
              {a}
            </p>
          </li>
        ))}
      </ul>

      {locked && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--s3)",
            textAlign: "center",
            padding: "var(--s4)",
          }}
        >
          <div
            className="card"
            style={{
              padding: "var(--s5) var(--s4)",
              background: "var(--sheet)",
              maxWidth: 360,
              width: "100%",
            }}
          >
            <p className="serif" style={{ fontSize: "20px", marginBottom: "4px" }}>See the answers.</p>
            <p style={{ fontSize: "16px", color: "var(--danger)", marginBottom: "var(--s4)" }}>₹299/mo</p>
            <button type="button" className="btn btn-block" onClick={() => setLocked(false)}>
              I&apos;ll stay confused
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
