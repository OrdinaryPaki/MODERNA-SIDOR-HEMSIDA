import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/sections/SectionLabel";
import { getRelatedProjects, type Project } from "@/lib/projects";

const META_ROWS = [
  ["Year", "year"],
  ["Industry", "industry"],
  ["Timeline", "timeline"],
] as const;

export default function ProjectDetailPage({ project }: { project: Project }) {
  const relatedProjects = getRelatedProjects(project.slug);
  const [firstGalleryImage, secondGalleryImage, thirdGalleryImage, finalGalleryImage] =
    project.gallery;
  const splitGalleryImages = [secondGalleryImage, thirdGalleryImage].filter(
    (image): image is string => Boolean(image),
  );
  const usesCondensedContentFlow = project.detailLayout === "offset";
  const usesTighterProjectHero =
    project.slug === "urban-bites" ||
    project.slug === "northcap-supply" ||
    project.slug === "velo-studio";
  const metaTextClass = "text-[20px] lg:text-2xl";
  const problemMobileMinHeightClass =
    project.slug === "baseline-sports" || project.slug === "northcap-supply"
      ? "min-h-[208px] "
      : project.slug === "velo-studio"
        ? "min-h-[182px] "
        : "";
  const usesTallMobileSolutionText =
    project.slug === "baseline-sports" || project.slug === "northcap-supply";
  const problemTextClass = `${problemMobileMinHeightClass}w-full max-w-[800px] text-[20px] leading-[1.3] tracking-[-0.03em] text-[#061218] lg:min-h-0 lg:text-[32px]`;
  const solutionTextClass = `${
    usesTallMobileSolutionText ? "min-h-[208px] " : ""
  }w-full max-w-[800px] text-[20px] leading-[1.3] tracking-[-0.03em] text-[#061218] lg:min-h-0 lg:text-[32px]`;

  return (
    <main className="flex-1">
      <section
        id="hero"
        className={`relative bg-background px-5 pb-[86px] sm:px-8 sm:pb-[104px] ${
          usesTighterProjectHero ? "pt-[90px] sm:pt-[122px]" : "pt-[90px] sm:pt-[122px]"
        }`}
      >
        <div className="absolute inset-x-0 top-0 z-20">
          <SiteHeader />
        </div>

        <div
          className={`mx-auto flex w-full max-w-[1376px] flex-col ${
            usesTighterProjectHero ? "gap-[56px] sm:gap-[76px]" : "gap-[56px] sm:gap-[76px]"
          }`}
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
              <div
                className={`flex w-full flex-col lg:max-w-[696px] ${
                  usesTighterProjectHero ? "gap-[22px]" : "gap-[22px]"
                }`}
              >
                {project.logoImage ? (
                  <div className="relative h-[30px] w-40 lg:h-10 lg:w-[217px]">
                    <Image
                      src={project.logoImage}
                      alt="Logo image"
                      fill
                      priority
                      sizes="(min-width: 1024px) 217px, 160px"
                      className="object-contain object-left"
                    />
                  </div>
                ) : (
                  <p className="text-[24px] font-medium leading-[1.3] tracking-[-0.02em] text-[#061218]">
                    {project.title}
                  </p>
                )}

                <h1 className="max-w-[494px] text-[40px] font-medium uppercase leading-[1.1] tracking-[-0.04em] text-[#061218] lg:text-[88px] lg:leading-[1.1] lg:tracking-[-0.04em]">
                  {project.title}
                </h1>
              </div>

              <p className="w-full max-w-[520px] text-[20px] leading-[1.3] tracking-[-0.02em] text-[#061218]/70 lg:text-[24px]">
                {project.summary}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="relative aspect-[1.47727] overflow-hidden rounded-xl bg-white sm:aspect-[1.6875] lg:aspect-[1.76471]">
              <Image
                src={project.heroImage}
                alt="Case study - Image 1"
                fill
                priority
                sizes="(min-width: 640px) min(100vw - 64px, 1376px), min(100vw - 40px, 1376px)"
                className="object-cover"
              />
            </div>

            <div className="mt-5 border-y border-[#061218]/12 bg-background/95">
              {META_ROWS.map(([label, key]) => (
                <div
                  key={label}
                  className="grid grid-cols-2 border-b border-[#061218]/12 py-4 last:border-b-0"
                >
                  <span className={`${metaTextClass} leading-[1.3] tracking-[-0.02em] text-[#061218]`}>
                    {label}
                  </span>
                  <span
                    className={`text-right ${metaTextClass} font-medium leading-[1.3] tracking-[-0.02em] text-[#061218]`}
                  >
                    {project[key]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-5 pt-[49px] pb-[50px] sm:px-8 lg:pt-[78px] lg:pb-[76px]">
        <div className="mx-auto flex w-full max-w-[1376px] flex-col gap-14 lg:gap-[76px]">
          {usesCondensedContentFlow ? (
            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(220px,416px)_minmax(0,800px)] lg:items-start lg:gap-x-0 lg:gap-y-[76px]">
              <div className="flex flex-col gap-3 lg:contents">
                <SectionLabel>{"//Problem"}</SectionLabel>
                <p className={problemTextClass}>
                  {project.problem}
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:contents">
                <SectionLabel>{"//Solution"}</SectionLabel>
                <p className={solutionTextClass}>
                  {project.solution}
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <SectionLabel>{"//Problem"}</SectionLabel>
                <p className={problemTextClass}>
                  {project.problem}
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <SectionLabel>{"//Solution"}</SectionLabel>
                <p className={solutionTextClass}>
                  {project.solution}
                </p>
              </div>
            </>
          )}

          <div className="flex flex-col gap-6">
            {firstGalleryImage ? (
              <div className="overflow-hidden rounded-lg bg-white">
                <div className="relative aspect-[1.25] lg:aspect-[1.75]">
                  <Image
                    src={firstGalleryImage}
                    alt="Case study - Image 2"
                    fill
                    sizes="(min-width: 640px) min(100vw - 64px, 1376px), min(100vw - 40px, 1376px)"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            ) : null}

            <div className="grid gap-6 md:grid-cols-2">
              {splitGalleryImages.map((image, index) => (
                <div key={image} className="overflow-hidden rounded-lg bg-white">
                  <div className="relative aspect-[1.25] lg:aspect-[1.197]">
                    <Image
                      src={image}
                      alt={`Case study - Image ${index + 3}`}
                      fill
                      sizes="(min-width: 768px) calc((min(100vw - 64px, 1376px) - 24px) / 2), min(100vw - 40px, 1376px)"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {usesCondensedContentFlow ? (
            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(220px,416px)_minmax(0,800px)] lg:items-start">
              <SectionLabel>{"//Impact"}</SectionLabel>
              <p className="w-full max-w-[800px] text-[20px] leading-[1.3] tracking-[-0.03em] text-[#061218] lg:text-[32px]">
                {project.impact}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <SectionLabel>{"//Impact"}</SectionLabel>
              <p className="w-full max-w-[800px] text-[20px] leading-[1.3] tracking-[-0.03em] text-[#061218] lg:text-[32px]">
                {project.impact}
              </p>
            </div>
          )}

          {finalGalleryImage ? (
            <div className="overflow-hidden rounded-lg bg-white">
              <div className="relative aspect-[1.25] lg:aspect-[1.75]">
                <Image
                  src={finalGalleryImage}
                  alt={`Case study - Image ${splitGalleryImages.length + 3}`}
                  fill
                  sizes="(min-width: 640px) min(100vw - 64px, 1376px), min(100vw - 40px, 1376px)"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-background px-5 pt-[70px] pb-[60px] sm:px-8 lg:py-[76px]">
        <div className="mx-auto flex w-full max-w-[1376px] flex-col gap-14 lg:gap-[76px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex max-w-[694px] flex-col gap-3 lg:max-w-[700px]">
              <SectionLabel>{"//Other projects"}</SectionLabel>
              <h2 className="max-w-[314px] text-[40px] font-medium uppercase leading-[1.1] tracking-[-0.04em] text-[#061218] sm:max-w-[454px] lg:max-w-[694px] lg:text-[88px]">
                Discover More Projects
              </h2>
            </div>

            <p className="max-w-none text-base leading-[1.3] tracking-[-0.03em] text-[#061218]/70 lg:max-w-[380px] lg:text-[20px]">
              <span className="hidden lg:inline">
                Explore additional case studies that highlight our process,
                creativity, and results.
              </span>
              <span className="lg:hidden">
                Our portfolio highlights creative, strategic work that helps
                brands grow fast, efficiently.
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((related) => (
                <Link
                  key={related.slug}
                  href={`/projects/${related.slug}#hero`}
                  className="group block"
                >
                  <div className="relative aspect-[1.117] overflow-hidden rounded-lg bg-white lg:aspect-[443/468]">
                    <Image
                      src={related.coverImage}
                      alt="Cover image"
                      fill
                      sizes="(min-width: 1024px) calc((min(100vw - 64px, 1376px) - 48px) / 3), (min-width: 768px) calc((min(100vw - 64px, 1376px) - 24px) / 2), min(100vw - 40px, 1376px)"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-medium leading-[1.3] tracking-[-0.02em] text-[#061218] sm:text-2xl">
                        {related.title}
                      </h3>
                      <p className="text-base leading-[1.3] tracking-[-0.03em] text-[#061218]/70 sm:text-xl">
                        {related.service}
                      </p>
                    </div>

                    <span className="pt-1 text-base font-medium leading-[1.3] tracking-[-0.02em] text-[#061218]/60 sm:text-xl">
                      {related.year}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Contact compact />
      <Footer mergeWithPrevious compactEnd compactOffset="project" />
    </main>
  );
}
