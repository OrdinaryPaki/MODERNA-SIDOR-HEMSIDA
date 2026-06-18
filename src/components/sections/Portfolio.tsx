import Image from "next/image";
import SectionLabel from "./SectionLabel";

const PROJECTS = [
  {
    name: "Baseline Sports",
    slug: "baseline-sports",
    category: "Web Design & Development",
    year: "2025",
    image: "/reference/kf0L3mld1QAbDZWfDp3yi4LfwV8.png",
  },
  {
    name: "Urban Bites",
    slug: "urban-bites",
    category: "UI/UX Design",
    year: "2024",
    image: "/reference/Vzqe1Y7Hjtxberq3o9cKXZ514.png",
  },
  {
    name: "Northcap supply",
    slug: "northcap-supply",
    category: "Brand identity",
    year: "2024",
    image: "/reference/FZLSLkf4KypXwztwnGP7AfQOpo.png",
  },
  {
    name: "Velo Studio",
    slug: "velo-studio",
    category: "Web Design & Development",
    year: "2023",
    image: "/reference/RAVhlibsB1Uz6MJmEED2G3SQc.png",
  },
];

export default function Portfolio() {
  return (
    <section
      id="projekt"
      className="bg-background px-5 pb-5 pt-16 sm:px-8 sm:pb-9 sm:pt-[82px]"
    >
      <SectionLabel>{"//03 Portfolio"}</SectionLabel>

      <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <h2 className="max-w-[353px] text-[40px] font-medium uppercase leading-[1.1] tracking-[-0.04em] sm:max-w-3xl sm:text-[clamp(2.5rem,6.875vw,5.5rem)] sm:leading-[1.1] sm:tracking-[-0.04em]">
          <span className="whitespace-nowrap">Selected work</span>
          <br />
          <span className="whitespace-nowrap">(2023-2025)</span>
        </h2>
        <p className="max-w-[353px] text-[17px] leading-[1.42] text-[#4d585e] sm:max-w-[332px] sm:text-[20px] sm:leading-[1.3] sm:tracking-[-0.03em]">
          Our portfolio showcases crafted work that blends creativity and
          strategy to help brands grow with impact.
        </p>
      </div>

      <div className="mt-10 grid gap-x-6 gap-y-10 sm:mt-[75px] sm:grid-cols-2 sm:gap-y-14">
        {PROJECTS.map((project) => (
          <a
            key={project.name}
            href={`/projects/${project.slug}#hero`}
            className="group block"
          >
            <div className="grain relative overflow-hidden rounded-[10px] border border-[#06121814] bg-white">
              <div className="relative aspect-[1.115] w-full overflow-hidden sm:aspect-[1.12]">
                <Image
                  src={project.image}
                  alt="Cover image"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>
            <div className="mt-3 flex items-baseline justify-between gap-4">
              <p className="text-[18px] font-medium leading-[1.5] tracking-[-0.03em] sm:text-[20px] sm:leading-[1.3]">
                {project.name}
              </p>
              <p className="font-mono text-sm leading-[1.3] tracking-[-0.03em] text-muted sm:text-[20px]">
                {project.year}
              </p>
            </div>
            <p className="mt-0.5 text-base leading-[1.3] tracking-[-0.02em] text-muted sm:text-[20px] sm:tracking-[-0.03em]">
              {project.category}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
