import { notFound } from "next/navigation";
import { aboutPageEnabled } from "@/lib/about-visibility";
import { AboutHero } from "@/components/unique/about-hero";
import { AboutStory } from "@/components/unique/about-story";
import { AboutTeam } from "@/components/unique/about-team";
import { AboutLife } from "@/components/unique/about-life";

export default function AboutPage() {
  if (!aboutPageEnabled) notFound();

  return <><AboutHero /><AboutStory /><AboutTeam /><AboutLife /></>;
}
