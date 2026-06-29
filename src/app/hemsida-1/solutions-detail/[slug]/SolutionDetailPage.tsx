import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MobileNav } from "../../MobileNav";
import { navHref, navItems, siteCopy, socialItems } from "../../navigation";
import {
  solutionDetailBySlug,
  solutionDetails,
  type SolutionSlug,
} from "../../solutions/solutions-data";
import styles from "./page.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return solutionDetails.map((detail) => ({ slug: detail.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = solutionDetailBySlug[slug as SolutionSlug];

  if (!detail) {
    return {
      title: "Lösningsdetalj | Moderna Sidor",
    };
  }

  return {
    title: `${detail.title} | Moderna Sidor`,
  };
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className={styles.sectionLabel}>
      <span aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = solutionDetailBySlug[slug as SolutionSlug];

  if (!detail) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <img
          alt={detail.title}
          className={styles.heroImage}
          loading="eager"
          src={detail.heroImage}
        />
        <header className={styles.nav}>
          <Link href={navHref.home}>{siteCopy.brand}</Link>
          <nav>{navItems.map((item) => <Link href={item.href} key={item.label}>{item.label}</Link>)}</nav>
          <span className={styles.searchLabel}><span className={styles.searchIcon} aria-hidden="true" />{siteCopy.search}</span>
          <Link className={styles.navCta} href={navHref.solutions}>{siteCopy.primaryCta}</Link>
          <MobileNav />
        </header>
        <div className={styles.heroCopy}>
          <h1>{detail.title}</h1>
          <p>{detail.summary}</p>
          <Link className={styles.backButton} href={navHref.solutions}>Tillbaka till lösningar</Link>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.bodySection}>
          <SectionLabel>Om lösningen</SectionLabel>
          <p>{detail.about}</p>
        </div>

        <div className={styles.bodySection}>
          <SectionLabel>Utmaning</SectionLabel>
          <p>{detail.challenge}</p>
        </div>

        <div className={styles.challengeImageWrap}>
          <img
            alt=""
            className={styles.challengeImage}
            loading="eager"
            src={detail.storyImage}
          />
        </div>

        <p className={styles.storyText}>{detail.story}</p>

        <div className={styles.storyImageWrap}>
          <img
            alt=""
            className={styles.storyImage}
            loading="eager"
            src={detail.detailImage ?? detail.cardImage}
          />
        </div>

        <div className={styles.bodySection}>
          <SectionLabel>Mål</SectionLabel>
          <p>{detail.objective}</p>
        </div>

        <div className={styles.bodySection}>
          <SectionLabel>Angreppssätt</SectionLabel>
          <p>{detail.approach}</p>
        </div>

        <div className={styles.results}>
          <SectionLabel>Resultat</SectionLabel>
          <div className={styles.resultList}>
            {detail.results.map((result) => (
              <article className={styles.resultItem} key={`${detail.slug}-${result.value}-${result.text}`}>
                <strong>{result.value}</strong>
                <p>{result.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <h2>{siteCopy.footerHeadline}</h2>
          <p>Skicka några rader om nuläge, verktyg och var arbetet fastnar. Vi återkommer med nästa steg.</p>
          <Link href={navHref.contact}>
            <span aria-hidden="true">✦</span>
            <span>{siteCopy.footerLink}</span>
          </Link>
        </div>
        <div className={styles.footerBottom}>
          <div>
            <h3>{siteCopy.footerBrand}</h3>
            <p>{siteCopy.footerTagline}</p>
          </div>
          <div>
            <h3>{siteCopy.pagesHeading}</h3>
            <nav>{navItems.map((item) => <Link href={item.href} key={item.label}>{item.label}</Link>)}</nav>
          </div>
          <div>
            <h3>{siteCopy.socialsHeading}</h3>
            <nav>{socialItems.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}</nav>
          </div>
        </div>
        <p className={styles.copyright}>© 2026 Moderna Sidor</p>
      </footer>
    </main>
  );
}
