import { ImageResponse } from "next/og";

export const alt = "Lurch. Finally, love optimised.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Black card with "You, 29 / Ghost 87%" and a lime NOPE stamp, per the plan.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          color: "#F5F0E8",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 800, letterSpacing: 2 }}>LURCH</div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              position: "relative",
              width: 460,
              height: 320,
              background: "#201012",
              border: "1px solid #2A2A2A",
              borderRadius: 16,
              padding: 28,
            }}
          >
            <div
              style={{
                display: "flex",
                position: "absolute",
                top: 28,
                right: 28,
                color: "#C44B4B",
                fontSize: 26,
                fontWeight: 700,
              }}
            >
              Ghost 87%
            </div>
            <div
              style={{
                display: "flex",
                position: "absolute",
                top: 96,
                left: 60,
                transform: "rotate(-14deg)",
                color: "#C8F000",
                border: "6px solid #C8F000",
                borderRadius: 12,
                padding: "6px 26px",
                fontSize: 72,
                fontWeight: 800,
              }}
            >
              NOPE
            </div>
            <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>You, 29</div>
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "#9A958C" }}>
          Finally, love optimised. We match you on your trauma.
        </div>
      </div>
    ),
    { ...size }
  );
}
