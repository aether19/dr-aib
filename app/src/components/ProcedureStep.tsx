interface Props {
  number: string;
  title: string;
  description: string;
  last?: boolean;
}

export default function ProcedureStep({ number, title, description, last }: Props) {
  return (
    <div className={`flex gap-6 md:gap-8 py-8 ${!last ? 'border-b border-[var(--line)]' : ''}`}>
      <span className="font-display text-[40px] md:text-[48px] font-light text-[var(--muted)] opacity-15 flex-shrink-0 w-[60px] md:w-[80px]">
        {number}
      </span>
      <div>
        <h4 className="font-display text-[20px] md:text-[22px] font-normal text-[var(--dark)] mb-2">
          {title}
        </h4>
        <p className="font-body text-[14px] md:text-[15px] font-light text-[var(--muted)] leading-[1.7]">
          {description}
        </p>
      </div>
    </div>
  );
}
