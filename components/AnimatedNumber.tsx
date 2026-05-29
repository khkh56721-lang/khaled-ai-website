'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  value: string; // e.g. "1,000+", "98%", "24/7"
  durationMs?: number;
  delayMs?: number; // stagger: wait this long after the element enters view before counting
  className?: string;
};

/*
 * Parses the numeric portion of `value`, animates from 0 to that number when
 * the element scrolls into view, then re-attaches any prefix/suffix
 * (commas, %, +, /, etc). For non-numeric values like "24/7" it just fades in.
 */
export default function AnimatedNumber({ value, durationMs = 1400, delayMs = 0, className = '' }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState<string>(value.replace(/[\d]/g, '0'));
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^([^\d-]*)([\d,.-]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      setDone(true);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const target = Number(numStr.replace(/,/g, ''));
    if (!Number.isFinite(target)) {
      setDisplay(value);
      setDone(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || done) return;
        observer.disconnect();
        const runTick = () => {
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / durationMs);
            const eased = 1 - Math.pow(1 - t, 3);
            const current = Math.round(target * eased);
            const formatted = current.toLocaleString('en-US');
            setDisplay(`${prefix}${formatted}${suffix}`);
            if (t < 1) requestAnimationFrame(tick);
            else setDone(true);
          };
          requestAnimationFrame(tick);
        };
        if (delayMs > 0) {
          setTimeout(runTick, delayMs);
        } else {
          runTick();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, durationMs, delayMs, done]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
