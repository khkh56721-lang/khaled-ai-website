'use client';

import { useEffect } from 'react';
import { CAL_LINK, CAL_NAMESPACE, bookingUrl } from '@/lib/booking';

/*
 * Renders the Cal.com booking calendar inline on the contact page. Cal injects
 * its iframe INTO #cal-inline-booking, so that element must stay empty — any
 * fallback content placed inside would never be removed and would leave a big
 * dead block under the calendar. The "open the full page" link therefore lives
 * OUTSIDE the embed as a small line. While empty (pre-load), CSS gives the box a
 * loading min-height (#cal-inline-booking:empty in globals.css); once the iframe
 * mounts the box sizes to the calendar exactly.
 */
const ELEMENT_ID = 'cal-inline-booking';

export default function CalInline() {
  useEffect(() => {
    if (!CAL_LINK) return;
    let tries = 0;
    const mount = () => {
      const Cal = (window as unknown as { Cal?: { ns?: Record<string, (...a: unknown[]) => void> } }).Cal;
      if (!Cal || !Cal.ns || !Cal.ns[CAL_NAMESPACE]) {
        if (tries++ < 60) setTimeout(mount, 100);
        return;
      }
      Cal.ns[CAL_NAMESPACE]('inline', {
        elementOrSelector: `#${ELEMENT_ID}`,
        calLink: CAL_LINK,
        config: { layout: 'month_view', theme: 'dark' },
      });
    };
    mount();
  }, []);

  return (
    <>
      <div id={ELEMENT_ID} className="overflow-hidden rounded-3xl border border-border bg-card/40" />
      <p className="mt-3 text-center text-xs text-muted">
        Calendar not loading?{' '}
        <a href={bookingUrl} target="_blank" rel="noreferrer" className="font-semibold text-accent hover:underline">
          Open the booking page →
        </a>
      </p>
    </>
  );
}
