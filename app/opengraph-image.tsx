import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F0D0B",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 140, fontWeight: 700, color: "#E94057", letterSpacing: -4 }}>
          LURCH
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "#E4CECE", marginTop: 12 }}>
          We match you on your trauma.
        </div>
      </div>
    ),
    { ...size }
  );
}
