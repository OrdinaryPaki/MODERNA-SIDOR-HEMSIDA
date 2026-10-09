# Moderna Sidor – webbprojekt

## SEO och publicering

Publik huvudadress: `https://modernasidor.se`. Sidornas titlar, beskrivningar och
kanoniska adresser samlas i `src/lib/seo.ts`. Startsidan, kontakt, integritetspolicy
och villkor ingår i sitemap. Övriga sidor är förhandsvisningar med `noindex`;
befintliga produktionsspärrar för `/about` och `/projects` gäller fortfarande.

Utvecklingsmiljö och Vercel-förhandsvisningar indexeras inte. För staging på andra
plattformar, sätt `SITE_NOINDEX=true` **före bygget**. Ta bort inställningen och
bygg om för den publika produktionssidan. Robots, sitemap och metadata är statiska.
Webbhotellet behöver peka den publika domänen hit och omdirigera eventuella
alternativa domäner till huvudadressen; det hanteras inte av denna lokala ändring.

Verifiera mot ett produktionsbygge utan webbläsare:

```bash
npm run build
npm run start -- --hostname 127.0.0.1 --port 3198
# I en annan terminal, med Node 22.6 eller senare:
SEO_TEST_URL=http://127.0.0.1:3198 node --test scripts/seo.test.mjs
```

Testerna kontrollerar metadata i HTTP-svaren, strukturerade uppgifter, sitemap,
bildlänkar, indexeringsregler och att tidigare avstängda sidor fortfarande ger 404.

Webbkopian ligger i en egen mapp och ett eget Git-repo. Originalprojektet i `MODERNA SIDOR HEMSIDA #1` används inte av denna app.

## Kör lokalt

```sh
npm ci
npm run dev
```

Öppna http://localhost:3000. Opus är standardprojektet på port 3000.

```sh
npm run typecheck
npm run lint
npm run build
```

För att köra produktionsbygget på samma port:

```sh
npm run start -- --hostname 127.0.0.1 --port 3000
```

Port 3000 måste vara ledig innan servern startas.

## Innehåll och funktioner

Projekt- och bloggsidor byggs från gemensamma sidmallar och lokala data. Bilder och typsnitt ligger lokalt. Meny, kort, dragspel, prisväxling och scrollanimationer används utan en databas eller serveranrop per besökare.

Kontaktformuläret kontrollerar inmatningen men skickar inget mejl. Det visar tydligt att mejlleverans inte är ansluten. Sociala knappar och etiketter publicerar inget och länkar inte till externa sociala medier.

Originalets sidfotsvideo gick inte att spela även på referenssidan. Den synliga svarta ytan återskapas. Små skillnader i bildrendering, scrollbar och vissa animationers fjädereffekt dokumenteras i granskningsrapporterna.

## Visuell granskning

Referens: https://opus-template.framer.website/

Rapporter, mätningar och interaktionstillstånd finns under `.visual-clone/reports/`. Referensbilder och granskningsbilder sparas på disk; vissa bevisbilder ingår även i Git.

Ingen publicering eller uppladdning görs av detta projekt. Belastning för 100 000 samtidiga besökare har inte testats; sidorna är förberedda för statisk leverans och kan senare publiceras med cache och CDN.

## Alla fyra webbplatser

Öppna http://localhost:3000/examples för att välja Moderna Sidor, Opus, Kreativy eller Nomen Studio. Varje kort öppnar hela den separata webbplatsen i samma flik; webbläsarens bakåtknapp återgår till översikten.

Vid lokal förhandsvisning behöver projekten köras på sina portar: Nomen Studio 3090, Opus 3000, Kreativy 3092 och Moderna Sidor 3093. Moderna Sidor startas med `npm run dev -- --hostname 127.0.0.1 --port 3093`; de tre andra använder `npm run dev` i respektive mapp.

Adresserna samlas i `src/data/examples.ts`. Inför publicering kan de ersättas med webbplatsernas riktiga adresser genom miljövariablerna `EXAMPLE_MODERNA_URL`, `EXAMPLE_OPUS_URL`, `EXAMPLE_KREATIVY_URL` och `EXAMPLE_NOMEN_URL`, som läses vid bygget.
