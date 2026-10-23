import Link from "next/link";
import { COPY } from "@/lib/copy";

export default function NotFound() {
  return (
    <div
      style={{
        height: "100%",
        background: "#0A0A0A",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 32px calc(env(safe-area-inset-bottom, 0px) + 32px)",
        gap: "18px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          color: "#C44B4B",
        }}
      >
        {COPY.notFoundSub}
      </p>
      <h1
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "40px",
          fontWeight: 600,
          lineHeight: 1.1,
          color: "#F5F0E8",
        }}
      >
        {COPY.notFound}
      </h1>
      <p
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "14px",
          fontStyle: "italic",
          lineHeight: 1.6,
          color: "#9A958C",
          marginBottom: "12px",
        }}
      >
        This page saw your message, started typing, and left. Very on brand.
      </p>

      <Link
        href="/feed"
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          background: "#6B1E23",
          border: "1px solid rgba(245,240,232,0.14)",
          borderRadius: "2px",
          padding: "16px 24px",
          fontFamily: "var(--font-ui)",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#F5F0E8",
          textDecoration: "none",
        }}
      >
        Back to Discover
      </Link>
      <Link
        href="/truth"
        style={{
          display: "block",
          textAlign: "center",
          fontFamily: "var(--font-ui)",
          fontSize: "13px",
          color: "#9A958C",
          textDecoration: "underline",
          textUnderlineOffset: "3px",
        }}
      >
        Read the truth instead
      </Link>
    </div>
  );
}
