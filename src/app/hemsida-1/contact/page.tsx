import type { Metadata } from "next";
import Image from "next/image";
import { FigmaPage } from "../_figma-pages/FigmaPage";
import { MobileNav } from "../MobileNav";
import { contactPage } from "../_figma-pages/pages";
import { navHref, navItems, socialItems } from "../navigation";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Kontakt | Moderna Sidor",
};

export default function ContactPage() {
  return (
    <>
      <div className={styles.desktopOnly}>
        <FigmaPage data={contactPage} />
      </div>
      <ContactResponsive />
    </>
  );
}

function ContactResponsive() {
  return (
    <main className={styles.responsive}>
      <section className={styles.hero}>
        <Image src="/figma/hemsida-1/pages/contact-hero-bg.png" alt="" fill priority unoptimized className={styles.heroImage} />
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
        <div className={styles.heroCopy}>
          <h1>Berätta var arbetsflödet fastnar</h1>
          <p>Vi hjälper er se vad som bör samlas, kopplas ihop och byggas vidare i ett digitalt system.</p>
        </div>
        <form className={styles.form}>
          <label>Namn<input placeholder="Ditt namn" /></label>
          <label>E-post<input placeholder="namn@bolag.se" /></label>
          <label>Behov<select defaultValue=""><option value="" disabled>Välj område...</option><option>System</option><option>AI-stöd</option><option>Integrationer</option></select></label>
          <button type="button">Skicka</button>
        </form>
      </section>

      <section className={styles.offices}>
        <div className={styles.label}><span />Kontakt</div>
        <Office
          title="Office 1"
          image="/figma/hemsida-1/pages/contact-office-1.png"
        />
        <Office
          title="Office 2"
          image="/figma/hemsida-1/pages/contact-office-2.png"
        />
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <h2>Låt oss bygga ett system runt ert arbetssätt</h2>
          <p>Skicka några rader om nuläge, verktyg och var arbetet fastnar. Vi återkommer med nästa steg.</p>
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

function Office({ title, image }: { title: string; image: string }) {
  return (
    <article className={styles.office}>
      <div>
        <p>{title}</p>
        <h2>Boka ett första samtal</h2>
        <span>Vi går igenom nuläge, ansvar och flaskhalsar.</span>
        <span>Svar inom 1-2 arbetsdagar</span>
        <span>business@modernasidor.se</span>
      </div>
      <div className={styles.officeImage}>
        <Image src={image} alt="" fill loading="eager" unoptimized />
      </div>
    </article>
  );
}
