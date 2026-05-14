import StatBlock from '../../components/StatBlock';
import ScrollReveal from '../../components/ScrollReveal';

const stats = [
  { value: '13', label: 'Années à Paris VIII' },
  { value: '21', suffix: '+', label: 'Interventions proposées' },
  { value: '2', label: 'Spécialités majeures' },
  { value: 'SOFCPRE', label: 'Membre titulaire', isText: true },
];

export default function StatsSection() {
  return (
    <section className="bg-[var(--dark-2)] py-16 md:py-20 px-6 md:px-12">
      <ScrollReveal>
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
          {stats.map((stat) => (
            <StatBlock
              key={stat.label}
              value={stat.value}
              label={stat.label}
              isText={stat.isText}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
