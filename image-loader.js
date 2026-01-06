export default function myLoader({ src }) {
  // Si on est en local (localhost), on ne veut pas de préfixe.
  // Pendant le build (côté serveur), 'window' est indéfini, donc on applique le préfixe.
  const isLocal = typeof window !== "undefined" && window.location.hostname === "localhost";
  const basePath = isLocal ? "" : "/Elody_Psy";
  
  if (src.startsWith('http')) return src;
  
  // On s'assure que le chemin commence par un seul slash
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
  
  return `${basePath}${normalizedSrc}`;
}