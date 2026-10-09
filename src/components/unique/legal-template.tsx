import legalBackground from "../../../public/assets/unique/legal-background.webp";
import type { LegalDocument } from "@/data/legal";
import { ParallaxImage } from "@/components/shared/parallax-image";
import { Reveal } from "@/components/shared/reveal";
import styles from "./legal.module.css";

export function LegalTemplate({ document }: { document: LegalDocument }) {
  const updated = document.updated ?? {
    label: "Last Updated:",
    dateTime: "2025-01-15",
    text: "Jan 15, 2025",
  };
  return <div className={styles.document} lang={document.lang}>
    <section className={styles.hero} data-section="legal-hero"><Reveal className={styles.backgroundEntrance}><ParallaxImage src={legalBackground} className={styles.background} overscan={90} speed={0} zoom={.2} priority /></Reveal><div className={styles.overlay} /><Reveal className={`${styles.heroContent} ${styles.entrance}`}><h1>{document.title}</h1><div className={styles.updated}><p>{updated.label}</p><p><time dateTime={updated.dateTime}>{updated.text}</time></p></div></Reveal></section>
    <section className={styles.body} data-section="legal-content"><div className={styles.content}>{document.blocks.map((block, index) => block.type === "list" ? <ul key={index}>{block.items.map(item => <li key={item}>{item}</li>)}</ul> : <block.type key={index}>{block.text}</block.type>)}</div></section>
  </div>;
}
