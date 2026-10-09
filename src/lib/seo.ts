import type { Metadata } from "next";

export const site = {
  name: "Moderna Sidor",
  url: "https://modernasidor.se",
  logo: "/brand/moderna-sidor-navigation-inter.png",
} as const;

export const publicPages = {
  home: {
    lastModified: "2026-10-07",
    path: "/",
    title: "Moderna Sidor | Systemutveckling & digital transformation",
    description: "Vi utvecklar verksamhetskritiska system, integrerar plattformar och automatiserar processer. Moderna Sidor är er partner för långsiktig digital utveckling.",
  },
  contact: {
    lastModified: "2026-10-07",
    path: "/contact",
    title: "Kontakta Moderna Sidor | Er nästa digitala satsning",
    description: "För en dialog med Moderna Sidor om systemutveckling, integrationer och AI. Vi utgår från verksamhetens mål, befintliga teknik och långsiktiga behov.",
  },
  privacy: {
    lastModified: "2026-10-07",
    path: "/privacy",
    title: "Integritetspolicy | Moderna Sidor",
    description: "Så hanterar Moderna Sidor personuppgifter, cookies och besöksstatistik. Läs om dina rättigheter och hur du kontaktar oss.",
  },
  terms: {
    lastModified: "2026-10-07",
    path: "/terms",
    title: "Allmänna villkor | Moderna Sidor",
    description: "Övergripande villkor för Moderna Sidors uppdrag och tjänster till företag och organisationer. Läs om avtal, samarbete, rättigheter och ansvar.",
  },
} as const;

// Vercel previews and explicitly marked staging builds must not be indexed.
// This is evaluated at build time; SITE_NOINDEX also supports other hosts.
export const indexingEnabled = process.env.NODE_ENV === "production"
  && (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production")
  && process.env.SITE_NOINDEX !== "true";

export const noIndex: Metadata["robots"] = { index: false, follow: true };

export function siteUrl(path: string): string {
  return new URL(path, site.url).href;
}

export function createPageMetadata(page: keyof typeof publicPages): Metadata {
  const { path, title, description } = publicPages[page];
  const image = {
    url: siteUrl(site.logo),
    width: 1774,
    height: 887,
    alt: site.name,
  };

  return {
    title,
    description,
    alternates: { canonical: siteUrl(path) },
    robots: indexingEnabled
      ? { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 }
      : noIndex,
    openGraph: {
      type: "website",
      locale: "sv_SE",
      siteName: site.name,
      title,
      description,
      url: siteUrl(path),
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
