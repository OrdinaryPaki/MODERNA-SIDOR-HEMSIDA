import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/sections/SectionLabel";
import { articles } from "@/lib/articles";

export default function BlogPage() {
  return (
    <main className="flex-1 bg-background">
      <section id="blog-top" className="pb-[76px] lg:pb-[81px]">
        <SiteHeader />

        <div className="mx-auto w-[calc(100%_-_40px)] max-w-[1376px] pt-[52px] sm:w-[calc(100%_-_64px)] lg:pt-[80px]">
          <div className="flex flex-col gap-1 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <div>
              <SectionLabel>{"//Blog"}</SectionLabel>
              <h1 className="mt-3 max-w-[304px] text-[40px] font-medium uppercase leading-[1.1] tracking-[-0.04em] text-[#061218] lg:max-w-[634px] lg:text-[clamp(3.75rem,7vw,5.5rem)]">
                Ideas That Drive Growth
              </h1>
            </div>
            <p className="max-w-[350px] text-base leading-[1.3] tracking-[-0.03em] text-[#061218] lg:text-xl lg:pb-0">
              <span className="lg:hidden">
                Our portfolio showcases crafted work that blends creativity and
                strategy to help brands
              </span>
              <span className="hidden lg:inline">
                Discover practical tips and fresh insights to strengthen your
                brand, improve design, and inspire lasting impact.
              </span>
            </p>
          </div>

          <div className="mt-[66px] grid gap-x-6 gap-y-6 md:mt-[76px] md:grid-cols-2">
            {articles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group block pb-5"
              >
                <div className="rounded-xl bg-white px-4 pb-0 pt-5">
                  <div className="relative aspect-[1.73] overflow-hidden rounded-lg bg-[#d9dddf] md:aspect-[1.4977]">
                    <Image
                      src={article.image}
                      alt={article.imageAlt ?? "Cover image"}
                      fill
                      loading={index < 2 ? "eager" : "lazy"}
                      sizes="(min-width: 768px) calc((min(100vw - 64px, 1376px) - 24px) / 2), min(100vw - 40px, 1376px)"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <p className="mx-4 mt-4 max-w-[321px] text-xl font-medium leading-[1.3] tracking-[-0.02em] text-[#061218] lg:max-w-[360px] lg:text-2xl">
                  {article.title}
                </p>
                <div className="mx-4 mt-2 flex flex-wrap gap-x-4 gap-y-2 text-base leading-[1.3] tracking-[-0.03em] text-[#061218]">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
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
