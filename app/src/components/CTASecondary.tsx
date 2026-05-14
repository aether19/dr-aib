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
      className={`inline-block font-body text-[13px] font-normal text-[var(--dark)] border-b border-[var(--dark)] pb-1 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors duration-200 ${className}`}
    >
      {children}
    </Link>
  );
}
