import type { Metadata } from "next";
import OurWorkPage from "@/components/pages/OurWorkPage";

export const metadata: Metadata = {
  title: "Portfolio Showcase – Nori Studio Framer Template for Agencies",
  description:
    "Nori Studio’s Framer templates showcase modern agency portfolios. Explore creative website designs built for agencies, freelancers, and studios.",
};

export default function Page() {
  return <OurWorkPage />;
}
