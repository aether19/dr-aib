import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '../data/procedures';
import { getProcedureImage } from '../data/procedureImages';
import SectionSupertitle from '../components/SectionSupertitle';
import AnimatedHeading from '../components/AnimatedHeading';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';

const tabs = [
  { key: 'corps', label: 'Chirurgie du Corps' },
  { key: 'visage', label: 'Chirurgie du Visage' },
  { key: 'esthetique', label: 'Médecine Esthétique' },
];

export default function DiscoverServicesPage() {
  const [activeTab, setActiveTab] = useState('corps');
  const currentProcedures = categories[activeTab]?.procedures || [];

  return (
    <>
      <SEO
        title="Découvrir les Soins — Dr. Aib Amar"
        description="Explorez tous nos services de chirurgie plastique et médecine esthétique. Classés par catégorie : chirurgie du corps, du visage, et médecine esthétique."
        canonical="/decouvrir-les-soins"
      />

      {/* Hero section */}
      <section className="bg-white py-16 md:py-24 lg:py-32 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal>
            <SectionSupertitle>Tous Nos Soins</SectionSupertitle>
            <AnimatedHeading
              lines={[
                { text: 'Explorez toutes' },
                { text: 'nos solutions', italicWord: 'nos solutions' },
              ]}
            />
            <p className="mt-8 max-w-2xl font-body text-[16px] leading-[1.6] text-[var(--muted)]">
              Découvrez l'intégralité de nos services de chirurgie plastique et médecine esthétique. Sélectionnez une catégorie pour explorer les détails de chaque intervention.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category filter and services grid */}
      <section className="bg-white py-12 md:py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-0 mb-12 border-b border-[var(--line)]">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`font-body text-[12px] font-medium uppercase tracking-[0.1em] pb-4 px-6 -mb-px transition-colors duration-200 ${
                  activeTab === tab.key
                    ? 'text-[var(--accent)] border-b-2 border-[var(--accent)]'
                    : 'text-[var(--muted)] hover:text-[var(--dark)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Services count indicator */}
          <p className="font-body text-[13px] font-medium uppercase tracking-[0.08em] text-[var(--muted)] mb-8">
            {currentProcedures.length} service{currentProcedures.length > 1 ? 's' : ''}
          </p>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {currentProcedures.map((proc) => (
                <Link
                  key={proc.slug}
                  to={`/chirurgie/${proc.slug}`}
                  className="group block bg-white overflow-hidden border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300"
                >
                  <div className="overflow-hidden h-48 bg-gray-50">
                    <img
                      src={getProcedureImage(proc.slug)}
                      alt={`${proc.title} — Dr. Aib Amar Alger`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-body text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--accent)] mb-2">
                      {proc.categoryLabel}
                    </p>
                    <h3 className="font-display text-[19px] font-normal text-[var(--dark)] leading-snug">
                      {proc.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 mt-3 font-body text-[11px] font-medium text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors duration-200 uppercase tracking-[0.08em]">
                      En savoir plus <span className="text-base">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
