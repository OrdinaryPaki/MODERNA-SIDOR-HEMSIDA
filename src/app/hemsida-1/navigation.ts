export const navItems = [
  { label: "Start", href: "/hemsida-1" },
  { label: "Om oss", href: "/hemsida-1/about" },
  { label: "Lösningar", href: "/hemsida-1/solutions" },
  { label: "Karriär", href: "/hemsida-1/careers" },
  { label: "Kontakt", href: "/hemsida-1/contact" },
] as const;

export const socialItems = [
  { label: "Twitter", href: "#" },
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
