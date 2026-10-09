import { projectPagesEnabled } from "@/lib/project-visibility";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { ProjectDetail } from "@/components/projects/project-detail";

export const dynamicParams = false;

export function generateStaticParams() {
  if (!projectPagesEnabled) return [];
  return projects.filter(project => !("externalUrl" in project)).map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  if (!projectPagesEnabled) notFound();
  const project = getProject((await params).slug);
  return { title: project ? `${project.headline} | Moderna Sidor` : "Kunduppdrag | Moderna Sidor" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  if (!projectPagesEnabled) notFound();
  const project = getProject((await params).slug);
  if (!project || "externalUrl" in project) notFound();
  return <ProjectDetail project={project} />;
}
