'use client';

import { useEffect, useState } from 'react';
import { submitLead } from '@/lib/submitLead';

type Props = {
  open: boolean;
  resource: string | null;
  onClose: () => void;
};

export default function LeadModal({ open, resource, onClose }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (open) {
      setStatus('idle');
      setName('');
      setEmail('');
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    const res = await submitLead({
      type: 'resource',
      name: name.trim(),
      email: email.trim(),
      resource: resource ?? 'unknown',
    });
    setStatus(res.ok ? 'success' : 'error');
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-border bg-card p-7 shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
        onClick={(e) => e.stopPropagation()}
      >
        {status === 'success' ? (
          <div className="text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-success-soft text-success">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-extrabold">You&apos;re on the list.</h3>
            <p className="mt-2 text-sm text-muted">
              I&apos;ll send <span className="text-white">{resource}</span> straight to{' '}
              <span className="text-white">{email}</span> in the next few minutes.
            </p>
            <button onClick={onClose} className="btn-secondary mt-6 w-full justify-center">
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-start justify-between">
              <div>
                <p className="eyebrow">Free resource</p>
                <h3 className="mt-2 text-xl font-extrabold leading-tight">
                  {resource ?? 'Get the resource'}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="rounded-full p-1 text-muted hover:bg-white/5 hover:text-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <p className="mt-3 text-sm text-muted">
              Drop your email — I&apos;ll send it over. No spam, ever.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-white placeholder-muted outline-none transition-colors focus:border-accent"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-white placeholder-muted outline-none transition-colors focus:border-accent"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary mt-1 w-full justify-center disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending…' : 'Send Me the Resource'}
              </button>
              {status === 'error' && (
                <p className="text-center text-xs text-danger">
                  Something went wrong. Try again or email khaled@khaled-ai.com.
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
