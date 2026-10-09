import type { StaticImageData } from "next/image";
import visionsCover from "../../public/assets/projects/visions-fastigheter-overview.webp";
import prospektraCover from "../../public/assets/projects/prospektra-cover.webp";
import glasklartCover from "../../public/assets/projects/glasklart-square.webp";
import ekraCover from "../../public/assets/projects/ekra-bygg-cover-compact.webp";
import valendoCover from "../../public/assets/projects/valendo-arbetsveckan.webp";
import kundtipsCover from "../../public/assets/projects/kundtips-envelope-cover.webp";

interface ProjectSummary {
  slug: string;
  title: string;
  headline: string;
  tags: string[];
  image: StaticImageData;
  imagePosition: string;
  imageParallax?: boolean;
  imageAspectRatio?: number;
}

export interface CaseStudyProject extends ProjectSummary {
  facts: { year: string; client: string; timeframe: string };
  intro: string;
  challenge: string;
  solution: string;
  gallery: string[];
}

export interface ExternalProject extends ProjectSummary {
  externalUrl: string;
  comingSoon?: boolean;
}

export type Project = CaseStudyProject | ExternalProject;

export const projects: Project[] = [
  {
    slug: "visions-fastigheter",
    title: "Visions Fastigheter",
    headline: "Visions Fastigheter – verksamhetsautomation",
    tags: ["Affärssystem", "Branschlösning"],
    image: visionsCover,
    imageParallax: false,
    imageAspectRatio: 1,
    imagePosition: "50% 50%",
    externalUrl: "https://app.visionsfastigheter.se/",
    comingSoon: true,
  },
  {
    slug: "prospektra",
    title: "Prospektra",
    headline: "Prospektra – AI-baserad prospektering för B2B",
    tags: ["AI", "Plattformsutveckling"],
    image: prospektraCover,
    imageParallax: false,
    imagePosition: "50% 50%",
    externalUrl: "https://prospektra.se/",
  },
  {
    slug: "glasklart",
    title: "Glasklart",
    headline: "Glasklart – ett CRM för verksamheten",
    tags: ["Affärssystem", "Leadgenerering"],
    image: glasklartCover,
    imageParallax: false,
    imageAspectRatio: 1,
    imagePosition: "50% 50%",
    externalUrl: "https://app.glasklartsverige.se/",
    comingSoon: true,
  },
  {
    slug: "ekra-bygg",
    title: "Ek-RA Bygg",
    headline: "Ek-RA Bygg – leadgenerering",
    tags: ["Leadgenerering"],
    image: ekraCover,
    imagePosition: "50% 50%",
    imageParallax: false,
    imageAspectRatio: 1,
    externalUrl: "https://kundtips.se/",
  },
  {
    slug: "valendo",
    title: "Valendo",
    headline: "Valendo – affärssystem för städbranschen",
    tags: ["AI", "Affärssystem"],
    image: valendoCover,
    imageAspectRatio: 3 / 2,
    imagePosition: "50% 50%",
    imageParallax: false,
    externalUrl: "https://valendo.se/",
  },
  {
    slug: "kundtips",
    title: "Kundtips",
    headline: "Kundtips – din AI-agent som hittar leads",
    tags: ["AI", "Branschlösningar"],
    image: kundtipsCover,
    imagePosition: "50% 50%",
    imageParallax: false,
    imageAspectRatio: 1,
    externalUrl: "https://kundtips.se/",
  }
];

const projectsBySlug = new Map(projects.map(project => [project.slug, project]));

export function getProject(slug: string) {
  return projectsBySlug.get(slug);
}

export function getRelatedProjects(slug: string) {
  return projects.slice(0, 3).filter(project => project.slug !== slug).slice(0, 2);
}
