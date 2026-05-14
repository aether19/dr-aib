import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);
  const isHovering = useRef(false);

  useEffect(() => {
    // Only on devices with hover
    if (!window.matchMedia('(hover: hover)').matches) return;

    document.body.style.cursor = 'none';

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor-hover], [role="button"]')) {
        isHovering.current = true;
        document.body.classList.add('cursor-hovering');
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor-hover], [role="button"]')) {
        isHovering.current = false;
        document.body.classList.remove('cursor-hovering');
      }
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        const size = isHovering.current ? 30 : 20;
        ringRef.current.style.transform = `translate(${ring.current.x - size}px, ${ring.current.y - size}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(raf.current);
      document.body.style.cursor = '';
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[var(--accent)] rounded-full pointer-events-none z-[9999] transition-[width,height] duration-200 [&.cursor-hovering]:w-3 [&.cursor-hovering]:h-3"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border border-[var(--accent)] rounded-full pointer-events-none z-[9999] transition-[width,height,opacity] duration-200 [&.cursor-hovering]:w-[60px] [&.cursor-hovering]:h-[60px] [&.cursor-hovering]:opacity-50"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
