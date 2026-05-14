import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionSupertitle from '../../components/SectionSupertitle';
import AnimatedHeading from '../../components/AnimatedHeading';
import ServiceCard from '../../components/ServiceCard';
import ScrollReveal from '../../components/ScrollReveal';
import { categories } from '../../data/procedures';

const tabs = [
  { key: 'corps', label: 'Chirurgie du Corps' },
  { key: 'visage', label: 'Chirurgie du Visage' },
  { key: 'esthetique', label: 'Médecine Esthétique' },
];

export default function InterventionsGridSection() {
  const [activeTab, setActiveTab] = useState('corps');

  const currentProcedures = categories[activeTab]?.procedures || [];

  return (
    <section className="bg-[var(--bg)] py-20 md:py-28 lg:py-32 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <ScrollReveal>
          <SectionSupertitle>Nos Soins</SectionSupertitle>
          <AnimatedHeading
            lines={[
              { text: 'Des solutions' },
              { text: 'sur mesure', italicWord: 'sur mesure' },
              { text: 'pour chaque patient' },
            ]}
          />
        </ScrollReveal>

        {/* Tabs */}
        <div className="flex gap-8 mt-12 mb-10 border-b border-[var(--line)]">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`font-body text-[14px] font-normal pb-3 -mb-px transition-colors duration-200 ${
                activeTab === tab.key
                  ? 'text-[var(--dark)] border-b-2 border-[var(--accent)]'
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[var(--line)] gap-px"
          >
            {currentProcedures.map((proc) => (
              <ServiceCard
                key={proc.slug}
                title={proc.title}
                tag={proc.categoryLabel.toUpperCase()}
                imageLabel={`${proc.title} — 16:9`}
                slug={proc.slug}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
