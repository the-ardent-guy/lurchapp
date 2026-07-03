"use client";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function DarkPatternLabel({ children, className = "" }: Props) {
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
      }}
    >
      {children}
    </p>
  );
}
