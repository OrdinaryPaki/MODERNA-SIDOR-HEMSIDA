import type { Metadata } from "next";
import { FigmaPage } from "../_figma-pages/FigmaPage";
import { aboutPage } from "../_figma-pages/pages";

export const metadata: Metadata = {
  title: "Om oss - Moderna Sidor",
};

export default function AboutPage() {
  return <FigmaPage data={aboutPage} />;
}
