"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Vad bygger Moderna Sidor?",
    a: "Vi bygger digitala system för företag där arbetet behöver mer än ett färdigt verktyg.",
  },
  {
    q: "Är ni en webbyrå?",
    a: "Inte i första hand. En hemsida kan ingå, men vårt fokus är system, portaler, AI-flöden och digitala produkter.",
  },
  {
    q: "Kan ni bygga med AI?",
    a: "Ja, när AI gör arbetet tydligare eller snabbare. Till exempel i offerter, dokument, sök, analys eller interna flöden.",
  },
  {
    q: "Hur börjar ett projekt?",
    a: "Med ett samtal om hur arbetet ser ut idag, vad som tar tid och vad systemet behöver hålla ihop.",
  },
  {
    q: "Arbetar ni med färdiga paket?",
    a: "Nej. Varje lösning formas efter verksamheten, omfattningen och vad som faktiskt ska fungera i vardagen.",
  },
  {
    q: "Kan systemet växa över tid?",
    a: "Ja. Vi bygger med vidareutveckling i åtanke, så systemet kan växa när verksamheten gör det.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background px-5 pb-[60px] pt-[60px] sm:px-8 sm:pb-[55px] sm:pt-[121px]">
      <div className="grid gap-[66px] lg:grid-cols-2 lg:gap-6">
        <div>
          <p className="w-fit font-mono text-base font-medium leading-[1.3] tracking-[-0.02em] text-[#1f75b2] sm:text-[20px]">
            {"//010 Frågor"}
          </p>
          <h2 className="mt-3 max-w-[353px] text-[46px] font-medium uppercase leading-[0.96] tracking-[-0.06em] sm:max-w-[554px] sm:text-[clamp(2.75rem,5.3125vw,4.25rem)] sm:leading-[1.1] sm:tracking-[-0.04em]">
            Vanliga frågor
          </h2>
          <p className="mt-3 max-w-[353px] text-[16px] leading-[1.38] tracking-[-0.03em] text-[#061218] sm:mt-5 sm:max-w-[410px] sm:text-xl sm:leading-[1.3] sm:tracking-[-0.04em]">
            Några enkla svar innan vi börjar prata om teknik, scope och nästa
            steg.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-flex h-11 w-[171px] items-center justify-center rounded-[4px] bg-[#1f75b2] text-[15px] font-medium leading-[1.3] tracking-[-0.03em] text-white transition-colors hover:bg-[#1b679d] sm:mt-5 sm:h-[45px] sm:text-base"
          >
            Kontakt
          </a>
        </div>

        <div className="flex flex-col gap-3 lg:gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={faq.q}
                className="rounded-lg bg-white py-4 pl-[18px] pr-3 shadow-[0_0_0_1px_rgba(6,18,24,0.03)] sm:py-5"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left text-[#061218]"
                >
                  <span className="text-[14.5px] font-medium leading-[1.24] tracking-[-0.03em] sm:text-xl sm:leading-[1.3]">
                    {faq.q}
                  </span>
                  <span
                    aria-hidden
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f0f5f9] text-[20px] font-light leading-none text-[#1f75b2] transition-colors sm:h-7 sm:w-7 sm:text-[22px]"
                  >
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="mt-3 max-w-[620px] text-[14px] leading-[1.4] tracking-[-0.03em] text-[#061218]/70 sm:mt-4 sm:text-[17px] sm:leading-[1.38]"
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
