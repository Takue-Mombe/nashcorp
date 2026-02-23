import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

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
          padding: "64px",
          background:
            "linear-gradient(140deg, #2a1d12 0%, #4a3020 45%, #6b4a32 100%)",
          color: "#f5f0e8",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 32, letterSpacing: 4, textTransform: "uppercase" }}>
          Tinashe Gore Carpentry Studio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 86, lineHeight: 1.05 }}>Where Wood Becomes Art</div>
          <div style={{ fontSize: 32, opacity: 0.9 }}>
            Bespoke furniture, cabinetry, and fine joinery in Harare.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
