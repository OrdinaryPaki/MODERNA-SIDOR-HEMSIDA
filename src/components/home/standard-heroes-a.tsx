import { HeroActions, HeroCopy, HeroPhoto, HeroTitle } from "./standard-hero-parts";
import s from "./standard-heroes-a.module.css";

function CenteredHero() {
  return (
    <div className={`${s.hero} ${s.centered}`}>
      <div className={s.centeredContent}>
        <HeroTitle className={s.heading} />
        <HeroCopy className={s.copy} />
        <HeroActions className={s.centeredActions} />
      </div>
      <HeroPhoto className={s.panorama} />
    </div>
  );
}

function BackgroundHero() {
  return (
    <div className={`${s.hero} ${s.background}`}>
      <HeroPhoto className={s.backgroundPhoto} />
      <div className={s.backgroundContent}>
        <HeroTitle className={s.heading} />
        <HeroCopy className={s.copy} />
        <HeroActions />
      </div>
    </div>
  );
}

function EditorialHero() {
  return (
    <div className={`${s.hero} ${s.editorial}`}>
      <div className={s.editorialTop}>
        <HeroTitle className={s.heading} />
        <div className={s.editorialAside}>
          <HeroCopy className={s.copy} />
          <HeroActions />
        </div>
      </div>
      <HeroPhoto className={s.editorialPhoto} />
    </div>
  );
}

const heroes = [CenteredHero, BackgroundHero, EditorialHero];

export function StandardHeroesA({ index }: { index: number }) {
  const Hero = heroes[index] ?? CenteredHero;
  return <Hero />;
}
