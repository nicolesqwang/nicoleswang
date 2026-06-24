"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "./animations";
import { HOBBIES, type Hobby } from "@/data/hobbies";
import { GridTexture, DotTexture, RingAccent } from "./patterns";
import { FlowerDoodle, SeedlingDoodle } from "./Doodles";

const ROTATIONS = [-3, 2, -2, 3, -1.5, 2.5, -2.5, 1.5];

function PlaceholderPhoto({
  accent,
  className,
}: {
  accent: string;
  className?: string;
}) {
  return (
    <div
      className={`relative ${className ?? ""}`}
      style={{
        background: `repeating-linear-gradient(45deg, rgba(255,255,255,0.55) 0 9px, transparent 9px 18px), ${accent}`,
      }}
    >
      <span
        className="absolute inset-0 flex items-center justify-center font-mono text-[9px] uppercase tracking-wide"
        style={{ color: "rgba(46,55,44,0.45)" }}
      >
        photo
      </span>
    </div>
  );
}

function PhotoStrip({ hobby }: { hobby: Hobby }) {
  const isHorizontal = hobby.layout === "horizontal";
  return (
    <div
      className="w-full overflow-hidden rounded-[7px] border-[3px]"
      style={{
        borderColor: "#fff",
        background: hobby.bg,
        boxShadow: "0 14px 26px -16px rgba(60,70,58,0.45)",
      }}
    >
      {isHorizontal ? (
        <div className="flex h-[110px]">
          <PlaceholderPhoto accent={hobby.accent} className="h-full w-1/2" />
          <div style={{ width: 3, background: "#fff" }} />
          <PlaceholderPhoto accent={hobby.accent} className="h-full w-1/2" />
        </div>
      ) : (
        <div className="flex flex-col" style={{ height: hobby.tall ? 260 : 210 }}>
          <PlaceholderPhoto accent={hobby.accent} className="w-full flex-1" />
          <div style={{ height: 3, background: "#fff" }} />
          <PlaceholderPhoto accent={hobby.accent} className="w-full flex-1" />
        </div>
      )}
    </div>
  );
}

export default function Hobbies() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const hovered = HOBBIES.find((h) => h.slug === hoveredSlug) ?? null;
  const active = HOBBIES.find((h) => h.slug === openSlug) ?? null;

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenSlug(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      className="relative overflow-hidden px-6 py-20 sm:py-28 sm:px-16"
      style={{ background: "#FBFAF3" }}
    >
      {/* Dot texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(#3C463A 1.4px, transparent 1.4px)",
          backgroundSize: "26px 26px",
          opacity: 0.035,
        }}
      />

      {/* Botanical accents */}
      <div
        className="pointer-events-none absolute top-[10%] right-[4%] opacity-45 animate-drift"
        aria-hidden
      >
        <FlowerDoodle size={70} color="#C3C7A6" />
      </div>
      <div
        className="pointer-events-none absolute bottom-[8%] left-[3%] opacity-40 animate-driftslow"
        style={{ animationDelay: "0.7s" }}
        aria-hidden
      >
        <SeedlingDoodle size={64} />
      </div>

      <motion.div
        className="relative mx-auto mb-14 max-w-[720px] text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <span
          className="text-xs uppercase tracking-[3px]"
          style={{ fontFamily: "ui-monospace,monospace", color: "#9FB08A" }}
        >
          off the clock
        </span>
        <h2
          className="mt-3 mb-3 leading-[1.05] tracking-tight"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontWeight: 500,
            fontSize: "clamp(32px, 4.6vw, 56px)",
            letterSpacing: "-1.2px",
          }}
        >
          Other things I{" "}
          <span style={{ fontStyle: "italic", color: "#E3AEB8" }}>love.</span>
        </h2>
        <p className="text-base leading-relaxed" style={{ color: "#6B7363" }}>
          Hover a strip for a peek, click for the full story.
        </p>
      </motion.div>

      <motion.div
        className="relative mx-auto grid max-w-[1080px] grid-cols-2 gap-x-6 gap-y-16 sm:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        style={{ alignItems: "end" }}
      >
        {HOBBIES.map((h, i) => {
          const isHorizontal = h.layout === "horizontal";
          return (
            <div
              key={h.slug}
              className={`relative ${isHorizontal ? "col-span-2" : ""}`}
              style={{ zIndex: hoveredSlug === h.slug ? 30 : 1 }}
              onMouseEnter={() => setHoveredSlug(h.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
            >
              <motion.button
                type="button"
                onClick={() => setOpenSlug(h.slug)}
                className={`group mx-auto flex flex-col items-center focus:outline-none ${
                  isHorizontal ? "w-full max-w-[260px]" : "w-full max-w-[140px]"
                }`}
                initial={{ rotate: ROTATIONS[i % ROTATIONS.length] }}
                whileHover={{ rotate: 0, scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                aria-label={`View ${h.title}`}
              >
                <PhotoStrip hobby={h} />
                <div className="mt-3 text-center">
                  <div
                    className="text-sm font-semibold leading-tight"
                    style={{ fontFamily: "var(--font-fraunces)", color: "#2E372C" }}
                  >
                    {h.title}
                  </div>
                  <div
                    className="mt-0.5 text-[10.5px] opacity-0 transition-opacity group-hover:opacity-70"
                    style={{ color: "#6B7363" }}
                  >
                    click for more →
                  </div>
                </div>
              </motion.button>

              {/* Hover mini preview */}
              <AnimatePresence>
                {hovered?.slug === h.slug && openSlug !== h.slug && (
                  <motion.div
                    className="absolute left-1/2 top-full z-30 mt-2 w-56 -translate-x-1/2 rounded-[14px] p-4 text-left"
                    style={{
                      background: h.bg,
                      border: "1px solid rgba(60,70,58,0.14)",
                      boxShadow: "0 22px 40px -20px rgba(60,70,58,0.45)",
                    }}
                    initial={{ opacity: 0, y: -6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div
                      className="text-xs font-semibold"
                      style={{ fontFamily: "var(--font-fraunces)", color: "#2E372C" }}
                    >
                      {h.title} · {h.since}
                    </div>
                    <p
                      className="mt-1.5 text-xs leading-relaxed"
                      style={{ color: "#3C463A" }}
                    >
                      {h.blurb.length > 100 ? `${h.blurb.slice(0, 100)}…` : h.blurb}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>

      {/* Full popup */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            style={{ background: "rgba(46,55,44,0.55)", backdropFilter: "blur(6px)" }}
            onClick={() => setOpenSlug(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[600px] overflow-hidden rounded-[26px]"
              style={{
                maxHeight: "85vh",
                background: `linear-gradient(165deg, ${active.bg} 0%, #FBFAF3 130%)`,
                border: "1px solid rgba(60,70,58,0.14)",
                boxShadow: "0 50px 90px -30px rgba(20,25,18,0.45)",
              }}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
            >
              <GridTexture opacity={0.1} size={32} />
              <DotTexture opacity={0.45} size={20} />
              <RingAccent
                size={170}
                duration={40}
                color="rgba(60,70,58,0.22)"
                className="absolute -top-14 -right-14 opacity-40 hidden sm:block"
              />
              <RingAccent
                size={100}
                duration={26}
                reverse
                dashed={false}
                color="rgba(60,70,58,0.25)"
                className="absolute bottom-6 left-[-30px] opacity-35 hidden sm:block"
              />

              <button
                type="button"
                onClick={() => setOpenSlug(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full text-lg transition-opacity hover:opacity-70"
                style={{ background: "rgba(255,255,255,0.75)", color: "#3C463A" }}
              >
                ×
              </button>

              <div
                className="relative overflow-y-auto p-7 sm:p-10"
                style={{ maxHeight: "85vh" }}
              >
                <span
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ background: "rgba(255,255,255,0.7)", color: "#3C463A" }}
                >
                  {active.since}
                </span>
                <h3
                  className="mt-4 mb-4 leading-none"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontWeight: 600,
                    fontSize: "clamp(28px, 4vw, 42px)",
                    color: "#2E372C",
                  }}
                >
                  {active.title}
                </h3>
                <p className="leading-relaxed" style={{ fontSize: 15.5, color: "#3C463A" }}>
                  {active.blurb}
                </p>

                <div
                  style={{ borderTop: "1.5px dashed rgba(60,70,58,0.28)" }}
                  className="my-6"
                />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <span
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{ color: "#5C6555" }}
                    >
                      notable
                    </span>
                    <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "#4A5446" }}>
                      {active.notable}
                    </p>
                  </div>
                  <div>
                    <span
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{ color: "#5C6555" }}
                    >
                      tools
                    </span>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {active.tools.map((t) => (
                        <span
                          key={t}
                          className="rounded-full px-3 py-1 text-xs font-semibold"
                          style={{
                            background: "rgba(255,255,255,0.7)",
                            color: "#3C463A",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  style={{ borderTop: "1.5px dashed rgba(60,70,58,0.28)" }}
                  className="my-6"
                />

                <span
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{ color: "#5C6555" }}
                >
                  a few snapshots
                </span>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="flex aspect-square items-center justify-center rounded-lg"
                      style={{
                        background: `repeating-linear-gradient(45deg, rgba(255,255,255,0.55) 0 9px, transparent 9px 18px), ${active.accent}`,
                        border: "1px solid rgba(60,70,58,0.12)",
                      }}
                    >
                      <span
                        className="font-mono text-[9px] uppercase tracking-wide"
                        style={{ color: "rgba(46,55,44,0.45)" }}
                      >
                        photo
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
