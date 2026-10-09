import { createPageMetadata } from "@/lib/seo";
import { LegalTemplate } from "@/components/unique/legal-template";
import { termsOfService } from "@/data/legal";

export const metadata = createPageMetadata("terms");

export default function TermsPage() {
  return <LegalTemplate document={termsOfService} />;
}
