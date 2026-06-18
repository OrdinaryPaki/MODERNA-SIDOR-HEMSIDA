import { readFileSync } from "node:fs";

const files = {
  hero: readFileSync("src/components/Hero.tsx", "utf8"),
  header: readFileSync("src/components/SiteHeader.tsx", "utf8"),
  page: readFileSync("src/app/page.tsx", "utf8"),
  pricing: readFileSync("src/components/sections/Pricing.tsx", "utf8"),
  blog: readFileSync("src/components/sections/Blog.tsx", "utf8"),
  faq: readFileSync("src/components/sections/Faq.tsx", "utf8"),
  footer: readFileSync("src/components/sections/Footer.tsx", "utf8"),
  contact: readFileSync("src/components/sections/Contact.tsx", "utf8"),
  testimonials: readFileSync("src/components/sections/Testimonials.tsx", "utf8"),
};

const checks = [
  {
    name: "home mobile nav stays fixed after hero outside clipped hero",
    pass:
      files.page.includes('import SiteHeader from "@/components/SiteHeader"') &&
      files.page.includes('<SiteHeader tone="dark" mobileFixed revealAfterHero />') &&
      files.header.includes("fixed inset-x-0 top-0") &&
      files.header.includes("mobileFixed") &&
      files.header.includes("revealAfterHero") &&
      files.header.includes("isPastHero") &&
      files.header.includes('tone === "light" && !isPastHero'),
  },
  {
    name: "hero keeps mobile header flow spacer",
    pass: files.hero.includes("hero-nav-enter relative z-20 h-11 sm:h-auto"),
  },
  {
    name: "pricing mobile top and total height match reference",
    pass:
      files.pricing.includes("pt-[60px]") &&
      files.pricing.includes("pb-[78px]") &&
      files.pricing.includes("sm:pb-[47px]") &&
      files.pricing.includes("sm:pt-20"),
  },
  {
    name: "latest insights mobile top and section height match reference",
    pass:
      files.blog.includes("pt-[60px]") &&
      files.blog.includes("pb-[69px]") &&
      files.blog.includes("sm:pb-[89px]") &&
      files.blog.includes("sm:pt-[71px]"),
  },
  {
    name: "faq mobile list starts at reference y-position",
    pass:
      files.faq.includes("pt-[60px]") &&
      files.faq.includes("pb-[60px]") &&
      files.faq.includes("sm:pb-[55px]") &&
      files.faq.includes("sm:pt-[121px]"),
  },
  {
    name: "faq mobile questions keep Nori one-line width",
    pass: files.faq.includes("text-[14.5px]"),
  },
  {
    name: "contact mobile intro uses Nori narrow text column",
    pass:
      files.contact.includes("max-w-[288px]") &&
      !files.contact.includes("mt-[19px] max-w-[353px]"),
  },
  {
    name: "merged footer still draws Nori separator line",
    pass:
      !files.footer.includes("mergeWithPrevious ? null") &&
      files.footer.includes('className="h-px bg-[#f0f5f9]/12"'),
  },
  {
    name: "footer uses Nori full-width outer wrapper",
    pass:
      files.footer.includes('className="mx-auto w-full max-w-[1856px]"') &&
      !files.footer.includes('className="mx-auto max-w-[1376px]"'),
  },
  {
    name: "footer bottom details match Nori reference items",
    pass:
      !files.footer.includes("Framer template created by Lazar Filipovic") &&
      files.footer.includes("Privacy policy") &&
      files.footer.includes("Terms of Service") &&
      files.footer.includes("© 2026 Nori. All rights reserved."),
  },
  {
    name: "client results headline uses wide-desktop Framer-like fit clamp",
    pass:
      files.testimonials.includes("sm:text-[clamp(5rem,14.2vw,11.75rem)]") &&
      files.testimonials.includes("lg:text-[clamp(11.75rem,12.5vw,16rem)]"),
  },
];

const failed = checks.filter((check) => !check.pass);

if (failed.length > 0) {
  console.error("Lower-section verification failed:");
  for (const check of failed) {
    console.error(`- ${check.name}`);
  }
  process.exit(1);
}

console.log(`Lower-section verification passed (${checks.length} checks).`);
