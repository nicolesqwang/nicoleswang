import CodeCloud from "./CodeCloud";

/**
 * A line-drawn phone with an orbiting "code cloud" living inside the screen.
 */
export default function Phone({ width = 250 }: { width?: number }) {
  const height = width * 1.55;
  const phoneWidth = width * 0.72;
  const phoneHeight = phoneWidth * 2.05;

  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: phoneWidth,
          height: phoneHeight,
          borderRadius: 28,
          border: "2px solid #3D1B30",
          background: "#2A1320",
          boxShadow: "0 30px 60px -28px rgba(60,30,50,0.55)",
          overflow: "hidden",
        }}
      >
        {/* notch */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: "50%",
            width: phoneWidth * 0.32,
            height: 6,
            borderRadius: 4,
            transform: "translateX(-50%)",
            background: "rgba(255,255,255,0.22)",
            zIndex: 4,
          }}
        />
        {/* screen */}
        <div
          style={{
            position: "absolute",
            inset: 6,
            borderRadius: 22,
            overflow: "hidden",
            background:
              "radial-gradient(circle at 50% 42%, #5C2A47 0%, #2A1320 75%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CodeCloud size={phoneWidth * 1.05} withBackground={false} />
        </div>
      </div>
    </div>
  );
}
