import type { Metadata } from "next";
import Image from "next/image";
import { FigmaPage } from "../_figma-pages/FigmaPage";
import { MobileNav } from "../MobileNav";
import { lunaPage } from "../_figma-pages/pages";
import { navHref, navItems, socialItems } from "../navigation";
import styles from "./luna-ai.module.css";

export const metadata: Metadata = {
  title: "404 | Moderna Sidor",
};

export default function LunaAiPage() {
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
          <a href={navHref.home}>Moderna Sidor</a>
          <nav aria-label="Primary">
            {navItems.map((item) => (
              <a href={item.href} key={item.label}>{item.label}</a>
            ))}
          </nav>
          <span className={styles.searchLabel}><span className={styles.searchIcon} aria-hidden="true" />Sök</span>
          <a href={navHref.solutions}>Se lösningar</a>
          <MobileNav />
        </header>
        <div className={styles.message}>
          <h1>404</h1>
          <p>Här fanns inget att se… <a href="/hemsida-1">Gå hem</a></p>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <h2>Låt oss bygga ett system runt ert arbetssätt</h2>
          <p>Berätta var arbetsflödet fastnar. Vi hjälper er samla rätt flöden, data och AI-stöd.</p>
          <a href={navHref.contact}>
            <span aria-hidden="true">✦</span>
            <span>Kontakta oss</span>
          </a>
        </div>
        <div className={styles.footerBottom}>
          <div>
            <h3>Moderna Sidor</h3>
            <p>Skräddarsydda digitala system för företag som vill jobba tydligare</p>
          </div>
          <nav>{navItems.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}</nav>
          <nav>{socialItems.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}</nav>
        </div>
      </footer>
    </main>
  );
}
