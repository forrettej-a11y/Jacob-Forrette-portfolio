/**
 * Contact form endpoint.
 *
 * Delivery: Resend (https://resend.com) via its REST API — no extra npm package required.
 * Set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL (see .env.example / README).
 * Until those are set, the endpoint validates submissions and responds 503 with a clear message.
 *
 * Spam protection: honeypot field, minimum fill time, server-side validation,
 * and a best-effort per-IP rate limit.
 */
import { NextResponse } from "next/server";
import { validateContact, type ContactPayload } from "@/lib/contact";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const MIN_FILL_MS = 3000;
// In-memory and per-instance: good enough to stop casual abuse on a portfolio.
// For stricter limits, swap in a shared store (e.g. Upstash Redis) or add Cloudflare Turnstile.
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(req: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  // Honeypot or too-fast submission → pretend success so bots learn nothing.
  const tooFast = typeof body.startedAt === "number" && Date.now() - body.startedAt < MIN_FILL_MS;
  if (body.website || tooFast) {
    return NextResponse.json({ ok: true });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, message: "Too many messages — please try again later." }, { status: 429 });
  }

  const errors = validateContact(body);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, message: "Please correct the highlighted fields.", errors }, { status: 422 });
  }

  const name = body.name!.trim();
  const email = body.email!.trim();
  const organization = (body.organization ?? "").trim();
  const topic = body.topic!;
  const message = body.message!.trim();

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] Delivery not configured. Submission received:", { name, email, organization, topic });
    }
    return NextResponse.json(
      { ok: false, message: "The contact form isn't connected to an inbox yet. Please reach out via LinkedIn in the meantime." },
      { status: 503 },
    );
  }

  const html = `
    <h2 style="font-family:sans-serif">New portfolio message — ${escapeHtml(topic)}</h2>
    <p style="font-family:sans-serif"><strong>Name:</strong> ${escapeHtml(name)}<br/>
    <strong>Email:</strong> ${escapeHtml(email)}<br/>
    ${organization ? `<strong>Organization:</strong> ${escapeHtml(organization)}<br/>` : ""}</p>
    <pre style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(message)}</pre>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `Portfolio: ${topic} — ${name}`,
        html,
        text: `${name} <${email}>${organization ? ` (${organization})` : ""}\nTopic: ${topic}\n\n${message}`,
      }),
    });
    if (!res.ok) {
      console.error("[contact] Resend error", res.status, await res.text().catch(() => ""));
      return NextResponse.json({ ok: false, message: "Your message couldn't be delivered. Please try again later." }, { status: 502 });
    }
  } catch (err) {
    console.error("[contact] Delivery failed", err);
    return NextResponse.json({ ok: false, message: "Your message couldn't be delivered. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
