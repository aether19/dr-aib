interface Props {
  label: string;
  aspect?: string;
  className?: string;
  src?: string;
  objectPosition?: string;
}

export default function ImagePlaceholder({ label, aspect = '3/4', className = '', src, objectPosition = 'center' }: Props) {
  if (src) {
    return (
      <div
        className={`overflow-hidden ${className}`}
        style={{ aspectRatio: aspect }}
      >
        <img
          src={src}
          alt={label}
          className="w-full h-full object-cover"
          style={{ objectPosition }}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center border border-[var(--line)] border-opacity-60 bg-[var(--bg-alt)] overflow-hidden ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <span className="placeholder-label text-center px-4">{label}</span>
    </div>
  );
}
