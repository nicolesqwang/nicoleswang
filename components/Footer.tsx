"use client";

import { FernDoodle } from "./Doodles";

const SOCIAL_LINKS = [
  {
    label: "nicoleswang@berkeley.edu",
    icon: "✉",
    href: "mailto:nicoleswang@berkeley.edu",
    external: false,
  },
  {
    label: "LinkedIn",
    icon: "in",
    href: "https://linkedin.com/in/nicoleswang",
    external: true,
  },
  {
    label: "GitHub",
    icon: "⌥",
    href: "https://github.com/nicolesqwang",
    external: true,
  },
  {
    label: "Instagram",
    icon: "◈",
    href: "https://instagram.com/nicoleswang",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden px-6 pt-14 pb-10 sm:px-16 sm:pt-20"
      style={{ background: "#3C463A", color: "#E9ECCF" }}
    >
      {/* Curved top edge */}
      <div
        className="absolute -top-6 left-0 right-0 h-12"
        style={{ background: "#3C463A", borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }}
      />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="flex flex-wrap items-end justify-between gap-8">
          {/* Branding */}
          <div>
            <div
              className="text-3xl font-semibold"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Nicole Wang<span style={{ color: "#E3AEB8" }}>.</span>
            </div>
            <p className="mt-2 max-w-[300px] text-sm" style={{ color: "#A9B49C" }}>
              Data, design &amp; storytelling, grown with care in Berkeley, CA.
            </p>
          </div>

          {/* Social links */}
          <nav className="flex flex-wrap gap-2" aria-label="Social links">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-semibold transition-colors hover:bg-white/10"
                style={{
                  background: "rgba(233,236,207,0.1)",
                  border: "1px solid rgba(233,236,207,0.2)",
                  color: "#E9ECCF",
                }}
              >
                <span aria-hidden>{link.icon}</span> {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div
          className="mt-9 flex flex-wrap items-center justify-between gap-3 border-t pt-5 text-xs"
          style={{ borderColor: "rgba(233,236,207,0.14)", color: "#8E9982" }}
        >
          <span className="inline-flex items-center gap-1">
            © 2026 Nicole Wang · Grown with <FernDoodle size={16} color="#A9B49C" />
          </span>
          <span>Berkeley, California</span>
        </div>
      </div>
    </footer>
  );
}
