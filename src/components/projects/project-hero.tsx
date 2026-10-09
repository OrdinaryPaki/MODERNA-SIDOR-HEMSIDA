import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";
import { Reveal } from "@/components/shared/reveal";
import { ParallaxImage } from "@/components/shared/parallax-image";
import styles from "./project-detail.module.css";

export function ProjectHero({ project }: { project: Project }) {
  return <section className={styles.hero} aria-labelledby="project-title" style={{ "--hero-position": project.imagePosition } as CSSProperties}>
    <Reveal className={styles.heroBackgroundEntrance}>
      <ParallaxImage src={project.image} alt="" overscan={0} speed={0} zoom={.2} priority className={styles.heroBackground} />
    </Reveal>
    <div className={styles.heroOverlay} />
    <Reveal className={styles.heroContent}>
      <div className={styles.heroTags}>{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <h1 id="project-title">{project.headline}</h1>
    </Reveal>
  </section>;
}
