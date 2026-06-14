/*
 * Single source of truth for Cal.com booking.
 * CAL_LINK is the slug part of the booking URL (cal.com/<CAL_LINK>).
 * The Cal embed (see components/CalProvider.tsx) opens it as a themed popup.
 * Buttons spread `calAttrs` to become popup triggers, and keep `bookingUrl` as
 * an href fallback for no-JS / SEO. Clearing CAL_LINK reverts everything to the
 * contact form automatically.
 */
export const CAL_LINK: string = 'khaled-ai/30min';
export const CAL_NAMESPACE = '30min';

export const hasBooking = CAL_LINK !== '';
export const bookingUrl = hasBooking ? `https://cal.com/${CAL_LINK}` : '/contact/';

export const calAttrs: Record<string, string> = hasBooking
  ? {
      'data-cal-namespace': CAL_NAMESPACE,
      'data-cal-link': CAL_LINK,
      'data-cal-config': '{"layout":"month_view"}',
    }
  : {};
