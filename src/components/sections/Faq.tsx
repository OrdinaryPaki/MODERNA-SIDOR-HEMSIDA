"use client";

import { useState } from "react";

const faqs = [
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
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#f0f5f9] px-8 py-20 text-[#061218]">
      <div className="mx-auto flex max-w-[1439px] flex-col gap-0 lg:flex-row">
        {/* Left: heading */}
        <div className="flex w-full max-w-[707px] flex-col gap-3">
          <span className="font-mono text-[20px] font-medium leading-[26px] tracking-[-0.4px] text-[#1f75b2]">
            //010 FAQ
          </span>
          <div className="flex flex-col gap-4">
            <p className="max-w-[554px] text-[68px] font-medium uppercase leading-[74.8px] tracking-[-2.72px]">
              Questions we often get
            </p>
            <p className="max-w-[420px] text-[20px] leading-[26px] tracking-[-0.6px] opacity-70">
              Every project timeline is confirmed during onboarding, so you
              always know what to expect.
            </p>
            <a
              href="#kontakt"
              className="mt-2 inline-flex h-[45px] w-fit items-center justify-center rounded-[4px] bg-[#1f75b2] px-6"
            >
              <span className="text-[16px] font-medium leading-[20.8px] tracking-[-0.48px] text-white">
                Start your project
              </span>
            </a>
          </div>
        </div>

        {/* Right: accordion */}
        <div className="mt-8 flex w-full max-w-[707px] flex-col gap-4 lg:mt-0">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="rounded-[8px] bg-white">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-5 py-5 pl-[18px] pr-3 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[20px] font-medium leading-[26px] tracking-[-0.6px]">
                    {item.q}
                  </span>
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#f0f5f9]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      aria-hidden
                    >
                      <rect
                        x="6"
                        y="1"
                        width="2"
                        height="12"
                        rx="1"
                        fill="#1f75b2"
                        className={`origin-center transition-transform duration-300 ${
                          isOpen ? "scale-y-0" : "scale-y-100"
                        }`}
                      />
                      <rect
                        x="1"
                        y="6"
                        width="12"
                        height="2"
                        rx="1"
                        fill="#1f75b2"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[400px] pb-5 pl-[18px] pr-11 text-[16px] leading-[20.8px] tracking-[-0.48px] opacity-70">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
