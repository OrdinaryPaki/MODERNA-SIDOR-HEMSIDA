import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/sections/Footer";

const FIELDS = [
  { id: "name", label: "Name", type: "text", placeholder: "Jane Smith" },
  { id: "email", label: "Email", type: "email", placeholder: "jane@framer.com" },
  { id: "company", label: "Company", type: "text", placeholder: "Your company" },
] as const;

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

function ContactIcon({ type }: { type: "mail" | "phone" }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px] text-[#2280c2]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {type === "mail" ? (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </>
      ) : (
        <path d="M6.6 4.8 9 4.2l2 4.2-1.4 1.2a12 12 0 0 0 4.8 4.8l1.2-1.4 4.2 2-.6 2.4c-.2.8-.9 1.4-1.8 1.3C10 18.3 5.7 14 5.3 6.6c-.1-.9.5-1.6 1.3-1.8Z" />
      )}
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="flex-1 bg-background">
      <SiteHeader />

      <section className="mt-9 px-5 pb-0 sm:mt-8 sm:px-8">
        <div className="mx-auto w-full max-w-[1840px]">
          <div className="grid gap-[39px] pt-[60px] lg:grid-cols-2 lg:gap-6 lg:pt-20">
            <div className="max-w-[500px]">
              <p className="w-fit font-mono text-base font-medium leading-[1.3] tracking-[-0.02em] text-[#1f75b2] lg:text-[20px]">
                {"//Get in touch"}
              </p>
              <h1 className="mt-3 max-w-[353px] text-[40px] font-medium uppercase leading-[1.1] tracking-[-0.04em] text-[#061218] lg:max-w-[418px] lg:text-[clamp(4rem,7vw,5.5rem)] lg:leading-[1.1] lg:tracking-[-0.04em]">
                Ready to start?
              </h1>
              <p className="mt-4 max-w-[353px] text-[17px] leading-[1.42] tracking-[-0.03em] text-[#061218] lg:max-w-[278px] lg:text-xl lg:leading-[1.3]">
                Reach out today, we’ll respond fast and keep things simple.
              </p>

              <a
                href="mailto:webdesignbylazar@gmail.com"
                className="mt-7 inline-flex h-[45px] w-[163px] items-center justify-center rounded-[4px] bg-[#1f75b2] text-base font-medium text-white transition-colors hover:bg-[#1b679d]"
              >
                Email us directly
              </a>

              <div className="mt-7 flex flex-col gap-3 text-base text-[#061218]">
                <a
                  href="mailto:webdesignbylazar@gmail.com"
                  className="inline-flex w-fit items-center gap-3 transition-opacity hover:opacity-70"
                >
                  <ContactIcon type="mail" />
                  noristudio@gmail.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="inline-flex w-fit items-center gap-3 transition-opacity hover:opacity-70"
                >
                  <ContactIcon type="phone" />
                  (718) 555-0123
                </a>
              </div>
            </div>

            <form
              className="mb-[-59px] min-h-[581px] rounded-lg bg-white p-5 lg:mb-[-39px]"
              action="mailto:webdesignbylazar@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="flex flex-col gap-4 lg:gap-5">
                {FIELDS.map((field) => (
                  <label key={field.id} className="flex flex-col gap-3 lg:gap-2">
                    <span className="w-fit text-base font-medium leading-[1.3] tracking-[-0.03em] text-[#061218]">
                      {field.label}
                    </span>
                    <input
                      name={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="h-12 rounded-[4px] border-0 bg-[#f7f7f7] px-3 text-base leading-[1.2] tracking-[-0.01em] text-[#061218] outline-none placeholder:text-[#061218]/42 focus:ring-2 focus:ring-[#2280c2]/45"
                    />
                  </label>
                ))}

                <label className="flex flex-col gap-3 lg:gap-2">
                  <span className="w-fit text-base font-medium leading-[1.3] tracking-[-0.03em] text-[#061218]">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Your message"
                    className="h-[100px] resize-y rounded-[4px] border-0 bg-[#f7f7f7] px-3 py-3 text-base leading-[1.2] tracking-[-0.01em] text-[#061218] outline-none placeholder:text-[#061218]/42 focus:ring-2 focus:ring-[#2280c2]/45"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-[4px] bg-[#1f75b2] text-base font-medium leading-[1.2] tracking-[-0.03em] text-white transition-colors hover:bg-[#1b679d]"
                >
                  Send request
                </button>
                <p className="text-center text-sm leading-[1.3] tracking-[-0.01em] text-[#061218]">
                  By submitting, you agree to our{" "}
                  <Link href="/terms-of-service" className="underline">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy" className="underline">
                    Privacy Policy.
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="px-5 pb-[68px] pt-[179px] sm:px-8 lg:pb-24 lg:pt-[199px]">
        <div className="mx-auto grid w-full max-w-[1840px] gap-14 lg:grid-cols-2 lg:gap-6">
          <div>
            <p className="w-fit font-mono text-base font-medium leading-[1.3] tracking-[-0.02em] text-[#1f75b2] lg:text-[20px]">
              {"//FAQ"}
            </p>
            <h2 className="mt-3 max-w-[353px] text-[40px] font-medium uppercase leading-[1.1] tracking-[-0.04em] text-[#061218] lg:max-w-[474px] lg:text-[clamp(3rem,5.4vw,4.25rem)] lg:leading-[1.1] lg:tracking-[-0.04em]">
              Questions we often get
            </h2>
            <p className="mt-4 max-w-[340px] text-base leading-[1.3] tracking-[-0.03em] text-[#061218] lg:max-w-[420px] lg:text-xl">
              Every project timeline is confirmed during onboarding, so you
              always know what to expect.
            </p>
          </div>

          <div className="flex flex-col gap-2 lg:gap-4">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="rounded-lg bg-white px-4 py-[14px] lg:px-5 lg:py-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-base font-semibold leading-tight tracking-[-0.03em] text-[#061218] lg:text-xl">
                    {faq.q}
                  </p>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f0f5f9] text-[#1f75b2]">
                    +
                  </span>
                </div>
                <p className="mt-4 hidden text-base leading-7 text-[#061218]/70">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
