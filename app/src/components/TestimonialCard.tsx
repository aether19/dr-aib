interface Props {
  quote: string;
  source: string;
}

export default function TestimonialCard({ quote, source }: Props) {
  return (
    <div className="relative bg-[var(--bg-alt)] p-8 md:p-10">
      <span className="absolute top-4 left-6 font-display text-[80px] font-light leading-none text-[var(--accent)] opacity-20 select-none z-0">
        &ldquo;
      </span>
      <p className="relative z-10 font-display text-[16px] md:text-[18px] font-light italic text-[var(--dark)] leading-[1.7] mt-8">
        {quote}
      </p>
      <div className="relative z-10 w-10 h-px bg-[var(--line)] my-6" />
      <p className="relative z-10 supertitle text-[9px] tracking-[0.14em]">{source}</p>
    </div>
  );
}
