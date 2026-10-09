import { ReferenceParallax } from "./reference-parallax";
import { OriginalHeroHeading } from "./original-hero-heading";
import { BrandFlag, BrandNameRow, flagMaskImage } from "./hero-brand";
import home from "./home.module.css";
import s from "./hero-variants.module.css";

export function LogoHeroPreview({ selected }: { selected: number }) {
  const swedishFlag = selected === 1;
  const showPhoto = selected !== 0 && selected !== 2 && selected !== 5;
  return <>
    <h1 className={s.hidden} lang="sv">Moderna Sidor</h1>
    {selected === 6 ? <OriginalHeroHeading /> : <div id="hero-brand" lang="sv" className={`${home.heroHeading} ${s.heading} ${s[`variant${selected}`]}`}>
      <BrandNameRow row="moderna" className={`${home.studio} ${s.nameTop}`} />
      <div className={`${home.heroBottom} ${s.bottom}`}>
        <BrandNameRow row="sidor" className={home.opus} />
        <div className={`${home.heroImage} ${s.flagArea}`} style={{ maskImage: swedishFlag ? "none" : flagMaskImage }}>
          {showPhoto && <ReferenceParallax src="/assets/home/hero.png" kind="hero" className={s.flagPhoto} />}
          <BrandFlag className={`${s.flag} ${swedishFlag ? s.swedishFlag : ""}`} swedish={swedishFlag} dark={selected === 1} />
        </div>
      </div>
    </div>}
  </>;
}
