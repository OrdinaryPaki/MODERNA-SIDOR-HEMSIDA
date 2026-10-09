import type { MetadataRoute } from "next";
import { indexingEnabled, siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  if (!indexingEnabled) return { rules: { userAgent: "*", disallow: "/" } };

  // Let crawlers read noindex on template/preview pages instead of blocking them.
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: siteUrl("/sitemap.xml"),
  };
}
