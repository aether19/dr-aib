import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  href?: string;
  children?: Record<string, { label: string; items: { label: string; href: string }[] }>;
}

const navLinks: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Le Dr.', href: '/docteur' },
  {
    label: 'Chirurgie',
    children: {
      corps: {
        label: 'Chirurgie du Corps',
        items: [
          { label: 'Prothèse Mammaire', href: '/chirurgie/prothese-mammaire' },
          { label: 'Réduction Mammaire', href: '/chirurgie/reduction-mammaire' },
          { label: 'Remonter les Seins', href: '/chirurgie/remonter-seins' },
          { label: 'Liposuccion', href: '/chirurgie/liposuccion' },
          { label: 'Gynécomastie', href: '/chirurgie/gynecomastie' },
          { label: 'Abdominoplastie', href: '/chirurgie/abdominoplastie' },
          { label: 'Silhouette Lift', href: '/chirurgie/silhouette-lift' },
          { label: 'Reconstruction Plastique', href: '/chirurgie/reconstruction-plastique' },
        ],
      },
      visage: {
        label: 'Chirurgie du Visage',
        items: [
          { label: 'Rhinoplastie', href: '/chirurgie/rhinoplastie' },
          { label: 'Oreilles Décollées', href: '/chirurgie/oreille-decollees' },
          { label: 'Lifting', href: '/chirurgie/lifting' },
          { label: 'Lifting Cervico-Facial', href: '/chirurgie/lifting-cervico-facial' },
          { label: 'Blépharoplastie', href: '/chirurgie/blepharoplastie' },
        ],
      },
    },
  },
  {
    label: 'Esthétique',
    children: {
      face: {
        label: 'Chevelure et Visage',
        items: [
          { label: 'Greffe Capillaire', href: '/chirurgie/greffe-capilaire' },
          { label: 'Botox', href: '/chirurgie/botox' },
          { label: 'Acide Hyaluronique', href: '/chirurgie/acide-hyaluronique' },
          { label: 'Peeling', href: '/chirurgie/peeling' },
          { label: 'Cernes', href: '/chirurgie/cerne' },
          { label: 'Microdermabrasion', href: '/chirurgie/microdermabrasion' },
        ],
      },
      care: {
        label: 'Traitement',
        items: [
          { label: 'Soins Après Chirurgie', href: '/chirurgie/apres-chirurgie' },
          { label: 'Soins Après Grossesse', href: '/chirurgie/grossesse' },
        ],
      },
    },
  },
  { label: 'Contact', href: '/contact' },
];

export default function NavigationHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href?: string) => href === location.pathname;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(244,239,232,0.94)] backdrop-blur-[16px] shadow-[0_1px_0_var(--line)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[72px] px-6 md:px-12">
          {/* Logo */}
          <Link to="/" className="font-display text-[20px] font-normal z-[101]">
            <span className="text-[var(--dark)]">Dr. Aib</span>{' '}
            <span className="text-[var(--accent)]">Amar</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.href ? (
                  <Link
                    to={link.href}
                    className={`nav-link transition-colors duration-200 pb-1 ${
                      isActive(link.href)
                        ? 'text-[var(--dark)] border-b-[1.5px] border-[var(--accent)]'
                        : 'text-[var(--dark)] opacity-70 hover:opacity-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button className="nav-link text-[var(--dark)] opacity-70 hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
                    {link.label}
                    <span className="text-[8px]">&#9660;</span>
                  </button>
                )}

                {/* Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-[var(--white)] border border-[var(--line)] py-4 min-w-[300px] shadow-lg">
                      {Object.values(link.children).map((group) => (
                        <div key={group.label}>
                          <p className="font-body text-[10px] font-normal uppercase tracking-[0.18em] text-[var(--muted)] px-6 pt-3 pb-2 border-t border-[var(--line)]">
                            {group.label}
                          </p>
                          {group.items.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="block font-body text-[14px] font-light text-[var(--dark)] opacity-70 hover:opacity-100 hover:bg-[var(--bg-alt)] px-6 py-2.5 transition-colors duration-150"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden lg:inline-block font-body text-[11px] font-normal uppercase tracking-[0.1em] text-[var(--accent)] border border-[var(--accent)] px-5 py-2.5 hover:bg-[var(--accent)] hover:text-[var(--white)] transition-colors duration-300 z-[101]"
          >
            Prendre RDV
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden z-[101] w-11 h-11 flex flex-col items-center justify-center gap-[6px]"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-[var(--dark)] transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[3.75px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[var(--dark)] transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[3.75px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[99] bg-[var(--dark)] flex flex-col items-center justify-center lg:hidden">
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.label} className="text-center">
                {link.href ? (
                  <Link
                    to={link.href}
                    className="font-display text-[36px] md:text-[42px] font-light text-[var(--white)]"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <>
                    <p className="font-display text-[36px] md:text-[42px] font-light text-[var(--white)]">
                      {link.label}
                    </p>
                    {link.children &&
                      Object.values(link.children).map((group) => (
                        <div key={group.label} className="mt-2">
                          <p className="font-body text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] mb-1">
                            {group.label}
                          </p>
                          {group.items.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="block font-body text-[16px] font-light text-[var(--muted)] py-1 hover:text-[var(--white)] transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                  </>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
