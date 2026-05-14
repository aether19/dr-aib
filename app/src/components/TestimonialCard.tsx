interface Props {
  quote: string;
  source: string;
}

export default function TestimonialCard({ quote, source }: Props) {
  return (
    <div className="relative bg-[var(--bg-alt)] p-8 md:p-10 border border-[var(--line)] hover:border-[var(--accent)] transition-colors duration-300 group">
      {/* Quote mark */}
      <span className="block font-display text-[56px] font-normal leading-none text-[var(--accent)] opacity-30 mb-4 select-none group-hover:opacity-50 transition-opacity duration-300">
        &ldquo;
      </span>
      <p className="font-display text-[16px] md:text-[17px] font-normal italic text-[var(--dark)] leading-[1.75]">
        {quote}
      </p>
      <div className="w-10 h-[1px] bg-[var(--accent)] my-6" />
      <p className="font-body text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
        {source}
      </p>
    </div>
  );
}
