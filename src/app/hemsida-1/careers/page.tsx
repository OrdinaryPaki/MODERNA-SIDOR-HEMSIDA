import type { Metadata } from "next";
import { FigmaPage } from "../_figma-pages/FigmaPage";
import { careersPage } from "../_figma-pages/pages";

export const metadata: Metadata = {
  title: "Process - Moderna Sidor",
};

export default function CareersPage() {
  return <FigmaPage data={careersPage} />;
}
