type Customer = {
  name: string;
  source: string;
  showName?: boolean;
  preserveContrast?: boolean;
  logo: { src: string; width: number; height: number; displayHeight: number };
};

// Logos sourced from each customer's own website; original files are kept locally.
export const customers: Customer[] = [
  {
    name: "Anlab",
    source: "https://anlab.se/",
    logo: { src: "/assets/customers/anlab.png", width: 300, height: 95, displayHeight: 40 },
  },
  {
    name: "Ek-RA Bygg",
    source: "https://ekrabygg.se/",
    logo: { src: "/assets/customers/ekra-bygg.png", width: 198, height: 82, displayHeight: 40 },
  },
  {
    name: "Visions Fastigheter",
    source: "https://visionsfastigheter.se/",
    logo: { src: "/assets/customers/visions-fastigheter.svg", width: 1920, height: 1920, displayHeight: 56 },
  },
  {
    name: "Prospektra",
    source: "https://prospektra.se/",
    showName: true,
    logo: { src: "/assets/customers/prospektra.png", width: 160, height: 160, displayHeight: 28 },
  },
  {
    name: "Glasklart Sverige",
    source: "https://glasklartsverige.se/",
    logo: { src: "/assets/customers/glasklart.png", width: 2079, height: 590, displayHeight: 32 },
  },
  {
    name: "Telways",
    source: "https://telways.se/",
    logo: { src: "/assets/customers/telways.svg", width: 149, height: 32, displayHeight: 28 },
  },
  {
    name: "Meetel",
    source: "https://meetel.ai/",
    logo: { src: "/assets/customers/meetel.png", width: 1051, height: 231, displayHeight: 28 },
  },
  {
    name: "Kakelgruppen",
    source: "https://kakelgruppen.com/",
    logo: { src: "/assets/customers/kakelgruppen.svg", width: 678, height: 195, displayHeight: 36 },
  },
];
