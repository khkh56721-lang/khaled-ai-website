import AnimatedNumber from './AnimatedNumber';

const items = [
  {
    title: 'AI Automation Systems',
    desc: 'Custom Make.com and n8n pipelines that connect your tools, enrich your data, and run your ops on autopilot — built around how your team actually works.',
    stat: { value: '40+', label: 'hours saved / month' },
    tag: 'Workflows',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
        <circle cx="10" cy="14" r="3" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="38" cy="14" r="3" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="24" cy="34" r="3" stroke="currentColor" strokeWidth="2.5" />
        <path d="M13 14h22M11 17l11 14M37 17L26 31" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Voice AI Agents',
    desc: 'Vapi voice agents that book appointments, qualify leads, and handle after-hours calls 24/7 — already live for clients in real estate, retail, and services.',
    stat: { value: '24/7', label: 'live coverage' },
    tag: 'Voice',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
        <rect x="18" y="6" width="12" height="20" rx="6" stroke="currentColor" strokeWidth="2.5" />
        <path d="M10 22a14 14 0 0028 0M24 36v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'AI Lead Gen & Outreach',
    desc: 'End-to-end B2B lead-gen pipelines: scrape, enrich, personalize, send — powered by Claude and Instantly. Hands-off pipeline that drives meetings into your calendar.',
    stat: { value: '200+', label: 'meetings booked' },
    tag: 'Growth',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
        <path d="M6 24l18-18 18 18-18 18-18-18z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M18 24l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'AI Strategy & Consulting',
    desc: 'Not sure where AI fits? I audit your workflows, find the highest-ROI automations, and hand you a clear roadmap — then you build it yourself or have me ship it for you.',
    stat: { value: '30', label: 'min roadmap call' },
    tag: 'Consulting',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="9" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="2.6" fill="currentColor" />
      </svg>
    ),
  },
];

export default function WhatIDo() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="reveal-on-scroll mx-auto max-w-3xl text-center">
          <p className="eyebrow mx-auto justify-center">What we do</p>
          <h2 className="heading-lg mt-4">
            Four ways we drive <span className="text-gradient">real revenue.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-strong md:text-lg">
            From the first strategy call to systems running in production — built for B2B teams
            that need to move faster than their stack lets them.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-7">
          {items.map((item, i) => (
            <article
              key={item.title}
              style={{ transitionDelay: `${i * 90}ms` }}
              className="reveal-on-scroll group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card/80 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 md:p-10"
            >
              {/* Accent glow that fades in on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-accent-glow opacity-0 blur-[120px] transition-opacity duration-500 group-hover:opacity-100"
              />

              {/* Top: icon + tag */}
              <div className="relative flex items-center justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-border bg-bg-soft text-accent transition-all duration-300 group-hover:scale-110 group-hover:border-accent/40 group-hover:bg-accent-soft">
                  {item.icon}
                </div>
                <span className="rounded-full border border-border bg-bg-soft px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-muted">
                  {item.tag}
                </span>
              </div>

              <h3 className="relative mt-8 text-2xl font-extrabold leading-tight md:text-3xl">
                {item.title}
              </h3>
              <p className="relative mt-4 flex-1 text-sm leading-relaxed text-muted-strong md:text-base">
                {item.desc}
              </p>

              {/* Stat strip — animated count-up */}
              <div className="relative mt-8 flex items-baseline justify-between gap-3 border-t border-border pt-6">
                <AnimatedNumber
                  value={item.stat.value}
                  className="text-4xl font-extrabold tracking-tight text-gradient md:text-5xl"
                />
                <span className="text-right text-xs font-semibold uppercase tracking-wider text-muted">
                  {item.stat.label}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
