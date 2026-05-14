import { useParams, Navigate } from 'react-router-dom';
import { getProcedureBySlug } from '../data/procedures';
import SectionSupertitle from '../components/SectionSupertitle';
import AnimatedHeading from '../components/AnimatedHeading';
import ScrollReveal from '../components/ScrollReveal';
import ImagePlaceholder from '../components/ImagePlaceholder';
import ProcedureStep from '../components/ProcedureStep';
import CTAPrimary from '../components/CTAPrimary';
import ServiceCard from '../components/ServiceCard';

export default function ProcedurePage() {
  const { slug } = useParams<{ slug: string }>();
  const procedure = getProcedureBySlug(slug || '');

  if (!procedure) return <Navigate to="/" replace />;

  return (
    <>
      {/* 1. Hero */}
      <section className="bg-[var(--bg-alt)] pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-12">
        <div className="max-w-[720px]">
          <SectionSupertitle>{procedure.categoryLabel}</SectionSupertitle>
          <ScrollReveal>
            <h1 className="font-display font-light text-[40px] md:text-[64px] text-[var(--dark)] tracking-[-0.025em] leading-[1.05]">
              {procedure.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-[16px] md:text-[17px] font-light text-[var(--muted)] mt-5 max-w-[520px] leading-[1.7]">
              {procedure.subtitle}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Introduction split */}
      <section className="bg-[var(--bg)] py-20 md:py-28 lg:py-32 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ScrollReveal direction="left" distance={20} duration={0.8}>
            <AnimatedHeading
              lines={[
                { text: procedure.introTitle },
                { text: `${procedure.introTitleItalic} ?`, italicWord: procedure.introTitleItalic },
              ]}
            />
            <div className="mt-7 space-y-5">
              {procedure.introParagraphs.map((p, i) => (
                <p key={i} className="font-body text-[16px] font-light text-[var(--dark)] opacity-75 leading-[1.8]">
                  {p}
                </p>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" distance={20} duration={0.8} delay={0.1} className="flex items-center">
            <ImagePlaceholder label={procedure.imageLabel} aspect="4/3" className="w-full" />
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Déroulement */}
      <section className="bg-[var(--white)] py-20 md:py-28 lg:py-32 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center">
            <SectionSupertitle>Le Déroulement</SectionSupertitle>
            <AnimatedHeading
              centered
              lines={[
                { text: 'Les' },
                { text: 'étapes', italicWord: 'étapes' },
                { text: "de l'intervention" },
              ]}
            />
          </div>
          <div className="mt-14">
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
        </div>
      </section>

      {/* 4. Candidats idéaux */}
      <section className="bg-[var(--dark-2)] py-20 md:py-24 lg:py-28 px-6 md:px-12">
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
              <ScrollReveal key={i} delay={i * 0.08} direction="left" distance={20} duration={0.6}>
                <div className="flex items-center gap-6 py-5 border-b border-[var(--line)] border-opacity-15">
                  <div className="w-10 h-px bg-[var(--accent)] flex-shrink-0" />
                  <p className="font-body text-[15px] md:text-[16px] font-light text-[var(--white)] opacity-80">
                    {critere}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="bg-[var(--dark)] py-20 md:py-24 lg:py-28 px-6 md:px-12">
        <div className="max-w-[600px] mx-auto text-center">
          <AnimatedHeading
            centered
            light
            lines={[
              { text: procedure.ctaQuestion.split(procedure.ctaTitleItalic)[0] || 'Vous envisagez' },
              { text: `${procedure.ctaTitleItalic} ?`, italicWord: procedure.ctaTitleItalic },
            ]}
          />
          <ScrollReveal delay={0.2}>
            <p className="font-body text-[16px] md:text-[17px] font-light text-[var(--white)] opacity-60 mt-5 leading-[1.7]">
              Chaque intervention est sur mesure. Prenons le temps d'en parler.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mt-10">
              <CTAPrimary to="/contact" inverted>
                Prendre rendez-vous
              </CTAPrimary>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Related procedures */}
      <section className="bg-[var(--bg)] py-16 md:py-20 lg:py-24 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <SectionSupertitle>À découvrir</SectionSupertitle>
          <h3 className="font-display text-[24px] md:text-[28px] font-normal text-[var(--dark)] mt-3">
            {procedure.category === 'corps' && 'Autres interventions du corps'}
            {procedure.category === 'visage' && 'Autres interventions du visage'}
            {procedure.category === 'esthetique' && 'Autres soins esthétiques'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 bg-[var(--line)] gap-px mt-8">
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
