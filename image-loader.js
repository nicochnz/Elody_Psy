export default function myLoader({ src }) {
  // On GitHub Pages, on est en production
  // Le chemin doit commencer par le nom du dépôt
  const basePath = "/Elody_Psy";
  
  // Si on est en local (localhost), on ne veut pas de préfixe
  if (typeof window !== "undefined" && window.location.hostname === "localhost") {
    return src;
  }

  // Pendant le build (SSR), on ajoute le préfixe
  return `${basePath}${src}`;
}
