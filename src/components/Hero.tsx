"use client";

import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import SiteHeader from "@/components/SiteHeader";

export default function Hero() {
  return (
    <section
      id="home-top"
      className="hero-shell grain relative h-screen overflow-hidden bg-[#1F75B2] text-white"
    >
      <div aria-hidden="true" className="hero-bg-enter absolute inset-0">
        <div className="absolute inset-0 bg-[url('/reference/Z9CrRqnCTARlA5DxyfNo67pwF4.png')] bg-cover bg-center bg-no-repeat [filter:saturate(0.9)_brightness(0.98)] sm:hidden" />
        <div className="absolute inset-0 hidden bg-[url('/reference/mzTZXyUqwi6w4yHY89NUGc7Rvg.png')] bg-cover bg-center bg-no-repeat [filter:saturate(0.9)_brightness(0.98)] sm:block" />
        <HeroCanvas />
        <div className="hero-noise-enter pointer-events-none absolute inset-0 bg-[url('/reference/m4n0B2QJMVZOeIGk5AiOqozWVg.png')] bg-cover bg-center bg-no-repeat" />
      </div>

      <div
        aria-hidden="true"
        className="hero-loader-sheen pointer-events-none absolute inset-0"
      ></div>

      <div className="hero-nav-enter relative z-20 h-11 sm:h-auto">
        <SiteHeader tone="light" />
      </div>

      <div className="hero-content-enter relative z-10 flex h-[calc(100vh-44px)] flex-col px-5 pb-0 pt-7 sm:px-8 sm:pb-0 sm:pt-2 lg:h-[calc(100vh-48px)]">
        <h1 className="max-w-[11ch] text-[112px] font-medium leading-[1.01] tracking-[-0.08em] text-[#f0f5f9] sm:max-w-none sm:whitespace-nowrap sm:text-[clamp(12rem,17.8vw,15.4rem)] sm:leading-[0.84] lg:-ml-5 lg:text-[clamp(18rem,22.1vw,20rem)]">
          <span className="block sm:inline">Nori</span>{" "}
          <span className="block sm:inline">Studio</span>
        </h1>

        <p className="mt-4 font-mono text-[14px] font-medium leading-[1.3] tracking-[-0.03em] text-[#f0f5f9] sm:text-[20px] lg:mt-2">
          Since 2019
        </p>

        <div className="mt-auto flex -translate-y-[69px] flex-col gap-8 pb-2 sm:translate-y-0 lg:flex-row lg:items-end lg:justify-between lg:pb-6">
          <p className="max-w-[270px] text-[16px] leading-[1.3] tracking-[-0.03em] text-[#f0f5f9] sm:hidden">
            We are creative studio from Canada helping growing businesses build
            stronger brands that drive real results.
          </p>
          <p className="hidden max-w-[28rem] text-[20px] leading-[1.3] tracking-[-0.03em] text-[#f0f5f9] sm:block lg:-translate-y-5">
            We are a creative studio from Canada building brands and websites
            that stand out, scale with growth and deliver measurable results.
          </p>

          <div className="flex flex-col items-start gap-2 lg:items-end lg:pb-2">
            <Link
              href="/contact"
              className="order-first mb-5 mt-0 inline-flex h-[45px] items-center justify-center rounded-[4px] bg-white px-7 text-[15px] font-medium tracking-[-0.03em] text-[#1f75b2] transition-colors hover:bg-white/92 lg:order-last lg:mb-0 lg:mt-1"
            >
              Start your project
            </Link>
            <div className="flex items-center gap-2 text-[#f0f5f9]">
              <span className="text-[14px] tracking-[0.02em]">★★★★★</span>
              <p className="text-[16px] tracking-[-0.03em]">4.8/5</p>
            </div>
            <p className="text-[16px] tracking-[-0.03em] text-[#f0f5f9]">
              3.2x Average ROI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
