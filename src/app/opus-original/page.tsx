import { notFound } from "next/navigation";
import { previewPagesEnabled } from "@/lib/preview-visibility";
import type { Metadata } from "next";
import { OriginalOpusHero } from "@/components/home/original-opus-hero";
import { HomeContent } from "@/components/home/home-content";

export const metadata: Metadata = {
  title: "Designförhandsvisning | Moderna Sidor",
  description: "Förhandsvisning av Moderna Sidors alternativa startsida.",
};

export default function OpusOriginalPage() {
  if (!previewPagesEnabled) notFound();
  return (
    <>
      <OriginalOpusHero />
      <HomeContent />
    </>
  );
}
