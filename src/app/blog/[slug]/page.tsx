import { previewPagesEnabled } from "@/lib/preview-visibility";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/data/articles";
import { ArticleTemplate } from "@/components/blog/article-template";
export const dynamicParams = false;
export function generateStaticParams() { return previewPagesEnabled ? articles.map(article => ({ slug: article.slug })) : []; }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  if (!previewPagesEnabled) notFound();
  const { slug } = await params;
  return { title: `${getArticle(slug)?.title ?? "Artikel"} | Moderna Sidor` };
}
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  if (!previewPagesEnabled) notFound();
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticleTemplate article={article} />;
}
