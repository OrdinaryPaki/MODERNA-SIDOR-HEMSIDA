"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import Image from "next/image";

const STATS = [
  { value: 146, suffix: "+", label: "Completed projects" },
  { value: 3.1, suffix: "x", decimals: 1, label: "Average ROI increase" },
  { value: 95, suffix: "%", label: "Client satisfaction rate" },
  { value: 23, suffix: "hr", label: "Average response time" },
];

const CLIENTS = [
  {
    src: "/reference/awDtj7rqkXF0BCm12jsm7BzLczg.svg",
    alt: "Velo Studio",
    width: 194,
    height: 37,
  },
  {
    src: "/reference/zUJMCCKSzjR4tLQ8amSnfss8UUA.svg",
    alt: "Urban Bites",
    width: 256,
    height: 42,
  },
  {
    src: "/reference/faK3uVL6HKHj0lUYRZh2fWmn3o.svg",
    alt: "Baseline Sports",
    width: 256,
    height: 42,
  },
  {
    src: "/reference/NwlOGrknUmkPlpa4MVL7oF0w48Q.svg",
    alt: "Northcap Supply",
    width: 279,
    height: 42,
  },
];

export default function Stats() {
  const rootRef = useRef<HTMLElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const numbers = root.querySelectorAll<HTMLElement>("[data-count]");

    const renderFinal = () =>
      numbers.forEach((el) => {
        const decimals = Number(el.dataset.decimals ?? 0);
        el.textContent =
          Number(el.dataset.count!).toFixed(decimals) + (el.dataset.suffix ?? "");
      });

    if (reduceMotion) {
      renderFinal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting) || started.current) return;
        started.current = true;

        numbers.forEach((el) => {
          const target = Number(el.dataset.count!);
          const decimals = Number(el.dataset.decimals ?? 0);
          const suffix = el.dataset.suffix ?? "";
          const counter = { value: 0 };
          animate(counter, {
            value: target,
            duration: 650,
            ease: "outExpo",
            onUpdate: () => {
              el.textContent = counter.value.toFixed(decimals) + suffix;
            },
          });
        });
        observer.disconnect();
      },
      { threshold: 0.3 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      className="bg-[#061218] px-5 pb-6 pt-[60px] text-[#f0f5f9] sm:px-8 sm:pb-[96px] sm:pt-20"
    >
      <p className="w-fit font-mono text-base font-medium leading-[1.3] tracking-[-0.02em] text-[#f0f5f9] sm:text-[20px]">
        {"//05 Why choose us"}
      </p>

      <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <h2 className="max-w-[353px] text-[40px] font-medium uppercase leading-[1.1] tracking-[-0.05em] sm:max-w-3xl sm:text-[clamp(2.5rem,6.875vw,5.5rem)] sm:leading-[1.1] sm:tracking-[-0.04em]">
          Details make
          <br />
          the difference
        </h2>
        <p className="max-w-[353px] text-base leading-[1.3] tracking-[-0.04em] text-[#f0f5f9]/60 sm:max-w-[290px] sm:text-xl sm:leading-[1.3]">
          We&apos;re not just designers. We&apos;re your partners who help you
          grow and get real results you can see.
        </p>
      </div>

      <div className="mt-8 grid gap-x-12 sm:mt-14 sm:grid-cols-2">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="grid grid-cols-[minmax(0,1fr)_148px] items-end gap-4 border-b border-[#f0f5f91f] py-6 sm:flex sm:items-end sm:justify-between"
          >
            <p
              data-count={stat.value}
              data-suffix={stat.suffix}
              data-decimals={stat.decimals ?? 0}
              className="font-[family-name:var(--font-switzer)] text-[80px] font-normal leading-[0.9] tracking-[-0.04em] [font-feature-settings:'tnum','zero'] sm:text-[clamp(5rem,8.62vw,7.75rem)]"
            >
              {Number(0).toFixed(stat.decimals ?? 0)}
              {stat.suffix}
            </p>
            <p className="pb-2 text-right text-[14px] leading-[1.35] text-[#f0f5f9]/70 sm:pb-0 sm:text-left sm:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-4">
        {CLIENTS.map((client) => (
          <div
            key={client.src}
            className="flex h-[132px] items-center justify-center rounded-[4px] border border-[#f0f5f91f] bg-[#061218] px-8"
          >
            <Image
              src={client.src}
              alt={client.alt}
              width={client.width}
              height={client.height}
              className="h-auto max-h-[52px] w-[170px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
