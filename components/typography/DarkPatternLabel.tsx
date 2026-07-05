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
        color: "#C97B2A",
        opacity: 0.7,
        fontStyle: "italic",
        letterSpacing: "0.06em",
        ...style,
      }}
    >
      {children}
    </p>
  );
}
