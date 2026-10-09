import styles from "./home-hero.module.css";

export function HomeHero() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title" lang="sv">
      <h1 id="hero-title" className={styles.title} data-reveal>
        <span className={styles.line}>Utveckling för verksamheter</span>
        <span className={styles.line}> med höga operativa krav.</span>
      </h1>
    </section>
  );
}
