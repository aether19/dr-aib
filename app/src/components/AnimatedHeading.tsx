import { motion } from 'framer-motion';

interface Line {
  text: string;
  italicWord?: string;
}

interface Props {
  lines: Line[];
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  light?: boolean;
  centered?: boolean;
  size?: 'hero' | 'section' | 'page';
  delay?: number;
}

const sizeClasses = {
  hero: 'text-[44px] md:text-[88px] leading-[1.05]',
  section: 'text-[36px] md:text-[54px] leading-[1.1]',
  page: 'text-[40px] md:text-[64px] leading-[1.05]',
};

export default function AnimatedHeading({
  lines,
  className = '',
  as: Tag = 'h2',
  light,
  centered,
  size = 'section',
  delay = 0,
}: Props) {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const renderLine = (line: Line) => {
    if (!line.italicWord) return line.text;
    const parts = line.text.split(line.italicWord);
    return parts.map((part, j) => (
      <span key={j}>
        {part}
        {j < parts.length - 1 && <em className="italic">{line.italicWord}</em>}
      </span>
    ));
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={centered ? 'text-center' : ''}
    >
      <Tag
        className={`font-display font-normal tracking-[-0.02em] ${sizeClasses[size]} ${className}`}
        style={{ color: light ? 'var(--white)' : 'var(--dark)' }}
      >
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span variants={child} className="block">
              {renderLine(line)}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}
