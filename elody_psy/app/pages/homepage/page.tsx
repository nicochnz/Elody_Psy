'use client';
import Image from "next/image";
export default function Homepage () {
  return ( 
    <main className="">
      <section className="bg-primary w-full h-[500px]">
        <div className="flex w-full h-full items-center justify-between">
          <div className="flex flex-col gap-4 flex-1 max-w-xl pl-8">
            <h1 className="text-2xl font-bold uppercase text-secondary">Psychopraticienne</h1>
            <p className="text-[10px] md:text-[13px] font-barlow text-black-custom/80 tracking-widest uppercase">
              Neurosciences <span className="text-secondary">•</span> Emotion <span className="text-secondary">•</span> Créativité
            </p>
            <p>
              Quand le cerveau, le corps et les émotions s’accordent,
              tout redevient plus clair. <span className="font-bold">J’accompagne les personnes en burnout, surchargées,
              sensibles, TDAH ou neuro-atypiques</span> à comprendre leur
              fonctionnement grâce aux neurosciences, à la psychologie et à la régulation émotionnelle.
            </p>
          </div>
          <div className="pr-12">
            <Image
              src="/test_home.jpg"
              alt="Logo Elody"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </main>
  )}