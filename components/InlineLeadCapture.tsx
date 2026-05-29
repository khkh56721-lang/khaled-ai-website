'use client';

import { useState } from 'react';
import { submitLead } from '@/lib/submitLead';

/*
 * Single-field inline lead capture, slotted into the home page flow.
 * Visitor doesn't have to leave the home page to grab the resource —
 * they hand over an email mid-scroll. Routes to the same Make.com webhook
 * as the /resources modal, tagged `resource: 'Lead Gen Template (home)'`
 * so we can see in Make which path converts better.
 */
const RESOURCE_NAME = 'Lead Gen Automation Template';

export default function InlineLeadCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    const res = await submitLead({
      type: 'resource',
      name: '',
      email: email.trim(),
      resource: `${RESOURCE_NAME} (home inline)`,
    });
    setStatus(res.ok ? 'success' : 'error');
  };

  return (
    <section className="container-tight py-14 md:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/80 p-8 backdrop-blur-sm md:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent-glow blur-[120px] opacity-50"
        />

        <div className="relative grid items-center gap-8 md:grid-cols-[1.2fr_1fr] md:gap-12">
          <div>
            <p className="eyebrow">Free resource</p>
            <h2 className="heading-md mt-3">
              The <span className="text-accent">Lead Gen template</span> we use for clients.
            </h2>
            <p className="mt-4 max-w-xl text-base text-muted-strong">
              The same Make.com scenario we deploy for B2B clients: scrape, enrich, personalize,
              send. Drop your email — we&apos;ll send the full blueprint plus a setup walkthrough.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-white">
              <li className="flex items-center gap-2">
                <span className="grid h-4 w-4 place-items-center rounded-full bg-accent-soft text-accent">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Importable Make.com blueprint
              </li>
              <li className="flex items-center gap-2">
                <span className="grid h-4 w-4 place-items-center rounded-full bg-accent-soft text-accent">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Step-by-step setup walkthrough
              </li>
              <li className="flex items-center gap-2">
                <span className="grid h-4 w-4 place-items-center rounded-full bg-accent-soft text-accent">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                No upsell, no course pitch
              </li>
            </ul>
          </div>

          <div>
            {status === 'success' ? (
              <div className="rounded-2xl border border-accent/40 bg-accent-soft p-6 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent text-bg">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-extrabold">Sent. Check your inbox.</h3>
                <p className="mt-2 text-sm text-muted-strong">
                  The template + walkthrough are on the way to <span className="font-semibold text-white">{email}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <label className="text-xs uppercase tracking-wider text-muted">
                  Your email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-border bg-bg px-4 py-3.5 text-sm text-white placeholder-muted outline-none transition-colors focus:border-accent"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center disabled:opacity-60"
                >
                  {status === 'loading' ? 'Sending…' : 'Send me the template'}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {status === 'error' && (
                  <p className="mt-1 text-center text-xs text-danger">
                    Something went wrong. Try the form on /resources or email khaled@khaled-ai.com.
                  </p>
                )}
                <p className="mt-1 text-center text-[10px] text-muted">
                  One email. No spam list. Unsubscribe in one click.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
