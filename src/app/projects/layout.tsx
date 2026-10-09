import { notFound } from "next/navigation";
import { projectPagesEnabled } from "@/lib/project-visibility";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  if (!projectPagesEnabled) notFound();
  return children;
}
