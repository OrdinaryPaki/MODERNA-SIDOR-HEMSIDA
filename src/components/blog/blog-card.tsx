import Link from "next/link";
import type { ArticleSummary } from "@/data/articles";
import styles from "./blog.module.css";

export function BlogCard({ article, featured = false }: { article: ArticleSummary; featured?: boolean }) {
  return <Link href={`/blog/${article.slug}`} className={`${styles.card} ${featured ? styles.featured : styles.row}`} data-blog-card>
    <div className={styles.cardImage}><img src={article.thumbnail ?? article.image} alt="" loading="lazy" /></div>
    <p className={styles.date}>{article.date}</p>
    <p className={styles.cardTitle}>{article.title}</p>
  </Link>;
}
