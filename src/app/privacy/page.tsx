import { createPageMetadata } from "@/lib/seo";
import { LegalTemplate } from "@/components/unique/legal-template";
import { privacyPolicy } from "@/data/legal";

export const metadata = createPageMetadata("privacy");

export default function PrivacyPage() {
  return <LegalTemplate document={privacyPolicy} />;
}
