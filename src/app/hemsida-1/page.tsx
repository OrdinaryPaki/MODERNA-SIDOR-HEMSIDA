import type { Metadata } from "next";
import Image from "next/image";
import { MobileNav } from "./MobileNav";
import { navHref, navItems, socialItems } from "./navigation";
import { TestimonialRotator } from "./TestimonialRotator";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Hemsida 1 - Moderna Sidor",
  description:
    "Digitala system, AI-stöd och arbetsflöden byggda runt arbetet, datan och besluten i er verksamhet.",
};

const projects = [
  {
    eyebrow: "AI",
    title: "Arbetsflöden",
    text: "Ansvar, status och nästa steg samlat i samma vy",
    image: "/figma/hemsida-1/casper-ai.png",
  },
  {
    eyebrow: "ML",
    title: "Beslutsstöd",
    text: "Rapporter som visar vad som behöver göras",
    image: "/figma/hemsida-1/tune-ai.png",
  },
  {
    eyebrow: "DL",
    title: "Automatisering",
    text: "AI-stöd och regler som tar bort repetitivt arbete",
    image: "/figma/hemsida-1/ring-models.png",
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
                Moderna Sidor
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
              <button className={styles.searchButton} type="button">
                <span className={styles.searchIcon} aria-hidden="true" />
                Sök
              </button>
              <PillButton>Se lösningar</PillButton>
            </div>
            <MobileNav />
          </div>
        </header>
        <div className={styles.heroContent}>
          <h1>Digitala system byggda runt hur ni faktiskt jobbar</h1>
          <p>
            Vi samlar flöden, data och AI-stöd i system som teamet faktiskt använder.
          </p>
          <div className={styles.heroActions}>
            <PillButton>Se lösningar</PillButton>
            <PillButton href={navHref.contact} dark>Kontakta oss</PillButton>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <SectionLabel>Om oss</SectionLabel>
        <div className={styles.aboutCopy}>
          <p>
            Moderna Sidor utvecklar digitala system för företag som har vuxit ifrån
            kalkylark, lösa dokument och generiska verktyg. Vi formar lösningen runt
            arbetet, datan och besluten som redan finns i verksamheten.
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
            <span className={styles.playLabel}>Se case</span>
          </button>
        </div>
      </section>

      <section className={styles.solutions}>
        <div className={styles.solutionsIntro}>
          <h2>Det vi bygger in</h2>
          <p>
            Varje system byggs runt verkliga arbetssätt: tydliga roller, rätt data,
            smarta integrationer och automatisering där den gör konkret nytta.
          </p>
        </div>
        <div className={styles.projectList}>
          {projects.map((project) => (
            <article className={styles.project} key={project.title}>
              <p className={styles.projectEyebrow}>{project.eyebrow}</p>
              <div className={styles.projectBody}>
                <div className={styles.projectText}>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <ArrowLink>Se vad vi gjorde</ArrowLink>
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
          <h2>När systemet följer arbetet minskar friktionen och teamet får bättre fart</h2>
        </div>
        <div className={styles.impactBody}>
          <TestimonialRotator />
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

      <footer className={styles.footer}>
        <div className={styles.footerCta}>
          <h2>Låt oss bygga ett system runt ert arbetssätt</h2>
          <a className={styles.footerContactLink} href={navHref.contact}>
            <span aria-hidden="true">✦</span>
            <span>Kontakta oss</span>
          </a>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerBrand}>
            <h2>Moderna Sidor</h2>
            <p>Skräddarsydda digitala system för företag som vill jobba tydligare</p>
          </div>
          <div className={styles.footerColumns}>
            <div>
              <h3>Pages</h3>
              <nav>
                {navItems.map((item) => (
                  <a href={item.href} key={item.label}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h3>Socials</h3>
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
        <p className={styles.copyright}>© 2024 — Copyright OneDraft</p>
      </footer>
      </div>
    </main>
  );
}
