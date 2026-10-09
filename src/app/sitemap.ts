import type { MetadataRoute } from "next";
import { indexingEnabled, publicPages, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexingEnabled) return [];
  return Object.values(publicPages).map(({ path, lastModified }) => ({ url: siteUrl(path), lastModified }));
}
