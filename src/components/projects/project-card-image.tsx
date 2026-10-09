"use client";

import Image, { type StaticImageData } from "next/image";

import { type CSSProperties, useEffect, useRef } from "react";
import { observeScrollFrame } from "@/lib/scroll-frame";
import { getMediaScrollProgress } from "@/lib/media-scroll-progress";
import styles from "./project-card.module.css";

export function ProjectCardImage({ src, alt, priority = false, mobileRange = 80, parallax = true, objectPosition, sizes = "(max-width: 809px) calc(100vw - 40px), 50vw" }: { src: StaticImageData; alt: string; priority?: boolean; mobileRange?: number; parallax?: boolean; objectPosition?: string; sizes?: string }) {
  const wrapper = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const element = wrapper.current;
    if (!element || !parallax || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mobile = matchMedia("(max-width: 809px)");
    let range = mobile.matches ? mobileRange : 150;
    const updateRange = () => { range = mobile.matches ? mobileRange : 150; };
    mobile.addEventListener("change", updateRange);
    const unsubscribe = observeScrollFrame(() => {
      const rect = element.getBoundingClientRect();
      if (!image.current || rect.bottom < -200 || rect.top > innerHeight + 200) return;
      const progress = getMediaScrollProgress(rect.top, rect.height, innerHeight);
      image.current.style.transform = `translateY(${progress * range}px)`;
    });
    return () => { unsubscribe(); mobile.removeEventListener("change", updateRange); };
  }, [mobileRange, parallax]);

  return <div ref={wrapper} className={styles.image} style={{ "--project-mobile-range": `${mobileRange}px` } as CSSProperties}>
    <Image sizes={sizes} quality={90} ref={image} src={src} alt={alt} style={objectPosition ? { objectPosition } : undefined} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} className={parallax ? styles.parallaxImage : styles.staticImage} />
    <span className={styles.hoverArrow} aria-hidden="true"><svg width="32" height="32" viewBox="0 0 48 48" fill="none"><path d="M19 11h18v18m-25.456 7.456L37 11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" /></svg></span>
  </div>;
}
