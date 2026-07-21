const services = [
  {
    num: "001",
    title: "Branding",
    desc: "Visual systems that make your business unforgettable and differentiate you from competitors.",
  },
  {
    num: "002",
    title: "Web design",
    desc: "Custom websites that look stunning, perform flawlessly, and convert visitors into customers.",
  },
  {
    num: "003",
    title: "UX/UI Design",
    desc: "Strategic UX/UI design that turns confused visitors into confident, converting loyal customers.",
  },
  {
    num: "004",
    title: "Digital marketing",
    desc: "Data-driven campaigns that reach your ideal customers and drive measurable business growth.",
  },
];

export default function Services() {
  return (
    <section id="tjanster" className="bg-[#061218] px-8 py-20">
      <div className="mx-auto flex max-w-[1439px] flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <span className="font-mono text-[20px] font-medium leading-[26px] tracking-[-0.4px] text-[#f0f5f9]/70">
            //04 Våra tjänster
          </span>
          {/* Large heading area — 196px like original icon area, but your own heading */}
          <h2 className="max-w-[760px] text-[88px] font-medium uppercase leading-[96.8px] tracking-[-3.52px] text-[#f0f5f9]">
            Det här gör vi bäst.
          </h2>
        </div>

        {/* Service rows */}
        <div>
          {services.map((s) => (
            <div
              key={s.num}
              className="flex items-end justify-between border-b border-[rgba(240,245,249,0.12)] bg-[#061218] py-6"
            >
              <div className="flex items-center gap-10 lg:gap-[75px]">
                <span className="font-mono text-[16px] font-medium leading-[20.8px] tracking-[-0.32px] text-[#f0f5f9]/60">
                  {s.num}
                </span>
                <span className="text-[72px] font-normal leading-[64.8px] tracking-[-2.88px] text-[#f0f5f9]">
                  {s.title}
                </span>
              </div>
              <p className="hidden max-w-[320px] text-[20px] leading-[26px] tracking-[-0.6px] text-[#f0f5f9]/60 lg:block">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
