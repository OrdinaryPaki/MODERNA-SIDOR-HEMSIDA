"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function MotionObserver() {
  const pathname = usePathname();
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal],[data-reveal-words]");
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach(element => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }, { threshold: .12, rootMargin: "0px 0px -30px 0px" });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
