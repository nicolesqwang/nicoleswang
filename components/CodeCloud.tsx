import { CodeGlyphDoodle } from "./Doodles";

type Glyph = "brace" | "angle" | "bracket" | "dot" | "slash";

type Ring = {
  radius: number;
  duration: number;
  reverse?: boolean;
  glyphs: { glyph: Glyph; angle: number; size: number; color: string }[];
};

type Snippet = { text: string; top: string; left: string; rotate: number; size: number };

const DARK_INK = "#2A1320";
const DARK_INK_SOFT = "#5C2A47";

// Background "code" texture — dim on purpose, just slightly lighter than
// the dark backdrop so it reads as ambient detail, not a focal point.
const SNIPPETS: Snippet[] = [
  { text: "git push", top: "14%", left: "10%", rotate: -6, size: 9 },
  { text: "https://", top: "26%", left: "58%", rotate: 4, size: 8.5 },
  { text: "import pandas", top: "48%", left: "6%", rotate: -3, size: 8 },
  { text: 'print("Hello World")', top: "64%", left: "26%", rotate: 5, size: 7.5 },
  { text: "</>", top: "74%", left: "68%", rotate: -8, size: 11 },
  { text: "npm run dev", top: "6%", left: "48%", rotate: 3, size: 8 },
];

const GLOW_DEFAULT = "rgba(227,174,184,0.28)";

const RINGS: Ring[] = [
  {
    radius: 46,
    duration: 14,
    glyphs: [
      { glyph: "brace", angle: 20, size: 16, color: "#E3AEB8" },
      { glyph: "dot", angle: 160, size: 16, color: "#F0D6DB" },
      { glyph: "slash", angle: 280, size: 14, color: "#C98FB0" },
    ],
  },
  {
    radius: 78,
    duration: 22,
    reverse: true,
    glyphs: [
      { glyph: "angle", angle: 60, size: 18, color: "#C98FB0" },
      { glyph: "bracket", angle: 190, size: 16, color: "#E3AEB8" },
      { glyph: "dot", angle: 320, size: 14, color: "#F0D6DB" },
    ],
  },
];

export type CodeCloudPalette = {
  ink?: string;
  inkSoft?: string;
  glow?: string;
  orbitColor?: string;
  rings?: Ring[];
  snippets?: Snippet[];
};

/**
 * A halo of small dashed code-glyphs orbiting a center point, on a dark
 * backdrop for contrast against the rest of the (light) site palette.
 * Colors default to Kali's pink palette but can be overridden per-project
 * via `palette` so other dark project cards can get a matching halo.
 */
export default function CodeCloud({
  size = 220,
  withBackground = true,
  className,
  palette,
}: {
  size?: number;
  withBackground?: boolean;
  className?: string;
  palette?: CodeCloudPalette;
}) {
  const ink = palette?.ink ?? DARK_INK;
  const inkSoft = palette?.inkSoft ?? DARK_INK_SOFT;
  const glow = palette?.glow ?? GLOW_DEFAULT;
  const orbitColor = palette?.orbitColor ?? "rgba(201,143,176,0.32)";
  const rings = palette?.rings ?? RINGS;
  const snippets = palette?.snippets ?? SNIPPETS;
  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: "50%",
        background: withBackground
          ? `radial-gradient(circle at 38% 32%, ${inkSoft} 0%, ${ink} 72%)`
          : undefined,
        overflow: "hidden",
      }}
    >
      {/* dim ambient code text */}
      {snippets.map((s, i) => (
        <span
          key={i}
          className="pointer-events-none absolute whitespace-nowrap"
          style={{
            top: s.top,
            left: s.left,
            transform: `rotate(${s.rotate}deg)`,
            fontFamily: "ui-monospace, 'SF Mono', monospace",
            fontSize: s.size,
            color: "rgba(255,255,255,0.1)",
          }}
        >
          {s.text}
        </span>
      ))}

      {/* faint center glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "50%",
          left: "50%",
          width: size * 0.4,
          height: size * 0.4,
          transform: "translate(-50%,-50%)",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${glow}, rgba(0,0,0,0) 70%)`,
        }}
      />
      {rings.map((ring, ri) => (
        <div
          key={ri}
          className={ring.reverse ? "orbit-ring-rev" : "orbit-ring"}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 0,
            height: 0,
            animationDuration: `${ring.duration}s`,
          }}
        >
          {/* dashed orbit path */}
          <div
            className="pointer-events-none absolute rounded-full"
            style={{
              top: -ring.radius,
              left: -ring.radius,
              width: ring.radius * 2,
              height: ring.radius * 2,
              border: `1px dashed ${orbitColor}`,
            }}
          />
          {ring.glyphs.map((g, gi) => (
            <div
              key={gi}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                transform: `rotate(${g.angle}deg) translate(${ring.radius}px)`,
              }}
            >
              <div
                className={ring.reverse ? "orbit-counter-rev" : "orbit-counter"}
                style={{ animationDuration: `${ring.duration}s` }}
              >
                <CodeGlyphDoodle glyph={g.glyph} size={g.size} color={g.color} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
