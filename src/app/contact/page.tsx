import { ContactSections } from "@/components/unique/contact-sections";
import { StructuredData } from "@/components/shared/structured-data";
import { createPageMetadata } from "@/lib/seo";
import { createPageStructuredData } from "@/lib/structured-data";

export const metadata = createPageMetadata("contact");

export default function ContactPage() {
  return <><StructuredData data={createPageStructuredData("contact")} /><ContactSections /></>;
}
