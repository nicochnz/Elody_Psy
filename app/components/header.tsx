'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 md:py-6 bg-primary md:bg-white-custom">
        <div className="flex items-center gap-3 md:gap-5">
          <figure className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex items-center justify-center bg-white border border-primary/20 shadow-sm shrink-0">
            <Image 
              src="/test_logo.jpg" 
              alt="Logo Elody" 
              width={64} 
              height={64}
              className="object-contain p-1"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </figure>
          <div className="flex flex-col">
            <h1 className="text-lg md:text-2xl font-black uppercase text-black-custom">
              Psychopraticienne
            </h1>
            <p className="text-[10px] md:text-[13px] font-barlow text-black-custom/80 tracking-widest uppercase">
              Neurosciences <span className="text-secondary">•</span> Emotion <span className="text-secondary">•</span> Créativité
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-16">
          <nav>
            <ul className="flex gap-8 font-barlow text-xl font-medium text-black-custom">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">Accueil</Link>
              </li>
              <li>
                <Link href="/pages/presentation" className="hover:text-secondary transition-colors">Présentation</Link>
              </li>
              <li>
                <Link href="/pages/blog" className="hover:text-secondary transition-colors">Articles</Link>
              </li>
              <li>
                <Link href="/pages/homepage#tarifs" className="hover:text-secondary transition-colors">Tarifs</Link>
              </li>
              <li>
                <Link href="/pages/contact" className="hover:text-secondary transition-colors">Contact</Link>
              </li>
            </ul>
          </nav>
          
          <Link 
            href="/pages/contact" 
            className="bg-secondary text-white px-8 py-5 rounded-full font-barlow text-lg font-bold hover:bg-secondary/90 transition-all shadow-[0_4px_14px_0_rgba(242,106,108,0.39)] active:scale-95"
          >
            Réserver en ligne
          </Link>
        </div>

        <button 
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className={`w-8 h-1 bg-black-custom transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`w-8 h-1 bg-black-custom transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-8 h-1 bg-black-custom transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-white-custom shadow-xl transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-10 opacity-0 invisible'}`}>
        <nav className="p-8">
          <ul className="flex flex-col gap-6 font-barlow text-xl font-semibold text-black-custom">
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-secondary transition-colors block">Accueil</Link>
            </li>
            <li>
              <Link href="/pages/presentation" onClick={() => setIsMenuOpen(false)} className="hover:text-secondary transition-colors block">Présentation</Link>
            </li>
            <li>
              <Link href="/pages/blog" onClick={() => setIsMenuOpen(false)} className="hover:text-secondary transition-colors block">Articles</Link>
            </li>
            <li>
              <Link href="/pages/homepage#tarifs" onClick={() => setIsMenuOpen(false)} className="hover:text-secondary transition-colors block">Tarifs</Link>
            </li>
            <li>
              <Link href="/pages/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-secondary transition-colors block">Contact</Link>
            </li>
            <li className="pt-4">
              <Link 
                href="/pages/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="bg-secondary text-white px-8 py-4 rounded-[40px] font-barlow text-lg font-bold hover:bg-secondary/90 transition-all shadow-md block text-center"
              >
                Réserver en ligne
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
