import type { CSSProperties, ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <div data-reveal className={className} style={{ "--reveal-delay": `${delay}s` } as CSSProperties}>{children}</div>;
}

export function SplitText({ text, className = "", as = "h2" }: { text: string; className?: string; as?: "h1" | "h2" | "h3" | "p" }) {
  const Tag = as;
  return <Tag className={className} data-reveal-words aria-label={text}>{text.split(" ").map((word, index) => <span className="reveal-word" key={index} aria-hidden="true" style={{ "--word-index": index } as CSSProperties}>{word}{" "}</span>)}</Tag>;
}
