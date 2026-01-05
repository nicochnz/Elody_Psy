'use client';

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Image from "next/image";
export default function Presentation() {
  return (
    <div>
      <Header/>
      <section className="bg-primary">
        <h1 className="text-3xl font-black text-secondary py-8 text-center uppercase">À propos de moi</h1>
        <Image src="/third_home.png" alt="À propos de moi" width={290} height={290} className="rounded-full justify-center mx-auto mb-8 aspect-square object-cover" />
        <p className="py-2 px-12"><span className="font-bold">Je m’appelle Elody Adjei Owusu, psychopraticienne spécialisée </span> en psychothérapie intégrative, neurosciences et régulation émotionnelle. </p>
        <p className="py-2 px-12">Mon parcours dans le domaine médical, notamment en radiologie, m’a permis de développer une compréhension rigoureuse du corps et du système nerveux. Mais au-delà de la structure biologique, j’ai très vite perçu que la véritable santé repose sur un équilibre plus vaste : celui du psychique, de l’émotionnel et du corporel.</p>
        <p className="py-2 px-12">Après plusieurs années d’engagement dans le soin, j’ai traversé un burn-out et j’ai été diagnostiqué d’un<span className="font-bold"> TDAH</span>, une expérience fondatrice qui m’a confrontée à mes propres limites.Cette épreuve a nourri une conviction profonde :<span className="font-bold"> on ne soigne pas durablement ce que l’on ne comprend pas. </span></p>
        <p className="py-2 px-12 mb-4">C’est ce qui m’a conduite à me former en thérapies <span className="font-bold"> cognitivo-comportementales (TCC) </span>, en psychologie appliquée et en régulation du système nerveux, pour proposer aujourd’hui un accompagnement fondé sur la science, l’écoute et la transformation concrète.</p>
        <div className="bg-secondary text-white-custom font-bold text-[22px] px-4 py-2 rounded-lg w-72 mx-auto flex gap-4 items-center mb-4">
          <Image src="/rec_pres.png" alt="Image de la présentation" width={10} height={90} className="object-cover shrink-0" />
          <p className="flex-1 flex items-center wrap-break-word overflow-hidden">
            Mon approche s’adresse aux profils sensibles, TDAH et neuro-atypiques qui souhaitent comprendre leurs fonctionnements, sortir de la surcharge et retrouver une stabilité intérieure authentique.
          </p>
        </div>
        <p className="py-2 px-12">Je crois en une psychologie incarnée, à la fois humaine, structurée et exigeante, où la compréhension de soi devient un acte de puissance et de liberté. </p>
        <p className="py-2 px-12">Chaque séance offre un espace de compréhension, d’observation et de transformation. En identifiant les schémas psychologiques et les réactions automatiques du système nerveux, on apprend à mieux se connaître, à apaiser le mental et à restaurer une stabilité émotionnelle durable. </p>
        <p className="py-2 px-12">Cet accompagnement s’adresse particulièrement aux personnes sensibles, TDA(H) ou neuro-atypiques, qui se sentent souvent submergées par leurs émotions, leurs pensées ou leur environnement. En combinant psychoéducation, exploration émotionnelle et outils issus des thérapies cognitivo-comportementales (TCC), il aide à déconstruire les automatismes limitants et à renforcer la sécurité intérieure. </p>
      </section>
      <Footer />
    </div>
  );
}