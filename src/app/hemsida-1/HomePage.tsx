import type { Metadata } from "next";
import Image from "next/image";
import { MobileNav } from "./MobileNav";
import { navHref, navItems, siteCopy, socialItems, solutionDetailHref } from "./navigation";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Moderna Sidor",
  description:
    "Digitala system för organisationer som behöver mer sammanhang.",
};

const projects = [
  {
    eyebrow: "AI",
    title: "Arbetsflöden",
    text: "Ansvar, status och nästa steg samlat på ett ställe.",
    image: "/figma/hemsida-1/casper-ai.png",
    href: solutionDetailHref("casper-ai"),
  },
  {
    eyebrow: "ML",
    title: "Beslutsunderlag",
    text: "Data och rapporter som gör arbetet enklare att följa upp och leda.",
    image: "/figma/hemsida-1/tune-ai.png",
    href: solutionDetailHref("tune-ai"),
  },
  {
    eyebrow: "DL",
    title: "Automatisering",
    text: "Stöd och regler som minskar onödiga steg utan att ta bort kontrollen från teamet.",
    image: "/figma/hemsida-1/ring-models.png",
    href: solutionDetailHref("ring-models-in-healthcare"),
  },
];

const awards = [
  {
    title: "Tydligare arbetsflöden",
    year: "01",
    category: "Ansvar, status och nästa steg i samma vy",
  },
  {
    title: "Bättre beslutsunderlag",
    year: "02",
    category: "Data och rapporter som går att agera på",
  },
  {
    title: "Smartare automatisering",
    year: "03",
    category: "AI-stöd där det sparar faktisk tid",
  },
  {
    title: "System som går att växa med",
    year: "04",
    category: "En stabil grund för fler flöden och användare",
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

function PillButton({ children, href = navHref.solutions, dark = false }: { children: string; href?: string; dark?: boolean }) {
  return (
    <a className={`${styles.pillButton} ${dark ? styles.pillButtonDark : ""}`} href={href}>
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
        <div className={styles.heroBackdrop} aria-hidden="true" />
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
            Digitala system för organisationer som behöver mer sammanhang.
          </h1>
          <p>
            Vi bygger system som samlar arbete, data och beslut i en stabil
            helhet. Utformat runt hur era team arbetar i dag — och byggt för att
            hålla när verksamheten växer.
          </p>
          <div className={styles.heroActions}>
            <PillButton>{siteCopy.primaryCta}</PillButton>
            <PillButton href={navHref.contact} dark>{siteCopy.contactCta}</PillButton>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <SectionLabel>Om oss</SectionLabel>
        <div className={styles.aboutCopy}>
          <p>
            Moderna Sidor bygger system runt arbetet som redan pågår.
          </p>
          <p>
            När flera team, underlag och beslut ska röra sig tillsammans behövs
            mer än ännu ett verktyg. Det behövs en digital struktur som skapar
            tydlighet, ansvar och lugn i organisationen.
          </p>
          <p>
            Vi går nära verksamheten, förstår flödena och formar lösningen runt
            människorna som ska använda den. Resultatet är system som känns
            naturliga i arbetet, enkla att följa upp och stabila nog att växa med.
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
            src="/figma/hemsida-1/showreel-bg.png"
            alt=""
            fill
            sizes="100vw"
            loading="eager"
            unoptimized
            className={styles.videoImage}
          />
          <button className={styles.playButton} type="button">
            <span className={styles.playIcon} aria-hidden="true" />
            <span className={styles.playLabel}>Spela video</span>
          </button>
        </div>
      </section>

      <section className={styles.solutions}>
        <div className={styles.solutionsIntro}>
          <SectionLabel>Det vi bygger in</SectionLabel>
          <div className={styles.solutionsIntroCopy}>
            <h2>Det som gör systemet hållbart.</h2>
            <p>
              Varje lösning byggs med tydliga roller, samlad data, rätt
              integrationer och automatisering där den stärker arbetet. Inte för att
              göra systemet mer avancerat — utan för att göra organisationen enklare
              att leda.
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
                <div
                  aria-hidden="true"
                  className={styles.projectImage}
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.impact}>
        <div className={styles.impactIntro}>
          <SectionLabel>Effekt</SectionLabel>
          <div className={styles.impactCopy}>
            <h2>När systemet bär arbetet får organisationen mer kontroll.</h2>
            <p>
              Ett bra system gör inte bara arbetet snabbare. Det gör det
              tydligare.
            </p>
            <p>
              Team ser vad som behöver göras. Ansvar blir lättare att följa.
              Ledningen får bättre överblick över flöden, prioriteringar och
              beslut. Informationen finns där den behövs, när den behövs.
            </p>
            <p>
              Det skapar lugn i vardagen — och bättre förutsättningar att växa
              utan att tappa riktning.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.awards}>
        <h2>Det vi bygger in</h2>
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

      <section className={styles.footerCtaSection}>
        <div className={styles.footerCta}>
          <div className={styles.footerCtaCopy}>
            <h2>{siteCopy.footerHeadline}</h2>
            <p>{siteCopy.footerBody}</p>
          </div>
          <a className={styles.footerContactLink} href={navHref.contact}>
            <span aria-hidden="true">✦</span>
            <span>{siteCopy.footerLink}</span>
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBottom}>
          <div className={styles.footerBrand}>
            <h2>{siteCopy.footerBrand}</h2>
            <p>{siteCopy.footerTagline}</p>
          </div>
          <div className={styles.footerColumns}>
            <div>
              <h3>{siteCopy.pagesHeading}</h3>
              <nav>
                {navItems.map((item) => (
                  <a href={item.href} key={item.label}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h3>{siteCopy.socialsHeading}</h3>
              <nav>
                {socialItems.map((item) => (
                  <a href={item.href} key={item.label}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className={styles.copyright}>© 2026 Moderna Sidor</p>
      </footer>
      </div>
    </main>
  );
}
