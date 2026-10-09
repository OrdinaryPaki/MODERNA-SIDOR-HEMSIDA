"use client";

import { useId, useState } from "react";
import styles from "./accordion.module.css";

export type AccordionItem = { question: string; answer: string };
export function Accordion({ items, multiple = false, className = "" }: { items: AccordionItem[]; multiple?: boolean; className?: string }) {
  const [expanded, setExpanded] = useState<number[]>([]);
  const id = useId();
  function toggle(index: number) {
    setExpanded(current => current.includes(index) ? current.filter(item => item !== index) : multiple ? [...current, index] : [index]);
  }
  return <div className={`${styles.accordion} ${className}`}>{items.map((item, index) => {
    const open = expanded.includes(index);
    return <div className={styles.item} key={item.question} data-open={open}>
      <button className={styles.question} type="button" id={`${id}-trigger-${index}`} aria-expanded={open} aria-controls={`${id}-answer-${index}`} onClick={() => toggle(index)}><span>{item.question}</span><span className={styles.icon} aria-hidden="true"><img src="/assets/shSYSaRjokpwgL577UKH65sDjU.svg" alt="" width="20" height="20" /></span></button>
      <div className={styles.answer} id={`${id}-answer-${index}`} role="region" aria-labelledby={`${id}-trigger-${index}`} inert={!open}><div><p>{item.answer}</p></div></div>
    </div>;
  })}</div>;
}
