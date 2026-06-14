import Link from 'next/link';
import { bookingUrl, calAttrs } from '@/lib/booking';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="aurora pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[1000px] -translate-x-1/2 rounded-full bg-accent/15 blur-[160px]"
      />
      <div className="container-tight relative flex flex-col items-center py-24 text-center md:py-32">
        <span className="reveal reveal-1 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-semibold text-muted-strong backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          AI Automation · Voice Agents · B2B Growth
        </span>

        <h1 className="heading-xl reveal reveal-2 mt-7 max-w-5xl">
          AI systems for
          <span className="text-gradient"> fast-moving </span>
          B2B companies.
        </h1>

        <p className="reveal reveal-3 mt-7 max-w-2xl text-lg text-muted-strong">
          We build voice agents, automation workflows, and AI lead-gen systems
          that close deals — so your team can focus on growth, not busywork.
        </p>

        <div className="reveal reveal-4 mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href={bookingUrl} {...calAttrs} className="btn-primary">
            Get your free AI roadmap
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <Link href="/#work" className="btn-secondary">
            See the work
          </Link>
        </div>

        <ul className="reveal reveal-5 mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-wider text-muted">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Voice agents in production
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            B2B workflows shipped
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Working globally · Small & mid-size teams
          </li>
        </ul>
      </div>
    </section>
  );
}
