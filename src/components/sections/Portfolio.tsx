import Image from "next/image";

const projects = [
  { img: "/assets/project-1.png", title: "Baseline Sports", tag: "Web Design & Development", year: "2025" },
  { img: "/assets/project-2.png", title: "Urban Bites", tag: "UI/UX Design", year: "2024" },
  { img: "/assets/project-3.png", title: "Northcap supply", tag: "Brand identity", year: "2024" },
  { img: "/assets/project-4.png", title: "Velo Studio", tag: "Web Design & Development", year: "2023" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#f0f5f9] px-8 py-20 text-[#061218]">
      <div className="mx-auto flex max-w-[1439px] flex-col gap-[75px]">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[20px] font-medium leading-[26px] tracking-[-0.4px] text-[#1f75b2]">
            //03 Portfolio
          </span>
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <p className="max-w-[692px] text-[88px] font-medium uppercase leading-[96.8px] tracking-[-3.52px]">
              Selected work (2023-2025)
            </p>
            <p className="max-w-[332px] text-[20px] leading-[26px] tracking-[-0.6px] opacity-70">
              Our portfolio showcases crafted work that blends creativity and
              strategy to help brands grow with impact.
            </p>
          </div>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
          {projects.map((p) => (
            <a key={p.title} href="#" className="group block rounded-[12px]">
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[707/635] w-full overflow-hidden rounded-[8px]">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="text-[24px] font-medium leading-[31.2px] tracking-[-0.48px]">
                      {p.title}
                    </p>
                    <p className="text-[20px] leading-[26px] tracking-[-0.6px] opacity-70">
                      {p.tag}
                    </p>
                  </div>
                  <p className="font-mono text-[20px] font-medium leading-[26px] tracking-[-0.4px] opacity-60">
                    {p.year}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
