const faqs = [
  {
    q: 'What tools do you work with?',
    a: 'Make.com, n8n, Vapi (voice agents), Claude API, OpenAI, Instantly, Airtable, Node.js, Python. I default to no-code when it fits and write custom code when it pays off.',
  },
  {
    q: 'How long does a project take?',
    a: 'Most builds take 1–3 weeks from scoped proposal to live system. Voice agents lean longer (testing real call flows). Simple workflows can ship in a week.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes — exclusively. I work with English-speaking B2B clients globally. Payment via Wise. I&apos;m based in France but operate worldwide.',
  },
  {
    q: "What's your pricing?",
    a: 'Fixed-price per project, scoped after the discovery call. No hourly retainers. I share pricing once I understand what you actually need so the number isn&apos;t guesswork.',
  },
  {
    q: 'How do I get started?',
    a: 'Book a free 30-min discovery call on the contact page. We map your workflow, see if there&apos;s a real fit, and I send a scoped proposal within 48 hours.',
  },
];

export default function FAQ() {
  return (
    <section className="container-tight py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="eyebrow">FAQ</p>
        <h2 className="heading-md mt-3">
          Common questions, <span className="text-accent">straight answers.</span>
        </h2>
      </div>
      <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
        {faqs.map((f) => (
          <details key={f.q} className="group p-6 md:p-7">
            <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-extrabold text-white">
              {f.q}
              <span className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted transition-transform group-open:rotate-45 group-open:border-accent group-open:text-accent">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-strong">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
