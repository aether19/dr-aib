import SectionSupertitle from '../../components/SectionSupertitle';
import AnimatedHeading from '../../components/AnimatedHeading';
import TestimonialCard from '../../components/TestimonialCard';
import CTASecondary from '../../components/CTASecondary';
import ScrollReveal from '../../components/ScrollReveal';

const testimonials = [
  {
    quote: 'Un chirurgien plasticien royalement réussi sur le plan professionnel autant que sur le plan humain. Je vous recommande vivement le Dr. Aib Amar, avec des mains exclusivement algériennes.',
    source: 'estheticon.fr',
  },
  {
    quote: "Une semaine après le lifting cervico-facial, je suis sincèrement heureuse. Un résultat positif très précoce. C'est un grand médecin avec une grande expérience.",
    source: 'estheticon.fr',
  },
];

export default function TemoignagesSection() {
  return (
    <section className="bg-[var(--white)] py-20 md:py-28 lg:py-32 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <SectionSupertitle>Témoignages</SectionSupertitle>
            <AnimatedHeading
              lines={[
                { text: 'La parole' },
                { text: 'aux patients', italicWord: 'aux patients' },
              ]}
            />
          </div>
          <CTASecondary to="/docteur">Tous les avis &rarr;</CTASecondary>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <TestimonialCard quote={t.quote} source={t.source} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
