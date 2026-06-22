const SERVICES = [
  {
    nr: "001",
    mobileNr: "01",
    title: "Affärssystem",
    mobileTitle: "System",
    text: "För vardagen bakom företaget: kunder, ärenden, uppföljning och beslut samlat på ett ställe.",
    mobileText: "Kunder, ärenden, uppföljning och beslut samlat.",
  },
  {
    nr: "002",
    mobileNr: "02",
    title: "Portaler",
    mobileTitle: "Portaler",
    text: "Vyer för kunder, personal och admin där rätt person ser rätt sak vid rätt tillfälle.",
    mobileText: "Rätt vy för kunder, personal och admin.",
  },
  {
    nr: "003",
    mobileNr: "03",
    title: "AI-funktioner",
    mobileTitle: "AI",
    text: "AI kopplad till era regler och verktyg, så den hjälper arbetet utan att hitta på sanningen.",
    mobileText: "AI som hjälper arbetet utan att hitta på.",
  },
  {
    nr: "004",
    mobileNr: "04",
    title: "SaaS-produkter",
    mobileTitle: "SaaS",
    text: "Digitala produkter som kan lanseras, säljas och byggas vidare över tid.",
    mobileText: "Produkter som kan lanseras och växa.",
  },
];

export default function Services() {
  return (
    <section
      id="tjanster"
      className="bg-[#061218] px-5 pb-[60px] pt-[60px] text-[#f0f5f9] sm:px-8 sm:pb-20 sm:pt-20"
    >
      <p className="w-fit font-mono text-base font-medium leading-[1.3] tracking-[-0.02em] text-[#f0f5f9] opacity-70 sm:text-[20px]">
        {"//04 Områden"}
      </p>

      <h2 className="mt-3 origin-left font-sans text-[77.97272727272727px] font-medium uppercase leading-[1.1] tracking-[-0.04em] sm:mt-6 sm:whitespace-nowrap sm:text-[calc((100vw-40px)*0.15143)] sm:leading-[0.9] sm:tracking-[-0.05em] [@media(min-width:1200px)]:text-[calc(min(100vw-64px,1856px)*0.15136)]">
        <span className="block sm:inline">Det vi</span>{" "}
        <span className="block sm:inline">bygger</span>
      </h2>

      <div className="mt-8 sm:mt-12">
        {SERVICES.map((service) => (
          <div
            key={service.nr}
            className="grid grid-cols-[18px_128px_minmax(0,1fr)] gap-x-3 border-b border-[#f0f5f91f] py-[23.5px] sm:h-[126px] sm:grid-cols-[78px_minmax(0,1fr)_320px] sm:items-start sm:gap-x-6 sm:gap-y-0 sm:py-6"
          >
            <p className="w-fit pt-[9.5px] font-sans text-sm font-normal leading-[1.3] tracking-[-0.01em] text-[#f0f5f9] opacity-60 sm:pt-1 sm:text-base">
              <span className="sm:hidden">{service.mobileNr}</span>
              <span className="hidden sm:inline">{service.nr}</span>
            </p>
            <p className="w-fit pt-[5.5px] font-sans text-[20px] font-normal leading-[1.3] tracking-[-0.02em] text-[#f0f5f9] sm:pt-0 sm:text-[72px] sm:leading-[0.9] sm:tracking-[-0.04em]">
              <span className="sm:hidden">{service.mobileTitle}</span>
              <span className="hidden sm:inline">{service.title}</span>
            </p>
            <p className="col-start-3 row-start-1 max-w-[180px] text-[14px] leading-[1.3] tracking-[-0.03em] text-[#f0f5f9] opacity-60 sm:col-start-3 sm:max-w-[320px] sm:text-xl sm:leading-[1.3] sm:tracking-[-0.03em]">
              <span className="sm:hidden">{service.mobileText}</span>
              <span className="hidden sm:inline">{service.text}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
