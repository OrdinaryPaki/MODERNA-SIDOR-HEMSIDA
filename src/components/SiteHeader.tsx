"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LogoWordmark from "@/components/LogoWordmark";

const NAV_LINKS = [
  { href: "/", label: "Hem" },
  { href: "/our-work", label: "System" },
  { href: "/about-us", label: "Om oss" },
  { href: "/contact", label: "Kontakt" },
];

export default function SiteHeader({
  tone = "dark",
  mobileFixed = false,
  revealAfterHero = false,
}: {
  tone?: "dark" | "light";
  mobileFixed?: boolean;
  revealAfterHero?: boolean;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const isLight = tone === "light" && !isPastHero;

  useEffect(() => {
    if (tone !== "light" && !revealAfterHero) {
      return;
    }

    const updateHeaderTone = () => {
      const heroExit = Math.max(320, window.innerHeight * 0.72);
      const nextIsPastHero = window.scrollY > heroExit;
      setIsPastHero((current) =>
        current === nextIsPastHero ? current : nextIsPastHero,
      );
    };

    updateHeaderTone();
    window.addEventListener("scroll", updateHeaderTone, { passive: true });
    window.addEventListener("resize", updateHeaderTone);

    return () => {
      window.removeEventListener("scroll", updateHeaderTone);
      window.removeEventListener("resize", updateHeaderTone);
    };
  }, [revealAfterHero, tone]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`${
        mobileFixed ? "fixed inset-x-0 top-0 z-50 sm:hidden" : "relative z-20"
      } ${
        revealAfterHero && !isPastHero ? "pointer-events-none opacity-0" : "opacity-100"
      } flex h-11 items-start justify-between px-5 transition-opacity duration-200 sm:h-12 sm:px-8`}
    >
      <Link
        href="/"
        aria-label="Home page link"
        className="mt-2 inline-flex h-7 items-start sm:mt-[10px]"
      >
        <LogoWordmark tone={isLight ? "light" : "dark"} className="h-7 w-12" />
      </Link>
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(true)}
        className="mt-0 flex h-11 w-11 flex-col items-end justify-center gap-2 sm:mt-2 sm:h-8 sm:w-8"
      >
        <span className={`h-0.5 w-8 ${isLight ? "bg-[#F0F5F9]" : "bg-[#061218]"}`} />
        <span className={`h-0.5 w-6 ${isLight ? "bg-[#F0F5F9]" : "bg-[#061218]"}`} />
      </button>

      {isMenuOpen ? (
        <nav
          aria-label="Main navigation"
          className="fixed inset-0 z-[80] bg-[#1F75B2] px-5 text-[#F0F5F9] sm:px-8"
        >
          <Link
            href="/"
            aria-label="Home page link"
            onClick={() => setIsMenuOpen(false)}
            className="absolute left-5 top-4 inline-flex h-7 items-start sm:left-8 sm:top-[10px]"
          >
            <LogoWordmark tone="light" className="h-7 w-12" />
          </Link>

          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
            className="absolute right-5 top-2 flex h-11 w-11 items-center justify-center sm:right-8 sm:h-8 sm:w-8"
          >
            <span className="absolute h-0.5 w-8 rotate-45 bg-[#F0F5F9]" />
            <span className="absolute h-0.5 w-8 -rotate-45 bg-[#F0F5F9]" />
          </button>

          <ul className="flex min-h-svh flex-col items-center justify-start gap-1 pt-[277px] text-center sm:translate-y-[38px] sm:justify-center sm:gap-2.5 sm:pt-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-[48px] font-medium leading-[1.2] tracking-[-0.03em] text-[#F0F5F9] sm:text-[96px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
