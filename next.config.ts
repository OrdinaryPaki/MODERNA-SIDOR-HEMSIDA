import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/hemsida-1/solutions-detail/:slug",
        destination: "/hemsida-1/solutions/:slug",
        permanent: true,
      },
      {
        source: "/hemsida-1/luna-ai",
        destination: "/hemsida-1/solutions/luna-ai",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/our-work",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/projects/:slug",
        destination: "/solutions/:slug",
        permanent: true,
      },
      {
        source: "/luna-ai",
        destination: "/solutions/luna-ai",
        permanent: true,
      },
      {
        source: "/articles/:slug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
