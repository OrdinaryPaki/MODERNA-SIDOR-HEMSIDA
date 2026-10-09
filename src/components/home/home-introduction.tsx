import { Reveal } from "@/components/shared/reveal";
import home from "./home.module.css";
import s from "./home-introduction.module.css";

export function HomeIntroduction() {
  return (
    <section id="studio-introduction" className={s.section} aria-label="Om Moderna Sidor">
      <Reveal delay={0.35}>
        <div className={`${home.heroRule} ${s.rule}`} />
        <div className={`${home.heroDescription} ${s.description}`}>
          <h2>På Moderna Sidor moderniserar vi komplexa verksamheter och skapar utrymme att skala.</h2>
        </div>
      </Reveal>
    </section>
  );
}
