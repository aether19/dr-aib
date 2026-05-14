import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CTAPrimary from '../../components/CTAPrimary';
import ImagePlaceholder from '../../components/ImagePlaceholder';

const heroEasing = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <ImagePlaceholder
          label="Dr. Aib Amar — Hero Clinique"
          aspect="auto"
          className="w-full h-full"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 pb-20 md:pb-28 pt-40">
        <motion.p
          className="font-body text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--accent-light)] mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: heroEasing }}
        >
          Chirurgie Plastique & Esthétique
        </motion.p>

        <h1 className="font-display font-normal text-white leading-[1.08] tracking-[-0.01em]">
          {[
            { text: "L'art de", italic: false },
            { text: 'subtilité,', italic: false },
            { text: 'précision.', italic: true },
          ].map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className={`block text-[52px] md:text-[80px] lg:text-[96px] ${line.italic ? 'italic' : ''}`}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.3 + i * 0.1, ease: heroEasing }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="font-body text-[15px] md:text-[17px] font-light text-white/70 leading-[1.75] max-w-[480px] mt-7 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: heroEasing }}
        >
          13 années d'expertise à Paris VIII. Membre de la SOFCPRE. Le Dr. Aib Amar pratique une chirurgie où la technique rencontre l'esthétique.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: heroEasing }}
        >
          <CTAPrimary to="/chirurgie/prothese-mammaire" inverted>Découvrir les soins</CTAPrimary>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center font-body text-[11px] font-medium uppercase tracking-[0.14em] text-white border border-white/40 px-7 py-4 hover:bg-white hover:text-[var(--dark)] transition-all duration-300"
          >
            Prendre rendez-vous
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap gap-10 mt-16 md:mt-20 pt-10 border-t border-white/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {[
            { value: '13', label: "Années d'expérience" },
            { value: '21+', label: 'Interventions proposées' },
            { value: 'SOFCPRE', label: 'Membre titulaire' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-[34px] md:text-[40px] font-normal text-white leading-none">
                {stat.value}
              </p>
              <p className="font-body text-[10px] font-light text-white/50 uppercase tracking-[0.16em] mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={`absolute bottom-8 right-10 flex flex-col items-center gap-2 transition-opacity duration-500 z-10 ${scrolled ? 'opacity-0' : 'opacity-100'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-body text-[9px] font-normal uppercase tracking-[0.1em] text-white/40 writing-vertical">
          Défiler
        </span>
        <div className="w-px h-10 bg-white/40 origin-top animate-pulse" />
      </motion.div>
    </section>
  );
}
