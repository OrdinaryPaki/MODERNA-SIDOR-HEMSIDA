import type { Metadata } from "next";
import Image from "next/image";
import { FigmaPage } from "./_figma-pages/FigmaPage";
import { MobileNav } from "./MobileNav";
import { lunaPage } from "./_figma-pages/pages";
import { navHref, navItems, siteCopy, socialItems } from "./navigation";
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

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <h2>{siteCopy.footerHeadline}</h2>
          <p>Berätta var arbetsflödet fastnar. Vi hjälper er samla rätt flöden, data och AI-stöd.</p>
          <a href={navHref.contact}>
            <span aria-hidden="true">✦</span>
            <span>{siteCopy.footerLink}</span>
          </a>
        </div>
        <div className={styles.footerBottom}>
          <div>
            <h3>{siteCopy.footerBrand}</h3>
            <p>{siteCopy.footerTagline}</p>
          </div>
          <div>
            <h3>{siteCopy.pagesHeading}</h3>
            <nav>{navItems.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}</nav>
          </div>
          <div>
            <h3>{siteCopy.socialsHeading}</h3>
            <nav>{socialItems.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}</nav>
          </div>
        </div>
        <p className={styles.copyright}>© 2026 Moderna Sidor</p>
      </footer>
    </main>
  );
}
