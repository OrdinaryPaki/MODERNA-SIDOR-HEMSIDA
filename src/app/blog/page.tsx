import { notFound } from "next/navigation";
import { previewPagesEnabled } from "@/lib/preview-visibility";
import { articles } from "@/data/articles";
import { BlogCard } from "@/components/blog/blog-card";
import { MoreArticles } from "@/components/blog/more-articles";
import { Reveal } from "@/components/shared/reveal";
import styles from "@/components/blog/blog.module.css";
export const metadata = { title: "Artikelförhandsvisning | Moderna Sidor" };
export default function BlogPage() {
  if (!previewPagesEnabled) notFound();
  return <div className={styles.index}>
    <section className={styles.indexHero} data-section="blog-hero"><Reveal className={styles.reveal}><h1>Fresh insights &amp; industry perspectives</h1></Reveal><Reveal className={styles.reveal}><p>Dive into our latest thinking on web development, digital strategy, and industry trends to help shape your next digital move and stay ahead of what&apos;s coming.</p></Reveal></section>
    <section className={styles.featuredGrid} data-section="featured-articles"><Reveal className={styles.reveal}><BlogCard article={articles[0]} featured /></Reveal><div className={styles.featuredPair}>{articles.slice(1, 3).map(article => <Reveal className={styles.reveal} key={article.slug}><BlogCard article={article} featured /></Reveal>)}</div></section>
    <MoreArticles articles={articles.slice(3, 10)} />
  </div>;
}
