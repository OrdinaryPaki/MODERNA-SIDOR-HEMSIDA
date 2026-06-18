import SiteHeader from "@/components/SiteHeader";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import type { LegalPageContent } from "@/lib/legal";
import type { CSSProperties } from "react";

function LegalListItem({ item }: { item: string }) {
  const labelSeparator = item.indexOf(": ");

  if (labelSeparator === -1) {
    return item;
  }

  return (
    <>
      <strong>{item.slice(0, labelSeparator)}</strong>
      {item.slice(labelSeparator)}
    </>
  );
}

export default function LegalPage({ content }: { content: LegalPageContent }) {
  return (
    <main className="flex-1 bg-background">
      <SiteHeader />

      <section
        className="px-5 pb-[var(--legal-mobile-bottom)] sm:px-8 lg:pb-[var(--legal-desktop-bottom)]"
        style={
          {
            "--legal-mobile-bottom": `${content.mobilePageBottomPadding ?? content.pageBottomPadding ?? 96}px`,
            "--legal-desktop-bottom": `${content.pageBottomPadding ?? 96}px`,
          } as CSSProperties
        }
      >
        <div
          className="mx-auto max-w-[1000px] pt-[var(--legal-mobile-top)] lg:pt-[72px]"
          style={
            {
              "--legal-mobile-top": `${content.mobileTopPadding ?? 44}px`,
            } as CSSProperties
          }
        >
          <h1
            className="font-display text-[40px] font-medium uppercase leading-[1.1] tracking-[-0.04em] text-[#061218] lg:text-[88px] lg:leading-[1.1]"
            style={{ maxWidth: content.titleWidth }}
          >
            {content.title}
          </h1>
          <p className="mt-4 w-[99px] text-xl leading-[1.3] tracking-[-0.03em] text-[#061218]/78 lg:w-[124px] max-lg:text-base">
            {`Last updated: (${content.updated})`}
          </p>

          <div
            className="mt-[56px] flex flex-col gap-[var(--legal-mobile-section-gap)] lg:gap-[var(--legal-desktop-section-gap)]"
            style={
              {
                "--legal-mobile-section-gap": `${content.mobileSectionGap ?? 38}px`,
                "--legal-desktop-section-gap": `${content.desktopSectionGap ?? 38}px`,
              } as CSSProperties
            }
          >
            {content.sections.map((section) => (
              <section
                key={section.title}
                className="mb-[var(--legal-section-mobile-offset)] lg:mb-0"
                style={
                  {
                    "--legal-section-mobile-offset": `${section.mobileBottomOffset ?? 0}px`,
                  } as CSSProperties
                }
              >
                <h3 className="font-display text-[36px] font-medium leading-[1.4] tracking-[-0.04em] text-[#061218] max-lg:text-2xl">
                  {section.title}
                </h3>
                <div
                  className={`flex flex-col text-xl leading-[1.3] tracking-[-0.03em] text-[#061218] max-lg:text-base ${
                    section.body ? "mt-5 max-lg:mt-4" : "mt-0"
                  }`}
                >
                  {section.body?.map((paragraph) => (
                    <p key={paragraph} className="whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                  {section.contact && (
                    <p className="whitespace-pre-line">
                      <strong>{section.contact.label}</strong>
                      <br />
                      <a href={section.contact.emailHref} className="underline">
                        {section.contact.email}
                      </a>
                      <br />
                      <a href={section.contact.phoneHref} className="underline">
                        {section.contact.phone}
                      </a>
                    </p>
                  )}
                  {section.items && (
                    <ul className="list-inside list-disc">
                      {section.items.map((item) => (
                        <li key={item}>
                          <LegalListItem item={item} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <Contact compact />
      <Footer mergeWithPrevious />
    </main>
  );
}
