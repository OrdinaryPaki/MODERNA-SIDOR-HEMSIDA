const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "Most brand projects take 4-6 weeks, websites take 6-8 weeks, and marketing campaigns launch within 2-3 weeks.",
  },
  {
    q: "What does your process look like?",
    a: "We usually start with a discovery call to understand your goals. Then we move into strategy and initial concepts, refine them through feedback rounds, and deliver a polished final product. Every step is transparent so you always know where we are in the process.",
  },
  {
    q: "What's included in ongoing support?",
    a: "All projects include 30 days of support post-launch, including updates and technical assistance.",
  },
  {
    q: "How much should I budget for a project?",
    a: "Projects typically range from $8,000 to $25,000 depending on scope. We provide detailed quotes after discovery calls.",
  },
  {
    q: "What if I'm not happy with initial concepts?",
    a: "We include revision rounds in every project and won't proceed until you're satisfied with the direction.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes, most projects can be split into 2-3 payments aligned with project milestones.",
  },
];

export default function Faq() {
  return (
    <section className="bg-background px-5 pb-[60px] pt-[60px] sm:px-8 sm:pb-[55px] sm:pt-[121px]">
      <div className="grid gap-[66px] lg:grid-cols-2 lg:gap-6">
        <div>
          <p className="w-fit font-mono text-base font-medium leading-[1.3] tracking-[-0.02em] text-[#1f75b2] sm:text-[20px]">
            {"//010 FAQ"}
          </p>
          <h2 className="mt-3 max-w-[353px] text-[46px] font-medium uppercase leading-[0.96] tracking-[-0.06em] sm:max-w-[554px] sm:text-[clamp(2.75rem,5.3125vw,4.25rem)] sm:leading-[1.1] sm:tracking-[-0.04em]">
            Questions we often get
          </h2>
          <p className="mt-3 max-w-[353px] text-[16px] leading-[1.38] tracking-[-0.03em] text-[#061218] sm:mt-5 sm:max-w-[410px] sm:text-xl sm:leading-[1.3] sm:tracking-[-0.04em]">
            Every project timeline is confirmed during onboarding, so you
            always know what to expect.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-flex h-11 w-[171px] items-center justify-center rounded-[4px] bg-[#1f75b2] text-[15px] font-medium leading-[1.3] tracking-[-0.03em] text-white transition-colors hover:bg-[#1b679d] sm:mt-5 sm:h-[45px] sm:text-base"
          >
            Start your project
          </a>
        </div>

        <div className="flex flex-col gap-3 lg:gap-4">
          {FAQS.map((faq) => (
            <div
              key={faq.q}
              className="rounded-lg bg-white py-4 pl-[18px] pr-3 shadow-[0_0_0_1px_rgba(6,18,24,0.03)] sm:py-5"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-[14.5px] font-medium leading-[1.24] tracking-[-0.03em] sm:text-xl sm:leading-[1.3]">
                  {faq.q}
                </p>
                <span
                  aria-hidden
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f0f5f9] text-[20px] font-light leading-none text-[#1f75b2] sm:h-7 sm:w-7 sm:text-[22px]"
                >
                  +
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
