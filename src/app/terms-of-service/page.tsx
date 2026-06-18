import type { Metadata } from "next";
import LegalPage from "@/components/pages/LegalPage";
import { termsOfService } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service – Nori Studio Framer Website Template",
  description:
    "Review the terms of service for Nori Studio, a Framer template for agencies, studios, and freelancers. Understand licensing and usage rights.",
};

export default function Page() {
  return <LegalPage content={termsOfService} />;
}
