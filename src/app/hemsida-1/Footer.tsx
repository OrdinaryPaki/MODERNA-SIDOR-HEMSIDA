import Link from "next/link";
import { navHref, navItems, siteCopy, socialItems } from "./navigation";
import styles from "./footer.module.css";

/** Home-only footer. */
export function HomeFooter() {
  return (
    <>
      <section className={styles.footerCtaSection}>
        <div className={styles.footerCta}>
          <div className={styles.footerCtaCopy}>
            <h2>{siteCopy.homeFooterHeadline}</h2>
            <p>{siteCopy.homeFooterBody}</p>
          </div>
          <Link className={styles.footerContactLink} href={navHref.contact}>
            <span aria-hidden="true">✦</span>
            <span>{siteCopy.homeFooterLink}</span>
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBottom}>
          <div className={styles.footerBrand}>
            <h2>{siteCopy.footerBrand}</h2>
            <p>{siteCopy.homeFooterTagline}</p>
          </div>
          <div className={styles.footerColumns}>
            <div>
              <h3>{siteCopy.pagesHeading}</h3>
              <nav>
                {navItems.map((item) => (
                  <Link href={item.href} key={item.label}>
                    {item.label}
                  </Link>
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
    </>
  );
}
