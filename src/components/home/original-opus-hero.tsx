import home from "./home.module.css";
import s from "./original-opus-hero.module.css";

function HeroWord({ word, width, className }: { word: string; width: number; className: string }) {
  return (
    <svg viewBox={`0 0 ${width} 192`} className={className} role="img" aria-label={word}>
      <foreignObject width={width} height="192">
        <div className={home.heroGlyph}>{word}</div>
      </foreignObject>
    </svg>
  );
}

export function OriginalOpusHero() {
  return (
    <section id="hero" className={`${home.hero} ${s.hero}`} aria-label="Moderna Sidor">
      <div className={home.heroHeading}>
        <HeroWord word="MODERNA" width={1109.6} className={home.studio} />
        <div className={home.heroBottom}>
          <HeroWord word="SIDOR" width={657.4} className={home.opus} />
          <div className={`${home.heroImage} ${s.flag}`} role="img" aria-label="Moderna Sidors blåvita korssymbol" />
        </div>
      </div>
    </section>
  );
}
