import { ImageResponse } from "next/og";

export const alt = "Nicole Wang, Portfolio";
export const size = { width: 1200, height: 630 };
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
          justifyContent: "center",
          padding: "80px 100px",
          background:
            "radial-gradient(120% 90% at 78% 8%, #F1F0C8 0%, rgba(241,240,200,0) 42%), radial-gradient(110% 80% at 12% 0%, #D9E4E0 0%, rgba(217,228,224,0) 48%), linear-gradient(180deg, #EEF1DE 0%, #FBFAF3 64%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 22px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.65)",
            border: "1px solid rgba(60,70,58,0.12)",
            color: "#6B7363",
            fontSize: 22,
            fontWeight: 600,
            width: "fit-content",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#E3AEB8",
            }}
          />
          Data · Design · Storytelling
        </div>

        <div
          style={{
            marginTop: 36,
            fontSize: 132,
            fontFamily: "serif",
            color: "#2E372C",
            lineHeight: 0.95,
            letterSpacing: -2,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          Nicole&nbsp;
          <span style={{ fontStyle: "italic", color: "#7E8A6E", fontWeight: 400 }}>
            Wang.
          </span>
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            color: "#4A5446",
            maxWidth: 820,
          }}
        >
          Data Science &amp; Economics @ Berkeley: AI engineering, strategy,
          and research.
        </div>
      </div>
    ),
    { ...size }
  );
}
