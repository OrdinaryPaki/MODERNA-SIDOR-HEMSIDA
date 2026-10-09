import type { NextConfig } from "next";

const config: NextConfig = {
  devIndicators: false,
  turbopack: { root: process.cwd() },
  images: { qualities: [75, 90], formats: ["image/webp"] },
  async headers() {
    // Versioned Next assets keep their automatic immutable cache policy.
    // Public files can change at the same URL, so give them a bounded lifetime.
    return ["/assets/:path*", "/brand/:path*", "/fonts/:path*"].map(source => ({
      source,
      headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=86400" }],
    }));
  },
};
export default config;
