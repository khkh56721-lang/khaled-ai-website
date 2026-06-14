/*
 * Selected work — scannable, client-grade case studies. One tight line per card
 * (not paragraphs), an icon, a status badge, animated star ratings, and a result
 * highlight. Built to be glanced at, not read.
 *
 * Honesty (anti-guru): stars reflect REAL, satisfied clients on real delivered
 * engagements — Khaled vouches for them. `quote`/`author` only render when real
 * client words exist; leave them undefined otherwise (no fabricated testimonials).
 */
import type { ReactNode } from 'react';

type Work = {
  status: string;
  state: 'live' | 'building' | 'done';
  sector: string;
  title: string;
  summary: string;
  result: string;
  stack: string[];
  rating?: number; // real client satisfaction, delivered work only
  quote?: string;
  author?: string;
  icon: 'voice' | 'agent' | 'mail' | 'flow';
};

const work: Work[] = [
  {
    status: 'Live',
    state: 'live',
    sector: 'Real estate + retail · France',
    title: 'After-hours voice agent',
    summary:
      'Answers inbound calls 24/7, qualifies the caller, and books the appointment by SMS — fully autonomous.',
    result: 'After-hours calls get booked instead of lost to voicemail.',
    stack: ['Vapi', 'Make.com', 'SMS'],
    rating: 5,
    icon: 'voice',
  },
  {
    status: 'Building now',
    state: 'building',
    sector: 'AI agent · Ecuador',
    title: 'Custom AI agent build',
    summary:
      'A custom AI agent handling customer conversations end-to-end — the current build on the bench, shipping soon.',
    result: 'Live build, in progress right now.',
    stack: ['Vapi', 'Claude', 'Make.com'],
    icon: 'agent',
  },
  {
    status: 'Delivered',
    state: 'done',
    sector: 'B2B outreach',
    title: 'Cold email lead-gen system',
    summary:
      'Scrapes, enriches, personalizes, and sends — then routes only warm replies into the CRM.',
    result: 'The founder only sees warm replies; the rest runs hands-off.',
    stack: ['Instantly', 'Make.com', 'Claude'],
    rating: 5,
    icon: 'mail',
  },
  {
    status: 'Delivered',
    state: 'done',
    sector: 'Ops automation · Upwork',
    title: 'Workflow automation build',
    summary:
      'Moves and transforms data between their tools automatically — no manual copy-paste, no errors.',
    result: 'Hours of manual work removed from the team’s week.',
    stack: ['Make.com', 'Airtable', 'Webhooks'],
    rating: 5,
    icon: 'flow',
  },
];

const ICONS: Record<Work['icon'], ReactNode> = {
  voice: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M5 11a7 7 0 0014 0M12 18v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  agent: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="4" y="7" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M12 3v4M8.5 13h.01M15.5 13h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  flow: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="18" cy="6" r="2.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="18" r="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M8 7l3 9M16 7l-3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className="star-anim"
            style={{ animationDelay: `${300 + i * 90}ms` }}
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill={i < n ? '#FBBF24' : 'none'}
            stroke="#FBBF24"
            strokeWidth="1.5"
          >
            <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2z" strokeLinejoin="round" />
          </svg>
        ))}
      </div>
      <span className="text-xs font-bold text-amber-300">5.0</span>
    </div>
  );
}

function StatusBadge({ status, state }: { status: string; state: Work['state'] }) {
  const live = state === 'live' || state === 'building';
  const tone =
    state === 'building'
      ? 'border-amber-400/40 bg-amber-400/10 text-amber-300'
      : state === 'live'
        ? 'border-accent/40 bg-accent-soft text-accent'
        : 'border-border bg-bg text-muted-strong';
  const dot = state === 'building' ? 'bg-amber-300' : 'bg-accent';
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] ${tone}`}>
      {live && (
        <span className="relative flex h-1.5 w-1.5">
          <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-70 ${dot}`} />
          <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dot}`} />
        </span>
      )}
      {status}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="work" className="relative scroll-mt-24 py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-accent-glow blur-[180px] opacity-40"
      />
      <div className="container-tight relative">
        <div className="reveal-on-scroll max-w-3xl">
          <p className="eyebrow">Selected work</p>
          <h2 className="heading-lg mt-3">
            Real builds, <span className="text-gradient">in production.</span>
          </h2>
          <p className="mt-5 text-base text-muted-strong">
            Real systems shipped for real businesses. What it does, the result, and what it runs on.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {work.map((w, i) => (
            <article
              key={w.title}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="card-shine reveal-on-scroll group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card/80 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 md:p-8"
            >
              {/* Top: icon + status, then stars */}
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-bg-soft text-accent transition-all duration-300 group-hover:scale-110 group-hover:border-accent/40 group-hover:bg-accent-soft">
                  {ICONS[w.icon]}
                </div>
                <StatusBadge status={w.status} state={w.state} />
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <p className="text-[11px] font-mono uppercase tracking-wider text-muted">{w.sector}</p>
                {w.rating && <Stars n={w.rating} />}
              </div>

              <h3 className="mt-2 text-2xl font-extrabold leading-tight text-white md:text-[1.7rem]">
                {w.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-strong">{w.summary}</p>

              {/* Result highlight */}
              <div className="mt-5 flex items-start gap-2.5 rounded-2xl border border-accent/20 bg-accent-soft px-4 py-3">
                <svg className="mt-0.5 shrink-0 text-accent" width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L4.5 13H11l-1 9 8.5-11H12l1-9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
                <p className="text-sm font-semibold text-white">{w.result}</p>
              </div>

              {w.quote && (
                <blockquote className="mt-4 border-l-2 border-accent/50 pl-4 text-sm italic text-muted-strong">
                  “{w.quote}”
                  {w.author && <footer className="mt-1 text-xs font-semibold not-italic text-white">— {w.author}</footer>}
                </blockquote>
              )}

              <ul className="mt-6 flex flex-wrap gap-2 border-t border-border-soft pt-5">
                {w.stack.map((t) => (
                  <li key={t} className="rounded-full border border-border bg-bg px-2.5 py-1 text-[11px] font-semibold text-silver">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="reveal-on-scroll mt-8 flex flex-col gap-4 rounded-3xl border border-accent/30 bg-gradient-to-br from-accent-soft to-transparent p-7 md:flex-row md:items-center md:justify-between md:p-9">
          <p className="max-w-2xl text-base text-muted-strong md:text-lg">
            <span className="font-extrabold text-white">Want something like this?</span>{' '}
            Tell me the workflow eating your team&apos;s time. I&apos;ll tell you straight whether
            automation is worth it — and exactly how I&apos;d build it.
          </p>
          <a href="/contact/" className="btn-primary shrink-0 self-start md:self-center">
            Start a conversation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
