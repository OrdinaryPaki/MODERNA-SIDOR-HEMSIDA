import type { Metadata } from "next";
import Image from "next/image";
import { FigmaPage } from "../_figma-pages/FigmaPage";
import { MobileNav } from "../MobileNav";
import { solutionsPage } from "../_figma-pages/pages";
import { navHref, navItems, socialItems } from "../navigation";
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

const groups = [
  {
    title: "Arbetsflöden",
    cards: [
      ["Projektflöde", "Ansvar, status och nästa steg i samma vy.", "/figma/hemsida-1/pages/solution-card-1.png"],
      ["Kundvy", "All kunddata där teamet faktiskt arbetar.", "/figma/hemsida-1/pages/solution-card-2.png"],
      ["Ärendehantering", "Tydliga flöden från fråga till leverans.", "/figma/hemsida-1/pages/solution-card-3.png"],
    ],
  },
  {
    title: "Beslutsstöd",
    cards: [
      ["Rapporter", "Nyckeltal som visar vad som behöver göras.", "/figma/hemsida-1/pages/solution-card-4.png"],
      ["Prognoser", "Underlag för bättre planering och beslut.", "/figma/hemsida-1/pages/solution-card-5.png"],
      ["Prioritering", "Rätt uppgift först, utan manuell sortering.", "/figma/hemsida-1/pages/solution-card-6.png"],
    ],
  },
  {
    title: "Automatisering",
    cards: [
      ["AI-stöd", "Smarta regler som tar bort repetitiva steg.", "/figma/hemsida-1/pages/solution-card-7.png"],
      ["Integrationer", "System som pratar ihop utan dubbelarbete.", "/figma/hemsida-1/pages/solution-card-8.png"],
      ["Skalbar grund", "En teknisk bas som kan växa med bolaget.", "/figma/hemsida-1/pages/solution-card-9.png"],
    ],
  },
] as const;

function SolutionsResponsive() {
  return (
    <main className={styles.responsive}>
      <section className={styles.hero}>
        <Image src="/figma/hemsida-1/pages/solutions-hero-bg.png" alt="" fill priority unoptimized />
        <header className={styles.nav}>
          <a href={navHref.home}>Moderna Sidor</a>
          <nav>{navItems.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}</nav>
          <span className={styles.searchLabel}><span className={styles.searchIcon} aria-hidden="true" />Sök</span>
          <a href={navHref.solutions}>Se lösningar</a>
          <MobileNav />
        </header>
        <h1>Lösningar byggda runt era flöden, data och beslut</h1>
      </section>
      <section className={styles.solutions}>
        {groups.map((group) => (
          <div className={styles.group} key={group.title}>
            <h2>{group.title}</h2>
            <div className={styles.cards}>
              {group.cards.map(([title, text, image]) => (
                <article className={styles.card} key={title}>
                  <div className={styles.cardImage}>
                    <Image src={image} alt="" fill loading="eager" unoptimized />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href="#">Se vad vi gjorde</a>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className={styles.join}>
        <div className={styles.joinHead}>
          <h2>Jobba med oss</h2>
          <p>Bygg system som gör vardagen enklare för team som har vuxit ur standardverktyg.</p>
        </div>
        <a href={navHref.careers}>Se öppna roller</a>
        <div className={styles.joinImage}>
          <Image src="/figma/hemsida-1/pages/solutions-team.png" alt="" fill loading="eager" unoptimized />
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
