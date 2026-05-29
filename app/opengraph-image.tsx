import { ImageResponse } from 'next/og';

export const alt = 'Khaled AI — AI systems for fast-moving B2B companies';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Required for `output: 'export'` — pre-render at build time, never on request.
export const dynamic = 'force-static';

/*
 * Open Graph + Twitter card image, generated at build time by next/og.
 * Matches brand-kit: #161616 base, #4ADE80 mint accent, big bold headline.
 * Next.js auto-wires this into metadata for any page that doesn't define its own.
 *
 * Satori quirk: every div with multiple children needs explicit display:flex.
 * Text nodes count as children. Wrap each text chunk in its own <span>.
 */
export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'radial-gradient(ellipse 60% 80% at 80% 30%, rgba(74,222,128,0.20), transparent 60%), #111111',
          color: '#F5F5F5',
        }}
      >
        {/* Top row — logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              width: 56,
              height: 56,
              borderRadius: 12,
              background: '#4ADE80',
              color: '#111111',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 32,
              fontWeight: 900,
            }}
          >
            K
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: '0.08em',
            }}
          >
            <span>KHALED</span>
            <span style={{ color: '#4ADE80' }}>AI</span>
          </div>
        </div>

        {/* Headline + subhead */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              fontSize: 84,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              maxWidth: 1040,
              gap: '0 20px',
            }}
          >
            <span>AI systems for</span>
            <span style={{ color: '#4ADE80', fontStyle: 'italic' }}>fast-moving</span>
            <span>B2B companies.</span>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 30,
              color: '#B5B5B5',
              maxWidth: 1000,
              lineHeight: 1.3,
            }}
          >
            Voice agents · Automation workflows · AI lead-gen — shipped end-to-end.
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: '#8A8A8A',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', width: 8, height: 8, borderRadius: 999, background: '#4ADE80' }} />
            <span>khaled-ai.com</span>
          </div>
          <div style={{ display: 'flex' }}>
            <span>Building AI Systems · Teaching What Actually Works.</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
