// Shared decorative pattern pieces (grid/dot textures, dashed orbit rings)
// reused across the project case-study pages and the hobbies section.

// Dashed/dotted circle accent, slowly orbiting in place. Reuses the same
// spin keyframes as CodeCloud's orbit rings for a consistent feel.
export function RingAccent({
  size,
  duration,
  reverse,
  dashed = true,
  color = "rgba(60,70,58,0.32)",
  className,
}: {
  size: number;
  duration: number;
  reverse?: boolean;
  dashed?: boolean;
  color?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none ${reverse ? "orbit-ring-rev" : "orbit-ring"} ${className ?? ""}`}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: dashed ? `1.5px dashed ${color}` : `2px dotted ${color}`,
        animationDuration: `${duration}s`,
      }}
    />
  );
}

// Light grid texture, for laying over colored/gradient backgrounds.
export function GridTexture({
  opacity = 0.07,
  size = 44,
  color = "#fff",
}: {
  opacity?: number;
  size?: number;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
        opacity,
      }}
    />
  );
}

export function DotTexture({
  opacity = 0.4,
  size = 24,
  color = "rgba(60,70,58,0.12)",
}: {
  opacity?: number;
  size?: number;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
        opacity,
      }}
    />
  );
}
