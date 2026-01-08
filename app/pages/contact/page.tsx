'use client';

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
export default function Contact() {
  return (
    <div>
      <Header />
      <section className="bg-primary py-12 md:px-44">
        <h1 className="text-secondary text-2xl font-black text-center uppercase px-7">Réserver mon créneau</h1>
        <p className="py-2 px-7 text-center">Choisissez un créneau disponible pour notre prochain rendez-vous</p>
        </section>
      <Footer />
    </div>
  );
}