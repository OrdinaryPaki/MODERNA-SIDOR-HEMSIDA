import Image from "next/image";
import Link from "next/link";
import SectionLabel from "./SectionLabel";
import { articles } from "@/lib/articles";

export default function Blog() {
  return (
    <section
      id="blogg"
      className="bg-background px-5 pb-[69px] pt-[60px] sm:px-8 sm:pb-[89px] sm:pt-[71px]"
    >
      <SectionLabel>{"//08 Blog"}</SectionLabel>

      <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <h2 className="max-w-[353px] text-[46px] font-medium uppercase leading-[0.96] tracking-[-0.06em] sm:max-w-[524px] sm:text-[clamp(3rem,6.875vw,5.5rem)] sm:leading-[1.1] sm:tracking-[-0.04em]">
          Latest Insights
        </h2>
        <div className="flex w-full max-w-[353px] flex-col items-start gap-4 sm:mr-0 sm:mb-[1px] sm:max-w-[290px]">
          <p className="text-[17px] leading-[1.42] tracking-[-0.03em] text-[#061218] sm:text-xl sm:leading-[1.3] sm:tracking-[-0.04em]">
            Free advice on branding, design, marketing, and business growth
            from our team of experts.
          </p>
          <Link
            href="/blog"
            className="inline-flex h-[45px] w-[160px] items-center justify-center rounded-[4px] bg-[#1f75b2] text-base font-medium leading-[1.3] tracking-[-0.03em] text-white transition-colors hover:bg-[#1b679d]"
          >
            Read all articles
          </Link>
        </div>
      </div>

      <div className="mt-14 grid gap-4 sm:mt-[76px] sm:grid-cols-2 sm:gap-6">
        {articles.slice(0, 2).map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group block rounded-lg bg-white px-4 py-5"
          >
            <div className="relative aspect-[1.4] w-full overflow-hidden rounded-lg bg-[#d9dddf] sm:aspect-auto sm:h-[428px]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(min-width: 768px) 48vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="mt-4 max-w-[360px] text-[20px] font-medium leading-[1.28] tracking-[-0.04em] sm:text-2xl sm:leading-[1.3]">
              {article.title}
            </h3>
            <div className="mt-2 flex items-center gap-6 text-[15px] leading-[1.3] text-[#061218]/70 sm:gap-8 sm:text-base">
              <span>{article.category}</span>
              <span>{article.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
