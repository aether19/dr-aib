interface Props {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function SectionSupertitle({ children, className = '', light }: Props) {
  return (
    <p
      className={`supertitle mb-5 ${className}`}
      style={light ? { color: 'var(--accent-light)' } : undefined}
    >
      {children}
    </p>
  );
}
