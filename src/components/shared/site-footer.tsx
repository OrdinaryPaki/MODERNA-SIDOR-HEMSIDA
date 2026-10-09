import footerLogo from "../../../public/brand/moderna-sidor-navigation-inter.png";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { Reveal } from "./reveal";
import { FooterLogoFilter } from "./navigation-logo-filter";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return <footer className={styles.footer}>
    <FooterLogoFilter />
    <section className={styles.cta} data-section="footer-cta">
      <Reveal className={styles.ctaContent}>
        <h2>Vi hjälper er<br />tänka större.</h2>
        <p>
          <span className={styles.ctaLine}>Samtala med en av våra rådgivare</span>{" "}
          <span className={styles.ctaLine}>för att ta första steget</span>{" "}
          <span className={styles.ctaLine}>i rätt riktning.</span>
        </p>
        <Button href="/contact" variant="white">Boka ett samtal</Button>
      </Reveal>
    </section>
    <section className={styles.details} data-section="footer">
      <div className={styles.top}><div className={styles.description}>
        <h2 className={styles.brandLogo}>
          <Image
            src={footerLogo}
            alt="Moderna Sidor"
            width={1774}
            height={887}
            sizes="(max-width: 809px) 150vw, 627px"
          />
        </h2>
        <p>Vår ambition är att modernisera hur svenska företag arbetar. Genom nära och långsiktiga samarbeten lär vi känna er verksamhet och utvecklar lösningar som växer med den.</p></div><div className={styles.email}><p>Ni kan också mejla oss på:</p><a href="mailto:business@modernasidor.se">business@modernasidor.se</a></div></div>
      <div className={styles.links}><nav aria-label="Sidfotsmeny"><Link href="/">Start</Link><Link href="/contact">Kontakt</Link></nav></div>
      <div className={styles.bottom}><p>© 2026 Moderna Sidor. Alla rättigheter förbehållna.</p><div><Link href="/privacy">Integritetspolicy</Link><Link href="/terms">Allmänna villkor</Link></div></div>
    </section>
  </footer>;
}
