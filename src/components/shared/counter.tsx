"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./counter.module.css";

export function Counter({ value, prefix = "", suffix = "", duration = 1.5, className = "", fractionDigits = 0 }: { value: number; prefix?: string; suffix?: string; duration?: number; className?: string; fractionDigits?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);
  const formatter = new Intl.NumberFormat("sv-SE", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
  useEffect(() => {
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      if (reducedMotion) { setCurrent(value); return; }
      const start = performance.now();
      const animate = (now: number) => {
        const progress = Math.min(1, (now - start) / (duration * 1000));
        setCurrent(value * (1 - (1 - progress) ** 3));
        if (progress < 1) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
    }, { threshold: .5 });
    if (ref.current) observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value, duration]);
  return (
    <span ref={ref} className={className}>
      <span className={styles.accessibleValue}>{prefix}{formatter.format(value)}{suffix}</span>
      {prefix && <span aria-hidden="true">{prefix}</span>}
      <span aria-hidden="true">{formatter.format(current)}</span>
      {suffix && <span aria-hidden="true">{suffix}</span>}
    </span>
  );
}
