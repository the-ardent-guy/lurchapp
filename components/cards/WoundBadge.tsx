"use client";

interface Props {
  label: string;
}

// Wound tag — oxblood-tinted, not candy pink. One accent system.
export function WoundBadge({ label }: Props) {
  return (
    <span
      style={{
        background: "rgba(107,30,35,0.22)",
        border: "1px solid rgba(107,30,35,0.6)",
        borderRadius: "2px",
        height: "24px",
        padding: "0 10px",
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-ui)",
        fontSize: "11.5px",
        color: "#F0DCDA",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {label}
    </span>
  );
}
