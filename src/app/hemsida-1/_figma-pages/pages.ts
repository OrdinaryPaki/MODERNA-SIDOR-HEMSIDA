import type { FigmaPageData } from "./FigmaPage";
import { commonFooter } from "./FigmaPage";

const projectCards = [
  ["Affärssystem", "Samlar ansvar, status och beslut i ett tydligt flöde", "/figma/hemsida-1/casper-ai.png"],
  ["AI-stöd", "Minskar manuella steg och gör nästa prioritet tydlig", "/figma/hemsida-1/tune-ai.png"],
  ["Integrationer", "Kopplar system, kunddata och arbetsflöden utan dubbelarbete", "/figma/hemsida-1/ring-models.png"],
] as const;

const footerContact = {
  ...commonFooter(2028),
  texts: commonFooter(2028).texts.map((text) =>
    text.text === "Moderna Sidor"
      ? { ...text, x: text.x - 1, y: text.y - 1, size: 27.8, tracking: -0.4 }
      : text.text === "Låt oss bygga ett system runt ert arbetssätt"
        ? { ...text, y: text.y - 1, size: 48, tracking: -0.84 }
      : text.text === "Berätta var arbetsflödet fastnar. Vi hjälper er samla rätt flöden, data och AI-stöd i ett system."
          ? { ...text, size: 23.6, tracking: -0.24 }
        : text.text === "Digitala system byggda runt hur ni faktiskt jobbar"
          ? { ...text, y: text.y - 1, size: 20.2, tracking: -0.36 }
        : text.text === "Sidor"
          ? { ...text, x: text.x + 1, y: text.y - 1, size: 20, tracking: -0.5 }
        : text.text === "Socialt"
          ? { ...text, y: text.y - 1, size: 20, tracking: -0.5 }
        : text.text === "Twitter"
          ? { ...text, x: text.x + 1, y: text.y - 2, size: 19.6, tracking: 0.2 }
        : ["Start", "Om oss", "Case", "Process", "Kontakt", "Twitter", "LinkedIn", "Instagram"].includes(text.text)
          ? { ...text, y: text.y - 2, size: 19.6, tracking: 0.2 }
        : text,
  ),
  links: (commonFooter(2028).links ?? []).map((link) => ({
    ...link,
    x: link.x + 0.5,
    hideIcon: false,
    size: 20.2,
    tracking: 0,
  })),
};
const footerCareers = {
  ...commonFooter(3175),
  texts: commonFooter(3175).texts.map((text) =>
    text.text === "Moderna Sidor"
      ? { ...text, x: text.x - 1, size: 27.8, tracking: -0.4 }
      : text.text === "Låt oss bygga ett system runt ert arbetssätt"
      ? { ...text, tracking: -0.84 }
      : text.text === "Berätta var arbetsflödet fastnar. Vi hjälper er samla rätt flöden, data och AI-stöd i ett system."
        ? { ...text, y: text.y + 0.5, size: 24.2, tracking: -0.54, scaleX: 1.001 }
        : text.text === "Digitala system byggda runt hur ni faktiskt jobbar"
          ? { ...text, size: 20.2, tracking: -0.3 }
        : text,
  ),
  links: (commonFooter(3175).links ?? []).map((link) => ({
    ...link,
    x: link.x + 0.5,
    hideIcon: false,
    size: 20.2,
    tracking: 0,
  })),
};
const footerSolutions = {
  ...commonFooter(4633.1796875),
  texts: commonFooter(4633.1796875).texts.map((text) =>
    text.text === "Moderna Sidor"
      ? { ...text, x: text.x - 1, size: 27.8, tracking: -0.4 }
      : text.text === "Låt oss bygga ett system runt ert arbetssätt"
      ? { ...text, tracking: -0.84 }
      : text.text === "Berätta var arbetsflödet fastnar. Vi hjälper er samla rätt flöden, data och AI-stöd i ett system."
        ? { ...text, y: text.y + 1, size: 23.6, tracking: -0.24 }
        : text.text === "Digitala system byggda runt hur ni faktiskt jobbar"
          ? { ...text, tracking: -0.3 }
        : text,
  ),
  links: (commonFooter(4633.1796875).links ?? []).map((link) => ({
    ...link,
    x: link.x + 0.5,
    hideIcon: false,
    size: 20.2,
    tracking: 0,
  })),
};
const footerLuna = {
  ...commonFooter(900),
  texts: commonFooter(900).texts.map((text) =>
    text.text === "Moderna Sidor"
      ? { ...text, x: text.x - 1, size: 27.8, tracking: -0.4 }
      : text.text === "Låt oss bygga ett system runt ert arbetssätt"
      ? { ...text, tracking: -0.84 }
      : text.text === "Kontakta oss"
        ? { ...text, size: 23.6, tracking: -0.24 }
        : text.text === "Skräddarsydda digitala system för företag som vill jobba tydligare"
          ? { ...text, tracking: -0.3 }
        : text,
  ),
  links: (commonFooter(900).links ?? []).map((link) => ({
    ...link,
    x: link.x + 0.5,
    hideIcon: false,
    size: 20.2,
    tracking: 0,
  })),
};
const footerAbout = {
  ...commonFooter(8840.125),
  texts: commonFooter(8840.125).texts.map((text) =>
    text.text === "Moderna Sidor"
      ? { ...text, x: text.x - 1, size: 27.8, tracking: -0.4 }
      : text.text === "Låt oss bygga ett system runt ert arbetssätt"
      ? { ...text, tracking: -0.84 }
      : text.text === "Berätta var arbetsflödet fastnar. Vi hjälper er samla rätt flöden, data och AI-stöd i ett system."
        ? { ...text, size: 23.6, tracking: -0.24 }
        : text.text === "Digitala system byggda runt hur ni faktiskt jobbar"
          ? { ...text, tracking: -0.3 }
        : text,
  ),
  links: (commonFooter(8840.125).links ?? []).map((link) => ({
    ...link,
    x: link.x + 0.5,
    hideIcon: false,
    size: 20.2,
    tracking: 0,
  })),
};
const solutionCardImages = Array.from(
  { length: 9 },
  (_, index) => `/figma/hemsida-1/pages/solution-card-${index + 1}.png`,
);
const labelMark = (y: number) => ({
  x: 64,
  y: y + 10,
  w: 20,
  h: 20,
  color: "transparent",
  border: "1.5px solid #121212",
  radius: 999,
  foreground: true,
});

export const contactPage: FigmaPageData = {
  height: 2936,
  textOffsetY: 1,
  navCtaVariant: "button",
  boxes: [
    { x: 796, y: 263, w: 560, h: 413.1953125, color: "#ffffff", radius: 16, foreground: true },
    { x: 856, y: 348, w: 440, h: 40, color: "rgba(187,187,187,0.15)", border: "1px solid #e4e4e4", radius: 10, foreground: true },
    { x: 856, y: 432.3984375, w: 440, h: 40, color: "rgba(187,187,187,0.15)", border: "1px solid #e4e4e4", radius: 10, foreground: true },
    { x: 856, y: 533.796875, w: 440, h: 40, color: "rgba(187,187,187,0.15)", border: "1px solid #e4e4e4", radius: 10, foreground: true },
    { x: 856, y: 606.1953125, w: 440, h: 40, color: "#333333", radius: 10, foreground: true },
    { x: 0, y: 900, w: 1512, h: 1128, color: "#f9f9f9", wide: true },
    labelMark(1020),
    ...footerContact.boxes,
  ],
  images: [
    { src: "/figma/hemsida-1/pages/contact-hero-bg.png", x: 0, y: 0, w: 1512, h: 900, priority: true },
    { src: "/figma/hemsida-1/pages/contact-office-1.png", x: 784, y: 1106, w: 664, h: 377 },
    { src: "/figma/hemsida-1/pages/contact-office-2.png", x: 784, y: 1531, w: 664, h: 377 },
  ],
  texts: [
    { text: "Berätta var arbetsflödet fastnar", as: "h1", x: 155, y: 260, w: 560, h: 288, size: 64.4, line: 70.4, tracking: -1.74, color: "#ffffff", weight: 600, scaleX: 0.998 },
    { text: "Vi hjälper er se vad som bör samlas, kopplas ihop och byggas vidare i ett digitalt system.", x: 156, y: 565, w: 560, h: 116, size: 24.2, line: 38.4, tracking: -0.54, color: "#ffffff", scaleX: 1.002 },
    { text: "Namn", x: 856, y: 322.5, w: 34, h: 15, size: 11.8, line: 14.4, family: "inter", weight: 500 },
    { text: "Ditt namn", x: 868, y: 359, w: 416, h: 17, size: 14.4, line: 17, family: "inter", weight: 400, color: "#999999" },
    { text: "E-post", x: 856, y: 407.4, w: 39, h: 15, size: 12, line: 14.4, family: "inter", weight: 500 },
    { text: "namn@bolag.se", x: 868, y: 442.9, w: 416, h: 17, size: 14.2, line: 17, family: "inter", weight: 400, color: "#999999" },
    { text: "Behov", x: 856, y: 491.3, w: 49, h: 15, size: 11.8, line: 14.4, family: "inter", weight: 500 },
    { text: "Välj område...", x: 868, y: 526.8, w: 416, h: 17, size: 14.2, line: 17, family: "inter", weight: 400, color: "#999999" },
    { text: "⌄", x: 1265, y: 525.8, w: 20, h: 20, size: 22, line: 20, family: "inter", weight: 400, color: "#999999", align: "center" },
    { text: "Skicka", x: 1052, y: 616.7, w: 48, h: 17, size: 14, line: 16.8, family: "inter", weight: 600, color: "#ffffff" },
    { text: "Kontakt", x: 99, y: 1020, w: 174, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Samtal", x: 64, y: 1106, w: 79, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Boka ett första samtal", x: 63.5, y: 1153.5, w: 363, h: 58, size: 36.4, line: 57.6, tracking: -0.72 },
    { text: "Vi går igenom nuläge, ansvar och flaskhalsar.", x: 64, y: 1218.5, w: 720, h: 39, size: 23.6, line: 38.4, tracking: -0.36 },
    { text: "Svar inom 1-2 arbetsdagar", x: 64, y: 1265.5, w: 520, h: 39, size: 23.8, line: 38.4, tracking: -0.36 },
    { text: "business@modernasidor.se", x: 64.5, y: 1312.5, w: 322, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Underlag", x: 64, y: 1531, w: 210, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Har ni redan ett system?", x: 64, y: 1578, w: 404, h: 58, size: 36.2, line: 57.6, tracking: -0.9 },
    { text: "Vi hittar vad som ska förenklas och kopplas ihop.", x: 66, y: 1644, w: 720, h: 39, size: 24, line: 38.4, tracking: -0.54 },
    { text: "Skicka process, export eller exempel", x: 64, y: 1691, w: 520, h: 39, size: 24, line: 38.4, tracking: -0.54 },
    { text: "business@modernasidor.se", x: 64, y: 1738, w: 322, h: 39, size: 24, line: 38.4, tracking: -0.54 },
    ...footerContact.texts,
  ],
  links: footerContact.links,
};

export const careersPage: FigmaPageData = {
  height: 4112,
  offsetAfterY: 574,
  yOffsetAfter: 29,
  navCtaVariant: "button",
  boxes: [
    { x: 0, y: 574, w: 1512, h: 704, color: "#f9f9f9", wide: true },
    { x: 0, y: 1277, w: 1512, h: 805, color: "#f9f9f9", wide: true },
    { x: 0, y: 2082, w: 1512, h: 1092, color: "#ffffff", wide: true },
    { x: 64, y: 2304, w: 692, h: 646, color: "#f9f9f9" },
    { x: 680, y: 2990, w: 64, h: 64, color: "transparent", border: "1px solid #121212", radius: 999, foreground: true },
    { x: 769, y: 2990, w: 64, h: 64, color: "transparent", border: "1px solid #121212", radius: 999, foreground: true },
    labelMark(1397),
    labelMark(2202),
    ...footerCareers.boxes,
  ],
  images: [
    { src: "/figma/hemsida-1/pages/careers-hero-bg.png", x: 0, y: 0, w: 1512, h: 603, priority: true },
    { src: "/figma/hemsida-1/pages/careers-wide.png", x: 0, y: 574, w: 1512, h: 704 },
    { src: "/figma/hemsida-1/pages/careers-review.png", x: 736, y: 2304, w: 732, h: 647 },
  ],
  texts: [
    { text: "Karriär på Moderna Sidor", as: "h1", x: 64, y: 363.1171875, w: 1000, h: 71, size: 63.4, line: 70.4, tracking: -1.56, weight: 600, scaleX: 1.0005 },
    { text: "Öppna roller på Moderna Sidor", x: 99, y: 1396.71484375, w: 360, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Fullstack-utvecklare", x: 686.8046875, y: 1448.4140625, w: 460, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Hybrid", x: 687.8046875, y: 1502.4140625, w: 192, h: 24, size: 20, line: 24, tracking: -0.4, family: "inter", weight: 400 },
    { text: "Frontend-utvecklare", x: 687.8046875, y: 1593.8125, w: 298, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Hybrid", x: 686.8046875, y: 1647.8125, w: 204, h: 24, size: 20, line: 24, tracking: -0.4, family: "inter", weight: 400 },
    { text: "AI- och automationsspecialist", x: 686.8046875, y: 1739.2109375, w: 390, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Remote", x: 686.8046875, y: 1793.2109375, w: 204, h: 24, size: 20, line: 24, tracking: -0.4, family: "inter", weight: 400 },
    { text: "Produktdesigner", x: 686.8046875, y: 1883.609375, w: 280, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Hybrid", x: 687.8046875, y: 1938.609375, w: 231, h: 24, size: 20, line: 24, tracking: -0.4, family: "inter", weight: 400 },
    { text: "Teamet säger", x: 99, y: 2203, w: 153, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Vi jobbar nära kundens verkliga flöden och bygger lösningar som snabbt går att förstå, testa och förbättra.", x: 103.5, y: 2345, w: 608, h: 288, size: 35.7, line: 57.6, tracking: -0.54, scaleX: 0.998 },
    { text: "Team Moderna Sidor", x: 104, y: 2680, w: 260, h: 31, size: 22.2, line: 30.8, tracking: -0.32, weight: 600 },
    { text: "Produkt och utveckling", x: 104.5, y: 2713, w: 380, h: 24, size: 20.2, line: 24, tracking: -0.38, family: "inter", weight: 400 },
    { text: "←", x: 701, y: 3008, w: 22, h: 28, size: 24, line: 28, family: "inter", weight: 400, align: "center" },
    { text: "→", x: 790, y: 3008, w: 22, h: 28, size: 24, line: 28, family: "inter", weight: 400, align: "center" },
    ...footerCareers.texts,
  ],
  careerApplications: [
    { role: "Fullstack-utvecklare", x: 1365.21875, y: 1447.4140625, w: 99 },
    { role: "Frontend-utvecklare", x: 1365.21875, y: 1592.8125, w: 99 },
    { role: "AI- och automationsspecialist", x: 1365.21875, y: 1738.2109375, w: 99 },
    { role: "Produktdesigner", x: 1365.21875, y: 1883.609375, w: 99 },
  ],
  links: footerCareers.links,
};

export const solutionsPage: FigmaPageData = {
  height: 5585,
  offsetAfterY: 856,
  yOffsetAfter: 44,
  boxes: [
    { x: 0, y: 856, w: 1512, h: 2645, color: "#f9f9f9", wide: true },
    { x: 64, y: 976, w: 1384, h: 711, color: "#ffffff" },
    { x: 64, y: 1890, w: 1384, h: 644, color: "#ffffff" },
    { x: 64, y: 2737, w: 1384, h: 644, color: "#ffffff" },
    { x: 0, y: 3501, w: 1512, h: 1132, color: "#ffffff", wide: true },
    ...footerSolutions.boxes,
  ],
  images: [
    { src: "/figma/hemsida-1/pages/solutions-hero-bg.png", x: 0, y: 0, w: 1512, h: 900, priority: true },
    ...projectCards.flatMap((card, index) => {
      const xs = [64, 539, 1013];
      const ys = [1158, 2005, 2852];
      return [0, 1, 2].map((row) => ({
        src: solutionCardImages[row * 3 + index],
        x: xs[index],
        y: ys[row],
        w: 435,
        h: 355,
      }));
    }),
    { src: "/figma/hemsida-1/pages/solutions-team.png", x: 64, y: 3805, w: 1384, h: 707 },
  ],
  texts: [
    { text: "Lösningar byggda runt era flöden, data och beslut", as: "h1", x: 64, y: 595.203125, w: 817, h: 141, size: 64.15, line: 70.4, tracking: -1.8, color: "#ffffff", weight: 600, scaleX: 0.9985 },
    { text: "Arbetsflöden", x: 64, y: 976, w: 526, h: 135, size: 48, line: 67.2, tracking: -0.96 },
    { text: "Beslutsstöd", x: 64, y: 1890, w: 500, h: 68, size: 48.15, line: 67.2, tracking: -1.08 },
    { text: "Automatisering", x: 64, y: 2736, w: 360, h: 68, size: 48.2, line: 67.2, tracking: -0.9 },
    ...[1158, 2005, 2852].flatMap((baseY, row) =>
      projectCards.map((card, index) => ({
        text: row === 0 ? ["Projektflöde", "Kundvy", "Ärendehantering"][index] : row === 1 ? ["Rapporter", "Prognoser", "Prioritering"][index] : ["AI-stöd", "Integrationer", "Skalbar grund"][index],
        x: [64, 539, 1013][index],
        y: baseY + 387 + (row === 0 || row === 1 || row === 2 ? 0.5 : 0),
        w: 435,
        h: 58,
        size: row === 0 ? 35.8 : row === 1 ? 36.3 : 36,
        line: 57.6,
        tracking: row === 0 ? -0.54 : row === 1 ? -0.84 : row === 2 ? -0.6 : -0.72,
        scaleX: row === 2 ? 1.0005 : undefined,
        family: "inter" as const,
        weight: row === 0 ? (500 as const) : (400 as const),
      }))
    ),
    ...[1158, 2005, 2852].flatMap((baseY, row) =>
      projectCards.map((card, index) => ({
        text:
          row === 0
            ? "Skräddarsydd funktionalitet som minskar manuella steg och gör nästa prioritet tydlig."
            : row === 1
            ? "Beslutsunderlag som samlar rätt data och visar vad teamet behöver agera på."
              : "Automatisering och integrationer som tar bort repetitivt arbete.",
        x: [64, 539, 1013][index],
        y: baseY + 461 + (row === 0 || row === 1 || row === 2 ? -0.5 : 0),
        w: 435,
        h: 48,
        size: 20,
        line: 24,
        tracking: -0.4,
        scaleX: row === 0 ? 0.998 : row === 2 ? 0.999 : row === 1 ? 1.001 : undefined,
        family: "inter" as const,
        weight: 500 as const,
      }))
    ),
    { text: "Jobba med oss", x: 66, y: 3620.5, w: 440, h: 68, size: 48.4, line: 67.2, tracking: -0.9, scaleX: 1.001 },
    { text: "Bygg system som gör vardagen enklare för team som har vuxit ur standardverktyg.", x: 853, y: 3621.5, w: 596, h: 77, size: 24.2, line: 38.4, tracking: -0.6, scaleX: 1.001 },
    { text: "Se öppna roller", x: 97, y: 3713, w: 176, h: 28, size: 20.2, line: 28, family: "inter", weight: 400 },
    ...footerSolutions.texts,
  ],
  links: footerSolutions.links,
};

export const lunaPage: FigmaPageData = {
  height: 1809,
  srOnlyTitle: "404",
  navCtaVariant: "button",
  boxes: [
    ...footerLuna.boxes,
  ],
  images: [
    { src: "/figma/hemsida-1/pages/not-found-bg.jpg", x: 0, y: 0, w: 1512, h: 900, priority: true },
  ],
  texts: [
    { text: "404", as: "h1", x: 523, y: 292, w: 467, h: 291, size: 240, line: 240, tracking: -4.8, color: "#ffffff", weight: 600 },
    { text: "Här fanns inget att se…", x: 571, y: 583, w: 300, h: 44, size: 28, line: 44.8, tracking: -0.56, color: "#ffffff", weight: 600 },
    { text: "Gå hem", x: 865, y: 583, w: 110, h: 44, size: 28, line: 44.8, tracking: -0.56, color: "#ffffff", weight: 600 },
    ...footerLuna.texts,
  ],
  links: footerLuna.links,
};

export const aboutPage: FigmaPageData = {
  height: 9792,
  offsetAfterY: 856,
  yOffsetAfter: 44,
  boxes: [
    { x: 0, y: 856, w: 1512, h: 528, color: "#ffffff", wide: true },
    { x: 0, y: 1384, w: 1512, h: 528, color: "#ffffff", wide: true },
    { x: 0, y: 2421, w: 1512, h: 704, color: "#f9f9f9", wide: true },
    { x: 0, y: 3124, w: 1512, h: 2947, color: "#f9f9f9", wide: true },
    { x: 0, y: 6071, w: 1512, h: 1169, color: "#ffffff", wide: true },
    { x: 64, y: 6457, w: 692, h: 617, color: "#f9f9f9", radius: 8 },
    { x: 1250, y: 3288, w: 198, h: 48, color: "transparent", border: "1px solid #121212", radius: 8 },
    { x: 1250, y: 4258, w: 198, h: 48, color: "transparent", border: "1px solid #121212", radius: 8 },
    { x: 1250, y: 5228, w: 198, h: 48, color: "transparent", border: "1px solid #121212", radius: 8 },
    { x: 420, y: 7113, w: 211, h: 5, color: "#6e8dd2" },
    { x: 655, y: 7113, w: 211, h: 5, color: "#e9e9e9" },
    { x: 890, y: 7113, w: 211, h: 5, color: "#e9e9e9" },
    labelMark(976),
    labelMark(1504),
    labelMark(6191),
    ...footerAbout.boxes,
  ],
  images: [
    { src: "/figma/hemsida-1/pages/about-hero-bg.png", x: 0, y: 0, w: 1512, h: 900, priority: true },
    { src: "/figma/hemsida-1/pages/about-wide.png", x: 0, y: 2421, w: 1512, h: 704 },
    { src: "/figma/hemsida-1/pages/about-card-1.png", x: 64, y: 3443, w: 668, h: 355 },
    { src: "/figma/hemsida-1/pages/about-card-2.png", x: 780, y: 3443, w: 668, h: 355 },
    { src: "/figma/hemsida-1/pages/about-card-3.png", x: 64, y: 4413, w: 668, h: 355 },
    { src: "/figma/hemsida-1/pages/about-card-4.png", x: 780, y: 4413, w: 668, h: 355 },
    { src: "/figma/hemsida-1/pages/about-card-5.png", x: 64, y: 5383, w: 668, h: 355 },
    { src: "/figma/hemsida-1/pages/about-card-6.png", x: 780, y: 5383, w: 668, h: 355 },
    { src: "/figma/hemsida-1/impact.jpg", x: 756, y: 6457, w: 692, h: 617, radius: 8 },
    { src: "/figma/hemsida-1/pages/about-team.png", x: 64, y: 8011, w: 1384, h: 707 },
  ],
  marquees: [
    {
      title: "",
      items: ["Teleways", "Meetel", "Balko", "Kundia", "Glasklart", "ANLAB"],
      x: 0,
      y: 7366,
      w: 1512,
      h: 230,
    },
  ],
  texts: [
    { text: "Digitala system för företag som vuxit ur standardverktyg", as: "h1", x: 64, y: 595.203125, w: 817, h: 141, size: 64, line: 70.4, tracking: -1.92, color: "#ffffff", weight: 600 },
    { text: "Mer om oss", x: 99, y: 977, w: 160, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Moderna Sidor bygger digitala system runt hur verksamheten faktiskt arbetar. Vi börjar i flöden, ansvar och data innan vi väljer teknik.", x: 562, y: 976.5, w: 886, h: 231, size: 36.15, line: 57.8, tracking: -0.84 },
    { text: "Vårt arbetssätt", x: 99, y: 1505, w: 230, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Vi gör komplexa processer tydliga, kopplar ihop verktyg och lägger AI-stöd där det skapar mätbar nytta.", x: 562, y: 1504.5, w: 886, h: 173, size: 36.3, line: 57.6, tracking: -0.84 },
    { text: "Vi bygger system som teamet förstår, använder och kan växa med, så arbetet blir tydligare, besluten snabbare och vardagen enklare att styra.", x: 64, y: 2033, w: 980, h: 336, size: 47.9, line: 67.2, tracking: -0.96, scaleX: 0.997, wordSpacing: 1.25 },
    { text: "Arbetsflöden", x: 64, y: 3244, w: 474, h: 135, size: 48, line: 67.2, tracking: -0.96 },
    { text: "Se alla lösningar", x: 1250, y: 3304, w: 198, h: 16, size: 16, line: 16, family: "inter", weight: 400, align: "center", hideIcon: true },
    { text: "Projektflöde", x: 64, y: 3830, w: 220, h: 58, size: 36, line: 57.6, tracking: -0.72 },
    { text: "Ansvar, status och nästa steg samlat i ett arbetsflöde", x: 64, y: 3904, w: 668, h: 48, size: 20, line: 24, tracking: -0.4, family: "inter", weight: 500 },
    { text: "Se vad vi gjorde", x: 93, y: 3983, w: 180, h: 28, size: 20, line: 28, family: "inter", weight: 500 },
    { text: "Kundvy", x: 780, y: 3830, w: 124, h: 58, size: 36, line: 57.6, tracking: -0.72 },
    { text: "All kunddata och historik där teamet behöver den", x: 780, y: 3904, w: 668, h: 48, size: 20, line: 24, tracking: -0.4, family: "inter", weight: 500 },
    { text: "Se vad vi gjorde", x: 809, y: 3983, w: 180, h: 28, size: 20, line: 28, family: "inter", weight: 500 },
    { text: "Beslutsstöd", x: 62.5, y: 4246.5, w: 430, h: 135, size: 47.6, line: 67.2, tracking: -0.6, scaleX: 0.9985 },
    { text: "Se alla lösningar", x: 1250, y: 4274, w: 198, h: 16, size: 15.8, line: 16, family: "inter", weight: 400, align: "center", hideIcon: true },
    { text: "Rapporter", x: 64, y: 4800, w: 240, h: 58, size: 36, line: 57.6, tracking: -0.72 },
    { text: "Nyckeltal som visar vad som behöver göras", x: 64, y: 4874, w: 668, h: 48, size: 20, line: 24, tracking: -0.4, family: "inter", weight: 500 },
    { text: "Se vad vi gjorde", x: 93, y: 4953, w: 180, h: 28, size: 20, line: 28, family: "inter", weight: 500 },
    { text: "Integrationer", x: 780, y: 4800, w: 260, h: 58, size: 36, line: 57.6, tracking: -0.72 },
    { text: "System som pratar med varandra utan dubbelarbete", x: 780, y: 4874, w: 668, h: 48, size: 20, line: 24, tracking: -0.4, family: "inter", weight: 500 },
    { text: "Se vad vi gjorde", x: 809, y: 4953, w: 180, h: 28, size: 20, line: 28, family: "inter", weight: 500 },
    { text: "Automatisering", x: 64, y: 5217, w: 430, h: 135, size: 47.6, line: 67.2, tracking: -0.48 },
    { text: "Se alla lösningar", x: 1250, y: 5244, w: 198, h: 16, size: 16, line: 16, family: "inter", weight: 400, align: "center", hideIcon: true },
    { text: "AI-stöd", x: 64, y: 5770, w: 432, h: 58, size: 36, line: 57.6, tracking: -0.72 },
    { text: "Smarta regler som tar bort repetitiva moment", x: 64, y: 5844, w: 668, h: 48, size: 20, line: 24, tracking: -0.4, family: "inter", weight: 500 },
    { text: "Se vad vi gjorde", x: 93, y: 5923, w: 180, h: 28, size: 20, line: 28, family: "inter", weight: 500 },
    { text: "Skalbar grund", x: 780, y: 5770, w: 288, h: 58, size: 36, line: 57.6, tracking: -0.72 },
    { text: "En teknisk bas som kan växa med verksamheten", x: 780, y: 5844, w: 668, h: 48, size: 20, line: 24, tracking: -0.4, family: "inter", weight: 500 },
    { text: "Se vad vi gjorde", x: 809, y: 5923, w: 180, h: 28, size: 20, line: 28, family: "inter", weight: 500 },
    { text: "Effekt", x: 99, y: 6191, w: 77, h: 39, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Vi hjälper företag minska manuellt arbete och få bättre koll på beslut, data och nästa steg.", x: 687, y: 6191.5, w: 762, h: 202, size: 47.8, line: 67.2, tracking: -0.78 },
    { text: "Systemet gav oss en gemensam vy för uppföljning och ansvar. Det blev enklare att agera på rätt saker i rätt tid.", x: 104, y: 6540.5, w: 612, h: 346, size: 36, line: 57.6, tracking: -0.72 },
    { text: "Kundteam", x: 104, y: 6932, w: 140, h: 31, size: 21.6, line: 30.8, tracking: -0.46, weight: 600 },
    { text: "Operativ ledning", x: 104, y: 6965, w: 380, h: 24, size: 19.6, line: 24, tracking: -0.32, family: "inter", weight: 400 },
    { text: "Jobba med oss", x: 64, y: 7828, w: 440, h: 68, size: 48.4, line: 67.2, tracking: -0.72 },
    { text: "Vi söker personer som vill bygga tydliga system för verkliga arbetsflöden.", x: 853, y: 7828, w: 596, h: 77, size: 24, line: 38.4, tracking: -0.48 },
    { text: "Se öppna roller", x: 97, y: 7920, w: 176, h: 28, size: 20, line: 28, family: "inter", weight: 400 },
    ...footerAbout.texts,
  ],
  links: footerAbout.links,
};
