export type Project = {
  slug: string;
  title: string;
  service: string;
  year: string;
  listingYear?: string;
  industry: string;
  timeline: string;
  summary: string;
  logoImage?: string;
  detailLayout?: "spacious" | "offset";
  coverImage: string;
  heroImage: string;
  gallery: string[];
  problem: string;
  solution: string;
  impact: string;
};

export const projects: Project[] = [
  {
    slug: "visionsfastigheter",
    title: "Visionsfastigheter",
    service: "Affärssystem",
    year: "2026",
    listingYear: "2026",
    industry: "Fastigheter",
    timeline: "Pågående",
    summary:
      "Ett internt system för fastighetsarbete där hyresgäster, kontakter, anteckningar och uppföljning hålls samlat.",
    logoImage: "/reference/9XfpXOcQrpiKYnZNcFlnYhYZVI.svg",
    coverImage: "/cases/vision/vision-06-contact-detail.png",
    heroImage: "/cases/vision/vision-06-contact-detail.png",
    gallery: [
      "/cases/vision/vision-01-affarsoversikt.png",
      "/cases/vision/vision-04-inbox.png",
      "/cases/vision/vision-08-foretagssok.png",
      "/cases/vision/vision-hyresgast-activity.png",
    ],
    problem:
      "Fastighetsarbetet behövde en gemensam plats för relationer, lokalbehov, avtal och historik.",
    solution:
      "Systemet byggdes runt de vyer som används i arbetet: hyresgäster, kontakter, anteckningar, bilagor och kommande uppgifter.",
    impact:
      "Resultatet är en tydligare arbetsyta där informationen går att följa över tid och använda i nästa beslut.",
  },
  {
    slug: "glasklart",
    title: "Glasklart",
    service: "CRM och arbetsorder",
    year: "2026",
    listingYear: "2026",
    industry: "Service",
    timeline: "Pågående",
    summary:
      "Ett operativt CRM för kunder, arbetsordrar, schema, ärenden, fakturor och planering på karta.",
    logoImage: "/reference/Ntc48i8GxNtzZe6K8P7DeRLzQ.svg",
    coverImage: "/cases/glasklart/glasklart-06-planning-map.png",
    heroImage: "/cases/glasklart/glasklart-06-planning-map.png",
    gallery: [
      "/cases/glasklart/glasklart-01-dashboard.png",
      "/cases/glasklart/glasklart-02-customers.png",
      "/cases/glasklart/glasklart-04-jobs-today.png",
      "/cases/glasklart/glasklart-07-invoices.png",
    ],
    problem:
      "Kunder, arbetsordrar och planering behövde hänga ihop i samma arbetsflöde.",
    solution:
      "Systemet samlar kundlistor, jobb, schema, karta och fakturering i en struktur som följer den dagliga driften.",
    impact:
      "Teamet får en samlad bild av vad som ska göras, var arbetet sker och hur uppgifterna fördelas.",
  },
  {
    slug: "balko-ai",
    title: "Balko.ai",
    service: "AI-plattform",
    year: "2025",
    listingYear: "2025",
    industry: "Bygg och projekt",
    timeline: "Produktutveckling",
    summary:
      "En produkt för byggflöden där mängder, material, offertunderlag och fakturor kan tas fram i samma arbetsyta.",
    logoImage: "/reference/2rq9YMILXCGw0qOqXvxaPhzIuWo.svg",
    coverImage: "/cases/balko/balko-02-sadeltak-calculator.png",
    heroImage: "/cases/balko/balko-02-sadeltak-calculator.png",
    gallery: [
      "/cases/balko/balko-03-yttervagg-calculator.png",
      "/cases/balko/balko-04-takrenovering-calculator.png",
      "/cases/balko/balko-05-rita-badrum-planner.png",
      "/cases/balko/balko-01-tools-overview.png",
    ],
    problem:
      "Byggunderlag behövde gå från mått och material till offert och faktura utan att tappa sammanhanget.",
    solution:
      "Plattformen byggdes runt konkreta moment: beräkning, materialspecifikation, offert, PDF och fakturaunderlag.",
    impact:
      "Det ger en produktgrund där varje steg i byggflödet kan sparas, återanvändas och utvecklas vidare.",
  },
  {
    slug: "anlab",
    title: "ANLAB",
    service: "Offertsystem",
    year: "2026",
    listingYear: "2026",
    industry: "Anläggning",
    timeline: "Pågående",
    summary:
      "Ett offertsystem för anläggningsarbete med kunddata, projektinformation, mängdförteckning, status och utskick.",
    logoImage: "/reference/OPToRxvhQd2ScvavfIOXuI6o.svg",
    coverImage: "/cases/anlab/anlab-03-offert-editor.png",
    heroImage: "/cases/anlab/anlab-03-offert-editor.png",
    gallery: [
      "/cases/anlab/anlab-02-offert-list.png",
      "/cases/anlab/anlab-01-ai-dashboard.png",
      "/cases/anlab/anlab-04-offert-filled-start.png",
    ],
    problem:
      "Offerter behövde kunna skapas, sparas och följas upp utan att informationen sprids mellan olika dokument.",
    solution:
      "Systemet samlar beställare, projekt, kontaktuppgifter, mängder, priser, status, export och utskick i ett sammanhållet flöde.",
    impact:
      "ANLAB får en tydlig process från första offertutkast till sparad historik och skickat underlag.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string) {
  return projects.filter((project) => project.slug !== slug).slice(0, 3);
}
