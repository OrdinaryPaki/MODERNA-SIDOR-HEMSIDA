"use client";

import { useLayoutEffect, useRef, useState } from "react";

export default function FooterWordmark() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [scale, setScale] = useState(1);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const text = textRef.current;

      if (!container || !text) {
        return;
      }

      const containerWidth = container.getBoundingClientRect().width;
      const textWidth = text.scrollWidth;

      if (containerWidth > 0 && textWidth > 0) {
        setScale(containerWidth / textWidth);
        setReady(true);
      }
    };

    measure();
    const frame = requestAnimationFrame(measure);
    document.fonts?.ready.then(measure).catch(() => {});

    const observer = new ResizeObserver(measure);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-visible">
      <span
        ref={textRef}
        className="block w-fit origin-left whitespace-nowrap text-[clamp(11rem,14.55vw,18.5rem)] font-medium leading-[0.9] tracking-[-0.055em] text-[#f0f5f9]"
        style={{
          opacity: ready ? 1 : 0,
          transform: `scaleX(${scale})`,
        }}
      >
        Moderna Sidor
      </span>
    </div>
  );
}
