export default function myLoader({ src }) {
  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/Elody_Psy" : "";
  
  // Si l'image est déjà une URL complète, on ne touche à rien
  if (src.startsWith('http')) return src;
  
  return `${basePath}${src}`;
}