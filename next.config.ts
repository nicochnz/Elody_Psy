const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/Elody_Psy" : "",
  assetPrefix: isProd ? "/Elody_Psy/" : "",
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./image-loader.js", // fichier qu’on crée juste en dessous
  },
};

module.exports = nextConfig;
