export const navItems = [
  { label: "Start", href: "/" },
  { label: "Om oss", href: "/about" },
  { label: "Lösningar", href: "/solutions" },
  { label: "Karriär", href: "/careers" },
  { label: "Kontakt", href: "/contact" },
] as const;

export const socialItems = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
] as const;

export const navHref = {
  home: "/",
  about: "/about",
  solutions: "/solutions",
  careers: "/careers",
  contact: "/contact",
} as const;

export function solutionDetailHref(slug: string) {
  return `/solutions/${slug}`;
}

export const siteCopy = {
  brand: "Moderna Sidor",
  search: "Sök",
  primaryCta: "Se projekt",
  contactCta: "Boka ett samtal",
  footerHeadline: "Berätta om er verksamhet.",
  footerBody:
    "Ett första samtal handlar om hur ni arbetar i dag och vad ett system skulle behöva innehålla. Utifrån det tar vi fram ett förslag.",
  footerLink: "Prata med en rådgivare",
  footerBrand: "Moderna Sidor",
  footerTagline:
    "Anpassade system för företag, utvecklade från grunden.",
  pagesHeading: "Sidor",
  socialsHeading: "Socialt",
} as const;
