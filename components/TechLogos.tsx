import type { ReactNode } from 'react';

/*
 * Real brand logos.
 * - Most logos pull live from simple-icons CDN (https://cdn.simpleicons.org).
 *   Omit `color` to use the brand's official hex. Override with `color` (no '#')
 *   for brands whose default hex is pure black/very dark (Notion, Cursor, etc.),
 *   where it would disappear on our dark background.
 * - simple-icons removed a few popular logos at the brand owner's request
 *   (OpenAI, Slack, VS Code). For those we inline the SVG via `node`. SVG paths
 *   are CC0-licensed from older simple-icons versions.
 */

/* ---------- Inline SVGs (for tools removed from simple-icons) ---------- */

const OpenAISvg = (
  <svg viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.998-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.142-.08 4.778-2.758a.795.795 0 0 0 .393-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.495 4.493zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.778.778 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.764.764 0 0 0 .388.677l5.815 3.354-2.02 1.168a.076.076 0 0 1-.071 0L3.95 13.864a4.504 4.504 0 0 1-1.61-5.969zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.104v-5.677a.79.79 0 0 0-.393-.681zm2.011-3.023l-.142-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.41 9.23V6.897a.066.066 0 0 1 .028-.062l4.831-2.787a4.5 4.5 0 0 1 6.68 4.66zM8.307 12.863l-2.02-1.164a.08.08 0 0 1-.038-.057V6.074a4.5 4.5 0 0 1 7.376-3.454l-.142.08L8.704 5.46a.795.795 0 0 0-.393.682zm1.098-2.366l2.602-1.5 2.607 1.5v3l-2.597 1.5-2.607-1.5z" />
  </svg>
);

const SlackSvg = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A" />
    <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0" />
    <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D" />
    <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E" />
  </svg>
);

/* ---------- Tool list ---------- */

export type ToolEntry = {
  name: string;
  slug?: string;       // simple-icons slug. Omit when using an inline `node`.
  color?: string;      // hex (no '#'). Omit = brand default.
  node?: ReactNode;    // inline SVG when simple-icons CDN doesn't have it.
  fallback?: string;   // last-resort monogram letter.
};

// Curated to the AI + automation + voice + CRM tools we actually ship with.
// Dev/infra logos (IDEs, hosting, DBs) removed on purpose — clients care about
// the AI stack, not the build tooling.
export const TOOLS: ToolEntry[] = [
  { name: 'Make',          slug: 'make' },                         // purple
  { name: 'n8n',           slug: 'n8n' },                          // pink
  { name: 'Zapier',        slug: 'zapier' },                       // orange
  { name: 'Claude Code',   slug: 'anthropic' },                    // orange
  { name: 'OpenAI',        node: OpenAISvg },                      // inline (CDN removed)
  { name: 'Gemini',        slug: 'googlegemini' },                 // blue
  { name: 'Perplexity',    slug: 'perplexity' },                   // teal
  { name: 'Vapi',          fallback: 'V' },                        // voice AI
  { name: 'ElevenLabs',    slug: 'elevenlabs',  color: 'ffffff' }, // voice AI
  { name: 'LiveKit',       slug: 'livekit',     color: 'ffffff' }, // voice infra
  { name: 'HubSpot',       slug: 'hubspot' },                      // CRM
  { name: 'GoHighLevel',   fallback: 'GHL' },                      // CRM (no CDN logo)
  { name: 'Slack',         node: SlackSvg },                       // inline multicolor (CDN removed)
  { name: 'Airtable',      slug: 'airtable' },                     // multicolor
  { name: 'Instantly',     fallback: 'I' },                        // outreach
];

type LogoProps = { tool: ToolEntry; className?: string };

export function ToolLogo({ tool, className = 'h-10 w-10' }: LogoProps) {
  if (tool.node) {
    return <span className={`${className} block`}>{tool.node}</span>;
  }
  if (!tool.slug) {
    return (
      <span
        className={`${className} grid place-items-center rounded-xl border border-border-soft bg-card text-xl font-extrabold text-silver`}
        aria-label={tool.name}
      >
        {tool.fallback}
      </span>
    );
  }
  const url = tool.color
    ? `https://cdn.simpleicons.org/${tool.slug}/${tool.color}`
    : `https://cdn.simpleicons.org/${tool.slug}`;
  return (
    <img
      src={url}
      alt={tool.name}
      width={40}
      height={40}
      className={`${className} object-contain`}
      loading="lazy"
    />
  );
}
