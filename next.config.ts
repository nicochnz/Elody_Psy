import type { NextConfig } from "next";
const repoName = "Elody_Psy";
const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
