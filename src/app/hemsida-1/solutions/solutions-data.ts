export type SolutionSlug =
  | "casper-ai"
  | "luna-ai"
  | "muna-ai"
  | "tune-ai"
  | "mesh-ai"
  | "luni-ai"
  | "ring-models-in-healthcare"
  | "deep-film-models"
  | "luno";

export type SolutionCard = {
  slug: SolutionSlug;
  title: string;
  summary: string;
  cardImage: string;
  detailImage?: string;
  heroImage: string;
  storyImage: string;
};

type SolutionGroup = {
  title: string;
  cards: SolutionCard[];
};

type DetailCopy = {
  about: string;
  challenge: string;
  story: string;
  objective: string;
  approach: string;
  results: { value: string; text: string }[];
};

export type SolutionDetail = SolutionCard & DetailCopy;

const detailCopy: DetailCopy = {
  about:
    "Ett tydligt systemstöd för team som behöver samla ansvar, status och nästa steg i en gemensam arbetsyta.",
  challenge:
    "Arbetet låg utspritt i flera verktyg, vilket gjorde det svårt att följa upp ansvar, hitta rätt information och hålla samma prioritet i teamet.",
  story:
    "Vi samlade kunddata, uppgifter och uppföljning i ett gemensamt flöde där teamet snabbt ser vad som händer, vem som äger nästa steg och vad som kräver beslut.",
  objective:
    "Målet var att göra vardagen tydligare, minska manuella överlämningar och ge verksamheten bättre kontroll över arbetet som redan pågår.",
  approach:
    "Vi kartlade flöden, roller och datakällor först och byggde sedan en lösning där gränssnitt, automatisering och rapporter följer teamets faktiska arbetssätt.",
  results: [
    {
      value: "35%",
      text: "Snabbare uppföljning när ansvar, status och nästa steg visas i samma vy.",
    },
    {
      value: "28%",
      text: "Mindre manuellt arbete genom att information bara behöver registreras en gång.",
    },
    {
      value: "22%",
      text: "Färre missade uppgifter tack vare tydligare prioritering och bättre överblick.",
    },
  ],
};

const allCards: SolutionDetail[] = [
  {
    slug: "casper-ai",
    title: "Projektflöde",
    summary:
      "Ansvar, status och nästa steg i samma vy.",
    cardImage: "/figma/hemsida-1/pages/solution-card-1.png",
    detailImage:
      "https://framerusercontent.com/images/IkfdvR2vcToNih5qGEaHHdCog.jpg?width=3840&height=5760",
    heroImage:
      "https://framerusercontent.com/images/HZx24sJqGgNaUy7TYi7KBMlGo.png?width=626&height=355",
    storyImage:
      "https://framerusercontent.com/images/DwyTzwZzQH6F92bz6LL48vIY.jpg?width=5184&height=3791",
    ...detailCopy,
  },
  {
    slug: "luna-ai",
    title: "Kundvy",
    summary: "All kunddata där teamet faktiskt arbetar.",
    cardImage: "/figma/hemsida-1/pages/solution-card-2.png",
    heroImage:
      "https://framerusercontent.com/images/KTHOoOXpIyDlAASxq5qsVPzOhuU.png?width=626&height=355",
    storyImage:
      "https://framerusercontent.com/images/y19xvJAZ8WPY9lzZD1VPnMGqfCI.jpg?width=3482&height=4642",
    ...detailCopy,
  },
  {
    slug: "muna-ai",
    title: "Ärendehantering",
    summary: "Tydliga flöden från fråga till leverans.",
    cardImage: "/figma/hemsida-1/pages/solution-card-3.png",
    heroImage:
      "https://framerusercontent.com/images/X3wkr5TcqcllsnCc4g77FSjLWFQ.png?width=626&height=355",
    storyImage:
      "https://framerusercontent.com/images/W5p0T6p5bfBJ1dD0IgHQQaAmc.jpg?width=8688&height=5792",
    ...detailCopy,
  },
  {
    slug: "tune-ai",
    title: "Rapporter",
    summary: "Nyckeltal som visar vad som behöver göras.",
    cardImage: "/figma/hemsida-1/pages/solution-card-4.png",
    heroImage:
      "https://framerusercontent.com/images/LINx8S86ZOptvd83KltDRDyIYIE.png?width=626&height=355",
    storyImage:
      "https://framerusercontent.com/images/qlBv4CIeAEBBfsIizBK6goLzMSQ.jpg?width=8296&height=5531",
    ...detailCopy,
  },
  {
    slug: "mesh-ai",
    title: "Prognoser",
    summary: "Underlag för bättre planering och beslut.",
    cardImage: "/figma/hemsida-1/pages/solution-card-5.png",
    heroImage:
      "https://framerusercontent.com/images/wvkj8wcj7oILNsoBf6FWxmXmxs.png?width=626&height=355",
    storyImage:
      "https://framerusercontent.com/images/mS9DksWDy9YuklPNcsRsLtpKns.jpg?width=3353&height=2514",
    ...detailCopy,
  },
  {
    slug: "luni-ai",
    title: "Prioritering",
    summary: "Rätt uppgift först, utan manuell sortering.",
    cardImage: "/figma/hemsida-1/pages/solution-card-6.png",
    heroImage:
      "https://framerusercontent.com/images/LHLXIjsXWpRvDxeDuoIEjJSd89w.jpg?width=3456&height=5184",
    storyImage:
      "https://framerusercontent.com/images/qdMOnTwGXmAWAWW1iMaiST2rBM.jpg?width=2765&height=3456",
    ...detailCopy,
  },
  {
    slug: "ring-models-in-healthcare",
    title: "AI-stöd",
    summary: "Smarta regler som tar bort repetitiva steg.",
    cardImage: "/figma/hemsida-1/pages/solution-card-7.png",
    heroImage:
      "https://framerusercontent.com/images/KbCncwjS8pChhOn5zdlrIDz4tsM.png?width=626&height=355",
    storyImage:
      "https://framerusercontent.com/images/4Cnz5IfozNfyCYh2zbFSmzGE3CI.jpg?width=6720&height=4480",
    ...detailCopy,
  },
  {
    slug: "deep-film-models",
    title: "Integrationer",
    summary: "System som pratar ihop utan dubbelarbete.",
    cardImage: "/figma/hemsida-1/pages/solution-card-8.png",
    heroImage:
      "https://framerusercontent.com/images/RWPRyFZA2aRrvPFri2sS19ydB1g.png?width=626&height=355",
    storyImage:
      "https://framerusercontent.com/images/w7q4fHALSFznHiNDbab6XVSekg.jpg?width=5760&height=3840",
    ...detailCopy,
  },
  {
    slug: "luno",
    title: "Skalbar grund",
    summary: "En teknisk bas som kan växa med bolaget.",
    cardImage: "/figma/hemsida-1/pages/solution-card-9.png",
    heroImage:
      "https://framerusercontent.com/images/M9BTTg843JHy3RzOf8CoReaJb4.png?width=626&height=355",
    storyImage:
      "https://framerusercontent.com/images/tfctSttkOttz4noaid6C2DisHM.jpg?width=3533&height=4416",
    ...detailCopy,
  },
];

export const solutionGroups: SolutionGroup[] = [
  {
    title: "Smarta Affärsystem",
    cards: allCards.slice(0, 3),
  },
  {
    title: "Smartare AI lösningar",
    cards: allCards.slice(3, 6),
  },
  {
    title: "Unika verktyg",
    cards: allCards.slice(6, 9),
  },
];

export const solutionDetails = allCards;

export const solutionDetailBySlug = Object.fromEntries(
  solutionDetails.map((detail) => [detail.slug, detail]),
) as Record<SolutionSlug, SolutionDetail>;
