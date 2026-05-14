import AnimatedHeading from '../../components/AnimatedHeading';
import CTAPrimary from '../../components/CTAPrimary';
import ScrollReveal from '../../components/ScrollReveal';

export default function CTAContactSection() {
  return (
    <section className="relative bg-[var(--dark)] py-20 md:py-28 lg:py-32 px-6 overflow-hidden">
      {/* Decorative circles */}
      <svg
        className="absolute -top-[200px] -left-[200px] opacity-[0.07]"
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
      >
        <circle cx="300" cy="300" r="299" stroke="var(--accent)" strokeWidth="1" />
      </svg>
      <svg
        className="absolute -bottom-[100px] -right-[100px] opacity-[0.07]"
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="199" stroke="var(--accent)" strokeWidth="1" />
      </svg>

      <div className="relative z-10 max-w-[600px] mx-auto text-center">
        <AnimatedHeading
          centered
          light
          lines={[
            { text: 'Prêt à' },
            { text: 'prenons le temps', italicWord: 'prenons le temps' },
            { text: "d'en parler" },
          ]}
        />

        <ScrollReveal delay={0.2}>
          <p className="font-body text-[16px] md:text-[17px] font-light text-[var(--white)] opacity-60 mt-5 leading-[1.7]">
            Une question ? Une envie ? Le Dr. Aib Amar vous reçoit à Annaba pour une consultation personnalisée.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10">
            <CTAPrimary to="/contact" inverted>
              Prendre rendez-vous
            </CTAPrimary>
          </div>
        </ScrollReveal>

        {/* Contact blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 mt-20">
          {[
            { label: 'Téléphone', value: '+213 0557 969 174' },
            { label: 'Email', value: 'info@chirurgieesthetique-dz.com' },
            { label: 'Ville', value: 'Annaba, Algérie' },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <div
                className={`text-center ${
                  i > 0 ? 'md:border-l md:border-[var(--line)] md:border-opacity-10' : ''
                }`}
              >
                <div className="w-8 h-8 rounded-full border border-[var(--accent)] mx-auto flex items-center justify-center mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                </div>
                <p className="font-body text-[15px] font-light text-[var(--white)]">
                  {item.value}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
