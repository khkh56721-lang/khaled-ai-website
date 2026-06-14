'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/*
 * Global scroll-reveal. Watches every `.reveal-on-scroll` element and adds
 * `.is-visible` when it scrolls into view (one-way — it doesn't re-hide). Mounted
 * once in the layout; re-scans on route change. Pure IntersectionObserver, no
 * animation library. Honors prefers-reduced-motion (the CSS no-ops the transform).
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal-on-scroll'));
    if (els.length === 0) return;

    // If IntersectionObserver is unavailable, just show everything.
    if (typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    els.forEach((el) => {
      // Reveal immediately if already in view on load (above the fold).
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        el.classList.add('is-visible');
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
