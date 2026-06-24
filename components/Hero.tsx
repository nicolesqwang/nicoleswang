"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Phone from "./Phone";
import ScrollMorphPhone from "./ScrollMorphPhone";
import { SeedlingDoodle } from "./Doodles";
import { getNextSeasonLabel } from "@/lib/season";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // On desktop, <ScrollMorphPhone> takes over: it measures this phone's
  // resting spot and the Kali card's spot in the work dock, then renders a
  // fixed-position copy that spins/shrinks/travels between the two as the
  // page scrolls. This static phone stays in-flow underneath it (visible
  // only on mobile, where the dock is a horizontal scroller and the travel
  // effect doesn't apply).
  const blobParallax = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const blob2Parallax = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const seasonLabel = getNextSeasonLabel();

  function scrollToSection(id: string) {
    const fn = (
      window as Window & { lenisScrollTo?: (t: string) => void }
    ).lenisScrollTo;
    if (fn) fn(`#${id}`);
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 90% at 78% 8%, #F1F0C8 0%, rgba(241,240,200,0) 42%), radial-gradient(110% 80% at 12% 0%, #D9E4E0 0%, rgba(217,228,224,0) 48%), linear-gradient(180deg, #EEF1DE 0%, #FBFAF3 64%)",
      }}
    >
      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(#3C463A 1px, transparent 1px), linear-gradient(90deg, #3C463A 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          opacity: 0.035,
        }}
      />
      {/* Dot texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(#3C463A 1.4px, transparent 1.4px)",
          backgroundSize: "26px 26px",
          opacity: 0.04,
        }}
      />

      {/* Botanical blob top-left */}
      <motion.div
        style={{ y: blobParallax }}
        className="pointer-events-none absolute -top-16 -left-20 h-[340px] w-[340px] opacity-50"
        aria-hidden
      >
        <div
          className="h-full w-full"
          style={{
            borderRadius: "60% 40% 55% 45% / 55% 45% 60% 40%",
            background:
              "radial-gradient(circle at 40% 35%, #C3C7A6, #C3C7A6 60%, rgba(195,199,166,0))",
            filter: "blur(2px)",
          }}
        />
      </motion.div>

      {/* Botanical blob bottom-left */}
      <motion.div
        style={{ y: blob2Parallax }}
        className="pointer-events-none absolute bottom-0 left-[6%] h-[300px] w-[240px] opacity-70 animate-driftslow"
        aria-hidden
      >
        <div
          className="h-full w-full"
          style={{
            borderRadius: "50% 50% 48% 52% / 62% 60% 40% 38%",
            background:
              "radial-gradient(circle at 50% 30%, #D9E4E0, rgba(217,228,224,0) 70%)",
          }}
        />
      </motion.div>

      {/* Botanical accent */}
      <div
        className="pointer-events-none absolute bottom-[6%] left-[2%] opacity-50 animate-drift"
        aria-hidden
      >
        <SeedlingDoodle size={70} color="#7E8A6E" />
      </div>

      {/* Sparkle accents */}
      <span
        className="absolute animate-twinkle text-2xl"
        style={{ top: "18%", left: "46%", color: "#D7C59F" }}
        aria-hidden
      >
        ✦
      </span>
      <span
        className="absolute animate-twinkle text-lg"
        style={{
          top: "62%",
          left: "30%",
          color: "#C3C7A6",
          animationDelay: "0.6s",
        }}
        aria-hidden
      >
        ✦
      </span>

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-7 sm:px-16 sm:py-8">
        <span
          className="text-xl font-semibold tracking-wide"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Nicole&nbsp;Wang
          <span style={{ color: "#E3AEB8" }}>.</span>
        </span>
        <div className="flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => scrollToSection("about")}
            className="text-ink hover:text-ink-soft transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="text-ink hover:text-ink-soft transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="rounded-full bg-ink px-5 py-2 text-cream text-sm font-semibold transition-opacity hover:opacity-80"
          >
            Get in touch
          </button>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-6 pb-20 pt-10 sm:px-16 md:grid-cols-[1.15fr_0.85fr]">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Status pill */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide"
            style={{
              background: "rgba(255,255,255,0.6)",
              borderColor: "rgba(60,70,58,0.1)",
              color: "#6B7363",
            }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background: "#E3AEB8",
                boxShadow: "0 0 0 4px rgba(227,174,184,0.3)",
              }}
            />
            Open to {seasonLabel} roles
          </div>

          <h1
            className="leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(60px, 9.8vw, 144px)",
              letterSpacing: "-2px",
              lineHeight: 0.92,
            }}
          >
            Nicole
            <br />
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "#7E8A6E",
                marginLeft: "0.18em",
              }}
            >
              Wang
            </span>
          </h1>

          <p
            className="mt-7 max-w-[430px] leading-relaxed"
            style={{
              fontSize: "clamp(16px, 1.5vw, 19px)",
              color: "#6B7363",
            }}
          >
            Data Science &amp; Economics{" "}
            <strong style={{ color: "#3C463A" }}>@ Berkeley</strong>, blending
            data, design, and storytelling across AI engineering, strategy, and
            research.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollToSection("work")}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-cream transition-opacity hover:opacity-80"
              style={{ background: "#3C463A" }}
            >
              View my work →
            </button>
            <a
              href="/Nicole_Wang_Resume.pdf"
              download="Nicole_Wang_Resume.pdf"
              className="inline-flex items-center rounded-full px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-white/80"
              style={{
                background: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(60,70,58,0.16)",
                color: "#3C463A",
              }}
            >
              Resume
            </a>
          </div>
        </motion.div>

        {/* Right: phone slot (desktop overlay travels from here) */}
        <div className="relative flex min-h-[440px] items-center justify-center">
          {/* Soft circle behind, smaller and off-centered so it doesn't look bullseyed */}
          <div
            className="absolute h-[280px] w-[280px] rounded-full"
            style={{
              top: "54%",
              left: "42%",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle at 50% 45%, #E9ECCF 0%, #D9E4E0 70%, rgba(217,228,224,0) 100%)",
              opacity: 0.8,
            }}
          />
          <div
            id="hero-phone-slot"
            className="relative md:opacity-0 md:pointer-events-none"
          >
            <Phone width={290} />
            <span
              className="absolute -top-3 -right-2 text-2xl animate-twinkle"
              style={{ color: "#E3AEB8", animationDelay: "0.4s" }}
              aria-hidden
            >
              ✦
            </span>
          </div>
        </div>
      </div>

      <ScrollMorphPhone />

      {/* Scroll cue */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-6 left-1/2 z-10 flex flex-col items-center gap-1 animate-cuebob"
        aria-label="Scroll to About"
        style={{ transform: "translateX(-50%)" }}
      >
        <span
          className="text-xs uppercase tracking-[2px]"
          style={{ color: "#6B7363" }}
        >
          scroll
        </span>
        <span className="text-lg" style={{ color: "#9FB08A" }}>↓</span>
      </button>
    </section>
  );
}
