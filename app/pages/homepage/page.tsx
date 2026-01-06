'use client';
import Image from "next/image";
import Link from "next/link";

export default function Homepage() {
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
              <h1 className="text-3xl  text-center  md:text-4xl font-black uppercase text-secondary md:text-left leading-tight">
                Psychopraticienne
              </h1>
              <p className="text-xs md:text-xl font-barlow text-black-custom font-bold mt-2 text-center md:text-left">
                Neurosciences <span className="mx-2">•</span>Émotion <span className="mx-2">•</span>Créativité
              </p>
              <p className="py-6 md:py-8 w-full text-justify md:text-left">
                Quand le cerveau, le corps et les émotions s&apos;accordent,
                tout redevient plus clair.<br></br> <span className="font-bold">J&apos;accompagne les personnes en burnout, surchargées,
                sensibles, TDAH ou neuro-atypiques</span> à comprendre leur
                fonctionnement grâce aux neurosciences, à la psychologie et à la régulation émotionnelle.
              </p>
              <div className="flex flex-col gap-4 w-full items-center md:items-start">
                <Link 
                  href="/pages/contact"
                  className="bg-secondary text-white w-[202px] h-[62px] md:w-fit md:h-auto md:px-6 md:py-6 rounded-full font-barlow text-base md:text-lg font-bold hover:bg-secondary/90 transition-all whitespace-nowrap active:scale-95 cursor-pointer flex items-center justify-center"
                >
                  Réserver en ligne
                </Link>
                <Link 
                  href="/pages/contact"
                  className="bg-white-custom hover:bg-white-custom/80 text-black-custom w-[202px] h-[62px] md:w-fit md:h-auto md:px-6 md:py-6 rounded-full font-barlow text-base md:text-lg font-bold transition-all whitespace-nowrap active:scale-95 cursor-pointer flex items-center justify-center"
                >
                  Appel découverte
                </Link>
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

      <div className="max-w-7xl mx-auto w-full px-4 md:px-0">
        <section className="mx-auto my-10 max-w-[330px] md:max-w-none md:my-15 bg-primary rounded-[15px] overflow-hidden grid grid-cols-1 md:grid-cols-3">
          <div className="relative col-span-1 h-[193px] md:h-auto">
            <Image
              src="/second_home.png"
              alt="Logo Elody"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 text-left col-span-1 md:col-span-2 mx-auto px-6 md:px-20 py-8 md:py-12">
            <h1 className="text-3xl text-left font-black text-secondary md:py-4 md:text-left">
              Explication d&apos;une séance
            </h1>
            <p className="md:text-left">
              Chaque séance individuelle s&apos;inscrit dans une démarche psychothérapeutique
              intégrative, fondée sur les neurosciences, la psychologie et les thérapies cognitivo
              comportementales (TCC).<br></br>
              <span className="font-bold">J&apos;accompagne les profils sensibles, TDAH ou neuro-
              atypiques à comprendre en profondeur leurs schémas mentaux et émotionnels, à
              apaiser leur système nerveux et à retrouver un sentiment d&apos;équilibre durable.</span>
            </p>
            <p className=" md:text-left">
              Mon approche associe psychoéducation, régulation émotionnelle et restructuration
              cognitive pour t&apos;aider à reprendre le contrôle de ton énergie mentale et mieux
              naviguer tes émotions au quotidien. C&apos;est un espace de recentrage et d&apos;ajustement,
              sans jugement ni performance, où la compréhension de soi devient un véritable
              levier de transformation intérieure.
            </p>
            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 pt-6">
              <Link 
                href="/pages/contact"
                className="bg-secondary text-white w-[202px] h-[62px] md:w-fit md:h-auto md:px-6 md:py-6 rounded-full font-barlow text-base md:text-lg font-bold hover:bg-secondary/90 transition-all whitespace-nowrap active:scale-95 cursor-pointer flex items-center justify-center"
              >
                Réserver en ligne
              </Link>
              <Link 
                href="/pages/presentation"
                className="bg-white-custom hover:bg-white-custom/80 text-black-custom w-[202px] h-[62px] md:w-fit md:h-auto md:px-8 md:py-6 rounded-full font-barlow text-base md:text-lg font-bold transition-all whitespace-nowrap active:scale-95 cursor-pointer flex items-center justify-center"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-primary w-full py-16 mx-auto">
        <h1 className="text-3xl font-black text-secondary py-8 text-center">Prestations et tarifs</h1>
        <div className="max-w-2xl mx-auto flex flex-col gap-1 mb-8 px-4 md:px-0">
          <div className="bg-white-custom rounded-tl-lg rounded-tr-lg p-6 flex justify-between items-center">
            <span className="text-lg text-black-custom">Séance d&apos;1h</span>
            <span className="text-lg text-black-custom font-bold">60€</span>
          </div>
          <div className="bg-white-custom rounded-bl-lg rounded-br-lg p-6 flex justify-between items-center">
            <span className="text-lg text-black-custom">Appel découverte (20 min)</span>
            <span className="text-lg text-black-custom font-bold">Gratuit</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center px-4">
          <Link 
            href="/pages/contact"
            className="bg-secondary text-white w-[202px] h-[62px] md:w-fit md:h-auto md:px-6 md:py-6 rounded-full font-barlow text-base md:text-lg font-bold hover:bg-secondary/90 transition-all whitespace-nowrap active:scale-95 cursor-pointer flex items-center justify-center"
          >
            Réserver en ligne
          </Link>
          <Link 
            href="/pages/tarifs"
            className="bg-white-custom hover:bg-white-custom/80 text-black-custom w-[202px] h-[62px] md:w-fit md:h-auto md:px-8 md:py-6 rounded-full font-barlow text-base md:text-lg font-bold transition-all whitespace-nowrap active:scale-95 cursor-pointer flex items-center justify-center"
          >
            En savoir plus
          </Link>
        </div>
      </section>

      <section className="bg-white-custom w-full py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="flex flex-col gap-6 flex-1 order-2 md:order-1 items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl font-black text-secondary">Qui suis-je ?</h1>
            <p className="text-lg text-black-custom max-w-xl text-justify md:text-left">
              Mes premières années de carrière se sont déroulées dans le domaine médical, en radiologie.
            </p>
            <p className="text-lg text-black-custom max-w-xl text-justify md:text-left">
              Cette expérience m&apos;a permis de comprendre en profondeur le fonctionnement du corps, la rigueur du diagnostic, et la complexité du lien entre la santé physique et l&apos;état psychique.
            </p>
            <Link 
              href="/pages/presentation"
              className="bg-secondary text-white w-[202px] h-[62px] md:w-fit md:h-auto md:px-6 md:py-6 rounded-full font-barlow text-base md:text-lg font-bold hover:bg-secondary/90 transition-all whitespace-nowrap active:scale-95 cursor-pointer flex items-center justify-center mt-4"
            >
              En savoir plus
            </Link>
          </div>
          <div className="order-1 md:order-2 mb-8 md:mb-0">
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
  );
}
