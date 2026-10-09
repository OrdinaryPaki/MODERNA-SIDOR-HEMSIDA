import { notFound } from "next/navigation";
import { previewPagesEnabled } from "@/lib/preview-visibility";
import type { Metadata } from "next";
import Image from "next/image";
import { websiteExamples } from "@/data/examples";
import styles from "./examples.module.css";

export const metadata: Metadata = {
  title: "Designförhandsvisningar | Moderna Sidor",
  description: "Intern översikt över webbplatsens designförhandsvisningar.",
};

export default function ExamplesPage() {
  if (!previewPagesEnabled) notFound();
  return (
    <section className={styles.page} lang="sv" aria-labelledby="examples-title">
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Examples / 01—04</p>
        <h1 id="examples-title">Fyra webbplatser.<br />Fyra olika uttryck.</h1>
        <p className={styles.description}>Välj en webbplats för att öppna den och utforska hela designen.</p>
      </div>
      <div className={styles.grid}>
        {websiteExamples.map((example, index) => (
          <a className={styles.card} href={example.href} key={example.name} aria-label={`Öppna ${example.name}`}>
            <div className={styles.preview}>
              <Image src={example.image} alt={`Startsidan för ${example.name}`} width={1280} height={900} sizes="(max-width: 809px) calc(100vw - 40px), (max-width: 1400px) 45vw, 620px" preload={index < 2} />
              <span className={styles.open}>Öppna webbplats <span aria-hidden="true">↗</span></span>
            </div>
            <div className={styles.caption}>
              <span className={styles.number}>0{index + 1}</span>
              <div><h2>{example.name}</h2><p>{example.description}</p></div>
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
