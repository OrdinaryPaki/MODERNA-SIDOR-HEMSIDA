"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const SCROLL_LERP = 0.078;
const FORM_FIELD_TAGS = new Set(["INPUT", "TEXTAREA", "SELECT"]);

function shouldPreventSmoothScroll(node: Element) {
  if (
    node.hasAttribute("data-lenis-prevent") ||
    node.hasAttribute("data-smooth-scroll-prevent")
  ) {
    return true;
  }

  if (!(node instanceof HTMLElement)) {
    return false;
  }

  if (node.isContentEditable || FORM_FIELD_TAGS.has(node.tagName)) {
    return true;
  }

  const style = window.getComputedStyle(node);
  const hasScrollableY =
    (style.overflowY === "auto" || style.overflowY === "scroll") &&
    node.scrollHeight > node.clientHeight;

  if (hasScrollableY) {
    node.setAttribute("data-lenis-prevent", "true");
  }

  return hasScrollableY;
}

function getSamePageHash(anchor: HTMLAnchorElement) {
  const url = new URL(anchor.href, window.location.href);

  if (
    url.origin !== window.location.origin ||
    url.pathname !== window.location.pathname ||
    !url.hash
  ) {
    return null;
  }

  return url.hash;
}

function getHashTarget(hash: string) {
  try {
    return document.querySelector<HTMLElement>(hash);
  } catch {
    return null;
  }
}

export default function SmoothScroll() {
  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    let lenis: Lenis | null = null;
    let animationFrame = 0;
    let stopScrollObserver: MutationObserver | null = null;
    let htmlStyleObserver: MutationObserver | null = null;

    const destroyLenis = () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }

      stopScrollObserver?.disconnect();
      htmlStyleObserver?.disconnect();
      stopScrollObserver = null;
      htmlStyleObserver = null;
      lenis?.destroy();
      lenis = null;
    };

    const syncStopScroll = () => {
      if (!lenis) {
        return;
      }

      const shouldStop =
        Boolean(document.querySelector("[data-frameruni-stop-scroll]")) ||
        root.style.overflow === "hidden";

      if (shouldStop) {
        lenis.stop();
        return;
      }

      lenis.start();
    };

    const createLenis = () => {
      destroyLenis();

      if (prefersReducedMotion.matches || coarsePointer.matches) {
        return;
      }

      lenis = new Lenis({
        lerp: SCROLL_LERP,
        smoothWheel: true,
        syncTouch: false,
        prevent: shouldPreventSmoothScroll,
      });

      const raf = (time: number) => {
        if (lenis) {
          lenis.raf(time);
        }

        animationFrame = requestAnimationFrame(raf);
      };

      animationFrame = requestAnimationFrame(raf);
      stopScrollObserver = new MutationObserver(syncStopScroll);
      htmlStyleObserver = new MutationObserver(syncStopScroll);
      stopScrollObserver.observe(root, {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ["data-frameruni-stop-scroll"],
      });
      htmlStyleObserver.observe(root, {
        attributes: true,
        attributeFilter: ["style"],
      });
      syncStopScroll();
    };

    const handleAnchorClick = (event: MouseEvent) => {
      if (
        !lenis ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest<HTMLAnchorElement>("a[href]");

      if (!anchor) {
        return;
      }

      const hash = getSamePageHash(anchor);

      if (!hash) {
        return;
      }

      const hashTarget = getHashTarget(hash);

      if (!hashTarget) {
        return;
      }

      event.preventDefault();

      const targetStyle = window.getComputedStyle(hashTarget);
      const scrollMarginTop = Number.parseFloat(targetStyle.scrollMarginTop) || 0;

      history.pushState(null, "", hash);
      lenis.scrollTo(hashTarget, { offset: -scrollMarginTop });
    };

    document.addEventListener("click", handleAnchorClick);
    prefersReducedMotion.addEventListener("change", createLenis);
    coarsePointer.addEventListener("change", createLenis);
    createLenis();

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      prefersReducedMotion.removeEventListener("change", createLenis);
      coarsePointer.removeEventListener("change", createLenis);
      destroyLenis();
    };
  }, []);

  return null;
}
