export default function Footer() {
  return (
    <footer className="bg-secondary w-full py-16">
      <div className="max-w-7xl mx-auto px-16 flex items-start gap-12">
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-4xl font-black text-white">Présentation</h3>
          <ul className=" font-barlow text-white">
            <li>Qui suis-je ?</li>
            <li>Dans quels cas consulter ?</li>
            <li>Mon approche</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-4xl font-black text-white">Contact</h3>
          <ul className="font-barlow text-white">
            <li>Tarifs</li>
            <li>Mentions légales</li>
            <li>10 rue des Montaignes, 33000 Bordeaux</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-4xl font-black text-white">Mes réseaux</h3>
          <ul className="font-barlow text-white">
            <li>Instagram</li>
            <li>Mes podcasts</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}