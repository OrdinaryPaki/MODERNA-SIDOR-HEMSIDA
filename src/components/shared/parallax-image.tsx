"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import { observeScrollFrame } from "@/lib/scroll-frame";

export function ParallaxImage({ src, alt = "", className = "", overscan = 100, speed = .2, zoom = 0, priority = false }: { src: string | StaticImageData; alt?: string; className?: string; overscan?: number; speed?: number; zoom?: number; priority?: boolean }) {
  const wrapper = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const element = wrapper.current;
    if (!element || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    return observeScrollFrame(() => {
      const rect = element.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > innerHeight + 200 || !image.current) return;
      const offset = Math.max(-overscan, Math.min(overscan, (innerHeight / 2 - rect.top - rect.height / 2) * speed));
      const progress = Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height)));
      image.current.style.transform = `translateY(${offset}px) scale(${1 + progress * zoom})`;
    });
  }, [overscan, speed, zoom]);
  return <div ref={wrapper} className={`parallax-image ${className}`} style={{ position: "relative", overflow: "hidden" }}><Image width={typeof src === "string" ? 1920 : src.width} height={typeof src === "string" ? 1080 : src.height} sizes="100vw" ref={image} src={src} alt={alt} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} style={{ position: "absolute", top: -overscan, left: 0, width: "100%", maxWidth: "none", height: `calc(100% + ${overscan * 2}px)`, objectFit: "cover", transition: "transform .2s ease-out", willChange: "transform" }} /></div>;
}
