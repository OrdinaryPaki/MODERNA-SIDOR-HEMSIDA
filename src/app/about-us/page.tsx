import type { Metadata } from "next";
import AboutUsPage from "@/components/pages/AboutUsPage";

export const metadata: Metadata = {
  title: "About Nori Studio – Premium Framer Website Template",
  description:
    "Learn about Nori Studio, creators of premium Framer templates for agencies, freelancers, and studios. Building modern, stylish websites with impact.",
};

export default function Page() {
  return <AboutUsPage />;
}
