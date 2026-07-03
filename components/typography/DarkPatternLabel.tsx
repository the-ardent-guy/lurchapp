"use client";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function DarkPatternLabel({ children, className = "" }: Props) {
  return (
    <p
      className={`text-xs leading-snug ${className}`}
      style={{ fontFamily: "var(--font-ui)", color: "#8A8070", fontStyle: "italic" }}
    >
      {children}
    </p>
  );
}
