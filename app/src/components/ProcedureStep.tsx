interface Props {
  number: string;
  title: string;
  description: string;
  last?: boolean;
}

export default function ProcedureStep({ number, title, description, last }: Props) {
  return (
    <div className={`flex gap-6 md:gap-8 py-8 ${!last ? 'border-b border-[var(--line)]' : ''}`}>
      <span className="font-display text-[38px] md:text-[44px] font-normal text-[var(--accent)] opacity-30 flex-shrink-0 w-[56px] md:w-[72px]">
        {number}
      </span>
      <div>
        <h4 className="font-display text-[19px] md:text-[21px] font-normal text-[var(--dark)] mb-2">
          {title}
        </h4>
        <p className="font-body text-[14px] font-light text-[var(--muted)] leading-[1.75]">
          {description}
        </p>
      </div>
    </div>
  );
}
