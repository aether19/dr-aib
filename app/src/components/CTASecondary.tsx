import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  to: string;
  className?: string;
}

export default function CTASecondary({ children, to, className = '' }: Props) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 font-body text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--dark)] border border-[var(--dark)] px-7 py-3.5 hover:bg-[var(--dark)] hover:text-white transition-all duration-300 ${className}`}
    >
      {children}
    </Link>
  );
}
