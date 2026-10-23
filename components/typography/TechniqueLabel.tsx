"use client";

interface Props {
  technique: string; // e.g. "Loss Aversion"
  detail?: string;
  light?: boolean; // for rare use on light surfaces
  style?: React.CSSProperties;
}

// Names the dark pattern being used, out loud. Mono, muted. Used on paywalls,
// the /truth list, and the boost sheet.
export function TechniqueLabel({ technique, detail, light = false, style }: Props) {
  return (
    <p
      style={{
        fontFamily: "var(--font-mono, var(--font-display))",
        fontSize: "12px",
        letterSpacing: "0.02em",
        color: light ? "#6B5550" : "#9A958C",
        ...style,
      }}
    >
      <span style={{ opacity: 0.7 }}>Technique: </span>
      <span style={{ color: light ? "#8F2A31" : "#C44B4B" }}>{technique}</span>
      {detail ? <span style={{ opacity: 0.7 }}> · {detail}</span> : null}
    </p>
  );
}
