import type { Metadata } from "next";
import { FigmaPage } from "../_figma-pages/FigmaPage";
import { lunaPage } from "../_figma-pages/pages";

export const metadata: Metadata = {
  title: "Balko.ai - Moderna Sidor",
};

export default function LunaAiPage() {
  return <FigmaPage data={lunaPage} />;
}
