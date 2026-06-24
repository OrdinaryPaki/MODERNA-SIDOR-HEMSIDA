import type { Metadata } from "next";
import Image from "next/image";
import { CareerApplyDropdown } from "../CareerApplyDropdown";
import { FigmaPage } from "../_figma-pages/FigmaPage";
import { MobileNav } from "../MobileNav";
import { careersPage } from "../_figma-pages/pages";
import { navHref, navItems, socialItems } from "../navigation";
import styles from "./careers.module.css";

export const metadata: Metadata = {
  title: "Karriär | Moderna Sidor",
};

export default function CareersPage() {
  return (
    <>
      <div className={styles.desktopOnly}>
        <FigmaPage data={careersPage} />
      </div>
      <CareersResponsive />
    </>
  );
}

const jobs = [
  ["Fullstack-utvecklare", "Hybrid"],
  ["Frontend-utvecklare", "Hybrid"],
  ["AI- och automationsspecialist", "Remote"],
  ["Produktdesigner", "Hybrid"],
] as const;

function CareersResponsive() {
  return (
    <main className={styles.responsive}>
      <section className={styles.hero}>
        <Image src="/figma/hemsida-1/pages/careers-hero-bg.png" alt="" fill priority unoptimized />
        <header className={styles.nav}>
          <a href={navHref.home}>Moderna Sidor</a>
          <nav>{navItems.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}</nav>
          <span className={styles.searchLabel}><span className={styles.searchIcon} aria-hidden="true" />Sök</span>
          <a href={navHref.solutions}>Se lösningar</a>
          <MobileNav />
        </header>
        <h1>Karriär på Moderna Sidor</h1>
      </section>
      <div className={styles.wide}>
        <Image src="/figma/hemsida-1/pages/careers-wide.png" alt="" fill loading="eager" unoptimized />
      </div>
      <section className={styles.positions}>
        <div className={styles.label}><span />Öppna roller på Moderna Sidor</div>
        <div className={styles.jobs}>
          {jobs.map(([title, meta]) => (
            <article key={title}>
              <div>
                <h2>{title}</h2>
                <p>{meta}</p>
              </div>
              <CareerApplyDropdown className={styles.applyDropdown} role={title} />
            </article>
          ))}
        </div>
      </section>
      <section className={styles.review}>
        <div className={styles.label}><span />Teamet säger</div>
        <div className={styles.reviewCard}>
          <div>
            <p>Vi jobbar nära kundens verkliga flöden och bygger lösningar som snabbt går att förstå, testa och förbättra.</p>
            <strong>Team Moderna Sidor</strong>
            <span>Produkt och utveckling</span>
          </div>
          <div className={styles.reviewImage}>
            <Image src="/figma/hemsida-1/pages/careers-review.png" alt="" fill loading="eager" unoptimized />
          </div>
        </div>
        <div className={styles.reviewControls} aria-label="Bläddra teamcitat">
          <button type="button" aria-label="Föregående">←</button>
          <button type="button" aria-label="Nästa">→</button>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <h2>Låt oss bygga ett system runt ert arbetssätt</h2>
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
