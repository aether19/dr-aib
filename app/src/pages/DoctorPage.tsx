import SEO from '../components/SEO';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionSupertitle from '../components/SectionSupertitle';
import AnimatedHeading from '../components/AnimatedHeading';
import ScrollReveal from '../components/ScrollReveal';


const tabData = {
  biographie: {
    content: "Le Dr. Aib Amar est diplômé de la Faculté de Médecine d'Alger. Après son internat, il a intégré la première clinique esthétique européenne à Paris VIII, où il a consacré treize années à la pratique de la chirurgie plastique. Membre de la SOFCPRE, il s'est spécialisé dans la chirurgie du corps et du visage, acquérant une expertise reconnue dans les techniques les plus avancées.",
  },
  diplomes: {
    items: [
      "Diplôme de Docteur en Médecine — Université d'Alger",
      "Formation Spécialisée en Chirurgie Plastique — Paris VIII",
      "Membre Titulaire de la SOFCPRE — Société Française de Chirurgie Plastique",
      "13 ans de pratique à la Première Clinique Esthétique Européenne",
      "Certification en Chirurgie Esthétique du Corps et du Visage",
    ],
  },
  specialisations: {
    items: [
      "Chirurgie mammaire", "Liposuccion", "Abdominoplastie", "Rhinoplastie",
      "Lifting cervico-facial", "Blépharoplastie", "Gynécomastie",
      "Greffe capillaire", "Médecine esthétique", "Botox",
      "Acide hyaluronique", "Peeling",
    ],
  },
};

const tabs = [
  { key: 'biographie', label: 'Biographie' },
  { key: 'diplomes', label: 'Diplômes & Honorifications' },
  { key: 'specialisations', label: 'Spécialisations' },
];

const mediaItems = [
  {
    title: 'InfoSoir',
    quote: "Nous avons un important retard à rattraper. La chirurgie esthétique en Algérie doit rattraper son retard par rapport aux standards internationaux.",
    tag: 'INTERVIEW TV',
    label: "Interview InfoSoir — Télévision Algérienne",
  },
  {
    title: 'El Moudjahid',
    quote: "Un retour d'expérience parisien au service de la chirurgie esthétique algérienne. Le Dr. Aib Amar apporte son expertise à Alger.",
    tag: 'PRESSE',
    label: "Article El Moudjahid — Presse Algérienne",
  },
];

export default function DoctorPage() {
  const [activeTab, setActiveTab] = useState('biographie');

  return (
    <>
      <SEO
        title="Dr. Aib Amar — Chirurgien Plasticien"
        description="Dr. Aib Amar, chirurgien plasticien diplômé de l'Université d'Alger. 13 ans à Paris VIII, membre SOFCPRE. Expert en rhinoplastie, lifting, liposuccion et médecine esthétique à Alger."
        canonical="/docteur"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "name": "Dr. Aib Amar — Chirurgien Plasticien à Alger",
          "url": "https://www.chirurgieesthetique-dz.com/docteur",
          "mainEntity": {
            "@type": "Physician",
            "name": "Dr. Aib Amar",
            "medicalSpecialty": "PlasticSurgery",
            "alumniOf": "Université d'Alger",
            "hasCredential": "Membre SOFCPRE"
          }
        }}
      />
      {/* Hero */}
      <section className="bg-[var(--bg-alt)] pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-[720px] mx-auto text-center">
          <SectionSupertitle>À propos</SectionSupertitle>
          <AnimatedHeading
            centered
            size="page"
            lines={[{ text: 'Dr. Aib' }, { text: 'Amar', italicWord: 'Amar' }]}
          />
          <ScrollReveal delay={0.3}>
            <p className="font-body text-[16px] md:text-[17px] font-light text-[var(--muted)] mt-6 leading-[1.7] max-w-[520px] mx-auto">
              Chirurgien Plasticien — Diplômé de l'Université d'Alger — Membre de la SOFCPRE — 13 ans à Paris VIII
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Biographie split sections */}
      <section className="bg-[var(--bg)]">
        {/* Paris */}
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%]">
          <ScrollReveal direction="left" distance={30} duration={0.9} className="px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col justify-center">
            <AnimatedHeading
              size="section"
              lines={[
                { text: 'Treize années à' },
                { text: 'Paris VIII', italicWord: 'Paris VIII' },
              ]}
            />
            <div className="mt-7 space-y-5">
              <p className="font-body text-[16px] font-light text-[var(--dark)] opacity-75 leading-[1.8]">
                Diplômé de l'Université d'Alger, le Dr. Aib Amar a poursuivi sa formation à Paris, au cœur du 8<sup>e</sup> arrondissement, dans la première clinique esthétique européenne. Treize années d'apprentissage intensif auprès des figures les plus emblématiques de la chirurgie plastique française.
              </p>
              <p className="font-body text-[16px] font-light text-[var(--dark)] opacity-75 leading-[1.8]">
                Membre de la SOFCPRE — Société Française de Chirurgie Plastique Reconstructrice et Esthétique — il a participé à des centaines d'interventions complexes, affinant une technique chirurgicale où la précision millimétrique rencontre le sens esthétique.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" distance={30} duration={0.9} delay={0.15} className="min-h-[300px] lg:min-h-[500px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009%2F89ff04989b904cbba2a62fa76ce7b4e0?format=webp&width=1200"
              alt="Dr. Aib Amar"
              className="w-full h-full object-cover object-center min-h-[300px] lg:min-h-[500px]"
            />
          </ScrollReveal>
        </div>

        {/* Algeria - reversed */}
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] border-t border-[var(--line)] border-opacity-50">
          <ScrollReveal direction="left" distance={30} duration={0.9} className="min-h-[280px] lg:min-h-[400px] order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=90"
              alt="Cabinet Dr. Aib Amar — Alger"
              className="w-full h-full object-cover object-center min-h-[280px] lg:min-h-[400px]"
            />
          </ScrollReveal>
          <ScrollReveal direction="right" distance={30} duration={0.9} delay={0.15} className="px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col justify-center order-1 lg:order-2">
            <AnimatedHeading
              size="section"
              lines={[
                { text: 'Un retour en' },
                { text: 'Algérie', italicWord: 'Algérie' },
              ]}
            />
            <div className="mt-7 space-y-5">
              <p className="font-body text-[16px] font-light text-[var(--dark)] opacity-75 leading-[1.8]">
                De retour en Algérie, le Dr. Aib Amar a ouvert son cabinet à Alger avec une mission claire : offrir aux Algériens une chirurgie esthétique d'excellence, sans nécessiter de se rendre à l'étranger.
              </p>
              <p className="font-body text-[16px] font-light text-[var(--dark)] opacity-75 leading-[1.8]">
                Son approche allie la rigueur technique acquise à Paris à une compréhension profonde des attentes et des spécificités de ses patients algériens. Chaque intervention est pensée dans son contexte, pour un résultat naturel et harmonieux.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-[var(--white)] py-20 md:py-28 lg:py-32 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">
          {/* Tab bar */}
          <div className="flex border-b border-[var(--line)] relative">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`font-body text-[14px] font-normal px-6 md:px-8 py-4 -mb-px transition-colors duration-200 ${
                  activeTab === tab.key
                    ? 'text-[var(--dark)]'
                    : 'text-[var(--muted)] hover:text-[var(--dark)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
            {/* Sliding indicator */}
            <motion.div
              className="absolute bottom-0 h-0.5 bg-[var(--accent)]"
              layoutId="doctorTabIndicator"
              style={{
                width: `${100 / tabs.length}%`,
                left: `${tabs.findIndex((t) => t.key === activeTab) * (100 / tabs.length)}%`,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>

          {/* Tab content */}
          <div className="mt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'biographie' && (
                  <p className="font-body text-[16px] font-light text-[var(--dark)] opacity-75 leading-[1.8] max-w-[700px]">
                    {tabData.biographie.content}
                  </p>
                )}
                {activeTab === 'diplomes' && (
                  <div className="space-y-0">
                    {tabData.diplomes.items.map((item, i) => (
                      <div key={i} className="font-body text-[15px] font-light text-[var(--dark)] py-4 border-b border-[var(--line)] border-opacity-40">
                        {item}
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === 'specialisations' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tabData.specialisations.items.map((item, i) => (
                      <div key={i} className="border border-[var(--line)] px-5 py-4 font-body text-[14px] font-light text-[var(--dark)]">
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Médias Section */}
      <section className="bg-[var(--bg)] py-20 md:py-28 lg:py-32 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <SectionSupertitle>Dans les médias</SectionSupertitle>
          <AnimatedHeading
            lines={[
              { text: 'Le Dr. Aib Amar' },
              { text: 'à la une', italicWord: 'à la une' },
            ]}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {mediaItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <img
                  src={
                    i === 0
                      ? 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=90'
                      : 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=90'
                  }
                  alt={item.label}
                  className="w-full h-[240px] object-cover object-center"
                />
                <h3 className="font-display text-[22px] md:text-[24px] font-normal text-[var(--dark)] mt-5">
                  {item.title}
                </h3>
                <p className="font-body text-[14px] md:text-[15px] font-light italic text-[var(--muted)] leading-[1.7] mt-3">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="supertitle text-[9px] tracking-[0.14em] mt-4">{item.tag}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
