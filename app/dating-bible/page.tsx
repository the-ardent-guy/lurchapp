import Link from "next/link";

export const metadata = {
  title: "The Dating Bible — Lurch",
  description: "Coming soon.",
};

export default function DatingBible() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        background: "var(--black)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 5rem)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grain layer (inherited from body) */}

      {/* Faint red glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(123,29,42,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Lock mark */}
      <div style={{ marginBottom: "3rem", position: "relative" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            border: "1.5px solid var(--border-dark)",
            borderRadius: "4px",
            margin: "0 auto 0.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "16px",
              height: "20px",
              border: "1.5px solid var(--oxblood)",
              borderRadius: "2px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "12px",
                height: "12px",
                border: "1.5px solid var(--oxblood)",
                borderBottom: "none",
                borderRadius: "6px 6px 0 0",
              }}
            />
          </div>
        </div>
        <p className="fine-print" style={{ fontSize: "0.55rem", color: "#2A2A26", letterSpacing: "0.2em" }}>
          LOCKED
        </p>
      </div>

      {/* Wordmark */}
      <div style={{ position: "relative", marginBottom: "2rem" }}>
        <span
          aria-hidden
          className="lurch-logo"
          style={{
            fontSize: "clamp(1.5rem, 5vw, 3rem)",
            color: "var(--oxblood)",
            position: "absolute",
            top: "3px",
            left: "3px",
            userSelect: "none",
            pointerEvents: "none",
            lineHeight: 1,
          }}
        >
          The Dating Bible
        </span>
        <h1
          className="lurch-logo text-cream"
          style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)", position: "relative", lineHeight: 1 }}
        >
          The Dating Bible
        </h1>
      </div>

      <p
        style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontWeight: 700,
          fontSize: "clamp(0.9rem, 2vw, 1.15rem)",
          color: "var(--gray)",
          maxWidth: "480px",
          lineHeight: 1.6,
          marginBottom: "1rem",
        }}
      >
        The original rules of attraction — before the apps, before the algorithms,
        before you outsourced your love life to a server farm in California.
      </p>

      <p className="fine-print" style={{ fontSize: "0.65rem", color: "#2A2A26", letterSpacing: "0.12em", marginBottom: "4rem" }}>
        Not yet. When it's ready, you'll know.
      </p>

      {/* Separator */}
      <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--border-dark), transparent)", marginBottom: "2.5rem" }} />

      <Link
        href="/"
        className="fine-print"
        style={{ fontSize: "0.65rem", color: "#4A4540", letterSpacing: "0.15em", textDecoration: "none" }}
      >
        ← BACK TO LURCH
      </Link>
    </main>
  );
}
