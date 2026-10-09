import type { Metadata } from "next";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { MotionObserver } from "@/components/shared/motion-observer";
import { noIndex, publicPages, site } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: site.name,
  description: publicPages.home.description,
  // Only complete pages explicitly opt into indexing via createPageMetadata.
  robots: noIndex,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="sv"><body><noscript><style>{`[data-reveal], .reveal-word { opacity: 1 !important; transform: none !important; filter: none !important; }`}</style></noscript><SiteHeader /><main>{children}</main><SiteFooter /><MotionObserver /></body></html>;
}
