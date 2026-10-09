import { aboutCopy } from "@/data/unique-about";
import { Reveal } from "@/components/shared/reveal";
import styles from "./about.module.css";

export function AboutHero() {
  return <section className={styles.hero} data-section="about-hero">
    <Reveal className={styles.entrance}><h1 className={styles.heroTitle}>{aboutCopy.title}</h1></Reveal>
    <Reveal className={`${styles.heroImages} ${styles.entrance}`} delay={.1}>
      <div className={styles.firstPhoto}><img src="/assets/unique/Ul58HKMh7mFbnqTKff8l8MJKlU.jpg" alt="Two women laughing at work" fetchPriority="high" /></div>
      <div className={styles.heroRight}><p>{aboutCopy.intro}</p><div className={styles.secondPhoto}><img src="/assets/unique/PckkgmBDNjyCUptpWoSRPOzDW1c.jpg" alt="A woman smiling sitting in the office" /></div></div>
    </Reveal>
  </section>;
}
