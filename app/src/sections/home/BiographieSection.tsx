import SectionSupertitle from '../../components/SectionSupertitle';
import AnimatedHeading from '../../components/AnimatedHeading';
import ScrollReveal from '../../components/ScrollReveal';
import CTASecondary from '../../components/CTASecondary';
import ImagePlaceholder from '../../components/ImagePlaceholder';

const badges = ['SOFCPRE', 'PARIS VIII', '13 ANS D\'EXPÉRIENCE'];

export default function BiographieSection() {
  return (
    <section className="bg-[var(--white)]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Image */}
        <ScrollReveal direction="left" distance={30} duration={0.9} className="min-h-[400px] lg:min-h-[600px]">
          <ImagePlaceholder
            label="Dr. Aib Amar — Portrait Professionnel"
            aspect="auto"
            className="w-full h-full min-h-[400px] lg:min-h-[600px]"
          />
        </ScrollReveal>

        {/* Right - Text */}
        <ScrollReveal
          direction="right"
          distance={30}
          duration={0.9}
          delay={0.15}
          className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24"
        >
          <SectionSupertitle>Le Chirurgien</SectionSupertitle>

          <AnimatedHeading
            lines={[
              { text: 'Une expérience' },
              { text: 'parisienne', italicWord: 'parisienne' },
              { text: 'à Alger' },
            ]}
          />

          <div className="mt-7 space-y-5">
            <p className="font-body text-[16px] font-light text-[var(--dark)] opacity-75 leading-[1.8]">
              Diplômé de l'Université d'Alger, le Dr. Aib Amar a consacré treize années à la première clinique esthétique européenne, située dans le prestigieux 8<sup>e</sup> arrondissement de Paris. Membre de la SOFCPRE — Société Française de Chirurgie Plastique Reconstructrice et Esthétique — il a perfectionné sa technique aux côtés des plus grands maîtres de la chirurgie esthétique.
            </p>
            <p className="font-body text-[16px] font-light text-[var(--dark)] opacity-75 leading-[1.8]">
              De retour en Algérie, il a créé un cabinet où la rigueur parisienne rencontre la chaleur méditerranéenne. Chaque intervention est pensée comme une œuvre sur mesure, adaptée à l'anatomie et aux désirs de chaque patient.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-9">
            {badges.map((badge) => (
              <span
                key={badge}
                className="border border-[var(--accent)] font-body text-[11px] font-normal uppercase tracking-[0.1em] text-[var(--accent)] px-4 py-2"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <CTASecondary to="/docteur">En savoir plus &rarr;</CTASecondary>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
