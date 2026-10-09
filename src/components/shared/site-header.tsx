"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { contactEmail } from "@/data/unique-contact";
import { aboutPageEnabled } from "@/lib/about-visibility";
import { usePathname } from "next/navigation";
import { NavigationLogoFilter } from "./navigation-logo-filter";
import { NavigationLogo } from "./navigation-logo";
import styles from "./site-header.module.css";

const navigation = [["Start", "/"], ["Om oss", "/about"], ["Kontakt", "/contact"]]
  .filter(([, href]) => aboutPageEnabled || href !== "/about");

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const trigger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); }
      if (event.key !== "Tab") return;
      const items = [trigger.current, ...Array.from(menu.current?.querySelectorAll<HTMLAnchorElement>("a") || [])].filter(Boolean) as HTMLElement[];
      const current = items.indexOf(document.activeElement as HTMLElement);
      if (event.shiftKey && current === 0) { event.preventDefault(); items.at(-1)?.focus(); }
      if (!event.shiftKey && current === items.length - 1) { event.preventDefault(); items[0]?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previous; document.removeEventListener("keydown", onKey); };
  }, [open]);
  return <header className={`${styles.header} ${open ? styles.open : ""}`}>
    <NavigationLogoFilter />
    <div className={styles.bar}>
      <NavigationLogo inactive={open} onNavigate={() => setOpen(false)} />
      <button ref={trigger} className={styles.toggle} type="button" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(previous => !previous)}>Meny</button>
    </div>
    <div id="site-menu" ref={menu} className={styles.overlay} aria-hidden={!open} inert={!open}>
      <div className={`${styles.bar} ${styles.overlayBar}`}>
        <NavigationLogo light onNavigate={() => setOpen(false)} />
      </div>
      <div className={styles.menuContainer}>
        <nav aria-label="Huvudmeny" className={styles.navigation}>
          {navigation.map(([label, href], i) => <div className={styles.linkMask} key={href}><Link href={href} aria-current={pathname === href ? "page" : undefined} style={{ "--index": i } as React.CSSProperties} onClick={() => setOpen(false)}>{label}<span aria-hidden="true">↗</span></Link></div>)}
        </nav>
        <div className={styles.aside}>
          <div><p>Kontakta oss</p><a href={`mailto:${contactEmail}`} onClick={() => setOpen(false)}>{contactEmail}</a></div>
          <div><p>Juridisk information</p><div className={styles.legal}><Link href="/privacy" onClick={() => setOpen(false)}>Integritetspolicy</Link><Link href="/terms" onClick={() => setOpen(false)}>Allmänna villkor</Link></div></div>
        </div>
      </div>
    </div>
  </header>;
}
