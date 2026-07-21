"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Priser", href: "#priser" },
  { label: "Blogg", href: "#blogg" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`mx-auto flex max-w-[1503px] items-center justify-between px-8 py-4 transition-colors duration-300 ${
          scrolled
            ? "bg-[#061218]/90 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center bg-[#f0f5f9] text-[15px] font-semibold text-[#061218]">
            M
          </span>
          <span className="text-[17px] font-medium tracking-[-0.3px] text-[#f0f5f9]">
            Moderna Sidor
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] tracking-[-0.3px] text-[#f0f5f9]/60 transition-colors hover:text-[#f0f5f9]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="#kontakt"
            className="hidden h-[40px] items-center justify-center bg-[#f0f5f9] px-5 text-[15px] font-medium tracking-[-0.3px] text-[#1f75b2] transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Starta projekt
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Meny"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-[#f0f5f9] transition-transform duration-200 ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-[#f0f5f9] transition-transform duration-200 ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[rgba(240,245,249,0.08)] bg-[#061218]/95 px-8 pb-6 pt-4 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-[16px] tracking-[-0.3px] text-[#f0f5f9]/80 transition-colors hover:text-[#f0f5f9]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-3">
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="inline-flex h-[40px] items-center justify-center bg-[#f0f5f9] px-5 text-[15px] font-medium tracking-[-0.3px] text-[#1f75b2]"
              >
                Starta projekt
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
