"use client";

import { useEffect, useRef } from "react";
import { observeScrollFrame } from "@/lib/scroll-frame";
import styles from "./about.module.css";

export function CharacterReveal({ text }: { text: string }) {
  const paragraph = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");
  useEffect(() => {
    const element = paragraph.current;
    if (!element) return;
    const characters = Array.from(element.querySelectorAll<HTMLElement>("[data-character]"));
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      characters.forEach(character => { character.style.opacity = "1"; });
      return;
    }
    let lastProgress = -1;
    return observeScrollFrame(() => {
      const bounds = element.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (innerHeight - bounds.top) / (innerHeight * .8)));
      if (Math.abs(progress - lastProgress) < .002) return;
      lastProgress = progress;
      characters.forEach((character, index) => { character.style.opacity = String(Math.max(0, Math.min(1, progress * characters.length - index))); });
    });
  }, [text]);
  return <div className={styles.characters}><p ref={paragraph}><span className={styles.srOnly}>{text}</span>{words.map((word, index) => <span className={styles.characterWord} key={index} aria-hidden="true">{[...word].map((character, i) => <span className={styles.character} data-character key={i}>{character}</span>)}{index < words.length - 1 ? " " : ""}</span>)}</p></div>;
}
