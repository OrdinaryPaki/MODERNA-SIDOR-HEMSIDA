import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/shared/reveal";
import styles from "./projects.module.css";

export const metadata = { title: "Kunduppdrag | Moderna Sidor" };

export default function ProjectsPage() {
  return <section className={styles.projects} aria-labelledby="projects-title">
    <Reveal className={styles.heading}>
      <h1 id="projects-title">Discover our recent projects</h1>
      <p>Explore how we&apos;ve helped ambitious businesses transform their digital presence through thoughtfully crafted websites and applications that deliver meaningful results.</p>
    </Reveal>
    <Reveal className={styles.grid}>{projects.map((project, index) => <ProjectCard key={project.slug} project={project} priority={index < 2} />)}</Reveal>
  </section>;
}
