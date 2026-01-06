const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/Elody_Psy" : "",
  assetPrefix: isProd ? "/Elody_Psy/" : "",
  images: {
    unoptimized: true, // <<< Important !
  },
};

module.exports = nextConfig;

