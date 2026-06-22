import type { Metadata } from "next";
import Image from "next/image";
import { Archivo, Inter, Inter_Tight } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--hemsida-1-inter",
  weight: ["400"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--hemsida-1-inter-tight",
  weight: ["500", "600"],
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--hemsida-1-archivo",
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Hemsida 1 - Moderna Sidor",
  description:
    "Kodad Figma-inspirerad sida för Moderna Sidor och skräddarsydda digitala system.",
};

const navItems = ["Start", "Om oss", "Case", "Process", "Kontakt"];
const socials = ["LinkedIn", "Instagram", "Mail"];

const projects = [
  {
    eyebrow: "CRM",
    title: "Glasklart",
    text: "Kunder, arbetsordrar, schema, karta och fakturor samlat i ett operativt flöde.",
    image: "/figma/hemsida-1/casper-ai.png",
  },
  {
    eyebrow: "AI",
    title: "Balko.ai",
    text: "Beräkningar, material, offerter och fakturaunderlag för byggprojekt i samma arbetsyta.",
    image: "/figma/hemsida-1/tune-ai.png",
  },
  {
    eyebrow: "SYSTEM",
    title: "Visionsfastigheter",
    text: "Ett internt system för kontakter, lokalbehov, anteckningar, avtal och uppföljning.",
    image: "/figma/hemsida-1/ring-models.png",
  },
];

const awards = [
  {
    title: "Operativa system",
    year: "01",
    category: "CRM, arbetsorder, planering och interna verktyg",
  },
  {
    title: "AI och automation",
    year: "02",
    category: "AI-flöden, beräkningar, dokument och beslutsstöd",
  },
  {
    title: "Offert och säljstöd",
    year: "03",
    category: "Offertsystem, PDF-underlag, status och utskick",
  },
  {
    title: "Långsiktig produktgrund",
    year: "04",
    category: "Kod, struktur och lösningar som går att bygga vidare på",
  },
];

function ArrowLink({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <a className={`${styles.arrowLink} ${light ? styles.arrowLinkLight : ""}`} href="#">
      <span className={styles.arrowIcon} aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}

function PillButton({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <a className={`${styles.pillButton} ${dark ? styles.pillButtonDark : ""}`} href="#">
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
    <main
      className={`${inter.variable} ${interTight.variable} ${archivo.variable} ${styles.page}`}
    >
      <section className={styles.hero}>
        <Image
          src="/figma/hemsida-1/hero.png"
          alt=""
          width={1513}
          height={856}
          priority
          unoptimized
          className={styles.heroImage}
        />
        <header className={styles.nav}>
          <div className={styles.navInner}>
            <div className={styles.navLeft}>
              <a className={styles.logo} href="#">
                Moderna Sidor
              </a>
              <nav className={styles.navLinks} aria-label="Primary">
                {navItems.map((item) => (
                  <a href="#" key={item}>
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            <div className={styles.navRight}>
              <button className={styles.searchButton} type="button">
                <span className={styles.searchIcon} aria-hidden="true" />
                Sök
              </button>
              <PillButton>Se case</PillButton>
            </div>
          </div>
        </header>
        <div className={styles.heroContent}>
          <h1>Skräddarsydda digitala system för företag med specifika behov</h1>
          <p>
            Vi bygger affärssystem, AI-funktioner och arbetsflöden som passar hur
            verksamheten faktiskt jobbar
          </p>
          <div className={styles.heroActions}>
            <PillButton>Se case</PillButton>
            <PillButton dark>Kontakta oss</PillButton>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <SectionLabel>Om oss</SectionLabel>
        <div className={styles.aboutCopy}>
          <p>
            Vi bygger system när kalkylark, mejl och standardverktyg inte längre räcker.
            Allt formas runt hur teamet faktiskt jobbar.
          </p>
          <ArrowLink>Läs mer om oss</ArrowLink>
        </div>
      </section>

      <section className={styles.videoSection}>
        <div className={styles.videoWrap}>
          <Image
            src="/figma/hemsida-1/showreel.png"
          alt=""
          width={1384}
          height={581}
          loading="eager"
          unoptimized
          className={styles.videoImage}
          />
          <button className={styles.playButton} type="button">
            <span className={styles.playIcon} aria-hidden="true" />
            Se arbetet
          </button>
        </div>
      </section>

      <section className={styles.solutions}>
        <div className={styles.solutionsIntro}>
          <h2>System som samlar arbetet på ett ställe</h2>
          <p>
            Vi går igenom roller, uppgifter och beslut. Sedan bygger vi vyerna,
            flödena och automationen som gör jobbet enklare att följa.
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
                  <ArrowLink>Se vad vi byggde</ArrowLink>
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
          <h2>Färre lösa verktyg. Tydligare status. Bättre kontroll.</h2>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.quotePane}>
            <blockquote>
              Allt samlas på ett ställe. Teamet ser kunder, uppgifter, status och
              nästa steg utan att hoppa mellan kalkylark, mejl och olika verktyg.
            </blockquote>
            <div className={styles.person}>
              <strong>Moderna Sidor</strong>
              <span>System som samlar arbetet</span>
            </div>
          </div>
          <Image
            src="/figma/hemsida-1/testimonial.png"
            alt=""
            width={692}
            height={617}
            loading="eager"
            unoptimized
            className={styles.testimonialImage}
          />
        </div>
        <div className={styles.sliderMarks} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      <section className={styles.awards}>
        <h2>Det vi bygger bäst</h2>
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

      <div className={styles.ctaSpacer} aria-hidden="true" />

      <section className={styles.cta}>
        <h2>Har ni ett arbetsflöde som behöver bli ett riktigt system?</h2>
        <div className={styles.ctaCopy}>
          <p>
            Berätta hur ni jobbar idag, vad som fastnar och vad ni vill kunna göra
            snabbare. Vi hjälper er forma ett system som passar verksamheten från start.
          </p>
          <ArrowLink light>Kontakta oss</ArrowLink>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <h2>Moderna Sidor</h2>
            <p>Skräddarsydda digitala system, AI-funktioner och plattformar.</p>
          </div>
          <div className={styles.footerColumns}>
            <div>
              <h3>Sidor</h3>
              <nav>
                {navItems.map((item) => (
                  <a href="#" key={item}>
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h3>Socialt</h3>
              <nav>
                {socials.map((item) => (
                  <a href="#" key={item}>
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className={styles.copyright}>© 2026 — Moderna Sidor</p>
      </footer>
    </main>
  );
}
