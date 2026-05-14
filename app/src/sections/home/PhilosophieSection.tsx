import SectionSupertitle from '../../components/SectionSupertitle';
import AnimatedHeading from '../../components/AnimatedHeading';
import ProcedureStep from '../../components/ProcedureStep';
import ScrollReveal from '../../components/ScrollReveal';

const steps = [
  { number: '01', title: 'Consultation', description: 'Un échange approfondi pour comprendre vos souhaits et évaluer les possibilités techniques.' },
  { number: '02', title: 'Planification', description: 'Chaque geste est préparé avec précision. Le Dr. Aib Amar élabore un protocole chirurgical personnalisé.' },
  { number: '03', title: 'Suivi', description: "L'accompagnement continue bien après l'intervention. Des visites de contrôle assurent une récupération optimale." },
];

export default function PhilosophieSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left - Dark */}
      <ScrollReveal
        direction="left"
        distance={20}
        duration={0.8}
        className="bg-[var(--dark)] px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32 flex flex-col justify-center"
      >
        <SectionSupertitle light>Notre Approche</SectionSupertitle>
        <AnimatedHeading
          light
          lines={[
            { text: 'Une chirurgie' },
            { text: 'guidée par' },
            { text: 'l\'écoute', italicWord: 'l\'écoute' },
          ]}
        />
        <div className="mt-7 space-y-4 max-w-[400px]">
          <p className="font-body text-[16px] font-light text-[var(--white)] opacity-70 leading-[1.8]">
            Avant toute décision, le Dr. Aib Amar prend le temps de comprendre. Vos attentes, votre anatomie, votre histoire.
          </p>
          <p className="font-body text-[16px] font-light text-[var(--white)] opacity-70 leading-[1.8]">
            Le résultat doit être vous, en mieux. Naturel, harmonieux, durable.
          </p>
        </div>
      </ScrollReveal>

      {/* Right - Light */}
      <div className="bg-[var(--bg-alt)] px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32">
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
      </div>
    </section>
  );
}
