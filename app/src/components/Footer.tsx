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
    <footer className="bg-[var(--dark-2)] py-16 md:py-20 px-6 md:px-12">
      <ScrollReveal>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-12">
          {/* Column 1 - Brand */}
          <div>
            <p className="font-display text-[20px] font-normal">
              <span className="text-[var(--white)]">Dr. Aib</span>{' '}
              <span className="text-[var(--accent-light)]">Amar</span>
            </p>
            <p className="font-body text-[14px] font-light text-[var(--muted)] mt-3">
              Chirurgie Plastique & Esthétique
            </p>
            <div className="mt-6 space-y-2">
              <p className="font-body text-[13px] font-light text-[var(--muted)]">
                +213 0557 969 174
              </p>
              <p className="font-body text-[13px] font-light text-[var(--muted)]">
                info@chirurgieesthetique-dz.com
              </p>
              <p className="font-body text-[13px] font-light text-[var(--muted)]">
                Annaba, Algérie
              </p>
            </div>
          </div>

          {/* Column 2 - Chirurgie */}
          <div>
            <p className="font-body text-[10px] font-normal uppercase tracking-[0.18em] text-[var(--muted)] mb-5">
              Chirurgie Réparatrice
            </p>
            <ul className="space-y-2.5">
              {col2.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-[13px] font-light text-[var(--white)] opacity-60 hover:opacity-100 transition-opacity duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Esthétique */}
          <div>
            <p className="font-body text-[10px] font-normal uppercase tracking-[0.18em] text-[var(--muted)] mb-5">
              Esthétique & Beauté
            </p>
            <ul className="space-y-2.5">
              {col3.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-[13px] font-light text-[var(--white)] opacity-60 hover:opacity-100 transition-opacity duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Liens rapides */}
          <div>
            <p className="font-body text-[10px] font-normal uppercase tracking-[0.18em] text-[var(--muted)] mb-5">
              Liens rapides
            </p>
            <ul className="space-y-2.5">
              {col4.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-[13px] font-light text-[var(--white)] opacity-60 hover:opacity-100 transition-opacity duration-200"
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
      <div className="max-w-[1280px] mx-auto mt-16 pt-6 border-t border-[var(--line)] border-opacity-10">
        <p className="font-body text-[11px] font-light text-[var(--muted)] text-center">
          &copy; {new Date().getFullYear()} Dr. Aib Amar. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
