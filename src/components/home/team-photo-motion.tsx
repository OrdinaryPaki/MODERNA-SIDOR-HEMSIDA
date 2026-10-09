"use client";

import { useEffect, useRef } from "react";
import { observeScrollFrame } from "@/lib/scroll-frame";
import styles from "./home.module.css";

export function TeamPhotoMotion() {
  const wrapper = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    return observeScrollFrame(() => {
      const element = wrapper.current;
      if (!element || !image.current) return;
      const rect = element.getBoundingClientRect();
      if (rect.top > innerHeight + 200 || rect.bottom < -200) return;
      const progress = Math.max(
        0,
        Math.min(1, (innerHeight - rect.top) / innerHeight),
      );
      image.current.style.transform = `translateY(${-200 * (1 - progress)}px) scale(${1.2 - progress * 0.2})`;
    });
  }, []);

  return (
    <div ref={wrapper} className={styles.teamImage}>
      <img
        ref={image}
        src="/assets/home/team.jpg"
        alt="The Opus team"
        loading="lazy"
      />
    </div>
  );
}
