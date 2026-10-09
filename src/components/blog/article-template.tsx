import type { Article } from "@/data/articles";
import { getRelatedArticles } from "@/data/articles";
import { ParallaxImage } from "@/components/shared/parallax-image";
import { Reveal } from "@/components/shared/reveal";
import { MoreArticles } from "./more-articles";
import styles from "./blog.module.css";

export function ArticleTemplate({ article }: { article: Article }) {
  return <div>
    <section className={styles.articleHero} data-section="article-hero">
      <div className={styles.heroImage}><ParallaxImage src={article.image} overscan={90} speed={0} zoom={.2} priority className={styles.heroParallax} /></div><div className={styles.heroOverlay} />
      <Reveal className={styles.heroContent}><h1>{article.title}</h1>
        <div className={styles.meta}><div className={styles.author}><img src={article.avatar} alt={article.author} /><div><p>{article.author}</p><p className={styles.authorDate}>{article.date}</p></div></div>
          <div className={styles.share} aria-label="Article sharing controls">{["facebook", "x", "linkedin"].map(network => <button type="button" aria-label={network === "x" ? "X" : network === "linkedin" ? "LinkedIn" : "Facebook"} key={network}><img src={`/assets/blog/${network}.svg`} alt="" /></button>)}</div>
        </div>
      </Reveal>
    </section>
    <article className={styles.body} data-section="article-body">{article.body.map((block, index) => {
      const Tag = block.tag;
      return <Tag key={index}>{block.text}</Tag>;
    })}</article>
    <MoreArticles articles={getRelatedArticles(article.slug)} />
  </div>;
}
