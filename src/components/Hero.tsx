"use client";

import HeroCanvas from "@/components/HeroCanvas";
import SiteHeader from "@/components/SiteHeader";

export default function Hero() {
  return (
    <section
      id="home-top"
      className="hero-shell grain relative h-screen overflow-hidden bg-[#1F75B2] text-white"
      style={{ backgroundColor: "#1F75B2" }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-[#1F75B2]" />

      <div aria-hidden="true" className="hero-bg-enter absolute inset-0">
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
        <h1 className="max-w-[11ch] text-[94px] font-medium leading-[0.96] tracking-[-0.08em] text-[#f0f5f9] sm:max-w-none sm:whitespace-nowrap sm:text-[clamp(8.8rem,14.8vw,13rem)] sm:leading-[0.86] sm:tracking-[-0.077em] lg:-ml-5 lg:text-[clamp(13rem,16.7vw,18.25rem)]">
          <span className="block sm:inline">Moderna</span>{" "}
          <span className="block sm:inline">Sidor</span>
        </h1>

        <p className="mt-4 font-mono text-[14px] font-medium leading-[1.3] tracking-[-0.03em] text-[#f0f5f9] opacity-70 sm:text-[20px] lg:mt-[5px]">
          Since 2024
        </p>

        <div className="mt-auto flex -translate-y-[92px] flex-col gap-8 pb-2 sm:translate-y-0 lg:flex-row lg:items-end lg:justify-between lg:pb-6">
          <p className="max-w-[270px] text-[16px] leading-[1.3] tracking-[-0.03em] text-[#f0f5f9] opacity-80 sm:hidden">
            Vi utvecklar digitala system för företag med egna arbetssätt, där färdiga verktyg inte räcker till.
          </p>
          <p className="hidden max-w-[28rem] text-[20px] font-medium leading-[1.3] tracking-[-0.03em] text-[#f0f5f9] opacity-80 sm:block lg:-translate-y-6">
            Vi utvecklar digitala system för företag med egna arbetssätt, där färdiga verktyg inte räcker till.
          </p>

          <div aria-hidden="true" className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
