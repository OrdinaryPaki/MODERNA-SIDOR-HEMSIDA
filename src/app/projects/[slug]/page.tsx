import { notFound } from "next/navigation";
import ProjectDetailPage from "@/components/pages/ProjectDetailPage";
import { getProject, projects } from "@/lib/projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Projekt saknas – Moderna Sidor",
    };
  }

  return {
    title: `${project.title} – Moderna Sidor`,
    description: project.summary,
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
