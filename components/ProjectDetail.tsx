"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { fadeUp } from "./animations";

export default function ProjectDetail({ project: p }: { project: Project }) {
  return (
    <div style={{ background: "#FBFAF3", minHeight: "100vh" }}>
      {/* Sticky nav */}
      <nav
        className="sticky top-0 z-30 flex items-center justify-between px-6 py-5 sm:px-16"
        style={{
          background: "rgba(251,250,243,0.82)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(60,70,58,0.1)",
        }}
      >
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-opacity hover:opacity-70"
        >
          ← Back to work
        </Link>
        <span
          className="text-lg font-semibold"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Nicole&nbsp;Wang<span style={{ color: "#E3AEB8" }}>.</span>
        </span>
      </nav>

      {/* Hero header */}
      <header
        className="relative overflow-hidden px-6 pb-14 pt-12 sm:px-16 sm:pt-16 sm:pb-16"
        style={{
          background: `linear-gradient(165deg, ${p.accent} 0%, #FBFAF3 88%)`,
        }}
      >
        {/* Dot texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(rgba(60,70,58,0.12) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-[1080px]">
          <div
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-[2px]"
            style={{ color: "#5C6555" }}
          >
            <span
              className="text-xl"
              style={{ fontFamily: "var(--font-fraunces)", letterSpacing: 0, color: "#3C463A" }}
            >
              {p.num}
            </span>
            · {p.year}
          </div>
          <h1
            className="mt-4 leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 600,
              fontSize: "clamp(40px, 6.4vw, 86px)",
              letterSpacing: "-1.6px",
              maxWidth: "14ch",
            }}
          >
            {p.title}
          </h1>
          <p
            className="mt-5 max-w-[620px]"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontSize: "clamp(17px, 1.8vw, 21px)",
              color: "#4A5446",
            }}
          >
            {p.oneLiner}
          </p>
          <div className="mt-4 text-sm font-semibold tracking-wide" style={{ color: "#5C6555" }}>
            {p.role}
          </div>

          {(p.industry || p.award || p.externalUrl) && (
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {p.industry && (
                <span
                  className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide"
                  style={{ background: "rgba(255,255,255,0.65)", color: "#3C463A" }}
                >
                  {p.industry}
                </span>
              )}
              {p.award && (
                <span
                  className="rounded-full px-4 py-1.5 text-xs font-semibold"
                  style={{ background: "rgba(255,255,255,0.65)", color: "#3C463A" }}
                >
                  🏆 {p.award}
                </span>
              )}
              {p.externalUrl && (
                <a
                  href={p.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-opacity hover:opacity-80"
                  style={{ background: "#3C463A", color: "#E9ECCF" }}
                >
                  Visit live site ↗
                </a>
              )}
            </div>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-[1080px] px-6 pb-12 pt-10 sm:px-16 sm:pt-14">
        {/* Overview + image placeholder */}
        <motion.div
          className="mb-20 grid grid-cols-1 items-start gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div>
            <span
              className="text-xs uppercase tracking-[3px]"
              style={{ fontFamily: "ui-monospace,monospace", color: "#9FB08A" }}
            >
              overview
            </span>
            <p
              className="mt-4 leading-relaxed font-medium"
              style={{ fontSize: "clamp(18px, 2vw, 23px)", color: "#3C463A" }}
            >
              {p.overview}
            </p>
          </div>
          <div
            className="relative flex items-center justify-center overflow-hidden rounded-[14px]"
            style={{
              aspectRatio: "4/3",
              background: `repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0 14px, transparent 14px 28px), ${p.accent}`,
              border: "1px solid rgba(60,70,58,0.14)",
            }}
          >
            {p.gallery?.[0] ? (
              <Image
                src={p.gallery[0]}
                alt={p.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 480px, 100vw"
              />
            ) : (
              <span className="font-mono text-xs" style={{ color: "#5C6555" }}>
                project image
              </span>
            )}
          </div>
        </motion.div>

        {/* Pull quote */}
        {p.quote && (
          <motion.div
            className="mb-20 rounded-[18px] px-8 py-10 sm:px-12 sm:py-12"
            style={{ background: "#EEF1DE" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p
              className="leading-snug"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontStyle: "italic",
                fontSize: "clamp(20px, 2.6vw, 30px)",
                color: "#2E372C",
              }}
            >
              &ldquo;{p.quote.text}&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold" style={{ color: "#5C6555" }}>
              {p.quote.author}
            </p>
          </motion.div>
        )}

        {/* Goals + What I Did */}
        <motion.div
          className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {/* Goals */}
          <div
            className="rounded-[18px] p-8"
            style={{ background: p.accent }}
          >
            <h2
              className="mb-5 font-semibold"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontSize: "clamp(24px, 3vw, 34px)",
              }}
            >
              The goals
            </h2>
            <ul className="flex flex-col gap-4">
              {p.goals.map((g, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed"
                  style={{ color: "#2E372C" }}
                >
                  <span className="mt-0.5 shrink-0">✦</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What I did */}
          <div>
            <h2
              className="mb-5 font-semibold"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontSize: "clamp(24px, 3vw, 34px)",
              }}
            >
              What I did
            </h2>
            <ul className="flex flex-col gap-5">
              {p.contributions.map((c, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#4A5446" }}>
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs"
                    style={{
                      background: "#EEF1DE",
                      border: "1px solid rgba(60,70,58,0.14)",
                    }}
                  >
                    ✓
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* What's wired — feature breakdown */}
        {p.features && (
          <motion.div
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h2
              className="mb-5 font-semibold"
              style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(24px, 3vw, 34px)" }}
            >
              What&apos;s inside
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {p.features.map((f, i) => (
                <div
                  key={i}
                  className="rounded-[16px] p-6"
                  style={{ background: "#fff", border: "1px solid rgba(60,70,58,0.14)" }}
                >
                  <h3
                    className="mb-2 font-semibold"
                    style={{ fontFamily: "var(--font-fraunces)", fontSize: 18, color: "#3C463A" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5C6555" }}>
                    {f.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Deep dive — long-form explainer */}
        {p.deepDive && (
          <motion.div
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h2
              className="mb-5 font-semibold"
              style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(24px, 3vw, 34px)" }}
            >
              {p.deepDive.title}
            </h2>
            <div className="flex max-w-[720px] flex-col gap-4">
              {p.deepDive.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="leading-relaxed"
                  style={{ fontSize: 15.5, color: "#4A5446" }}
                >
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        )}

        {/* Live impact stats */}
        {p.liveStats && (
          <motion.div
            className="mb-20 rounded-[20px] p-8 sm:p-12"
            style={{ background: "#EEF1DE" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h2
              className="mb-7 font-semibold"
              style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(24px, 3vw, 34px)" }}
            >
              Live impact
            </h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {p.liveStats.map((s, i) => (
                <div key={i}>
                  <div
                    className="font-semibold leading-none"
                    style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(22px, 2.6vw, 32px)", color: "#3C463A" }}
                  >
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-xs leading-snug" style={{ color: "#6B7363" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tools & Skills */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2
            className="mb-5 font-semibold"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(24px, 3vw, 34px)" }}
          >
            Tools &amp; skills
          </h2>
          {p.stackNote && (
            <p className="mb-6 max-w-[720px] leading-relaxed" style={{ fontSize: 15, color: "#5C6555" }}>
              {p.stackNote}
            </p>
          )}
          <div className="flex flex-wrap gap-3">
            {p.tools.map((t) => (
              <span
                key={t}
                className="rounded-full px-5 py-2.5 text-sm font-semibold"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(60,70,58,0.16)",
                  color: "#3C463A",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Results highlight */}
        <motion.div
          className="relative mb-16 overflow-hidden rounded-[20px] p-10 sm:p-14"
          style={{ background: "#3C463A", color: "#E9ECCF" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <span
            className="absolute top-5 right-7 text-3xl opacity-70"
            style={{ color: p.accent }}
            aria-hidden
          >
            ✦
          </span>
          <h2
            className="mb-7 font-semibold"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(26px, 3.4vw, 40px)" }}
          >
            The results
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {p.results.map((r, i) => (
              <div key={i} className="flex flex-col gap-3">
                <span className="text-2xl" style={{ color: p.accent }}>→</span>
                <span className="text-sm leading-relaxed" style={{ color: "#DCE4CC" }}>{r}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image gallery */}
        <div className="grid grid-cols-1 gap-4 mb-12 sm:grid-cols-3">
          {(p.gallery && p.gallery.length > 1 ? p.gallery.slice(1) : [0, 1, 2]).map(
            (item, i) => (
              <div
                key={i}
                className="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl"
                style={{
                  background:
                    i % 3 === 0
                      ? "repeating-linear-gradient(45deg, #EEF1DE 0 12px, #E9ECCF 12px 24px)"
                      : i % 3 === 1
                      ? "repeating-linear-gradient(45deg, #E9ECCF 0 12px, #D9E4E0 12px 24px)"
                      : "repeating-linear-gradient(45deg, #D9E4E0 0 12px, #EEF1DE 12px 24px)",
                  border: "1px solid rgba(60,70,58,0.12)",
                }}
              >
                {typeof item === "string" ? (
                  <Image
                    src={item}
                    alt={`${p.title} screenshot ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                ) : (
                  <span className="font-mono text-xs" style={{ color: "#6B7363" }}>
                    image
                  </span>
                )}
              </div>
            )
          )}
        </div>

        {p.team && (
          <p className="mb-16 text-center text-sm" style={{ color: "#6B7363" }}>
            Built with {p.team.join(" · ")}
          </p>
        )}

        {/* Back link */}
        <div className="pb-5 text-center">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ background: "#C3C7A6", color: "#2E372C" }}
          >
            ← Back to all work
          </Link>
        </div>
      </div>
    </div>
  );
}
