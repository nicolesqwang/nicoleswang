"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { popReveal } from "./animations";
import { FernDoodle, FlowerDoodle } from "./Doodles";

function scrollToContact() {
  const fn = (window as Window & { lenisScrollTo?: (t: string) => void }).lenisScrollTo;
  if (fn) fn("#contact");
  else document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-24 sm:px-16 sm:py-36"
      style={{ background: "#FBFAF3" }}
    >
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

      {/* Floating leaf accent */}
      <div
        className="pointer-events-none absolute top-0 right-[7%] opacity-50 animate-drift"
        aria-hidden
      >
        <FernDoodle size={110} color="#7E8A6E" />
      </div>

      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        {/* Portrait collage */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={popReveal}
        >
          <div
            className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-lg"
            style={{
              background: "repeating-linear-gradient(45deg, #E9ECCF 0 14px, #EEF1DE 14px 28px)",
              border: "1px solid rgba(60,70,58,0.14)",
              boxShadow: "0 28px 50px -30px rgba(60,70,58,0.4)",
              transform: "rotate(-2.4deg)",
            }}
          >
            {/* Tape */}
            <div
              className="absolute -top-3 left-1/2 z-10"
              style={{
                transform: "translateX(-50%) rotate(-4deg)",
                width: 96,
                height: 26,
                background: "rgba(227,174,184,0.55)",
                border: "1px dashed rgba(60,70,58,0.2)",
              }}
            />
            <Image
              src="/portrait.png"
              alt="Portrait of Nicole Wang"
              fill
              sizes="(max-width: 768px) 80vw, 40vw"
              style={{ objectFit: "contain" }}
            />
            {/* Pressed flower sticker */}
            <div
              className="absolute -bottom-5 -right-4 flex h-[78px] w-[78px] items-center justify-center rounded-full"
              style={{
                background: "#fff",
                boxShadow: "0 8px 20px -10px rgba(60,70,58,0.5)",
                transform: "rotate(8deg)",
              }}
            >
              <FlowerDoodle size={48} />
            </div>
          </div>
          <span
            className="absolute -top-6 -left-3 text-xl animate-twinkle"
            style={{ color: "#C3C7A6" }}
            aria-hidden
          >
            ✦
          </span>
        </motion.div>

        {/* Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={popReveal}
        >
          <span
            className="text-xs uppercase tracking-[3px]"
            style={{ fontFamily: "ui-monospace,monospace", color: "#9FB08A" }}
          >
            about me
          </span>

          <h2
            className="mt-4 mb-5 leading-[1.05] tracking-tight"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 500,
              fontSize: "clamp(34px, 4.6vw, 58px)",
              letterSpacing: "-1px",
            }}
          >
            A little garden of{" "}
            <span style={{ fontStyle: "italic", color: "#E3AEB8" }}>curiosity.</span>
          </h2>

          <p
            className="mb-4 max-w-[560px] leading-[1.75]"
            style={{ fontSize: 17, color: "#4A5446" }}
          >
            I&apos;m a Berkeley student working at the intersection of{" "}
            <strong style={{ color: "#3C463A" }}>data, design, and storytelling</strong>,
            across AI engineering, strategy consulting, and research. I love turning messy
            problems into clear, human systems.
          </p>

          <p
            className="mb-8 max-w-[560px] leading-[1.75]"
            style={{ fontSize: 17, color: "#6B7363" }}
          >
            Away from the screen you&apos;ll find me video editing, taking photos, crocheting,
            watching K-pop, fan dancing, playing volleyball, and travelling for the next
            good view.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="/Nicole_Wang_Resume.pdf"
              download="Nicole_Wang_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ background: "#C3C7A6", color: "#2E372C" }}
            >
              ↓ Download my resume
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-black/5"
              style={{
                background: "transparent",
                border: "1px solid rgba(60,70,58,0.22)",
                color: "#3C463A",
              }}
            >
              Contact me
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
