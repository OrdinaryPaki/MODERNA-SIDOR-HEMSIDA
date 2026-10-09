import { Button } from "@/components/shared/button";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.page} aria-labelledby="not-found-heading">
      <div className={styles.content}>
        <p className={styles.code} aria-label="Fel 404">404<span aria-hidden="true">.</span></p>
        <div className={styles.message}>
          <div className={styles.copy}>
            <h1 id="not-found-heading">Den här sidan finns inte.</h1>
            <p>Du kan ha följt en gammal länk eller skrivit fel adress.
              Vi hjälper dig tillbaka.</p>
          </div>
          <Button href="/" variant="solid" className={styles.homeLink}>
            Till startsidan <span aria-hidden="true">↗</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
