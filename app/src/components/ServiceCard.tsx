import { Link } from 'react-router-dom';
import ImagePlaceholder from './ImagePlaceholder';

interface Props {
  title: string;
  tag: string;
  imageLabel: string;
  slug: string;
}

export default function ServiceCard({ title, tag, imageLabel, slug }: Props) {
  return (
    <Link
      to={`/chirurgie/${slug}`}
      className="group block bg-[var(--bg)] p-6 md:p-8 transition-colors duration-300 hover:bg-[var(--white)] border-r border-[var(--line)] last:border-r-0"
    >
      <ImagePlaceholder label={imageLabel} aspect="16/9" className="w-full h-[180px] mb-5" />
      <p className="supertitle text-[9px] tracking-[0.12em] mb-3">{tag}</p>
      <h3 className="font-display text-[20px] md:text-[22px] font-normal text-[var(--dark)] leading-tight">
        {title}
      </h3>
      <span className="inline-block mt-4 text-[var(--muted)] group-hover:text-[var(--accent)] transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
        &#8599;
      </span>
    </Link>
  );
}
