const items = [
  'Chirurgie Plastique',
  'Rhinoplastie',
  'Lifting',
  'Liposuccion',
  'Blépharoplastie',
  'Prothèse Mammaire',
  'Greffe Capillaire',
  'Botox',
];

export default function MarqueeStrip() {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center whitespace-nowrap">
      <span className="font-body text-[12px] md:text-[13px] font-normal uppercase tracking-[0.16em] text-[var(--white)] opacity-60 px-8 md:px-12">
        {item}
      </span>
      <span className="text-[var(--accent)] text-[8px]">&#9679;</span>
    </span>
  ));

  return (
    <section className="bg-[var(--dark)] py-5 md:py-7 overflow-hidden">
      <div className="flex animate-marquee">
        <div className="flex items-center">{content}</div>
        <div className="flex items-center">{content}</div>
      </div>
    </section>
  );
}
