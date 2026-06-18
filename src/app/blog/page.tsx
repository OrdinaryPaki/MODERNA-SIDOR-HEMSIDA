import type { Metadata } from "next";
import BlogPage from "@/components/pages/BlogPage";

export const metadata: Metadata = {
  title: "Design Tips & Tutorials – Nori Studio Blog",
  description:
    "Stay updated with web design trends, Framer tutorials, and creative inspiration from the Nori Studio blog for modern website creators..",
};

export default function Page() {
  return <BlogPage />;
}
