import SectionSupertitle from '../../components/SectionSupertitle';
import AnimatedHeading from '../../components/AnimatedHeading';
import TestimonialCard from '../../components/TestimonialCard';
import CTAPrimary from '../../components/CTAPrimary';
import ScrollReveal from '../../components/ScrollReveal';

const testimonials = [
  {
    quote: 'Un chirurgien plasticien royalement réussi sur le plan professionnel autant que sur le plan humain. Je vous recommande vivement le Dr. Aib Amar, avec des mains exclusivement algériennes.',
    author: 'Patient vérifié',
    source: 'estheticon.fr',
  },
  {
    quote: "Une semaine après le lifting cervico-facial, je suis sincèrement heureuse. Un résultat positif très précoce. C'est un grand médecin avec une grande expérience.",
    author: 'Patiente vérifiée',
    source: 'estheticon.fr',
  },
  {
    quote: "Le Dr. Aib Amar m'a reçue avec beaucoup de professionnalisme et de bienveillance. Le résultat de ma rhinoplastie dépasse mes espérances.",
    author: 'Patiente vérifiée',
    source: 'Google',
  },
];

export default function TemoignagesSection() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-32 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <SectionSupertitle>Témoignages</SectionSupertitle>
            <AnimatedHeading
              lines={[
                { text: 'La parole' },
                { text: 'aux patients', italicWord: 'aux patients' },
              ]}
            />
          </div>
          <CTAPrimary to="/docteur">Tous les avis</CTAPrimary>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <TestimonialCard quote={t.quote} source={t.source} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
