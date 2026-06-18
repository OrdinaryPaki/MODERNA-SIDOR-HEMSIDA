"use client";

import { useEffect, useRef, useState } from "react";

export default function FitText({
  text,
  className = "",
  animate = false,
}: {
  text: string;
  className?: string;
  animate?: boolean;
}) {
  const measureRef = useRef<HTMLHeadingElement>(null);
  const [viewBox, setViewBox] = useState(
    () => `0 0 ${Math.max(text.length * 47.7, 100)} 90`
  );

  useEffect(() => {
    const measure = () => {
      if (!measureRef.current) return;
      const { width, height } = measureRef.current.getBoundingClientRect();
      if (width > 0) {
        setViewBox(`0 0 ${width} ${height}`);
      }
    };

    requestAnimationFrame(measure);
    document.fonts?.ready.then(measure).catch(() => {});
    const t1 = setTimeout(measure, 100);
    const t2 = setTimeout(measure, 500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [text]);

  return (
    <div className="relative w-full">
      {/* Osynlig mät-container (opåverkad av SVG-skalning) */}
      <h1
        ref={measureRef}
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 -z-10 inline-block whitespace-nowrap opacity-0 ${className}`}
        style={{ fontSize: "100px" }}
      >
        {text}
      </h1>

      {/* Den riktiga skalade texten via SVG viewBox */}
      <svg
        viewBox={viewBox}
        className="block w-full overflow-visible"
      >
        <foreignObject width="100%" height="100%" className="overflow-visible">
          <h1
            aria-label={text}
            className={`inline-block whitespace-nowrap ${className}`}
            style={{ fontSize: "100px" }}
          >
            {animate
              ? text.split("").map((char, i) => (
                  <span
                    key={i}
                    data-animate
                    aria-hidden
                    className="hero-char inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))
              : text}
          </h1>
        </foreignObject>
      </svg>
    </div>
  );
}
