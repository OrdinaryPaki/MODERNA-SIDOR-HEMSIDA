const LINK_GROUPS = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/#home-top" },
      { label: "About us", href: "/about-us#about-top" },
      { label: "Work", href: "/our-work#work-top" },
      { label: "Blog", href: "/blog#blog-top" },
    ],
  },
  {
    title: "Follow us",
    links: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Facebook", href: "http://facebook.com" },
      { label: "Tiktok", href: "http://tiktok.com" },
      { label: "Twitter", href: "http://x.com" },
    ],
  },
];

export default function Footer({
  showNewsletter = true,
  mergeWithPrevious = false,
  compactEnd = false,
  compactOffset = "default",
}: {
  showNewsletter?: boolean;
  mergeWithPrevious?: boolean;
  compactEnd?: boolean;
  compactOffset?: "default" | "project";
}) {
  return (
    <footer
      className={`flow-root bg-[#1f75b2] px-5 pt-0 text-[#f0f5f9] sm:px-8 ${
        compactEnd ? "pb-3" : "pb-6"
      }`}
    >
      <div className="mx-auto max-w-[1376px]">
        <div className="h-px bg-[#f0f5f9]/12" />

        <div
          className={`flex flex-col gap-12 sm:flex-row sm:justify-between ${
            showNewsletter
              ? mergeWithPrevious
                ? compactEnd
                  ? compactOffset === "project"
                    ? "mt-[158px] sm:mt-[101px]"
                    : "mt-[125px] sm:mt-[92px]"
                  : "mt-[155px] sm:mt-[99px]"
                : "mt-24"
              : "mt-6"
          }`}
        >
          {showNewsletter ? (
            <div className="w-full max-w-[688px]">
              <h3 className="w-full text-[52px] font-medium leading-[0.9] tracking-[-0.04em] sm:text-[clamp(4rem,5.9375vw,4.75rem)]">
                Stay in loop
              </h3>
              <p className="mt-6 max-w-[284px] text-base leading-[1.3] tracking-[-0.03em] text-[#f0f5f9]">
                Join our newsletter and stay updated on the latest trends in
                digital design.
              </p>
              <form
                className="mt-8 flex items-end gap-3"
                action="mailto:webdesignbylazar@gmail.com."
                method="post"
                encType="text/plain"
              >
                <label className="flex w-[300px] flex-none flex-col gap-3">
                  <span className="w-fit text-base font-medium leading-[1.3] tracking-[-0.03em]">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    placeholder="jane@framer.com"
                    className="h-12 rounded-[4px] border-0 bg-[#f0f5f9] px-3 text-base leading-[1.2] tracking-[-0.02em] text-[#061218] outline-none placeholder:text-[#7d8487]"
                  />
                </label>
                <button
                  type="submit"
                  aria-label="Newsletter button"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] bg-[#f0f5f9] text-2xl leading-none text-[#1f75b2] transition-colors hover:bg-white"
                >
                  ↗
                </button>
              </form>
            </div>
          ) : null}

          <div className="flex gap-12 sm:ml-auto sm:w-[238px] sm:justify-between sm:gap-0">
            {LINK_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="text-base leading-[1.3] tracking-[-0.03em] text-[#f0f5f9]">
                  {group.title}
                </p>
                <div className="mt-3 flex flex-col gap-0">
                  {group.links.map((link) => (
                    <p key={link.label}>
                      <a
                        href={link.href}
                        className="text-xl font-medium leading-[1.3] tracking-[-0.03em] text-[#f0f5f9] transition-opacity hover:opacity-70 sm:text-2xl"
                      >
                        {link.label}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {showNewsletter ? (
          <>
            <p className="mt-14 text-[72px] font-medium leading-[0.9] tracking-[-0.05em] text-[#f0f5f9] sm:mt-0 sm:hidden">
              Nori Studio
            </p>
            <p className="mt-14 hidden whitespace-nowrap text-[clamp(11rem,18.6vw,16.75rem)] font-medium leading-[0.9] tracking-[-0.06em] text-[#f0f5f9] sm:block">
              Nori Studio
            </p>
          </>
        ) : null}

        <div
          className={`flex flex-col items-start justify-between gap-4 border-t border-[#f0f5f9]/12 pt-6 text-base leading-[1.3] tracking-[-0.03em] text-[#f0f5f9] sm:flex-row sm:items-center ${
            showNewsletter
              ? mergeWithPrevious
                ? compactEnd
                  ? "mt-8"
                  : "mt-12"
                : "mt-8 sm:mt-[63px]"
              : "mt-10"
          }`}
        >
          <span>Framer template created by Lazar Filipovic</span>
          <a href="/privacy-policy" className="transition-opacity hover:opacity-70">
            Privacy policy
          </a>
          <a href="/terms-of-service" className="transition-opacity hover:opacity-70">
            Terms of Service
          </a>
          <span>© 2026 Nori. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
