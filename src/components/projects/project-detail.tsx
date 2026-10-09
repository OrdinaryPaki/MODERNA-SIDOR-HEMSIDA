import type { CaseStudyProject } from "@/data/projects";
import { getRelatedProjects } from "@/data/projects";
import { Reveal } from "@/components/shared/reveal";
import { ParallaxImage } from "@/components/shared/parallax-image";
import { Button } from "@/components/shared/button";
import { ProjectCard } from "./project-card";
import { ProjectHero } from "./project-hero";
import styles from "./project-detail.module.css";

function ProjectNarrative({ heading, children, accent = false }: { heading: string; children: string; accent?: boolean }) {
  return <Reveal className={`${styles.narrative} ${accent ? styles.accent : ""}`}>
    <h2>{heading}</h2>
    <p>{children}</p>
  </Reveal>;
}

function ProjectImage({ src, small = false }: { src: string; small?: boolean }) {
  return <ParallaxImage src={src} alt="Project design detail" overscan={0} speed={0} className={`${styles.galleryImage} ${small ? styles.smallImage : ""}`} />;
}

export function ProjectDetail({ project }: { project: CaseStudyProject }) {
  return <article>
    <ProjectHero project={project} />
    <section className={styles.intro} aria-label="Project overview">
      <Reveal className={styles.introContent}>
        <dl className={styles.facts}>{Object.entries(project.facts).map(([name, value]) => <div key={name}><dt>{name === "timeframe" ? "Timeframe" : name === "client" ? "Client" : "Year"}</dt><dd>{value}</dd></div>)}</dl>
        <p>{project.intro}</p>
      </Reveal>
      <div className={styles.divider} />
    </section>
    <section className={styles.body} aria-label="Challenge and solution">
      <ProjectNarrative heading="The challenge">{project.challenge}</ProjectNarrative>
      <Reveal><ProjectImage src={project.gallery[0]} /></Reveal>
      <ProjectNarrative heading="The solution" accent>{project.solution}</ProjectNarrative>
      <div className={styles.gallery}>
        <Reveal><ProjectImage src={project.gallery[1]} /></Reveal>
        <div className={styles.imagePair}>{project.gallery.slice(2, 4).map(src => <Reveal key={src}><ProjectImage src={src} small /></Reveal>)}</div>
        <Reveal><ProjectImage src={project.gallery[4]} /></Reveal>
      </div>
    </section>
    <section className={styles.related} aria-labelledby="related-title">
      <Reveal className={styles.relatedHeading}>
        <div><h2 id="related-title">Discover other projects</h2><p>Dive into our diverse collection of innovative projects, where creativity meets cutting-edge technology to solve real-world challenges</p></div>
        <Button href="/projects" variant="text">All projects</Button>
      </Reveal>
      <div className={styles.relatedGrid}>{getRelatedProjects(project.slug).map(project => <Reveal key={project.slug}><ProjectCard project={project} horizontalCaption mobileParallaxRange={150} /></Reveal>)}</div>
    </section>
  </article>;
}
