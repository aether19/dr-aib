import { Link } from 'react-router-dom';
import { getProcedureImage } from '../data/procedureImages';

interface Props {
  title: string;
  tag: string;
  imageLabel: string;
  slug: string;
}

export default function ServiceCard({ title, tag, imageLabel, slug }: Props) {
  const imgSrc = getProcedureImage(slug);
  return (
    <Link
      to={`/chirurgie/${slug}`}
      className="group block bg-white overflow-hidden border border-[var(--line)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300"
    >
      <div className="overflow-hidden h-48">
        <img
          src={imgSrc}
          alt={imageLabel}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <p className="font-body text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--accent)] mb-2">{tag}</p>
        <h3 className="font-display text-[19px] font-normal text-[var(--dark)] leading-snug">{title}</h3>
        <span className="inline-flex items-center gap-1 mt-3 font-body text-[11px] font-medium text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors duration-200 uppercase tracking-[0.08em]">
          En savoir plus <span className="text-base">→</span>
        </span>
      </div>
    </Link>
  );
}
