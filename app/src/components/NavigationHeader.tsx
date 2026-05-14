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
    const onScroll = () => setScrolled(window.scrollY > 60);
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
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 ${
          scrolled
            ? 'bg-white shadow-[0_1px_0_var(--line)]'
            : 'bg-transparent'
        }`}
      >
        {/* Top bar — logo centered */}
        <div
          className={`flex items-center justify-center border-b border-[var(--line)] transition-all duration-300 ${
            scrolled ? 'py-0 h-0 overflow-hidden border-0' : 'h-[54px]'
          }`}
        >
          <Link to="/" className="font-display text-[22px] font-normal tracking-wide">
            <span className="text-[var(--dark)]">Dr. Aib</span>{' '}
            <span className="text-[var(--accent)]">Amar</span>
          </Link>
        </div>

        {/* Bottom bar — nav links */}
        <div className="bg-white border-b border-[var(--line)]">
          <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[56px] px-6 md:px-12">
            {/* Logo — visible only when scrolled */}
            <Link
              to="/"
              className={`font-display text-[19px] font-normal tracking-wide transition-all duration-300 ${
                scrolled ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              <span className="text-[var(--dark)]">Dr. Aib</span>{' '}
              <span className="text-[var(--accent)]">Amar</span>
            </Link>

            {/* Desktop Nav — centered when not scrolled */}
            <nav
              className={`hidden lg:flex items-center gap-7 transition-all duration-300 ${
                scrolled ? '' : 'absolute left-1/2 -translate-x-1/2'
              }`}
            >
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
                      className={`nav-link nav-underline transition-colors duration-200 ${
                        isActive(link.href)
                          ? 'text-[var(--accent)] active'
                          : 'text-[var(--dark)] hover:text-[var(--accent)]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button className="nav-link text-[var(--dark)] hover:text-[var(--accent)] transition-colors duration-200 flex items-center gap-1">
                      {link.label}
                      <span className="text-[7px] opacity-60">&#9660;</span>
                    </button>
                  )}

                  {/* Dropdown */}
                  {link.children && activeDropdown === link.label && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="bg-white border border-[var(--line)] py-4 min-w-[320px] shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                        {Object.values(link.children).map((group, gi) => (
                          <div key={group.label}>
                            <p className={`font-body text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--accent)] px-6 pb-2 ${gi > 0 ? 'pt-4 mt-2 border-t border-[var(--line)]' : 'pt-2'}`}>
                              {group.label}
                            </p>
                            {group.items.map((item) => (
                              <Link
                                key={item.href}
                                to={item.href}
                                className="block font-body text-[13px] font-light text-[var(--dark)] hover:text-[var(--accent)] hover:bg-[var(--bg-alt)] px-6 py-2 transition-colors duration-150"
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
              className="hidden lg:inline-block font-body text-[11px] font-medium uppercase tracking-[0.12em] text-white bg-[var(--accent)] px-6 py-2.5 hover:bg-[var(--dark)] transition-colors duration-300"
            >
              Prendre RDV
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden z-[101] w-11 h-11 flex flex-col items-center justify-center gap-[6px] ml-auto"
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
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[99] bg-white flex flex-col pt-28 px-8 lg:hidden overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-[var(--line)]">
                {link.href ? (
                  <Link
                    to={link.href}
                    className="block font-display text-[28px] font-normal text-[var(--dark)] py-4"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <>
                    <p className="font-display text-[28px] font-normal text-[var(--dark)] py-4">
                      {link.label}
                    </p>
                    {link.children &&
                      Object.values(link.children).map((group) => (
                        <div key={group.label} className="pb-4">
                          <p className="font-body text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--accent)] mb-2">
                            {group.label}
                          </p>
                          {group.items.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="block font-body text-[14px] font-light text-[var(--muted)] py-1.5 hover:text-[var(--accent)] transition-colors"
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
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-block font-body text-[11px] font-medium uppercase tracking-[0.12em] text-white bg-[var(--accent)] px-8 py-3"
            >
              Prendre RDV
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
