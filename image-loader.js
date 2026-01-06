export default function myLoader({ src }) {
  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/Elody_Psy" : "";
  
  if (src.startsWith('http')) return src;
  
  // On s'assure qu'il n'y a pas de double slash
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
  
  return `${basePath}${normalizedSrc}`;
}