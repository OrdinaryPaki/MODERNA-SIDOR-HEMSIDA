export default function Footer() {
  return (
    <footer id="kontakt" className="bg-[#1f75b2] pb-6 pt-20 text-[#f0f5f9]">
      <div className="mx-auto max-w-[1503px] px-8">
        {/* Contact + Form */}
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Left: Contact info */}
          <div className="flex max-w-[719px] flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[20px] font-medium leading-[26px] tracking-[-0.4px]">
                //Contact
              </span>
              <div className="flex flex-col gap-4">
                <h2 className="max-w-[418px] text-[88px] font-medium uppercase leading-[96.8px] tracking-[-3.52px]">
                  Ready to start?
                </h2>
                <p className="max-w-[288px] text-[20px] leading-[26px] tracking-[-0.6px]">
                  Reach out today, we&apos;ll respond fast and keep things
                  simple.
                </p>
              </div>
              <a
                href="mailto:hej@modernasidor.se"
                className="mt-2 inline-flex h-[45px] w-fit items-center justify-center rounded-[2px] bg-[#f0f5f9] px-6"
              >
                <span className="text-[16px] font-medium leading-[20.8px] tracking-[-0.48px] text-[#1f75b2]">
                  Maila oss direkt
                </span>
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <Perk>Quick 24-hour response</Perk>
              <Perk>Transparent pricing</Perk>
              <Perk>Easy Scheduling</Perk>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full max-w-[719px]">
            <form className="flex flex-col gap-5 rounded-[8px] bg-[#f0f5f9] p-5 text-[#061218]">
              <Field label="Name" placeholder="Jane Smith" />
              <Field label="Email" type="email" placeholder="jane@framer.com" />
              <Field label="Company" placeholder="Your company" />
              <label className="flex flex-col gap-3">
                <span className="text-[16px] font-medium leading-[20.8px] tracking-[-0.48px] opacity-70">
                  Message
                </span>
                <textarea
                  rows={4}
                  placeholder="Your message"
                  className="min-h-[100px] w-full rounded-[4px] bg-white p-3 text-[16px] tracking-[-0.16px] text-[#061218] outline-none placeholder:text-[#7d8487]"
                />
              </label>
              <button
                type="submit"
                className="h-12 w-full rounded-[4px] bg-[#1f75b2] text-[16px] font-medium tracking-[-0.48px] text-white"
              >
                Send request
              </button>
              <p className="text-center text-[14px] tracking-[-0.14px] text-[#061218]/70">
                By submitting, you agree to our{" "}
                <a href="#" className="underline">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy.
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px w-full bg-[rgba(240,245,249,0.12)]" />

        {/* Newsletter + links */}
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Left: Newsletter */}
          <div className="flex max-w-[719px] flex-col gap-8">
            <div className="flex flex-col gap-6">
              <p className="text-[76px] font-medium leading-[68.4px] tracking-[-3.04px]">
                Stay in loop
              </p>
              <p className="max-w-[284px] text-[16px] leading-[20.8px] tracking-[-0.48px]">
                Join our newsletter and stay updated on the latest trends in
                digital design.
              </p>
            </div>
            <form className="flex max-w-[360px] items-end gap-3">
              <div className="flex flex-1 flex-col gap-2.5">
                <span className="text-[16px] font-medium leading-[20.8px] tracking-[-0.48px]">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="jane@framer.com"
                  className="h-12 w-[300px] rounded-[4px] bg-[#f0f5f9] p-3 text-[16px] tracking-[-0.16px] text-[#061218] outline-none placeholder:text-[#7d8487]"
                />
              </div>
              <button
                type="submit"
                aria-label="Prenumerera"
                className="grid size-12 shrink-0 place-items-center rounded-[4px] bg-[#f0f5f9]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M4 10h12M11 5l5 5-5 5"
                    stroke="#1f75b2"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Right: Page + social links */}
          <div className="flex gap-8 lg:gap-16">
            <FooterCol
              title="Pages"
              items={[
                { label: "Home", href: "#top" },
                { label: "About us", href: "#" },
                { label: "Work", href: "#portfolio" },
                { label: "Blog", href: "#blogg" },
              ]}
            />
            <FooterCol
              title="Follow us"
              items={[
                { label: "Instagram", href: "#" },
                { label: "Facebook", href: "#" },
                { label: "Tiktok", href: "#" },
                { label: "Twitter", href: "#" },
              ]}
            />
          </div>
        </div>

        {/* Big wordmark — "Moderna Sidor" replacing "NORI" */}
        <div className="mt-16">
          <p className="text-center text-[clamp(80px,18vw,280px)] font-medium leading-[0.85] tracking-[-0.05em] text-[#f0f5f9]">
            Moderna Sidor
          </p>
        </div>

        {/* Divider */}
        <div className="mt-6 h-px w-full bg-[rgba(240,245,249,0.12)]" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col gap-4 text-[16px] leading-[20.8px] tracking-[-0.48px] md:flex-row md:items-center md:justify-between">
          <span>Webbyrå skapad av Moderna Sidor</span>
          <span>Privacy policy</span>
          <span>Terms of Service</span>
          <span>© 2026 Moderna Sidor. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

function Perk({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="size-4 rounded-sm bg-[#f0f5f9]" />
      <span className="text-[16px] leading-[20.8px] tracking-[-0.48px]">
        {children}
      </span>
    </div>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <label className="flex flex-col gap-3">
      <span className="text-[16px] font-medium leading-[20.8px] tracking-[-0.48px] opacity-70">
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-12 w-full rounded-[4px] bg-white p-3 text-[16px] tracking-[-0.16px] text-[#061218] outline-none placeholder:text-[#7d8487]"
      />
    </label>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-[16px] leading-[20.8px] tracking-[-0.48px]">
        {title}
      </span>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-[24px] leading-[31.2px] tracking-[-0.48px] transition-opacity hover:opacity-80"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
