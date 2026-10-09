import {
  HeroActions,
  HeroCopy,
  HeroPhoto,
  HeroTitle,
} from "./standard-hero-parts";
import s from "./standard-heroes-b.module.css";

function TypographyHero() {
  return (
    <div className={`${s.body} ${s.typography}`}>
      <HeroTitle className={s.statement} />
      <div className={s.rule} />
      <div className={s.typographyFooter}>
        <HeroCopy className={s.copy} />
        <HeroActions className={s.actions} />
      </div>
    </div>
  );
}

function DarkSplitHero() {
  return (
    <div className={`${s.body} ${s.darkSplit}`}>
      <div className={s.text}>
        <span className={s.accentLine} aria-hidden="true" />
        <HeroTitle className={s.title} />
        <HeroCopy className={s.copy} />
        <HeroActions className={s.actions} />
      </div>
      <HeroPhoto className={s.darkPhoto} alt="Modern arkitektur vid den svenska kusten" />
    </div>
  );
}

const bodies = [TypographyHero, DarkSplitHero];

export function StandardHeroesB({ index }: { index: number }) {
  const Body = bodies[index] ?? TypographyHero;
  return <Body />;
}
