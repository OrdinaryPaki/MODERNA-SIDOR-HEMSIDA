import type { FigmaPageData } from "./FigmaPage";
import { commonFooter } from "./FigmaPage";

const projectCards = [
  ["Glasklart", "Ett operativt CRM för kunder, arbetsordrar, schema och fakturor.", "/figma/hemsida-1/casper-ai.png"],
  ["Balko.ai", "AI-stöd för beräkning, material, offerter och fakturaunderlag.", "/figma/hemsida-1/tune-ai.png"],
  ["Visionsfastigheter", "Ett internt system för kontakter, lokalbehov och uppföljning.", "/figma/hemsida-1/ring-models.png"],
] as const;

const footerContact = commonFooter(1985);
const footerCareers = commonFooter(3175);
const footerSolutions = commonFooter(4633);
const footerLuna = commonFooter(5666);
const footerAbout = commonFooter(8839);

export const contactPage: FigmaPageData = {
  height: 2892,
  boxes: [
    { x: 796, y: 241, w: 560, h: 413, color: "#ffffff", radius: 16, foreground: true },
    { x: 856, y: 326, w: 440, h: 40, color: "rgba(187,187,187,0.15)", radius: 10, foreground: true },
    { x: 856, y: 411, w: 440, h: 40, color: "rgba(187,187,187,0.15)", radius: 10, foreground: true },
    { x: 856, y: 495, w: 440, h: 40, color: "rgba(187,187,187,0.15)", radius: 10, foreground: true },
    { x: 856, y: 555, w: 440, h: 40, color: "#333333", radius: 10, foreground: true },
    { x: 0, y: 856, w: 1512, h: 1128, color: "#f9f9f9", wide: true },
    ...footerContact.boxes,
  ],
  images: [
    { src: "/figma/hemsida-1/pages/contact-hero.png", x: 0, y: 0, w: 1512, h: 856, priority: true },
    { src: "/figma/hemsida-1/pages/contact-office-1.png", x: 784, y: 1062, w: 664, h: 377 },
    { src: "/figma/hemsida-1/pages/contact-office-2.png", x: 784, y: 1487, w: 664, h: 377 },
  ],
  texts: [
    { text: "Har ni ett arbetsflöde som borde vara ett system?", x: 156, y: 242, w: 560, h: 282, size: 64, line: 70.4, tracking: -1.92, color: "#ffffff", weight: 600 },
    { text: "Skicka en kort beskrivning av hur ni jobbar idag. Vi hjälper er avgöra vad som ska byggas, vad som kan automatiseras och vad som borde lämnas enkelt.", x: 156, y: 540, w: 560, h: 154, size: 24, line: 38.4, tracking: -0.48, color: "#ffffff" },
    { text: "Namn", x: 856, y: 301, w: 80, h: 15, size: 12, line: 14.4, family: "inter", weight: 500 },
    { text: "Ditt namn", x: 868, y: 338, w: 416, h: 17, size: 14, line: 17, family: "inter", weight: 400, color: "#999999" },
    { text: "E-post", x: 856, y: 386, w: 80, h: 15, size: 12, line: 14.4, family: "inter", weight: 500 },
    { text: "namn@foretag.se", x: 868, y: 422, w: 416, h: 17, size: 14, line: 17, family: "inter", weight: 400, color: "#999999" },
    { text: "Behov", x: 856, y: 470, w: 80, h: 15, size: 12, line: 14.4, family: "inter", weight: 500 },
    { text: "Kort om projektet", x: 868, y: 506, w: 416, h: 17, size: 14, line: 17, family: "inter", weight: 400, color: "#999999" },
    { text: "Skicka", x: 1052, y: 566, w: 48, h: 17, size: 14, line: 16.8, family: "inter", weight: 600, color: "#ffffff" },
    { text: "Kontakt", x: 99, y: 976, w: 174, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Digital studio", x: 64, y: 1062, w: 180, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Moderna Sidor", x: 64, y: 1109, w: 321, h: 58, size: 36, line: 57.6, tracking: -0.72 },
    { text: "Strategi, design och utveckling", x: 64, y: 1175, w: 346, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "CRM, AI och interna verktyg", x: 64, y: 1222, w: 434, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "kontakt@modernasidor.se", x: 64, y: 1269, w: 330, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Arbetssätt", x: 64, y: 1487, w: 160, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Från idé till system", x: 64, y: 1534, w: 321, h: 58, size: 36, line: 57.6, tracking: -0.72 },
    { text: "Discovery, design och utveckling", x: 64, y: 1600, w: 390, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Byggt för verkliga arbetsflöden", x: 64, y: 1647, w: 434, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Snabb kontakt och tydliga steg", x: 64, y: 1694, w: 380, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    ...footerContact.texts,
  ],
  links: footerContact.links,
};

export const careersPage: FigmaPageData = {
  height: 4082,
  boxes: [
    { x: 0, y: 574, w: 1512, h: 704, color: "#f9f9f9", wide: true },
    { x: 0, y: 1277, w: 1512, h: 805, color: "#f9f9f9", wide: true },
    { x: 0, y: 2082, w: 1512, h: 1092, color: "#ffffff", wide: true },
    { x: 64, y: 2304, w: 692, h: 646, color: "#f9f9f9" },
    ...footerCareers.boxes,
  ],
  images: [
    { src: "/figma/hemsida-1/pages/careers-hero.png", x: 0, y: 0, w: 1512, h: 574, priority: true },
    { src: "/figma/hemsida-1/pages/careers-wide.png", x: 0, y: 574, w: 1512, h: 704 },
    { src: "/figma/hemsida-1/pages/careers-review.png", x: 736, y: 2304, w: 732, h: 647 },
  ],
  texts: [
    { text: "Så bygger vi system som faktiskt används", x: 64, y: 363, w: 760, h: 141, size: 64, line: 70.4, tracking: -1.92, weight: 600 },
    { text: "Vårt arbetssätt", x: 99, y: 1397, w: 287, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "1. Kartlägg arbetsflödet", x: 687, y: 1447, w: 378, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Workshop", x: 687, y: 1502, w: 100, h: 24, size: 20, line: 24, tracking: -0.4, family: "inter", weight: 400 },
    { text: "Starta", x: 1394, y: 1447, w: 54, h: 28, size: 20, line: 28, family: "inter", weight: 400 },
    { text: "2. Rita rätt vyer", x: 687, y: 1593, w: 370, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Design", x: 687, y: 1648, w: 80, h: 24, size: 20, line: 24, tracking: -0.4, family: "inter", weight: 400 },
    { text: "Se mer", x: 1394, y: 1593, w: 64, h: 28, size: 20, line: 28, family: "inter", weight: 400 },
    { text: "3. Bygg produktkärnan", x: 687, y: 1738, w: 298, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Utveckling", x: 687, y: 1793, w: 100, h: 24, size: 20, line: 24, tracking: -0.4, family: "inter", weight: 400 },
    { text: "Se mer", x: 1394, y: 1738, w: 64, h: 28, size: 20, line: 28, family: "inter", weight: 400 },
    { text: "4. Lansera och förbättra", x: 687, y: 1884, w: 434, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Förvaltning", x: 687, y: 1939, w: 110, h: 24, size: 20, line: 24, tracking: -0.4, family: "inter", weight: 400 },
    { text: "Se mer", x: 1394, y: 1884, w: 64, h: 28, size: 20, line: 28, family: "inter", weight: 400 },
    { text: "Samarbetet", x: 99, y: 2202, w: 153, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Vi börjar nära vardagen: vilka roller finns, vilka beslut tas och var fastnar arbetet? Därifrån bygger vi ett system som kan användas direkt och växa med verksamheten.", x: 104, y: 2344, w: 612, h: 519, size: 36, line: 57.6, tracking: -0.72 },
    { text: "Moderna Sidor", x: 104, y: 2911, w: 180, h: 31, size: 22, line: 30.8, weight: 600 },
    { text: "Produkt och utveckling", x: 104, y: 2944, w: 243, h: 24, size: 20, line: 24, tracking: -0.4, family: "inter", weight: 400 },
    ...footerCareers.texts,
  ],
  links: footerCareers.links,
};

export const solutionsPage: FigmaPageData = {
  height: 5541,
  boxes: [
    { x: 0, y: 856, w: 1512, h: 2645, color: "#f9f9f9", wide: true },
    { x: 0, y: 3501, w: 1512, h: 1132, color: "#ffffff", wide: true },
    ...footerSolutions.boxes,
  ],
  images: [
    { src: "/figma/hemsida-1/pages/solutions-hero.png", x: 0, y: 0, w: 1512, h: 856, priority: true },
    ...projectCards.flatMap((card, index) => {
      const xs = [64, 539, 1013];
      const ys = [1158, 2005, 2852];
      return [0, 1, 2].map((row) => ({ src: card[2], x: xs[index], y: ys[row], w: 435, h: 355 }));
    }),
    { src: "/figma/hemsida-1/pages/solutions-team.png", x: 64, y: 3805, w: 1384, h: 707 },
  ],
  texts: [
    { text: "Case och system byggda runt verkliga behov", x: 64, y: 595, w: 817, h: 141, size: 64, line: 70.4, tracking: -1.92, color: "#ffffff", weight: 600 },
    { text: "Operativa system", x: 64, y: 976, w: 526, h: 135, size: 48, line: 67.2, tracking: -0.96 },
    { text: "AI och automation", x: 64, y: 1890, w: 500, h: 68, size: 48, line: 67.2, tracking: -0.96 },
    { text: "Produktgrund", x: 64, y: 2736, w: 360, h: 68, size: 48, line: 67.2, tracking: -0.96 },
    ...[1158, 2005, 2852].flatMap((baseY, row) =>
      projectCards.map((card, index) => ({
        text: row === 0 ? card[0] : row === 1 ? ["Offertflöden", "AI-beräkningar", "Intern kontroll"][index] : ["Fastighetssystem", "Datavyer", "Produktgrund"][index],
        x: [64, 539, 1013][index],
        y: baseY + 387,
        w: 435,
        h: 58,
        size: 36,
        line: 57.6,
        tracking: -0.72,
        family: "inter" as const,
        weight: 400 as const,
      }))
    ),
    ...[1158, 2005, 2852].flatMap((baseY, row) =>
      projectCards.map((card, index) => ({
        text:
          row === 0
            ? card[1]
            : row === 1
              ? [
                  "Från återkommande manuella steg till flöden som körs rätt från början.",
                  "Beräkningar och beslutsstöd där teamet behöver snabbare underlag.",
                  "Kontroll över status, ansvar och nästa steg i interna processer.",
                ][index]
              : [
                  "Strukturerade vyer för objekt, kontakter och uppföljning.",
                  "Datamodeller som gör det lättare att hitta, jämföra och agera.",
                  "En teknisk grund som går att bygga vidare på utan att låsa fast er.",
                ][index],
        x: [64, 539, 1013][index],
        y: baseY + 461,
        w: 435,
        h: 48,
        size: 20,
        line: 24,
        tracking: -0.4,
        family: "inter" as const,
        weight: 400 as const,
      }))
    ),
    ...footerSolutions.texts,
  ],
  links: footerSolutions.links,
};

export const lunaPage: FigmaPageData = {
  height: 6575,
  boxes: [
    { x: 0, y: 856, w: 1512, h: 470, color: "#ffffff", wide: true },
    { x: 0, y: 1326, w: 1512, h: 586, color: "#ffffff", wide: true },
    { x: 0, y: 1912, w: 1512, h: 704, color: "#f9f9f9", wide: true },
    { x: 0, y: 3963, w: 1512, h: 1703, color: "#ffffff", wide: true },
    ...footerLuna.boxes,
  ],
  images: [
    { src: "/figma/hemsida-1/pages/solutions-hero.png", x: 0, y: 0, w: 1512, h: 856, priority: true },
    { src: "/figma/hemsida-1/pages/luna-wide.png", x: 0, y: 3259, w: 1512, h: 704 },
  ],
  texts: [
    { text: "Balko.ai", x: 64, y: 595, w: 817, h: 141, size: 64, line: 70.4, tracking: -1.92, color: "#ffffff", weight: 600 },
    { text: "Om projektet", x: 99, y: 976, w: 160, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Balko.ai behövde ett snabbare sätt att gå från kundbehov till beräkning, materiallista och offert. Vi byggde en arbetsyta där sälj, kalkyl och underlag hänger ihop.", x: 562, y: 976, w: 886, h: 231, size: 36, line: 57.6, tracking: -0.72 },
    { text: "Utmaning", x: 99, y: 1446, w: 112, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Mycket låg i separata dokument och krävde manuell kontroll. Varje offert behövde rätt data, rätt antaganden och ett underlag som gick att lita på när nästa person tog över.", x: 562, y: 1446, w: 892, h: 404, size: 36, line: 57.6, tracking: -0.72 },
    { text: "Tillsammans tog vi fram en produktgrund där data, beräkning och dokument hänger ihop. Resultatet blev ett tydligare flöde från första kontakt till färdigt beslutsunderlag.", x: 64, y: 2736, w: 1232, h: 471, size: 48, line: 67.2, tracking: -0.96 },
    { text: "Mål", x: 99, y: 4082, w: 106, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Målet var att korta vägen mellan kunddialog, beräkning och offert, samtidigt som varje affär fick bättre status, färre manuella fel och enklare uppföljning.", x: 562, y: 4082, w: 886, h: 346, size: 36, line: 57.6, tracking: -0.72 },
    { text: "Resultat", x: 99, y: 5253, w: 82, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "24%", x: 64, y: 5340, w: 132, h: 71, size: 64, line: 70.4, tracking: -1.92, weight: 600 },
    { text: "Snabbare väg från behov till offert", x: 64, y: 5475, w: 430, h: 48, size: 20, line: 24, tracking: -0.4, family: "inter", weight: 400 },
    { text: "16%", x: 541, y: 5340, w: 123, h: 71, size: 64, line: 70.4, tracking: -1.92, weight: 600 },
    { text: "Mindre manuellt dubbelarbete i beräkning och underlag", x: 541, y: 5475, w: 430, h: 72, size: 20, line: 24, tracking: -0.4, family: "inter", weight: 400 },
    { text: "65%", x: 1019, y: 5340, w: 133, h: 71, size: 64, line: 70.4, tracking: -1.92, weight: 600 },
    { text: "Tydligare status och bättre uppföljning av affärer", x: 1019, y: 5475, w: 430, h: 72, size: 20, line: 24, tracking: -0.4, family: "inter", weight: 400 },
    ...footerLuna.texts,
  ],
  links: footerLuna.links,
};

export const aboutPage: FigmaPageData = {
  height: 9747,
  boxes: [
    { x: 0, y: 856, w: 1512, h: 528, color: "#ffffff", wide: true },
    { x: 0, y: 1384, w: 1512, h: 528, color: "#ffffff", wide: true },
    { x: 0, y: 2421, w: 1512, h: 704, color: "#f9f9f9", wide: true },
    { x: 0, y: 3124, w: 1512, h: 2947, color: "#f9f9f9", wide: true },
    { x: 0, y: 6071, w: 1512, h: 1169, color: "#ffffff", wide: true },
    ...footerAbout.boxes,
  ],
  images: [
    { src: "/figma/hemsida-1/pages/about-hero.png", x: 0, y: 0, w: 1512, h: 856, priority: true },
    { src: "/figma/hemsida-1/pages/about-wide.png", x: 0, y: 2421, w: 1512, h: 704 },
    { src: "/figma/hemsida-1/casper-ai.png", x: 64, y: 3443, w: 668, h: 355 },
    { src: "/figma/hemsida-1/tune-ai.png", x: 780, y: 3443, w: 668, h: 355 },
    { src: "/figma/hemsida-1/ring-models.png", x: 64, y: 4413, w: 668, h: 355 },
    { src: "/figma/hemsida-1/showreel.png", x: 780, y: 4413, w: 668, h: 355 },
    { src: "/figma/hemsida-1/testimonial.png", x: 780, y: 6418, w: 668, h: 617 },
  ],
  texts: [
    { text: "Vi löser specifika problem med tydliga digitala system", x: 64, y: 595, w: 817, h: 141, size: 64, line: 70.4, tracking: -1.92, color: "#ffffff", weight: 600 },
    { text: "Mer om oss", x: 99, y: 976, w: 160, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Vi bygger system när kalkylark, mejl och standardverktyg inte längre räcker. Allt formas runt hur teamet faktiskt jobbar.", x: 562, y: 976, w: 886, h: 288, size: 36, line: 57.6, tracking: -0.72 },
    { text: "Mission och värden", x: 99, y: 1504, w: 230, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Vi prioriterar tydlighet, långsiktig kod och lösningar som människor faktiskt använder. Systemet ska vara enkelt att förstå, ändra och bygga vidare på.", x: 562, y: 1504, w: 886, h: 288, size: 36, line: 57.6, tracking: -0.72 },
    { text: "Vi gör röriga arbetsflöden begripliga, samlade och lättare att styra.", x: 64, y: 2032, w: 880, h: 336, size: 48, line: 67.2, tracking: -0.96 },
    { text: "System och case", x: 64, y: 3244, w: 474, h: 135, size: 48, line: 67.2, tracking: -0.96 },
    { text: "Glasklart", x: 64, y: 3830, w: 163, h: 58, size: 36, line: 57.6, tracking: -0.72 },
    { text: "CRM, schema, arbetsorder och fakturor i ett operativt flöde", x: 64, y: 3904, w: 668, h: 48, size: 20, line: 24, tracking: -0.4, family: "inter", weight: 400 },
    { text: "Balko.ai", x: 780, y: 3830, w: 124, h: 58, size: 36, line: 57.6, tracking: -0.72 },
    { text: "AI-stöd för beräkningar, material och offertunderlag", x: 780, y: 3904, w: 668, h: 48, size: 20, line: 24, tracking: -0.4, family: "inter", weight: 400 },
    { text: "Effekt", x: 99, y: 6191, w: 77, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Färre lösa verktyg. Tydligare status. Bättre kontroll.", x: 687, y: 6191, w: 762, h: 202, size: 48, line: 67.2, tracking: -0.96 },
    { text: "Allt samlas på ett ställe. Teamet ser kunder, uppgifter, status och nästa steg utan att hoppa mellan kalkylark, mejl och olika verktyg.", x: 104, y: 6540, w: 612, h: 346, size: 36, line: 57.6, tracking: -0.72 },
    ...footerAbout.texts,
  ],
  links: footerAbout.links,
};
