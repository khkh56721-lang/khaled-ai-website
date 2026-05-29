'use client';

import { useState } from 'react';
import { submitLead } from '@/lib/submitLead';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setStatus('loading');
    const res = await submitLead({
      type: 'contact',
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });
    setStatus(res.ok ? 'success' : 'error');
    if (res.ok) {
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  if (status === 'success') {
    return (
      <div className="card-surface p-7 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-success-soft text-success">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-extrabold">Message received.</h3>
        <p className="mt-2 text-sm text-muted-strong">
          I&apos;ll get back to you within 24 hours. Promise.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-secondary mt-5 justify-center"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface flex flex-col gap-4 p-7">
      <div>
        <label className="text-xs uppercase tracking-wider text-muted">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-white placeholder-muted outline-none transition-colors focus:border-accent"
        />
      </div>
      <div>
        <label className="text-xs uppercase tracking-wider text-muted">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-white placeholder-muted outline-none transition-colors focus:border-accent"
        />
      </div>
      <div>
        <label className="text-xs uppercase tracking-wider text-muted">
          What do you need help with?
        </label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Tell me about the workflow you want to automate, the voice agent you need, or the problem you&apos;re stuck on."
          className="mt-2 w-full resize-none rounded-xl border border-border bg-bg px-4 py-3 text-sm text-white placeholder-muted outline-none transition-colors focus:border-accent"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary mt-2 w-full justify-center disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
      {status === 'error' && (
        <p className="text-center text-xs text-danger">
          Something went wrong. Try emailing khaled@khaled-ai.com directly.
        </p>
      )}
    </form>
  );
}
