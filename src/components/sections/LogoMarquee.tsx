const logos = [
  "Baseline",
  "Urban Bites",
  "Northcap",
  "Velo",
  "Lumen",
  "Northwind",
  "Atlas",
  "Polaris",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-6 pr-6">
      {logos.map((logo) => (
        <div
          key={logo}
          className="flex h-[132px] w-[262px] items-center justify-center rounded-[4px] bg-[#f0f5f9]"
        >
          <span className="text-[22px] font-medium tracking-[-0.04em] text-[#061218]">
            {logo}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="overflow-hidden bg-[#061218] py-6 px-8">
      <div className="flex w-max animate-marquee" style={{ ["--marquee-duration" as string]: "40s" }}>
        <Row />
        <Row />
      </div>
    </section>
  );
}
