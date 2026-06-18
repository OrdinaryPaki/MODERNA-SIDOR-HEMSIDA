const SERVICES = [
  {
    nr: "001",
    mobileNr: "01",
    title: "Branding",
    mobileTitle: "Branding",
    text: "Visual systems that make your business unforgettable and differentiate you from competitors.",
    mobileText: "Visual systems that make your business unforgettable.",
  },
  {
    nr: "002",
    mobileNr: "02",
    title: "Web design",
    mobileTitle: "Web design",
    text: "Custom websites that look stunning, perform flawlessly, and convert visitors into customers.",
    mobileText: "Custom sites that look great and convert visitors.",
  },
  {
    nr: "003",
    mobileNr: "03",
    title: "UX/UI Design",
    mobileTitle: "UI/UX",
    text: "Strategic UX/UI design that turns confused visitors into confident, converting loyal customers.",
    mobileText: "Strategic design that turns visitors into customers.",
  },
  {
    nr: "004",
    mobileNr: "04",
    title: "Digital marketing",
    mobileTitle: "Marketing",
    text: "Data-driven campaigns that reach your ideal customers and drive measurable business growth.",
    mobileText: "Data-driven campaigns that grow your business.",
  },
];

export default function Services() {
  return (
    <section
      id="tjanster"
      className="bg-[#061218] px-5 pb-[60px] pt-[60px] text-[#f0f5f9] sm:px-8 sm:pb-20 sm:pt-20"
    >
      <p className="w-fit font-mono text-base font-medium leading-[1.3] tracking-[-0.02em] text-[#9aa4a9] sm:text-[20px]">
        {"//04 Our services"}
      </p>

      <h2 className="font-display mt-3 origin-left text-[76px] font-medium uppercase leading-[0.95] tracking-[-0.06em] sm:mt-6 sm:whitespace-nowrap sm:text-[clamp(2.75rem,14.6vw,13.15rem)] sm:leading-[0.9] sm:tracking-[-0.05em]">
        <span className="block sm:inline">Our</span>{" "}
        <span className="block sm:inline">services</span>
      </h2>

      <div className="mt-[65px] sm:mt-[42px]">
        {SERVICES.map((service) => (
          <div
            key={service.nr}
            className="grid grid-cols-[18px_128px_minmax(0,1fr)] gap-x-3 border-b border-[#f0f5f91f] py-[23px] sm:grid-cols-[78px_minmax(0,1fr)_320px] sm:items-start sm:gap-x-6 sm:gap-y-0 sm:py-[23px]"
          >
            <p className="w-fit pt-1 font-mono text-sm font-medium tracking-[-0.02em] text-[#9aa4a9] sm:text-base">
              <span className="sm:hidden">{service.mobileNr}</span>
              <span className="hidden sm:inline">{service.nr}</span>
            </p>
            <p className="font-display w-fit text-[20px] font-normal leading-[1.3] tracking-[-0.04em] text-[#f0f5f9] sm:text-[72px] sm:leading-[0.9] sm:tracking-[-0.04em]">
              <span className="sm:hidden">{service.mobileTitle}</span>
              <span className="hidden sm:inline">{service.title}</span>
            </p>
            <p className="col-start-3 row-start-1 max-w-[180px] text-[14px] leading-[1.3] tracking-[-0.03em] text-[#9aa4a9] sm:col-start-3 sm:max-w-[320px] sm:text-xl sm:leading-[1.3] sm:tracking-[-0.03em]">
              <span className="sm:hidden">{service.mobileText}</span>
              <span className="hidden sm:inline">{service.text}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
