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
  const isHome = location.pathname === '/';

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > window.innerHeight - 80);
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    // Re-check scroll on route change (non-home pages start "scrolled")
    setScrolled(window.scrollY > window.innerHeight - 80);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Transparent only on home and NOT yet scrolled past hero
  const transparent = isHome && !scrolled && !mobileOpen;

  const isActive = (href?: string) => href === location.pathname;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 ${
          transparent
            ? 'bg-transparent'
            : 'bg-white border-b border-[var(--line)] shadow-[0_1px_12px_rgba(0,0,0,0.06)]'
        }`}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[72px] px-6 md:px-10">

          {/* Logo */}
          <Link to="/" className="font-display text-[20px] font-normal tracking-wide flex-shrink-0 relative z-10">
            <span className={transparent ? 'text-white' : 'text-[var(--dark)]'}>Dr. Aib</span>{' '}
            <span className="text-[var(--accent)]">Amar</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
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
                    className={`nav-link transition-colors duration-200 ${
                      isActive(link.href)
                        ? 'text-[var(--accent)]'
                        : transparent
                        ? 'text-white/90 hover:text-white'
                        : 'text-[var(--dark)] hover:text-[var(--accent)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button className={`nav-link flex items-center gap-1 transition-colors duration-200 ${
                    transparent ? 'text-white/90 hover:text-white' : 'text-[var(--dark)] hover:text-[var(--accent)]'
                  }`}>
                    {link.label}
                    <span className="text-[7px] opacity-50">▼</span>
                  </button>
                )}

                {/* Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-white border border-[var(--line)] py-3 min-w-[300px] shadow-xl">
                      {Object.values(link.children).map((group, gi) => (
                        <div key={group.label}>
                          <p className={`font-body text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--accent)] px-5 pb-1.5 ${gi > 0 ? 'pt-3 mt-1 border-t border-[var(--line)]' : 'pt-2'}`}>
                            {group.label}
                          </p>
                          {group.items.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="block font-body text-[13px] font-light text-[var(--dark)] hover:text-[var(--accent)] hover:bg-[var(--bg-alt)] px-5 py-2 transition-colors duration-100"
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

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3 flex-shrink-0 relative z-10">
            <Link
              to="/booking"
              className={`hidden lg:inline-flex items-center font-body text-[11px] font-medium uppercase tracking-[0.12em] px-5 py-2.5 transition-all duration-300 ${
                transparent
                  ? 'border border-white text-white hover:bg-white hover:text-[var(--dark)]'
                  : 'bg-[var(--accent)] text-white hover:bg-[var(--dark)]'
              }`}
            >
              Prendre RDV
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
              aria-label="Ouvrir le menu"
            >
              <span className={`block w-5 h-[1.5px] transition-all duration-250 ${mobileOpen ? 'rotate-45 translate-y-[3.25px]' : ''} ${transparent ? 'bg-white' : 'bg-[var(--dark)]'}`} />
              <span className={`block w-5 h-[1.5px] transition-all duration-250 ${mobileOpen ? '-rotate-45 -translate-y-[3.25px]' : ''} ${transparent ? 'bg-white' : 'bg-[var(--dark)]'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[99] bg-white flex flex-col pt-20 px-6 overflow-y-auto">
          <nav className="flex flex-col divide-y divide-[var(--line)]">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.href ? (
                  <Link to={link.href} className="block font-display text-[28px] font-normal text-[var(--dark)] py-4">
                    {link.label}
                  </Link>
                ) : (
                  <>
                    <p className="font-display text-[28px] font-normal text-[var(--dark)] py-4">{link.label}</p>
                    {link.children && Object.values(link.children).map((group) => (
                      <div key={group.label} className="pb-3">
                        <p className="font-body text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--accent)] mb-2">{group.label}</p>
                        {group.items.map((item) => (
                          <Link key={item.href} to={item.href} className="block font-body text-[14px] font-light text-[var(--muted)] py-1.5 hover:text-[var(--accent)]">
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
          <div className="mt-8 pb-8">
            <Link to="/booking" className="inline-flex font-body text-[11px] font-medium uppercase tracking-[0.12em] text-white bg-[var(--accent)] px-8 py-3 hover:bg-[var(--dark)] transition-colors duration-200">
              Prendre RDV
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
