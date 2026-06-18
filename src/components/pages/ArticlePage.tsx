import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import SectionLabel from "@/components/sections/SectionLabel";
import { articles, type Article } from "@/lib/articles";

export default function ArticlePage({ article }: { article: Article }) {
  const isCompactDetail = article.detailLayout === "compact";
  const introTextColorClass = isCompactDetail
    ? "text-[#061218]"
    : "text-[#061218]/70";
  const articleBottomPaddingClass =
    article.slug === "5-signs-your-brand-identity-needs-a-refresh"
      ? "pb-[97px] lg:pb-[128px]"
      : article.slug === "building-a-brand-that-stands-out-in-a-crowded-market"
        ? "pb-[83px] lg:pb-[128px]"
        : article.slug === "digital-marketing-mistakes-that-kill-creative-agencies"
          ? "pb-[92px] lg:pb-[128px]"
          : article.slug === "from-freelancer-to-agency-a-complete-growth-guide"
            ? "pb-[53px] lg:pb-[128px]"
            : article.slug === "how-to-price-your-services-for-maximum-profit"
              ? "pb-[82px] lg:pb-[128px]"
              : "pb-[71px] lg:pb-[128px]";
  const usesTightMobileArticleFlow =
    article.slug === "5-signs-your-brand-identity-needs-a-refresh";
  const usesExpandedMobileArticleEndGap =
    article.slug === "building-a-brand-that-stands-out-in-a-crowded-market";
  const usesPortfolioMobileOtherIntro =
    isCompactDetail ||
    article.slug === "the-psychology-behind-high-converting-landing-pages";
  const related = articles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 2);

  return (
    <main className="flex-1 bg-background">
      <article className={articleBottomPaddingClass}>
        <SiteHeader />

        <div
          className={`mx-auto max-w-[1000px] px-5 pt-[53px] sm:px-8 lg:px-0 ${
            isCompactDetail ? "lg:pt-[88px]" : "lg:pt-[70px]"
          }`}
        >
          <div className="grid gap-[13px] lg:grid-cols-[1fr_332px] lg:items-start lg:gap-8">
            <div>
              <div
                className={`flex flex-wrap gap-x-4 gap-y-2 text-base leading-[1.3] tracking-[-0.03em] lg:text-[20px] ${introTextColorClass}`}
              >
                <span>{article.category}</span>
                <span>{article.date}</span>
              </div>
              <h1
                className={`mt-[13px] max-w-[620px] text-[32px] font-medium leading-[1.2] tracking-[-0.03em] text-[#061218] lg:text-[clamp(2.75rem,3.75vw,3rem)] ${
                  isCompactDetail ? "lg:mt-[16px]" : "lg:mt-5"
                }`}
              >
                {article.title}
              </h1>
            </div>
            <p
              className={`max-w-[350px] text-base leading-[1.3] tracking-[-0.03em] lg:max-w-[332px] lg:text-[20px] ${introTextColorClass} ${
                isCompactDetail ? "lg:mt-[80px]" : "lg:mt-[83px]"
              }`}
            >
              {article.excerpt}
            </p>
          </div>

          <div className="mt-[13px] flex items-center gap-3 lg:hidden">
            <div className="overflow-hidden rounded-[4px] bg-white">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                width={40}
                height={40}
                sizes="40px"
                className="size-10 object-cover"
              />
            </div>
            <div>
              <p className="text-base font-medium leading-[1.3] tracking-[-0.02em] text-[#061218]">
                {article.author.name}
              </p>
              <p className="mt-1 text-sm leading-[1.3] tracking-[-0.03em] text-[#061218]">
                {article.author.role}
              </p>
            </div>
          </div>

          <div
            className={`relative mx-0 aspect-[1.45] overflow-hidden rounded-[4px] bg-white sm:mx-10 lg:mx-0 lg:aspect-auto ${
              usesTightMobileArticleFlow
                ? "mt-[58px]"
                : usesExpandedMobileArticleEndGap
                  ? "mt-[58px]"
                  : "mt-[54px]"
            } ${
              isCompactDetail ? "lg:mt-[85px] lg:h-[600px]" : "lg:mt-[76px] lg:h-[600px]"
            }`}
          >
            <Image
              src={article.image}
              alt={article.imageAlt ?? "Cover image"}
              fill
              loading="eager"
              sizes="(min-width: 1200px) min(100vw - 40px, 1000px), (min-width: 810px) and (max-width: 1199.98px) calc(min(100vw - 40px, 1000px) - 80px), (max-width: 809.98px) calc(100vw - 80px)"
              className="object-cover"
            />
          </div>

          <div
            className={`flex flex-col lg:gap-[40px] ${
              usesTightMobileArticleFlow ? "mt-[54px] gap-7" : "mt-[55px] gap-[35px]"
            } ${
              isCompactDetail ? "lg:mt-[52px]" : "lg:mt-[76px]"
            }`}
          >
            {article.content.map((section) => (
              <section key={section.heading}>
                <h3 className="text-2xl font-medium leading-[1.4] tracking-[-0.04em] text-black lg:text-[clamp(2rem,2.8vw,2.25rem)]">
                  {section.heading}
                </h3>
                <p className="mt-5 text-base leading-[1.3] tracking-[-0.03em] text-[#061218] lg:text-[20px]">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-11 hidden items-center gap-4 lg:flex">
            <div className="overflow-hidden rounded-[4px] bg-white">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                width={52}
                height={52}
                sizes="52px"
                className="size-[52px] object-cover"
              />
            </div>
            <div>
              <p className="text-2xl font-medium leading-[1.3] tracking-[-0.02em] text-[#061218]">
                {article.author.name}
              </p>
              <p className="text-base leading-[1.3] tracking-[-0.03em] text-[#061218]">
                {article.author.role}
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="px-5 pb-[87px] sm:px-8 sm:pb-[80px]">
        <div className="mx-auto max-w-[1000px]">
          <SectionLabel>{"//Other articles"}</SectionLabel>
          <div className="mt-[13px] flex flex-col gap-3 lg:grid lg:grid-cols-[1fr_330px] lg:mt-[13px] lg:items-end lg:gap-8">
            <h2 className="max-w-[353px] text-[40px] font-medium uppercase leading-[1.1] tracking-[-0.04em] text-[#061218] lg:max-w-[650px] lg:text-[clamp(3.75rem,5.3vw,4.25rem)] lg:leading-[1.1]">
              Explore More Insights
            </h2>
            <p className="max-w-[353px] text-[17px] leading-[1.3] tracking-[-0.03em] text-[#061218] lg:max-w-none lg:text-[20px]">
              {usesPortfolioMobileOtherIntro ? (
                <>
                  <span className="lg:hidden">
                    Our portfolio highlights creative, strategic work that
                    helps brands grow fast, efficiently.
                  </span>
                  <span className="hidden lg:inline">
                    Discover articles that help you refine your design,
                    strategy, and brand.
                  </span>
                </>
              ) : (
                "Discover articles that help you refine your design, strategy, and brand."
              )}
            </p>
          </div>

          <div
            className={`grid gap-6 md:grid-cols-2 lg:mt-[76px] ${
              usesTightMobileArticleFlow ? "mt-[55px]" : "mt-[58px]"
            }`}
          >
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/articles/${item.slug}`}
                className="group block h-full pb-5"
              >
                <div className="rounded-xl bg-white px-4 pb-0 pt-5">
                  <div className="relative aspect-[1.56] overflow-hidden bg-[#d9dddf] sm:aspect-[1.42]">
                    <Image
                      src={item.image}
                      alt="Cover image"
                      fill
                      sizes="(min-width: 768px) calc((min(100vw - 64px, 1000px) - 56px) / 2), calc(100vw - 72px)"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <p className="mx-4 mt-4 max-w-[321px] text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-[#061218] lg:max-w-[360px] lg:text-2xl">
                  {item.title}
                </p>
                <div className="mx-4 mt-2 flex flex-wrap gap-x-4 gap-y-2 text-base leading-[1.3] tracking-[-0.03em] text-[#061218]">
                  <span>{item.category}</span>
                  <span>{item.date}</span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
      <Contact compact />
      <Footer />
    </main>
  );
}
