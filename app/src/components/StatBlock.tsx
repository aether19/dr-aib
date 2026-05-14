import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  value: string;
  label: string;
  isText?: boolean;
  suffix?: string;
  light?: boolean;
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function StatBlock({ value, label, isText, suffix = '', light }: Props) {
  const [display, setDisplay] = useState('0');
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const textColor = light ? 'text-white' : 'text-[var(--dark)]';
  const labelColor = light ? 'text-white/60' : 'text-[var(--muted)]';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || isText) return;
    const numericValue = parseInt(value, 10);
    if (isNaN(numericValue)) return;
    const duration = 1500;
    const startTime = performance.now();
    let raf: number;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      setDisplay(String(Math.round(eased * numericValue)));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [started, value, isText]);

  if (isText) {
    return (
      <motion.div
        ref={ref}
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className={`font-display text-[26px] md:text-[32px] font-normal ${textColor}`}>
          {value}
        </p>
        <p className={`font-body text-[10px] font-medium uppercase tracking-[0.16em] ${labelColor} mt-3`}>
          {label}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className={`font-display text-[52px] md:text-[72px] font-normal ${textColor} leading-none`}>
        {started ? display : '0'}{suffix}
      </p>
      <p className={`font-body text-[10px] font-medium uppercase tracking-[0.16em] ${labelColor} mt-3`}>
        {label}
      </p>
    </motion.div>
  );
}
