import AnimatedHeading from '../../components/AnimatedHeading';
import CTAPrimary from '../../components/CTAPrimary';
import ScrollReveal from '../../components/ScrollReveal';
import ImagePlaceholder from '../../components/ImagePlaceholder';

export default function CTAContactSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <ImagePlaceholder
          label="Clinique Dr. Aib Amar — Annaba"
          aspect="auto"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-[var(--accent)]/90" />
      </div>

      <div className="relative z-10 py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[760px] mx-auto text-center">
          <ScrollReveal>
            <p className="font-body text-[11px] font-medium uppercase tracking-[0.28em] text-white/70 mb-6">
              Consultation
            </p>
          </ScrollReveal>

          <AnimatedHeading
            centered
            light
            lines={[
              { text: 'Prenons le temps' },
              { text: "d'en parler", italicWord: "d'en parler" },
              { text: 'ensemble' },
            ]}
          />

          <ScrollReveal delay={0.2}>
            <p className="font-body text-[16px] md:text-[17px] font-light text-white/75 mt-6 leading-[1.75] max-w-[520px] mx-auto">
              Le Dr. Aib Amar vous reçoit à Annaba pour une consultation personnalisée. Posez vos questions en toute confidentialité.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <CTAPrimary to="/contact" className="bg-white !text-[var(--accent)] hover:bg-[var(--dark)] hover:!text-white">
                Prendre rendez-vous
              </CTAPrimary>
            </div>
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 pt-12 border-t border-white/25">
              {[
                { label: 'Téléphone', value: '+213 0557 969 174', icon: '📞' },
                { label: 'Email', value: 'info@chirurgieesthetique-dz.com', icon: '✉' },
                { label: 'Adresse', value: 'Annaba, Algérie', icon: '📍' },
              ].map((item, i) => (
                <div key={i} className={`text-center ${i > 0 ? 'md:border-l md:border-white/20' : ''}`}>
                  <p className="font-body text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 mb-2">
                    {item.label}
                  </p>
                  <p className="font-body text-[14px] font-light text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
