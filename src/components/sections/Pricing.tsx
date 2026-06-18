import SectionLabel from "./SectionLabel";

const PLANS = [
  {
    name: "Essential Plan",
    description: "For Startups, new businesses, single location companies",
    project: "$3499",
    monthly: "$0",
    popular: false,
    features: [
      "Brand identity design",
      "Basic website (5 pages)",
      "Social media templates",
      "Monthly strategy session",
      "Project kickoff workshop",
      "2 revision rounds per month",
    ],
    delivery: "Delivery time: 3-4 weeks",
  },
  {
    name: "Professional Plan",
    description: "Best for growing businesses ready to scale",
    project: "$6499",
    monthly: "$0",
    popular: true,
    features: [
      "Advanced brand identity system",
      "Custom website (up to 10 pages)",
      "Digital marketing strategy",
      "Monthly strategy session",
      "Unlimited revisions",
      "SEO optimization",
    ],
    delivery: "Delivery time: 6-8 weeks",
  },
  {
    name: "Premium Plan",
    description: "For companies serious about market leadership",
    project: "$11999",
    monthly: "$0",
    popular: false,
    features: [
      "Complete brand ecosystem",
      "Enterprise web platform",
      "Comprehensive marketing system",
      "12 months partnership support",
      "Dedicated account manager",
      "Quarterly strategy reviews",
    ],
    delivery: "Delivery time: 8-12 weeks",
  },
];

export default function Pricing() {
  return (
    <section id="priser" className="bg-background px-5 pb-[78px] pt-[60px] sm:px-8 sm:pb-[47px] sm:pt-20">
      <style>{`
        #priser .monthly-price { display: none; }
        #priser .billing-project-label { background: #f0f5f9; color: #2280c2; }
        #priser .billing-monthly-label { color: #f0f5f9; }
        #priser:has(#billing-monthly:checked) .project-price { display: none; }
        #priser:has(#billing-monthly:checked) .monthly-price { display: inline; }
        #priser:has(#billing-monthly:checked) .billing-project-label {
          background: transparent;
          color: #f0f5f9;
        }
        #priser:has(#billing-monthly:checked) .billing-monthly-label {
          background: #f0f5f9;
          color: #2280c2;
        }
      `}</style>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <div>
          <SectionLabel>{"//07 Pricing"}</SectionLabel>
          <h2 className="mt-3 max-w-[353px] text-[46px] font-medium uppercase leading-[0.96] tracking-[-0.06em] sm:max-w-[600px] sm:text-[clamp(3rem,6.875vw,5.5rem)] sm:leading-[1.1] sm:tracking-[-0.04em]">
            Clear and simple plans
          </h2>
        </div>

        <div className="flex w-full max-w-[353px] flex-col items-start gap-5 lg:mt-[111px] lg:max-w-[324px] lg:gap-6">
          <p className="text-[17px] leading-[1.42] tracking-[-0.03em] text-[#061218] sm:text-xl sm:leading-[1.3] sm:tracking-[-0.04em]">
            Pick a plan that fits your needs, with fair prices and no hidden
            surprises.
          </p>
          <fieldset className="inline-flex self-start rounded-lg bg-[#2280c2] p-1">
            <legend className="sr-only">Billing period</legend>
            <input
              id="billing-project"
              name="billing-period"
              type="radio"
              defaultChecked
              className="sr-only"
            />
            <label
              htmlFor="billing-project"
              className="billing-project-label flex h-10 cursor-pointer items-center rounded-[4px] px-4 text-sm font-semibold transition-colors"
            >
              Per project
            </label>
            <input
              id="billing-monthly"
              name="billing-period"
              type="radio"
              className="sr-only"
            />
            <label
              htmlFor="billing-monthly"
              className="billing-monthly-label flex h-10 cursor-pointer items-center rounded-[4px] px-4 text-sm font-semibold transition-colors"
            >
              Monthly
            </label>
          </fieldset>
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
                Most chosen
              </p>
            )}
            <p className="text-[20px] font-semibold leading-tight tracking-[-0.04em] sm:text-[clamp(1.75rem,2.5vw,2rem)]">
              {plan.name}
            </p>
            <p className="mt-3 max-w-[260px] text-[15px] leading-6 text-[#061218]/70 sm:mt-4 sm:max-w-[230px] sm:text-base">
              {plan.description}
            </p>

            <div className="mt-7 flex items-end gap-2 sm:mt-9">
              <p className="project-price font-[family-name:var(--font-switzer)] text-[64px] font-normal leading-none tracking-[-0.065em] [font-feature-settings:'tnum'] sm:text-[clamp(4rem,5.8vw,5rem)]">
                {plan.project}
              </p>
              <p className="monthly-price font-[family-name:var(--font-switzer)] text-[64px] font-normal leading-none tracking-[-0.065em] [font-feature-settings:'tnum'] sm:text-[clamp(4rem,5.8vw,5rem)]">
                {plan.monthly}
              </p>
              <p className="project-price mb-2 text-sm text-[#061218]/70">
                /per project
              </p>
              <p className="monthly-price mb-2 text-sm text-[#061218]/70">
                /monthly
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
              Choose this plan
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
