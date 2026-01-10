'use client';

import { useState, FormEvent } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sanitizedPhone = telephone.replace(/\D/g, "");

    if (sanitizedPhone.length !== 10) {
      setError("Le numéro doit contenir exactement 10 chiffres.");
      return;
    }

    setError("");
    const subject = encodeURIComponent("Demande d'appel découverte");
    const body = encodeURIComponent(
      `Bonjour, je suis intéressé(e) par l'appel découverte, je m'appelle ${nom} ${prenom} et mon numéro de téléphone est le ${telephone}.`
    );

    window.location.href = `mailto:elody.adjei33@live.fr?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <Header />
      <section className="bg-primary py-12 md:px-44">
        <h1 className="text-secondary text-2xl font-black text-center uppercase px-7">Réserver mon créneau</h1>
        <p className="py-2 px-7 text-center">Choisissez un créneau disponible pour notre prochain rendez-vous</p>
        {/* Calendly widget */}
        <div className="w-full h-full">
          <iframe
            src="https://calendly.com/elo_psychoflow/30min"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </section>

      <section className="bg-white-custom py-12 px-7 md:py-24 md:px-20">
        <div className="bg-primary rounded-2xl overflow-hidden flex flex-col md:flex-row-reverse max-w-7xl mx-auto min-h-[548px]">
          <div className="relative w-full md:w-[40%] h-64 md:h-auto">
            <Image
              src="/call_discovery.png"
              alt="Image de l'appel découverte"
              fill
              className="object-cover "
            />
          </div>

          <div className="flex-1 px-6 py-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-[26px] md:text-4xl font-black text-secondary mb-6">
              Appel découverte
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                <span className="font-bold">Bénéficiez d’un appel de découverte gratuit de 20 minutes</span> pour vous faire une première idée du déroulé d’une consultation. Vous ne pouvez bénéficier de l’appel découverte que pour votre première fois avec moi.
              </p>
              <p className="py-2">Pour obtenir un rendez-vous, veuillez remplir le formulaire de prise de contact et je vous recontacterais pour choisir ensemble un rendez-vous de 20 minutes.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col md:gap-4">
              <div className="w-full flex flex-col md:flex-row gap-0 md:gap-4">
                <div className="w-full md:w-1/2">
                  <h3 className="font-barlow font-medium py-4">Nom</h3>
                  <input
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    required
                    className="w-full p-2 border border-black-custom rounded-2xl bg-white-custom py-4"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="font-barlow font-medium py-4">Prénom</h3>
                  <input
                    type="text"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    required
                    className="w-full p-2 border border-black-custom rounded-2xl bg-white-custom py-4"
                  />
                </div>
              </div>

              <div className="w-full">
                <h3 className="font-barlow font-medium py-4">Numéro de téléphone</h3>
                <input
                  type="tel"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  placeholder=""
                  className="w-full p-2 border border-black-custom rounded-2xl bg-white-custom py-4 md:mb-4"
                  required
                  pattern="[0-9]{10}"
                  title="Veuillez entrer un numéro de téléphone valide"
                />
              </div>

              {error && <p className="text-red-500 text-sm pt-2">{error}</p>}

              <button
                type="submit"
                className="bg-secondary text-white px-6 py-4 rounded-full font-barlow text-lg font-bold hover:bg-secondary/90 transition-all shadow-md block text-center m-8 md:m-0 md:w-fit md:h-auto md:px-12 md:py-6 md:text-lg cursor-pointer"
              >
                Valider
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-primary py-12 px-7">
      <h2 className="text-2xl text-center md:text-4xl font-black text-secondary mb-6">Retrouvez moi sur mes réseaux sociaux</h2>
          <p className="text-center tracking-tight">
          <span className="font-bold">Retrouve-moi sur Instagram @elo_psychoflow</span>, où je partage des tips et conseils du quotidien autour du burn-out et du TDAH.
          </p>
            <Image src="/Instagram.svg" alt="Instagram" width={100} height={100} className="mx-auto py-8" />
            <Link 
          href="https://www.instagram.com/elo_psychoflow?igsh=MXdjMXJ4ZWxzam51cA==" target="_blank" 
          className="bg-secondary text-white px-8 py-4 rounded-full font-barlow text-lg font-bold hover:bg-secondary/90 transition-all shadow-md block text-center m-8 md:w-fit md:h-auto md:px-10 md:mx-auto md:py-6 md:text-lg"
        >
         Aller sur Instagram
        </Link>
        <p className="text-center tracking-tight">
        Si la santé mentale t’intrigue (ou te traverse), <span className="font-bold">viens plonger Sous la surface sur Spotify.</span> Podcast honnête, profond, humain.
        </p>
        <Image src="/Headphones.svg" alt="podcast" width={100} height={100} className="mx-auto py-8" />
        <Link 
          href="https://open.spotify.com/show/6X90l1JlK00000000000000000000000?si=6X90l1JlK00000000000000000000000" target="_blank" 
          className="bg-secondary text-white px-8 py-4 rounded-full font-barlow text-lg font-bold hover:bg-secondary/90 transition-all shadow-md block text-center m-8 md:w-fit md:h-auto md:px-10 md:mx-auto md:py-6 md:text-lg"
        >
         Aller sur Spotify
        </Link>
      </section>
      <Footer />
    </div>
  );
}