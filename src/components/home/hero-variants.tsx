"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { LogoHeroPreview } from "./logo-hero-preview";
import { StandardHero, standardHeroNames } from "./standard-hero";
import home from "./home.module.css";
import s from "./hero-variants.module.css";

const variants = ["Som loggan", "Mörkare flagga", "Mer luft", "Kompakt", "Utan flagga", "Sidans font", "Originalformen", ...standardHeroNames] as const;
const groups = [{ label: "Loggtester · 01–07", start: 0, end: 7 }, { label: "Valda upplägg · 08–12", start: 7, end: 12 }, { label: "Bara text · 13–22", start: 12, end: 22 }];

export function HeroVariants() {
  const [selected, setSelected] = useState(12);
  const choices = useRef<(HTMLButtonElement | null)[]>([]);

  function handleChoiceKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % variants.length;
    else if (event.key === "ArrowLeft") next = (index + variants.length - 1) % variants.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = variants.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    choices.current[next]?.focus();
  }

  return (
    <section id="hero" className={`${home.hero} ${s.hero}`}>
      <div className={s.chooser} lang="sv">
        <div className={s.chooserHeading}><p className={s.chooserTitle}>HERO-VARIANTER</p><p className={s.selectedName}>{String(selected + 1).padStart(2, "0")} / {variants[selected]}</p></div>
        <div className={s.optionGroups}>
          {groups.map((group) => <div className={s.optionGroup} key={group.start}>
            <p className={s.groupTitle}>{group.label}</p>
            <div className={s.choices} role="group" aria-label={group.label}>
              {variants.slice(group.start, group.end).map((name, offset) => {
                const index = group.start + offset;
                return <button key={name} title={name} ref={(element) => { choices.current[index] = element; }} type="button" aria-label={`${index < 7 ? "Loggvariant" : "Herovariant"} ${index + 1}: ${name}`} aria-pressed={selected === index} aria-controls="hero-brand" onClick={() => setSelected(index)} onKeyDown={(event) => handleChoiceKey(event, index)}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </button>;
              })}
            </div>
          </div>)}
        </div>
        <span className={s.hidden} role="status" aria-live="polite" aria-atomic="true">Variant {selected + 1} av {variants.length}: {variants[selected]}</span>
      </div>
      {selected < 7 ? <LogoHeroPreview key={selected} selected={selected} /> : <StandardHero key={selected} index={selected - 7} />}
    </section>
  );
}
