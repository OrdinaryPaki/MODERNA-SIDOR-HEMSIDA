import type { Metadata } from "next";
import Image from "next/image";
import { HomeFooter } from "./Footer";
import { LogoCarousel } from "./LogoCarousel";
import { MobileNav } from "./MobileNav";
import { navHref, navItems, siteCopy, solutionDetailHref } from "./navigation";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Moderna Sidor",
  description:
    "Moderna Sidor bygger anpassade system för företag. Varje system utvecklas från grunden och utformas efter hur verksamheten arbetar.",
};

const projects = [
  {
    eyebrow: "01",
    title: "Arbetsflöden",
    text: "Ansvar, status och nästa steg samlas i en gemensam vy, utformad efter hur teamet arbetar.",
    image: "/figma/hemsida-1/casper-ai.webp",
    href: solutionDetailHref("casper-ai"),
  },
  {
    eyebrow: "02",
    title: "Beslutsunderlag",
    text: "Rapporter och nyckeltal byggs på verksamhetens egen data och visar det som behövs för att leda arbetet.",
    image: "/figma/hemsida-1/tune-ai.webp",
    href: solutionDetailHref("tune-ai"),
  },
  {
    eyebrow: "03",
    title: "Automatisering",
    text: "Repetitiva moment hanteras av systemet, enligt regler som utformas tillsammans med er.",
    image: "/figma/hemsida-1/ring-models.webp",
    href: solutionDetailHref("ring-models-in-healthcare"),
  },
];

const awards = [
  {
    title: "Kartläggning",
    year: "01",
    category: "Vi går igenom hur verksamheten arbetar i dag — flöden, roller, data och verktyg",
  },
  {
    title: "Utformning",
    year: "02",
    category: "Systemet ritas upp och stäms av mot verksamheten innan utvecklingen börjar",
  },
  {
    title: "Utveckling",
    year: "03",
    category: "Systemet byggs med moderna tekniker och tas i drift stegvis",
  },
  {
    title: "Förvaltning",
    year: "04",
    category: "Vi ansvarar för drift och vidareutveckling när systemet är i bruk",
  },
];

function ArrowLink({ children, href = "#", light = false, showIcon = true }: { children: string; href?: string; light?: boolean; showIcon?: boolean }) {
  return (
    <a className={`${styles.arrowLink} ${light ? styles.arrowLinkLight : ""}`} href={href}>
      {showIcon ? <span className={styles.arrowIcon} aria-hidden="true">✦</span> : null}
      <span>{children}</span>
    </a>
  );
}

function PillButton({
  children,
  href = navHref.solutions,
  dark = false,
  large = false,
}: {
  children: string;
  href?: string;
  dark?: boolean;
  large?: boolean;
}) {
  return (
    <a
      className={`${styles.pillButton} ${dark ? styles.pillButtonDark : ""} ${large ? styles.pillButtonLarge : ""}`}
      href={href}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className={styles.sectionLabel}>
      <span className={styles.labelMark} aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

export default function Hemsida1() {
  return (
    <main className={styles.page}>
      <div className={styles.canvas}>
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} aria-hidden="true">
          <Image
            src="/figma/hemsida-1/hero-bg.webp"
            alt=""
            fill
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
            unoptimized
            className={styles.heroBackdropImage}
          />
        </div>
        <header className={styles.nav}>
          <div className={styles.navInner}>
            <div className={styles.navLeft}>
              <a className={styles.logo} href={navHref.home}>
                {siteCopy.brand}
              </a>
              <nav className={styles.navLinks} aria-label="Primary">
                {navItems.map((item) => (
                  <a href={item.href} key={item.label}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className={styles.navRight}>
              <PillButton>{siteCopy.primaryCta}</PillButton>
            </div>
            <MobileNav />
          </div>
        </header>
        <div className={styles.heroContent}>
          <h1>
            Mer än ett system – en lösning som växer med verksamheten.
          </h1>
          <div className={styles.heroSeparator} aria-hidden="true" />
          <div className={styles.heroActions}>
            <PillButton href={navHref.contact} large>
              Boka kostnadsfri rådgivning
            </PillButton>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <SectionLabel>Om oss</SectionLabel>
        <div className={styles.aboutCopy}>
          <p>
            På Moderna Sidor utvecklar vi digitala lösningar som förenklar
            ditt arbete och stärker din verksamhet.
          </p>
          <p>
            Vi utgår alltid från hur verksamheten fungerar i praktiken. Genom
            att förstå processer, arbetsflöden och mål skapar vi lösningar som
            blir en naturlig del av det dagliga arbetet och bidrar till ökad
            effektivitet.
          </p>
          <p>
            Våra system växer tillsammans med våra kunder – i takt med nya
            behov, processer och mål. Därför värderar vi långsiktiga relationer
            som håller över tid.
          </p>
          <a className={styles.starLink} href={navHref.about}>
            <span aria-hidden="true">✦</span>
            <span>Läs mer om oss</span>
          </a>
        </div>
      </section>

      <section className={styles.videoSection}>
        <div className={styles.videoWrap}>
          <Image
            src="/figma/hemsida-1/showreel-bg.webp"
            alt=""
            fill
            sizes="(max-width: 768px) calc(100vw - 32px), calc(100vw - 128px)"
            loading="eager"
            unoptimized
            className={styles.videoImage}
          />
        </div>
      </section>

      <LogoCarousel />

      <section className={styles.solutions}>
        <div className={styles.solutionsIntro}>
          <SectionLabel>Vad vi bygger</SectionLabel>
          <div className={styles.solutionsIntroCopy}>
            <h2>Lösningar som formas av verksamheten.</h2>
            <p>
              Bakom varje kundcase finns ett nära samarbete och en lösning
              anpassad efter verksamhetens behov.
            </p>
          </div>
        </div>
        <div className={styles.projectList}>
          {projects.map((project) => (
            <article className={styles.project} key={project.title}>
              <p className={styles.projectEyebrow}>{project.eyebrow}</p>
              <div className={styles.projectBody}>
                <div className={styles.projectText}>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <ArrowLink href={project.href}>Se exempel</ArrowLink>
                </div>
                <div className={styles.projectImage} aria-hidden="true">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1024px) calc(100vw - 64px), 62vw"
                    loading="eager"
                    unoptimized
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.impact}>
        <div className={styles.impactIntro}>
          <SectionLabel>I praktiken</SectionLabel>
          <div className={styles.impactCopy}>
            <h2>Ett system i stället för många verktyg.</h2>
            <p>
              Information registreras en gång och finns sedan där den behövs.
            </p>
            <p>
              Teamen arbetar, följer upp och fattar beslut i samma miljö.
              Ledningen ser verksamheten i samma system som arbetet utförs i —
              utan separata rapporter eller sammanställningar.
            </p>
            <p>
              När verksamheten förändras byggs systemet vidare, med nya flöden,
              fler användare och fler integrationer.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.awards}>
        <h2>Så arbetar vi</h2>
        <div className={styles.awardsList}>
          {awards.map((award) => (
            <article className={styles.award} key={`${award.title}-${award.year}`}>
              <div className={styles.awardTop}>
                <h3>{award.title}</h3>
                <span>{award.year}</span>
              </div>
              <p>{award.category}</p>
            </article>
          ))}
        </div>
      </section>

      <HomeFooter />
      </div>
    </main>
  );
}
