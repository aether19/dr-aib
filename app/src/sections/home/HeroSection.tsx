import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SectionSupertitle from '../../components/SectionSupertitle';
import CTAPrimary from '../../components/CTAPrimary';
import CTASecondary from '../../components/CTASecondary';
import ImagePlaceholder from '../../components/ImagePlaceholder';

const heroEasing = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const lineVariants = {
    hidden: { y: '110%', opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, delay: i * 0.12, ease: heroEasing },
    }),
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: heroEasing },
    }),
  };

  return (
    <section className="min-h-[100dvh] bg-[var(--bg)] grid grid-cols-1 lg:grid-cols-[55%_45%]">
      {/* Left column */}
      <div className="flex flex-col justify-center px-6 md:px-12 lg:pl-12 lg:pr-8 py-24 lg:py-0 order-2 lg:order-1">
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
          <SectionSupertitle>Chirurgie Plastique & Esthétique</SectionSupertitle>
        </motion.div>

        <h1 className="font-display font-light text-[var(--dark)] tracking-[-0.025em] leading-[1.05]">
          {['L\'art de', 'subtilité,'].map((text, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block text-[44px] md:text-[88px]"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={lineVariants}
              >
                {text}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <motion.span
              className="block text-[44px] md:text-[88px]"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={lineVariants}
            >
              <em className="italic">précision</em>.
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="font-body text-[16px] md:text-[17px] font-light text-[var(--muted)] leading-[1.7] max-w-[420px] mt-6"
          custom={0.6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          13 années d'expertise à Paris VIII. Membre de la SOFCPRE. Le Dr. Aib Amar pratique une chirurgie où la technique rencontre l'esthétique.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-10"
          custom={0.8}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <CTAPrimary to="/chirurgie/prothese-mammaire">Découvrir les soins</CTAPrimary>
          <CTASecondary to="/contact">Prendre rendez-vous</CTASecondary>
        </motion.div>
      </div>

      {/* Right column */}
      <motion.div
        className="relative flex items-center justify-center bg-[var(--bg-alt)] order-1 lg:order-2 min-h-[50vh] lg:min-h-0"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: heroEasing }}
      >
        <div className="relative w-full max-w-[400px] lg:max-w-[80%] mx-auto p-6 lg:p-0">
          <ImagePlaceholder label="Portrait Dr. Aib Amar — 3:4" aspect="3/4" />
          {/* Vertical badge */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden lg:flex items-center bg-[var(--accent)] py-3 px-2 writing-vertical">
            <span className="font-body text-[9px] font-normal uppercase tracking-[0.16em] text-[var(--white)]">
              PARIS VIII &middot; SOFCPRE
            </span>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={`absolute bottom-8 right-8 flex flex-col items-center gap-2 transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-body text-[9px] font-normal uppercase tracking-[0.1em] text-[var(--dark)] opacity-40 writing-vertical">
          Défiler
        </span>
        <div className="w-px h-10 bg-[var(--dark)] opacity-40 origin-top animate-pulse" />
      </motion.div>
    </section>
  );
}
