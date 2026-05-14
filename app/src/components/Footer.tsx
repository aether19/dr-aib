import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const col2 = [
  { label: 'Prothèse Mammaire', href: '/chirurgie/prothese-mammaire' },
  { label: 'Réduction Mammaire', href: '/chirurgie/reduction-mammaire' },
  { label: 'Liposuccion', href: '/chirurgie/liposuccion' },
  { label: 'Gynécomastie', href: '/chirurgie/gynecomastie' },
  { label: 'Abdominoplastie', href: '/chirurgie/abdominoplastie' },
  { label: 'Rhinoplastie', href: '/chirurgie/rhinoplastie' },
  { label: 'Lifting', href: '/chirurgie/lifting' },
  { label: 'Blépharoplastie', href: '/chirurgie/blepharoplastie' },
];

const col3 = [
  { label: 'Greffe Capillaire', href: '/chirurgie/greffe-capilaire' },
  { label: 'Botox', href: '/chirurgie/botox' },
  { label: 'Acide Hyaluronique', href: '/chirurgie/acide-hyaluronique' },
  { label: 'Peeling', href: '/chirurgie/peeling' },
  { label: 'Cernes', href: '/chirurgie/cerne' },
  { label: 'Microdermabrasion', href: '/chirurgie/microdermabrasion' },
];

const col4 = [
  { label: 'Accueil', href: '/' },
  { label: 'Le Dr.', href: '/docteur' },
  { label: 'Contact', href: '/contact' },
  { label: 'Soins Après Chirurgie', href: '/chirurgie/apres-chirurgie' },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--dark)] py-16 md:py-20 px-6 md:px-12">
      <ScrollReveal>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
          {/* Column 1 - Brand */}
          <div>
            <Link to="/" className="font-display text-[22px] font-normal">
              <span className="text-white">Dr. Aib</span>{' '}
              <span className="text-[var(--accent-light)]">Amar</span>
            </Link>
            <p className="font-body text-[12px] font-light text-white/50 mt-2 uppercase tracking-[0.14em]">
              Chirurgie Plastique & Esthétique
            </p>
            <div className="mt-8 space-y-2.5">
              <p className="font-body text-[13px] font-light text-white/60">
                +213 0557 969 174
              </p>
              <p className="font-body text-[13px] font-light text-white/60">
                info@chirurgieesthetique-dz.com
              </p>
              <p className="font-body text-[13px] font-light text-white/60">
                Annaba, Algérie
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block font-body text-[11px] font-medium uppercase tracking-[0.12em] text-white border border-[var(--accent)] bg-[var(--accent)] px-6 py-3 hover:bg-transparent transition-colors duration-300"
              >
                Prendre RDV
              </Link>
            </div>
          </div>

          {/* Column 2 - Chirurgie */}
          <div>
            <p className="font-body text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--accent-light)] mb-6">
              Chirurgie Réparatrice
            </p>
            <ul className="space-y-3">
              {col2.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-[13px] font-light text-white/55 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Esthétique */}
          <div>
            <p className="font-body text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--accent-light)] mb-6">
              Esthétique & Beauté
            </p>
            <ul className="space-y-3">
              {col3.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-[13px] font-light text-white/55 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Liens rapides */}
          <div>
            <p className="font-body text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--accent-light)] mb-6">
              Liens rapides
            </p>
            <ul className="space-y-3">
              {col4.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-[13px] font-light text-white/55 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>

      {/* Bottom bar */}
      <div className="max-w-[1280px] mx-auto mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-[11px] font-light text-white/35">
          &copy; {new Date().getFullYear()} Dr. Aib Amar. Tous droits réservés.
        </p>
        <p className="font-body text-[11px] font-light text-white/35">
          Membre de la SOFCPRE · Paris VIII · Annaba
        </p>
      </div>
    </footer>
  );
}
