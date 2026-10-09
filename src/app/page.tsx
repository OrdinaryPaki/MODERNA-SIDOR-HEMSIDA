import { HomeHero } from "@/components/home/home-hero";
import { HomeContent } from "@/components/home/home-content";
import { StructuredData } from "@/components/shared/structured-data";
import { createPageMetadata } from "@/lib/seo";
import { createPageStructuredData } from "@/lib/structured-data";

export const metadata = createPageMetadata("home");

export default function Home() {
  return (
    <>
      <StructuredData data={createPageStructuredData("home")} />
      <HomeContent hero={<HomeHero />} />
    </>
  );
}
