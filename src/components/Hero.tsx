"use client";

import Link from "next/link";
import HeroCanvas from "@/components/HeroCanvas";
import SiteHeader from "@/components/SiteHeader";

function RatingStars() {
  return (
    <div aria-hidden="true" className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          viewBox="0 0 11.895 12.206"
          className="h-3 w-3"
          fill="none"
        >
          <path
            d="M 5.186 0.592 C 5.426 -0.197 6.468 -0.197 6.708 0.592 L 7.564 3.414 C 7.671 3.766 7.978 4.005 8.324 4.005 L 11.093 4.005 C 11.868 4.005 12.19 5.068 11.564 5.557 L 9.324 7.3 C 9.043 7.518 8.925 7.905 9.032 8.258 L 9.888 11.08 C 10.128 11.869 9.284 12.527 8.656 12.038 L 6.416 10.295 C 6.136 10.077 5.757 10.077 5.476 10.295 L 3.236 12.038 C 2.609 12.527 1.766 11.869 2.005 11.08 L 2.861 8.258 C 2.968 7.905 2.851 7.518 2.57 7.3 L 0.331 5.557 C -0.296 5.069 0.027 4.006 0.801 4.006 L 3.57 4.006 C 3.916 4.006 4.223 3.767 4.331 3.415 Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
}

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
        <h1 className="max-w-[11ch] text-[112px] font-medium leading-[1.01] tracking-[-0.08em] text-[#f0f5f9] sm:max-w-none sm:whitespace-nowrap sm:text-[clamp(12rem,17.8vw,15.4rem)] sm:leading-[0.84] sm:tracking-[-0.077em] lg:-ml-5 lg:text-[clamp(18rem,22.1vw,20rem)]">
          <span className="block sm:inline">Nori</span>{" "}
          <span className="block sm:inline">Studio</span>
        </h1>

        <p className="mt-4 font-mono text-[14px] font-medium leading-[1.3] tracking-[-0.03em] text-[#f0f5f9] opacity-70 sm:text-[20px] lg:mt-[5px]">
          Since 2019
        </p>

        <div className="mt-auto flex -translate-y-[92px] flex-col gap-8 pb-2 sm:translate-y-0 lg:flex-row lg:items-end lg:justify-between lg:pb-6">
          <p className="max-w-[270px] text-[16px] leading-[1.3] tracking-[-0.03em] text-[#f0f5f9] opacity-80 sm:hidden">
            We are creative studio from Canada helping growing businesses build
            stronger brands that drive real results.
          </p>
          <p className="hidden max-w-[28rem] text-[20px] font-medium leading-[1.3] tracking-[-0.03em] text-[#f0f5f9] opacity-80 sm:block lg:-translate-y-6">
            We are a creative studio from Canada building brands and websites
            that stand out, scale with growth and deliver measurable results.
          </p>

          <div className="flex flex-col items-start gap-2 lg:items-end lg:pb-2">
            <Link
              href="/contact"
              className="order-first mb-1 mt-0 inline-flex h-[45px] items-center justify-center rounded-[2px] bg-[#f0f5f9] px-6 text-[16px] font-medium leading-[1.3] tracking-[-0.03em] text-[#1f75b2] transition-colors hover:bg-[#f0f5f9]/92 lg:order-last lg:mb-0 lg:mt-1"
            >
              Start your project
            </Link>
            <div className="flex items-center gap-1 text-[#f0f5f9]">
              <RatingStars />
              <p className="text-[16px] leading-[1.3] tracking-[-0.03em]">
                4.8/5
              </p>
            </div>
            <p className="text-[16px] leading-[1.3] tracking-[-0.03em] text-[#f0f5f9]">
              3.2x Average ROI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
