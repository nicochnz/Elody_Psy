import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary w-full py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-start gap-12 md:text-left">
        <div className="flex flex-col gap-4 flex-1 w-full">
          <h3 className="text-3xl md:text-4xl font-playfair font-black text-white">Présentation</h3>
          <ul className="font-barlow text-white space-y-2">
            <li>
              <Link href="/pages/presentation" className="hover:underline transition-all">Qui suis-je ?</Link>
            </li>
            <li>
              <Link href="/pages/presentation" className="hover:underline transition-all">Dans quels cas consulter ?</Link>
            </li>
            <li>
              <Link href="/pages/presentation" className="hover:underline transition-all">Mon approche</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 flex-1 w-full">
          <h3 className="text-3xl md:text-4xl font-playfair font-black text-white">À propos</h3>
          <ul className="font-barlow text-white space-y-2">
            <li>
              <Link href="/pages/tarifs" className="hover:underline transition-all">Tarifs</Link>
            </li>
            <li>
              <Link href="/pages/contact" className="hover:underline transition-all">Mentions légales</Link>
            </li>
            <li className="flex md:justify-start gap-2">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                className="w-5 h-5 shrink-0 overflow-hidden" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              10 rue des Montaignes, 33000 Bordeaux
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 flex-1 w-full">
          <h3 className="text-3xl md:text-4xl font-playfair font-black text-white">Mes réseaux</h3>
          <ul className="font-barlow text-white space-y-2">
            <li className="flex md:justify-start gap-2 items-center">
              <Link  href="https://www.instagram.com/elo_psychoflow?igsh=MXdjMXJ4ZWxzam51cA==" target="_blank" className="flex items-center gap-2 hover:underline transition-all">
                <Image 
                  src="/insta.svg" 
                  alt="Instagram" 
                  width={20} 
                  height={20} 
                  className="w-5 h-5 shrink-0 object-contain"
                />
                <span className="pl-1 text-white">Instagram</span>
              </Link>
            </li>
            <li className="flex md:justify-start gap-2 items-center">
              <Link href="#" className="flex items-center gap-2 hover:underline transition-all">
                <Image 
                  src="/podcast.svg" 
                  alt="Mes podcasts" 
                  width={20} 
                  height={20} 
                  className="w-5 h-5 shrink-0 object-contain"
                />
                <span className="pl-1 text-white">Mes podcasts</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
