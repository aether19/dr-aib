import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  inverted?: boolean;
  className?: string;
}

export default function CTAPrimary({ children, to, onClick, inverted, className = '' }: Props) {
  // Shafer style: dark (black) by default, accent when inverted
  const base = inverted
    ? 'bg-[var(--accent)] text-white hover:bg-[var(--dark)]'
    : 'bg-[var(--dark)] text-white hover:bg-[var(--accent)]';

  const cls = `inline-flex items-center justify-center font-body text-[11px] font-medium uppercase tracking-[0.14em] px-8 py-4 transition-colors duration-300 ${base} ${className}`;

  if (to) {
    return <Link to={to} className={cls}>{children}</Link>;
  }
  return <button onClick={onClick} className={cls}>{children}</button>;
}
