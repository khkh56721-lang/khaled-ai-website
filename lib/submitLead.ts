export type LeadPayload = {
  type: 'resource' | 'contact';
  name: string;
  email: string;
  resource?: string;
  message?: string;
};

export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean }> {
  const url = process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL;

  if (!url) {
    // TODO: set NEXT_PUBLIC_MAKE_WEBHOOK_URL in .env.local once the Make.com scenario exists.
    console.warn('[submitLead] NEXT_PUBLIC_MAKE_WEBHOOK_URL is not set. Payload:', payload);
    return { ok: true };
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, submitted_at: new Date().toISOString() }),
    });
    return { ok: res.ok };
  } catch (err) {
    console.error('[submitLead] webhook error:', err);
    return { ok: false };
  }
}
