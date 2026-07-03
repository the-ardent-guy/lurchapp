"use client";

interface Props {
  label: string;
  small?: boolean;
}

export function TraitBadge({ label, small = false }: Props) {
  return (
    <span
      style={{
        background: "transparent",
        border: "1px solid #8B1A1A",
        borderRadius: "12px",
        height: "24px",
        padding: "0 10px",
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-ui)",
        fontSize: small ? "10px" : "11.5px",
        color: "#C0392B",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {label}
    </span>
  );
}
