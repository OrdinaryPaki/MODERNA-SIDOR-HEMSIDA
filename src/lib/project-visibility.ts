import type { Project } from "@/data/projects";

// Development previews only. Production builds stay closed, even on localhost.
export const projectPagesEnabled = process.env.NODE_ENV === "development";

export const projectOverviewHref = projectPagesEnabled ? "/projects" : "/#projects";

export function getProjectHref(project: Project): string | undefined {
  if ("comingSoon" in project && project.comingSoon) return undefined;
  if ("externalUrl" in project) return project.externalUrl;
  return projectPagesEnabled ? `/projects/${project.slug}` : undefined;
}
