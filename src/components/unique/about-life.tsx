import { aboutCopy, values } from "@/data/unique-about";
import { Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "./section-label";
import { CharacterReveal } from "./character-reveal";
import styles from "./about.module.css";

export function AboutLife() {
  return <>
    <section className={styles.life} data-section="about-life"><Reveal className={styles.lifeIntro}><div><SectionLabel>Life at Opus</SectionLabel></div><div><h2>{aboutCopy.lifeTitle}</h2><p>{aboutCopy.lifeIntro}</p></div></Reveal><Reveal className={styles.lifeImages}><div><img src="/assets/unique/gcjnEQqzaMY5cKIy50PWeJbOc.jpg" alt="A woman walking on a mountain trail" loading="lazy" /><p>{aboutCopy.life}</p></div><img src="/assets/unique/UqrOvJoNbdvgZCZb761uzhZhMns.jpg" alt="A smiling woman throwing a basketball" loading="lazy" /></Reveal></section>
    <section className={styles.values} data-section="about-values"><div><SectionLabel>Our values</SectionLabel></div><div>{values.map((value, index) => <Reveal key={value.title} delay={index * .08} className={styles.value}><h2>{value.title}</h2><p>{value.description}</p></Reveal>)}</div></section>
    <section className={styles.motto} data-section="about-motto"><CharacterReveal text={aboutCopy.motto} /></section>
  </>;
}
