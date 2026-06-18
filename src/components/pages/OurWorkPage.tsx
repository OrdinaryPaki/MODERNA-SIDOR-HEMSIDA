import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { projects } from "@/lib/projects";

export default function OurWorkPage() {
  return (
    <main className="flex-1">
      <section id="work-top" className="bg-background pb-20">
        <SiteHeader />

        <div className="mx-auto w-[calc(100%_-_40px)] max-w-[1376px] pt-12 sm:w-[calc(100%_-_64px)] lg:pt-[45px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <div>
              <p className="relative -top-[10px] w-fit font-mono text-base font-medium leading-[1.3] tracking-[-0.02em] text-[#1f75b2] lg:text-[20px]">
                {"//Our work"}
              </p>
              <h1 className="mt-[37px] max-w-none text-[40px] font-medium uppercase leading-[1.1] tracking-[-0.04em] text-[#061218] lg:mt-[37px] lg:max-w-[682px] lg:text-[clamp(3rem,7vw,5.5rem)]">
                Selected work (2023-2025)
              </h1>
            </div>
            <div className="max-w-[352px] text-base leading-[1.3] tracking-[-0.03em] text-[#061218] lg:max-w-[352px] lg:text-[20px]">
              <p>
                <span className="lg:hidden">
                  Strategic design and creative solutions that help businesses
                  build memorable brands.
                </span>
                <span className="hidden lg:inline">
                  Recent work showcasing strategic design and creative solutions
                  that help businesses build memorable brands.
                </span>
              </p>
            </div>
          </div>

          <div className="mt-[55px] grid gap-x-6 gap-y-5 md:grid-cols-2 lg:mt-[76px] lg:gap-y-6">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="relative aspect-[1.178] overflow-hidden rounded-lg bg-white lg:aspect-[1.119]">
                  <Image
                    src={project.coverImage}
                    alt="Cover image"
                    fill
                    loading={index < 2 ? "eager" : "lazy"}
                    sizes="(min-width: 768px) calc((min(100vw - 64px, 1376px) - 24px) / 2), min(100vw - 40px, 1376px)"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-4 grid grid-cols-[1fr_49px] gap-0 lg:grid-cols-[1fr_70px]">
                  <div>
                    <h2 className="text-xl font-medium leading-[1.3] tracking-[-0.02em] text-[#061218] lg:text-2xl">
                      {project.title}
                    </h2>
                    <p className="mt-1 text-base leading-[1.3] tracking-[-0.03em] text-[#061218] lg:text-xl">
                      {project.service}
                    </p>
                  </div>
                  <span className="self-start text-right text-sm font-medium leading-[1.3] tracking-[-0.02em] text-[#061218] lg:text-xl">
                    ({project.listingYear ?? project.year})
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact compact />
      <Footer mergeWithPrevious />
    </main>
  );
}
