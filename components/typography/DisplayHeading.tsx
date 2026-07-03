"use client";

interface Props {
  children: React.ReactNode;
  className?: string;
  size?: "xl" | "lg" | "md";
}

const sizes = {
  xl: "text-5xl leading-none tracking-tight",
  lg: "text-4xl leading-none tracking-tight",
  md: "text-3xl leading-tight tracking-tight",
};

export function DisplayHeading({ children, className = "", size = "xl" }: Props) {
  return (
    <h1
      className={`font-bold uppercase ${sizes[size]} ${className}`}
      style={{ fontFamily: "var(--font-display)", color: "#EDE8DF" }}
    >
      {children}
    </h1>
  );
}
