"use client";

interface Props {
  label: string;
}

// Attachment label — neutral brutalist outline chip.
export function AttachmentBadge({ label }: Props) {
  return (
    <span
      style={{
        background: "transparent",
        border: "1px solid #3D3D3D",
        borderRadius: "12px",
        height: "24px",
        padding: "0 10px",
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-ui)",
        fontSize: "11.5px",
        color: "#C9C3B8",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {label}
    </span>
  );
}
