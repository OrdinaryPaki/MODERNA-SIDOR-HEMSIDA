import { StandardHeroesA } from "./standard-heroes-a";
import { StandardHeroesB } from "./standard-heroes-b";
import { HeroPreviewNav } from "./standard-hero-parts";
import { TextHeroExperiments, textHeroNames, textHeroThemes } from "./text-hero-experiments";
import s from "./standard-hero.module.css";

export const standardHeroNames = ["Centrerad med bild", "Stor bakgrundsbild", "Redaktionell med bild", "Ren typografi", "Mörk studio", ...textHeroNames] as const;

export function StandardHero({ index }: { index: number }) {
  const palette = index < 5 ? (index === 1 || index === 4 ? "dark" : "light") : textHeroThemes[index - 5];
  const theme = palette === "dark" ? s.dark : palette === "blue" ? s.blue : "";
  return <div id="hero-brand" lang="sv" className={`${s.preview} ${theme}`} data-standard-hero={index + 8} data-text-only={index >= 5 || index === 3}>
    <HeroPreviewNav />
    {index < 3 ? <StandardHeroesA index={index} /> : index < 5 ? <StandardHeroesB index={index - 3} /> : <TextHeroExperiments index={index - 5} />}
  </div>;
}
