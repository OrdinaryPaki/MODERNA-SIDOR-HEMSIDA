"use client";

import { useEffect, useRef } from "react";
import { observeScrollFrame } from "@/lib/scroll-frame";
import { getMediaScrollProgress } from "@/lib/media-scroll-progress";
import styles from "./home.module.css";

export function ReferenceParallax({
  src,
  className = "",
  kind,
}: {
  src: string;
  className?: string;
  kind: "hero" | "testimonial";
}) {
  const viewport = useRef<HTMLDivElement>(null);
  const background = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    return observeScrollFrame(() => {
      if (!viewport.current || !background.current) return;
      const rect = viewport.current.getBoundingClientRect();
      const range = Number.parseFloat(
        getComputedStyle(viewport.current).getPropertyValue("--parallax-range"),
      );
      const progress = getMediaScrollProgress(
        rect.top,
        rect.height,
        innerHeight,
      );
      background.current.style.transform = `translateY(${progress * range}px)`;
    });
  }, []);
  return (
    <div
      className={`${styles.referenceParallax} ${className} ${kind === "hero" ? styles.heroParallax : styles.testimonialParallax}`}
    >
      <div ref={viewport} className={styles.parallaxViewport}>
        <div
          ref={background}
          className={styles.parallaxBackground}
          style={{ backgroundImage: `url(${src})` }}
        />
      </div>
    </div>
  );
}
