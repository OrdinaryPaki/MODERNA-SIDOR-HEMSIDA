import type { Metadata } from "next";
import Image from "next/image";
import { CareerApplyDropdown } from "../CareerApplyDropdown";
import { FigmaPage } from "../_figma-pages/FigmaPage";
import { MobileNav } from "../MobileNav";
import { careersPage } from "../_figma-pages/pages";
import { navHref, navItems, siteCopy } from "../navigation";
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
        <Image src="/figma/hemsida-1/pages/careers-hero-mobile.jpg" alt="" fill priority unoptimized />
        <header className={styles.nav}>
          <a href={navHref.home}>{siteCopy.brand}</a>
          <nav>{navItems.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}</nav>
          <span className={styles.searchLabel}><span className={styles.searchIcon} aria-hidden="true" />{siteCopy.search}</span>
          <a href={navHref.solutions}>{siteCopy.primaryCta}</a>
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
            <p className={styles.reviewQuote}>Kulturen hos oss uppmuntrar innovation, och att arbeta nära skarpa team som varje dag flyttar fram gränserna med AI är otroligt inspirerande. Möjligheterna att växa, lära sig och bidra på riktigt gör det här till en plats där du inte bara levererar, utan också utvecklas tillsammans med teamet.</p>
            <p className={styles.reviewRole}>Produkt och utveckling</p>
          </div>
          <div className={styles.reviewImage}>
            <Image src="/figma/hemsida-1/pages/careers-review.png" alt="" fill loading="eager" unoptimized />
          </div>
        </div>
      </section>
    </main>
  );
}
