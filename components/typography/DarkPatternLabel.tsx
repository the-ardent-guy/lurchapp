"use client";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function DarkPatternLabel({ children, className = "", style }: Props) {
  return (
    <p
      className={`leading-snug ${className}`}
      style={{
        fontFamily: "var(--font-ui)",
        fontSize: "11px",
        color: "#8B4A1E",
        opacity: 1,
        fontWeight: 600,
        fontStyle: "normal",
        letterSpacing: "0.06em",
        ...style,
      }}
    >
      {children}
    </p>
  );
}
