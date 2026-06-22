import SectionLabel from "./SectionLabel";

const PLANS = [
  {
    name: "Förstudie",
    description: "Vi lär känna arbetet, människorna, datan och det som skaver.",
    project: "01",
    monthly: "$0",
    popular: false,
    features: [
      "Nuläge",
      "Roller",
      "Flöden",
      "Data",
      "Risker",
      "Målbild",
    ],
    delivery: "Resultat: vi vet vad som ska byggas",
  },
  {
    name: "Design och kod",
    description: "Vi formar systemet i delar som går att förstå, testa och förbättra.",
    project: "02",
    monthly: "$0",
    popular: true,
    features: [
      "Struktur",
      "Gränssnitt",
      "Datamodell",
      "Integrationer",
      "Testning",
      "Lansering",
    ],
    delivery: "Resultat: systemet fungerar i praktiken",
  },
  {
    name: "Drift",
    description: "När systemet används fortsätter vi göra det stabilare, tydligare och bättre.",
    project: "03",
    monthly: "$0",
    popular: false,
    features: [
      "Lansering",
      "Övervakning",
      "Justeringar",
      "Support",
      "Vidareutveckling",
      "Säkerhet",
      "Skalning",
    ],
    delivery: "Resultat: systemet lever vidare",
  },
];

export default function Pricing() {
  return (
    <section id="priser" className="bg-background px-5 pb-[78px] pt-[60px] sm:px-8 sm:pb-[47px] sm:pt-20">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <div>
          <SectionLabel>{"//07 Process"}</SectionLabel>
          <h2 className="mt-3 max-w-[353px] text-[46px] font-medium uppercase leading-[0.96] tracking-[-0.06em] sm:max-w-[600px] sm:text-[clamp(3rem,6.875vw,5.5rem)] sm:leading-[1.1] sm:tracking-[-0.04em]">
            Så arbetet går till
          </h2>
        </div>

        <div className="flex w-full max-w-[353px] flex-col items-start gap-5 lg:mt-[111px] lg:max-w-[324px] lg:gap-6">
          <p className="text-[17px] leading-[1.42] tracking-[-0.03em] text-[#061218] sm:text-xl sm:leading-[1.3] sm:tracking-[-0.04em]">
            Vi håller processen enkel. Förstå först, bygga sedan och förvalta
            när systemet möter verklig användning.
          </p>
        </div>
      </div>

      <div className="mt-12 grid items-start gap-4 sm:mt-[146px] sm:gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <article
            key={plan.name}
            className={`flex flex-col rounded-lg bg-white p-6 ${
              plan.popular
                ? "min-h-[655px] sm:-translate-y-[61px]"
                : "min-h-[614px]"
            }`}
          >
            {plan.popular && (
              <p className="mb-4 self-start rounded-[4px] bg-[#2280c2] px-3 py-2 text-sm font-medium text-white">
                Kärnarbete
              </p>
            )}
            <p className="text-[20px] font-semibold leading-tight tracking-[-0.04em] sm:text-[clamp(1.75rem,2.5vw,2rem)]">
              {plan.name}
            </p>
            <p className="mt-3 max-w-[260px] text-[15px] leading-6 text-[#061218]/70 sm:mt-4 sm:max-w-[230px] sm:text-base">
              {plan.description}
            </p>

            <div className="mt-7 flex items-end gap-2 sm:mt-9">
              <p className="font-[family-name:var(--font-switzer)] text-[64px] font-normal leading-none tracking-[-0.065em] [font-feature-settings:'tnum'] sm:text-[clamp(4rem,5.8vw,5rem)]">
                {plan.project}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:gap-3">
              {plan.features.map((feature) => (
                <p key={feature} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className={`mt-2 h-2 w-2 shrink-0 rounded-full ${
                      plan.popular ? "bg-[#2280c2]" : "bg-[#061218]"
                    }`}
                  />
                  <span className="text-[15px] leading-6 text-[#061218]/70 sm:text-base">
                    {feature}
                  </span>
                </p>
              ))}
            </div>

            <a
              href="/contact"
              className="mt-auto inline-flex h-14 items-center justify-center rounded-[4px] bg-[#1f75b2] text-lg font-semibold text-white transition-colors hover:bg-[#1b679d]"
            >
              Kontakt
            </a>
            <p className="mt-3 text-center text-xs text-[#061218]/70 sm:mt-4">
              {plan.delivery}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
