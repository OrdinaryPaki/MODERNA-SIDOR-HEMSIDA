import { BrandFlag } from "./hero-brand";
import s from "./home.module.css";
import brand from "./hero-variants.module.css";

function OriginalHeroWord({ word, width, className }: { word: string; width: number; className: string }) {
  return (
    <svg viewBox={`0 0 ${width} 192`} className={className} role="img" aria-label={word}>
      <foreignObject width={width} height="192">
        <div className={s.heroGlyph}>{word}</div>
      </foreignObject>
    </svg>
  );
}

export function OriginalHeroHeading() {
  return (
    <div id="hero-brand" lang="sv" className={`${s.heroHeading} ${brand.originalHeading}`}>
      <OriginalHeroWord word="Moderna" width={889.7} className={`${s.studio} ${brand.originalTop}`} />
      <div className={s.heroBottom}>
        <OriginalHeroWord word="Sidor" width={514.8} className={s.opus} />
        <div className={`${s.heroImage} ${brand.originalFlag}`}>
          <BrandFlag stretch crossWeight="light" className={brand.originalSymbol} />
        </div>
      </div>
    </div>
  );
}
