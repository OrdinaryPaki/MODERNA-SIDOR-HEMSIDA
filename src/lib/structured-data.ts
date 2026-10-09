import { contactEmail } from "@/data/unique-contact";
import { publicPages, site, siteUrl } from "./seo";

export function createPageStructuredData(page: "home" | "contact") {
  const { path, title, description } = publicPages[page];
  const organizationId = siteUrl("/#organization");
  const websiteId = siteUrl("/#website");
  const url = siteUrl(path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: site.name,
        url: siteUrl("/"),
        logo: siteUrl(site.logo),
        email: contactEmail,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: site.name,
        url: siteUrl("/"),
        inLanguage: "sv-SE",
        publisher: { "@id": organizationId },
      },
      {
        "@type": page === "contact" ? "ContactPage" : "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: "sv-SE",
        isPartOf: { "@id": websiteId },
        about: { "@id": organizationId },
      },
    ],
  };
}
