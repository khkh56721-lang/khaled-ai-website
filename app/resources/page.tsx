'use client';

import { useState } from 'react';
import ResourceCard from '@/components/ResourceCard';
import LeadModal from '@/components/LeadModal';

const resources = [
  {
    title: 'Lead Gen Automation Template',
    description:
      'A ready-to-import Make.com scenario: scrape leads, enrich with Hunter, send personalized emails. Same template I use for client outreach.',
    type: 'Template' as const,
  },
  {
    title: 'Cold Email Sequence That Got Me Clients',
    description:
      '5-email sequence with hooks, CTAs, and follow-up logic. Plain text, copy-paste into Instantly or Lemlist. Worked on Upwork B2B.',
    type: 'Template' as const,
  },
  {
    title: 'Voice Agent Setup Guide',
    description:
      'Step-by-step PDF — how to ship a Vapi voice agent that books appointments, including prompts, tools setup, and the gotchas.',
    type: 'Guide' as const,
  },
  /* TODO: add more resources as they're built. */
];

export default function ResourcesPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <section className="container-tight pb-12 pt-12 md:pt-20">
        <p className="eyebrow">Resources</p>
        <h1 className="heading-xl mt-4 max-w-3xl">
          Free templates.<br />
          <span className="text-accent">Real workflows.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-muted-strong">
          The same Make.com scenarios, email sequences, and Vapi setups I use for paying clients.
          Drop your email — I&apos;ll send them over.
        </p>
      </section>

      <section className="container-tight pb-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <ResourceCard
              key={r.title}
              title={r.title}
              description={r.description}
              type={r.type}
              onClaim={setActive}
            />
          ))}
        </div>
      </section>

      <LeadModal open={active !== null} resource={active} onClose={() => setActive(null)} />
    </>
  );
}
