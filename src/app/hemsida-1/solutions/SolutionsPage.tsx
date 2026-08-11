import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FigmaPage } from "../_figma-pages/FigmaPage";
import { MobileNav } from "../MobileNav";
import { solutionsPage } from "../_figma-pages/pages";
import { navHref, navItems, siteCopy, solutionDetailHref } from "../navigation";
import { solutionGroups } from "./solutions-data";
import styles from "./solutions.module.css";

export const metadata: Metadata = {
  title: "Lösningar | Moderna Sidor",
};

export default function SolutionsPage() {
  return (
    <>
      <div className={styles.desktopOnly}>
        <FigmaPage data={solutionsPage} />
      </div>
      <SolutionsResponsive />
    </>
  );
}

function SolutionsResponsive() {
  return (
    <main className={styles.responsive}>
      <section className={styles.hero}>
        <Image src="/figma/hemsida-1/pages/solutions-hero-bg.png" alt="" fill priority unoptimized />
        <header className={styles.nav}>
          <a href={navHref.home}>{siteCopy.brand}</a>
          <nav>{navItems.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}</nav>
          <span className={styles.searchLabel}><span className={styles.searchIcon} aria-hidden="true" />{siteCopy.search}</span>
          <a href={navHref.solutions}>{siteCopy.primaryCta}</a>
          <MobileNav />
        </header>
        <h1>Lösningar byggda runt era flöden, data och beslut</h1>
      </section>
      <section className={styles.solutions}>
        {solutionGroups.map((group) => (
          <div className={styles.group} key={group.title}>
            <h2>{group.title}</h2>
            <Link className={styles.groupCta} href={solutionDetailHref(group.cards[0].slug)}>
              <span aria-hidden="true">✦</span>
              Se exemplar
            </Link>
            <div className={styles.cards}>
              {group.cards.map((card) => (
                <Link className={styles.card} href={solutionDetailHref(card.slug)} key={card.slug}>
                  <div className={styles.cardImage}>
                    <Image src={card.cardImage} alt="" fill loading="eager" unoptimized />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className={styles.join}>
        <div className={styles.joinHead}>
          <h2>Vår enda begränsning är dina idéer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.joinImage}>
          <Image src="/figma/hemsida-1/pages/solutions-team.png" alt="" fill loading="eager" unoptimized />
        </div>
      </section>
    </main>
  );
}
