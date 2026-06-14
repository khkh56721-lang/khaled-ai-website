'use client';

import Script from 'next/script';
import { CAL_LINK, CAL_NAMESPACE } from '@/lib/booking';

/*
 * Loads the Cal.com embed once and registers our event namespace, themed to the
 * site (dark + mint brand). Any element with data-cal-link / data-cal-namespace
 * (see lib/booking.ts `calAttrs`) then opens the booking as a popup over the page.
 * The init JS is a string so it isn't type-checked — it's the official vanilla
 * Cal embed loader.
 */
export default function CalProvider() {
  if (!CAL_LINK) return null;

  return (
    <Script
      id="cal-embed-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", "${CAL_NAMESPACE}", {origin:"https://cal.com"});
          Cal.ns["${CAL_NAMESPACE}"]("ui", {"theme":"dark","cssVarsPerTheme":{"dark":{"cal-brand":"#4ADE80"},"light":{"cal-brand":"#16A34A"}},"hideEventTypeDetails":false,"layout":"month_view"});
        `,
      }}
    />
  );
}
