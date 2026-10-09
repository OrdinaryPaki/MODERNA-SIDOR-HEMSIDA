import { getProjectHref } from "@/lib/project-visibility";
import type { CSSProperties } from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectCardImage } from "./project-card-image";
import { ComingSoonProjectCard } from "./coming-soon-project-card";
import styles from "./project-card.module.css";

export function ProjectCard({ project, aspectRatio = 1.47862, className = "", priority = false, horizontalCaption = false, mobileParallaxRange = 80, sizes }: {
  project: Project;
  sizes?: string;
  aspectRatio?: number;
  className?: string;
  priority?: boolean;
  horizontalCaption?: boolean;
  mobileParallaxRange?: number;
}) {
  const href = getProjectHref(project);
  const cardProps = {
    className: `${styles.card} ${horizontalCaption ? styles.horizontal : ""} ${className}`,
    style: { "--project-image-ratio": project.imageAspectRatio ?? aspectRatio } as CSSProperties,
  };
  const content = <>
    <ProjectCardImage src={project.image} alt={project.headline} sizes={sizes} priority={priority} mobileRange={mobileParallaxRange} parallax={project.imageParallax} objectPosition={project.imageParallax === false ? project.imagePosition : undefined} />
    <div className={styles.caption}>
      <h3>{project.title}</h3>
      <div className={styles.tags}>{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    </div>
  </>;
  if ("comingSoon" in project && project.comingSoon) {
    return <ComingSoonProjectCard {...cardProps}>{content}</ComingSoonProjectCard>;
  }
  return href
    ? <Link href={href} {...cardProps}>{content}</Link>
    : <article {...cardProps}>{content}</article>;
}
