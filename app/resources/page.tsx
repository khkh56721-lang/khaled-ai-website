'use client';

import { useState } from 'react';
import ResourceCard from '@/components/ResourceCard';
import LeadModal from '@/components/LeadModal';

type Resource = {
  title: string;
  description: string;
  type: 'Template' | 'Guide' | 'Tool' | 'Skill';
  downloadUrl?: string;
  externalUrl?: string;
};

const resources: Resource[] = [
  {
    title: 'The /upwork-proposal Skill',
    description:
      'The exact Claude Code skill I built on camera — it writes a 120-word Upwork proposal in my voice from any job post. Drop it in ~/.claude/skills/ and trigger it with /upwork-proposal. Yours free.',
    type: 'Skill',
    downloadUrl: '/upwork-proposal.skill',
  },
  {
    title: 'Lead Gen Automation Template',
    description:
      'The exact Make.com lead-gen system I build for clients — capture, enrich, score, and route leads to your CRM and inbox automatically. Full step-by-step build, no fluff.',
    type: 'Template',
    externalUrl:
      'https://humorous-primrose-a0c.notion.site/Lead-Gen-Automation-Template-3747db19689e80ca813bc903a8115b38',
  },
  {
    title: 'Cold Email Sequence',
    description:
      'My 4-email B2B cold sequence — real copy you can paste into Instantly today, plus why each line works and the deliverability setup that keeps you out of spam.',
    type: 'Template',
    externalUrl:
      'https://humorous-primrose-a0c.notion.site/Cold-Email-Sequence-3747db19689e814bb858e7c10f73b471',
  },
  {
    title: 'Voice Agent Setup Guide',
    description:
      'How I ship Vapi voice agents that book appointments 24/7 — the system prompt, the Make.com handoff, and the gotchas. Same setup I built for real clients.',
    type: 'Guide',
    externalUrl:
      'https://humorous-primrose-a0c.notion.site/Voice-Agent-Setup-Guide-3747db19689e81278720d0368a793193',
  },
  /* TODO: add more resources as they're built. */
];

export default function ResourcesPage() {
  const [active, setActive] = useState<Resource | null>(null);

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
              onClaim={() => setActive(r)}
            />
          ))}
        </div>
      </section>

      <LeadModal open={active !== null} resource={active} onClose={() => setActive(null)} />
    </>
  );
}
