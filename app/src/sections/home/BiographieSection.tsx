import SectionSupertitle from '../../components/SectionSupertitle';
import AnimatedHeading from '../../components/AnimatedHeading';
import ScrollReveal from '../../components/ScrollReveal';
import CTASecondary from '../../components/CTASecondary';

const badges = ["SOFCPRE", "PARIS VIII", "13 ANS D'EXPÉRIENCE"];

export default function BiographieSection() {
  return (
    <section className="bg-[var(--bg)]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Doctor portrait */}
        <ScrollReveal direction="left" distance={30} duration={0.9} className="min-h-[420px] lg:min-h-[620px] overflow-hidden">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F256e4933475b4e70b4bdbc906fdb0009%2F43d4d089f46443e0b478f4d4b09a9770?format=webp&width=800&height=1200"
            alt="Dr. Aib Amar — Portrait"
            className="w-full h-full object-cover object-center min-h-[420px] lg:min-h-[620px]"
          />
        </ScrollReveal>

        {/* Right - Text */}
        <ScrollReveal
          direction="right"
          distance={30}
          duration={0.9}
          delay={0.15}
          className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 bg-white"
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
            <p className="font-body text-[15px] md:text-[16px] font-light text-[var(--dark)] opacity-65 leading-[1.85]">
              Diplômé de l'Université d'Alger, le Dr. Aib Amar a consacré treize années à la première clinique esthétique européenne, située dans le prestigieux 8<sup>e</sup> arrondissement de Paris. Membre de la SOFCPRE — Société Française de Chirurgie Plastique Reconstructrice et Esthétique — il a perfectionné sa technique aux côtés des plus grands maîtres de la chirurgie esthétique.
            </p>
            <p className="font-body text-[15px] md:text-[16px] font-light text-[var(--dark)] opacity-65 leading-[1.85]">
              De retour en Algérie, il a créé un cabinet où la rigueur parisienne rencontre la chaleur méditerranéenne. Chaque intervention est pensée comme une œuvre sur mesure, adaptée à l'anatomie et aux désirs de chaque patient.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-9">
            {badges.map((badge) => (
              <span
                key={badge}
                className="border border-[var(--accent)] font-body text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--accent)] px-4 py-2"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-9">
            <CTASecondary to="/docteur">En savoir plus sur le Dr. Amar</CTASecondary>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
