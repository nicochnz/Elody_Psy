'use client';
import Image from "next/image";
export default function Homepage () {
  return ( 
    <main>
      <section className="bg-primary w-full h-[600px]">
        <div className="flex w-full h-full items-center justify-between px-36">
          <div className="flex flex-col flex-1 max-w-xl">
            <div className="max-w-md">
            <h1 className="text-4xl font-black uppercase text-secondary">Psychopraticienne</h1>
            <p className="text-xl font-barlow text-black-custom font-bold">
              Neurosciences <span className="mx-2"></span>Émotion <span className="mx-2"></span>Créativité
            </p>
            <p className="py-8 w-1xl">
              Quand le cerveau, le corps et les émotions s’accordent,
              tout redevient plus clair.<br></br> <span className="font-bold">J’accompagne les personnes en burnout, surchargées,
              sensibles, TDAH ou neuro-atypiques</span> à comprendre leur
              fonctionnement grâce aux neurosciences, à la psychologie et à la régulation émotionnelle.
            </p>
            <div className="flex flex-col gap-4">
            <button className="bg-secondary text-white w-fit px-6 py-6 rounded-full font-barlow text-lg font-bold hover:bg-secondary/90 transition-all whitespace-nowrap active:scale-95 cursor-pointer">
            Réserver en ligne
          </button>
          <button  className="bg-white-custom hover:bg-white-custom/80 text-black-custom w-fit px-6 py-6 rounded-full font-barlow text-lg font-bold transition-all whitespace-nowrap active:scale-95 cursor-pointer">Appel découverte</button>
          </div>
          </div>
          </div>
          <div className="">
            <Image
              src="/test_home.jpg"
              alt="Logo Elody"
              width={300}
              height={300
              }
              className="rounded-lg w-lg h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
      <div className="w-full">

      <section className="m-15 mx-15 bg-primary rounded-lg grid grid-cols-3">
        <div className="relative col-span-1">
        <Image src="/test_home.jpg" alt="Logo Elody" fill className="rounded-l-lg aspect-3/2 object-cover" />
        </div>
        <div className="flex flex-col gap-4 col-span-2 mx-auto px-20">
        <h1 className="text-3xl font-black text-secondary py-8">
          Explication d&apos;une séance</h1>
          <p className="">Chaque séance individuelle s&apos;inscrit dans une démarche psychothérapeutique
          intégrative, fondée sur les neurosciences, la psychologie et les thérapies cognitivo
          comportementales (TCC). 
          <span className="font-bold">J’accompagne les profils sensibles, TDAH ou neuro-
          atypiques à comprendre en profondeur leurs schémas mentaux et émotionnels, à
          apaiser leur système nerveux et à retrouver un sentiment d’équilibre durable.</span>
          </p>
          <p className="">Mon approche associe psychoéducation, régulation émotionnelle et restructuration
           cognitive pour t’aider à reprendre le contrôle de ton énergie mentale et mieux
          naviguer tes émotions au quotidien. C’est un espace de recentrage et d’ajustement,
          sans jugement ni performance, où la compréhension de soi devient un véritable
          levier de transformation intérieure.</p>
          <div className="flex gap-4 py-8">
          <button className="bg-secondary text-white w-fit px-16 py-4 rounded-4xl font-barlow text-lg font-bold hover:bg-secondary/90 transition-all whitespace-nowrap active:scale-95 cursor-pointer">
            Réserver en ligne
          </button>
          <button  className="bg-white-custom hover:bg-white-custom/80 text-black-custom w-fit px-16 py-4 rounded-4xl font-barlow text-lg font-bold transition-all whitespace-nowrap active:scale-95 cursor-pointer">Appel découverte</button>
          </div>
          </div>
      </section>
      </div>
    </main>
  )}