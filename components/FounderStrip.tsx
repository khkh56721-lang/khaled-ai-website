import Image from 'next/image';
import Link from 'next/link';

/*
 * "Human behind the machine" — founder spotlight placed inline on the home page
 * so a visitor meets Khaled without clicking through to /about. Mirrors the
 * blacksmith-ind.com founder section: photo + first-person bio + skill chips.
 * Photo: /public/khaled.jpg (same asset as the About page).
 */
const skills = [
  'AI Automation',
  'Voice AI Agents',
  'Lead-Gen Systems',
  'Make.com / n8n',
  'Claude & GPT APIs',
  'Vapi',
];

export default function FounderStrip() {
  return (
    <section className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[360px] w-[640px] rounded-full bg-accent-glow opacity-30 blur-[170px]"
      />
      <div className="container-tight relative grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
        {/* Photo */}
        <div className="reveal-on-scroll mx-auto w-full max-w-sm md:mx-0">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-accent/40 via-accent/10 to-transparent blur-2xl"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card">
              <Image
                src="/khaled.jpg"
                alt="Khaled Akhyarhoum"
                fill
                className="object-cover"
              />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-border bg-bg/80 px-3.5 py-2 text-xs font-semibold backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Founder · Operator
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-border bg-bg/85 px-5 py-4 text-sm backdrop-blur">
                <p className="text-base font-extrabold text-white">Khaled Akhyarhoum</p>
                <p className="mt-1 text-xs text-muted">AI Automation Engineer · La Rochelle → Global</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="reveal-on-scroll" style={{ transitionDelay: '120ms' }}>
          <p className="eyebrow">The human behind the systems</p>
          <h2 className="heading-md mt-3">
            One operator who <span className="text-gradient">actually ships.</span>
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-strong md:text-lg">
            <p>
              I&apos;m Khaled — a mechatronics engineering student who got tired of
              theory and started building real automation for real businesses. Voice
              agents that take live calls, pipelines that move data while you sleep,
              workflows that do hours of work in seconds.
            </p>
            <p>
              When you reach out, you talk to the person who builds it. No account
              managers, no handoffs, no agency layers between you and the work.
            </p>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {skills.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-silver"
              >
                {s}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about" className="btn-secondary">
              Read the full story
            </Link>
            <a
              href="https://www.youtube.com/@khaledakhyarhoum"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
