type DoodleProps = {
  size?: number;
  color?: string;
  className?: string;
};

/** Hand-drawn fern frond, replaces the 🌿 emoji. */
export function FernDoodle({ size = 64, color = "#5C6555", className }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M50 96 C 48 70, 49 40, 52 6"
        stroke={color}
        strokeWidth={3.6}
        strokeLinecap="round"
        strokeDasharray="3 3.2"
      />
      {[14, 26, 38, 50, 62, 74].map((y, i) => {
        const left = i % 2 === 0;
        const x1 = 51 - (y - 6) * 0.04;
        const x2 = left ? x1 - 22 + i * 1.5 : x1 + 22 - i * 1.5;
        const y2 = y - 14;
        return (
          <path
            key={y}
            d={`M${x1} ${y} Q ${(x1 + x2) / 2} ${y - 6}, ${x2} ${y2}`}
            stroke={color}
            strokeWidth={2.8}
            strokeLinecap="round"
            strokeDasharray="2.6 2.8"
            opacity={0.78 + i * 0.035}
          />
        );
      })}
    </svg>
  );
}

/** Pressed flower sticker, replaces the 🌸 emoji. */
export function FlowerDoodle({ size = 48, color = "#E3AEB8", className }: DoodleProps) {
  const petals = Array.from({ length: 5 });
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden
    >
      {petals.map((_, i) => {
        const angle = (i * 360) / petals.length;
        return (
          <ellipse
            key={i}
            cx={50}
            cy={26}
            rx={13}
            ry={20}
            stroke={color}
            strokeWidth={3}
            strokeDasharray="2.8 2.6"
            transform={`rotate(${angle} 50 50)`}
          />
        );
      })}
      <circle
        cx={50}
        cy={50}
        r={8}
        stroke="#7E8A6E"
        strokeWidth={2.6}
        strokeDasharray="1.4 2.2"
      />
    </svg>
  );
}

/** Two-leaf sprout, replaces the 🌱 emoji. */
export function SeedlingDoodle({ size = 56, color = "#5C6555", className }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M50 94 C 50 70, 50 52, 50 40"
        stroke={color}
        strokeWidth={3.6}
        strokeLinecap="round"
        strokeDasharray="3 3.2"
      />
      <path
        d="M50 56 C 36 54, 24 44, 20 28 C 38 28, 49 38, 50 56 Z"
        stroke={color}
        strokeWidth={3}
        strokeDasharray="2.6 2.6"
      />
      <path
        d="M50 46 C 62 44, 74 35, 79 20 C 62 21, 51 30, 50 46 Z"
        stroke={color}
        strokeWidth={3}
        strokeDasharray="2.6 2.6"
      />
    </svg>
  );
}

/** Trailing vine with alternating leaves, replaces the 🌿 emoji. */
export function VineDoodle({ size = 64, color = "#7E8A6E", className }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M20 6 C 50 18, 30 36, 58 46 C 84 56, 56 72, 80 94"
        stroke={color}
        strokeWidth={3.2}
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
      {[
        { cx: 32, cy: 14, r: 14 },
        { cx: 46, cy: 40, r: 12 },
        { cx: 66, cy: 60, r: 13 },
        { cx: 70, cy: 86, r: 11 },
      ].map((leaf, i) => (
        <ellipse
          key={i}
          cx={leaf.cx}
          cy={leaf.cy}
          rx={leaf.r}
          ry={leaf.r * 0.62}
          stroke={color}
          strokeWidth={2.6}
          strokeDasharray="2.4 2.4"
          transform={`rotate(${i % 2 === 0 ? -35 : 35} ${leaf.cx} ${leaf.cy})`}
        />
      ))}
    </svg>
  );
}

/** Round potted succulent, replaces the 🪴 emoji. */
export function SucculentDoodle({ size = 60, color = "#7E8A6E", className }: DoodleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M26 64 L20 92 L80 92 L74 64 Z"
        stroke="#8A6F4A"
        strokeWidth={2.8}
        strokeDasharray="2.6 2.6"
      />
      {[
        { cx: 50, cy: 50, r: 22, rot: 0 },
        { cx: 30, cy: 56, r: 16, rot: -18 },
        { cx: 70, cy: 56, r: 16, rot: 18 },
      ].map((bulb, i) => (
        <path
          key={i}
          d={`M${bulb.cx} ${bulb.cy + bulb.r} C ${bulb.cx - bulb.r} ${bulb.cy + bulb.r * 0.3}, ${bulb.cx - bulb.r * 0.7} ${bulb.cy - bulb.r}, ${bulb.cx} ${bulb.cy - bulb.r} C ${bulb.cx + bulb.r * 0.7} ${bulb.cy - bulb.r}, ${bulb.cx + bulb.r} ${bulb.cy + bulb.r * 0.3}, ${bulb.cx} ${bulb.cy + bulb.r} Z`}
          stroke={color}
          strokeWidth={2.6}
          strokeDasharray="2.4 2.4"
          transform={`rotate(${bulb.rot} ${bulb.cx} ${bulb.cy})`}
        />
      ))}
    </svg>
  );
}

/** Tiny dashed code glyph (bracket / brace / tag) used in the orbiting cloud. */
export function CodeGlyphDoodle({
  glyph,
  size = 30,
  color = "#A9B49C",
  className,
}: DoodleProps & { glyph: "brace" | "angle" | "bracket" | "dot" | "slash" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 40 40",
    fill: "none" as const,
    className,
    "aria-hidden": true as const,
  };
  switch (glyph) {
    case "brace":
      return (
        <svg {...common}>
          <path
            d="M24 6 C16 6, 17 14, 13 18 C10 20, 10 20, 13 22 C17 26, 16 34, 24 34"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray="1 4"
          />
        </svg>
      );
    case "angle":
      return (
        <svg {...common}>
          <path
            d="M16 10 L6 20 L16 30"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray="1 4"
          />
          <path
            d="M24 10 L34 20 L24 30"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray="1 4"
          />
        </svg>
      );
    case "bracket":
      return (
        <svg {...common}>
          <path
            d="M14 8 H9 V32 H14 M26 8 H31 V32 H26"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray="1 4"
          />
        </svg>
      );
    case "slash":
      return (
        <svg {...common}>
          <path
            d="M27 8 L13 32"
            stroke={color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray="1 4"
          />
        </svg>
      );
    case "dot":
    default:
      return (
        <svg {...common}>
          <circle cx={12} cy={20} r={1.6} fill={color} />
          <circle cx={20} cy={20} r={1.6} fill={color} />
          <circle cx={28} cy={20} r={1.6} fill={color} />
        </svg>
      );
  }
}
