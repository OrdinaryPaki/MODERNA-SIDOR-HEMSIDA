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
      title: "Project not found – Nori Studio",
    };
  }

  return {
    title: "Nori Studio – Design Agency Website Template",
    description:
      "Nori Studio is a modern design agency website template built with Framer. Perfect for agencies, studios, and freelancers to showcase their work online.",
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
