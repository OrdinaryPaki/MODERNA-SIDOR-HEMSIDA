import type { Metadata } from "next";
import { FigmaPage } from "../_figma-pages/FigmaPage";
import { solutionsPage } from "../_figma-pages/pages";

export const metadata: Metadata = {
  title: "Case - Moderna Sidor",
};

export default function SolutionsPage() {
  return <FigmaPage data={solutionsPage} />;
}
