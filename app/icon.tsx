import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="26" height="17" viewBox="0 0 100 64" fill="none">
          <path
            d="M8,8 L8,56 M8,8 L34,56 M34,8 L34,56 L54,18 L74,56 L94,8"
            stroke="#2E372C"
            strokeWidth={11}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
