"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import styles from "./project-card.module.css";

export function ComingSoonProjectCard({ children, className, style }: {
  children: ReactNode;
  className: string;
  style: CSSProperties;
}) {
  const [visible, setVisible] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  function showToast() {
    if (timer.current) clearTimeout(timer.current);
    setVisible(true);
    timer.current = setTimeout(() => setVisible(false), 3000);
  }

  return <>
    <button type="button" className={`${className} ${styles.cardButton}`} style={style} onClick={showToast}>
      {children}
    </button>
    {visible && <div className={styles.toast} role="status">Kommer snart</div>}
  </>;
}
