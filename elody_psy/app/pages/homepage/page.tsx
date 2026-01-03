'use client';
import Image from "next/image";
export default function Homepage () {
  return ( 
    <main>
      <section className="bg-primary w-full h-auto md:h-[600px] py-8 md:py-0">
        <div className="flex flex-col md:flex-row w-full h-full items-start md:items-center justify-center md:justify-between px-6 md:px-36 gap-6 md:gap-0">
          <div className="flex justify-center w-full md:hidden mb-4">
            <Image
              src="/first_home.png"
              alt="Logo Elody"
              width={260}
              height={260}
              className="rounded-full w-[260px] aspect-square object-cover"
            />
          </div>
          <div className="flex flex-col flex-1 max-w-xl items-center md:items-start text-center md:text-left w-full md:w-auto px-4 md:px-0">
            <div className="w-full max-w-[340px] md:max-w-md">
            <h1 className="text-3xl md:text-4xl font-black uppercase text-secondary text-center md:text-left leading-tight">
              Psychopraticienne
            </h1>
            <p className="text-lg md:text-xl font-barlow text-black-custom font-bold mt-2 text-center md:text-left">
              Neurosciences <span className="mx-2">•</span>Émotion <span className="mx-2">•</span>Créativité
            </p>
            <p className="py-6 md:py-8 w-full text-justify md:text-left">
              Quand le cerveau, le corps et les émotions s&apos;accordent,
              tout redevient plus clair.<br></br> <span className="font-bold">J&apos;accompagne les personnes en burnout, surchargées,
              sensibles, TDAH ou neuro-atypiques</span> à comprendre leur
              fonctionnement grâce aux neurosciences, à la psychologie et à la régulation émotionnelle.
            </p>
            <div className="flex flex-col gap-4 w-full items-center md:items-start">
            <button className="bg-secondary text-white w-[202px] h-[62px] px-6 py-6 md:w-fit md:h-auto md:px-6 md:py-6 rounded-full font-barlow text-base md:text-lg font-bold hover:bg-secondary/90 transition-all whitespace-nowrap active:scale-95 cursor-pointer flex items-center justify-center">
            Réserver en ligne
          </button>
          <button  className="bg-white-custom hover:bg-white-custom/80 text-black-custom w-[202px] h-[62px] px-6 py-6 md:w-fit md:h-auto md:px-6 md:py-6 rounded-full font-barlow text-base md:text-lg font-bold transition-all whitespace-nowrap active:scale-95 cursor-pointer flex items-center justify-center">Appel découverte</button>
          </div>
          </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/first_home.png"
              alt="Logo Elody"
              width={300}
              height={400}
              className="rounded-lg w-[520px] h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
      <div className="w-7xl mx-auto">

      <section className="m-15 mx-15 bg-primary rounded-lg grid grid-cols-3">
        <div className="relative col-span-1">
        <Image src="/second_home.png" alt="Logo Elody" width={360} height={548} className="rounded-l-lg object-cover" />
        </div>
        <div className="flex flex-col gap-4 col-span-2 mx-auto px-20">
        <h1 className="text-3xl font-black text-secondary py-8">
          Explication d&apos;une séance</h1>
          <p className="">Chaque séance individuelle s&apos;inscrit dans une démarche psychothérapeutique
          intégrative, fondée sur les neurosciences, la psychologie et les thérapies cognitivo
          comportementales (TCC). 
          <span className="font-bold">J&apos;accompagne les profils sensibles, TDAH ou neuro-
          atypiques à comprendre en profondeur leurs schémas mentaux et émotionnels, à
          apaiser leur système nerveux et à retrouver un sentiment d&apos;équilibre durable.</span>
          </p>
          <p className="">Mon approche associe psychoéducation, régulation émotionnelle et restructuration
           cognitive pour t&apos;aider à reprendre le contrôle de ton énergie mentale et mieux
          naviguer tes émotions au quotidien. C&apos;est un espace de recentrage et d&apos;ajustement,
          sans jugement ni performance, où la compréhension de soi devient un véritable
          levier de transformation intérieure.</p>
          <div className="flex gap-4 py-8">
          <button className="bg-secondary text-white w-fit px-6 py-6 rounded-full font-barlow text-lg font-bold hover:bg-secondary/90 transition-all whitespace-nowrap active:scale-95 cursor-pointer">
            Réserver en ligne
          </button>
          <button  className="bg-white-custom hover:bg-white-custom/80 text-black-custom w-fit px-8 py-6 rounded-full font-barlow text-lg font-bold transition-all whitespace-nowrap active:scale-95 cursor-pointer">En savoir plus</button>
          </div>
          </div>
      </section>
      </div>
      <section className="bg-primary w-full py-16 mx-auto">
        <h1 className="text-3xl font-black text-secondary py-8 text-center">Prestations et tarifs</h1>
        <div className="max-w-2xl mx-auto flex flex-col gap-1 mb-8">
          <div className="bg-white-custom rounded-tl-lg rounded-tr-lg p-6 flex justify-between items-center">
            <span className="text-lg text-black-custom">Séance d&apos;1h</span>
            <span className="text-lg text-black-custom font-bold">60€</span>
          </div>
          <div className="bg-white-custom rounded-bl-lg rounded-br-lg p-6 flex justify-between items-center">
            <span className="text-lg text-black-custom">Appel découverte (20 min)</span>
            <span className="text-lg text-black-custom font-bold">Gratuit</span>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <button className="bg-secondary text-white w-fit px-6 py-6 rounded-full font-barlow text-lg font-bold hover:bg-secondary/90 transition-all whitespace-nowrap active:scale-95 cursor-pointer">
            Réserver en ligne
          </button>
          <button className="bg-white-custom hover:bg-white-custom/80 text-black-custom w-fit px-8 py-6 rounded-full font-barlow text-lg font-bold transition-all whitespace-nowrap active:scale-95 cursor-pointer">
            En savoir plus
          </button>
        </div>
      </section>
      <section className="bg-white-custom w-full py-16">
        <div className="max-w-7xl mx-auto px-16 flex items-start gap-12">
          <div className="flex flex-col gap-6 flex-1">
            <h1 className="text-4xl font-black text-secondary">Qui suis-je ?</h1>
            <p className="text-lg text-black-custom max-w-xl">
              Mes premières années de carrière se sont déroulées dans le domaine médical, en radiologie.
            </p>
            <p className="text-lg text-black-custom max-w-xl">
              Cette expérience m&apos;a permis de comprendre en profondeur le fonctionnement du corps, la rigueur du diagnostic, et la complexité du lien entre la santé physique et l&apos;état psychique.
            </p>
            <button className="bg-secondary text-white w-fit px-6 py-6 rounded-full font-barlow text-lg font-bold hover:bg-secondary/90 transition-all whitespace-nowrap active:scale-95 cursor-pointer mt-4">
              En savoir plus
            </button>
          </div>
          <div>
            <Image 
              src="/third_home.png" 
              alt="Elody" 
              width={327} 
              height={455} 
              className="rounded-lg object-cover" 
            />
          </div>
        </div>
      </section>
    </main>
  )}
