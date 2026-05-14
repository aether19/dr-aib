import { useParams, Navigate, Link } from 'react-router-dom';
import { getProcedureBySlug } from '../data/procedures';
import { getProcedureImage } from '../data/procedureImages';
import SectionSupertitle from '../components/SectionSupertitle';
import AnimatedHeading from '../components/AnimatedHeading';
import ScrollReveal from '../components/ScrollReveal';
import ProcedureStep from '../components/ProcedureStep';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function ProcedurePage() {
  const { slug } = useParams<{ slug: string }>();
  const procedure = getProcedureBySlug(slug || '');

  if (!procedure) return <Navigate to="/" replace />;

  const heroImage = getProcedureImage(procedure.slug);
  const introImage = getProcedureImage(procedure.slug);

  const seoJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": procedure.title,
    "description": procedure.subtitle,
    "procedureType": procedure.categoryLabel,
    "performer": {
      "@type": "Physician",
      "name": "Dr. Aib Amar",
      "address": { "@type": "PostalAddress", "addressLocality": "Alger", "addressCountry": "DZ" }
    },
    "url": `https://www.chirurgieesthetique-dz.com/chirurgie/${procedure.slug}`
  };

  return (
    <>
      <SEO
        title={`${procedure.title} à Alger`}
        description={`${procedure.subtitle} Consultation avec le Dr. Aib Amar, chirurgien plasticien à Alger (Kouba). Membre SOFCPRE, 13 ans à Paris VIII.`}
        canonical={`/chirurgie/${procedure.slug}`}
        image={getProcedureImage(procedure.slug)}
        jsonLd={seoJsonLd}
      />
      {/* 1. Full-bleed hero */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={procedure.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        </div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 pb-16 md:pb-24 pt-36">
          <motion.p
            className="font-body text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--accent-light)] mb-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {procedure.categoryLabel}
          </motion.p>
          <motion.h1
            className="font-display font-normal text-white text-[48px] md:text-[72px] lg:text-[88px] leading-[1.05] tracking-[-0.02em] max-w-[800px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {procedure.title}
          </motion.h1>
          <motion.p
            className="font-body text-[16px] md:text-[17px] font-light text-white/70 mt-5 max-w-[540px] leading-[1.75]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            {procedure.subtitle}
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link
              to={`/booking?service=${procedure.slug}`}
              className="inline-flex items-center justify-center font-body text-[11px] font-medium uppercase tracking-[0.14em] bg-[var(--accent)] text-white px-8 py-4 hover:bg-white hover:text-[var(--accent)] transition-all duration-300"
            >
              Prendre rendez-vous
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Introduction split */}
      <section className="bg-white py-20 md:py-28 lg:py-32 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left" distance={20} duration={0.8}>
            <SectionSupertitle>{procedure.categoryLabel}</SectionSupertitle>
            <AnimatedHeading
              lines={[
                { text: procedure.introTitle },
                { text: `${procedure.introTitleItalic} ?`, italicWord: procedure.introTitleItalic },
              ]}
            />
            <div className="mt-7 space-y-5">
              {procedure.introParagraphs.map((p, i) => (
                <p key={i} className="font-body text-[15px] md:text-[16px] font-light text-[var(--dark)] opacity-65 leading-[1.85]">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-9">
              <Link
                to={`/booking?service=${procedure.slug}`}
                className="inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--dark)] border border-[var(--dark)] px-7 py-3.5 hover:bg-[var(--dark)] hover:text-white transition-all duration-300"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" distance={20} duration={0.8} delay={0.1}>
            <div className="overflow-hidden rounded-sm shadow-lg">
              <img
                src={introImage}
                alt={procedure.title}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Déroulement */}
      <section className="bg-[var(--bg-alt)] py-20 md:py-28 lg:py-32 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-14">
            <SectionSupertitle>Le Déroulement</SectionSupertitle>
            <AnimatedHeading
              centered
              lines={[
                { text: 'Les étapes', italicWord: 'étapes' },
                { text: "de l'intervention" },
              ]}
            />
          </div>
          {procedure.steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <ProcedureStep
                number={String(i + 1).padStart(2, '0')}
                title={step.title}
                description={step.description}
                last={i === procedure.steps.length - 1}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 4. Candidats idéaux */}
      <section className="bg-[var(--dark)] py-20 md:py-24 lg:py-28 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto">
          <AnimatedHeading
            centered
            light
            lines={[
              { text: 'Qui peut' },
              { text: procedure.candidatsTitleItalic, italicWord: procedure.candidatsTitleItalic },
              { text: procedure.candidatsQuestion },
            ]}
          />
          <div className="mt-12 space-y-0">
            {procedure.candidats.map((critere, i) => (
              <ScrollReveal key={i} delay={i * 0.07} direction="left" distance={20} duration={0.6}>
                <div className="flex items-center gap-6 py-5 border-b border-white/10">
                  <div className="w-8 h-px bg-[var(--accent)] flex-shrink-0" />
                  <p className="font-body text-[15px] font-light text-white/75 leading-[1.7]">
                    {critere}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA — booking pre-selected */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={procedure.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--accent)]/92" />
        </div>
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-[600px] mx-auto text-center">
            <ScrollReveal>
              <p className="font-body text-[11px] font-medium uppercase tracking-[0.28em] text-white/60 mb-6">
                Consultation
              </p>
            </ScrollReveal>
            <AnimatedHeading
              centered
              light
              lines={[
                { text: 'Vous envisagez' },
                { text: `${procedure.ctaTitleItalic} ?`, italicWord: procedure.ctaTitleItalic },
              ]}
            />
            <ScrollReveal delay={0.2}>
              <p className="font-body text-[16px] font-light text-white/70 mt-5 leading-[1.75]">
                Chaque intervention est sur mesure. Prenons le temps d'en parler ensemble.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={`/booking?service=${procedure.slug}`}
                  className="inline-flex items-center justify-center font-body text-[11px] font-medium uppercase tracking-[0.14em] bg-white text-[var(--accent)] px-8 py-4 hover:bg-[var(--dark)] hover:text-white transition-all duration-300"
                >
                  Prendre rendez-vous
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. Related procedures */}
      <section className="bg-[var(--bg-alt)] py-16 md:py-20 lg:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <SectionSupertitle>À découvrir aussi</SectionSupertitle>
          <h3 className="font-display text-[26px] md:text-[32px] font-normal text-[var(--dark)] mt-3 mb-10">
            {procedure.category === 'corps' && 'Autres interventions du corps'}
            {procedure.category === 'visage' && 'Autres interventions du visage'}
            {procedure.category === 'esthetique' && 'Autres soins esthétiques'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {procedure.related.map((rel) => (
              <ServiceCard
                key={rel.slug}
                title={rel.title}
                tag={procedure.categoryLabel.toUpperCase()}
                imageLabel={rel.imageLabel}
                slug={rel.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
