const items = [
  'Chirurgie Plastique',
  'Rhinoplastie',
  'Lifting',
  'Liposuccion',
  'Blépharoplastie',
  'Prothèse Mammaire',
  'Greffe Capillaire',
  'Botox',
  'Acide Hyaluronique',
  'Abdominoplastie',
];

export default function MarqueeStrip() {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center whitespace-nowrap">
      <span className="font-body text-[11px] md:text-[12px] font-medium uppercase tracking-[0.22em] text-white/70 px-8 md:px-12">
        {item}
      </span>
      <span className="text-[var(--accent-light)] text-[6px]">&#9679;</span>
    </span>
  ));

  return (
    <section className="bg-[var(--accent)] py-4 md:py-5 overflow-hidden">
      <div className="flex animate-marquee">
        <div className="flex items-center">{content}</div>
        <div className="flex items-center">{content}</div>
      </div>
    </section>
  );
}
