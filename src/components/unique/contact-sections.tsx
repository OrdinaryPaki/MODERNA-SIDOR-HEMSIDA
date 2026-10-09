import { trustReasons, contactFaq, contactEmail } from "@/data/unique-contact";
import { Accordion } from "@/components/shared/accordion";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/shared/button";
import { SectionLabel } from "./section-label";
import { ContactForm } from "./contact-form";
import styles from "./contact.module.css";

export function ContactSections() {
  return (
    <div className={styles.route} lang="sv">
      <section className={styles.contact} data-section="contact-hero">
        <Reveal className={styles.entrance}>
          <h1 className={styles.title}>Kontakta oss</h1>
        </Reveal>
        <Reveal className={`${styles.contactGrid} ${styles.entrance}`} delay={0.1}>
          <div className={styles.details}>
            <div>
              <p>E-post</p>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </div>
          </div>
          <div className={styles.formColumn}>
            <h2>Vad vill ni utveckla i er verksamhet?</h2>
            <p className={styles.contactIntro}>
              Vi tar ett första samtal om era mål, befintliga system och vad som
              krävs för att komma vidare.
            </p>
            <ContactForm />
          </div>
        </Reveal>
      </section>

      <section className={styles.trust} data-section="contact-trust">
        <Reveal><h2>Ett samarbete med tydliga förutsättningar</h2></Reveal>
        <div className={styles.trustGrid}>
          {trustReasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.06}>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.faq} data-section="contact-faq">
        <Reveal className={styles.faqIntro}>
          <SectionLabel>Inför ett samarbete</SectionLabel>
          <h2>Vanliga frågor</h2>
          <p>Om uppdrag, arbetssätt och hur vi tar nästa steg tillsammans.</p>
          <Button href={`mailto:${contactEmail}`} variant="text">Mejla oss</Button>
        </Reveal>
        <Reveal className={styles.questions}>
          <Accordion items={contactFaq} multiple={false} className={styles.accordion} />
        </Reveal>
      </section>
    </div>
  );
}
