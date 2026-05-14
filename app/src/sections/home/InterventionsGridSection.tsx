import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionSupertitle from '../../components/SectionSupertitle';
import AnimatedHeading from '../../components/AnimatedHeading';
import ScrollReveal from '../../components/ScrollReveal';
import { categories } from '../../data/procedures';
import { Link } from 'react-router-dom';
import ImagePlaceholder from '../../components/ImagePlaceholder';

const tabs = [
  { key: 'corps', label: 'Chirurgie du Corps' },
  { key: 'visage', label: 'Chirurgie du Visage' },
  { key: 'esthetique', label: 'Médecine Esthétique' },
];

export default function InterventionsGridSection() {
  const [activeTab, setActiveTab] = useState('corps');

  const currentProcedures = categories[activeTab]?.procedures || [];

  return (
    <section className="bg-white py-20 md:py-28 lg:py-32 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <ScrollReveal>
          <SectionSupertitle>Nos Soins</SectionSupertitle>
          <AnimatedHeading
            lines={[
              { text: 'Des solutions' },
              { text: 'sur mesure', italicWord: 'sur mesure' },
            ]}
          />
        </ScrollReveal>

        {/* Tabs */}
        <div className="flex flex-wrap gap-0 mt-12 mb-12 border-b border-[var(--line)]">
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
                className="group block bg-[var(--bg-alt)] overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="overflow-hidden">
                  <ImagePlaceholder
                    label={`${proc.title} — 16:9`}
                    aspect="16/9"
                    className="w-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="font-body text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--accent)] mb-2">
                    {proc.categoryLabel}
                  </p>
                  <h3 className="font-display text-[19px] font-normal text-[var(--dark)] leading-snug">
                    {proc.title}
                  </h3>
                  <span className="inline-block mt-3 text-[var(--muted)] group-hover:text-[var(--accent)] transition-all duration-200 text-sm">
                    En savoir plus →
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
