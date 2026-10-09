import { toArticleSummary, type Article } from "@/data/articles";
import { Reveal } from "@/components/shared/reveal";
import { ArticleList } from "./article-list";
import styles from "./blog.module.css";

export function MoreArticles({ articles }: { articles: Article[] }) {
  return <section className={styles.more} data-section="more-articles">
    <Reveal className={styles.reveal}><h2>More articles</h2><p className={styles.moreIntro}>Explore more insights from our team to deepen your understanding of digital strategy and web development best practices.</p></Reveal>
    <ArticleList articles={articles.map(toArticleSummary)} />
  </section>;
}
