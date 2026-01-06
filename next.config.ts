import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/Elody_Psy" : "",
  assetPrefix: isProd ? "/Elody_Psy/" : "", 
  trailingSlash: true, // Aide GitHub Pages à trouver les fichiers lors de la navigation
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./image-loader.js",
  },
};

export default nextConfig;