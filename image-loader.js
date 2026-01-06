export default function myLoader({ src }) {
  const basePath = process.env.NODE_ENV === "production" ? "/Elody_Psy" : "";
  return `${basePath}${src}`;
}
