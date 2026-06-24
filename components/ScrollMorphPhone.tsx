"use client";

import { useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Phone from "./Phone";

type Rect = { x: number; y: number; width: number; height: number };

function getDocRect(el: HTMLElement): Rect {
  const r = el.getBoundingClientRect();
  return {
    x: r.left + window.scrollX,
    y: r.top + window.scrollY,
    width: r.width,
    height: r.height,
  };
}

/**
 * Makes the hero phone physically travel down the page on scroll and
 * land on the Kali card in the work dock — spinning and shrinking along the
 * way. It's a pure function of scroll position (no scroll-jacking, no
 * step state), so scrolling back up reverses the whole trip for free.
 *
 * Desktop-only: the mobile work dock is a horizontal scroller, so there's
 * no fixed "slot" to travel to there. <Hero> keeps a static, in-flow phone
 * for mobile and hides it (md:opacity-0) once this overlay is active.
 */
export default function ScrollMorphPhone() {
  const [rects, setRects] = useState<{ source: Rect; target: Rect } | null>(null);
  const { scrollY } = useScroll();

  useLayoutEffect(() => {
    function measure() {
      const isDesktop = window.innerWidth >= 768;
      const source = document.getElementById("hero-phone-slot");
      const target = document.getElementById("kali-card-slot");
      if (!isDesktop || !source || !target) {
        setRects(null);
        return;
      }
      setRects({ source: getDocRect(source), target: getDocRect(target) });
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  if (!rects) return null;

  return <ScrollMorphPhoneInner source={rects.source} target={rects.target} scrollY={scrollY} />;
}

function ScrollMorphPhoneInner({
  source,
  target,
  scrollY,
}: {
  source: Rect;
  target: Rect;
  scrollY: MotionValue<number>;
}) {
  const sourceCenterX = source.x + source.width / 2;
  const sourceCenterY = source.y + source.height / 2;
  const targetCenterX = target.x + target.width / 2;
  const targetCenterY = target.y + target.height / 2;

  // The trip runs from page load to the point where the Kali card would
  // naturally be centered in the viewport — i.e. it ends exactly where the
  // real card already is, so the handoff is seamless.
  const travelEnd = Math.max(targetCenterY - window.innerHeight / 2, 1);
  const progress = useTransform(scrollY, [0, travelEnd], [0, 1], { clamp: true });

  const centerX = useTransform(progress, [0, 1], [sourceCenterX, targetCenterX]);
  const centerYDoc = useTransform(progress, [0, 1], [sourceCenterY, targetCenterY]);
  const centerYView = useTransform([centerYDoc, scrollY], (latest) => {
    const [cyDoc, sy] = latest as number[];
    return cyDoc - sy;
  });

  const scale = useTransform(progress, [0, 1], [1, Math.max(target.width / source.width, 0.2)]);
  const rotateY = useTransform(progress, [0, 1], [0, 1080]);
  // Fades gradually through the back half of the trip rather than staying
  // solid until the last instant — it should read as settling/blending
  // into the card underneath, not popping in front of it and vanishing.
  const phoneOpacity = useTransform(progress, [0, 0.4, 0.75, 1], [1, 1, 0.55, 0]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: centerX,
        y: centerYView,
        zIndex: 60,
        pointerEvents: "none",
        perspective: 1000,
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          translateX: "-50%",
          translateY: "-50%",
          scale,
          rotateY,
          opacity: phoneOpacity,
          transformStyle: "preserve-3d",
        }}
      >
        <Phone width={source.width || 210} />
      </motion.div>
    </motion.div>
  );
}
