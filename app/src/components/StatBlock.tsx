import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  value: string;
  label: string;
  isText?: boolean;
  suffix?: string;
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function StatBlock({ value, label, isText, suffix = '' }: Props) {
  const [display, setDisplay] = useState('0');
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
        <p className="font-display text-[28px] md:text-[36px] font-normal text-[var(--accent-light)]">
          {value}
        </p>
        <p className="font-body text-[11px] font-normal uppercase tracking-[0.12em] text-[var(--muted)] mt-4">
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
      <p className="font-display text-[52px] md:text-[76px] font-light text-[var(--accent-light)] leading-none">
        {started ? display : '0'}{suffix}
      </p>
      <p className="font-body text-[11px] font-normal uppercase tracking-[0.12em] text-[var(--muted)] mt-4">
        {label}
      </p>
    </motion.div>
  );
}
