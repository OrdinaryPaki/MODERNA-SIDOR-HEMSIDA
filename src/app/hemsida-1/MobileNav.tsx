"use client";

import Link from "next/link";
import { useRef } from "react";
import { navHref, navItems, siteCopy } from "./navigation";
import styles from "./mobile-nav.module.css";

export function MobileNav() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    detailsRef.current?.removeAttribute("open");
  }

  return (
    <details className={styles.mobileNav} ref={detailsRef}>
      <summary aria-label="Öppna meny" className={styles.toggle}>
        <span aria-hidden="true" />
      </summary>
      <nav aria-label="Mobil meny" className={styles.panel}>
        <Link className={styles.panelBrand} href={navHref.home} onClick={closeMenu}>
          {siteCopy.brand}
        </Link>
        <div className={styles.panelIntro}>
          <span className={styles.searchLink}>
            <span className={styles.searchIcon} aria-hidden="true" />
            {siteCopy.search}
          </span>
          <Link className={styles.panelCta} href={navHref.solutions} onClick={closeMenu}>
            {siteCopy.primaryCta}
          </Link>
        </div>
        <div className={styles.panelLinks}>
          {navItems.map((item) => (
            <Link href={item.href} key={item.label} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </details>
  );
}
