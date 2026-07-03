"use client";

interface Props {
  label: string;
}

export function AttachmentBadge({ label }: Props) {
  return (
    <span
      style={{
        background: "#EB7676",
        borderRadius: "12px",
        height: "24px",
        padding: "0 10px",
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-ui)",
        fontSize: "11.5px",
        color: "#101010",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {label}
    </span>
  );
}
