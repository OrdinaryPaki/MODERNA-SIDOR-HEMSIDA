# Branding – baserad på Nori-referensen

> Källa: https://nori-template.framer.website/ (Framer-mall "Nori")
> Hämtad: 2026-06-11. Alla råfiler ligger i `branding/reference/`.
>
> **OBS licens:** Bilderna/videon i `reference/` tillhör mallens skapare och är
> nedladdade som designreferens. Använd egna eller licensierade media i produktion.
> Typsnitt och färgvärden är fria att använda.

---

## 1. Typografi

| Roll | Typsnitt | Användning |
| --- | --- | --- |
| Display / Hero-rubrik | **Switzer** | Gigantisk rubrik: vikt 500, letter-spacing **−0.06em**, line-height **0.9**, färg `#f8f8f8` (verifierat ur sidans inline-CSS) |
| Brödtext | **Geist** | Vikt 400–500, ca 16–18 px, generös radhöjd |
| Mikroetiketter | **Geist Mono** | Små versala etiketter ("SINCE 2019"), vikt 400, letter-spacing, ofta halvtransparenta |
| Sekundär | Inter | Fallback/enstaka UI-element |

- **Switzer**: gratis även kommersiellt (Fontshare/ITF). Self-hostad i projektet: `src/fonts/Switzer-*.woff2` via `next/font/local` → `--font-switzer`
- **Geist + Geist Mono**: Google Fonts via `next/font/google`

### Typografiska principer
- Hero-rubriken är **gigantisk** – fyller nästan hela viewport-bredden (`clamp`-skalad, ~12–15vw)
- Vit text på blå bakgrund i heron; mörk text (`#061218`) på ljusa sektioner
- Mono-etiketter i versaler skapar teknisk/precis känsla

## 2. Färgpalett

### Primära färger
| Färg | Hex | Roll |
| --- | --- | --- |
| Klarblå | `#0099ff` | Primär accent, länkar, highlights (vanligaste färgen på sidan) |
| Mellanblå | `#2280c2` | Sekundär blå, hero-bakgrundston |
| Blå (mörkare) | `#1f75b2` | Hover/djup på blå ytor |
| Djupblå | `#1b679d` | Mörkaste blå nyansen |

### Neutraler
| Färg | Hex | Roll |
| --- | --- | --- |
| Nästan svart | `#061218` | Primär text, mörka sektioner (blåtonad svart) |
| Grå | `#7d8487` | Sekundär text, dämpade etiketter |
| Ljusgrå-blå | `#f0f5f9` | Ljus bakgrund för sektioner |
| Ljusgrå | `#f7f7f7` | Alternativ ljus yta |
| Vit | `#ffffff` | Text på blått, kort, knappar |

### Transparenta varianter (från design-tokens)
- `#0612181f` – nästan svart @ 12 % (subtila kantlinjer/skuggor)
- `#f0f5f91f` – ljusgrå-blå @ 12 % (linjer på mörk/blå yta)
- `#141414e6` – mörk overlay @ 90 %

## 3. Hero-kompositionen (referens: skärmdump)

- **Bakgrund:** INTE video! Lagerstruktur (verifierad ur sidans HTML):
  1. Statisk basbild + brus (`Image+Noise`-lagret)
  2. **`<canvas>` med WebGL-shader** – den böljande blå silkesanimationen renderas i realtid
  3. Statisk fallback-bild som visas om canvas inte kan rendera
  - Vår motsvarighet: egen shader i `src/components/HeroCanvas.tsx` (fbm-brus, blå palett, ljusband) + CSS-filmkorn (`.grain`)
  - Mp4:n i `reference/videos/` var bara en inspelning/asset på annan del av sidan
- **Toppstång:** liten logotyp uppe till vänster (`Nori®`), hamburgermeny uppe till höger
- **Rubrik:** företagsnamnet i gigantisk vit Geist över hela bredden
- **Under rubriken:** mono-etikett ("Since 2019") i halvtransparent vitt
- **Nedre vänster:** kort beskrivande paragraf, vit, max ~3 rader
- **Nedre höger:** stjärnbetyg + nyckeltal + CTA-knapp (vit knapp, blå text)
- Allt innehåll trycks mot kanterna – mitten lämnas luftig

## 4. Övriga designprinciper

- Stora luftiga sektioner, mycket whitespace
- Rundade hörn på kort och knappar (pill-formade CTA:er)
- Subtila kantlinjer i 12 %-transparens istället för skuggor
- Mjuka fade/slide-animationer vid inladdning och scroll

## 5. Nedladdade assets

```
branding/reference/
├── nori.html            – sidans fulla HTML
├── image-urls.txt       – alla 29 bild-URL:er
├── video-urls.txt       – video-URL
├── images/              – 29 bilder (png/jpg/svg: logotyper, portfolio, ikoner)
└── videos/              – hero-bakgrundsvideon (mp4, 8 MB)
```
