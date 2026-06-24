"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { SeedlingDoodle, VineDoodle } from "./Doodles";
import CodeCloud, { type CodeCloudPalette } from "./CodeCloud";

// Slugs whose dock card uses a dark/photo background, so the label needs
// light text instead of the default dark text.
const DARK_CARD_SLUGS = ["kali", "avicii", "bloomtasks", "arbiter"];

// Subset of DARK_CARD_SLUGS that also gets the orbiting code-glyph halo.
const HALO_SLUGS = ["kali", "avicii", "bloomtasks"];

// Halo colors tuned to each dark card's own cover/background palette.
const HALO_PALETTES: Record<string, CodeCloudPalette> = {
  bloomtasks: {
    ink: "#2D1E3A",
    inkSoft: "#5C3E63",
    glow: "rgba(233,174,184,0.32)",
    orbitColor: "rgba(217,207,239,0.36)",
    snippets: [
      { text: "due: today", top: "14%", left: "8%", rotate: -6, size: 9 },
      { text: "+ Add Task", top: "26%", left: "56%", rotate: 4, size: 8.5 },
      { text: "sync()", top: "48%", left: "6%", rotate: -3, size: 8 },
      { text: "Pomodoro 25:00", top: "64%", left: "22%", rotate: 5, size: 7.5 },
      { text: "✓ ✓ ✓", top: "74%", left: "66%", rotate: -8, size: 11 },
      { text: "import .xlsx", top: "6%", left: "44%", rotate: 3, size: 7.5 },
    ],
    rings: [
      {
        radius: 46,
        duration: 14,
        glyphs: [
          { glyph: "brace", angle: 20, size: 16, color: "#E3AEB8" },
          { glyph: "dot", angle: 160, size: 16, color: "#F0D6DB" },
          { glyph: "slash", angle: 280, size: 14, color: "#D9CFEF" },
        ],
      },
      {
        radius: 78,
        duration: 22,
        reverse: true,
        glyphs: [
          { glyph: "angle", angle: 60, size: 18, color: "#D9CFEF" },
          { glyph: "bracket", angle: 190, size: 16, color: "#E3AEB8" },
          { glyph: "dot", angle: 320, size: 14, color: "#F0D6DB" },
        ],
      },
    ],
  },
  avicii: {
    ink: "#1B1438",
    inkSoft: "#3B2E72",
    glow: "rgba(138,169,232,0.32)",
    orbitColor: "rgba(143,196,232,0.34)",
    snippets: [
      { text: "bpm: 128", top: "14%", left: "10%", rotate: -6, size: 9 },
      { text: "librosa.beat", top: "26%", left: "56%", rotate: 4, size: 8.5 },
      { text: "crossfade()", top: "48%", left: "6%", rotate: -3, size: 8 },
      { text: "key: A min", top: "64%", left: "26%", rotate: 5, size: 7.5 },
      { text: "~ ~ ~", top: "74%", left: "66%", rotate: -8, size: 11 },
      { text: "demucs.separate", top: "6%", left: "44%", rotate: 3, size: 7.5 },
    ],
    rings: [
      {
        radius: 46,
        duration: 14,
        glyphs: [
          { glyph: "brace", angle: 20, size: 16, color: "#C961D9" },
          { glyph: "dot", angle: 160, size: 16, color: "#5EEAC4" },
          { glyph: "slash", angle: 280, size: 14, color: "#6F8FE0" },
        ],
      },
      {
        radius: 78,
        duration: 22,
        reverse: true,
        glyphs: [
          { glyph: "angle", angle: 60, size: 18, color: "#5EEAC4" },
          { glyph: "bracket", angle: 190, size: 16, color: "#C961D9" },
          { glyph: "dot", angle: 320, size: 14, color: "#8FC4E8" },
        ],
      },
    ],
  },
};

// Renders a Link for normal projects, or a plain non-interactive div for
// projects still marked `comingSoon` so clicking them does nothing.
function CardShell({
  comingSoon,
  href,
  className,
  style,
  ariaLabel,
  onMouseEnter,
  onMouseLeave,
  children,
}: {
  comingSoon?: boolean;
  href: string;
  className: string;
  style?: React.CSSProperties;
  ariaLabel: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  children: React.ReactNode;
}) {
  if (comingSoon) {
    return (
      <div
        className={className}
        style={{ ...style, cursor: "default" }}
        aria-label={ariaLabel}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </div>
    );
  }
  return (
    <Link
      href={href}
      className={className}
      style={style}
      aria-label={ariaLabel}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Link>
  );
}

function getScale(hoveredIdx: number | null, thisIdx: number): number {
  if (hoveredIdx === null) return 1;
  const d = Math.abs(thisIdx - hoveredIdx);
  if (d === 0) return 1.34;
  if (d === 1) return 1.13;
  if (d === 2) return 1.02;
  return 0.9;
}

function getY(hoveredIdx: number | null, thisIdx: number): number {
  if (hoveredIdx === null) return 0;
  const d = Math.abs(thisIdx - hoveredIdx);
  if (d === 0) return -20;
  if (d === 1) return -7;
  return 0;
}

function getOpacity(hoveredIdx: number | null, thisIdx: number): number {
  if (hoveredIdx === null) return 1;
  const d = Math.abs(thisIdx - hoveredIdx);
  if (d === 0) return 1;
  if (d === 1) return 0.97;
  if (d === 2) return 0.8;
  return 0.5;
}

export default function WorkDock() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="work"
      className="relative overflow-hidden px-5 py-20 sm:py-28 sm:px-16"
      style={{
        background:
          "linear-gradient(180deg, #FBFAF3 0%, #EEF1DE 55%, #FBFAF3 100%)",
      }}
    >
      {/* Dot texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(#3C463A 1.4px, transparent 1.4px)",
          backgroundSize: "28px 28px",
          opacity: 0.035,
        }}
      />

      {/* Botanical accents */}
      <div
        className="pointer-events-none absolute top-[8%] left-[4%] opacity-45 animate-driftslow"
        aria-hidden
      >
        <SeedlingDoodle size={84} />
      </div>
      <div
        className="pointer-events-none absolute bottom-[6%] right-[5%] opacity-40 animate-drift"
        style={{ animationDelay: "0.8s" }}
        aria-hidden
      >
        <VineDoodle size={90} />
      </div>

      {/* Heading */}
      <motion.div
        className="mx-auto mb-4 max-w-[720px] text-center"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <span
          className="text-xs uppercase tracking-[3px]"
          style={{ fontFamily: "ui-monospace,monospace", color: "#9FB08A" }}
        >
          selected work
        </span>
        <h2
          className="mt-3 mb-3 leading-[1.02] tracking-tight"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontWeight: 500,
            fontSize: "clamp(36px, 5.2vw, 66px)",
            letterSpacing: "-1.4px",
          }}
        >
          The{" "}
          <span style={{ fontStyle: "italic", color: "#E3AEB8" }}>work</span>{" "}
          bench
        </h2>
        <p className="text-base leading-relaxed" style={{ color: "#6B7363" }}>
          Hover to magnify · click to open the full case study.
        </p>
      </motion.div>

      {/* Dock — desktop */}
      <div
        className="mx-auto mt-12 hidden max-w-[1240px] items-end justify-center gap-4 md:flex"
        aria-label="Projects dock"
      >
        {PROJECTS.map((p, i) => (
          <CardShell
            key={p.slug}
            href={`/work/${p.slug}`}
            comingSoon={p.comingSoon}
            className="group relative block focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 rounded-xl"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            ariaLabel={
              p.comingSoon ? `${p.title}, coming soon` : `View ${p.title} case study`
            }
          >
            <motion.div
              animate={{
                scale: getScale(hovered, i),
                y: getY(hovered, i),
                opacity: getOpacity(hovered, i),
              }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              style={{ transformOrigin: "center bottom", width: "clamp(120px,15vw,168px)" }}
            >
              {/* Card */}
              <div
                id={p.slug === "kali" ? "kali-card-slot" : undefined}
                className="relative overflow-hidden rounded-[14px]"
                style={{
                  aspectRatio: "4/5",
                  backgroundImage: p.thumbBg,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  border: "1px solid rgba(60,70,58,0.14)",
                  boxShadow: "0 16px 30px -22px rgba(60,70,58,0.5)",
                }}
              >
                {HALO_SLUGS.includes(p.slug) ? (
                  <CodeCloud
                    size={150}
                    withBackground={false}
                    className="pointer-events-none absolute -top-6 -right-10 opacity-90"
                    palette={HALO_PALETTES[p.slug]}
                  />
                ) : !DARK_CARD_SLUGS.includes(p.slug) ? (
                  /* Dot texture */
                  <div
                    className="pointer-events-none absolute inset-0 opacity-50"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(60,70,58,0.16) 1px, transparent 1px)",
                      backgroundSize: "14px 14px",
                    }}
                  />
                ) : null}
                {/* Bottom label */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div
                    className="text-sm font-semibold leading-tight"
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      color: DARK_CARD_SLUGS.includes(p.slug) ? "#E9ECCF" : "#2E372C",
                    }}
                  >
                    {p.shortTitle}
                  </div>
                  <div
                    className="mt-0.5 text-[11px]"
                    style={{ color: DARK_CARD_SLUGS.includes(p.slug) ? "#A9B49C" : "#5C6555" }}
                  >
                    {p.role}
                  </div>
                </div>
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-3 transition-opacity duration-300"
                  style={{
                    opacity: hovered === i ? 1 : 0,
                    background:
                      "linear-gradient(180deg, rgba(46,55,44,0.05) 0%, rgba(46,55,44,0.86) 70%)",
                    color: "#FBFAF3",
                  }}
                >
                  <div
                    className="text-base font-semibold leading-tight"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {p.title}
                  </div>
                  <div
                    className="mt-1.5 text-[11.5px] leading-snug"
                    style={{ color: "rgba(251,250,243,0.9)" }}
                  >
                    {p.oneLiner}
                  </div>
                  <div className="mt-2 text-[11px] font-semibold tracking-wide">
                    {p.comingSoon ? "Coming soon" : "Open case study →"}
                  </div>
                </div>
              </div>
            </motion.div>
          </CardShell>
        ))}
      </div>

      {/* Mobile: horizontal scroll row */}
      <div
        className="md:hidden flex gap-4 overflow-x-auto pb-4 mt-10 snap-x snap-mandatory"
        aria-label="Projects"
        style={{ scrollbarWidth: "none" }}
      >
        {PROJECTS.map((p, i) => (
          <CardShell
            key={p.slug}
            href={`/work/${p.slug}`}
            comingSoon={p.comingSoon}
            className="snap-start shrink-0 block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
            style={{ width: 148 }}
            ariaLabel={
              p.comingSoon ? `${p.title}, coming soon` : `View ${p.title} case study`
            }
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className="relative overflow-hidden rounded-[14px] active:opacity-80 transition-opacity"
              style={{
                aspectRatio: "4/5",
                backgroundImage: p.thumbBg,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                border: "1px solid rgba(60,70,58,0.14)",
                boxShadow: "0 10px 20px -14px rgba(60,70,58,0.4)",
              }}
            >
              {HALO_SLUGS.includes(p.slug) ? (
                <CodeCloud
                  size={130}
                  withBackground={false}
                  className="pointer-events-none absolute -top-6 -right-10 opacity-90"
                  palette={HALO_PALETTES[p.slug]}
                />
              ) : !DARK_CARD_SLUGS.includes(p.slug) ? (
                <div
                  className="pointer-events-none absolute inset-0 opacity-50"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(60,70,58,0.16) 1px, transparent 1px)",
                    backgroundSize: "14px 14px",
                  }}
                />
              ) : null}
              <div className="absolute bottom-3 left-3 right-3">
                <div
                  className="text-sm font-semibold leading-tight"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    color: DARK_CARD_SLUGS.includes(p.slug) ? "#E9ECCF" : "#2E372C",
                  }}
                >
                  {p.shortTitle}
                </div>
                <div
                  className="mt-0.5 text-[11px]"
                  style={{ color: DARK_CARD_SLUGS.includes(p.slug) ? "#A9B49C" : "#5C6555" }}
                >
                  {p.role}
                </div>
              </div>
            </div>
          </CardShell>
        ))}
      </div>
    </section>
  );
}
