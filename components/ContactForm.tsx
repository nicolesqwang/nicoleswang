"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "./animations";
import { FernDoodle, FlowerDoodle, SeedlingDoodle, SucculentDoodle } from "./Doodles";

type FormState = "idle" | "loading" | "success" | "mailto";

const CONTACT_EMAIL = "nicoleswang@berkeley.edu";

// Opens the visitor's own mail client with the message pre-filled, so it
// reaches my inbox even when the backend can't deliver it directly.
function openMailtoFallback(name: string, email: string, message: string) {
  const subject = `Portfolio message from ${name}`;
  const body = `${message}\n\nFrom ${name} (${email})`;
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const honeypotRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Honeypot check
    if (honeypotRef.current?.value) return;

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) return;

    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      if (data.delivered) {
        setState("success");
      } else {
        openMailtoFallback(name, email, message);
        setState("mailto");
      }
    } catch {
      // Even on a network/server failure, guarantee the message still
      // reaches me by handing it off to the visitor's own mail client.
      openMailtoFallback(name, email, message);
      setState("mailto");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 sm:px-16 sm:py-36"
      style={{
        background:
          "radial-gradient(120% 80% at 80% 10%, #F0D6DB 0%, rgba(240,214,219,0) 45%), linear-gradient(180deg, #FBFAF3 0%, #EEF1DE 100%)",
      }}
    >
      {/* Botanical accents */}
      <div
        className="pointer-events-none absolute -bottom-6 left-[5%] opacity-50 animate-drift"
        aria-hidden
      >
        <FlowerDoodle size={120} color="#E3AEB8" />
      </div>
      <span
        className="pointer-events-none absolute top-[12%] right-[10%] text-3xl animate-twinkle"
        style={{ color: "#C3C7A6", animationDelay: "0.5s" }}
        aria-hidden
      >
        ✦
      </span>
      <div
        className="pointer-events-none absolute top-[16%] left-[8%] opacity-45 animate-driftslow"
        style={{ animationDelay: "1.1s" }}
        aria-hidden
      >
        <SucculentDoodle size={64} />
      </div>

      <div className="mx-auto grid max-w-[980px] grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
        {/* Left: copy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <span
            className="text-xs uppercase tracking-[3px]"
            style={{ fontFamily: "ui-monospace,monospace", color: "#9FB08A" }}
          >
            say hello
          </span>
          <h2
            className="mt-4 mb-5 leading-[1.02] tracking-tight"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 500,
              fontSize: "clamp(36px, 5vw, 62px)",
              letterSpacing: "-1.2px",
            }}
          >
            Let&apos;s grow
            <br />
            something{" "}
            <span style={{ fontStyle: "italic", color: "#E3AEB8" }}>together.</span>
          </h2>
          <p
            className="mb-7 max-w-[380px] leading-[1.7]"
            style={{ fontSize: 17, color: "#6B7363" }}
          >
            Whether it&apos;s a role, a collaboration, or just a chat about data and
            design, my inbox is always open.
          </p>
          <a
            href="mailto:nicoleswang@berkeley.edu"
            className="inline-flex items-center gap-2 text-lg font-normal pb-0.5 transition-opacity hover:opacity-70"
            style={{
              fontFamily: "var(--font-fraunces)",
              color: "#3C463A",
              borderBottom: "1.5px solid #E3AEB8",
            }}
          >
            nicoleswang@berkeley.edu
          </a>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {state === "success" || state === "mailto" ? (
            <div
              className="rounded-[20px] px-8 py-12 text-center"
              style={{
                background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(60,70,58,0.14)",
                boxShadow: "0 24px 46px -32px rgba(60,70,58,0.4)",
              }}
            >
              <div className="flex justify-center">
                <SeedlingDoodle size={56} />
              </div>
              <h3
                className="mt-4 mb-2 text-2xl font-semibold"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {state === "success" ? "Message planted!" : "Almost there!"}
              </h3>
              <p className="text-sm" style={{ color: "#6B7363" }}>
                {state === "success"
                  ? "Thanks for reaching out, I'll get back to you soon."
                  : "I opened your email app with the message ready to go, just hit send and it'll land in my inbox."}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-[20px] px-7 py-7"
              style={{
                background: "rgba(255,255,255,0.66)",
                border: "1px solid rgba(60,70,58,0.14)",
                boxShadow: "0 24px 46px -32px rgba(60,70,58,0.4)",
              }}
              noValidate
            >
              {/* Honeypot — hidden from real users */}
              <input
                ref={honeypotRef}
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: -9999 }}
              />

              <label className="flex flex-col gap-1.5 text-xs font-semibold" style={{ color: "#5C6555" }}>
                Name
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="rounded-xl px-4 py-3 text-sm outline-none transition-shadow focus:shadow-[0_0_0_2px_#C3C7A6]"
                  style={{
                    fontFamily: "inherit",
                    border: "1px solid rgba(60,70,58,0.18)",
                    background: "#FBFAF3",
                    color: "#3C463A",
                  }}
                />
              </label>

              <label className="flex flex-col gap-1.5 text-xs font-semibold" style={{ color: "#5C6555" }}>
                Email
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  className="rounded-xl px-4 py-3 text-sm outline-none transition-shadow focus:shadow-[0_0_0_2px_#C3C7A6]"
                  style={{
                    fontFamily: "inherit",
                    border: "1px solid rgba(60,70,58,0.18)",
                    background: "#FBFAF3",
                    color: "#3C463A",
                  }}
                />
              </label>

              <label className="flex flex-col gap-1.5 text-xs font-semibold" style={{ color: "#5C6555" }}>
                Message
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me a little about it…"
                  className="resize-y rounded-xl px-4 py-3 text-sm outline-none transition-shadow focus:shadow-[0_0_0_2px_#C3C7A6]"
                  style={{
                    fontFamily: "inherit",
                    border: "1px solid rgba(60,70,58,0.18)",
                    background: "#FBFAF3",
                    color: "#3C463A",
                  }}
                />
              </label>

              <button
                type="submit"
                disabled={state === "loading"}
                className="rounded-full py-3.5 text-sm font-semibold text-cream transition-opacity hover:opacity-80 disabled:opacity-60"
                style={{ fontFamily: "inherit", background: "#3C463A" }}
              >
                {state === "loading" ? (
                  "Sending…"
                ) : (
                  <span className="inline-flex items-center gap-1.5">
                    Send message <FernDoodle size={16} color="#E9ECCF" />
                  </span>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
