"use client";

interface Props {
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
  size?: "sm" | "base" | "xs";
  weight?: "normal" | "medium" | "semibold";
}

export function UIText({ children, className = "", muted = false, size = "base", weight = "normal" }: Props) {
  const sizeClass = size === "sm" ? "text-sm" : size === "xs" ? "text-xs" : "text-base";
  const weightClass = weight === "semibold" ? "font-semibold" : weight === "medium" ? "font-medium" : "font-normal";
  const color = muted ? "#8A8070" : "#EDE8DF";

  return (
    <p
      className={`${sizeClass} ${weightClass} leading-relaxed ${className}`}
      style={{ fontFamily: "var(--font-ui)", color }}
    >
      {children}
    </p>
  );
}
