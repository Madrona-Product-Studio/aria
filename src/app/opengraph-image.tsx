import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
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
          background: "linear-gradient(135deg, #faf5ff 0%, #f0e6ff 50%, #e8d5f5 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "#1f2937",
              letterSpacing: "-1px",
            }}
          >
            Aria Health
          </div>
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#6b7280",
            fontWeight: 400,
          }}
        >
          Your guide through menopause
        </div>
      </div>
    )
  );
}
