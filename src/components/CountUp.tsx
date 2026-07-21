"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  end: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

export default function CountUp({
  end,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1600,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const prefersReduced = window.matchMedia(
              "(prefers-reduced-motion: reduce)"
            ).matches;
            if (prefersReduced) {
              setValue(end);
              return;
            }
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(end * eased);
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
