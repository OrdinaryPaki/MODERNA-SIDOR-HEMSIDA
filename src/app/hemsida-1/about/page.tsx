import type { Metadata } from "next";
import Image from "next/image";
import { FigmaPage } from "../_figma-pages/FigmaPage";
import { MobileNav } from "../MobileNav";
import { aboutPage } from "../_figma-pages/pages";
import { navHref, navItems, socialItems } from "../navigation";
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

const clientNames = [
  "Teleways",
  "Meetel",
  "Balko",
  "Kundia",
  "Glasklart",
  "ANLAB",
  "Moderna Team",
];

const groups = [
  {
    title: "Arbetsflöden",
    cards: [
      ["Projektflöde", "Ansvar, status och nästa steg samlat i ett arbetsflöde", "/figma/hemsida-1/casper-ai.png"],
      ["Kundvy", "All kunddata och historik där teamet behöver den", "/figma/hemsida-1/pages/about-card-2.png"],
    ],
  },
  {
    title: "Beslutsstöd",
    cards: [
      ["Rapporter", "Nyckeltal som visar vad som behöver göras", "/figma/hemsida-1/tune-ai.png"],
      ["Integrationer", "System som pratar med varandra utan dubbelarbete", "/figma/hemsida-1/pages/about-card-4.png"],
    ],
  },
  {
    title: "Automatisering",
    cards: [
      ["AI-stöd", "Smarta regler som tar bort repetitiva moment", "/figma/hemsida-1/ring-models.png"],
      ["Skalbar grund", "En teknisk bas som kan växa med verksamheten", "/figma/hemsida-1/pages/about-card-6.png"],
    ],
  },
] as const;

function AboutResponsive() {
  return (
    <main className={styles.responsive}>
      <section className={styles.hero}>
        <Image src="/figma/hemsida-1/pages/about-hero-bg.png" alt="" fill priority unoptimized className={styles.heroImage} />
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
        <h1>Digitala system för företag som vuxit ur standardverktyg</h1>
      </section>

      <Info label="Mer om oss">
        Moderna Sidor bygger digitala system runt hur verksamheten faktiskt arbetar. Vi börjar i flöden, ansvar och data innan vi väljer teknik.
      </Info>
      <Info label="Vårt arbetssätt">
        Vi gör komplexa processer tydliga, kopplar ihop verktyg och lägger AI-stöd där det skapar mätbar nytta.
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

      <section className={styles.impact}>
        <Info label="Impact">
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
        <div className={styles.bars}><span /><span /><span /></div>
      </section>

      <section className={styles.clients}>
        <h2>Team som jobbar tydligare</h2>
        <div className={styles.clientMarquee} aria-label="Kunder">
          <div className={styles.clientTrack}>
            {[...clientNames, ...clientNames].map((client, index) => (
              <span key={`${client}-${index}`}>{client}</span>
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

function Info({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className={styles.info}>
      <div className={styles.label}><span />{label}</div>
      <p>{children}</p>
    </section>
  );
}
