import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact – Nori Studio Framer Template Support",
  description:
    "Have questions about Nori Studio? Get support, customization info, or help with your Framer template purchase. Contact us today.ons.",
};

export default function Page() {
  return <ContactPage />;
}
