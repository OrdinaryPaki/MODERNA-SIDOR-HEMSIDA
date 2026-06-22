const CLIENTS = [
  "Visionsfastigheter",
  "Glasklart",
  "Balko.ai",
  "Bolagslista",
  "ANLAB",
  "Moderna Sidor",
];

export default function LogoMarquee() {
  return (
    <section className="marquee-mask overflow-hidden bg-background py-5 sm:py-6">
      <div className="marquee-track flex w-max items-center pl-5 sm:pl-8">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex items-center gap-5 pr-5 sm:gap-6 sm:pr-6"
          >
            {CLIENTS.map((client) => (
              <li
                key={`${copy}-${client}`}
                className="flex h-[132px] w-[262px] shrink-0 items-center justify-center overflow-hidden rounded-[4px] border border-[#0612181f] bg-background"
              >
                <span className="max-w-[210px] text-center text-[24px] font-medium leading-[1.05] tracking-[-0.05em] text-[#061218]">
                  {client}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
