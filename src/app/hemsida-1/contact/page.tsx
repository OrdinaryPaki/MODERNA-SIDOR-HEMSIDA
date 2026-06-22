import type { Metadata } from "next";
import { FigmaPage } from "../_figma-pages/FigmaPage";
import { contactPage } from "../_figma-pages/pages";

export const metadata: Metadata = {
  title: "Kontakt - Moderna Sidor",
};

export default function ContactPage() {
  return <FigmaPage data={contactPage} />;
}
