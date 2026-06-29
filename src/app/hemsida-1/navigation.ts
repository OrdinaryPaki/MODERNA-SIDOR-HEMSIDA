export const navItems = [
  { label: "Start", href: "/hemsida-1" },
  { label: "Om oss", href: "/hemsida-1/about" },
  { label: "Lösningar", href: "/hemsida-1/solutions" },
  { label: "Karriär", href: "/hemsida-1/careers" },
  { label: "Kontakt", href: "/hemsida-1/contact" },
] as const;

export const socialItems = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
] as const;

export const navHref = {
  home: "/hemsida-1",
  about: "/hemsida-1/about",
  solutions: "/hemsida-1/solutions",
  careers: "/hemsida-1/careers",
  contact: "/hemsida-1/contact",
} as const;

export function solutionDetailHref(slug: string) {
  return `/hemsida-1/solutions/${slug}`;
}

export const siteCopy = {
  brand: "Moderna Sidor",
  search: "Sök",
  primaryCta: "Se lösningar",
  contactCta: "Boka ett samtal",
  footerHeadline: "Bygg ett system runt ert arbetssätt.",
  footerBody:
    "Berätta hur era flöden ser ut. Vi hjälper er se vilken digital struktur som behöver finnas bakom — och bygger systemet som samlar arbetet i en tydligare helhet.",
  footerLink: "Boka ett samtal",
  footerBrand: "Moderna Sidor",
  footerTagline:
    "Skräddarsydda digitala system för organisationer som vill skapa mer struktur, kontroll och sammanhang i sitt arbete.",
  pagesHeading: "Sidor",
  socialsHeading: "Socialt",
} as const;
