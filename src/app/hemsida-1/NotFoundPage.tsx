import type { Metadata } from "next";
import Image from "next/image";
import { FigmaPage } from "./_figma-pages/FigmaPage";
import { Footer } from "./Footer";
import { MobileNav } from "./MobileNav";
import { lunaPage } from "./_figma-pages/pages";
import { navHref, navItems, siteCopy } from "./navigation";
import styles from "./luna-ai/luna-ai.module.css";

export const metadata: Metadata = {
  title: "404 | Moderna Sidor",
};

export default function NotFoundPage() {
  return (
    <>
      <div className={styles.desktopOnly}>
        <FigmaPage data={lunaPage} />
      </div>
      <NotFoundResponsive />
    </>
  );
}

function NotFoundResponsive() {
  return (
    <main className={styles.responsive}>
      <section className={styles.hero}>
        <Image src="/figma/hemsida-1/pages/not-found-bg.jpg" alt="" fill priority unoptimized className={styles.heroImage} />
        <header className={styles.nav}>
          <a href={navHref.home}>{siteCopy.brand}</a>
          <nav aria-label="Primary">
            {navItems.map((item) => (
              <a href={item.href} key={item.label}>{item.label}</a>
            ))}
          </nav>
          <span className={styles.searchLabel}><span className={styles.searchIcon} aria-hidden="true" />{siteCopy.search}</span>
          <a href={navHref.solutions}>{siteCopy.primaryCta}</a>
          <MobileNav />
        </header>
        <div className={styles.message}>
          <p className={styles.code}>404</p>
          <h1>Här fanns inget att se… <a href={navHref.home}>Gå hem</a></h1>
        </div>
      </section>

      <Footer />
    </main>
  );
}
