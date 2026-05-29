'use client';

import { useEffect, useRef, useState } from 'react';

const phases = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'Free 30 minutes. We map your current workflow, find the highest-leverage automation, and decide if there is a real fit.',
    bullets: ['Audit current process', 'Spot the automation wins', 'No-pressure scope'],
  },
  {
    num: '02',
    title: 'Scoping & Proposal',
    desc: 'We send a clear scope: what gets built, the stack, the timeline, the deliverables. Fixed price — no surprise invoices.',
    bullets: ['Itemized deliverables', 'Stack & timeline', 'Fixed pricing'],
  },
  {
    num: '03',
    title: 'Build & Deliver',
    desc: 'We build, test, and hand it over with a Loom walkthrough so your team owns the system. Support window included.',
    bullets: ['Built in 1–3 weeks', 'Loom walkthrough', '14-day support window'],
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  // 0 → no activation, 1 → fully scrolled past. Bidirectional.
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      // Activation window: starts when section's top crosses 75% of viewport,
      // completes when section's bottom crosses 25% of viewport.
      const startY = vh * 0.75;
      const endY = vh * 0.25;
      const span = rect.height + (startY - endY);
      const scrolled = startY - rect.top;
      const p = Math.max(0, Math.min(1, scrolled / span));
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Each phase activates as its segment of progress is reached.
  const phaseProgress = (idx: number) => {
    const segment = 1 / phases.length;
    const local = (progress - idx * segment) / segment;
    return Math.max(0, Math.min(1, local));
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent-glow blur-[200px] opacity-30"
      />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mx-auto justify-center">How it works</p>
          <h2 className="heading-lg mt-4">
            From call to <span className="text-accent">live system.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-strong md:text-lg">
            Three phases. Clear deliverables at each step. No vague hourly retainers.
          </p>
        </div>

        <div className="relative mt-20 md:mt-28">
          {/* Vertical rail */}
          <div className="pointer-events-none absolute left-7 top-2 bottom-2 w-px overflow-hidden bg-border md:left-1/2 md:-translate-x-1/2">
            <div
              className="absolute inset-x-0 top-0 bg-gradient-to-b from-accent via-accent to-accent transition-[height] duration-300 ease-out"
              style={{
                height: `${progress * 100}%`,
                boxShadow: '0 0 14px rgba(74,222,128,0.65)',
              }}
            />
          </div>

          <ol className="space-y-16 md:space-y-28">
            {phases.map((p, idx) => {
              const local = phaseProgress(idx);
              const isActive = local > 0.15;
              const isLeft = idx % 2 === 0;

              return (
                <li
                  key={p.num}
                  className="relative grid items-center gap-6 md:grid-cols-2 md:gap-16"
                >
                  {/* Node on rail */}
                  <span
                    className={`absolute left-3.5 grid h-10 w-10 place-items-center rounded-full border-2 transition-all duration-500 md:left-1/2 md:-translate-x-1/2 ${
                      isActive
                        ? 'scale-110 border-accent bg-accent text-bg shadow-[0_0_38px_rgba(74,222,128,0.65)]'
                        : 'border-border bg-card text-muted'
                    }`}
                    style={{ top: '24px' }}
                  >
                    <span className="text-xs font-extrabold">{p.num}</span>
                  </span>

                  {/* Card */}
                  <div
                    className={`pl-20 md:pl-0 ${
                      isLeft ? 'md:col-start-1 md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden rounded-3xl border bg-card/80 p-8 transition-all duration-500 md:p-12 ${
                        isActive
                          ? 'border-accent/50 shadow-[0_20px_70px_rgba(74,222,128,0.10)]'
                          : 'border-border'
                      }`}
                    >
                      <p
                        className={`font-mono text-xs uppercase tracking-[0.25em] transition-colors ${
                          isActive ? 'text-accent' : 'text-muted'
                        }`}
                      >
                        Phase {p.num}
                      </p>
                      <h3 className="mt-4 text-3xl font-extrabold md:text-4xl">{p.title}</h3>
                      <p className="mt-4 text-base leading-relaxed text-muted-strong md:text-lg">
                        {p.desc}
                      </p>
                      <ul
                        className={`mt-7 flex flex-col gap-2.5 ${
                          isLeft ? 'md:items-end' : ''
                        }`}
                      >
                        {p.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2 text-sm text-white">
                            <span
                              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                                isActive ? 'bg-accent' : 'bg-muted'
                              }`}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer column to keep alternating layout on md+ */}
                  <div className="hidden md:block" />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
