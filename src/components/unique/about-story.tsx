import { aboutCopy, approach } from "@/data/unique-about";
import { Reveal } from "@/components/shared/reveal";
import { SectionLabel } from "./section-label";
import styles from "./about.module.css";

export function AboutStory() {
  return <>
    <section className={styles.story} data-section="about-story">
      <Reveal className={styles.storyIntro}><h2>{aboutCopy.storyTitle}</h2><p>{aboutCopy.story}</p></Reveal>
      <div className={styles.quoteRow}><Reveal className={styles.quoteMark}><img src="/assets/unique/quote.svg" alt="" /></Reveal><Reveal className={styles.quote}>
        <h2>{aboutCopy.quote}</h2><div className={styles.author}><img src="/assets/unique/iXkDDkhg3KtlXLRlD6FyEgn7ZjI.png" alt="Markus Chen" /><div><p>Markus Chen</p><p>CEO &amp; Co-founder</p></div></div>
      </Reveal></div>
    </section>
    <section className={styles.approach} data-section="about-approach"><SectionLabel>Our approach</SectionLabel><div className={styles.approachGrid}>{approach.map((item, index) => <Reveal className={styles.approachCard} delay={index * .08} key={item.title}><h2>{String(index + 1).padStart(2, "0")}</h2><h3>{item.title}</h3><p>{item.description}</p></Reveal>)}</div></section>
  </>;
}
