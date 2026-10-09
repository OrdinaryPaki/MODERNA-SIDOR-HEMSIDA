"use client";
import { useState } from "react";
import type { ArticleSummary } from "@/data/articles";
import { BlogCard } from "./blog-card";
import styles from "./blog.module.css";

export function ArticleList({ articles, initialCount = 6 }: { articles: ArticleSummary[]; initialCount?: number }) {
  const [count, setCount] = useState(initialCount);
  return <div className={styles.list}>
    {articles.map((article, index) => <div data-reveal className={styles.reveal} key={article.slug} hidden={index >= count}><BlogCard article={article} /></div>)}
    <button type="button" className={styles.loadMore} onClick={() => setCount(n => Math.min(n + 6, articles.length))}>Load More<span aria-hidden="true">+</span></button>
  </div>;
}
