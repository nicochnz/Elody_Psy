'use client';

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function Presentation() {
  return (
    <div>
      <Header />
      <section className="bg-primary py-12 md:px-44">
        <h1 className="text-3xl font-black text-secondary py-8 text-center uppercase md:text-left">
          À propos de moi
        </h1>
        <Image
          src="/third_home.png"
          alt="À propos de moi"
          width={290}
          height={290}
          className="rounded-full justify-center mx-auto mb-8 aspect-square object-cover md:w-[1200px] md:h-[500px] md:rounded-lg"
        />
        <p className="py-2 px-12 md:px-0">
          <span className="font-bold">Je m’appelle Elody Adjei Owusu, psychopraticienne spécialisée </span> 
          en psychothérapie intégrative, neurosciences et régulation émotionnelle.
        </p>
        <p className="py-2 px-12 md:px-0">
          Mon parcours dans le domaine médical, notamment en radiologie, m’a permis de développer une compréhension rigoureuse du corps et du système nerveux. 
          Mais au-delà de la structure biologique, j’ai très vite perçu que la véritable santé repose sur un équilibre plus vaste : celui du psychique, de l’émotionnel et du corporel.
        </p>
        <p className="py-2 px-12 md:px-0">
          Après plusieurs années d’engagement dans le soin, j’ai traversé un burn-out et j’ai été diagnostiqué d’un
          <span className="font-bold"> TDAH</span>, une expérience fondatrice qui m’a confrontée à mes propres limites.
          Cette épreuve a nourri une conviction profonde :
          <span className="font-bold"> on ne soigne pas durablement ce que l’on ne comprend pas. </span>
        </p>
        <p className="py-2 px-12 mb-4 md:px-0">
          C’est ce qui m’a conduite à me former en thérapies 
          <span className="font-bold"> cognitivo-comportementales (TCC)</span>, en psychologie appliquée et en régulation du système nerveux, pour proposer aujourd’hui un accompagnement fondé sur la science, l’écoute et la transformation concrète.
        </p>
        <div className="bg-secondary text-white-custom font-bold text-[22px] px-6 py-4 rounded-lg w-72 md:w-full mx-auto flex gap-4 items-center mb-4 min-h-[144px]">
          <div className="w-[10px] self-stretch bg-white-custom shrink-0 my-2"></div>
          <p className="flex-1 wrap-break-word py-2">
            Mon approche s’adresse aux profils sensibles, TDAH et neuro-atypiques qui souhaitent comprendre leurs fonctionnements, sortir de la surcharge et retrouver une stabilité intérieure authentique.
          </p>
        </div>
        <p className="py-2 px-12 md:px-0">
          Je crois en une psychologie incarnée, à la fois humaine, structurée et exigeante, où la compréhension de soi devient un acte de puissance et de liberté.
        </p>
        <p className="py-2 px-12 md:px-0">
          <span className="font-bold">Chaque séance offre un espace de compréhension, d’observation et de transformation.</span> 
          En identifiant les schémas psychologiques et les réactions automatiques du système nerveux, on apprend à mieux se connaître, à apaiser le mental et à restaurer une stabilité émotionnelle durable.
        </p>
        <p className="py-2 px-12 md:px-0">
          Cet accompagnement <span className="font-bold">s’adresse particulièrement aux personnes sensibles, TDA(H) ou neuro-atypiques</span> qui se sentent souvent submergées par leurs émotions, leurs pensées ou leur environnement. 
          En combinant psychoéducation, exploration émotionnelle et outils issus des thérapies <span>cognitivo-comportementales (TCC)</span>, il aide à déconstruire les automatismes limitants et à renforcer la sécurité intérieure.
        </p>
      </section>

      <section id="approche" className="bg-white-custom py-12 px-7 md:py-24 md:px-20">
        <div className="bg-primary rounded-2xl overflow-hidden flex flex-col md:flex-row max-w-7xl mx-auto min-h-[548px]">
          <div className="relative w-full md:w-[30%] h-64 md:h-auto">
            <Image 
              src="/approche_1.png" 
              alt="Image de la présentation" 
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 px-6 py-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">
              Mon approche
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                Mes premières années de carrière se sont déroulées dans le domaine médical, en radiologie. Cette expérience m’a permis de comprendre en profondeur le fonctionnement du corps, la rigueur du diagnostic, et la complexité du lien entre la santé physique et l’état psychique. Mais au fil du temps, j’ai ressenti qu’il manquait 
                <span className="font-bold"> une dimension essentielle : celle de l’humain intérieur, de la compréhension de ce qui se joue derrière les symptômes visibles.</span>
              </p>
              <p>
                C’est ce constat qui m’a conduite à me former à la psychologie, aux 
                <span className="font-bold"> thérapies cognitivo-comportementales (TCC), à la régulation émotionnelle et aux neurosciences.</span> 
                Aujourd’hui, mon approche se veut psychothérapeutique et intégrative, alliant rigueur scientifique et écoute profonde du vécu émotionnel.
              </p>
              <p>
                <span className="font-bold">Un accompagnement psychothérapeutique et psycho-émotionnel permet de libérer les blocages intérieurs en reliant le corps, le mental et les émotions.</span> 
                Il s’appuie sur les neurosciences, la psychologie et la régulation émotionnelle pour comprendre les mécanismes profonds qui influencent ton état intérieur, tes comportements et ta façon de réagir au monde.
              </p>
            </div>
          </div>
        </div>
      </section>

      <figure id="reasons" className="relative w-full h-80 overflow-hidden bg-[url('/banniere_presentation_mobile.png')] bg-cover bg-center">
        <h2 className="flex text-white font-black text-3xl h-full text-center justify-center items-center">
          Pour quelles raisons consulter ?
        </h2>
      </figure>

      <section className="mt-10 px-10 md:px-44">
        <p className="text-secondary font-bold py-3">
          Nos modes de vie actuels, la surcharge mentale et la pression émotionnelle sollicitent constamment notre système nerveux. 
          Avec le temps, cela peut entraîner des troubles du sommeil, de la concentration, de l’humeur ou encore une fatigue chronique difficile à identifier.
        </p>
        <p className="py-3">
          Un accompagnement psychothérapeutique intégratif permet de mieux comprendre ces déséquilibres, d’en identifier l’origine et de rétablir un fonctionnement plus fluide et harmonieux.
        </p>
        <p>Tu peux envisager une séance si tu :</p>
        <ul className="list-disc py-3">
          <li className="ml-8 py-3">
            Ressens une fatigue mentale, émotionnelle ou physique persistante, sans cause médicale claire ;
          </li>
          <li className="ml-8 py-3">
            Vis des difficultés de concentration, d’attention ou de motivation liées au TDAH ou à une hypersensibilité ;
          </li>
          <li className="ml-8 py-3">
            Te sens souvent envahie par tes émotions (angoisse, irritabilité, peur, hyperactivité mentale, impulsivité) ;
          </li>
          <li className="ml-8 py-3">
            Répètes des schémas d’auto-sabotage, de surcontrôle ou de perfectionnisme ;
          </li>
          <li className="ml-8 py-3">
            Souhaites retrouver un équilibre intérieur durable, une clarté mentale et une stabilité émotionnelle.
          </li>
        </ul>
        <p className="py-3">
          Chaque séance, d’une durée d’une heure, est un temps pour ralentir, comprendre et transformer. 
          À travers des outils issus des neurosciences, de la psychologie et des thérapies cognitivo-comportementales (TCC), 
          je t’accompagne dans la régulation du système nerveux, la gestion émotionnelle et la reconstruction de ton équilibre psychique.
        </p>
        <p className="py-3">
          L’objectif est de t’aider à retrouver ton axe intérieur : un espace où le corps, le mental et les émotions se répondent enfin, dans un état de stabilité et de sécurité durable.
        </p>
        <Link 
          href="/pages/contact" 
          className="bg-secondary text-white px-8 py-4 rounded-full font-barlow text-lg font-bold hover:bg-secondary/90 transition-all shadow-md block text-center m-8 md:w-fit md:h-auto md:px-10 md:mx-auto md:py-6 md:text-lg"
        >
          Réserver en ligne
        </Link>
      </section>
      <Footer />
    </div>
  );
}
