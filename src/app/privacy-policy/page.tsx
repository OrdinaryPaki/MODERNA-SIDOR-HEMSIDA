import type { Metadata } from "next";
import LegalPage from "@/components/pages/LegalPage";
import { privacyPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy – Nori Studio Framer Template",
  description:
    "Read the privacy policy for Nori Studio, the Framer website template for agencies, freelancers, and studios. Learn how your data is protected.",
};

export default function Page() {
  return <LegalPage content={privacyPolicy} />;
}
