'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

/*
 * Mobile-only sticky bottom CTA. Appears after the user scrolls past the hero
 * (~600px). Closeable per-session via sessionStorage so it doesn't re-haunt
 * the same visitor on a refresh. Hidden on /contact (would be redundant).
 *
 * The point: mobile B2B users scroll-and-bounce. A persistent low-friction
 * "Book a call →" button measurably bumps conversion. md:hidden so it never
 * shows on desktop where the floating navbar already has the same CTA.
 */
const SESSION_KEY = 'kld-mobile-cta-closed';

export default function MobileStickyCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem(SESSION_KEY) === '1') {
      setClosed(true);
      return;
    }
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClose = () => {
    setClosed(true);
    try { sessionStorage.setItem(SESSION_KEY, '1'); } catch {}
  };

  if (closed || !visible || pathname === '/contact' || pathname?.startsWith('/contact')) {
    return null;
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-40 md:hidden">
      <div className="flex items-center gap-2 rounded-full border border-border bg-card/95 px-3 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur">
        <span className="relative ml-1 flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <p className="flex-1 truncate text-sm font-semibold text-white">
          Free discovery call · 30 min
        </p>
        <Link
          href="/contact/"
          className="rounded-full bg-accent px-4 py-2 text-xs font-bold text-bg"
        >
          Book →
        </Link>
        <button
          onClick={handleClose}
          aria-label="Dismiss"
          className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-muted hover:bg-white/5 hover:text-white"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
