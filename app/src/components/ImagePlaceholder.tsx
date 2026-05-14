interface Props {
  label: string;
  aspect?: string;
  className?: string;
  parallax?: boolean;
}

export default function ImagePlaceholder({ label, aspect = '3/4', className = '' }: Props) {
  return (
    <div
      className={`flex items-center justify-center border border-[var(--line)] border-opacity-60 bg-[var(--bg-alt)] overflow-hidden transition-transform duration-500 hover:scale-[1.02] ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <span className="placeholder-label text-center px-4">{label}</span>
    </div>
  );
}
