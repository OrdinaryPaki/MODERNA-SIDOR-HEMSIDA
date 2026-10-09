import { HeroActions, HeroCopy, HeroTitle } from "./standard-hero-parts";
import s from "./text-hero-experiments.module.css";

export const textHeroNames = [
  "Öppen mittpunkt",
  "Stor vänster",
  "Serifredaktion",
  "Typografiskt rutnät",
  "Svart affisch",
  "Blått budskap",
  "Liten och stilla",
  "Tre stora rader",
  "Kontur och tryck",
  "Magasinsuppslag",
] as const;

export const textHeroThemes = [
  "light", "light", "light", "light", "dark",
  "blue", "light", "light", "light", "light",
] as const;

const layouts = [
  s.centered,
  s.display,
  s.editorial,
  s.monospace,
  s.poster,
  s.statement,
  s.minimal,
  s.fragments,
  s.outline,
  s.magazine,
] as const;

export function TextHeroExperiments({ index }: { index: number }) {
  const variant = layouts[index] ? index : 0;

  return (
    <div className={`${s.root} ${layouts[variant]}`} data-text-hero={variant + 1}>
      <HeroTitle className={s.title} emphasizeOpening={variant === 8} />
      <div className={s.support}>
        <HeroCopy className={s.copy} />
        <HeroActions className={s.actions} />
      </div>
    </div>
  );
}
