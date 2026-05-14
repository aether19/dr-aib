import SectionSupertitle from '../../components/SectionSupertitle';
import AnimatedHeading from '../../components/AnimatedHeading';
import ProcedureStep from '../../components/ProcedureStep';
import ScrollReveal from '../../components/ScrollReveal';

const steps = [
  { number: '01', title: 'Consultation', description: 'Un échange approfondi pour comprendre vos souhaits et évaluer les possibilités techniques avec le Dr. Aib Amar.' },
  { number: '02', title: 'Planification', description: 'Chaque geste est préparé avec précision. Le Dr. Aib Amar élabore un protocole chirurgical personnalisé.' },
  { number: '03', title: 'Suivi Post-opératoire', description: "L'accompagnement continue bien après l'intervention. Des visites de contrôle assurent une récupération optimale." },
];

export default function PhilosophieSection() {
  return (
    <section className="bg-[var(--bg-alt)]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Left — Text & Steps */}
        <ScrollReveal
          direction="left"
          distance={20}
          duration={0.8}
          className="px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32 flex flex-col justify-center order-2 lg:order-1"
        >
          <SectionSupertitle>Notre Approche</SectionSupertitle>
          <AnimatedHeading
            lines={[
              { text: 'Une chirurgie' },
              { text: 'guidée par' },
              { text: "l'écoute", italicWord: "l'écoute" },
            ]}
          />
          <div className="mt-8 space-y-4 mb-12 max-w-[440px]">
            <p className="font-body text-[15px] font-light text-[var(--dark)] opacity-65 leading-[1.85]">
              Avant toute décision, le Dr. Aib Amar prend le temps de comprendre. Vos attentes, votre anatomie, votre histoire.
            </p>
            <p className="font-body text-[15px] font-light text-[var(--dark)] opacity-65 leading-[1.85]">
              Le résultat doit être vous, en mieux. Naturel, harmonieux, durable.
            </p>
          </div>

          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <ProcedureStep
                number={step.number}
                title={step.title}
                description={step.description}
                last={i === steps.length - 1}
              />
            </ScrollReveal>
          ))}
        </ScrollReveal>

        {/* Right — Real clinic/OR image */}
        <ScrollReveal
          direction="right"
          distance={20}
          duration={0.8}
          delay={0.1}
          className="min-h-[400px] lg:min-h-0 order-1 lg:order-2 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=900&q=85"
            alt="Bloc opératoire — Dr. Aib Amar"
            className="w-full h-full object-cover min-h-[400px]"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
