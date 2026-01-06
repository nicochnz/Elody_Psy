import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/Elody_Psy" : "",
  // assetPrefix n'est pas nécessaire si basePath est bien configuré
  trailingSlash: true, 
  images: {
    // SURTOUT PAS de unoptimized: true ici, sinon le loader est ignoré
    loader: "custom",
    loaderFile: "./image-loader.js",
  },
};

export default nextConfig;