import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticlePage from "@/components/pages/ArticlePage";
import { articles, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: "Article not found – Nori Studio",
    };
  }

  return {
    title: `${article.title} - Nori studio Template`,
    description: article.metaDescription ?? article.excerpt,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return <ArticlePage article={article} />;
}
