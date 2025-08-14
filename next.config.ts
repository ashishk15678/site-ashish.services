import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["avatars.githubusercontent.com"],
  },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react"],
    optimisticClientCache: true,
  },
};

export default nextConfig;
