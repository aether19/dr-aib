import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionSupertitle from '../../components/SectionSupertitle';
import AnimatedHeading from '../../components/AnimatedHeading';
import ScrollReveal from '../../components/ScrollReveal';
import { categories } from '../../data/procedures';
import { Link } from 'react-router-dom';

const tabs = [
  { key: 'corps', label: 'Chirurgie du Corps' },
  { key: 'visage', label: 'Chirurgie du Visage' },
  { key: 'esthetique', label: 'Médecine Esthétique' },
];

// Real Unsplash images per procedure slug
const procedureImages: Record<string, string> = {
  // Corps
  'prothese-mammaire':      'https://images.unsplash.com/photo-1576765974256-41b17d2a1f72?w=600&q=80',
  'reduction-mammaire':     'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80',
  'remonter-seins':         'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
  'liposuccion':            'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80',
  'gynecomastie':           'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
  'abdominoplastie':        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',
  'silhouette-lift':        'https://images.unsplash.com/photo-1520810627419-35e6bae96049?w=600&q=80',
  'reconstruction-plastique':'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80',
  // Visage
  'rhinoplastie':           'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80',
  'oreille-decollees':      'https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?w=600&q=80',
  'lifting':                'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',
  'lifting-cervico-facial': 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80',
  'blepharoplastie':        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
  // Esthétique
  'greffe-capilaire':       'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
  'botox':                  'https://images.unsplash.com/photo-1601158935942-52255782d322?w=600&q=80',
  'acide-hyaluronique':     'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
  'peeling':                'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
  'cerne':                  'https://images.unsplash.com/photo-1491349174775-aaaefdd27a97?w=600&q=80',
  'microdermabrasion':      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
  'apres-chirurgie':        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
  'grossesse':              'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=600&q=80',
};

const fallbackImage = 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80';

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
            {currentProcedures.map((proc) => {
              const imgSrc = procedureImages[proc.slug] || fallbackImage;
              return (
                <Link
                  key={proc.slug}
                  to={`/chirurgie/${proc.slug}`}
                  className="group block bg-white overflow-hidden border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300"
                >
                  <div className="overflow-hidden h-48">
                    <img
                      src={imgSrc}
                      alt={proc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
