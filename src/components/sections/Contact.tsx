const FIELDS = [
  { id: "name", label: "Name", type: "text", placeholder: "Jane Smith" },
  { id: "email", label: "Email", type: "email", placeholder: "jane@framer.com" },
  { id: "company", label: "Company", type: "text", placeholder: "Your company" },
];

const QUICK_LINKS = [
  { icon: "clock", label: "Quick 24-hour response" },
  { icon: "dollar", label: "Transparent pricing" },
  { icon: "calendar", label: "Easy Scheduling" },
];

function QuickIcon({ icon }: { icon: (typeof QUICK_LINKS)[number]["icon"] }) {
  if (icon === "clock") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "dollar") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
        <path d="M12 4v16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 7.5c0-1.933-1.79-3.5-4-3.5s-4 1.567-4 3.5 1.79 3.5 4 3.5 4 1.567 4 3.5-1.79 3.5-4 3.5-4-1.567-4-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <rect x="4" y="6.5" width="16" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 4.5v4M16 4.5v4M4 10.5h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Contact({ compact = false }: { compact?: boolean }) {
  const headingClass = compact
    ? "mt-3 max-w-none text-[40px] font-medium uppercase leading-[1.1] tracking-[-0.05em] sm:max-w-[418px] sm:text-[clamp(4rem,6.875vw,5.5rem)] sm:leading-[1.1] sm:tracking-[-0.04em]"
    : "mt-3 max-w-[353px] text-[54px] font-medium uppercase leading-[0.95] tracking-[-0.05em] sm:max-w-[418px] sm:text-[clamp(4rem,6.875vw,5.5rem)] sm:leading-[1.1] sm:tracking-[-0.04em]";

  return (
    <section
      id="kontakt"
      className={`bg-[#1f75b2] px-5 text-white sm:px-8 ${
        compact ? "pb-16 pt-[60px] lg:pb-[94px] lg:pt-20" : "pb-[94px] pt-20"
      }`}
    >
      <div
        className={`mx-auto max-w-[1376px] grid lg:grid-cols-[minmax(0,1fr)_688px] lg:gap-6 ${
          compact ? "gap-[59px] lg:gap-6" : "gap-12"
        }`}
      >
        <div>
          <p className="w-fit font-mono text-base font-medium leading-[1.3] tracking-[-0.02em] text-[#f0f5f9] sm:text-[20px]">
            {"//Contact"}
          </p>
          <h2 className={headingClass}>
            Ready to start?
          </h2>
          <p className="mt-[19px] max-w-[288px] text-[17px] leading-[1.42] tracking-[-0.03em] text-white sm:text-xl sm:leading-[1.3] sm:tracking-[-0.04em]">
            Reach out today, we’ll respond fast and keep things simple.
          </p>
          <a
            href="mailto:webdesignbylazar@gmail.com."
            className="mt-[23px] inline-flex h-[45px] w-full items-center justify-center rounded-[4px] bg-[#f0f5f9] text-base font-medium leading-[1.3] tracking-[-0.03em] text-[#1f75b2] transition-colors hover:bg-white sm:w-[163px]"
          >
            Email us directly
          </a>

          <div
            className={`flex flex-col text-base leading-[1.3] tracking-[-0.03em] text-white ${
              compact ? "mt-6 gap-2" : "mt-8 gap-3"
            }`}
          >
            {QUICK_LINKS.map((item) => (
              <p key={item.label} className="w-fit">
                <span className="inline-flex w-fit items-center gap-3">
                  <span aria-hidden className="inline-flex">
                    <QuickIcon icon={item.icon} />
                  </span>
                  {item.label}
                </span>
              </p>
            ))}
          </div>
        </div>

        <form
          className="rounded-lg bg-[#f0f5f9] p-5"
          action="mailto:webdesignbylazar@gmail.com."
          method="post"
          encType="text/plain"
        >
          <div className="flex flex-col gap-4 sm:gap-5">
            {FIELDS.map((field) => (
              <label key={field.id} className="flex flex-col gap-3">
                <span className="w-fit text-base font-medium leading-[1.3] tracking-[-0.03em] text-[#061218]">
                  {field.label}
                </span>
                <input
                  name={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="h-12 rounded-[4px] border-0 bg-white px-3 text-base leading-[1.2] tracking-[-0.01em] text-[#061218] outline-none placeholder:text-[#7d8487] focus:ring-1 focus:ring-[#2280c2]"
                />
              </label>
            ))}
            <label className="flex flex-col gap-3">
              <span className="w-fit text-base font-medium leading-[1.3] tracking-[-0.03em] text-[#061218]">
                Message
              </span>
              <textarea
                name="message"
                rows={4}
                placeholder="Your message"
                className="h-[92px] resize-y rounded-[4px] border-0 bg-white px-3 py-3 text-base leading-[1.2] tracking-[-0.01em] text-[#061218] outline-none placeholder:text-[#7d8487] focus:ring-1 focus:ring-[#2280c2] sm:h-[100px]"
              />
            </label>
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-[4px] bg-[#1f75b2] text-base font-medium leading-[1.3] tracking-[-0.03em] text-white transition-colors hover:bg-[#1b679d]"
            >
              Send request
            </button>
            <p className="text-center text-sm leading-[1.3] tracking-[-0.03em] text-[#061218]/70">
              By submitting, you agree to our{" "}
              <a href="/terms-of-service" className="underline">
                Terms
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" className="underline">
                Privacy<span className="hidden sm:inline"> Policy</span>
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
