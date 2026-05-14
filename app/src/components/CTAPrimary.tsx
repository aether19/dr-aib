import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  inverted?: boolean;
  className?: string;
}

export default function CTAPrimary({ children, to, onClick, inverted, className = '' }: Props) {
  const base = inverted
    ? 'bg-[var(--accent)] text-[var(--white)] hover:bg-[var(--accent-light)]'
    : 'bg-[var(--dark)] text-[var(--white)] hover:bg-[var(--accent)]';

  const cls = `inline-block font-body text-[12px] font-normal uppercase tracking-[0.1em] px-8 py-4 transition-colors duration-300 ${base} ${className}`;

  if (to) {
    return <Link to={to} className={cls}>{children}</Link>;
  }
  return <button onClick={onClick} className={cls}>{children}</button>;
}
