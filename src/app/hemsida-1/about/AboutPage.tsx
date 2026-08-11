import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FigmaPage } from "../_figma-pages/FigmaPage";
import { MobileNav } from "../MobileNav";
import { aboutPage } from "../_figma-pages/pages";
import { navHref, navItems, siteCopy, solutionDetailHref } from "../navigation";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "Om oss | Moderna Sidor",
};

export default function AboutPage() {
  return (
    <>
      <div className={styles.desktopOnly}>
        <FigmaPage data={aboutPage} />
      </div>
      <AboutResponsive />
    </>
  );
}

const clientLogos = [
  "https://framerusercontent.com/images/7cpCWE3ZkQg7ehAh1pf5ykoevlw.png",
  "https://framerusercontent.com/images/QGV6yDpg1feOhvnncGIQXIjRlKY.png",
  "https://framerusercontent.com/images/wEcFiUrj2JVg3Wsfo350yK8jAE.png",
  "https://framerusercontent.com/images/BsnJa211InHF5JHBRR1bcd8.png",
  "https://framerusercontent.com/images/VGJPuRIrHaWcEQFzWT7u81zQ.png",
  "https://framerusercontent.com/images/0MyQTXmcSfmrLfMqjw1KwcVDSew.png",
  "https://framerusercontent.com/images/5CyJ9WZJRAhmwOkMt8MvYx8HP1o.png",
  "https://framerusercontent.com/images/qj6kgi1rmzKojvQqZM8e4V5eQ.png",
] as const;

const groups = [
  {
    title: "Arbetsflöden",
    cards: [
      {
        slug: "casper-ai",
        title: "Projektflöde",
        text: "Ansvar, status och nästa steg samlat i ett arbetsflöde",
        image: "/figma/hemsida-1/casper-ai.png",
      },
      {
        slug: "luna-ai",
        title: "Kundvy",
        text: "All kunddata och historik där teamet behöver den",
        image: "/figma/hemsida-1/pages/about-card-2.png",
      },
    ],
  },
  {
    title: "Beslutsstöd",
    cards: [
      {
        slug: "tune-ai",
        title: "Rapporter",
        text: "Nyckeltal som visar vad som behöver göras",
        image: "/figma/hemsida-1/tune-ai.png",
      },
      {
        slug: "deep-film-models",
        title: "Integrationer",
        text: "System som pratar med varandra utan dubbelarbete",
        image: "/figma/hemsida-1/pages/about-card-4.png",
      },
    ],
  },
  {
    title: "Automatisering",
    cards: [
      {
        slug: "ring-models-in-healthcare",
        title: "AI-stöd",
        text: "Smarta regler som tar bort repetitiva moment",
        image: "/figma/hemsida-1/ring-models.png",
      },
      {
        slug: "luno",
        title: "Skalbar grund",
        text: "En teknisk bas som kan växa med verksamheten",
        image: "/figma/hemsida-1/pages/about-card-6.png",
      },
    ],
  },
] as const;

function AboutResponsive() {
  return (
    <main className={styles.responsive}>
      <section className={styles.hero}>
        <Image src="/figma/hemsida-1/pages/about-hero-bg.png" alt="" fill priority unoptimized className={styles.heroImage} />
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
        <h1>Vi bygger system för idag — och utvecklar dem för framtiden</h1>
      </section>

      <Info label="Vad gör vi?">
        Vi utvecklar digitala system som gör verksamheten enklare att driva. Våra
        lösningar effektiviserar arbetet, skapar struktur och stärker verksamheten
        - utan att störa den dagliga driften.
      </Info>
      <Info label="Hur gör vi?">
        Vi börjar med att förstå hur verksamheten fungerar. Därefter skapar vi
        digitala lösningar som anpassas efter era processer, förenklar
        arbetsflöden och ger bättre överblick, tydligare ansvar och smidigare
        samarbete.
      </Info>

      <Info label="När ska vi?">
        När verksamheten har vuxit ur sina nuvarande arbetssätt eller när
        processer, information och ansvar börjar bli svåra att hålla ihop. Då
        hjälper vi er att bygga en stabil digital grund som gör det enklare att
        utvecklas och växa.
      </Info>

      <section className={styles.statement}>
        <p>Vi bygger system som teamet förstår, använder och kan växa med, så arbetet blir tydligare, besluten snabbare och vardagen enklare att styra.</p>
      </section>

      <div className={styles.wideImage}>
        <Image src="/figma/hemsida-1/pages/about-wide.png" alt="" fill loading="eager" unoptimized />
      </div>

      <section className={styles.solutions}>
        {groups.map((group) => (
          <div className={styles.group} key={group.title}>
            <div className={styles.groupHead}>
              <h2>{group.title}</h2>
              <a href={navHref.solutions}>Se alla lösningar</a>
            </div>
            <div className={styles.cards}>
              {group.cards.map((card) => (
                <Link className={styles.card} href={solutionDetailHref(card.slug)} key={card.slug}>
                  <div className={styles.cardImage}>
                    <Image src={card.image} alt="" fill loading="eager" unoptimized />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <span className={styles.cardCta}>
                    <span aria-hidden="true">✦</span>
                    <span>Se vad vi gjorde</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className={styles.impact}>
        <Info label="Effekt">
          Vi hjälper företag minska manuellt arbete och få bättre koll på beslut, data och nästa steg.
        </Info>
        <div className={styles.testimonial}>
          <div>
            <p>Systemet gav oss en gemensam vy för uppföljning och ansvar. Det blev enklare att agera på rätt saker i rätt tid.</p>
            <strong>Kundteam</strong>
            <span>Operativ ledning</span>
          </div>
          <div className={styles.testimonialImage}>
            <Image src="/figma/hemsida-1/impact.jpg" alt="" fill loading="eager" unoptimized />
          </div>
        </div>
      </section>

      <section className={styles.clients}>
        <div className={styles.clientMarquee} aria-label="Kunder">
          <div className={styles.clientTrack}>
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div className={styles.clientLogo} key={`${logo}-${index}`}>
                <Image src={logo} alt="" fill sizes="164px" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.join}>
        <div className={styles.joinHead}>
          <h2>Jobba med oss</h2>
          <p>Vi söker personer som vill bygga tydliga system för verkliga arbetsflöden.</p>
        </div>
        <a href={navHref.careers}>Se öppna roller</a>
        <div className={styles.joinImage}>
          <Image src="/figma/hemsida-1/pages/about-team.png" alt="" fill loading="eager" unoptimized />
        </div>
      </section>

    </main>
  );
}

function Info({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className={styles.info}>
      <div className={styles.label}><span />{label}</div>
      <p>{children}</p>
    </section>
  );
}
