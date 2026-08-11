import type { Metadata } from "next";
import Image from "next/image";
import { FigmaPage } from "../_figma-pages/FigmaPage";
import { MobileNav } from "../MobileNav";
import { contactPage } from "../_figma-pages/pages";
import { navHref, navItems, siteCopy } from "../navigation";
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
          title="Samtal"
          heading="Boka ett första samtal"
          lines={[
            "Vi går igenom nuläge, ansvar och flaskhalsar.",
            "Svar inom 1-2 arbetsdagar",
            "business@modernasidor.se",
          ]}
          image="/figma/hemsida-1/pages/contact-office-1.png"
        />
        <Office
          title="Underlag"
          heading="Har ni redan ett system?"
          lines={[
            "Vi hittar vad som ska förenklas och kopplas ihop.",
            "Skicka process, export eller exempel",
            "business@modernasidor.se",
          ]}
          image="/figma/hemsida-1/pages/contact-office-2.png"
        />
      </section>

    </main>
  );
}

function Office({
  title,
  heading,
  lines,
  image,
}: {
  title: string;
  heading: string;
  lines: [string, string, string];
  image: string;
}) {
  return (
    <article className={styles.office}>
      <div>
        <p>{title}</p>
        <h2>{heading}</h2>
        {lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
      <div className={styles.officeImage}>
        <Image src={image} alt="" fill loading="eager" unoptimized />
      </div>
    </article>
  );
}
