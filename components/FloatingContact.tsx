'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { bookingUrl, hasBooking, calAttrs } from '@/lib/booking';

/*
 * Desktop floating contact widget (bottom-right). Complements MobileStickyCTA
 * (mobile-only) — together they make "talk to Khaled" reachable from anywhere
 * without hunting for the contact page, the way blacksmith-ind.com does.
 *
 * Opens a small panel with two paths: book a call (Cal.com — see lib/booking.ts)
 * and send a message (/contact). Closes on Escape or outside click. Hidden on
 * /contact where it would be redundant. md:flex so mobile uses the sticky bar.
 */
export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-40 hidden md:block">
      {/* Panel */}
      <div
        className={`absolute bottom-[4.5rem] right-0 w-80 origin-bottom-right rounded-3xl border border-border bg-card/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-all duration-200 ${
          open
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-3 scale-95 opacity-0'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
          <div>
            <p className="text-sm font-extrabold text-white">Let&apos;s talk</p>
            <p className="text-xs text-muted">Usually replies within 24 hours</p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-strong">
          Tell me what&apos;s eating your team&apos;s time, or grab a free 30-minute AI
          roadmap call. No pitch.
        </p>

        <div className="mt-4 flex flex-col gap-2.5">
          {hasBooking ? (
            <a
              href={bookingUrl}
              {...calAttrs}
              className="btn-primary w-full justify-center"
            >
              Book a free call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ) : (
            <Link href="/contact/" className="btn-primary w-full justify-center" onClick={() => setOpen(false)}>
              Book a free call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          )}
          <Link
            href="/contact/"
            className="btn-secondary w-full justify-center"
            onClick={() => setOpen(false)}
          >
            Send a message
          </Link>
          <a
            href="mailto:khaled@khaled-ai.com"
            className="text-center text-xs text-muted transition-colors hover:text-white"
          >
            or email khaled@khaled-ai.com
          </a>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close contact' : 'Contact Khaled'}
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-bg shadow-[0_10px_30px_rgba(74,222,128,0.45)] transition-all hover:scale-105 hover:bg-accent-hover"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8A8.38 8.38 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
